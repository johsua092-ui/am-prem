import Link from "next/link";
import { config } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-brutal-ink border-t-4 border-brutal-accent">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/50 mb-4">Tools</h4>
            <ul className="space-y-2.5">
              {["All Tools", "YouTube Downloader", "TikTok Downloader", "Instagram Downloader", "All-in-One"].map((x) => (
                <li key={x}><Link href="/" className="text-sm text-white/70 hover:text-brutal-accent font-medium">{x}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/50 mb-4">Sumber Daya</h4>
            <ul className="space-y-2.5">
              {["FAQ", "Changelog"].map((x) => (
                <li key={x}><Link href="/" className="text-sm text-white/70 hover:text-brutal-accent font-medium">{x}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/50 mb-4">Proyek</h4>
            <ul className="space-y-2.5">
              {["About", "Stats"].map((x) => (
                <li key={x}><Link href="/" className="text-sm text-white/70 hover:text-brutal-accent font-medium">{x}</Link></li>
              ))}
              <li><a href={config.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-brutal-accent font-medium">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/50 mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {["Kebijakan Privasi", "Syarat & Ketentuan"].map((x) => (
                <li key={x}><Link href="/" className="text-sm text-white/70 hover:text-brutal-accent font-medium">{x}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} {config.siteName}. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href={config.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm font-medium">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
