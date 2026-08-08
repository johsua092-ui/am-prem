import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Disclaimer from "@/components/Disclaimer";
import StepCard from "@/components/StepCard";
import FeatureCards from "@/components/FeatureCards";
import HowToUse from "@/components/HowToUse";
import FAQ from "@/components/FAQ";

export default function AMPremiumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        BACK TO TOOLS
      </Link>

      {/* Category Badge */}
      <div className="inline-block px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium mb-4">
        AM PREMIUM
      </div>

      {/* Hero Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Alight Motion Premium Generator
      </h1>
      <p className="text-gray-400 text-base mb-8 max-w-2xl">
        Jadikan akun Alight Motion Anda premium selama 1 tahun secara gratis.
        Tanpa kata sandi dan dijamin aman 100%.
      </p>

      {/* Disclaimer */}
      <Disclaimer />

      {/* Step Card with Forms */}
      <div className="mb-16">
        <StepCard />
      </div>

      {/* Features */}
      <FeatureCards />

      {/* How to Use */}
      <HowToUse />

      {/* FAQ */}
      <FAQ />
    </div>
  );
}
