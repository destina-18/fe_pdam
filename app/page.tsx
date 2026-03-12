export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50 font-sans">

      {/* HEADER */}
      <header className="bg-blue-600 text-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 text-center">
          <h1 className="text-2xl font-semibold tracking-wide">
            PDAM Tirta Sejahtera
          </h1>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">

        {/* HERO */}
        <section className="bg-blue-500 text-white">
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Layanan Air Bersih <br /> untuk Kehidupan Lebih Baik
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed">
              PDAM Tirta Sejahtera berkomitmen menyediakan layanan air bersih
              yang berkualitas bagi masyarakat. Dengan sistem distribusi yang
              terpercaya, kami memastikan kebutuhan air terpenuhi secara aman,
              higienis, dan berkelanjutan.
            </p>

          </div>
        </section>

        {/* TENTANG */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Tentang PDAM
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            PDAM Tirta Sejahtera merupakan perusahaan daerah yang bergerak
            dalam penyediaan dan pengelolaan air bersih bagi masyarakat.
            Kami berfokus pada pelayanan yang profesional, pengelolaan
            sumber daya air yang berkelanjutan, serta peningkatan kualitas
            layanan untuk mendukung kesejahteraan masyarakat.
          </p>
        </section>

        {/* LAYANAN */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-20 text-center">

            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Layanan PDAM
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              PDAM menyediakan berbagai layanan kepada masyarakat, mulai dari
              penyediaan air bersih, pengelolaan jaringan distribusi air,
              pelayanan pelanggan, hingga penanganan gangguan dan keluhan
              terkait layanan air. Kami terus berupaya meningkatkan kualitas
              layanan agar kebutuhan air masyarakat dapat terpenuhi secara
              optimal.
            </p>

          </div>
        </section>

        {/* VISI MISI */}
        <section className="bg-sky-50">
          <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Visi
              </h4>

              <p className="text-gray-600 leading-relaxed">
                Menjadi perusahaan penyedia air bersih yang terpercaya,
                profesional, dan berkelanjutan dalam memenuhi kebutuhan
                masyarakat.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Misi
              </h4>

              <p className="text-gray-600 leading-relaxed">
                Memberikan pelayanan air bersih yang berkualitas,
                meningkatkan infrastruktur distribusi air, serta
                mengutamakan kepuasan pelanggan melalui layanan
                yang cepat dan responsif.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p className="text-sm tracking-wide">
          © 2026 PDAM Tirta Sejahtera
        </p>
      </footer>

    </div>
  )
}