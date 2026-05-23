"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  Users,
  Heart,
  Coffee,
  ArrowRight,
  Cpu,
  Search,
  ChevronRight
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

interface Position {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  stack: string;
  description: string;
  responsibilities: string[];
}

const openPositions: Position[] = [
  {
    title: "Senior Rust Systems Engineer",
    department: "Core Infrastructure",
    location: "Noida, India / Hybrid",
    type: "Full-time",
    experience: "4+ years",
    stack: "Rust, Tokio, Redpanda, QuestDB, Bincode",
    description: "Optimize our raw binary ingestion pipeline. You will maintain asynchronous actors handling 184-byte Zerodha WebSocket frames, orchestrate Redpanda clusters, and optimize QuestDB ILP write paths to achieve sub-millisecond execution.",
    responsibilities: [
      "Design and implement robust concurrent tick parsers handling up to 100,000 events/sec.",
      "Tune Kafka/Redpanda consumer lag and configure high-throughput QuestDB ingestion pipelines.",
      "Profile and optimize memory footprints, thread-waiting locks, and IPC bridges in native Rust."
    ]
  },
  {
    title: "Desktop UI & Frontend Engineer",
    department: "Product Experience",
    location: "Noida, India / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    stack: "Next.js, React, Tauri IPC, WebGL, Zustand",
    description: "Build the next-generation trading terminal interface. Implement direct-to-canvas rendering hooks that bypass React virtual DOM reconciliation to paint tick-by-tick candle updates with zero-latency.",
    responsibilities: [
      "Develop lightweight charting views leveraging direct WebGL context bindings.",
      "Architect state syncing logic (Zustand) to handle real-time circular buffers (max 3000 entries).",
      "Craft premium, high-speed UX components adhering strictly to our authoritative design tokens."
    ]
  },
  {
    title: "Quantitative Research Scientist",
    department: "Agent Algorithms",
    location: "Remote / Noida, India",
    type: "Full-time",
    experience: "3+ years",
    stack: "C++, Rust, Python, PyTorch, QuestDB",
    description: "Refine and calibrate our 5 decision-making agents. Write high-frequency indicator logic (RSI, VWAP, Bollinger Bands, CMF) and OLS predictive models in C++ and Rust, backtesting algorithms against terabytes of QuestDB historical ticks.",
    responsibilities: [
      "Implement mathematical formula templates for high-frequency technical indicators.",
      "Build and backtest OLS predictive systems (OLS Ghost Line) SPECIFIC to 10m timeframe datasets.",
      "Fine-tune the consensus-fusion parameters to optimize final aggregated BUY/SELL/HOLD scoring accuracy."
    ]
  },
  {
    title: "AI/ML Engineer (Quant-RAG)",
    department: "Agent Algorithms",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    stack: "DeepSeek v4, Claude, LangChain, Node.js",
    description: "Design and scale our swing anomaly detection engine. Tune prompt templates and retrieval mechanisms using local DeepSeek and Claude models to analyze market sentiment, news feeds, and candlestick patterns.",
    responsibilities: [
      "Develop quantitative RAG index databases combining raw candlestick anomalies with global macro news.",
      "Configure dynamic LLM prompt injections with high-precision structured JSON outputs.",
      "Establish automated LLM evaluation harnesses to verify agent sentiment scoring consistencies."
    ]
  },
  {
    title: "Developer & Trader Advocate",
    department: "Relations & Education",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    stack: "Zerodha API, Technical Indicators, Video Production",
    description: "Engage with semi-professional and prop traders. Build interactive tutorials, video breakdowns, and technical documentation highlighting custom strategy creation, Tauri Stronghold storage APIs, and custom indicators.",
    responsibilities: [
      "Create high-quality code walk-throughs, sample indicator pipelines, and developer tutorials.",
      "Actively speak at quantitative finance meetups and handle professional developer relations in private beta forums.",
      "Translate complex platform internals (like binary bincode serialization) into accessible written guides."
    ]
  },
  {
    title: "Technical Writer (Quantitative Systems)",
    department: "Marketing & Docs",
    location: "Remote",
    type: "Contract",
    experience: "2+ years",
    stack: "Markdown, API Specs, Git, Trading Terminal Ops",
    description: "Author comprehensive API documentations, tutorials, and algorithmic blueprints. Explain complex OLS ghost line logic, consensus-fusion mechanisms, and Tauri native bridge layouts in highly readable formats.",
    responsibilities: [
      "Write precise technical documentation (similar to AGENT_CONTEXT.md and DESIGN.md).",
      "Collaborate with backend core infrastructure engineers to produce complete OpenAPI schema references.",
      "Maintain the repository wiki, gitbook repositories, and security advisory guidelines."
    ]
  }
];

