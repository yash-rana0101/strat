import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function BlogPage() {
  const blogs = [
    {
      title: "Inside the Agent Fusion Engine: Sub-50ms Signal Inference",
      excerpt: "An engineering deep-dive on how we pipeline 5 machine learning agents to ingest ticks, run technical calculations, and output a consensus signal in under 50 milliseconds.",
      date: "May 15, 2026",
      readTime: "6 min read",
      category: "Systems",
      accent: "text-[var(--accent-primary)] bg-[var(--accent-soft)] border-[rgba(16,185,129,0.15)]",
    },
    {
      title: "Why We Swapped Kafka for Redpanda in Our Ingestion Queue",
      excerpt: "Comparing memory footprint, setup overhead, and message delivery latency of Apache Kafka versus Redpanda for high-frequency tick storage on user desktop environments.",
      date: "April 28, 2026",
      readTime: "9 min read",
      category: "Infrastructure",
      accent: "text-[var(--gold-primary)] bg-[var(--gold-soft)] border-[rgba(245,158,11,0.15)]",
    },
    {
      title: "The Security of Sandboxed Tauri Storage: Beyond Cloud Databases",
      excerpt: "Explaining how local AES-GCM-256 master key derivation keeps Zerodha session tokens and API credentials secure within client hardware, rendering server hacks obsolete.",
      date: "March 11, 2026",
      readTime: "5 min read",
      category: "Security",
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "OLS on the 10-Minute Close: Behind the Ghost Line Math",
      excerpt: "A mathematical walkthrough of our Ordinary Least Squares (OLS) rolling 14-period linear regression model and why it is restricted specifically to 10m intervals.",
      date: "February 24, 2026",
      readTime: "7 min read",
      category: "Quant Math",
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
  ];

  return (
    <SubpageLayout
      title="Engineering & Quant Blog"
      subtitle="Read architecture deep dives, quantitative mathematics, and systems benchmarks from the creators of the Alpha Suite terminal."
      category="Strat Blog"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        {blogs.map((blog, idx) => (
          <div key={idx} className="glass rounded-2xl border border-[var(--border-subtle)] overflow-hidden flex flex-col justify-between group hover:border-[var(--accent-primary)] transition-all duration-300 shadow-md">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded border ${blog.accent} font-bold`}>
                  {blog.category}
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)] font-bold">
                  {blog.readTime}
                </span>
              </div>

              <h3 className="text-base font-bold font-heading text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent-hover)] transition-colors duration-200">
                {blog.title}
              </h3>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {blog.excerpt}
              </p>
            </div>

            <div className="border-t border-[var(--border-subtle)] px-6 py-4 bg-[var(--bg-muted)] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                {blog.date}
              </span>
              <span className="text-xs font-mono text-[var(--text-primary)] group-hover:translate-x-1 transition-transform duration-200">
                Read Deep-Dive →
              </span>
            </div>
          </div>
        ))}
      </div>
    </SubpageLayout>
  );
}
