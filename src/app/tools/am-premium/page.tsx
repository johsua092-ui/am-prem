import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import StepCard from "@/components/StepCard";
import FeatureCards from "@/components/FeatureCards";
import HowToUse from "@/components/HowToUse";
import FAQ from "@/components/FAQ";

export default function AMPremiumPage() {
  return (
    <>
      <section className="bg-brutal-bg py-8 md:py-16 px-6 border-b-2 border-brutal-border">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-8 flex justify-center md:justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest text-brutal-ink bg-white px-4 py-2 border-2 border-brutal-ink shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              BACK TO TOOLS
            </Link>
          </div>
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 mb-6 bg-brutal-yellow border-2 border-brutal-ink rounded-full text-xs font-black uppercase tracking-widest text-brutal-ink shadow-[4px_4px_0px_rgba(15,23,42,1)]">
              AM PREMIUM
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-brutal-ink mb-6 uppercase tracking-tight leading-tight">
              Alight Motion Premium Generator
            </h1>
            <p className="text-lg md:text-xl text-brutal-muted font-bold max-w-2xl mx-auto leading-relaxed">
              Jadikan akun Alight Motion Anda premium selama 1 tahun secara gratis. Tanpa kata sandi dan dijamin aman 100%.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 -mt-8 relative z-20">
        <Disclaimer />
        <div className="mb-16">
          <StepCard />
        </div>
      </div>
      <div className="mt-20">
        <FeatureCards />
        <HowToUse />
        <FAQ />
      </div>
    </>
  );
}
