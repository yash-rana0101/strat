"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Calendar, ArrowRight } from "lucide-react";

interface FeaturedPostProps {
  post: {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
  };
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="relative mx-auto max-w-[80rem] px-6 md:px-8 mb-16">
      <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] mb-6 font-bold">
        Featured Article
      </h2>
      
      <a href="#" className="group block">
        <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden group hover:border-[rgba(0,212,255,0.3)] transition-all duration-300">
          
          {/* Border Beam emulation */}
          <div className="absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_10s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
          <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[15px] -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Visual Callout column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[var(--bg-muted)] to-[var(--bg-card)] border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)] p-8 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
              <div className="absolute -top-10 -left-10 w-40 h-40 orb-emerald opacity-25" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 orb-purple opacity-20" />
              
              <div className="relative z-10">
                <span className="text-[9px] font-mono tracking-widest bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.15)] text-[var(--accent-primary)] font-bold px-2.5 py-1 rounded uppercase">
                  Featured Deep-Dive
                </span>
              </div>
              
              <div className="relative z-10 flex items-center justify-between mt-auto">
                <span className="text-[10px] font-mono text-[var(--text-muted)] font-bold">
                  LATENCY PROTOCOL v1.2
                </span>
                <div className="flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="lg:col-span-7 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-mono tracking-wider font-bold text-[var(--accent-primary)] uppercase">
                    {post.category}
                  </span>
                  <span className="text-slate-700 font-mono text-[10px]">|</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] font-bold">{post.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)] mb-3 leading-snug group-hover:text-[var(--accent-hover)] transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 mt-4">
                <div className="flex items-center gap-4 text-[10px] text-[var(--text-muted)] font-mono font-bold uppercase">
                  <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <span className="text-xs font-mono text-[var(--text-primary)] group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1">
                  Read Article <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>

          </div>
        </div>
      </a>
    </section>
  );
}
