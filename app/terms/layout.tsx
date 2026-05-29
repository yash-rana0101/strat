import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Licensing Agreement | Strat Ai",
  description:
    "Review the Terms of Service for Strat Ai. Learn about desktop licensing models, local database deployment, trading API compliance guidelines, and system responsibilities.",
  keywords: [
    "trading software license",
    "options terminal terms",
    "Zerodha API integration terms",
    "quantitative software usage",
    "local database compliance",
  ],
  openGraph: {
    title: "Terms of Service & Desktop Licensing | Strat Ai",
    description:
      "Understand the usage rights, platform licensing, and risk compliance standards for the Strat Ai desktop trading terminal.",
    url: "https://stratai.live/terms",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai — Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Strat Ai Trading Terminal",
    description:
      "Review license rules, local time-series database rights, and compliance procedures for Strat Ai.",
  },
  alternates: {
    canonical: "https://stratai.live/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
