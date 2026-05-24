"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  ArrowRight,
  ChevronRight,
  GitBranch,
  Calendar,
  CheckCircle
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

export default function ChangelogPage() {
  const versions = [
    {
      version: "v1.2.0-beta",
      date: "May 2026",
      title: "Tauri Sandboxed Client & Zero-Latency Charting Pipeline",
      description: "Released the native desktop application shell using Tauri + Next.js. Implemented Direct-to-Canvas render pipelines for tick-by-tick real-time stock flows, bypassing the React state reconciliation engine to eliminate rendering overhead.",
      changes: [
        "Stronghold Vault Integration: Encrypts broker API keys locally with Argon2id + AES-256 (no cloud transmission)",
        "Zero-Latency Chart: Direct canvas rendering wrapper (chart.setData() / chart.update()) for NSE/BSE tick feeds",
        "Multi-Timeframe Trend Confluence Panel: 1H, 4H, 1D, and 1W trend alignment scanner",
        "WASM Engine Bootstrapping: Precompile Rust quant strategies locally into WebAssembly execution blocks",
      ],
      type: "Major Release",
    },
    {
      version: "v1.1.0",
      date: "March 2026",
      title: "Redpanda Message Bus & QuestDB Time-Series Ingestion",
      description: "Engineered our high-frequency tick ingestion pipeline. The parser processes 184-byte raw Zerodha WebSocket tick frames and streams them to Redpanda queues and QuestDB for sub-millisecond persistency.",
      changes: [
        "Raw Ingest Parser: Ingests, parses, and serializes binary frames under 5µs via rust-tokio loops",
        "Redpanda Stream Integration: Kafka-compatible streaming bus handling up to 50,000 tick events/sec",
        "QuestDB Influx Line Protocol (ILP) Sink: Direct TCP streaming to port 9009 with automated telemetry schemas",
        "Bincode IPC Serialization: Employs bincode instead of JSON for local historical database queries to improve speed by 4x",
      ],
      type: "Infrastructure",
    },
    {
      version: "v1.0.0",
      date: "January 2026",
      title: "Core Consensus Aggregator & 5 Intelligence Agents",
      description: "Deployed the initial backend microservices orchestrating the 5 quantitative agents, consensus fusion engine, and exchange gateways.",
      changes: [
        "Consensus Engine (Port 8080): Combines signals from technicals, sentiment, and predictive pipelines",
        "OLS Ghost Line (Port 8082): Implements a 14-period linear regression trend line specifically for the 10m timeframe",
        "DeepSeek v4 Pro Insight Connection (Port 8083): Scans ≥2.0% candles swings for LLM anomaly insights",
        "16 Indicators State Machine: Initialized states for VWAP, RSI14, Bollinger Bands, CMF, OBV, and ATR",
      ],
      type: "Core Launch",
    },
  ];

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
              text="🚀 CHRONOLOGICAL INFRASTRUCTURE RELEASE LOGS"
              className="inline-flex items-center justify-center text-[10px] font-mono tracking-widest font-bold text-[var(--accent-primary)] uppercase"
            />
            <ArrowRight className="h-3 w-3 text-[var(--accent-primary)] transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--text-primary)] py-4 text-4xl font-bold leading-[1.1] tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl font-heading"
          >
            System Changelog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
          >
            Track the engineering evolution, database pipeline updates, and agent performance releases of the Strat Ai terminal.
          </motion.p>
        </section>

        {/* Timeline Content Section */}
        <section className="relative mx-auto max-w-[55rem] px-6 md:px-8">
          <div className="relative border-l border-[var(--border-default)] ml-4 md:ml-6 space-y-12 pb-8">
            {versions.map((ver, idx) => (
              <motion.div
                key={ver.version}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.15, duration: 0.5 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Node Icon/Bullet */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-base)] border-2 border-[var(--accent-primary)] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_var(--accent-glow)] flex items-center justify-center" />

                {/* Tags block */}
                <div className="flex flex-wrap items-center gap-3 mb-2 font-mono">
                  <span className="text-xs font-bold text-[var(--accent-primary)] flex items-center gap-1">
                    <GitBranch className="h-3.5 w-3.5" />
                    {ver.version}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {ver.date}
                  </span>
                  <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded border border-[var(--border-subtle)] text-[var(--text-secondary)] bg-[var(--bg-card)]">
                    {ver.type}
                  </span>
                </div>

                {/* Release Card Block */}
                <div className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300 mt-3">
                  {/* Border Beam emulation */}
                  <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                  <div className="absolute top-0 right-0 w-24 h-24 orb-emerald opacity-10 pointer-events-none" />

                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading mb-3">
                    {ver.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5">
                    {ver.description}
                  </p>

                  <div className="border-t border-[var(--border-subtle)] pt-4 mt-4">
                    <h4 className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3">
                      ✓ CORE RELEASES & COMMIT DIAGNOSTICS
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {ver.changes.map((change, i) => (
                        <li key={i} className="text-[11px] text-[var(--text-secondary)] flex items-start gap-2 leading-relaxed">
                          <CheckCircle className="h-3.5 w-3.5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back to home terminal */}
          <div className="flex justify-center pt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-soft)] text-[var(--text-primary)] hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 gap-2"
            >
              <span>Back to Home Terminal</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
