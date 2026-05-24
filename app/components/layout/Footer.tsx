"use client";

import { motion } from "framer-motion";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  const columns = [
    {
      title: "Platform",
      links: [
        { label: "Features", href: "/#features", isInternal: true },
        { label: "How It Works", href: "/#how-it-works", isInternal: true },
        { label: "Pricing", href: "/#pricing", isInternal: true },
        { label: "Changelog", href: "/changelog", isInternal: true },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs", isInternal: true },
        { label: "API Reference", href: "/api-reference", isInternal: true },
        { label: "System Status", href: "/status", isInternal: true },
        { label: "FAQ", href: "/#faq", isInternal: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about", isInternal: true },
        { label: "Blog", href: "/blog", isInternal: true },
        { label: "Careers", href: "/careers", isInternal: true },
        { label: "Contact", href: "/contact", isInternal: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy", isInternal: true },
        { label: "Terms of Service", href: "/terms", isInternal: true },
        { label: "Disclaimer", href: "/disclaimer", isInternal: true },
        { label: "Refund Policy", href: "/refund", isInternal: true },
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
              <div className="w-7 h-7 flex items-center justify-center">
                <img
                  src="/strat.svg"
                  alt="Strat Logo"
                  className="w-6 h-6 object-contain"
                  draggable={false}
                />
              </div>
              <span className="text-sm font-bold text-[var(--text-primary)] font-heading">
                Strat
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
              Intelligent trading, engineered for precision. Built for the
              serious trader who demands an edge.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-2 text-[11px] text-[var(--text-muted)]">
                <MapPin className="h-3.5 w-3.5 mt-0.5 text-[var(--accent-primary)] shrink-0" />
                <span>
                  Strat Labs Private Ltd.<br />
                  Koramangala 4th Block,<br />
                  Bengaluru, KA 560034
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-muted)] hover:bg-[var(--accent-soft)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-all duration-200"
                  aria-label="Twitter Profile"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-muted)] hover:bg-[var(--accent-soft)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-all duration-200"
                  aria-label="GitHub Repository"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-muted)] hover:bg-[var(--accent-soft)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
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
                    <Link
                      href={link.href}
                      className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
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
