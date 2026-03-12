import { getCookies } from "@/lib/server-cookie";

type ListResponse<T> = {
  success: boolean;
  message: string;
  data: T[];
};

async function fetchTotalFromList<T>(url: string, token: string) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "APP-KEY": process.env.NEXT_PUBLIC_APP_KEY || "",
      Authorization: `bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) return 0;

  const json: ListResponse<T> = await res.json();
  return Array.isArray(json.data) ? json.data.length : 0;
}

async function getCounts() {
  try {
    const token = (await getCookies("accessToken")) || "";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

    const [services, customers] = await Promise.all([
      fetchTotalFromList(`${baseUrl}/services`, token),
      fetchTotalFromList(`${baseUrl}/customers`, token),
    ]);

    return { services, customers };
  } catch {
    return { services: 0, customers: 0 };
  }
}

export default async function AdminHomePage() {
  const counts = await getCounts();

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      <div className="max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard PDAM
            </h1>
            <p className="text-gray-500 mt-1">
              Sistem Pengelolaan Data Layanan dan Pelanggan
            </p>
          </div>

        </div>

        {/* WELCOME CARD */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Selamat Datang di Sistem PDAM
          </h2>

          <p className="text-blue-100 max-w-3xl leading-relaxed">
            Dashboard ini membantu admin dalam mengelola data pelanggan,
            layanan air bersih, serta berbagai informasi operasional PDAM
            secara lebih cepat dan terorganisir. Pantau data secara real-time
            dan lakukan pengelolaan layanan dengan lebih efisien.
          </p>
        </div>

        {/* STATISTICS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* SERVICES */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">

            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm">
                Total Layanan
              </p>

              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-xl">
                🛠️
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              {counts.services}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Jumlah layanan yang tersedia dalam sistem
            </p>
          </div>

          {/* CUSTOMERS */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">

            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm">
                Total Pelanggan
              </p>

              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 text-xl">
                👥
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              {counts.customers}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Total pelanggan yang terdaftar dalam sistem
            </p>
          </div>

        </div>

        {/* INFORMATION PANEL */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Informasi Sistem
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Sistem ini menyediakan ringkasan informasi utama mengenai jumlah
            layanan dan total pelanggan yang terdaftar. Admin dapat mengelola
            data pelanggan, memperbarui layanan, serta memantau perkembangan
            data secara terpusat melalui dashboard ini.
          </p>

        </div>

      </div>

    </div>
  );
}