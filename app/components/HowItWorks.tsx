"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateOnScroll";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Connect Your Broker",
      description:
        "Link your brokerage account securely. API keys are stored in an AES-256 encrypted vault — never in plaintext.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Live Data Ingestion",
      description:
        "Binary market data streams at 184 bytes per tick via WebSocket. Parsed in Rust, published to Kafka in under 1ms.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "5 AI Agents Analyze",
      description:
        "Technical, Sentiment, Predictive, Quant-RAG, and Aggregator agents process signals in parallel. Each specializes in a different market dimension.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Consensus Fusion",
      description:
        "Signals are fused into a single BUY/SELL/HOLD decision with conviction scoring. No conflicting indicators — one clear answer.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      step: "05",
      title: "Execute with Conviction",
      description:
        "Get entry, stop-loss, and target levels with a conviction score from 0–100. Your setup, validated by 5 independent AI agents.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 px-6 bg-[var(--bg-surface)] relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] relative">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[11px] font-medium text-[var(--accent-primary)] font-mono tracking-[0.15em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 font-heading tracking-[-0.02em] leading-[1.05]">
            From Data to
            <br />
            <span className="text-gradient italic">Conviction</span> in 50ms
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Every market tick flows through a purpose-built pipeline of Rust
            services and AI agents.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          {/* Vertical connector line — desktop only */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent-primary)]/15 to-transparent pointer-events-none hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <AnimateOnScroll
                key={step.step}
                variants={
                  i % 2 === 0
                    ? {
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                      }
                    : {
                        hidden: { opacity: 0, x: 40 },
                        visible: { opacity: 1, x: 0 },
                      }
                }
                delay={i * 0.08}
              >
                <motion.div
                  whileHover={{
                    borderColor: "rgba(16, 185, 129, 0.25)",
                    boxShadow:
                      "0 0 30px rgba(16, 185, 129, 0.06), 0 0 60px rgba(16, 185, 129, 0.02)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-5 p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] cursor-pointer group"
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent-primary)] group-hover:bg-[var(--accent-strong)] transition-colors duration-200 relative">
                      {step.icon}
                      <span className="absolute -top-2 -right-2 text-[10px] font-bold text-[var(--accent-primary)] font-mono bg-[var(--bg-card)] px-1.5 py-0.5 rounded-md border border-[var(--border-subtle)]">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1.5 font-heading group-hover:text-[var(--accent-hover)] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
