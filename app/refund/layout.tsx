import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Subscription Policy — License Terms | Strat Ai",
  description:
    "Read Strat Ai's refund guidelines and cancellation terms. Learn about our 3-day full-access trial, monthly subscription renewals, and licensing terms.",
  keywords: [
    "trading software refund",
    "subscription cancellation policy",
    "quant terminal billing",
    "Nifty analytics pricing rules",
  ],
  openGraph: {
    title: "Refund & Subscription Cancellation Policy | Strat Ai",
    description:
      "Understand the subscription billing cycles, trial access terms, and license refund guidelines for Strat Ai.",
    url: "https://stratai.live//refund",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai — Refund Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Subscription Policy — Strat Ai",
    description:
      "Transparent subscription licensing terms and cancellation guidelines for the Strat Ai desktop terminal.",
  },
  alternates: {
    canonical: "https://stratai.live//refund",
  },
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
