export default function HowToUse() {
  const steps = [
    {
      num: "1",
      title: "Kirim Request",
      desc: "Masukkan email di form Step 1 lalu klik tombol 'Kirim Link Sekarang'.",
    },
    {
      num: "2",
      title: "Cari Email (Cek SPAM)",
      desc: "Buka email kamu, cari email dari Alight Motion. Jika tidak ada di kotak masuk, wajib cek folder SPAM.",
    },
    {
      num: "3",
      title: "Salin Link",
      desc: "Buka email tersebut, lalu salin (copy) link verifikasi login yang tertera di sana.",
    },
    {
      num: "4",
      title: "Verifikasi & Nikmati",
      desc: "Tempelkan (paste) link tersebut di form Step 2 web ini dan klik Jadikan Premium. Done!",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-black uppercase tracking-widest text-black mb-12 text-center">
        How To Use
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div
            key={s.num}
            className="bg-gray-50 border-2 border-gray-300 p-8 shadow-[4px_4px_0px_rgba(15,23,42,0.1)] relative hover:-translate-y-1 transition-transform"
          >
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_rgba(15,23,42,1)]">
              {s.num}
            </div>
            <h3 className="text-lg font-black uppercase text-black mb-3 mt-2">
              {s.title}
            </h3>
            <p className="text-sm font-medium text-gray-600 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
