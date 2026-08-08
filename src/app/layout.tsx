import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alight Motion Premium Generator | AM Premium",
  description:
    "Jadikan akun Alight Motion Anda premium selama 1 tahun secara gratis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-brutal-bg text-brutal-ink font-sans antialiased">
        <Header />
        <main className="min-h-screen bg-brutal-bg selection:bg-brutal-accent selection:text-white pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
