"use client";

import { useEffect, useRef, useState } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";

function useCountUp(
  target: number,
  duration: number = 2000,
  suffix: string = ""
) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value: `${value}${suffix}` };
}

export default function Stats() {
  const stat1 = useCountUp(5, 1500);
  const stat2 = useCountUp(16, 1800);
  const stat3 = useCountUp(50, 2000, "ms");
  const stat4 = useCountUp(50, 1600);

  const stats = [
    { ...stat1, label: "AI Agents", sublabel: "Running in parallel" },
    { ...stat2, label: "Technical Indicators", sublabel: "Computed in Rust" },
    { ...stat3, label: "Signal Latency", sublabel: "Tick to decision" },
    { ...stat4, label: "F&O Symbols", sublabel: "Scanned every 60s" },
  ];

  return (
    <section className="py-24 px-6 bg-[var(--bg-surface)] relative overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent" />

      <div className="mx-auto max-w-[1400px]">
        <AnimateOnScroll className="text-center mb-12">
          <p className="text-[11px] font-medium text-[var(--accent-primary)] font-mono tracking-[0.15em] uppercase mb-4">
            By The Numbers
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-[-0.02em] leading-[1.05]">
            Performance That{" "}
            <span className="text-gradient italic">Speaks</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div
                ref={stat.ref}
                className="text-center p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] relative group hover:border-[var(--border-glow)] transition-all duration-300"
              >
                {/* Inner glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[var(--accent-soft)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative">
                  <div className="text-4xl sm:text-5xl font-bold text-gradient font-mono mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-[var(--text-primary)] mb-1 font-heading">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
