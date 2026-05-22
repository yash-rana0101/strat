import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function DocsPage() {
  const agentSpecs = [
    { name: "Technical Agent (Rust)", desc: "Calculates RSI14, VWAP, SMA50/200, and evaluates 5 candlestick patterns (Doji, Hammer, Engulfing). Outputs indicators to technical_signals topic." },
    { name: "Sentiment Agent (Node.js)", desc: "Polls Google News RSS feeds, analyzes content sentiment using DeepSeek/Claude, and publishes scores to sentiment_signals topic." },
    { name: "Predictive Agent (Rust)", desc: "Executes Ordinary Least Squares (OLS) linear regression on a rolling 14-period window of 10-minute closes. Publishes the Ghost Line coordinate." },
    { name: "Quant-RAG Agent (Rust)", desc: "Detects price swings ≥2.0% on completed 10-minute candles and queries DeepSeek v4 Pro for immediate contextual market anomaly insights." },
    { name: "Consensus Aggregator (Rust)", desc: "Fuses signals from the active agents at Port 8080. Evaluates institutional strategies (Golden/Death Cross, VWAP Bounce, ORB Breakouts)." }
  ];

  return (
    <SubpageLayout
      title="Platform Documentation"
      subtitle="Complete architecture blueprints, agent specifications, and database pipelines for the Alpha Suite terminal."
      category="Documentation"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="glass p-5 rounded-xl border border-[var(--border-subtle)] space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
              Core Guides
            </h4>
            <nav className="flex flex-col space-y-2">
              <a href="#architecture" className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">1. Ingest & Time-Series</a>
              <a href="#agents" className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">2. The 5 Quant Agents</a>
              <a href="#constraints" className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">3. Rendering Constraints</a>
            </nav>
          </div>

          <div className="glass p-5 rounded-xl border border-[var(--border-subtle)] space-y-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-[var(--gold-primary)] font-bold">
              Developer Resources
            </h5>
            <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
              Integrate custom indicator modules or read raw decision streams programmatically.
            </p>
            <a href="/api-reference" className="inline-block text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent-primary)] pt-1 font-bold">
              API Reference →
            </a>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-12">
          {/* Ingest and Architecture Section */}
          <section id="architecture" className="scroll-mt-32 space-y-4">
            <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2">
              1. Ingestion Pipeline & Time-Series DB
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Alpha Suite connects directly to the **Zerodha Kite Connect WebSocket** feed. The `/ingestion` microservice is built in Rust using Tokio async loops to ingest binary stream frames.
            </p>
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl p-5 space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-[var(--border-subtle)] pb-2 text-[10px] text-[var(--text-muted)]">
                <span>PIPELINE LAYER</span>
                <span>IMPLEMENTATION TECH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-primary)]">Binary Parsing</span>
                <span className="text-[var(--accent-primary)]">Kite WS (184-byte frames)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-primary)]">Message Broker</span>
                <span className="text-[var(--accent-primary)]">Redpanda (Kafka-compatible)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-primary)]">Telemetry Storage</span>
                <span className="text-[var(--accent-primary)]">QuestDB (ILP Influx Port 9009)</span>
              </div>
            </div>
          </section>

          {/* Quant Agents Section */}
          <section id="agents" className="scroll-mt-32 space-y-4">
            <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2">
              2. The 5 Quantitative Agents
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              We separate market analysis into five localized, autonomous micro-agents. These compute technical indicators, scan social/news sentiment, run predictive linear regressions, and identify anomalies.
            </p>
            <div className="space-y-4">
              {agentSpecs.map((agent, index) => (
                <div key={index} className="glass p-4 rounded-xl border border-[var(--border-subtle)] space-y-1">
                  <h4 className="text-xs font-bold font-heading text-[var(--text-primary)]">
                    {agent.name}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {agent.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Constraints Section */}
          <section id="constraints" className="scroll-mt-32 space-y-4">
            <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2">
              3. Terminal Rendering Constraints
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              To support institutional-grade speed, the desktop shell operates under precise architectural rules:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="text-xs text-[var(--text-muted)] leading-relaxed">
                <strong className="text-[var(--text-primary)]">React Rendering Bypass:</strong> Ticks and candle streams are piped directly to the charting canvas (`chart.update()`) bypassing React's state loop. This drops UI update lag from 15ms down to less than 1ms.
              </li>
              <li className="text-xs text-[var(--text-muted)] leading-relaxed">
                <strong className="text-[var(--text-primary)]">Ghost Line Timeframe Restriction:</strong> The Ordinary Least Squares (OLS) predictive model is trained specifically on 10-minute candles. The Ghost Line is mathematically invalid on other intervals and is automatically hidden when the chart timeframe is switched.
              </li>
              <li className="text-xs text-[var(--text-muted)] leading-relaxed">
                <strong className="text-[var(--text-primary)]">Local Stronghold Encryption:</strong> Developer API keys and brokerage session secrets are locked in a Tauri Stronghold vault using Argon2id key derivation and AES-GCM-256 local files.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </SubpageLayout>
  );
}
