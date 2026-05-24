"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  History,
  ShieldCheck,
  Ban,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

export default function RefundPolicyPage() {
  const policies = [
    {
      title: "1. Invite-Only Beta Trial",
      icon: <History className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "Strat Ai is currently in an invite-only beta testing phase. Trial licenses are provided to selected developers and alpha testers for zero charge. No credit card information is collected, and no billing is processed during this sandboxed simulation segment.",
    },
    {
      title: "2. Premium Software Licensing Subscriptions",
      icon: <CreditCard className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "Once commercial billing begins, licenses will run on monthly or annual cycles. Subscription fees allow you to run the local desktop engine and query historical ticks. You can toggle auto-renewal settings in your billing console. Access remains active until the end of your prepaid period.",
    },
    {
      title: "3. 7-Day First-Time Refund Guarantee",
      icon: <ShieldCheck className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "We offer a 7-day money-back guarantee for first-time premium license key purchases. Refund requests submitted after 7 days from the initial transaction date are not eligible for compensation. Processing fees charged by third-party payment gateways (e.g. UPI, card processors) are non-refundable and will be deducted.",
    },
    {
      title: "4. Account Suspensions & Violations",
      icon: <Ban className="h-5 w-5 text-[var(--accent-primary)]" />,
      content: "Refunds are not granted in cases where a license is suspended due to violations of our terms (such as reverse engineering client WASM binaries, attempting to distribute license keys, or spamming broker websocket streams).",
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
              text="💳 SUBSCRIPTION GUARANTEES & REFUNDS"
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
            Refund Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
          >
            Last updated: May 22, 2026. Review terms regarding billing cycles, invite-only beta testing, and first-time subscription refund guarantees.
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
                Thank you for utilizing the Strat Ai terminal. We aim to keep our licensing, billing, and cancellations completely transparent. Please review the criteria below regarding refund eligibility and account standing policies.
              </p>
            </div>

            {/* Policies Grid */}
            <div className="space-y-6">
              {policies.map((p, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300"
                >
                  {/* Border Beam emulation */}
                  <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_10s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.1)] text-[var(--accent-primary)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold font-heading text-sm text-[var(--text-primary)] mb-2">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {p.content}
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

