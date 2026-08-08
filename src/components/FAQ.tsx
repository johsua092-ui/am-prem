"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah ini aman untuk akun email saya?",
    answer:
      "Sangat aman. Kami tidak meminta password email kamu. Kami hanya meneruskan permintaan link verifikasi ke server resmi.",
  },
  {
    question: "Kok email verifikasinya tidak masuk?",
    answer:
      "Coba cek folder SPAM atau Promotions di email kamu. Email verifikasi dari Alight Motion terkadang masuk ke folder tersebut. Jika masih tidak ada, tunggu beberapa menit dan coba kirim ulang.",
  },
  {
    question: "Berapa lama status premiumnya aktif?",
    answer:
      "Status premium akan aktif selama 1 tahun penuh (365 hari) sejak verifikasi berhasil. Setelah masa aktif habis, kamu bisa mengulangi proses ini kembali.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.05] transition-colors"
            >
              <span className="text-white font-medium text-sm pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
