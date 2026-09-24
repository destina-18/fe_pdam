import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-20 flex items-center justify-between">

            {/* BRAND */}
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-blue-700">
                PDAM Tirta Sejahtera
              </h1>

              <p className="text-xs text-slate-500 mt-0.5">
                Perusahaan Daerah Air Minum
              </p>
            </div>

            {/* LOGIN BUTTON */}
            <div className="flex items-center gap-3">

              {/* LOGIN ADMIN */}
              <Link
                href="/sign-in?role=ADMIN"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition"
              >
                Login Admin
              </Link>

              {/* LOGIN CUSTOMER */}
              <Link
                href="/sign-in?role=CUSTOMER"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 transition"
              >
                Login Customer
              </Link>

            </div>
          </div>
        </div>
      </header>


      {/* ================= MAIN ================= */}
      <main>

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 text-white">

          {/* DECORATION */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">

            <div className="max-w-3xl mx-auto text-center">

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">

                <span className="w-2 h-2 rounded-full bg-sky-200" />

                <span className="text-sm font-medium text-blue-50">
                  Melayani Masyarakat dengan Sepenuh Hati
                </span>

              </div>


              {/* TITLE */}
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Layanan Air Bersih

                <span className="block text-sky-100 mt-2">
                  untuk Kehidupan Lebih Baik
                </span>
              </h2>


              {/* DESCRIPTION */}
              <p className="mt-7 text-base md:text-lg text-blue-100 leading-8 max-w-2xl mx-auto">
                PDAM Tirta Sejahtera berkomitmen menyediakan layanan air bersih
                yang berkualitas, aman, higienis, dan berkelanjutan bagi
                seluruh masyarakat.
              </p>


              {/* LOGIN BUTTON */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                {/* ADMIN */}
                <Link
                  href="/sign-in?role=ADMIN"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-blue-700 font-semibold shadow-lg shadow-blue-900/10 hover:bg-blue-50 transition"
                >
                  Login Admin
                </Link>

                {/* CUSTOMER */}
                <Link
                  href="/sign-in?role=CUSTOMER"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition"
                >
                  Login Customer
                </Link>

              </div>

            </div>
          </div>
        </section>


        {/* ================= STATISTICS ================= */}
        <section className="relative -mt-10 z-10 px-6">

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100">

            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">

              {/* ITEM 1 */}
              <div className="px-5 py-7 text-center">

                <p className="text-2xl md:text-3xl font-bold text-blue-700">
                  24/7
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Dukungan Layanan
                </p>

              </div>


              {/* ITEM 2 */}
              <div className="px-5 py-7 text-center">

                <p className="text-2xl md:text-3xl font-bold text-blue-700">
                  100%
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Komitmen Pelayanan
                </p>

              </div>


              {/* ITEM 3 */}
              <div className="px-5 py-7 text-center">

                <p className="text-2xl md:text-3xl font-bold text-blue-700">
                  Aman
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Air Berkualitas
                </p>

              </div>


              {/* ITEM 4 */}
              <div className="px-5 py-7 text-center">

                <p className="text-2xl md:text-3xl font-bold text-blue-700">
                  Terpercaya
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Untuk Masyarakat
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* ================= TENTANG ================= */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* TEXT */}
            <div>

              <div className="flex items-center gap-3 mb-5">

                <span className="w-10 h-1 rounded-full bg-blue-600" />

                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Tentang Kami
                </span>

              </div>


              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                Menghadirkan air bersih

                <span className="block text-blue-600 mt-1">
                  untuk kebutuhan masyarakat
                </span>
              </h3>


              <p className="mt-6 text-slate-600 leading-8">
                PDAM Tirta Sejahtera merupakan perusahaan daerah yang bergerak
                dalam penyediaan dan pengelolaan air bersih bagi masyarakat.
                Kami berfokus pada pelayanan yang profesional, pengelolaan
                sumber daya air yang berkelanjutan, serta peningkatan kualitas
                layanan.
              </p>


              <p className="mt-4 text-slate-600 leading-8">
                Dengan mengutamakan kebutuhan pelanggan, kami terus berupaya
                memberikan pelayanan yang cepat, aman, dan dapat diandalkan.
              </p>

            </div>


            {/* VISUAL CARD */}
            <div className="relative">

              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-2xl bg-sky-100" />

              <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full bg-blue-50" />


              <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-sky-400 p-8 md:p-10 text-white shadow-xl shadow-blue-200">

                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/15 border border-white/20 mb-8">

                  <svg
                    className="w-7 h-7"
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


                <h4 className="text-2xl font-bold">
                  Air Bersih untuk Semua
                </h4>


                <p className="mt-4 text-blue-100 leading-7">
                  Kami percaya bahwa akses terhadap air bersih merupakan bagian
                  penting dalam menciptakan kehidupan masyarakat yang sehat dan
                  berkualitas.
                </p>


                <div className="mt-8 pt-6 border-t border-white/20">

                  <p className="text-sm text-blue-100">
                    Komitmen kami
                  </p>

                  <p className="mt-1 font-semibold">
                    Profesional • Aman • Berkelanjutan
                  </p>

                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ================= LAYANAN ================= */}
        <section className="bg-white border-y border-slate-100">

          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

            {/* TITLE */}
            <div className="text-center max-w-2xl mx-auto">

              <div className="flex items-center justify-center gap-3 mb-4">

                <span className="w-8 h-1 rounded-full bg-blue-600" />

                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Layanan
                </span>

                <span className="w-8 h-1 rounded-full bg-blue-600" />

              </div>


              <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
                Layanan PDAM
              </h3>


              <p className="mt-5 text-slate-600 leading-7">
                Berbagai layanan untuk membantu memenuhi kebutuhan air bersih
                dan memberikan pengalaman pelayanan yang lebih baik.
              </p>

            </div>


            {/* SERVICE CARDS */}
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* CARD 1 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition duration-300">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">

                  <svg
                    className="w-6 h-6"
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

                <h4 className="mt-6 text-lg font-bold text-slate-800">
                  Penyediaan Air Bersih
                </h4>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Menyediakan kebutuhan air bersih yang aman dan berkualitas
                  untuk masyarakat.
                </p>

              </div>


              {/* CARD 2 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition duration-300">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M4 18h16M5 18V8l7-4 7 4v10M9 18v-5h6v5"
                    />
                  </svg>

                </div>

                <h4 className="mt-6 text-lg font-bold text-slate-800">
                  Distribusi Air
                </h4>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Pengelolaan jaringan distribusi untuk memastikan air dapat
                  tersalurkan dengan baik.
                </p>

              </div>


              {/* CARD 3 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition duration-300">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M8 10h8M8 14h5M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>

                </div>

                <h4 className="mt-6 text-lg font-bold text-slate-800">
                  Pelayanan Pelanggan
                </h4>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Memberikan informasi dan pelayanan yang responsif kepada
                  seluruh pelanggan.
                </p>

              </div>


              {/* CARD 4 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition duration-300">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 9v4m0 4h.01M10.3 4.2l-7 12A2 2 0 005 19h14a2 2 0 001.7-2.8l-7-12a2 2 0 00-3.4 0z"
                    />
                  </svg>

                </div>

                <h4 className="mt-6 text-lg font-bold text-slate-800">
                  Pengaduan Gangguan
                </h4>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Penanganan gangguan dan keluhan untuk menjaga kualitas
                  pelayanan air.
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* ================= VISI MISI ================= */}
        <section className="bg-slate-50">

          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

            <div className="text-center max-w-2xl mx-auto mb-14">

              <div className="flex items-center justify-center gap-3 mb-4">

                <span className="w-8 h-1 rounded-full bg-blue-600" />

                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Komitmen Kami
                </span>

                <span className="w-8 h-1 rounded-full bg-blue-600" />

              </div>


              <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
                Visi & Misi
              </h3>

            </div>


            <div className="grid md:grid-cols-2 gap-7">

              {/* VISI */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold">
                    V
                  </div>

                  <div>

                    <p className="text-sm text-blue-600 font-semibold">
                      Arah Perusahaan
                    </p>

                    <h4 className="text-2xl font-bold text-slate-800">
                      Visi
                    </h4>

                  </div>

                </div>


                <p className="mt-7 text-slate-600 leading-8">
                  Menjadi perusahaan penyedia air bersih yang terpercaya,
                  profesional, dan berkelanjutan dalam memenuhi kebutuhan
                  masyarakat.
                </p>

              </div>


              {/* MISI */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 font-bold">
                    M
                  </div>

                  <div>

                    <p className="text-sm text-sky-600 font-semibold">
                      Langkah Kami
                    </p>

                    <h4 className="text-2xl font-bold text-slate-800">
                      Misi
                    </h4>

                  </div>

                </div>


                <p className="mt-7 text-slate-600 leading-8">
                  Memberikan pelayanan air bersih yang berkualitas,
                  meningkatkan infrastruktur distribusi air, serta
                  mengutamakan kepuasan pelanggan melalui layanan yang cepat
                  dan responsif.
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* ================= CTA LOGIN ================= */}
        <section className="px-6 py-20 bg-white">

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 to-sky-500 text-white">

            <div className="px-7 py-12 md:px-14 md:py-14 text-center">

              <h3 className="text-2xl md:text-3xl font-bold">
                Akses Layanan PDAM
              </h3>


              <p className="mt-4 text-blue-100 max-w-xl mx-auto leading-7">
                Silakan masuk ke akun sesuai dengan peran Anda untuk
                mengakses layanan PDAM Tirta Sejahtera.
              </p>


              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                {/* ADMIN */}
                <Link
                  href="/sign-in?role=ADMIN"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-blue-700 font-semibold hover:bg-blue-50 transition shadow-lg"
                >
                  Login Admin
                </Link>


                {/* CUSTOMER */}
                <Link
                  href="/sign-in?role=CUSTOMER"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white font-semibold hover:bg-white/20 transition"
                >
                  Login Customer
                </Link>

              </div>

            </div>
          </div>
        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* BRAND */}
            <div>

              <h4 className="text-lg font-bold">
                PDAM Tirta Sejahtera
              </h4>

              <p className="mt-2 text-sm text-slate-400 max-w-md leading-6">
                Penyedia layanan air bersih yang berkomitmen memberikan
                pelayanan profesional, aman, dan berkelanjutan.
              </p>

            </div>


            {/* COPYRIGHT */}
            <div className="md:text-right">

              <p className="text-sm text-slate-400">
                Layanan Air Bersih untuk Kehidupan Lebih Baik
              </p>

              <p className="mt-2 text-sm text-slate-500">
                © 2026 PDAM Tirta Sejahtera
              </p>

            </div>

          </div>
        </div>

      </footer>

    </div>
  );
}