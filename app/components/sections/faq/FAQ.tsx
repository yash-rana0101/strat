"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "../../effects/AnimateOnScroll";

const faqs = [
  {
    q: "Which brokers and exchanges are supported?",
    a: "Currently, Strat Ai integrates with Zerodha Kite via their official API for Indian F&O. For global Crypto trading, it integrates directly via high-speed WebSockets with major exchanges like Binance, Coinbase, and OKX. Support for additional Indian brokers (Upstox, Angel One) is on the roadmap.",
  },
  {
    q: "Is this an auto-trading bot?",
    a: "No. Strat Ai provides intelligence, setups, and recommendations — explaining the narrative of the market in real-time, providing supply/demand confluences, trend scores, and risk parameters. You always retain absolute sovereignty and make the final execution decision.",
  },
  {
    q: "How is my API key secured?",
    a: "API keys are stored in a local Tauri Stronghold cryptographic vault using Argon2id key derivation and AES-256-GCM encryption. Strat Ai has a zero-custody model—your keys are derived locally and never exit your device to a cloud server.",
  },
  {
    q: "What markets does it cover?",
    a: "It covers the complex depths of the Indian Equities sector (NSE/BSE) optimized for Futures & Options (F&O), and the relentless 24/7 global Crypto landscape. The terminal dynamically shifts its analytical lens based on the asset class you select.",
  },
  {
    q: "Does it work on Mac and Windows?",
    a: "Yes. Strat Ai is built on Tauri, which compiles to native binaries for both Windows and macOS. Linux support is planned.",
  },
  {
    q: "What is the OLS Ghost Line?",
    a: "The Ghost Line is a predictive overlay using Ordinary Least Squares (OLS) regression on 14 closing prices. It shows where the next candle close is likely to land, with an R² confidence score. Only visible on timeframes where the mathematical projection is statistically valid.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[800px]">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[11px] font-medium text-[var(--accent-primary)] font-mono tracking-[0.15em] uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-heading tracking-[-0.02em] leading-[1.05]">
            Questions &{" "}
            <span className="text-gradient italic">Answers</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-base sm:text-lg">
            Everything you need to know about Strat Ai.
          </p>
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 0.06}>
              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden hover:border-[var(--border-glow)] transition-colors duration-300">
                <button
                  id={`faq-${i}`}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  aria-expanded={openIndex === i}
                >
                  <span className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-hover)] transition-colors duration-200 font-heading">
                    {faq.q}
                  </span>
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--text-muted)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="shrink-0 ml-4"
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-[var(--text-secondary)] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
