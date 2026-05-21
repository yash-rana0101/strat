"use client";

import { motion } from "framer-motion";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "./AnimateOnScroll";

export default function FeatureBento() {
  const features = [
    {
      title: "5 AI Agents",
      description:
        "Technical, Sentiment, Predictive, Quant-RAG, and Aggregator — each analyzing a different market dimension in parallel.",
      span: "md:col-span-2",
      accent: "emerald",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent-primary)"
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
      accent: "emerald",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent-primary)"
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
      accent: "emerald",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent-primary)"
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
      accent: "purple",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-ai)"
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
      accent: "emerald",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent-primary)"
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
      accent: "emerald",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full orb-emerald pointer-events-none" />

      <div className="mx-auto max-w-[1400px] relative">
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

        <StaggerContainer className="grid md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title} className={feature.span}>
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor:
                    feature.accent === "purple"
                      ? "rgba(139, 92, 246, 0.3)"
                      : "rgba(16, 185, 129, 0.25)",
                  boxShadow:
                    feature.accent === "purple"
                      ? "0 0 30px rgba(139, 92, 246, 0.08), 0 0 60px rgba(139, 92, 246, 0.03)"
                      : "0 0 30px rgba(16, 185, 129, 0.08), 0 0 60px rgba(16, 185, 129, 0.03)",
                }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 h-full cursor-pointer group"
              >
                <div
                  className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                    feature.accent === "purple"
                      ? "bg-[rgba(139,92,246,0.1)] group-hover:bg-[rgba(139,92,246,0.18)]"
                      : "bg-[var(--accent-soft)] group-hover:bg-[var(--accent-strong)]"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 font-heading">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
