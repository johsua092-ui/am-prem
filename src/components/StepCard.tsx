"use client";

import { useState, useCallback } from "react";
import { sendMagicLink, verifyPremium } from "@/lib/api";

type Step = 1 | 2;

interface Toast {
  type: "success" | "error";
  message: string;
}

export default function StepCard() {
  const [step, setStep] = useState<Step>(1);
  const [email, setEmail] = useState("");
  const [verificationLink, setVerificationLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = useCallback((t: Toast) => {
    setToast(t);
    setTimeout(() => setToast(null), 8000);
  }, []);

  const handleSendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      showToast({ type: "error", message: "Email wajib diisi." });
      return;
    }

    setLoading(true);
    try {
      const result = await sendMagicLink(email.trim());
      if (result.success) {
        showToast({
          type: "success",
          message:
            "Link verifikasi berhasil dikirim. Silakan cek folder SPAM atau INBOX di email kamu.",
        });
        setStep(2);
      } else {
        showToast({ type: "error", message: result.message });
      }
    } catch {
      showToast({
        type: "error",
        message: "Terjadi kesalahan. Coba lagi nanti.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationLink.trim()) {
      showToast({ type: "error", message: "Link verifikasi wajib diisi." });
      return;
    }

    setLoading(true);
    try {
      const result = await verifyPremium(email.trim(), verificationLink.trim());
      if (result.success) {
        showToast({
          type: "success",
          message: "Selamat! Akun Alight Motion kamu sekarang PREMIUM selama 1 tahun.",
        });
        setEmail("");
        setVerificationLink("");
        setStep(1);
      } else {
        showToast({ type: "error", message: result.message });
      }
    } catch {
      showToast({
        type: "error",
        message: "Terjadi kesalahan. Coba lagi nanti.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div>
      {/* Step Indicators */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <div
          className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold text-lg ${
            step === 1
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          1
        </div>
        <div className="w-12 h-1 bg-gray-200">
          <div
            className={`h-full bg-orange-500 transition-all duration-500 ${
              step === 2 ? "w-full" : "w-0"
            }`}
          />
        </div>
        <div
          className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold text-lg ${
            step === 2
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          2
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`mb-6 px-4 py-3 border-2 border-black font-medium text-sm ${
            toast.type === "success"
              ? "bg-green-100 text-black"
              : "bg-red-100 text-black"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Form Card */}
      <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_rgba(15,23,42,1)] overflow-hidden">
        {/* Title Bar */}
        <div className="bg-black px-6 py-4 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-white font-mono text-sm uppercase tracking-widest font-bold ml-2">
            AM-PREM-GEN.EXE
          </div>
        </div>

        <div className="p-6 md:p-10">
          {step === 1 ? (
            <div className="max-w-xl mx-auto">
              <h3 className="text-2xl font-black text-black mb-2">
                Step 1: Kirim Link Verifikasi
              </h3>
              <p className="text-gray-500 mb-8">
                Masukkan alamat email aktif kamu. Kami akan mengirimkan sebuah
                link khusus ke email kamu.
              </p>
              <form onSubmit={handleSendMagicLink} className="space-y-6 text-left">
                <div>
                  <label className="block font-bold text-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contoh@email.com"
                    required
                    className="w-full px-4 py-4 rounded-lg bg-gray-50 border-2 border-black focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none font-medium transition-all"
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 text-white border-3 border-black py-4 text-lg font-black uppercase tracking-widest shadow-[6px_6px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(15,23,42,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {loading ? "Mengirim..." : "Kirim Link Sekarang"}
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-xl mx-auto">
              <h3 className="text-2xl font-black text-black mb-2">
                Step 2: Verifikasi & Aktifkan
              </h3>
              <p className="text-gray-500 mb-8">
                Cek email kamu{" "}
                <strong className="text-black">({email})</strong>. Cek juga
                folder SPAM. Salin link verifikasi yang kamu terima lalu
                tempelkan di bawah ini.
              </p>
              <form onSubmit={handleVerify} className="space-y-6 text-left">
                <div>
                  <label className="block font-bold text-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    disabled
                    className="w-full px-4 py-4 rounded-lg bg-gray-100 border-2 border-gray-300 text-gray-500 cursor-not-allowed font-medium"
                  />
                </div>
                <div>
                  <label className="block font-bold text-black mb-2">
                    Paste Link Verifikasi
                  </label>
                  <input
                    type="text"
                    value={verificationLink}
                    onChange={(e) => setVerificationLink(e.target.value)}
                    placeholder="https://alightmotion.com/auth/..."
                    required
                    className="w-full px-4 py-4 rounded-lg bg-gray-50 border-2 border-black focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none font-medium transition-all"
                    disabled={loading}
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={loading}
                    className="px-5 py-4 bg-white border-2 border-black text-black font-bold text-sm uppercase tracking-wide hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    Kembali
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-orange-500 text-white border-3 border-black py-4 text-lg font-black uppercase tracking-widest shadow-[6px_6px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(15,23,42,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {loading ? "Memverifikasi..." : "Jadikan Premium"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
