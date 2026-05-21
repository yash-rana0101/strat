"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "../../effects/AnimateOnScroll";

const steps = [
  {
    step: "01",
    tag: "PREDICTIVE ENGINE",
    title: "OLS Ghost Line Forecasting",
    description: "Fit rolling 14-period ordinary least squares (OLS) linear regressions on 10-minute candle data. The predictive engine projects future price bands and calculates confidence scores (R²) in real-time.",
  },
  {
    step: "02",
    tag: "DATA INGESTION",
    title: "High-Frequency Tick Capture",
    description: "Ingest binary market feeds at 184 bytes per tick via the Zerodha Kite WebSocket. Decoded in a multithreaded Tokio loop, ticks are synchronized directly to QuestDB and Redpanda in sub-1ms.",
  },
  {
    step: "03",
    tag: "AGENT ANALYSIS",
    title: "5-Agent Parallel Analysis",
    description: "Five specialized Rust and Node.js micro-agents evaluate the incoming ticks in parallel: Technical, Sentiment, Predictive (OLS), Quant-RAG (DeepSeek), and Aggregator engines.",
  },
  {
    step: "04",
    tag: "CONSENSUS FUSION",
    title: "Multi-Agent Consensus",
    description: "The Consensus Aggregator fuses signals from all 5 agents, weighting indicators like RSI, VWAP, news sentiment, and linear regressions to compile a singular buy or sell conviction score.",
  },
  {
    step: "05",
    tag: "ORDER ROUTING",
    title: "Execute with Conviction",
    description: "Receive the compiled setup with precise target, limit entry, and stop-loss levels. One-click transmission routes the trade through the Tauri desktop shell to your broker terminal.",
  },
];

