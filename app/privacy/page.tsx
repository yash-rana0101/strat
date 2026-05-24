"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Shield,
  Activity,
  HardDrive,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. No Cloud Storage for Brokerage or Exchange Credentials",
      icon: <HardDrive className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "Strat Ai is a local desktop application. Your Zerodha Kite Connect API keys, daily access tokens, and Crypto exchange API secrets are stored locally on your own machine. We do not operate cloud databases to host or mirror your credentials, rendering centralized leaks impossible.",
    },
    {
      title: "2. Tauri Stronghold Encryption Standards",
      icon: <Lock className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "All sensitive files, including credentials and user watchlist paths, are written to local disk directories encrypted inside a Tauri Stronghold vault using Argon2id master key derivation and AES-GCM-256 encryption. Memory is zeroed out immediately after API requests complete to prevent RAM scraper exploits.",
    },
    {
      title: "3. Direct-to-Broker & Exchange WebSocket Pipeline",
      icon: <Activity className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "When connecting your feed, the client initiates a direct connection from your computer to the official broker gateway (wss://ws.kite.trade) or direct Crypto exchange WebSockets. Ticks are parsed locally, queued on your local Redpanda bus, and cached on your local QuestDB instance. No telemetry or transaction details are routed through intermediary servers.",
    },
    {
      title: "4. Anonymized Diagnostic Audits",
      icon: <Shield className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "If you explicitly toggle 'Submit Diagnostics' in the developer panel, the application will periodically send anonymized system crash telemetry (e.g. system memory allocation locks or Tokio stream panics) to our support system. These reports never contain API keys, trading decisions, or custom strategy parameters.",
    },
  ];

  return (
    <>
      {/* Background DarkVeil CRT scanline layer */}
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-[0.22]">
        <DarkVeil speed={0.15} noiseIntensity={0.01} scanlineIntensity={0.08} scanlineFrequency={1.2} />
      </div>

      {/* Dotted pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-dot-grid -z-40" />

      {/* Decorative Background Orbs */}
      <div className="absolute top-[10%] left-[4%] w-[40rem] h-[40rem] rounded-full orb-emerald opacity-30 pointer-events-none -z-30" />
      <div className="absolute top-[40%] right-[4%] w-[35rem] h-[35rem] rounded-full orb-purple opacity-20 pointer-events-none -z-30" />

      <Navbar />

      <main className="flex-grow pt-28 md:pt-36 pb-24">
        {/* Centered Hero Section */}
        <section className="relative mx-auto max-w-[80rem] px-6 text-center md:px-8 pt-10 pb-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-filter-[12px] inline-flex h-8 items-center justify-between rounded-full border border-white/5 bg-white/10 px-4 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-2 mb-8 cursor-pointer select-none"
          >
            <ShinyText
              text="🔒 LOCAL-FIRST CRYPTOGRAPHIC PRIVACY"
              className="inline-flex items-center justify-center text-[10px] font-mono tracking-widest font-bold text-[var(--accent-primary)] uppercase"
            />
            <ArrowRight className="h-3 w-3 text-[var(--accent-primary)] transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--text-primary)] py-4 text-4xl font-bold leading-[1.1] tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl font-heading"
          >
            Privacy & Data Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
          >
            Last updated: May 22, 2026. Learn how our local-first architecture keeps your credentials and trading strategies strictly private on your own hardware.
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="relative mx-auto max-w-[55rem] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-10"
          >
            {/* Introductory Notice */}
            <div className="glass border border-[var(--border-subtle)] rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 orb-emerald opacity-10 pointer-events-none" />
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                At Strat Ai, we prioritize the absolute sovereignty of your trading configurations and credentials. Because our software terminal operates entirely inside a sandboxed desktop client, we do not monitor, compile, or sell your trading logs, watchlist entries, or ML indicator configurations.
              </p>
            </div>

            {/* Privacy Sections Grid */}
            <div className="space-y-6">
              {sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300"
                >
                  {/* Border Beam emulation */}
                  <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_10s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.1)] text-[var(--accent-primary)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {sec.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold font-heading text-sm text-[var(--text-primary)] mb-2">
                        {sec.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {sec.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to home terminal */}
            <div className="flex justify-center pt-4">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-soft)] text-[var(--text-primary)] hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 gap-2"
              >
                <span>Back to Home Terminal</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

