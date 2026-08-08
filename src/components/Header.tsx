"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 border-2 border-black flex items-center justify-center font-black text-sm bg-black text-white">
              AM
            </div>
            <span className="text-black font-bold text-lg hidden sm:block tracking-tight">
              AM Premium
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {["TOOLS", "STATISTIK", "FITUR", "TANYA JAWAB"].map((item) => (
              <Link
                key={item}
                href="/"
                className="text-sm font-bold text-gray-600 hover:text-black uppercase tracking-wide"
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center gap-1 border-2 border-black rounded-lg overflow-hidden ml-4">
              <button className="px-3 py-1.5 text-xs font-bold bg-white text-black">
                EN
              </button>
              <div className="w-[2px] bg-black h-full" />
              <button className="px-3 py-1.5 text-xs font-bold bg-black text-white">
                ID
              </button>
            </div>
            <Link
              href="/"
              className="hidden sm:inline-flex items-center justify-center bg-orange-500 text-white px-5 py-2.5 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(15,23,42,1)] transition-all uppercase tracking-wide"
            >
              Coba Tools
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center border-2 border-black"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t-2 border-black">
            <nav className="flex flex-col gap-3">
              {["TOOLS", "STATISTIK", "FITUR", "TANYA JAWAB"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="text-sm font-bold text-gray-600 uppercase tracking-wide py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/"
                className="mt-2 bg-orange-500 text-white px-5 py-2.5 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_rgba(15,23,42,1)] uppercase tracking-wide text-center"
              >
                Coba Tools
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
