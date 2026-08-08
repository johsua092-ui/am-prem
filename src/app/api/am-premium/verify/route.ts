import { NextRequest, NextResponse } from "next/server";
import { config } from "@/lib/config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, verificationLink } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email wajib diisi." },
        { status: 400 }
      );
    }

    if (!verificationLink || typeof verificationLink !== "string") {
      return NextResponse.json(
        { success: false, message: "Link verifikasi wajib diisi." },
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
      body: JSON.stringify({ email, verificationLink, action: "verify" }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: (data as { message?: string }).message || "Gagal memverifikasi link.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Selamat! Akun Alight Motion kamu sekarang PREMIUM selama 1 tahun! 🎉",
      data,
    });
  } catch (error) {
    console.error("Verify premium error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
