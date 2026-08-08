export default function HowToUse() {
  const s = [
    { n: "1", t: "Kirim Request", d: "Masukkan email di form Step 1 lalu klik tombol 'Kirim Link Sekarang'." },
    { n: "2", t: "Cari Email (Cek SPAM)", d: "Buka email kamu, cari email dari Alight Motion. Jika tidak ada di kotak masuk, wajib cek folder SPAM." },
    { n: "3", t: "Salin Link", d: "Buka email tersebut, lalu salin (copy) link verifikasi login yang tertera di sana." },
    { n: "4", t: "Verifikasi & Nikmati", d: "Tempelkan (paste) link tersebut di form Step 2 web ini dan klik Jadikan Premium. Done!" },
  ];
  return (
    <section className="bg-white py-16 px-6 border-b-2 border-brutal-border">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-2xl font-black uppercase tracking-widest text-brutal-ink mb-12 text-center">How To Use</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.map((x) => (
            <div key={x.n} className="bg-brutal-surface border-2 border-brutal-border p-8 shadow-[6px_6px_0px_rgba(15,23,42,1)] relative group hover:-translate-y-1 transition-transform">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-brutal-yellow border-2 border-brutal-border rounded-full flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_rgba(15,23,42,1)] group-hover:bg-brutal-accent group-hover:text-white transition-colors">{x.n}</div>
              <h3 className="text-lg font-black uppercase text-brutal-ink mb-3 mt-2">{x.t}</h3>
              <p className="text-sm font-medium text-brutal-muted leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
