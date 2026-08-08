// ============================================
// AM Premium Generator - API Client
// Proxies all requests through Next.js API routes
// No hardcoded values - all config from env vars
// ============================================

import { config } from "./config";

interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

/**
 * Send magic link to the provided email address
 * This calls our Next.js API route which proxies to the real backend
 */
export async function sendMagicLink(email: string): Promise<ApiResponse> {
  const response = await fetch("/api/am-premium/send-magic-link", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    return {
      success: false,
      message:
        (error as { message?: string }).message ||
        "Gagal mengirim link verifikasi. Coba lagi nanti.",
    };
  }

  return response.json();
}

/**
 * Verify the magic link to activate premium
 * This calls our Next.js API route which proxies to the real backend
 */
export async function verifyPremium(
  email: string,
  verificationLink: string
): Promise<ApiResponse> {
  const response = await fetch("/api/am-premium/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, verificationLink }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    return {
      success: false,
      message:
        (error as { message?: string }).message ||
        "Gagal memverifikasi link. Pastikan link yang ditempel benar.",
    };
  }

  return response.json();
}
