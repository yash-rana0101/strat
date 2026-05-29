import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Risk & SEBI Regulatory Disclaimer | Strat Ai",
  description:
    "Crucial risk disclosures for Indian Futures & Options (F&O) and global Crypto. Read our SEBI advisory note, software limitations, and algorithmic trading risks.",
  keywords: [
    "SEBI trading disclaimer",
    "options risk disclosure India",
    "F&O trading advisory",
    "cryptocurrency investment risk",
    "algorithmic trading notice",
    "financial terminal disclosure",
  ],
  openGraph: {
    title: "Financial Risk & Regulatory Disclaimer | Strat Ai",
    description:
      "Important regulatory information and risk disclosures for Indian derivatives trading (Nifty/Bank Nifty) and global Crypto trading. Learn about our operational scope.",
    url: "https://stratai.live//disclaimer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai — Regulatory Disclaimer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Risk & SEBI Disclaimer — Strat Ai",
    description:
      "Important advisory regarding Nifty options and F&O risk parameters. Understand that Strat Ai is an analytics tool and not a financial advisor.",
  },
  alternates: {
    canonical: "https://stratai.live//disclaimer",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
