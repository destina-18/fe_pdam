import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get('accessToken')?.value;
  const role = request.cookies.get('role')?.value;

  const isAdminPage = pathname.startsWith('/admin');
  const isCustomerPage = pathname.startsWith('/customer');
  const isLoginPage = pathname === '/sign-in';

  // 1. Jika mencoba akses halaman admin/customer tapi tidak ada token
  if ((isAdminPage || isCustomerPage) && !token) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // 2. Jika sudah login (ada token) tapi mencoba akses halaman login
  if (isLoginPage && token) {
    if (role === 'ADMIN') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    if (role === 'CUSTOMER') {
      return NextResponse.redirect(new URL('/customer/dashboard', request.url));
    }
  }

  // 3. Proteksi Role: Admin tidak boleh ke halaman customer, vice versa
  if (isAdminPage && role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/customer/dashboard', request.url));
  }

  if (isCustomerPage && role !== 'CUSTOMER') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/customer/:path*', '/sign-in'],
};