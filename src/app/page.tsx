import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">Tools Gratis &amp; Aman</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Alight Motion{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Premium Generator
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Jadikan akun Alight Motion Anda premium selama 1 tahun secara gratis.
          Tanpa kata sandi dan dijamin aman 100%.
        </p>

        <Link
          href="/tools/am-premium"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/25"
        >
          Mulai Sekarang
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
