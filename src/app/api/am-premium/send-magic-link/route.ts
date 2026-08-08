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

    // Proxy the request to the actual backend
    const backendUrl = `${config.apiBaseUrl}${config.amSendMagicLinkPath}`;

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(config.apiKey ? { "X-API-Key": config.apiKey } : {}),
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: (data as { message?: string }).message || "Gagal mengirim link verifikasi.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Link verifikasi berhasil dikirim! Silakan cek folder SPAM atau INBOX di email kamu.",
      data,
    });
  } catch (error) {
    console.error("Send magic link error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
