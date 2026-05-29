import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Local-First Zero-Custody Data Protection | Strat Ai",
  description:
    "At Strat Ai, we prioritize cryptographic privacy. Your Zerodha Kite Connect API keys, access tokens, and Crypto exchange secrets are encrypted using Tauri Stronghold and stored strictly on your local device.",
  keywords: [
    "trading API key privacy",
    "secure options trading app",
    "Tauri Stronghold encryption",
    "local-first trading terminal",
    "Zerodha Kite API security",
    "no custody trading software",
    "encrypted API storage",
  ],
  openGraph: {
    title: "Privacy Policy & Zero-Custody Protection | Strat Ai",
    description:
      "Your trading strategies and credentials are yours alone. Strat Ai utilizes military-grade local encryption to safeguard your data. No cloud sync, no tracking.",
    url: "https://stratai.live/privacy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai — Secure Local-First Trading Terminal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Zero-Custody Options & Crypto Terminal | Strat Ai",
    description:
      "Encryption keys and brokerage access secrets stay encrypted on your own device. Read our local-first security architecture policy.",
  },
  alternates: {
    canonical: "https://stratai.live/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
