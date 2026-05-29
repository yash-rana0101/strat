import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems API & WebSocket Reference | Strat Ai Quant Terminal",
  description:
    "Integrate custom quantitative trading models, ingest external signals, or read raw aggregator consensus streams using local REST and WebSocket APIs on Port 8080.",
  keywords: [
    "trading API reference",
    "WebSocket trading stream",
    "JSON-RPC trading bot",
    "Nifty options feed API",
    "quantitative model integration",
  ],
  openGraph: {
    title: "Systems API & Local WebSocket Reference | Strat Ai",
    description:
      "Full schema documentation for integrating custom quant scripts directly into the Strat Ai local engine. Read options chain matrices and indicators in real time.",
    url: "https://stratai.live/api-reference",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai — API Reference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems API & WebSocket Reference — Strat Ai Terminal",
    description:
      "Integrate custom code with our local engine. WebSocket schemas and REST endpoint specs for high-speed options analysis.",
  },
  alternates: {
    canonical: "https://stratai.live/api-reference",
  },
};

export default function ApiReferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