const benefits = [
  {
    icon: <Heart className="h-6 w-6 text-[var(--accent-primary)]" />,
    title: "Health & Family Wellness",
    description: "Comprehensive medical insurance coverage plans for your immediate family and mental health stipends."
  },
  {
    icon: <Cpu className="h-6 w-6 text-[var(--accent-primary)]" />,
    title: "Ultimate Workstations",
    description: "Generous hardware allowance for specialized systems (MacBook Pro M3 Max or multi-core Linux setups)."
  },
  {
    icon: <Users className="h-6 w-6 text-[var(--accent-primary)]" />,
    title: "Remote-First Flex",
    description: "Work-life flow with remote flexibility, co-working desk memberships, and annual team offsites."
  },
  {
    icon: <Coffee className="h-6 w-6 text-[var(--accent-primary)]" />,
    title: "Quantitative Research stipend",
    description: "A continuous learning budget for books, research databases, trading journals, and technical conferences."
  }
];

const values = [
  {
    title: "Math-Driven Rigor",
    label: "01. Rigor",
    description: "We do not guess; we compute. We verify everything with rigid backtests, detailed OLS regressions, and 16 mathematical indicators. We build tools that traders trust with real capital."
  },
  {
    title: "Trader Obsession",
    label: "02. Empathy",
    description: "Our core users are serious Indian F&O traders. We craft every line of code to provide them with a genuine statistical edge, keeping local ingestion latencies below 50ms."
  },
  {
    title: "Local-First Privacy",
    label: "03. Security",
    description: "Financial data is highly sensitive. We hold an unwavering commitment to client-side cryptography, encrypting Zerodha API keys locally in Tauri Stronghold vaults. We never run custody databases."
  },
  {
    title: "Engineering Excellence",
    label: "04. Performance",
    description: "We despise slow browser dashboards and bloated cloud systems. We embrace low-level performance, clean memory profiles, native Rust loops, and highly responsive canvas chart renderings."
  }
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeJobIdx, setActiveJobIdx] = useState<number | null>(null);

  const departments = ["All", ...Array.from(new Set(openPositions.map(j => j.department)))];

  const filteredPositions = openPositions.filter((pos) => {
    const matchesDept = selectedDept === "All" || pos.department === selectedDept;
    const matchesSearch = pos.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pos.stack.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pos.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

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
              const el = document.getElementById("open-positions");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="backdrop-filter-[12px] inline-flex h-8 items-center justify-between rounded-full border border-white/5 bg-white/10 px-4 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-2 mb-8 cursor-pointer select-none"
          >
            <ShinyText
              text="🚀 Join Our Mission"
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
            Build the Future
            <br className="hidden md:block" /> of Trading Terminal Swarms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
          >
            Join our elite engineering and quantitative team in Noida, India (or work remotely) and help us build the high-speed trading terminal that's transforming how serious traders analyze and execute in the markets.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => {
              const el = document.getElementById("open-positions");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] font-bold text-xs tracking-wider uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)] cursor-pointer gap-2"
          >
            <span>View Open Positions</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </section>

        {/* Content Container */}
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 mt-8 space-y-24">
          
          {/* Company Values Section */}
          <section className="space-y-10">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block">
                Core Philosophies
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
                What Guides Our Engineering
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <div
                  key={value.title}
                  className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(0,212,255,0.3)] transition-all duration-300"
                >
                  {/* Border Beam emulation */}
                  <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-mono font-bold text-[var(--accent-primary)] tracking-widest uppercase">
                      {value.label}
                    </span>
                  </div>
                  <h3 className="font-semibold font-heading text-sm text-[var(--text-primary)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Engineering Benefits Box */}
          <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 orb-emerald opacity-15 pointer-events-none" />
            
            <div className="mb-8">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block mb-1">
                Perks & Compensations
              </span>
              <h3 className="text-sm font-semibold font-heading text-[var(--text-primary)] uppercase tracking-wider">
                Engineering Support Infrastructure
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg border border-[rgba(0,212,255,0.15)] bg-[var(--accent-soft)] shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-semibold text-xs text-[var(--text-primary)]">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions Grid */}
          <section className="space-y-8" id="open-positions">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block">
                  Join The Swarm
                </span>
                <h3 className="text-sm font-semibold font-heading text-[var(--text-primary)] uppercase tracking-wider">
                  Active Quantitative & Systems Roles
                </h3>
              </div>
              
              {/* Search and Filters */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    placeholder="Filter by stack or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] rounded-md pl-9 pr-4 py-2 w-full md:w-56 focus:outline-none focus:border-[var(--accent-primary)] transition-all font-mono"
                  />
                </div>
                <div className="flex rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] p-0.5">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDept(dept)}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
                        selectedDept === dept
                          ? "bg-[var(--accent-primary)] text-[var(--bg-base)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredPositions.length > 0 ? (
                  filteredPositions.map((pos, idx) => {
                    const isExpanded = activeJobIdx === idx;
                    return (
                      <motion.div
                        layout
                        key={pos.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        className="glass rounded-xl border border-[var(--border-subtle)] overflow-hidden hover:border-[rgba(0,212,255,0.25)] transition-all duration-300"
                      >
                        <div 
                          onClick={() => setActiveJobIdx(isExpanded ? null : idx)}
                          className="p-6 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-[rgba(255,255,255,0.01)] transition-colors"
                        >
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-sm font-bold font-heading text-[var(--text-primary)]">
                                {pos.title}
                              </h4>
                              <span className="text-[9px] font-mono font-bold uppercase text-[var(--accent-primary)] bg-[var(--accent-soft)] border border-[rgba(0,212,255,0.15)] px-2 py-0.5 rounded">
                                {pos.department}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-[10px] text-[var(--text-muted)]">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {pos.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {pos.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <Briefcase className="h-3 w-3" />
                                Exp: {pos.experience}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end shrink-0">
                            <span className="font-mono text-[9px] font-bold text-[var(--gold-primary)] bg-[var(--gold-soft)] px-2.5 py-1 rounded border border-[rgba(245,158,11,0.15)] uppercase">
                              {pos.stack.split(", ")[0]} + More
                            </span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="p-1 rounded border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </motion.div>
                          </div>
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="border-t border-[var(--border-subtle)] bg-[rgba(255,255,255,0.005)]"
                            >
                              <div className="p-6 space-y-6">
                                <div className="space-y-2">
                                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                                    Role Context
                                  </span>
                                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                                    {pos.description}
                                  </p>
                                </div>

                                <div className="space-y-2">
                                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                                    Core Stack
                                  </span>
                                  <p className="text-xs font-mono text-[var(--gold-primary)]">
                                    {pos.stack}
                                  </p>
                                </div>

                                <div className="space-y-3">
                                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                                    Key Responsibilities
                                  </span>
                                  <ul className="space-y-2">
                                    {pos.responsibilities.map((resp, i) => (
                                      <li key={i} className="flex gap-2 text-xs text-[var(--text-muted)] leading-relaxed items-start">
                                        <span className="text-[var(--accent-primary)] font-bold font-mono">▸</span>
                                        <span>{resp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between flex-wrap gap-4">
                                  <span className="text-[10px] text-[var(--text-muted)] leading-relaxed max-w-sm">
                                    All submissions are subjected to low-latency pipeline review and technical backtesting evaluations.
                                  </span>
                                  <a
                                    href={`mailto:careers@strat.io?subject=Application for ${pos.title}`}
                                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] font-bold text-xs tracking-wider uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_15px_var(--accent-glow)] cursor-pointer"
                                  >
                                    Submit Application
                                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="text-center py-16 border border-dashed border-[var(--border-subtle)] rounded-xl">
                    <p className="text-xs text-[var(--text-muted)] font-mono">
                      No active positions matching current query setup.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Culture & D&I Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block">
                Work Environment
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
                An Equal Opportunity Engine
              </h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                We believe diverse cognitive perspectives generate more robust systems. At Strat, we are committed to building an inclusive space where engineers and developers thrive regardless of background, gender, identity, or academic pedigree.
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Whether you are a seasoned prop firm quantitative researcher or an open-source systems engineer pushing low-level Rust commits in your spare time, we build a platform where clear code and mathematical rigor act as the sole benchmark for impact.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 orb-purple opacity-20 pointer-events-none" />
              <Users className="h-10 w-10 text-[var(--accent-primary)] mb-4" />
              <h4 className="text-xs font-bold font-heading text-[var(--text-primary)] uppercase tracking-wider mb-2">
                Hyper-Focused Startup Vibe
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                We operate as a small, agile team based in Noida (India's tech-hub) where each member maintains complete ownership over their subsystems. You will interface directly with the creators, steer architectural paradigms, and see your quantitative tools deployed directly on client hardware.
              </p>
            </div>
          </section>

          {/* Dynamic Hiring Process Timeline */}
          <section className="space-y-10">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block">
                Evaluation Flow
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
                Our 4-Step Technical Pipeline
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                { step: "01", title: "Profile Evaluation", desc: "A detailed review of your low-latency, WebGL, or quantitative algorithm portfolios." },
                { step: "02", title: "Technical Challenge", desc: "An interactive assessment simulating a low-level memory optimize or canvas layout script." },
                { step: "03", title: "System Deep-Dive", desc: "A rigorous conversation regarding asynchronous tokio patterns, Tauri bridges, or mathematical indicators." },
                { step: "04", title: "Fusion & Offer", desc: "Reference checks, alignment matching, and onboarding onto the active monorepo environment." }
              ].map((s, index) => (
                <div key={index} className="glass p-5 rounded-xl border border-[var(--border-subtle)] relative space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-[var(--accent-primary)] bg-[var(--accent-soft)] border border-[rgba(0,212,255,0.1)] px-2 py-0.5 rounded">
                      Step {s.step}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold font-heading text-[var(--text-primary)]">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Speculative Submission */}
          <section className="border border-[var(--border-glow)] bg-[var(--accent-soft)] rounded-2xl p-8 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full orb-emerald opacity-10 pointer-events-none -z-10" />
            
            <div className="max-w-xl mx-auto space-y-3">
              <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                Don't See a Perfect Subsystem Fit?
              </h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                We are constantly seeking outstanding engineering minds. If you specialize in quantitative strategies, visual layouts, kernel-level networking, or security design, submit a speculative portfolio directly to our leadership inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:careers@strat.io?subject=Speculative Engineering Application"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] font-bold text-xs tracking-wider uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_15px_var(--accent-glow)] cursor-pointer w-full sm:w-auto"
              >
                Submit Speculative Portfolio
              </a>
              <a
                href="#open-positions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold text-xs tracking-wider uppercase hover:border-[var(--text-secondary)] transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                View Active Jobs
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
