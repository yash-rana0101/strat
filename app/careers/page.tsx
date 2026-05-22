import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function CareersPage() {
  const positions = [
    {
      title: "Rust Systems Engineer (Low-Latency)",
      team: "Core Infrastructure",
      location: "Bengaluru, India / Remote",
      stack: "Rust, Tokio, WebAssembly, Redpanda",
      description: "Optimize our raw binary ingestion pipeline. You will maintain parsing loops handling 184-byte Zerodha WebSocket frames, orchestrate Redpanda message topics, and build QuestDB ILP writers (TCP port 9009) to achieve sub-millisecond write paths.",
    },
    {
      title: "Desktop UI & Frontend Engineer",
      team: "Product Experience",
      location: "Bengaluru, India / Remote",
      stack: "Next.js, Tauri IPC, WebGL, Zustand",
      description: "Design real-time stock dashboards. You will implement direct-to-canvas rendering hooks that bypass standard React virtual DOM reconciliation to paint tick-by-tick candle updates in under 1ms.",
    },
    {
      title: "Lead Quantitative Systems Researcher",
      team: "Agent Algorithms",
      location: "Remote",
      stack: "Python, PyTorch, C++, QuestDB",
      description: "Refine and calibrate our 5 decision-making agents. You will write high-frequency indicator logic (RSI, VWAP, Bollinger Bands, CMF) and OLS predictive models in C++ and Rust, backtesting algorithms against terabytes of QuestDB historical ticks.",
    },
  ];

  const perks = [
    "Competitive salary + early-stage equity allocations",
    "Hardware allowance for specialized workstation units (MacBook M3 Max or multi-core Linux desktops)",
    "Remote-first operating model with local co-working desk stipends",
    "Comprehensive medical coverage plans for your immediate family",
  ];

  return (
    <SubpageLayout
      title="Careers at Alpha Suite"
      subtitle="Join a small, hyper-focused team of engineers building high-performance local intelligence tools for Indian traders."
      category="Join Us"
    >
      <div className="space-y-16">
        {/* Intro Section */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl font-bold font-heading text-[var(--text-primary)]">
            Write Code That Runs Close to the Metal
          </h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            At Alpha Suite, we do not build typical slow, database-heavy cloud apps. We write local actor networks, multi-threaded pipeline bridges, secure system crypts, and performance canvas plots. If you are passionate about reducing thread-waiting ticks, writing highly optimized memory layouts, or training custom models locally, we would love to meet you.
          </p>
        </div>

        {/* Benefits Box */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)] mb-4 font-bold">
            Engineering Benefits & Compensations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {perks.map((perk, idx) => (
              <div key={idx} className="flex gap-3 text-xs text-[var(--text-muted)] leading-relaxed items-center">
                <span className="text-[var(--accent-primary)] text-sm">✔</span>
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Positions Grid */}
        <div className="space-y-6 pb-8">
          <h3 className="text-sm font-semibold font-heading text-[var(--text-primary)] uppercase tracking-wider">
            Active Engineering Opportunities
          </h3>
          <div className="space-y-6">
            {positions.map((pos, idx) => (
              <div key={idx} className="glass p-6 rounded-xl border border-[var(--border-subtle)] space-y-4 hover:border-[var(--accent-primary)] transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold font-heading text-[var(--text-primary)]">
                      {pos.title}
                    </h4>
                    <span className="text-xs text-[var(--text-muted)]">
                      {pos.team} | {pos.location}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase font-bold text-[var(--gold-primary)] bg-[var(--gold-soft)] px-2.5 py-1 rounded border border-[rgba(245,158,11,0.15)]">
                    {pos.stack}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {pos.description}
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:careers@strat.io"
                    className="inline-block text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-bold"
                  >
                    Apply for role →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
