"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, Calendar, Tag, ArrowRight, ShieldCheck } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

interface BlogGridProps {
  posts: BlogPost[];
  popularTags: string[];
  recentPosts: BlogPost[];
  onTagClick: (tag: string) => void;
}

export default function BlogGrid({
  posts,
  popularTags,
  recentPosts,
  onTagClick
}: BlogGridProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="relative mx-auto max-w-[80rem] px-6 md:px-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Posts Stream (Left 8 columns) */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-6 font-bold">
            Articles & Documentation Blueprints ({posts.length})
          </h2>

          <AnimatePresence mode="popLayout">
            {posts.length > 0 ? (
              posts.map((post, idx) => (
                <motion.div
                  layout
                  key={post.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx * 0.05, 0.2) }}
                  className="group block cursor-pointer"
                >
                  <article className="glass p-6 rounded-xl border border-[var(--border-subtle)] hover:border-[rgba(0,212,255,0.25)] transition-all duration-300 relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-[9px] font-mono tracking-wider font-bold text-[var(--accent-primary)] bg-[var(--accent-soft)] border border-[rgba(0,212,255,0.15)] px-2 py-0.5 rounded uppercase">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-muted)] font-bold">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-heading text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-hover)] transition-colors duration-200">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags row */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            onTagClick(tag);
                          }}
                          className="text-[9px] font-mono text-slate-500 hover:text-[var(--accent-primary)] hover:bg-[var(--accent-soft)] bg-[rgba(255,255,255,0.02)] border border-[var(--border-subtle)] px-2 py-0.5 rounded cursor-pointer transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Metadata Footer */}
                    <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 mt-4 text-[10px] text-[var(--text-muted)] font-mono font-bold uppercase">
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16 border border-dashed border-[var(--border-subtle)] rounded-xl">
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  No blog articles found matching current search queries.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar Controls (Right 4 columns) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Popular Tags Box */}
          <div className="glass p-6 rounded-xl border border-[var(--border-subtle)]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-4 font-bold">
              Popular Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onTagClick(tag)}
                  className="text-[9px] font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-soft)] bg-[rgba(255,255,255,0.02)] border border-[var(--border-subtle)] px-2.5 py-1.5 rounded cursor-pointer transition-colors uppercase font-bold"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Signup Box */}
          <div className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(0,212,255,0.3)] transition-all duration-300">
            {/* Border Beam emulation */}
            <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-2 font-bold">
              Stay Synced
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
              Get raw performance metrics, agent updates, and low-latency tutorials delivered to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="subscribe-form"
                  onSubmit={handleSubscribeSubmit}
                  className="space-y-3 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="email"
                    required
                    placeholder="developer@strat.io"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] focus:outline-none focus:border-[var(--accent-primary)] text-xs text-[var(--text-primary)] font-mono placeholder:text-[var(--text-muted)] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[var(--accent-primary)] text-[var(--bg-base)] py-2.5 rounded text-[10px] font-mono font-bold uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_15px_var(--accent-glow)] cursor-pointer"
                  >
                    Subscribe to Ingestion
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribed-msg"
                  className="p-3 bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.15)] rounded-lg flex items-center gap-2"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                >
                  <ShieldCheck className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                  <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold">
                    CONNECTED TO NEWSLETTER FEED
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Recent Posts Box */}
          <div className="glass p-6 rounded-xl border border-[var(--border-subtle)]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-4 font-bold">
              Recent Metrics
            </h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.title} className="border-b border-[var(--border-subtle)] pb-3 last:border-b-0 last:pb-0 space-y-1">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-150 leading-snug cursor-pointer line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-[9px] font-mono text-[var(--text-muted)]">{post.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
