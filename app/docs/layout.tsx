import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strat Ai Documentation — Ingestion Pipelines, Quant Agents & Setup",
  description:
    "Complete blueprints for setting up Nifty options feeds, Zerodha Kite API connections, local QuestDB, Redpanda queues, and the 5 multi-agent consensus network.",
  keywords: [
    "trading terminal docs",
    "Zerodha Kite API setup",
    "QuestDB time series setup",
    "Redpanda queue configure",
    "technical indicators calculation Rust",
    "multi-agent quant consensus",
  ],
  openGraph: {
    title: "Strat Ai Technical Blueprints & Documentation",
    description:
      "Deep dive into our sub-50ms local tick ingestion architecture, Tauri security, and our five specialized machine learning agent consensus systems.",
    url: "https://stratai.live/docs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai — Developer Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation — Ingestion Pipelines & Quant Agents | Strat Ai",
    description:
      "Architecture guides for local ingestion, database storage, and trading agent configuration.",
  },
  alternates: {
    canonical: "https://stratai.live/docs",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
