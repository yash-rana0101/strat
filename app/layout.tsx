import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stratai.live/"),
  title: {
    default:
      "Strat Ai — AI-Powered Trading Terminal for Indian F&O & Crypto Traders",
    template: "%s | Strat Ai",
  },
  description:
    "Strat Ai fuses 5 ML agents, Nifty & Bank Nifty Open Interest analytics, and OLS predictive models into a sub-50ms desktop terminal. Built for serious Indian F&O options traders and global Crypto traders. Download for Windows & macOS.",
  keywords: [
    "AI trading terminal India",
    "Nifty options trading software",
    "Bank Nifty analysis tool",
    "F&O trading platform",
    "options open interest analysis",
    "crypto trading terminal",
    "algorithmic trading platform India",
    "Zerodha API trading app",
    "stock market analysis software",
    "quantitative trading terminal",
    "AI stock analysis India",
    "trading intelligence platform",
    "real-time market data terminal",
    "desktop trading app India",
    "NSE BSE trading software",
    "options chain analysis tool",
    "VWAP RSI MACD indicators",
    "fintech India",
    "trading news analysis",
    "financial market terminal",
  ],
  authors: [{ name: "Strat Ai Labs Private Limited" }],
  creator: "Strat Ai Labs Private Limited",
  publisher: "Strat Ai Labs Private Limited",
  openGraph: {
    title: "Strat Ai — AI-Powered Trading Intelligence Terminal",
    description:
      "5 ML agents. Sub-50ms latency. Zero-custody privacy. The trading terminal serious Indian F&O and Crypto traders deserve. Analyze Nifty, Bank Nifty options, and global Crypto with institutional-grade tools.",
    type: "website",
    locale: "en_IN",
    url: "https://stratai.live/",
    siteName: "Strat Ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strat Ai — AI-Powered Trading Terminal Dashboard showing real-time Nifty F&O analysis and Crypto charts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strat Ai — AI Trading Terminal for Indian F&O & Crypto",
    description:
      "5 ML agents running in parallel with sub-50ms latency. Analyze Nifty options, track Open Interest, and trade Crypto with institutional-grade tools. Download the desktop terminal.",
    images: ["/og-image.png"],
    creator: "@strat_ai",
  },
  alternates: {
    canonical: "https://stratai.live/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Finance",
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

// JSON-LD structured data for Organization + SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://stratai.live/#organization",
      name: "Strat Ai",
      legalName: "Strat Ai Labs Private Limited",
      url: "https://stratai.live",
      logo: {
        "@type": "ImageObject",
        url: "https://stratai.live/strat.svg",
        width: 512,
        height: 512,
      },
      description:
        "AI-powered trading intelligence terminal for Indian F&O options traders and global Crypto traders. Real-time Nifty, Bank Nifty analysis with 5 ML agents.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "80 Feet Rd, Koramangala 4th Block",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560034",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7060603346",
        contactType: "customer support",
        email: "support@stratai.live",
        availableLanguage: "English",
      },
      sameAs: [
        "https://x.com/thestratai",
        "https://github.com/thestratai",
        "https://linkedin.com/company/strat-ai",
        "https://discord.gg/strat-ai",
      ],
      foundingDate: "2025",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 50,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://stratai.live/#software",
      name: "Strat Ai",
      applicationCategory: "FinanceApplication",
      applicationSubCategory: "Trading Terminal",
      operatingSystem: "Windows 10+, macOS 12+",
      description:
        "AI-powered desktop trading terminal for Indian F&O options analysis and global Crypto trading. Features 5 ML agents, real-time Nifty & Bank Nifty Open Interest analysis, OLS predictive models, and sub-50ms signal latency.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "1999",
        highPrice: "9999",
        offerCount: 3,
      },
      featureList: [
        "5 AI agents running in parallel",
        "Sub-50ms signal latency",
        "Open Interest analysis for Nifty & Bank Nifty",
        "OLS Ghost Line predictive overlay",
        "16 technical indicators computed in Rust",
        "Zero-custody local encryption",
        "Direct Zerodha Kite API integration",
        "Global crypto WebSocket feeds",
        "GPU-accelerated candlestick rendering",
      ],
      screenshot: {
        "@type": "ImageObject",
        url: "https://stratai.live/desktop_mockup.png",
      },
      downloadUrl: "https://stratai.live/download",
      softwareVersion: "2.4.0",
      author: {
        "@id": "https://stratai.live/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://stratai.live/#website",
      url: "https://stratai.live",
      name: "Strat Ai",
      description:
        "AI-powered trading terminal for Indian stock market F&O traders and global Crypto traders",
      publisher: {
        "@id": "https://stratai.live/#organization",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
