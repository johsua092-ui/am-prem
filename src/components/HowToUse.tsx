const steps = [
  {
    number: "1",
    title: "Kirim Request",
    description:
      "Masukkan email di form Step 1 lalu klik tombol 'Kirim Link Sekarang'.",
  },
  {
    number: "2",
    title: "Cari Email (Cek SPAM)",
    description:
      "Buka email kamu, cari email dari Alight Motion. Jika tidak ada di kotak masuk, wajib cek folder SPAM.",
  },
  {
    number: "3",
    title: "Salin Link",
    description:
      "Buka email tersebut, lalu salin (copy) link verifikasi login yang tertera di sana.",
  },
  {
    number: "4",
    title: "Verifikasi & Nikmati",
    description:
      "Tempelkan (paste) link tersebut di form Step 2 web ini dan klik Jadikan Premium. Done!",
  },
];

export default function HowToUse() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white text-center mb-10">
        How To Use
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-center relative group hover:border-white/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm mx-auto mb-4 group-hover:scale-110 transition-transform">
              {step.number}
            </div>
            <h3 className="text-white font-semibold text-base mb-2">
              {step.title}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
