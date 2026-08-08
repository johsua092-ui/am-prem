"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brutal-surface border-b-3 border-brutal-border">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 border-2 border-brutal-ink flex items-center justify-center font-black text-sm shadow-[4px_4px_0px_rgba(15,23,42,1)] bg-white text-brutal-ink">
              AM
            </div>
            <span className="text-brutal-ink font-bold text-lg tracking-tight">
              AM Premium
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {["TOOLS", "STATISTIK", "FITUR", "TANYA JAWAB"].map((item) => (
              <Link
                key={item}
                href="/"
                className="text-sm font-semibold text-brutal-muted hover:text-brutal-ink uppercase tracking-wide"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 border-2 border-brutal-ink rounded-lg overflow-hidden font-bold uppercase text-xs shadow-[4px_4px_0px_rgba(15,23,42,1)]">
              <button className="px-3 py-1.5 bg-white text-brutal-ink hover:bg-brutal-bg">EN</button>
              <div className="w-[2px] bg-brutal-ink h-full" />
              <button className="px-3 py-1.5 bg-brutal-ink text-white">ID</button>
            </div>
            <Link
              href="/"
              className="hidden sm:inline-flex items-center bg-brutal-accent text-white px-5 py-2.5 text-sm font-bold border-2 border-brutal-ink shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_rgba(15,23,42,1)] transition-all uppercase tracking-wide"
            >
              Coba Tools
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border-2 border-brutal-ink hover:bg-brutal-bg"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className="block h-0.5 w-full bg-brutal-ink" />
                <span className="block h-0.5 w-full bg-brutal-ink" />
                <span className="block h-0.5 w-full bg-brutal-ink" />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden py-4 border-t-2 border-brutal-border">
            <nav className="flex flex-col gap-3">
              {["TOOLS", "STATISTIK", "FITUR", "TANYA JAWAB"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="text-sm font-semibold text-brutal-muted uppercase tracking-wide py-1"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/"
                className="mt-2 bg-brutal-accent text-white px-5 py-2.5 text-sm font-bold border-2 border-brutal-ink shadow-[4px_4px_0px_rgba(15,23,42,1)] uppercase tracking-wide text-center"
              >
                Coba Tools
              </Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
