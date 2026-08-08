import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-brutal-bg">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 bg-brutal-yellow border-2 border-brutal-ink rounded-full text-xs font-black uppercase tracking-widest text-brutal-ink shadow-[4px_4px_0px_rgba(15,23,42,1)]">
          Tools Gratis
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-brutal-ink mb-6 leading-tight uppercase tracking-tight">
          Alight Motion{" "}
          <span className="text-brutal-accent">Premium Generator</span>
        </h1>
        <p className="text-brutal-muted text-lg mb-10 max-w-xl mx-auto font-medium">
          Jadikan akun Alight Motion Anda premium selama 1 tahun secara gratis. Tanpa kata sandi dan dijamin aman 100%.
        </p>
        <Link
          href="/tools/am-premium"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brutal-accent text-white border-3 border-brutal-ink text-lg font-black uppercase tracking-widest shadow-[6px_6px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_rgba(15,23,42,1)] transition-all"
        >
          Mulai Sekarang
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
