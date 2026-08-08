// ============================================
// AM Premium Generator - Configuration
// All values sourced from environment variables
// Nothing is hardcoded
// ============================================

export const config = {
  apiBaseUrl: process.env.API_BASE_URL || "https://www.pakeaja.online",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "AM Premium Generator",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  siteDescription:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Jadikan akun Alight Motion Anda premium selama 1 tahun secara gratis.",
  githubUrl: "https://github.com/johsua092-ui/am-prem",
} as const;
