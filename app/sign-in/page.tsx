"use client";

import { storeCookie } from "@/lib/client-cookies";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Role = "ADMIN" | "CUSTOMER";

export default function SignInPage() {
  const searchParams = useSearchParams();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("CUSTOMER");
  const [loading, setLoading] = useState(false);

  // Ambil role dari URL
  useEffect(() => {
    const roleFromUrl = searchParams.get("role");

    if (roleFromUrl === "ADMIN") {
      setRole("ADMIN");
    } else if (roleFromUrl === "CUSTOMER") {
      setRole("CUSTOMER");
    }
  }, [searchParams]);

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!username.trim()) {
      alert("Username wajib diisi.");
      return;
    }

    if (!password.trim()) {
      alert("Password wajib diisi.");
      return;
    }

    try {
      setLoading(true);

      const baseUrl = (
        process.env.NEXT_PUBLIC_BASE_API_URL || ""
      ).replace(/\/+$/, "");

      const appKey = process.env.NEXT_PUBLIC_APP_KEY || "";

      if (!baseUrl) {
        alert("NEXT_PUBLIC_BASE_API_URL belum diatur.");
        return;
      }

      if (!appKey) {
        alert("NEXT_PUBLIC_APP_KEY belum diatur.");
        return;
      }

      const url = `${baseUrl}/auth`;

      console.log("LOGIN URL:", url);
      console.log("LOGIN ROLE:", role);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "app-key": appKey,
        },
        body: JSON.stringify({
          username,
          password,
          role,
        }),
      });

      let responseData: any = null;

      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }

      console.log("LOGIN STATUS:", response.status);
      console.log("LOGIN RESPONSE:", responseData);

      if (!response.ok) {
        const errorMessage =
          responseData?.message ||
          responseData?.error ||
          responseData?.data?.message ||
          `Login gagal. Status ${response.status}`;

        alert(
          Array.isArray(errorMessage)
            ? errorMessage.join("\n")
            : errorMessage
        );

        return;
      }

      /*
       * Mendukung beberapa kemungkinan struktur
       * response dari API.
       */
      const token =
        responseData?.token ||
        responseData?.accessToken ||
        responseData?.data?.token ||
        responseData?.data?.accessToken;

      const responseRole =
        responseData?.role ||
        responseData?.data?.role ||
        role;

      /*
       * Kalau API berhasil tetapi token tidak ditemukan,
       * jangan redirect.
       */
      if (!token) {
        console.error(
          "Token tidak ditemukan dari response API:",
          responseData
        );

        alert(
          "Login berhasil, tetapi token tidak ditemukan dari response API."
        );

        return;
      }

      /*
       * Pastikan role valid.
       */
      const finalRole =
        responseRole === "ADMIN" || responseRole === "CUSTOMER"
          ? responseRole
          : role;

      /*
       * Simpan token.
       */
      storeCookie("accessToken", token, 1);

      /*
       * Simpan role.
       */
      storeCookie("role", finalRole, 1);

      /*
       * Optional:
       * Simpan juga token dan role ke localStorage
       * agar bisa digunakan oleh component client
       * jika project kamu membutuhkannya.
       */
      localStorage.setItem("accessToken", token);
      localStorage.setItem("role", finalRole);

      /*
       * Redirect berdasarkan role.
       */
      if (finalRole === "ADMIN") {
        alert(
          responseData?.message || "Login Admin berhasil."
        );

        window.location.href = "/admin/profile";
        return;
      }

      if (finalRole === "CUSTOMER") {
        alert(
          responseData?.message || "Login Customer berhasil."
        );

        window.location.href = "/customer/dashboard";
        return;
      }

      alert("Role pengguna tidak dikenali.");
    } catch (error) {
      console.error("ERROR LOGIN:", error);

      alert(
        "Tidak dapat terhubung ke server. Periksa koneksi API dan konfigurasi environment."
      );
    } finally {
      setLoading(false);
    }
  }

  function changeRole(newRole: Role) {
    setRole(newRole);

    /*
     * Mengubah URL tanpa reload halaman.
     */
    const newUrl = `/sign-in?role=${newRole}`;

    window.history.replaceState(
      null,
      "",
      newUrl
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-md">

        {/* LOGIN CARD */}
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/70 border border-blue-100 overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 px-8 py-10 text-center text-white">

            {/* ICON */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-5">

              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M12 3.5C12 3.5 5.5 10.3 5.5 15a6.5 6.5 0 0013 0C18.5 10.3 12 3.5 12 3.5z"
                />
              </svg>

            </div>

            <h1 className="text-2xl font-bold">
              PDAM Tirta Sejahtera
            </h1>

            <p className="mt-2 text-sm text-blue-100">
              Layanan Air Bersih untuk Kehidupan Lebih Baik
            </p>

          </div>

          {/* FORM AREA */}
          <div className="p-8">

            {/* TITLE */}
            <div className="mb-7">

              <h2 className="text-2xl font-bold text-slate-800">
                Selamat Datang
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Silakan masuk menggunakan akun Anda.
              </p>

            </div>

            <form
              onSubmit={handleSignIn}
              className="space-y-5"
            >

              {/* ROLE */}
              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Login sebagai
                </label>

                <div className="grid grid-cols-2 gap-3">

                  {/* ADMIN */}
                  <button
                    type="button"
                    onClick={() => changeRole("ADMIN")}
                    className={`p-3 rounded-xl border text-sm font-semibold transition ${
                      role === "ADMIN"
                        ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-slate-200 text-slate-500 hover:border-blue-300 hover:bg-blue-50/50"
                    }`}
                  >
                    Admin
                  </button>

                  {/* CUSTOMER */}
                  <button
                    type="button"
                    onClick={() => changeRole("CUSTOMER")}
                    className={`p-3 rounded-xl border text-sm font-semibold transition ${
                      role === "CUSTOMER"
                        ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-slate-200 text-slate-500 hover:border-blue-300 hover:bg-blue-50/50"
                    }`}
                  >
                    Customer
                  </button>

                </div>

              </div>

              {/* USERNAME */}
              <div>

                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Username
                </label>

                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  placeholder="Masukkan username"
                  autoComplete="username"
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-50 disabled:cursor-not-allowed transition"
                />

              </div>

              {/* PASSWORD */}
              <div>

                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Masukkan password"
                  autoComplete="current-password"
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-50 disabled:cursor-not-allowed transition"
                />

              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition"
              >
                {loading
                  ? "Memproses..."
                  : role === "ADMIN"
                  ? "Login Admin"
                  : "Login Customer"}
              </button>

            </form>

            {/* BACK TO HOME */}
            <div className="mt-7 text-center">

              <Link
                href="/"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition"
              >
                ← Kembali ke halaman utama
              </Link>

            </div>

          </div>
        </div>

        {/* FOOTER */}
        <p className="text-center text-xs text-slate-500 mt-6">
          © 2026 PDAM Tirta Sejahtera
        </p>

      </div>

    </div>
  );
}