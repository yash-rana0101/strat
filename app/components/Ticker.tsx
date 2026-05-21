"use client";

export default function Ticker() {
  const items = [
    "NOW ACCEPTING BETA APPLICATIONS",
    "SUB-50MS SIGNAL LATENCY",
    "5 AI AGENTS · 16 INDICATORS",
    "BUILT IN RUST · NATIVE DESKTOP",
    "AES-256 ENCRYPTED VAULT",
    "QUANT RADAR: 50 SYMBOLS SCANNED",
    "POWERED BY DEEP QUANT AI",
    "EARLY ACCESS · INVITE ONLY",
  ];

  return (
    <div className="relative bg-[var(--accent-primary)] overflow-hidden h-9 z-[60] flex items-center">
      <div className="flex items-center h-full animate-ticker whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="text-[11px] font-medium tracking-[0.15em] text-[var(--bg-base)] font-mono uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--bg-base)] opacity-40" />
          </span>
        ))}
      </div>
    </div>
  );
}
