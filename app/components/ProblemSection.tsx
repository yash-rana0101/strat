"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

export default function ProblemSection() {
  const problems = [
    {
      title: "Retail Charting Tools",
      issues: [
        "Delayed data with 15-min lag",
        "No AI signal fusion",
        "Manual indicator setup",
        "Browser-based, slow rendering",
      ],
    },
    {
      title: "Generic Trading Platforms",
      issues: [
        "Built for US markets, not yours",
        "No F&O-specific intelligence",
        "Subscription fatigue — ₹5K+/month",
        "No institutional-grade analysis",
      ],
    },
    {
      title: "Spreadsheet Warriors",
      issues: [
        "Hours of manual backtesting",
        "No real-time signal delivery",
        "Missed entries from slow analysis",
        "Zero automation of conviction scoring",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[var(--color-bear)] opacity-[0.02] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] relative">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[11px] font-medium text-[var(--color-bear)] font-mono tracking-[0.15em] uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 font-heading tracking-[-0.02em] leading-[1.05]">
            Built to Replace
            <br />
            What&apos;s{" "}
            <span className="text-[var(--color-bear)] italic">Broken</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Retail platforms give you lagging indicators and generic charts. You
            need institutional-grade intelligence, purpose-built for precision.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor: "rgba(239, 68, 68, 0.3)",
                }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 h-full cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-4 text-[var(--color-bear)] font-heading">
                  {problem.title}
                </h3>
                <ul className="space-y-3">
                  {problem.issues.map((issue) => (
                    <li
                      key={issue}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-bear)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="mt-0.5 shrink-0 opacity-70"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {issue}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
