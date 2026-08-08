import Link from "next/link";
import { config } from "@/lib/config";
import { ExternalLink, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#06060a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Tools</h3>
            <ul className="space-y-2">
              {[
                "All Tools",
                "YouTube Downloader",
                "TikTok Downloader",
                "Instagram Downloader",
                "All-in-One",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sumber Daya */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Sumber Daya</h3>
            <ul className="space-y-2">
              {["FAQ", "Changelog"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Proyek */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Proyek</h3>
            <ul className="space-y-2">
              {["About", "Stats"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={config.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Kebijakan Privasi", "Syarat & Ketentuan"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {config.siteName}. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={config.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code2 size={18} />
            </a>
            <a
              href={config.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
