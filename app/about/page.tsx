"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Cpu,
  Layers,
  ChevronRight,
  ArrowRight,
  Database,
  Terminal,
  Activity
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

export default function AboutPage() {
  const pillars = [
    {
      title: "Direct-to-Canvas Charting",
      label: "01. Visual Performance",
      icon: <Database className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "Traditional web charting introduces visual fatigue and lag during volatile sessions. Strat Ai's dedicated canvas charting is custom-built to deliver liquid-smooth interactive updates for Indian F&O and global Crypto momentum, ensuring unbroken focus.",
    },
    {
      title: "Zero-Custody Local Privacy",
      label: "02. Absolute Sovereignty",
      icon: <Shield className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "Your custom setups, indicators, and API credentials are your edge. Strat Ai respects your intellectual property, storing all keys and configurations strictly on your own hardware. We never custody your trading keys.",
    },
    {
      title: "Autonomous Swarm Synthesis",
      label: "03. Intelligence Fusion",
      icon: <Cpu className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "Avoid cognitive overload by delegating complex calculations to our specialized quant swarm. Strat Ai continuously processes options metrics, macroeconomic sentiment, and volatility skews in parallel, synthesizing them into actionable clarity.",
    },
  ];

  return (
    <>
      {/* Background DarkVeil */}
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-[0.22]">
        <DarkVeil speed={0.15} noiseIntensity={0.01} scanlineIntensity={0.08} scanlineFrequency={1.2} />
      </div>

      {/* Decorative Orbs for premium look */}
      <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] rounded-full orb-emerald opacity-40 pointer-events-none -z-40" />
      <div className="absolute top-[30%] right-[5%] w-[35rem] h-[35rem] rounded-full orb-purple opacity-30 pointer-events-none -z-40" />

      <Navbar />

      <main className="flex-grow pt-28 md:pt-36 pb-20">
        
        {/* Centered Hero Section (Redesigned matching careers page reference) */}
        <section className="relative mx-auto max-w-[80rem] px-6 text-center md:px-8 pt-10 pb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => {
              const el = document.getElementById("pillars-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="backdrop-filter-[12px] inline-flex h-8 items-center justify-between rounded-full border border-white/5 bg-white/10 px-4 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-2 mb-8 cursor-pointer select-none"
          >
            <ShinyText
              text="🚀 Discover Who We Are & What We Are Building"
              className="inline-flex items-center justify-center text-[10px] font-mono tracking-widest font-bold text-[var(--accent-primary)] uppercase"
            />
            <ArrowRight className="h-3 w-3 text-[var(--accent-primary)] transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--text-primary)] py-6 text-4xl font-bold leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl font-heading"
          >
            Empowering Traders
            <br className="hidden md:block" /> With Professional Edge
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
          >
            Strat Ai is a high-fidelity visual workspace and market intelligence terminal, designed specifically for retail F&O traders in India and global Crypto traders who value absolute analytical privacy, real-time speed, and unshakeable trading conviction.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => {
              const el = document.getElementById("pillars-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] font-bold text-xs tracking-wider uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)] cursor-pointer gap-2"
          >
            <span>Explore Our Offerings</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </section>

        {/* Content Container */}
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 mt-8 space-y-24">
          
          {/* Platform Notice Disclaimer Block */}
          <section className="border border-[rgba(16,185,129,0.2)] bg-[var(--accent-soft)] rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 orb-emerald opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest block uppercase">
                ▲ Platform Notice & Operating Boundaries
              </span>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Strat Ai is an <strong>intelligence and analytics terminal</strong> only. We are <strong>not a brokerage</strong>, we do <strong>not act as a trading platform</strong>, and we <strong>do not operate auto-execution bots</strong>. Users must connect their own official Zerodha Kite API keys or Crypto exchange WebSocket feeds. All trade executions, strategy parameters, and risk allocations remain under the explicit, manual control of the user.
              </p>
            </div>
          </section>

          {/* Narrative & Statistical Highlights Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block">
                Restoring Clarity
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
                Bridging the Gap to Quantitative Precision
              </h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Active Futures & Options traders in India and momentum-driven global Crypto traders are often limited by information overload, visual fatigue, and fragmented tools. Traditional platforms flood users with complex, disjointed columns of raw numbers without providing synthesis. Strat Ai was created by a dedicated team of quantitative designers, traders, and software developers to clear the noise and restore deep analytical focus.
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                By combining a high-performance local-first architecture, beautiful direct-to-canvas rendering, and autonomous analytical swarms into a single elegant interface, we treat trading like the craft it is—giving retail traders the precise visual edge they deserve.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-8 relative overflow-hidden group hover:border-[rgba(0,212,255,0.3)] transition-all duration-300">
              {/* Border Beam emulation */}
              <div className="absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[15px] -z-10 pointer-events-none" />
              
              <div className="absolute top-0 right-0 w-24 h-24 orb-emerald opacity-25" />
              
              <span className="text-[10px] font-mono text-[var(--accent-primary)] block mb-2 font-bold uppercase tracking-widest">
                Synthesis Speed
              </span>
              
              <div className="text-5xl font-bold font-heading text-[var(--text-primary)] font-mono mb-3 tracking-tighter">
                &lt; 50ms
              </div>
              
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Strat Ai parses incoming market feeds, synchronizes multi-source indicator confluences, computes momentum regimes, and paints high-fidelity charts in milliseconds—keeping your visual terminal perfectly aligned with live price movements.
              </p>
            </div>
          </section>

          {/* Architectural Pillars Section */}
          <section className="space-y-10" id="pillars-section">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block">
                What We Offer
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
                Our Core Analytical Pillars
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Border Beam emulation */}
                  <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold text-[var(--accent-primary)] tracking-widest uppercase">
                        {p.label}
                      </span>
                      <div className="p-2 rounded bg-[var(--accent-soft)] border border-[rgba(0,212,255,0.1)]">
                        {p.icon}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold font-heading text-sm text-[var(--text-primary)]">
                      {p.title}
                    </h3>
                    
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {p.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action to careers or main landing */}
          <section className="border border-[var(--border-glow)] bg-[var(--accent-soft)] rounded-2xl p-8 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full orb-emerald opacity-10 pointer-events-none -z-10" />
            
            <div className="max-w-xl mx-auto space-y-3">
              <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                Want to Build the Future of Trading Workspaces?
              </h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                We are actively growing the Strat Ai team of quantitative designers, product visionaries, and systems developers. Let's create beautiful things together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/careers"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] font-bold text-xs tracking-wider uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_15px_var(--accent-glow)] cursor-pointer w-full sm:w-auto"
              >
                View Careers Portal
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold text-xs tracking-wider uppercase hover:border-[var(--text-secondary)] transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                Back to Home Terminal
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
