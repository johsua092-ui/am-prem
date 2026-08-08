"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform">
              AM
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">
              AM Premium
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              TOOLS
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              STATISTIK
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              FITUR
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              TANYA JAWAB
            </Link>
            <div className="flex items-center gap-1 ml-4">
              <button className="text-sm text-gray-400 hover:text-white transition-colors px-1">
                EN
              </button>
              <span className="text-gray-600">|</span>
              <button className="text-sm text-gray-400 hover:text-white transition-colors px-1">
                ID
              </button>
            </div>
            <Link
              href="/"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Coba Tools
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <nav className="flex flex-col gap-3">
              {["TOOLS", "STATISTIK", "FITUR", "TANYA JAWAB"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium py-1"
                >
                  {item}
                </Link>
              ))}
              <div className="flex items-center gap-1 pt-2">
                <button className="text-sm text-gray-400 hover:text-white px-1">EN</button>
                <span className="text-gray-600">|</span>
                <button className="text-sm text-gray-400 hover:text-white px-1">ID</button>
              </div>
              <Link
                href="/"
                className="mt-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-medium text-center hover:opacity-90 transition-opacity"
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
