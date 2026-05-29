import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Live Status & Ingest Latencies | Strat Ai",
  description:
    "Monitor live WebSocket connections, Zerodha Kite Connect API statuses, ingest latencies, and global Crypto exchange WebSockets uptime.",
  keywords: [
    "trading network status",
    "Zerodha Kite API status",
    "WebSocket latency status",
    "real time option feed uptime",
    "Crypto trading connection status",
  ],
  openGraph: {
    title: "System Status & Ingest Latencies — Strat Ai",
    description:
      "Check live service statuses, Nifty feed latency records, and crypto WebSocket ingest uptimes for our high-frequency terminal.",
    url: "https://stratai.live//status",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai — System Status",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Status & Latency Monitors | Strat Ai",
    description:
      "Uptime status for Nifty & Bank Nifty feed connections and Crypto WebSockets ingest pipelines.",
  },
  alternates: {
    canonical: "https://stratai.live//status",
  },
};

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
