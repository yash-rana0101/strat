"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateOnScroll";

export default function Pricing() {
  const features = [
    "5 AI agents — full parallel analysis",
    "16 technical indicators in Rust",
    "OLS Ghost Line predictive overlay",
    "Quant Radar — 50 symbol scanner",
    "Deep Quant AI conviction scoring",
    "Native desktop app (Windows + macOS)",
    "Sub-50ms signal delivery",
    "AES-256 encrypted API vault",
    "Multi-timeframe trend analysis",
    "Priority support + updates",
  ];

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full orb-emerald pointer-events-none" />

      <div className="mx-auto max-w-[1400px] relative">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[11px] font-medium text-[var(--accent-primary)] font-mono tracking-[0.15em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 font-heading tracking-[-0.02em] leading-[1.05]">
            One Plan.
            <br />
            <span className="text-gradient italic">Full Access.</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            No feature gating. No upsells. Every trader gets the complete
            institutional-grade toolkit.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="max-w-md mx-auto">
          <div className="gradient-border rounded-2xl p-8 relative overflow-hidden">
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />

            {/* Animated corner glow */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--accent-primary)] opacity-[0.06] blur-[60px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.06, 0.10, 0.06],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="text-center mb-8 relative">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-soft)] text-[var(--accent-hover)] border border-[rgba(16,185,129,0.2)] mb-4 font-mono">
                EARLY ACCESS
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold font-mono">₹2,499</span>
                <span className="text-[var(--text-muted)]">/month</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                Launch pricing — locks in for life
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="pricing-cta"
              className="w-full py-3.5 rounded-lg bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_24px_var(--accent-glow)] cursor-pointer"
            >
              Start Free Trial
            </motion.button>

            <p className="text-xs text-[var(--text-muted)] text-center mt-4">
              No payment required for waitlist. Invite-only during beta.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
