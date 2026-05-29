import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Strat Ai — Support, Sales & Partnership Inquiries",
  description:
    "Get help with Strat Ai setup, Zerodha API configuration, licensing, or technical support. Reach our trading technology team in Noida and Bengaluru via email, phone, or Discord.",
  keywords: [
    "contact Strat Ai",
    "Strat Ai support",
    "trading software support India",
    "Strat Ai customer service",
    "trading terminal help",
    "fintech support India",
  ],
  openGraph: {
    title: "Contact Strat Ai — Support, Sales & Partnership Inquiries",
    description:
      "Get help with trading terminal setup, API configuration, licensing, or technical support. Our team is based in Noida and Bengaluru, India.",
    url: "https://stratai.live//contact",
  },
  twitter: {
    card: "summary",
    title: "Contact Strat Ai — Trading Terminal Support",
    description:
      "Reach our team for setup help, licensing, or trading terminal support.",
  },
  alternates: {
    canonical: "https://stratai.live//contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
