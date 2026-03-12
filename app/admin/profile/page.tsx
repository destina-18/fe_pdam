import { getCookies } from "@/lib/server-cookie";
import { Admin } from "@/app/types";

type ResultData = {
  success: boolean;
  message: string;
  data: Admin;
};

async function getAdminProfile(): Promise<Admin | null> {
  try {
    const token = await getCookies("accessToken");
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/admins/me`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const responseData: ResultData = await response.json();

    if (!response.ok) return null;

    return responseData.data;
  } catch {
    return null;
  }
}

export default async function AdminProfilePage() {
  const adminData = await getAdminProfile();

  if (!adminData) {
    return (
      <div className="min-h-screen bg-slate-100 flex justify-center pt-24">
        <div className="bg-red-50 text-red-600 px-6 py-4 rounded-lg shadow">
          Admin data tidak ditemukan
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pt-16 px-6 flex justify-center">

      <div className="w-full max-w-4xl">

        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-sm border p-8 mb-6">

          <div className="flex items-center gap-6">

            <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
              {adminData.name.charAt(0)}
            </div>

            <div className="flex-1">

              <h1 className="text-2xl font-bold text-gray-900">
                {adminData.name}
              </h1>

              <div className="flex items-center gap-3 mt-1">

                <span className="text-sm">
                  @{adminData.user.username}
                </span>

                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md font-medium">
                  ADMIN
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* PROFILE DETAILS */}
        <div className="bg-white rounded-2xl shadow-sm border p-8">

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Informasi Admin
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-gray-500">Nama Lengkap</p>
              <p className="font-medium text-gray-900 mt-1">
                {adminData.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Username</p>
              <p className="font-medium text-gray-900 mt-1">
                {adminData.user.username}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Nomor Telepon</p>
              <p className="font-medium text-gray-900 mt-1">
                {adminData.phone}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium text-gray-900 mt-1">
                Administrator
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}