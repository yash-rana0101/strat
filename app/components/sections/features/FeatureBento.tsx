"use client";

import { AnimateOnScroll } from "../../effects/AnimateOnScroll";
import MagicBento, { BentoCardProps } from "./MagicBento";

export default function FeatureBento() {
  const features: BentoCardProps[] = [
    {
      title: "5 AI Agents",
      description:
        "Technical, Sentiment, Predictive, Quant-RAG, and Aggregator — each analyzing a different market dimension in parallel.",
      span: "md:col-span-2",
      glowColor: "16, 185, 129", // Emerald
      label: "AI Swarm",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
    },
    {
      title: "OLS Ghost Line",
      description:
        "14-period linear regression predicts the next candle close with R² confidence scoring. Visible on 10m timeframe.",
      span: "md:col-span-1",
      glowColor: "16, 185, 129", // Emerald
      label: "Predictive",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M2 20L22 4" strokeDasharray="4 3" />
          <circle cx="6" cy="16" r="2" />
          <circle cx="18" cy="6" r="2" />
        </svg>
      ),
    },
    {
      title: "Quant Radar",
      description:
        "Background scanner monitors 50 F&O symbols every 60 seconds. Alerts fire on Golden Cross, ORB Breakout, and high-conviction setups.",
      span: "md:col-span-1",
      glowColor: "16, 185, 129", // Emerald
      label: "Scanner",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="6" />
        </svg>
      ),
    },
    {
      title: "Deep Quant AI",
      description:
        "On-demand LLM analysis. Generates conviction scores, setup validation, entry/SL/target levels from 200 candles + news context.",
      span: "md:col-span-2",
      glowColor: "139, 92, 246", // Purple
      label: "Generative Model",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 8h2M7 11h4" />
        </svg>
      ),
    },
    {
      title: "16 Technical Indicators",
      description:
        "RSI, VWAP, MACD, Bollinger Bands, Stochastic, OBV, CMF, ATR, Parabolic SAR, and more — computed in Rust at native speed.",
      span: "md:col-span-1",
      glowColor: "16, 185, 129", // Emerald
      label: "Analytics",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: "Native Desktop Performance",
      description:
        "Built on Tauri + Rust. No browser overhead. Direct IPC, bincode serialization, and chart rendering that bypasses React for zero-latency updates.",
      span: "md:col-span-1",
      glowColor: "16, 185, 129", // Emerald
      label: "Performance",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: "Tauri Stronghold Vault",
      description:
        "Isolate and encrypt Zerodha Kite API keys locally using Argon2id key derivation and AES-256. Credentials never touch external servers or plaintext storage.",
      span: "md:col-span-1",
      glowColor: "245, 158, 11", // Gold/Amber for security
      label: "Security",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 px-8 md:px-16 relative overflow-hidden bg-[#06080F]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full orb-emerald pointer-events-none" />

      <div className="mx-auto max-w-[1100px] relative">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[11px] font-medium text-[var(--accent-primary)] font-mono tracking-[0.15em] uppercase mb-4">
            Platform
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 font-heading tracking-[-0.02em] leading-[1.05]">
            Purpose-Built for
            <br />
            <span className="text-gradient italic">Precision</span> Trading
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Every feature is engineered for serious traders. No generic
            dashboards — only institutional-grade tools.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <MagicBento
            cards={features}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={350}
            particleCount={15}
            glowColor="16, 185, 129"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
