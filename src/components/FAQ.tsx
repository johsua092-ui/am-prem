"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Apakah ini aman untuk akun email saya?",
    a: "Sangat aman. Kami tidak meminta password email kamu. Kami hanya meneruskan permintaan link verifikasi ke server resmi.",
  },
  {
    q: "Kok email verifikasinya tidak masuk?",
    a: "Coba cek folder SPAM atau Promotions di email kamu. Email verifikasi dari Alight Motion terkadang masuk ke folder tersebut. Jika masih tidak ada, tunggu beberapa menit dan coba kirim ulang.",
  },
  {
    q: "Berapa lama status premiumnya aktif?",
    a: "Status premium akan aktif selama 1 tahun penuh (365 hari) sejak verifikasi berhasil. Setelah masa aktif habis, kamu bisa mengulangi proses ini kembali.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-black uppercase tracking-widest text-black mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_rgba(15,23,42,1)]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-black">{faq.q}</span>
              <span
                className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center transition-transform duration-200 ${
                  openIndex === i
                    ? "bg-black text-white rotate-180"
                    : "bg-white text-black"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-6 pt-2 text-sm font-medium text-gray-600 leading-relaxed border-t-2 border-dashed border-gray-300">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