function Mockup1() {
  return (
    <div className="glass-strong rounded-xl p-6 border border-[var(--border-default)] h-full flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-[var(--border-subtle)] pb-3">
          <span className="font-mono text-xs text-[var(--text-secondary)]">OLS_PREDICTIVE_FORECASTING</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--accent-soft)] text-[var(--accent-primary)] border border-[var(--border-glow)] font-mono">
            R² CONFIDENCE: 94%
          </span>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded p-2.5">
              <span className="block text-[9px] font-mono text-[var(--text-muted)] uppercase">Model Formula</span>
              <span className="text-xs font-mono font-bold text-[var(--text-primary)] font-heading">y = mx + b</span>
            </div>
            <div className="bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded p-2.5">
              <span className="block text-[9px] font-mono text-[var(--text-muted)] uppercase">Slope (m)</span>
              <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">+2.45</span>
            </div>
          </div>
          <div className="bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded-lg p-3 font-mono text-[11px] text-[var(--text-secondary)] space-y-2">
            <div className="flex justify-between">
              <span>Timeframe constraint:</span>
              <span className="text-white font-bold">10m (Strict)</span>
            </div>
            <div className="flex justify-between">
              <span>Calculated slope:</span>
              <span>+2.4502 (Bullish bias)</span>
            </div>
            <div className="flex justify-between">
              <span>Intercept (b):</span>
              <span>2445.80</span>
            </div>
            <div className="flex justify-between">
              <span>R² Confidence Score:</span>
              <span className="text-[var(--accent-primary)] font-bold">94.18%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-[var(--border-subtle)] pt-3">
        <span className="block text-[9px] font-mono text-[var(--text-muted)] uppercase mb-2">Ghost Line Projection (10m Close)</span>
        <div className="bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg p-2.5 font-mono text-[10px] text-[var(--text-secondary)] space-y-1">
          <div className="flex justify-between items-center text-[var(--text-muted)]">
            <span>[14:10] Real Close:</span>
            <span>₹2,450.25  ●</span>
          </div>
          <div className="flex justify-between items-center text-[var(--accent-primary)]">
            <span>[14:20] Projected Close:</span>
            <span className="font-bold">₹2,474.75  ○ (dashed)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mockup2() {
  return (
    <div className="glass-strong rounded-xl p-6 border border-[var(--border-default)] h-full flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-[var(--border-subtle)] pb-3">
          <span className="font-mono text-xs text-[var(--text-secondary)]">TOKIO_INGESTION_CLIENT</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] absolute" />
            <span className="font-mono text-[10px] text-[var(--accent-primary)] font-bold ml-2">LIVE FEED</span>
          </div>
        </div>
        <div className="bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded-lg p-4 font-mono text-[11px] text-[var(--text-secondary)] space-y-2 h-[220px] overflow-hidden relative">
          <div className="opacity-40">wss://ws.kite.trade | handshake ok</div>
          <div className="opacity-60">[RX] 184 bytes | RELIANCE | Tick #98,241</div>
          <div className="opacity-80">[DEC] ParsedTick &#123; price: 2450.25, vol: 450 &#125;</div>
          <div className="text-[var(--accent-primary)]">[PUB] Redpanda [market.ticks] | offset: 582,042</div>
          <div className="text-white font-bold animate-pulse-ring">[DB] QuestDB ILP write | 0.82ms latency</div>
          <div className="border-t border-[var(--border-subtle)] pt-2 mt-4 flex items-center justify-between">
            <span className="text-[var(--text-muted)]">TICK_RATE:</span>
            <span className="text-[var(--accent-primary)] font-bold">120 ticks/sec</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-muted)]">LATENCY:</span>
            <span className="text-[var(--accent-primary)] font-bold">0.82ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mockup3() {
  const agents = [
    { name: "Technical Agent", lang: "Rust", detail: "RSI: 28.4 | VWAP: Bullish Bounce", color: "var(--accent-primary)" },
    { name: "Sentiment Agent", lang: "NodeJS", detail: "RSS Score: +0.78 (Strong Positive)", color: "var(--accent-primary)" },
    { name: "Predictive Agent", lang: "Rust", detail: "OLS R²: 0.94 | Trend: UP", color: "var(--accent-primary)" },
    { name: "Quant-RAG Agent", lang: "Rust", detail: "DeepSeek | No structural anomalies", color: "var(--color-ai)" },
    { name: "Aggregator Agent", lang: "Rust", detail: "Fusing parallel weights...", color: "var(--accent-primary)" },
  ];

  return (
    <div className="glass-strong rounded-xl p-6 border border-[var(--border-default)] h-full flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-[var(--border-subtle)] pb-3">
          <span className="font-mono text-xs text-[var(--text-secondary)]">AGENT_PIPELINE_STATUS</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[rgba(139,92,246,0.1)] text-[var(--color-ai)] border border-[rgba(139,92,246,0.2)] font-mono">
            5 AGENTS RUNNING
          </span>
        </div>
        <div className="space-y-3">
          {agents.map((agent, i) => (
            <div key={i} className="bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded p-2.5 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--text-primary)]">{agent.name}</span>
                <span className="text-[9px] font-mono text-[var(--text-muted)] bg-[var(--bg-card)] px-1.5 py-0.5 rounded border border-[var(--border-subtle)] font-bold">
                  {agent.lang}
                </span>
              </div>
              <span className="text-[10px] font-mono" style={{ color: agent.color === "var(--color-ai)" ? "var(--color-ai)" : "var(--text-secondary)" }}>
                {agent.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Mockup4() {
  return (
    <div className="glass-strong rounded-xl p-6 border border-[var(--border-default)] h-full flex flex-col justify-between select-none relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div>
        <div className="flex items-center justify-between mb-6 border-b border-[var(--border-subtle)] pb-3">
          <span className="font-mono text-xs text-[var(--text-secondary)]">CONSENSUS_AGGREGATION</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--accent-soft)] text-[var(--accent-primary)] border border-[var(--border-glow)] font-mono">
            REGIME: ACCUMULATION
          </span>
        </div>
        <div className="flex flex-col items-center justify-center py-4 relative">
          <div className="relative w-36 h-36 rounded-full border border-[var(--border-subtle)] flex items-center justify-center bg-[var(--bg-muted)]">
            <div className="absolute inset-2 rounded-full border border-dashed border-[var(--border-default)]" />
            <div className="absolute inset-0 rounded-full border-2 border-t-[var(--accent-primary)] border-r-[var(--accent-primary)] border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '8s' }} />
            <div className="text-center z-10">
              <span className="block text-4xl font-extrabold font-mono text-[var(--accent-primary)] leading-none">88%</span>
              <span className="text-[9px] font-mono tracking-widest text-[var(--text-secondary)] uppercase mt-2.5 block">BUY BIAS</span>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2 font-mono text-[11px] text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent-primary)] font-bold">✓</span>
            <span>RSI Oversold Divergence (Score 85)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent-primary)] font-bold">✓</span>
            <span>VWAP Golden Cross Confluence</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent-primary)] font-bold">✓</span>
            <span>News Sentiment Ingestion (+0.78)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mockup5() {
  return (
    <div className="glass-strong rounded-xl p-6 border border-[var(--border-default)] h-full flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-[var(--border-subtle)] pb-3">
          <span className="font-mono text-xs text-[var(--text-secondary)]">ORDER_EXECUTION_TICKET</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[rgba(16,185,129,0.15)] text-[var(--accent-primary)] border border-[var(--border-glow)] font-mono">
            BUY TICKET
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded p-3">
            <div>
              <span className="block text-[10px] font-mono text-[var(--text-muted)] uppercase">Instrument</span>
              <span className="text-sm font-bold text-[var(--text-primary)] font-heading">RELIANCE.NSE</span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-mono text-[var(--text-muted)] uppercase">Conviction</span>
              <span className="text-sm font-mono font-bold text-[var(--accent-primary)]">88 / 100</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded p-2.5 text-center">
              <span className="block text-[9px] font-mono text-[var(--text-muted)] uppercase mb-0.5">Limit Entry</span>
              <span className="text-xs font-mono font-bold text-[var(--text-primary)]">₹2,450.00</span>
            </div>
            <div className="bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded p-2.5 text-center">
              <span className="block text-[9px] font-mono text-[var(--text-muted)] uppercase mb-0.5">Target Profit</span>
              <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">₹2,485.00</span>
            </div>
            <div className="bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded p-2.5 text-center">
              <span className="block text-[9px] font-mono text-[var(--text-muted)] uppercase mb-0.5">Stop Loss</span>
              <span className="text-xs font-mono font-bold text-[var(--color-bear)]">₹2,432.50</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-[var(--bg-base)] text-xs font-bold py-3.5 rounded-lg border border-[var(--border-glow)] transition-colors duration-200 uppercase font-mono tracking-wider shadow-[var(--shadow-glow)]">
          Transmit Order to NSE
        </button>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // focus on the middle 20% of the viewport
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-step-index") || "0", 10);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const stepElements = containerRef.current?.querySelectorAll("[data-step-index]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => {
      stepElements?.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const renderMockup = (index: number) => {
    switch (index) {
      case 0:
        return <Mockup1 />;
      case 1:
        return <Mockup2 />;
      case 2:
        return <Mockup3 />;
      case 3:
        return <Mockup4 />;
      case 4:
        return <Mockup5 />;
      default:
        return <Mockup1 />;
    }
  };

  return (
    <section
      id="how-it-works"
      className="py-24 px-6 bg-[var(--bg-surface)] relative"
    >
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full orb-emerald opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full orb-purple opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] relative">
        <AnimateOnScroll className="text-center mb-24">
          <p className="text-[11px] font-medium text-[var(--accent-primary)] font-mono tracking-[0.15em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 font-heading tracking-[-0.02em] leading-[1.05]">
            From Data to
            <br />
            <span className="text-gradient italic">Conviction</span> in 50ms
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Every market tick flows through a purpose-built pipeline of Rust
            services and AI agents.
          </p>
        </AnimateOnScroll>

        {/* Split Container */}
        <div ref={containerRef} className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start relative">
          
          {/* Left Column: Text Steps */}
          <div className="w-full md:w-[48%] space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.step}
                data-step-index={index}
                className={`py-12 md:py-24 transition-opacity duration-300 border-l border-t-0 border-r-0 border-b-0 pl-6 ${
                  activeIndex === index
                    ? "border-[var(--accent-primary)] opacity-100"
                    : "border-[var(--border-default)] opacity-40 hover:opacity-60"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] font-bold">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Inline Mockup for mobile/tablet */}
                <div className="mt-8 block md:hidden max-w-md mx-auto aspect-[4/3]">
                  {renderMockup(index)}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visual Mockups */}
          <div className="hidden md:block w-full md:w-[50%] md:sticky md:top-32 h-[450px] self-start">
            <div className="relative w-full h-full gradient-border p-[1px]">
              <div className="w-full h-full bg-[var(--bg-card)] rounded-[var(--radius-lg)] p-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    {renderMockup(activeIndex)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
