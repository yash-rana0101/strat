import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Strat Ai — AI Trading Intelligence for Indian F&O & Crypto",
  description:
    "Learn how Strat Ai bridges the institutional information gap with direct-to-canvas charting, zero-custody privacy, and 5 autonomous AI agents. Built for serious Nifty, Bank Nifty options traders and global Crypto traders in India.",
  keywords: [
    "about Strat Ai",
    "AI trading company India",
    "trading technology startup",
    "fintech company Bengaluru",
    "quantitative trading platform",
    "options trading intelligence",
    "stock market AI India",
    "trading terminal company",
  ],
  openGraph: {
    title: "About Strat Ai — AI Trading Intelligence for Indian F&O & Crypto",
    description:
      "Strat Ai is a high-fidelity visual workspace and market intelligence terminal for Indian F&O traders and global Crypto traders who value analytical privacy, real-time speed, and trading conviction.",
    url: "https://stratai.live/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Strat Ai — AI Trading Terminal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Strat Ai — Building the Future of AI Trading Terminals",
    description:
      "Direct-to-canvas charting. Zero-custody privacy. 5 autonomous AI agents. Learn about the trading terminal engineered for precision.",
  },
  alternates: {
    canonical: "https://stratai.live/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
