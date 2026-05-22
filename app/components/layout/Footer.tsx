"use client";

import { motion } from "framer-motion";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Footer() {
  const columns = [
    {
      title: "Platform",
      links: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "System Status", href: "#" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Disclaimer", href: "#" },
        { label: "Refund Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-muted)]">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(16,185,129,0.2)] to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-8 pb-16">
        {/* Brand Text Hover Effect Header */}
        <div className="w-full h-[6rem] sm:h-[8rem] md:h-[11rem] lg:h-[14rem] flex items-center justify-center overflow-hidden select-none mb-4">
          <TextHoverEffect text="STRAT" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[var(--accent-primary)] to-[#6EE7B7] flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  <path d="M13 13l6 6" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[var(--text-primary)] font-heading">
                Strat
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Intelligent trading, engineered for precision. Built for the
              serious trader who demands an edge.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3 font-heading">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © 2025 Strat. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with Rust, Tauri, and Next.js
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-[var(--border-subtle)] px-6 py-4"
      >
        <p className="mx-auto max-w-[1280px] text-[10px] text-[var(--text-muted)] leading-relaxed text-center">
          Trading in financial markets involves substantial risk. Strat provides
          analysis and intelligence tools only — it does not guarantee profits or
          provide financial advice. Past performance of indicators does not
          guarantee future results. Please consult a SEBI-registered advisor
          before making investment decisions.
        </p>
      </motion.div>
    </footer>
  );
}
