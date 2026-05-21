"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90dvh] flex items-center overflow-hidden"
    >
      {/* Gradient mesh orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full orb-emerald"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full orb-purple"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-dot-grid" />

      <div className="relative mx-auto max-w-[1400px] w-full px-6 lg:px-10 pt-16 sm:pt-20 pb-16">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-glow)] bg-[var(--accent-soft)] w-fit mb-8 sm:mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          <span className="text-[10px] font-medium tracking-[0.15em] text-[var(--accent-hover)] font-mono uppercase">
            Beta · Early Access Open
          </span>
        </motion.div>

        {/* Asymmetric layout — text heavy left, tilted mockup right */}
        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-0 items-end">
          {/* Left — Massive editorial headline */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold leading-[0.92] tracking-[-0.03em]"
            >
              <span className="block text-[clamp(3rem,8vw,7rem)] text-[var(--text-primary)]">
                Voice of
              </span>
              <span className="block text-[clamp(3rem,8vw,7rem)] text-[var(--text-primary)]">
                the{" "}
                <span className="text-[var(--accent-primary)] italic">
                  Precision
                </span>
              </span>
              <span className="block text-[clamp(3rem,8vw,7rem)] text-[var(--text-primary)]">
                &{" "}
                <span className="text-[var(--gold-primary)] italic font-heading" style={{ fontStyle: "italic" }}>
                  Intelligence.
                </span>
              </span>
            </motion.h1>

            {/* Subtitle — editorial style */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base sm:text-lg text-[var(--text-secondary)] max-w-md leading-relaxed"
            >
              A boutique AI-powered trading terminal merging quantitative
              analysis with elite engineering to build the future of
              institutional-grade intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 mt-8"
            >
              <a
                href="#pricing"
                id="hero-cta-primary"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] font-semibold text-sm tracking-wide hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_24px_var(--accent-glow)] cursor-pointer uppercase"
              >
                Start Free Trial
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="ml-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all duration-200 cursor-pointer text-sm tracking-wide"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="mr-2"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch Demo
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap items-center gap-6 mt-8 text-[11px] text-[var(--text-muted)] font-mono tracking-wide uppercase"
            >
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                AES-256
              </span>
              <span className="w-px h-3 bg-[var(--border-default)]" />
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Sub-50ms
              </span>
              <span className="w-px h-3 bg-[var(--border-default)]" />
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4"/></svg>
                5 AI Agents
              </span>
              <span className="w-px h-3 bg-[var(--border-default)]" />
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Native Desktop
              </span>
            </motion.div>
          </div>

          {/* Right — Tilted terminal mockup (overlapping, editorial style) */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:absolute lg:right-0 lg:bottom-[-40px] lg:w-[55%] xl:w-[50%]"
          >
            {/* Shadow underneath the tilted card */}
            <div className="absolute inset-0 rounded-2xl bg-[var(--accent-primary)] opacity-[0.06] blur-[40px] translate-y-8 scale-95" />

            <div className="glow-border rounded-2xl overflow-hidden bg-[var(--bg-surface)] shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-subtle)]">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="ml-3 text-[10px] text-[var(--text-muted)] font-mono tracking-wider uppercase">
                  Strat Terminal — NIFTY50 · 10m
                </span>
              </div>

              {/* Chart area */}
              <div className="p-4 pb-2">
                <TerminalChart />
              </div>

              {/* Indicator pills */}
              <div className="flex items-center gap-2 px-4 pb-3 flex-wrap">
                {["RSI 42.3", "VWAP 22,847", "MACD ▲", "BB Upper"].map((ind) => (
                  <span
                    key={ind}
                    className="px-2 py-0.5 rounded text-[9px] font-mono tracking-wide text-[var(--text-muted)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
                  >
                    {ind}
                  </span>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-[var(--border-subtle)] text-[10px] font-mono tracking-wider uppercase">
                <span className="text-[var(--color-bull)] font-semibold">▲ BUY 78%</span>
                <span className="text-[var(--text-muted)]">Conviction: 94</span>
                <span className="text-[var(--accent-primary)]">5 Agents Active</span>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -bottom-5 -left-5 px-3 py-2 rounded-lg glass-strong text-[10px] font-mono tracking-wider text-[var(--accent-hover)] border border-[var(--border-glow)] uppercase"
              style={{ rotate: "-3deg" }}
            >
              <span className="animate-glow-pulse inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mr-2" />
              Live Signal
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute -top-4 -right-4 px-3 py-2 rounded-lg glass-strong text-[10px] font-mono tracking-wider text-[var(--gold-primary)] border border-[var(--border-gold)] uppercase"
              style={{ rotate: "-3deg" }}
            >
              Strong Buy
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />
    </section>
  );
}

function TerminalChart() {
  const candles = [
    { o: 60, c: 45, h: 35, l: 65 },
    { o: 45, c: 50, h: 38, l: 55 },
    { o: 50, c: 35, h: 30, l: 55 },
    { o: 35, c: 42, h: 28, l: 48 },
    { o: 42, c: 55, h: 25, l: 58 },
    { o: 55, c: 48, h: 40, l: 60 },
    { o: 48, c: 38, h: 32, l: 52 },
    { o: 38, c: 52, h: 30, l: 55 },
    { o: 52, c: 60, h: 25, l: 62 },
    { o: 60, c: 45, h: 38, l: 65 },
    { o: 45, c: 55, h: 35, l: 58 },
    { o: 55, c: 42, h: 35, l: 60 },
    { o: 42, c: 35, h: 28, l: 48 },
    { o: 35, c: 50, h: 25, l: 52 },
    { o: 50, c: 58, h: 22, l: 60 },
    { o: 58, c: 48, h: 40, l: 62 },
  ];

  const width = 500;
  const height = 160;
  const candleWidth = 16;
  const gap = 14;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      aria-label="Animated candlestick chart showing market data"
    >
      {[0.25, 0.5, 0.75].map((ratio) => (
        <line
          key={ratio}
          x1="0"
          y1={height * ratio}
          x2={width}
          y2={height * ratio}
          stroke="var(--border-subtle)"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      ))}

      {candles.map((candle, i) => {
        const x = 15 + i * (candleWidth + gap);
        const bullish = candle.c < candle.o;
        const color = bullish ? "var(--color-bull)" : "var(--color-bear)";
        const bodyTop = Math.min(candle.o, candle.c);
        const bodyHeight = Math.abs(candle.c - candle.o);

        return (
          <g key={i}>
            <line
              x1={x + candleWidth / 2}
              y1={candle.h * (height / 80)}
              x2={x + candleWidth / 2}
              y2={candle.l * (height / 80)}
              stroke={color}
              strokeWidth="1.5"
              opacity="0.7"
            />
            <rect
              x={x}
              y={bodyTop * (height / 80)}
              width={candleWidth}
              height={Math.max(bodyHeight * (height / 80), 2)}
              fill={color}
              rx="1.5"
            />
          </g>
        );
      })}

      {/* Ghost line */}
      <line
        x1={15 + 14 * (candleWidth + gap) + candleWidth / 2}
        y1={50 * (height / 80)}
        x2={width - 10}
        y2={38 * (height / 80)}
        stroke="var(--accent-primary)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        opacity="0.7"
      />

      {/* EMA line */}
      <polyline
        points={candles
          .map(
            (c, i) =>
              `${15 + i * (candleWidth + gap) + candleWidth / 2},${((c.o + c.c) / 2) * (height / 80)}`
          )
          .join(" ")}
        fill="none"
        stroke="var(--accent-primary)"
        strokeWidth="1.5"
        opacity="0.3"
      />
    </svg>
  );
}
