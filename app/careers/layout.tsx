import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Careers at Strat Ai — Join Our Quantitative Trading Engineering Team",
  description:
    "Join the Strat Ai team in Noida, India. Open positions in Rust systems engineering, AI/ML quant research, desktop UI development, and trading technology. Build the future of AI-powered trading terminals.",
  keywords: [
    "fintech jobs India",
    "trading technology careers",
    "Rust engineer jobs",
    "quantitative researcher jobs India",
    "AI ML engineer fintech",
    "trading terminal developer",
    "Strat Ai careers",
    "Noida tech jobs",
    "startup jobs India",
    "algorithmic trading jobs",
  ],
  openGraph: {
    title: "Careers at Strat Ai — Join Our Quantitative Engineering Team",
    description:
      "Open positions in Rust systems engineering, AI/ML, desktop UI, and quantitative research. Build high-performance trading terminals at Strat Ai.",
    url: "https://stratai.live/careers",
  },
  twitter: {
    card: "summary",
    title: "Careers at Strat Ai — Quantitative Engineering Jobs",
    description:
      "Join our team building AI-powered trading terminals. Rust, AI/ML, and quant research roles available.",
  },
  alternates: {
    canonical: "https://stratai.live/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
