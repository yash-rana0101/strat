import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Strat Ai Blog — Trading Technology, Market Analysis & Quant Engineering",
  description:
    "Engineering deep-dives on AI trading agents, Rust-based tick ingestion, OLS regression models, Nifty options analysis, crypto trading strategies, and quantitative trading systems. Written by the Strat Ai engineering team.",
  keywords: [
    "trading technology blog",
    "AI trading blog",
    "quantitative trading articles",
    "Nifty options analysis blog",
    "crypto trading strategies",
    "Rust trading systems",
    "fintech engineering blog",
    "stock market technology",
    "algorithmic trading insights",
    "trading terminal development",
    "open interest analysis articles",
    "Bank Nifty trading blog",
  ],
  openGraph: {
    title:
      "Strat Ai Blog — Trading Technology, Market Analysis & Quant Engineering",
    description:
      "Engineering deep-dives on AI agent architecture, Rust-based trading systems, OLS regression models, and quantitative trading insights from the Strat Ai team.",
    url: "https://stratai.live//blog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strat Ai Blog — Trading Technology & Quant Engineering",
    description:
      "Deep-dives on AI agents, Rust trading systems, options analytics, and crypto strategies from the Strat Ai engineering team.",
  },
  alternates: {
    canonical: "https://stratai.live//blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
