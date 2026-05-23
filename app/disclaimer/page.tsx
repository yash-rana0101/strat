"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Terminal,
  Activity,
  AlertTriangle,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

export default function DisclaimerPage() {
  return (
    <>
      {/* Background DarkVeil CRT scanline layer */}
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-[0.22]">
        <DarkVeil speed={0.15} noiseIntensity={0.01} scanlineIntensity={0.08} scanlineFrequency={1.2} />
      </div>

      {/* Dotted pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-dot-grid -z-40" />

      {/* Decorative Background Orbs */}
      <div className="absolute top-[10%] left-[4%] w-[40rem] h-[40rem] rounded-full orb-emerald opacity-30 pointer-events-none -z-30" />
      <div className="absolute top-[40%] right-[4%] w-[35rem] h-[35rem] rounded-full orb-purple opacity-20 pointer-events-none -z-30" />

      <Navbar />

      <main className="flex-grow pt-28 md:pt-36 pb-24">
        {/* Centered Hero Section */}
        <section className="relative mx-auto max-w-[80rem] px-6 text-center md:px-8 pt-10 pb-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-filter-[12px] inline-flex h-8 items-center justify-between rounded-full border border-white/5 bg-white/10 px-4 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-2 mb-8 cursor-pointer select-none"
          >
            <ShinyText
              text="⚠️ REGULATORY RISK COMPLIANCE DISCLOSURES"
              className="inline-flex items-center justify-center text-[10px] font-mono tracking-widest font-bold text-[var(--gold-primary)] uppercase"
            />
            <ArrowRight className="h-3 w-3 text-[var(--gold-primary)] transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--text-primary)] py-4 text-4xl font-bold leading-[1.1] tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl font-heading"
          >
            Regulatory Disclaimer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
          >
            Last updated: May 22, 2026. Important compliance guidelines, SEBI regulations, and market risk statements regarding algorithmic trading terminals.
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="relative mx-auto max-w-[55rem] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-10"
          >
            {/* SEBI F&O Mandatory Warning Box */}
            <div className="border border-[var(--border-gold)] bg-[var(--gold-soft)] rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 orb-gold opacity-15 pointer-events-none" />
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-[var(--gold-primary)] flex-shrink-0 animate-[pulse_2s_infinite]" />
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[var(--gold-primary)] font-bold tracking-widest block uppercase">
                    SEBI Mandatory Disclosure for Futures & Options
                  </span>
                  <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                    9 out of 10 individual traders in equity Futures and Options (F&O) segment incurred net losses. On average, loss makers registered net trading loss close to ₹50,000. Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs. Those making net profits represent less than 11% of active accounts.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer Grid */}
            <div className="space-y-6">
              {/* 1. Non-Broker */}
              <div className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300">
                {/* Border Beam emulation */}
                <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_10s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.1)] text-[var(--accent-primary)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading text-sm text-[var(--text-primary)] mb-2">
                      1. Non-Broker & Non-Advisory Operations
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Strat is a <strong>software terminal for analytics and indicators</strong>. We do <strong>not act as a SEBI-registered Investment Advisor (RIA)</strong>, a Research Analyst, or a stock broker. We do <strong>not provide financial advisory</strong>, portfolio management, or trade execution services. The terminal is a localized dashboard designed for user-directed research and manual execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Technical Indicator */}
              <div className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300">
                {/* Border Beam emulation */}
                <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_10s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.1)] text-[var(--accent-primary)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading text-sm text-[var(--text-primary)] mb-2">
                      2. Technical Indicator & Model Warnings
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      All computations (including RSI, VWAP, Bollinger Bands, CMF trend gauges, OLS Ghost Lines, and DeepSeek insights) are generated by local algorithms from raw historical or streaming feed ticks. These mathematical calculations are for study only and do not guarantee profits. Past simulated backtests are not indicators of future market returns.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Algorithmic Execution */}
              <div className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300">
                {/* Border Beam emulation */}
                <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_10s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.1)] text-[var(--accent-primary)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading text-sm text-[var(--text-primary)] mb-2">
                      3. Algorithmic Execution Responsibilities
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Strat does not support pooled-funds, automated copy-trading, or unsupervised execution bots. Any strategy routing or indicators evaluations must be validated manually by the user. The user is solely responsible for getting required regulatory approvals from exchanges if they choose to link indicators directly to broker order APIs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to home terminal */}
            <div className="flex justify-center pt-4">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-soft)] text-[var(--text-primary)] hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 gap-2"
              >
                <span>Back to Home Terminal</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

