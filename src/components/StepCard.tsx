"use client";

import { useState, useCallback } from "react";
import { Send, CheckCircle, ArrowLeft, Loader2, AlertCircle } from "lucide-react";
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
            "Link verifikasi berhasil dikirim! Silakan cek folder SPAM atau INBOX di email kamu.",
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
          message: "Selamat! Akun Alight Motion kamu sekarang PREMIUM selama 1 tahun! 🎉",
        });
        // Reset form
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
    <div className="relative">
      {/* Step Indicators */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
            step === 1
              ? "bg-gradient-to-br from-orange-500 to-pink-500 text-white scale-110"
              : "bg-white/10 text-gray-400"
          }`}
        >
          1
        </div>
        <div className="w-12 h-0.5 bg-white/10" />
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
            step === 2
              ? "bg-gradient-to-br from-orange-500 to-pink-500 text-white scale-110"
              : "bg-white/10 text-gray-400"
          }`}
        >
          2
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`mb-4 px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2 ${
            toast.type === "success"
              ? "bg-green-500/10 border border-green-500/30 text-green-400"
              : "bg-red-500/10 border border-red-500/30 text-red-400"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          )}
          {toast.message}
        </div>
      )}

      {/* Form Card */}
      <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 sm:p-8">
        {step === 1 ? (
          <>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Send className="w-3 h-3 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">
                Step 1: Kirim Link Verifikasi
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-6 ml-8">
              Masukkan alamat email aktif kamu. Kami akan mengirimkan sebuah link khusus ke
              email kamu.
            </p>
            <form onSubmit={handleSendMagicLink} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contoh@email.com"
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Kirim Link Sekarang
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">
                Step 2: Verifikasi & Aktifkan
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-6 ml-8">
              Cek email kamu <strong className="text-gray-300">({email})</strong>. Cek juga
              folder SPAM. Salin link verifikasi yang kamu terima lalu tempelkan di bawah ini.
            </p>
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl text-gray-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label
                  htmlFor="verificationLink"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Paste Link Verifikasi
                </label>
                <input
                  id="verificationLink"
                  type="text"
                  value={verificationLink}
                  onChange={(e) => setVerificationLink(e.target.value)}
                  placeholder="https://alightmotion.com/auth/..."
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                  disabled={loading}
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={loading}
                  className="px-5 py-3 bg-white/[0.05] border border-white/10 text-gray-300 rounded-xl font-medium text-sm hover:bg-white/[0.08] transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Memverifikasi...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Jadikan Premium
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      {/* AM-PREM-GEN.EXE title */}
      <p className="text-center text-gray-600 text-xs font-mono mt-4">
        AM-PREM-GEN.EXE
      </p>
    </div>
  );
}
