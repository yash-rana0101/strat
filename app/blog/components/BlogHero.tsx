"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import ShinyText from "@/components/ui/ShinyText";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSubscribeClick: () => void;
}

export default function BlogHero({
  searchQuery,
  setSearchQuery,
  onSubscribeClick
}: BlogHeroProps) {
  return (
    <section className="relative mx-auto max-w-[80rem] px-6 text-center md:px-8 pt-10 pb-16 flex flex-col items-center">
      {/* Insights Shimmer Badge */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="backdrop-filter-[12px] inline-flex h-8 items-center justify-between rounded-full border border-white/5 bg-white/10 px-4 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-2 mb-8 cursor-pointer select-none"
        onClick={onSubscribeClick}
      >
        <ShinyText
          text="✍️ Insights & Systems Telemetry"
          className="inline-flex items-center justify-center text-[10px] font-mono tracking-widest font-bold text-[var(--accent-primary)] uppercase"
        />
        <ArrowRight className="h-3 w-3 text-[var(--accent-primary)] transition-transform duration-300 group-hover:translate-x-0.5" />
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-[var(--text-primary)] py-6 text-4xl font-bold leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl font-heading"
      >
        Strat Blog
        <br className="hidden md:block" /> Insights & Tutorials
      </motion.h1>

      {/* Hero Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
      >
        Learn about low-latency systems engineering, high-frequency data ingestion, quantitative models, and desktop terminal design. Get expert updates from the team building the future of autonomous trading terminal intelligence.
      </motion.p>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md mx-auto w-full mb-8 relative z-10"
      >
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] h-4 w-4" />
          <input
            type="text"
            placeholder="Search systems deep dives, tags, or math..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] focus:outline-none focus:border-[var(--accent-primary)] text-xs text-[var(--text-primary)] font-mono placeholder:text-[var(--text-muted)] shadow-inner transition-all"
          />
        </div>
      </motion.div>
    </section>
  );
}
