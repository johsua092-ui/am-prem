"use client";

import { useState } from "react";

const faqs = [
  { q: "Apakah ini aman untuk akun email saya?", a: "Sangat aman. Kami tidak meminta password email kamu. Kami hanya meneruskan permintaan link verifikasi ke server resmi." },
  { q: "Kok email verifikasinya tidak masuk?", a: "Coba cek folder SPAM atau Promotions di email kamu. Email verifikasi dari Alight Motion terkadang masuk ke folder tersebut. Jika masih tidak ada, tunggu beberapa menit dan coba kirim ulang." },
  { q: "Berapa lama status premiumnya aktif?", a: "Status premium akan aktif selama 1 tahun penuh (365 hari) sejak verifikasi berhasil. Setelah masa aktif habis, kamu bisa mengulangi proses ini kembali." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-brutal-bg py-16 px-6 border-b-2 border-brutal-border">
      <div className="mx-auto max-w-[800px]">
        <h2 className="text-2xl font-black uppercase tracking-widest text-brutal-ink mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border-2 border-brutal-border overflow-hidden shadow-[4px_4px_0px_rgba(15,23,42,1)]">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-brutal-surface transition-colors">
                <span className="font-bold text-brutal-ink">{faq.q}</span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border-2 border-brutal-border flex items-center justify-center transition-transform duration-200 ${open === i ? "bg-brutal-accent text-white rotate-180" : "bg-white text-brutal-ink"}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 pt-2 text-sm font-medium text-brutal-muted leading-relaxed border-t-2 border-dashed border-brutal-border/30 mt-2">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
