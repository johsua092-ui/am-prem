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

    const formBody = new URLSearchParams({
      email,
      verificationLink,
      step: "2",
    }).toString();

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

    if (response.status === 303 || response.status === 302) {
      return NextResponse.json({
        success: true,
        message:
          "Selamat! Akun Alight Motion kamu sekarang PREMIUM selama 1 tahun.",
      });
    }

    const text = await response.text();

    if (
      text.includes("berhasil") ||
      text.includes("sukses") ||
      text.includes("premium") ||
      response.ok
    ) {
      return NextResponse.json({
        success: true,
        message:
          "Selamat! Akun Alight Motion kamu sekarang PREMIUM selama 1 tahun.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Gagal memverifikasi link. Pastikan link yang ditempel benar.",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Verify premium error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server. Coba lagi nanti.",
      },
      { status: 500 }
    );
  }
}
