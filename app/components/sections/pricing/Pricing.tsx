"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "../../effects/AnimateOnScroll";

export default function Pricing() {
  const plans = [
    {
      name: "Lite",
      price: "1,999",
      description: "Essential analytics for individual retail traders.",
      badge: "RETAIL LITE",
      features: [
        "2 AI agents (Technical + Trend)",
        "8 technical indicators in Rust",
        "Standard predictive Close path overlay",
        "Native desktop app (Windows + macOS)",
        "Sub-250ms signal delivery latency",
        "AES-256 encrypted API vault",
        "Email support",
      ],
      isPopular: false,
      ctaText: "Start 3 Days Free Trial",
    },
    {
      name: "Pro",
      price: "4,999",
      description: "Our flagship package with full parallel analysis and real-time execution.",
      badge: "MOST POPULAR",
      features: [
        "5 AI agents — full parallel analysis",
        "16 technical indicators in Rust",
        "OLS Ghost Line predictive overlay",
        "Quant Radar — 50 symbol scanner",
        "Deep Quant AI conviction scoring",
        "Native desktop app (Windows + macOS)",
        "Sub-50ms signal delivery latency",
        "AES-256 encrypted API vault",
        "Multi-timeframe trend analysis",
        "Priority support + updates",
      ],
      isPopular: true,
      ctaText: "Start 3 Days Free Trial",
    },
    {
      name: "Institutional",
      price: "9,999",
      description: "Colocated speed, custom models, and enterprise-grade SLA.",
      badge: "ELITE ACCESS",
      features: [
        "Everything in Pro, plus:",
        "Unlimited AI agents (Custom models)",
        "Sub-10ms colocated signal delivery",
        "Dedicated strategic accounts manager",
        "Direct WebSocket API access link",
        "Custom indicator uploads in Rust",
        "24/7 dedicated telephone support",
        "Custom risk management dashboard",
      ],
      isPopular: false,
      ctaText: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full orb-emerald pointer-events-none" />

      <div className="mx-auto max-w-[1200px] relative">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[11px] font-medium text-[var(--accent-primary)] font-mono tracking-[0.15em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 font-heading tracking-[-0.02em] leading-[1.05]">
            Transparent Pricing.
            <br />
            <span className="text-gradient italic">Institutional Power.</span>
          </h2>
          <p className="text-[var(--accent-primary)] font-mono text-sm tracking-wider uppercase mb-5">
            ✦ All plans start with a 3 days free trial ✦
          </p>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Choose the tier that fits your capital scale. Get institutional-grade
            execution with zero hidden fees.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const isInstitutional = plan.name === "Institutional";
            const isPro = plan.isPopular;

            return (
              <AnimateOnScroll
                key={plan.name}
                delay={0.1 * (index + 1)}
                className="flex flex-col h-full"
              >
                <div
                  className={`flex flex-col h-full rounded-2xl p-8 relative overflow-hidden ${
                    isPro
                      ? "gradient-border bg-[#131922] shadow-[0_0_50px_rgba(16,185,129,0.08)]"
                      : "bg-[#0C1017] border border-[var(--border-default)] transition-all duration-300 " +
                        (isInstitutional
                          ? "hover:border-[var(--gold-primary)]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]"
                          : "hover:border-[var(--accent-primary)]/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.03)]")
                  }`}
                >
                  {/* Decorative glow lines for cards */}
                  {isPro && (
                    <>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />
                      <motion.div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--accent-primary)] opacity-[0.08] blur-[60px]"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.08, 0.12, 0.08],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}

                  {isInstitutional && (
                    <>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-primary)] to-transparent" />
                      <motion.div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--gold-primary)] opacity-[0.05] blur-[60px]"
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.05, 0.09, 0.05],
                        }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}

                  <div className="text-center mb-8 relative">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-medium mb-4 font-mono tracking-wider uppercase border ${
                        isPro
                          ? "bg-[var(--accent-soft)] text-[var(--accent-hover)] border-[rgba(16,185,129,0.2)]"
                          : isInstitutional
                          ? "bg-[var(--gold-soft)] text-[var(--gold-hover)] border-[rgba(245,158,11,0.2)]"
                          : "bg-[rgba(148,163,184,0.06)] text-slate-400 border-[rgba(148,163,184,0.15)]"
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold font-mono">₹{plan.price}</span>
                      <span className="text-[var(--text-muted)] text-sm">/month</span>
                    </div>
                    <h3 className="text-lg font-bold mt-3 font-heading tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-2 min-h-[32px] max-w-[240px] mx-auto">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.03, duration: 0.3 }}
                        className="flex items-start gap-3 text-xs text-[var(--text-secondary)] leading-relaxed"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={
                            isPro
                              ? "var(--accent-primary)"
                              : isInstitutional
                              ? "var(--gold-primary)"
                              : "var(--text-secondary)"
                          }
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      id={`pricing-cta-${plan.name.toLowerCase()}`}
                      className={`w-full py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isPro
                          ? "bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-hover)] hover:shadow-[0_0_24px_var(--accent-glow)]"
                          : isInstitutional
                          ? "bg-[var(--gold-primary)] text-white hover:bg-[var(--gold-hover)] hover:shadow-[0_0_24px_rgba(245,158,11,0.2)]"
                          : "bg-[rgba(255,255,255,0.04)] text-white border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)]"
                      }`}
                    >
                      {plan.ctaText}
                    </motion.button>

                    <p className="text-[10px] text-[var(--text-muted)] text-center mt-3">
                      {isInstitutional
                        ? "Enterprise contract SLAs apply."
                        : "No commitment, cancel anytime."}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
