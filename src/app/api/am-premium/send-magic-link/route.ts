import { NextRequest, NextResponse } from "next/server";
import { config } from "@/lib/config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email wajib diisi." },
        { status: 400 }
      );
    }

    // POST ke halaman yang sama seperti form asli (Next.js server action)
    // Format: application/x-www-form-urlencoded
    const formBody = new URLSearchParams({ email }).toString();

    const response = await fetch(`${config.apiBaseUrl}/id/tools/am-premium`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
      body: formBody,
      redirect: "manual",
    });

    // Next.js server action biasanya redirect setelah sukses (303)
    // atau return HTML dengan toast message
    if (response.status === 303 || response.status === 302) {
      return NextResponse.json({
        success: true,
        message:
          "Link verifikasi berhasil dikirim. Silakan cek folder SPAM atau INBOX di email kamu.",
      });
    }

    const text = await response.text();

    // Cek indikasi sukses di response HTML
    if (
      text.includes("berhasil") ||
      text.includes("sukses") ||
      response.ok
    ) {
      return NextResponse.json({
        success: true,
        message:
          "Link verifikasi berhasil dikirim. Silakan cek folder SPAM atau INBOX di email kamu.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengirim link verifikasi. Coba lagi nanti.",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Send magic link error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server. Coba lagi nanti.",
      },
      { status: 500 }
    );
  }
}
