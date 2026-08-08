export default function FeatureCards() {
  const features = [
    {
      title: "Tanpa Password",
      desc: "Tidak butuh password email atau Google kamu. Kami menggunakan sistem magic link verifikasi resmi dari pusat.",
    },
    {
      title: "Instan 1 Tahun",
      desc: "Begitu sukses verifikasi, akun Alight Motion kamu langsung aktif status Premium selama 1 Tahun penuh.",
    },
    {
      title: "Sepenuhnya Gratis",
      desc: "Tidak dipungut biaya apapun. Proses ini 100% gratis disediakan untuk eksperimen.",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-black uppercase tracking-widest text-black mb-12 text-center">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-gray-50 border-2 border-gray-300 p-6 flex flex-col items-center text-center shadow-[4px_4px_0px_rgba(15,23,42,0.1)] hover:shadow-[6px_6px_0px_rgba(15,23,42,0.15)] transition-all"
          >
            <div className="w-14 h-14 bg-white border-2 border-gray-300 rounded-xl flex items-center justify-center text-black mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h3 className="text-md font-black uppercase text-black mb-3">
              {f.title}
            </h3>
            <p className="text-sm font-medium text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
