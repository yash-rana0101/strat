import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

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
    <SubpageLayout
      title="System Changelog"
      subtitle="Track the engineering evolution, database pipeline updates, and agent performance releases of the Strat terminal."
      category="Changelog"
    >
      <div className="relative border-l border-[var(--border-default)] ml-4 md:ml-6 space-y-12 pb-8">
        {versions.map((ver, idx) => (
          <div key={ver.version} className="relative pl-8 md:pl-12 group">
            {/* Timeline node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-base)] border-2 border-[var(--accent-primary)] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_var(--accent-glow)]" />

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-mono text-sm font-bold text-[var(--accent-primary)]">
                {ver.version}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                {ver.date}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded border border-[var(--border-default)] text-[var(--text-secondary)] bg-[var(--bg-card)]">
                {ver.type}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-3">
              {ver.title}
            </h3>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 max-w-3xl">
              {ver.description}
            </p>

            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl p-4 max-w-3xl">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ver.changes.map((change, i) => (
                  <li key={i} className="text-[11px] text-[var(--text-muted)] flex items-start gap-2">
                    <span className="text-[var(--accent-primary)] font-mono font-bold">✓</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SubpageLayout>
  );
}
