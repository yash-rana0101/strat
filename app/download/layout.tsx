import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Download Strat Ai — Desktop Trading Terminal for Windows & macOS",
  description:
    "Download Strat Ai's native desktop trading terminal. GPU-accelerated Nifty & Bank Nifty charting, sub-50ms signal latency, Zerodha Kite API integration, zero-custody encryption. Available for Windows 10/11 and macOS 12+.",
  keywords: [
    "download trading terminal",
    "trading software download",
    "desktop trading app India",
    "Strat Ai download",
    "Windows trading terminal",
    "macOS trading app",
    "Zerodha compatible trading software",
    "stock market desktop app",
    "F&O trading desktop application",
    "crypto trading desktop terminal",
  ],
  openGraph: {
    title:
      "Download Strat Ai — Desktop Trading Terminal for Windows & macOS",
    description:
      "GPU-accelerated charting, sub-50ms latency, zero-custody security. Download the native trading terminal for Windows 10/11 and macOS 12+.",
    url: "https://stratai.live//download",
    images: [
      {
        url: "/desktop_mockup.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai Desktop Trading Terminal Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Strat Ai — Desktop Trading Terminal",
    description:
      "Native desktop trading terminal with GPU-accelerated charts, 5 AI agents, and Zerodha Kite API integration. Download for Windows & macOS.",
  },
  alternates: {
    canonical: "https://stratai.live//download",
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
