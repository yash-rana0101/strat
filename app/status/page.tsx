"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Database,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Server,
  Zap,
  Globe
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

export default function StatusPage() {
  const topics = [
    { name: "market.ticks", type: "Raw Feed", rate: "28,401 msg/s", status: "Active" },
    { name: "market.ohlc.10m", type: "Aggregated OHLC", rate: "50 msg/s", status: "Active" },
    { name: "technical_signals", type: "Indicator Stream", rate: "50 msg/s", status: "Active" },
    { name: "sentiment_signals", type: "News Sentiment Score", rate: "1 msg/min", status: "Active" },
    { name: "signals.predictive", type: "OLS Ghost Line Close", rate: "50 msg/s", status: "Active" },
    { name: "aggregated_decisions", type: "Consensus Signal (8080)", rate: "50 msg/s", status: "Active" },
  ];

  const metrics = [
    { name: "Zerodha WebSockets", status: "Operational", desc: "Ingesting 184-byte binary frames directly via wss://ws.kite.trade", latency: "14ms", icon: <Globe className="h-4 w-4" /> },
    { name: "Redpanda Streaming Bus", status: "Operational", desc: "Local Kafka message broker at ports 19092 & 29092", latency: "2ms", icon: <Server className="h-4 w-4" /> },
    { name: "QuestDB Ingest Sink", status: "Operational", desc: "Influx Line Protocol (ILP) writes on TCP port 9009", latency: "8ms", icon: <Database className="h-4 w-4" /> },
    { name: "DeepSeek v4 Pro NIM", status: "Operational", desc: "NVIDIA NIM API endpoint for Quant-RAG insights", latency: "380ms", icon: <Cpu className="h-4 w-4" /> },
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
      <div className="absolute top-[45%] right-[4%] w-[35rem] h-[35rem] rounded-full orb-purple opacity-20 pointer-events-none -z-30" />

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
              text="⚡️ REAL-TIME TELEMETRY ENGINE STATUS"
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
            System Status
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
          >
            Real-time monitor of local database ports, streaming queue event rates, and exchange indicator engine health metrics.
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="relative mx-auto max-w-[65rem] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-12"
          >
            {/* Pulsing Uptime Banner */}
            <div className="relative rounded-2xl border border-[var(--border-glow)] bg-[var(--accent-soft)] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden group hover:border-[rgba(16,185,129,0.35)] transition-all duration-300">
              {/* Border Beam emulation */}
              <div className="absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-[1px] bg-[var(--accent-soft)] rounded-[15px] -z-10 pointer-events-none" />
              
              <div className="absolute top-0 right-0 w-32 h-32 orb-emerald opacity-10 pointer-events-none" />
              
              <div className="flex items-center gap-4 relative z-10">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"></span>
                </span>
                <div>
                  <h2 className="text-base font-bold font-heading text-[var(--text-primary)]">
                    All Local Services Active
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    ConsensusEngine (Port 8080) broadcasting decisions. Last ping verified 3s ago.
                  </p>
                </div>
              </div>
              
              <div className="font-mono text-[10px] font-bold tracking-widest text-[var(--accent-primary)] bg-[var(--bg-base)] border border-[rgba(16,185,129,0.2)] px-3 py-1.5 rounded relative z-10">
                LOCAL ENGINE: OK
              </div>
            </div>

            {/* Redpanda Topics Terminal Table */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-[var(--accent-primary)]" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
                  Redpanda Stream Telemetry (Local Kafka Bus)
                </h3>
              </div>
              
              <div className="glass border border-[var(--border-subtle)] rounded-xl overflow-hidden relative">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse font-mono text-xs">
                    <thead>
                      <tr className="bg-[var(--bg-muted)] border-b border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
                        <th className="p-4">Topic Name</th>
                        <th className="p-4">Payload Type</th>
                        <th className="p-4">Publish Rate</th>
                        <th className="p-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                      {topics.map((t, idx) => (
                        <tr key={idx} className="hover:bg-emerald-500/[0.02] transition-colors duration-150">
                          <td className="p-4 font-bold text-[var(--text-primary)] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                            {t.name}
                          </td>
                          <td className="p-4">{t.type}</td>
                          <td className="p-4 text-[var(--accent-primary)] font-bold">{t.rate}</td>
                          <td className="p-4 text-right">
                            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] uppercase">
                              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                              {t.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Latency Connectors Grid */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-[var(--accent-primary)]" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
                  Interface Connection & Latency Telemetry
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Border Beam emulation */}
                    <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.15)] text-[var(--accent-primary)]">
                            {m.icon}
                          </div>
                          <h4 className="font-semibold font-heading text-xs text-[var(--text-primary)]">
                            {m.name}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.2)] px-2.5 py-1 rounded">
                          {m.latency}
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
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

