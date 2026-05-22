import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function AboutPage() {
  const pillars = [
    {
      title: "Bloomberg-Style Desktop Ingestion",
      content: "Traditional browser tools rely on slow REST APIs to poll candle states, introducing 500ms to 2s delays. Alpha Suite runs as a local Tauri desktop client, consuming raw binary websocket tick packages directly from Zerodha Kite in under 5µs, caching everything locally in QuestDB.",
    },
    {
      title: "Local-First Cryptographic Vaults",
      content: "We never take custody of your credentials or host them on cloud SQL databases. Your developer API secrets and session tokens are encrypted directly on your SSD inside a Tauri Stronghold vault utilizing Argon2id key derivation and AES-GCM-256 security envelopes.",
    },
    {
      title: "Five-Agent Decision Fusion",
      content: "We run 5 discrete quant agents (Technical Indicators, Google News Sentiment, OLS Linear Regression, Quant-RAG swing anomaly parser, and the Consensus Aggregator) to construct a comprehensive market consensus report at local port 8080.",
    },
  ];

  return (
    <SubpageLayout
      title="About Alpha Suite"
      subtitle="A native desktop trading intelligence terminal, built in Rust, engineered for the serious Indian F&O trader."
      category="Our Mission"
    >
      <div className="space-y-16">
        {/* Positioning Disclaimer Block */}
        <div className="border border-[var(--border-glow)] bg-[var(--accent-soft)] rounded-xl p-5 md:p-6 space-y-2">
          <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest block uppercase">
            Platform Notice & Scope of Operations
          </span>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Alpha Suite is an **intelligence and analytics terminal** only. We are **not a brokerage**, we do **not act as a trading platform**, and we **do not operate auto-execution bots**. Users must connect their own official Zerodha Kite API keys. All trade executions, strategy parameters, and risk allocations remain under the explicit, manual control of the user.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5">
            <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
              Bridging the Institutional Ingestion Gap
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Active Futures & Options traders in India are often limited by visual lag, browser state delays, and cloud routing latency. Alpha Suite was designed by systems engineers and quantitative researchers to bring institutional-grade time-series databases and local agent models directly to retail hardware.
            </p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              By packaging a high-speed Rust ingest parser, a Redpanda streaming queue, a QuestDB time-series datastore, and a local deep learning RAG framework into a sandboxed desktop client, we unlock rapid calculations with zero cloud overhead.
            </p>
          </div>
          <div className="md:col-span-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 orb-emerald opacity-25" />
            <span className="text-[10px] font-mono text-[var(--accent-primary)] block mb-2 font-bold uppercase tracking-widest">
              Engine Throughput
            </span>
            <div className="text-4xl font-bold font-heading text-[var(--text-primary)] font-mono mb-2">
              &lt; 50ms
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              End-to-end processing: Binary tick frame parse to Technical indicator computation, linear regression calculation, and local canvas paint.
            </p>
          </div>
        </div>

        {/* Architectural Pillars */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold font-heading text-[var(--text-primary)] uppercase tracking-wider">
            Our Architectural Foundations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, idx) => (
              <div key={idx} className="glass p-6 rounded-xl border border-[var(--border-subtle)] space-y-3">
                <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold">
                  0{idx + 1}.
                </span>
                <h4 className="text-sm font-bold font-heading text-[var(--text-primary)]">
                  {p.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {p.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
