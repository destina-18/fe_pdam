import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-[72px] flex items-center justify-between">

            {/* BRAND */}
            <div>
              <h1 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
                PDAM Tirta Sejahtera
              </h1>

              <p className="text-[11px] text-slate-400 mt-0.5 tracking-wide">
                Perusahaan Daerah Air Minum
              </p>
            </div>

            {/* LOGIN BUTTON */}
            <div className="flex items-center gap-2.5">

              {/* LOGIN ADMIN */}
              <Link
                href="/sign-in?role=ADMIN"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              >
                Login Admin
              </Link>

              {/* LOGIN CUSTOMER */}
              <Link
                href="/sign-in?role=CUSTOMER"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all duration-200"
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
        <section className="relative overflow-hidden bg-white">

          {/* DECORATION */}
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-50 rounded-full blur-3xl opacity-70" />
          <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-sky-50 rounded-full blur-3xl opacity-70" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">

            <div className="max-w-3xl mx-auto text-center">

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-7 rounded-full bg-blue-50 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />

                <span className="text-xs md:text-sm font-medium text-blue-600">
                  Melayani Masyarakat dengan Sepenuh Hati
                </span>
              </div>


              {/* TITLE */}
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-slate-900">
                Layanan Air Bersih

                <span className="block text-blue-600 mt-2">
                  untuk Kehidupan Lebih Baik
                </span>
              </h2>


              {/* DESCRIPTION */}
              <p className="mt-7 text-base md:text-lg text-slate-500 leading-8 max-w-2xl mx-auto">
                PDAM Tirta Sejahtera berkomitmen menyediakan layanan air bersih
                yang berkualitas, aman, higienis, dan berkelanjutan bagi
                seluruh masyarakat.
              </p>


              {/* LOGIN BUTTON */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">

                {/* ADMIN */}
                <Link
                  href="/sign-in?role=ADMIN"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all duration-200"
                >
                  Login Admin
                </Link>

                {/* CUSTOMER */}
                <Link
                  href="/sign-in?role=CUSTOMER"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  Login Customer
                </Link>

              </div>

            </div>
          </div>
        </section>


        {/* ================= STATISTICS ================= */}
        <section className="relative z-10 px-6 -mt-6">

          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">

            <div className="grid grid-cols-2 md:grid-cols-4">

              {/* ITEM 1 */}
              <div className="px-5 py-7 text-center border-b md:border-b-0 md:border-r border-slate-100">
                <p className="text-2xl md:text-3xl font-semibold text-blue-600">
                  24/7
                </p>

                <p className="mt-1.5 text-sm text-slate-500">
                  Dukungan Layanan
                </p>
              </div>


              {/* ITEM 2 */}
              <div className="px-5 py-7 text-center border-b md:border-b-0 md:border-r border-slate-100">
                <p className="text-2xl md:text-3xl font-semibold text-blue-600">
                  100%
                </p>

                <p className="mt-1.5 text-sm text-slate-500">
                  Komitmen Pelayanan
                </p>
              </div>


              {/* ITEM 3 */}
              <div className="px-5 py-7 text-center border-r border-slate-100">
                <p className="text-2xl md:text-3xl font-semibold text-blue-600">
                  Aman
                </p>

                <p className="mt-1.5 text-sm text-slate-500">
                  Air Berkualitas
                </p>
              </div>


              {/* ITEM 4 */}
              <div className="px-5 py-7 text-center">
                <p className="text-2xl md:text-3xl font-semibold text-blue-600">
                  Terpercaya
                </p>

                <p className="mt-1.5 text-sm text-slate-500">
                  Untuk Masyarakat
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ================= TENTANG ================= */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* TEXT */}
            <div>

              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-blue-600" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Tentang Kami
                </span>
              </div>


              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                Menghadirkan air bersih

                <span className="block text-blue-600 mt-1">
                  untuk kebutuhan masyarakat
                </span>
              </h3>


              <p className="mt-6 text-slate-500 leading-8">
                PDAM Tirta Sejahtera merupakan perusahaan daerah yang bergerak
                dalam penyediaan dan pengelolaan air bersih bagi masyarakat.
                Kami berfokus pada pelayanan yang profesional, pengelolaan
                sumber daya air yang berkelanjutan, serta peningkatan kualitas
                layanan.
              </p>


              <p className="mt-4 text-slate-500 leading-8">
                Dengan mengutamakan kebutuhan pelanggan, kami terus berupaya
                memberikan pelayanan yang cepat, aman, dan dapat diandalkan.
              </p>

            </div>


            {/* VISUAL CARD */}
            <div className="relative">

              <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 p-8 md:p-10 text-white shadow-[0_20px_50px_rgba(37,99,235,0.15)]">

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/15 mb-8">

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


                <h4 className="text-2xl font-semibold tracking-tight">
                  Air Bersih untuk Semua
                </h4>


                <p className="mt-4 text-blue-50 leading-7">
                  Kami percaya bahwa akses terhadap air bersih merupakan bagian
                  penting dalam menciptakan kehidupan masyarakat yang sehat dan
                  berkualitas.
                </p>


                <div className="mt-8 pt-6 border-t border-white/15">

                  <p className="text-sm text-blue-100">
                    Komitmen kami
                  </p>

                  <p className="mt-1 font-medium">
                    Profesional • Aman • Berkelanjutan
                  </p>

                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ================= LAYANAN ================= */}
        <section className="bg-white border-y border-slate-200/70">

          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">

            {/* TITLE */}
            <div className="text-center max-w-2xl mx-auto">

              <div className="flex items-center justify-center gap-3 mb-4">

                <span className="w-7 h-px bg-blue-600" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Layanan
                </span>

                <span className="w-7 h-px bg-blue-600" />

              </div>


              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                Layanan PDAM
              </h3>


              <p className="mt-5 text-slate-500 leading-7">
                Berbagai layanan untuk membantu memenuhi kebutuhan air bersih
                dan memberikan pengalaman pelayanan yang lebih baik.
              </p>

            </div>


            {/* SERVICE CARDS */}
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* CARD 1 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)] transition-all duration-300">

                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">

                  <svg
                    className="w-5 h-5"
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

                <h4 className="mt-5 text-base font-semibold text-slate-900">
                  Penyediaan Air Bersih
                </h4>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Menyediakan kebutuhan air bersih yang aman dan berkualitas
                  untuk masyarakat.
                </p>

              </div>


              {/* CARD 2 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)] transition-all duration-300">

                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">

                  <svg
                    className="w-5 h-5"
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

                <h4 className="mt-5 text-base font-semibold text-slate-900">
                  Distribusi Air
                </h4>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Pengelolaan jaringan distribusi untuk memastikan air dapat
                  tersalurkan dengan baik.
                </p>

              </div>


              {/* CARD 3 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)] transition-all duration-300">

                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">

                  <svg
                    className="w-5 h-5"
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

                <h4 className="mt-5 text-base font-semibold text-slate-900">
                  Pelayanan Pelanggan
                </h4>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Memberikan informasi dan pelayanan yang responsif kepada
                  seluruh pelanggan.
                </p>

              </div>


              {/* CARD 4 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)] transition-all duration-300">

                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">

                  <svg
                    className="w-5 h-5"
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

                <h4 className="mt-5 text-base font-semibold text-slate-900">
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
        <section className="bg-[#f8fafc]">

          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">

            <div className="text-center max-w-2xl mx-auto mb-14">

              <div className="flex items-center justify-center gap-3 mb-4">

                <span className="w-7 h-px bg-blue-600" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Komitmen Kami
                </span>

                <span className="w-7 h-px bg-blue-600" />

              </div>


              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                Visi & Misi
              </h3>

            </div>


            <div className="grid md:grid-cols-2 gap-5">

              {/* VISI */}
              <div className="bg-white rounded-2xl border border-slate-200 p-7 md:p-9 hover:shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-all duration-300">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-semibold">
                    V
                  </div>

                  <div>

                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                      Arah Perusahaan
                    </p>

                    <h4 className="text-xl font-semibold text-slate-900 mt-0.5">
                      Visi
                    </h4>

                  </div>

                </div>


                <p className="mt-7 text-slate-500 leading-8">
                  Menjadi perusahaan penyedia air bersih yang terpercaya,
                  profesional, dan berkelanjutan dalam memenuhi kebutuhan
                  masyarakat.
                </p>

              </div>


              {/* MISI */}
              <div className="bg-white rounded-2xl border border-slate-200 p-7 md:p-9 hover:shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-all duration-300">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-sky-50 text-sky-600 font-semibold">
                    M
                  </div>

                  <div>

                    <p className="text-xs text-sky-600 font-semibold uppercase tracking-wider">
                      Langkah Kami
                    </p>

                    <h4 className="text-xl font-semibold text-slate-900 mt-0.5">
                      Misi
                    </h4>

                  </div>

                </div>


                <p className="mt-7 text-slate-500 leading-8">
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
        <section className="px-6 py-20 md:py-24 bg-white">

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-[0_20px_50px_rgba(37,99,235,0.12)]">

            <div className="px-7 py-12 md:px-14 md:py-14 text-center">

              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Akses Layanan PDAM
              </h3>


              <p className="mt-4 text-blue-50 max-w-xl mx-auto leading-7">
                Silakan masuk ke akun sesuai dengan peran Anda untuk
                mengakses layanan PDAM Tirta Sejahtera.
              </p>


              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

                {/* ADMIN */}
                <Link
                  href="/sign-in?role=ADMIN"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-700 text-sm font-medium hover:bg-blue-50 transition-all duration-200"
                >
                  Login Admin
                </Link>


                {/* CUSTOMER */}
                <Link
                  href="/sign-in?role=CUSTOMER"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200"
                >
                  Login Customer
                </Link>

              </div>

            </div>
          </div>
        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* BRAND */}
            <div>

              <h4 className="text-base font-semibold">
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

              <p className="mt-2 text-xs text-slate-500">
                © 2026 PDAM Tirta Sejahtera
              </p>

            </div>

          </div>
        </div>

      </footer>

    </div>
  );
}