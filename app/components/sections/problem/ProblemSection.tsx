"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "../../effects/AnimateOnScroll";

// ── MOCKUP 1: F&O Scalper Live Ingestion Terminal ─────────────────────────────
const ScalperMockup: React.FC = () => {
  const [ticks, setTicks] = useState<string[]>([
    "[08:42:01.025] WS FEED: Connected to NSE-FO binary stream",
    "[08:42:01.102] SINK: Writing tick packet #20194 to Redpanda",
    "[08:42:01.150] AGENT-FUSION: Consensus updated to 86% BUY",
    "[08:42:01.211] BRACKET_ORDER: Slopes check NIFTY26MAYFUT -> +0.024/sec",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toTimeString().split(" ")[0] + "." + Math.floor(Math.random() * 1000).toString().padStart(3, "0");
      const symbols = ["NIFTY26MAYFUT", "BANKNIFTY26MAYFUT", "RELIANCE", "TCS", "INFY"];
      const sym = symbols[Math.floor(Math.random() * symbols.length)];
      const price = (15000 + Math.random() * 5000).toFixed(2);
      const action = Math.random() > 0.5 ? "BUY" : "SELL";
      
      const newTick = `[${time}] TICK: ${sym} @ ₹${price} | ${action}`;
      setTicks(prev => [...prev.slice(-4), newTick]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#080B12] rounded-xl p-5 border border-[#1e293b] font-mono text-[11px] leading-relaxed text-[var(--text-secondary)] shadow-inner relative overflow-hidden h-[320px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold">Live Ingestion Terminal</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 text-[9px]">
          LATENCY: 42ms
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto space-y-2 py-3 scrollbar-none text-left">
        {ticks.map((tick, i) => (
          <div key={i} className={i === ticks.length - 1 ? "text-emerald-400 font-medium" : "opacity-60"}>
            {tick}
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-[#1e293b] shrink-0 flex items-center justify-between">
        <div className="text-[10px] text-gray-500">Queue Sink: QuestDB</div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="text-emerald-400 font-bold">● ACTIVE</span>
          <span className="text-slate-600">|</span>
          <span className="text-gray-400">12,492 ticks/sec</span>
        </div>
      </div>
    </div>
  );
};

// ── MOCKUP 2: Swing Trader Strategy Consensus Dial ──────────────────────────
const SwingMockup: React.FC = () => {
  const [conviction, setConviction] = useState(82);

  useEffect(() => {
    const interval = setInterval(() => {
      setConviction(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.min(Math.max(prev + delta, 78), 92);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#080B12] rounded-xl p-5 border border-[#1e293b] shadow-inner relative overflow-hidden h-[320px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 shrink-0">
        <span className="text-xs text-gray-400 tracking-wider uppercase font-semibold font-mono">Consensus Hub</span>
        <span className="px-2 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent-hover)] font-mono text-[9px] border border-[rgba(16,185,129,0.2)] font-semibold">
          BULL REGIME
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-around flex-grow py-3 gap-4">
        {/* Radial Circle representation */}
        <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
          <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Gray track */}
            <circle cx="50" cy="50" r="40" stroke="#1e293b" strokeWidth="6" fill="transparent" />
            {/* Glowing track */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              stroke="var(--accent-primary)" 
              strokeWidth="6" 
              fill="transparent" 
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - conviction / 100)}`}
              className="transition-all duration-1000 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="text-center z-10">
            <span className="text-2xl font-bold font-mono tracking-tighter text-white">{conviction}%</span>
            <p className="text-[9px] text-[var(--accent-primary)] font-semibold uppercase tracking-wider font-mono">BUY BIAS</p>
          </div>
        </div>

        {/* Status indicator list */}
        <div className="space-y-2 text-xs font-mono w-full sm:w-auto text-left shrink-0">
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-500 text-[10px]">TECHNICALS</span>
            <span className="text-emerald-400 font-bold uppercase text-[10px]">STRONG BUY</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-500 text-[10px]">SENTIMENT</span>
            <span className="text-emerald-400 font-bold uppercase text-[10px]">BULLISH (+0.72)</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-500 text-[10px]">PREDICTIVE OLS</span>
            <span className="text-yellow-500 font-bold uppercase text-[10px]">SIDEWAYS (R² 0.44)</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-500 text-[10px]">ANOMALY SCANS</span>
            <span className="text-emerald-400 font-bold uppercase text-[10px]">CLEAN</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[#1e293b] shrink-0 flex items-center justify-between text-[10px] text-gray-500 font-mono">
        <span>Consensus update: stream mode</span>
        <span className="text-emerald-400 font-bold">5/5 AGENTS SYNCD</span>
      </div>
    </div>
  );
};

// ── MOCKUP 3: Quant Researcher Custom Rust Strategy Compiler ──────────────
const QuantMockup: React.FC = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#080B12] rounded-xl p-5 border border-[#1e293b] font-mono text-[11px] leading-relaxed text-gray-300 shadow-inner relative overflow-hidden h-[320px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 shrink-0">
        <span className="text-xs text-gray-400 tracking-wider uppercase font-semibold">Tauri Wasm Compiler</span>
        <span className="px-2 py-0.5 rounded bg-[var(--gold-soft)] text-[var(--gold-hover)] text-[9px] border border-[rgba(245,158,11,0.2)] font-semibold">
          TARGET: WASM32
        </span>
      </div>

      <div className="flex-grow py-3 overflow-hidden text-left font-mono select-none">
        <div className="text-gray-500 text-[10px] mb-1">// Rust Strategy Template</div>
        <div>
          <span className="text-purple-400">#[spindle_strategy]</span>
        </div>
        <div>
          <span className="text-purple-400">pub struct</span> <span className="text-yellow-400">AlphaOscillator</span> &#123;
        </div>
        <div className="pl-4">
          <span className="text-blue-400">period:</span> <span className="text-emerald-400">usize</span>,
        </div>
        <div className="pl-4">
          <span className="text-blue-400">threshold:</span> <span className="text-emerald-400">f64</span>,
        </div>
        <div>&#125;</div>
        
        <div className="mt-3">
          <span className="text-purple-400">impl</span> <span className="text-yellow-400">Strategy</span> <span className="text-purple-400">for</span> <span className="text-yellow-400">AlphaOscillator</span> &#123;
        </div>
        <div className="pl-4">
          <span className="text-purple-400">fn</span> <span className="text-blue-400">on_tick</span>(&amp;<span className="text-purple-400">mut</span> <span className="text-red-400">self</span>, <span className="text-blue-400">tick:</span> &amp;<span className="text-yellow-400">Tick</span>) &#123; ... &#125;
        </div>
        <div>&#125;</div>
      </div>

      <div className="pt-3 border-t border-[#1e293b] shrink-0 bg-[#080B12]">
        <div className="flex items-center justify-between text-[10px] text-gray-500">
          <div className="flex items-center gap-1">
            <span className="text-amber-500 font-bold">● COMPILING{dots}</span>
          </div>
          <span className="text-emerald-400">Compile Time: 14.2ms</span>
        </div>
      </div>
    </div>
  );
};

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState("scalper");

  const personas = [
    {
      id: "scalper",
      title: "F&O Scalper",
      subtitle: "Millisecond execution and speed pipeline",
      benefit: "Execute rapid bracket orders and trail dynamic trends with zero latency overhead.",
      metrics: [
        { label: "Latency", value: "sub-50ms" },
        { label: "Data Pipeline", value: "Kite Stream" },
        { label: "Order Style", value: "Bracket Link" },
      ],
      points: [
        "Parallel signals updates (Technical + Trend agents)",
        "Adaptive slippage checks and micro-bracket exits",
        "SPIKE volume monitoring directly on NSE Option chain",
        "Instant drag-and-drop order pricing triggers",
      ],
      mockup: <ScalperMockup />,
    },
    {
      id: "swing",
      title: "Swing Trader",
      subtitle: "Multi-agent conviction consensus matching",
      benefit: "Ride swings with strong structural confirmation backed by 5 active analysis agents.",
      metrics: [
        { label: "Timeframe", value: "15m to Daily" },
        { label: "Consensus Check", value: "Custom Threshold" },
        { label: "Telemetry updates", value: "Live WebSocket" },
      ],
      points: [
        "5-agent parallel data fusion consensus scoring engine",
        "Historical strategy validator over historical NSE database",
        "Macro regime filters (Bull, Bear, Volatile range)",
        "Compression breakout squeeze and volume profile alerts",
      ],
      mockup: <SwingMockup />,
    },
    {
      id: "quant",
      title: "Quant Researcher",
      subtitle: "Sandboxed Rust strategy sandboxing",
      benefit: "Upload, backtest, and stream custom indicators locally inside Tauri wasm virtual machines.",
      metrics: [
        { label: "Compilation host", value: "Tauri Sandbox" },
        { label: "Telemetry", value: "QuestDB Sink" },
        { label: "Wasm Speeds", value: "10M ticks/sec" },
      ],
      points: [
        "Upload custom indicators compiled safely as WebAssembly",
        "Direct connection queries to structured QuestDB tick tables",
        "Raw telemetry logs and JSON WebSocket endpoints outputs",
        "Sandboxed memory footprint strategy execution isolation",
      ],
      mockup: <QuantMockup />,
    },
  ];

  return (
    <section id="personas" className="py-24 px-6 relative overflow-hidden bg-[#06080F]">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[var(--accent-primary)] opacity-[0.02] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] relative">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[11px] font-medium text-[var(--accent-primary)] font-mono tracking-[0.15em] uppercase mb-4">
            Personas
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 font-heading tracking-[-0.02em] leading-[1.05]">
            Engineered for
            <br />
            Your <span className="text-gradient italic">Trading Style</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Select your persona to see how the Strat aligns specialized AI agents and sub-50ms execution to your exact trading strategy.
          </p>
        </AnimateOnScroll>

        {/* Tab Selector */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1 rounded-full bg-[#0C1017] border border-[var(--border-default)] shadow-lg max-w-lg w-full relative">
            {personas.map((p) => {
              const isActive = activeTab === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-medium rounded-full relative transition-colors duration-200 cursor-pointer select-none"
                  style={{
                    color: isActive ? "white" : "var(--text-secondary)",
                  }}
                >
                  <span className="relative z-10">{p.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePersonaTab"
                      className="absolute inset-0 bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.15)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Grid */}
        <div className="min-h-[480px] lg:min-h-[360px] relative">
          <AnimatePresence mode="wait">
            {personas.map((p) => {
              if (p.id !== activeTab) return null;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Left Column (Feature Content) */}
                  <div className="lg:col-span-5 text-left flex flex-col justify-center h-full">
                    <span className="text-[11px] font-medium text-[var(--accent-primary)] font-mono tracking-[0.15em] uppercase mb-3">
                      {p.title} Workspace
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-heading tracking-tight leading-tight">
                      {p.subtitle}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                      {p.benefit}
                    </p>

                    {/* Metrics/Highlights row */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[var(--border-subtle)]">
                      {p.metrics.map((metric, i) => (
                        <div key={i} className="text-left font-mono">
                          <span className="block text-[9px] text-[var(--text-muted)] uppercase tracking-wider">
                            {metric.label}
                          </span>
                          <span className="block text-xs sm:text-sm font-bold text-white mt-1">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Points list */}
                    <ul className="space-y-3">
                      {p.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--accent-primary)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0 mt-0.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column (Visual Mockup) */}
                  <div className="lg:col-span-7 w-full">
                    <div className="relative">
                      {/* Premium card backdrop glow */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(16,185,129,0.06)] to-transparent rounded-2xl filter blur-2xl pointer-events-none -z-10" />
                      
                      <div className="relative rounded-2xl bg-[#0C1017] p-2 border border-[var(--border-default)] shadow-2xl overflow-hidden">
                        {p.mockup}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
