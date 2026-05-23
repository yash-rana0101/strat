"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Cpu,
  Database,
  ArrowRight,
  Terminal,
  Activity,
  Shield,
  FileCode,
  Layers,
  ChevronRight
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

export default function DocsPage() {
  const agentSpecs = [
    {
      name: "Technical Agent (Rust)",
      icon: <Activity className="h-4 w-4 text-[var(--accent-primary)]" />,
      desc: "Calculates RSI14, VWAP, SMA50/200, and evaluates 5 candlestick patterns (Doji, Hammer, Engulfing). Outputs indicators to technical_signals topic."
    },
    {
      name: "Sentiment Agent (Node.js)",
      icon: <Terminal className="h-4 w-4 text-[var(--accent-primary)]" />,
      desc: "Polls Google News RSS feeds, analyzes content sentiment using DeepSeek/Claude, and publishes scores to sentiment_signals topic."
    },
    {
      name: "Predictive Agent (Rust)",
      icon: <Layers className="h-4 w-4 text-[var(--accent-primary)]" />,
      desc: "Executes Ordinary Least Squares (OLS) linear regression on a rolling 14-period window of 10-minute closes. Publishes the Ghost Line coordinate."
    },
    {
      name: "Quant-RAG Agent (Rust)",
      icon: <Shield className="h-4 w-4 text-[var(--accent-primary)]" />,
      desc: "Detects price swings ≥2.0% on completed 10-minute candles and queries DeepSeek v4 Pro for immediate contextual market anomaly insights."
    },
    {
      name: "Consensus Aggregator (Rust)",
      icon: <Cpu className="h-4 w-4 text-[var(--accent-primary)]" />,
      desc: "Fuses signals from the active agents at Port 8080. Evaluates institutional strategies (Golden/Death Cross, VWAP Bounce, ORB Breakouts)."
    }
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
              text="📖 STRAT CORE SPECIFICATIONS & BLUEPRINTS"
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
            Documentation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
          >
            Complete architecture blueprints, multi-agent specifications, local time-series schemas, and cryptographic vault policies.
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="relative mx-auto max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
              <div className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300">
                {/* Border Beam emulation */}
                <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Core Blueprint Guides
                </h4>
                <nav className="flex flex-col space-y-2.5">
                  <a
                    href="#architecture"
                    className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                    1. Ingest & Time-Series DB
                  </a>
                  <a
                    href="#agents"
                    className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                    2. The 5 Quant Agents
                  </a>
                  <a
                    href="#constraints"
                    className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                    3. Terminal Operations
                  </a>
                </nav>
              </div>

              <div className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300">
                {/* Border Beam emulation */}
                <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                <h5 className="text-xs font-mono uppercase tracking-wider text-[var(--gold-primary)] font-bold mb-2 flex items-center gap-2">
                  <FileCode className="h-4 w-4" />
                  Systems API Reference
                </h5>
                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mb-4">
                  Integrate custom quantitative modules, ingest custom indicator signals, or read raw aggregator consensus streams.
                </p>
                <a
                  href="/api-reference"
                  className="inline-flex items-center justify-center w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:bg-[var(--accent-soft)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white font-mono text-[10px] font-bold tracking-wider py-2.5 rounded-lg transition-all duration-200 uppercase gap-1.5"
                >
                  <span>API Integration Docs</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </aside>

            {/* Documentation Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Ingest and Architecture Section */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                id="architecture"
                className="scroll-mt-32 space-y-5"
              >
                <h2 className="text-lg font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2.5 flex items-center gap-2">
                  <Database className="h-5 w-5 text-[var(--accent-primary)]" />
                  1. Ingestion Pipeline & Time-Series DB
                </h2>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Strat binds directly to the active <strong>Zerodha Kite Connect WebSocket</strong> gateway. The local <code>/ingestion</code> client is compiled in native Rust utilizing Tokio async loops to parse and handle active binary frames under 5µs.
                </p>

                {/* Pipeline Table */}
                <div className="glass border border-[var(--border-subtle)] rounded-xl overflow-hidden relative">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse font-mono text-xs">
                      <thead>
                        <tr className="bg-[var(--bg-muted)] border-b border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                          <th className="p-4">PIPELINE LAYER</th>
                          <th className="p-4 text-right">IMPLEMENTATION SPECIFICATION</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                        <tr>
                          <td className="p-4 font-bold text-[var(--text-primary)]">Binary Framing Ingest</td>
                          <td className="p-4 text-right text-[var(--accent-primary)] font-bold">wss://ws.kite.trade (184-byte frames)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-[var(--text-primary)]">Queue Streaming Bus</td>
                          <td className="p-4 text-right text-[var(--accent-primary)] font-bold">Redpanda Local Ports 19092 & 29092</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-[var(--text-primary)]">High-Speed DB Persistency</td>
                          <td className="p-4 text-right text-[var(--accent-primary)] font-bold">QuestDB Influx Line Protocol (ILP) Port 9009</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.section>

              {/* Quant Agents Section */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                id="agents"
                className="scroll-mt-32 space-y-5"
              >
                <h2 className="text-lg font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2.5 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-[var(--accent-primary)]" />
                  2. The 5 Quantitative Agents
                </h2>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  We isolate market analysis and model calculations into five discrete, local micro-agents. These publish individual telemetry signals directly to Redpanda topics.
                </p>

                {/* Agents List */}
                <div className="space-y-4">
                  {agentSpecs.map((agent, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300"
                    >
                      {/* Border Beam emulation */}
                      <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_10s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                      <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.1)] text-[var(--accent-primary)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          {agent.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold font-heading text-xs text-[var(--text-primary)] mb-1">
                            {agent.name}
                          </h3>
                          <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                            {agent.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Constraints Section */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                id="constraints"
                className="scroll-mt-32 space-y-5"
              >
                <h2 className="text-lg font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2.5 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[var(--accent-primary)]" />
                  3. Terminal Operations & Sandboxing
                </h2>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  To assure safety, low latency, and operational isolation, the local client processes data in accordance with three fundamental systems bounds:
                </p>

                <div className="space-y-4">
                  <div className="glass p-5 rounded-xl border border-[var(--border-subtle)] relative overflow-hidden">
                    <h4 className="text-xs font-bold font-heading text-[var(--text-primary)] mb-1">
                      Direct Canvas Painting (Bypassing React)
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                      Ticks and raw candle queues are rendered directly to the charting canvas (via <code>chart.update()</code>). React state updates are bypassed entirely to drop interface frame latency from 15ms down to less than 1ms.
                    </p>
                  </div>

                  <div className="glass p-5 rounded-xl border border-[var(--border-subtle)] relative overflow-hidden">
                    <h4 className="text-xs font-bold font-heading text-[var(--text-primary)] mb-1">
                      Ghost Line Timeframe Restrictions
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                      The rolling Ordinary Least Squares (OLS) trend model evaluates exactly 14 completed 10-minute candles. The calculations are invalid on alternate intervals. The Ghost Line is restricted strictly to the 10m chart.
                    </p>
                  </div>

                  <div className="glass p-5 rounded-xl border border-[var(--border-subtle)] relative overflow-hidden">
                    <h4 className="text-xs font-bold font-heading text-[var(--text-primary)] mb-1">
                      Tauri Stronghold Vault Compliance
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                      All brokerage session files and API secrets are derivative configurations stored locally inside encrypted Tauri Stronghold keys. Secrets never traverse a cloud interface.
                    </p>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

