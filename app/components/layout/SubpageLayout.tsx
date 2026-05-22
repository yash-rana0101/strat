"use client";

import React from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";

interface SubpageLayoutProps {
  title: string;
  subtitle?: string;
  category?: string;
  children: React.ReactNode;
}

export default function SubpageLayout({
  title,
  subtitle,
  category,
  children,
}: SubpageLayoutProps) {
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
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          {/* Breadcrumbs or Category */}
          {category && (
            <div className="mb-4">
              <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-widest bg-[var(--accent-soft)] px-2.5 py-1 rounded border border-[rgba(16,185,129,0.15)]">
                {category}
              </span>
            </div>
          )}

          {/* Page Header */}
          <div className="border-b border-[var(--border-subtle)] pb-8 mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-[var(--text-primary)] tracking-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Main Content Area */}
          <div className="w-full">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
