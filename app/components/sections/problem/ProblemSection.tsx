"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "../../effects/AnimateOnScroll";

// ── MOCKUP 1: Live Market Telemetry Feed ─────────────────────────────
const ScalperMockup: React.FC = () => {
  const [ticks, setTicks] = useState<string[]>([
    "Ingesting NSE live option chain analytics...",
    "Computing confluence thresholds: Volatility matches",
    "Consensus Aggregator: Market momentumBUY BIAS",
    "Optimal target region detected for NIFTY Futures",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const symbols = ["NIFTY Futures", "BANK NIFTY Futures", "RELIANCE", "TCS", "INFY"];
      const sym = symbols[Math.floor(Math.random() * symbols.length)];
      const price = (15000 + Math.random() * 5000).toFixed(2);
      const action = Math.random() > 0.5 ? "BUY CONFIRMATION" : "RETRACEMENT ALERT";
      
      const newTick = `Analyzed ${sym} at ₹${price} | ${action}`;
      setTicks(prev => [...prev.slice(-3), newTick]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#080B12] rounded-xl p-5 border border-[#1e293b] font-mono text-[11px] leading-relaxed text-[var(--text-secondary)] shadow-inner relative overflow-hidden h-[320px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold">Market Telemetry Stream</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 text-[9px]">
          UPDATE RATE: REAL-TIME
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto space-y-2 py-3 scrollbar-none text-left">
        {ticks.map((tick, i) => (
          <div key={i} className={i === ticks.length - 1 ? "text-emerald-400 font-medium" : "opacity-60"}>
            ⚡ {tick}
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-[#1e293b] shrink-0 flex items-center justify-between">
        <div className="text-[10px] text-gray-500">Workspace Feed Ingest</div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="text-emerald-400 font-bold">● CONNECTED</span>
          <span className="text-slate-600">|</span>
          <span className="text-gray-400">Continuous Sync</span>
        </div>
      </div>
    </div>
  );
};

// ── MOCKUP 2: Swing Trader Strategy Consensus Dial ──────────────────────────
const SwingMockup: React.FC = () => {
  const [conviction, setConviction] = useState(86);

  useEffect(() => {
    const interval = setInterval(() => {
      setConviction(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.min(Math.max(prev + delta, 82), 94);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#080B12] rounded-xl p-5 border border-[#1e293b] shadow-inner relative overflow-hidden h-[320px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 shrink-0">
        <span className="text-xs text-gray-400 tracking-wider uppercase font-semibold font-mono">Consensus Synthesis</span>
        <span className="px-2 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent-hover)] font-mono text-[9px] border border-[rgba(16,185,129,0.2)] font-semibold">
          STABLE CONFLUENCE
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
            <p className="text-[9px] text-[var(--accent-primary)] font-semibold uppercase tracking-wider font-mono">CONVICTION</p>
          </div>
        </div>

        {/* Status indicator list */}
        <div className="space-y-2 text-xs font-mono w-full sm:w-auto text-left shrink-0">
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-500 text-[10px]">TREND DIRECTION</span>
            <span className="text-emerald-400 font-bold uppercase text-[10px]">BULLISH ACCELERATION</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-500 text-[10px]">NEWS SENTIMENT</span>
            <span className="text-emerald-400 font-bold uppercase text-[10px]">POSITIVE FORECAST</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-500 text-[10px]">VOLATILITY INDEX</span>
            <span className="text-emerald-400 font-bold uppercase text-[10px]">STABLE PROFILE</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-gray-500 text-[10px]">INDICATORS CROSS</span>
            <span className="text-emerald-400 font-bold uppercase text-[10px]">CLEAN CONFLUENCE</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[#1e293b] shrink-0 flex items-center justify-between text-[10px] text-gray-500 font-mono">
        <span>Consensus: active synthesis</span>
        <span className="text-emerald-400 font-bold">ALL RESEARCH SWARMS SYNCED</span>
      </div>
    </div>
  );
};

// ── MOCKUP 3: Zero-Custody Security Vault ──────────────────────────────
const QuantMockup: React.FC = () => {
  return (
    <div className="bg-[#080B12] rounded-xl p-5 border border-[#1e293b] font-mono text-[11px] leading-relaxed text-gray-300 shadow-inner relative overflow-hidden h-[320px] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 shrink-0">
        <span className="text-xs text-gray-400 tracking-wider uppercase font-semibold">Zero-Custody Desktop Vault</span>
        <span className="px-2 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent-hover)] text-[9px] border border-[rgba(16,185,129,0.2)] font-semibold">
          LOCAL ONLY
        </span>
      </div>

      <div className="flex-grow py-6 flex flex-col justify-center text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center mx-auto text-[var(--accent-primary)] text-lg animate-pulse">
          🔒
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cryptographic Handshake Locked</h4>
          <p className="text-[10px] text-gray-500 max-w-[240px] mx-auto leading-relaxed">
            Your indicators, watchlist parameters, and API secrets are stored locally on your SSD. Strat Ai operates with absolute privacy—we never custody your trading keys.
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#1e293b] shrink-0 bg-[#080B12]">
        <div className="flex items-center justify-between text-[10px] text-gray-500">
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">● PROTECTED LOCAL HOST</span>
          </div>
          <span className="text-emerald-400">Zero Cloud Mirroring</span>
        </div>
      </div>
    </div>
  );
};

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState("asymmetry");

  const personas = [
    {
      id: "asymmetry",
      title: "Asymmetry",
      subtitle: "Institutional Asymmetry",
      benefit: "For decades, financial markets operated on a deep asymmetry. Institutional desks use dedicated quantitative analysts, risk managers, and behavioral economists to map volume, volatility, and trapped liquidity, while retail traders remain in isolation.",
      metrics: [
        { label: "Institutional Desks", value: "Fully Armed" },
        { label: "Retail Trader", value: "Isolated" },
        { label: "Market Advantage", value: "Institutional" },
      ],
      points: [
        "Institutions track volume profiles, volatility skews, and liquidity pools",
        "Retail operates in isolation, bombarded by conflicting streams of data",
        "This cognitive asymmetry breeds severe trading hesitation and fear",
        "Gut feeling takes over, causing late entries and costly psychological errors",
      ],
      mockup: <ScalperMockup />,
    },
    {
      id: "overload",
      title: "Overload",
      subtitle: "Cognitive Overload & Noise",
      benefit: "Bombarded with sensationalist media noise, deceptive price spikes, and fragmented indicators across half a dozen screens, the modern retail trader is left asking WHAT happened, long after institutions knew WHY it was going to happen.",
      metrics: [
        { label: "Media Noise", value: "Constant" },
        { label: "Price Spikes", value: "Deceptive" },
        { label: "Decision Delay", value: "High Latency" },
      ],
      points: [
        "Dozens of conflicting metrics across fragmented browser screens",
        "Deceptive price movements trigger late FOMO entries",
        "Retail is left reactive, forever chasing the trailing edge of the trend",
        "Objective reality is entirely obscured by media hyperbole and noise",
      ],
      mockup: <SwingMockup />,
    },
    {
      id: "resolution",
      title: "Resolution",
      subtitle: "The Intelligent Resolution",
      benefit: "Strat Ai was engineered to obliterate this asymmetry. It acts as a brilliant, untiring intelligence layer between you and the market. It sees the invisible board, synthesizes the chaos, neutralizes the noise, and arms you with research depth previously reserved for proprietary desks.",
      metrics: [
        { label: "Intelligence Layer", value: "Untiring" },
        { label: "Invisible Board", value: "Synthesized" },
        { label: "Decision Engine", value: "Local-First" },
      ],
      points: [
        "Obliterates market asymmetry with professional quant-level depth",
        "Fuses volume Open Interest and volatility skews into a single narrative",
        "Eliminates noise to help you trade with unshakeable psychological control",
        "Tauri-secured cryptographic storage guarantees absolute data privacy",
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
            The Philosophy
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 font-heading tracking-[-0.02em] leading-[1.05]">
            The Philosophy:
            <br />
            The <span className="text-gradient italic">Information War</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            Trading is a war of information and psychology. Strat Ai was engineered to obliterate institutional asymmetry and restore absolute psychological control.
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
                      {p.id === "resolution" ? "Strat Ai Resolution" : `${p.title} Pillar`}
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

