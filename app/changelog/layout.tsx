import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strat Ai Changelog — New Indicators, Performance & Core Releases",
  description:
    "Track active updates to the Strat Ai desktop client. Releases feature Rust-based OLS Ghost Line overlays, Tauri engine updates, and sub-50ms tick-to-decision performance boosts.",
  keywords: [
    "trading software updates",
    "quant terminal changelog",
    "options analysis releases",
    "Tauri shell optimization",
    "OLS Ghost Line update",
  ],
  openGraph: {
    title: "Strat Ai Release Logs & Changelog",
    description:
      "Stay updated with new indicators, performance fixes, and broker integration releases on the Strat Ai desktop client.",
    url: "https://stratai.live/changelog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai — Release Changelog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog & Core Release Logs — Strat Ai",
    description:
      "Read about our latest sub-50ms tick ingestion improvements, new options indicators, and desktop terminal updates.",
  },
  alternates: {
    canonical: "https://stratai.live/changelog",
  },
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
