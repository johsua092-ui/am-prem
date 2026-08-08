export default function FeatureCards() {
  const f = [
    { t: "Tanpa Password", d: "Tidak butuh password email atau Google kamu. Kami menggunakan sistem magic link verifikasi resmi dari pusat." },
    { t: "Instan 1 Tahun", d: "Begitu sukses verifikasi, akun Alight Motion kamu langsung aktif status Premium selama 1 Tahun penuh." },
    { t: "Sepenuhnya Gratis", d: "Tidak dipungut biaya apapun. Proses ini 100% gratis disediakan untuk eksperimen." },
  ];
  const icons = [
    <svg key="a" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
    <svg key="b" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
    <svg key="c" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  ];
  return (
    <section className="bg-white py-16 px-6 border-b-2 border-brutal-border">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-2xl font-black uppercase tracking-widest text-brutal-ink mb-12 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {f.map((x, i) => (
            <div key={x.t} className="bg-brutal-bg border-2 border-brutal-border p-6 flex flex-col items-center text-center shadow-[4px_4px_0px_rgba(15,23,42,0.1)] hover:shadow-[6px_6px_0px_rgba(15,23,42,0.15)] transition-all">
              <div className="w-14 h-14 bg-white border-2 border-brutal-border rounded-xl flex items-center justify-center text-brutal-ink mb-6 shadow-[4px_4px_0px_rgba(15,23,42,1)]">{icons[i]}</div>
              <h3 className="text-md font-black uppercase text-brutal-ink mb-3">{x.t}</h3>
              <p className="text-sm font-medium text-brutal-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
