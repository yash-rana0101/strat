"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";

// Import modular components
import BlogHero from "./components/BlogHero";
import FeaturedPost from "./components/FeaturedPost";
import CategoryFilter from "./components/CategoryFilter";
import BlogGrid from "./components/BlogGrid";

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const featuredArticle = {
  title: "Inside the Agent Fusion Engine: Sub-50ms Signal Inference",
  excerpt: "An engineering deep-dive on how we pipeline 5 machine learning agents to ingest ticks, run technical calculations, and output a consensus signal in under 50 milliseconds.",
  author: "Yash Rana",
  date: "May 15, 2026",
  readTime: "8 min read",
  category: "Systems Architecture",
};

const blogPosts: BlogPost[] = [
  {
    title: "WASM-Based Strategy Compilation in Tauri: A Complete Guide",
    excerpt: "Learn how we precompile Rust quantitative strategies into sandboxed WebAssembly execution blocks for safe, zero-latency desktop evaluations.",
    author: "Strat Ai Team",
    date: "May 12, 2026",
    readTime: "10 min read",
    category: "Security & Sandbox",
    tags: ["Wasm", "Tauri", "Rust"]
  },
  {
    title: "Consensus Fusion Engine: Compiling 5 Agent Feeds",
    excerpt: "Explore how the aggregate consensus engine scores BUY/SELL/HOLD dynamically across technical, sentiment, OLS, and RAG agent pipelines.",
    author: "Yash Rana",
    date: "May 8, 2026",
    readTime: "7 min read",
    category: "AI Swarms",
    tags: ["Consensus", "Tokio", "Agents"]
  },
  {
    title: "High-Frequency Binary Tick Ingestion: Ingestion Engine Benchmarks",
    excerpt: "Ingesting 184-byte Zerodha Kite WebSocket ticks under 5 microseconds using Tokio asynchronous loops.",
    author: "Aditya",
    date: "May 5, 2026",
    readTime: "12 min read",
    category: "Infrastructure",
    tags: ["Tokio", "Kite Connect", "Low-Latency"]
  },
  {
    title: "QuestDB Schema Tuning for 10M Candlestick Sinks",
    excerpt: "Tuning QuestDB Influx Line Protocol TCP port 9009 and Postgres port 8812 to handle massive timeseries tables without index corruption.",
    author: "Strat Ai Team",
    date: "May 1, 2026",
    readTime: "9 min read",
    category: "Timeseries DB",
    tags: ["QuestDB", "Redpanda", "Sinks"]
  },
  {
    title: "OLS Linear Regression on 10m Closes: Math Behind the Ghost Line",
    excerpt: "A complete mathematical walkthrough of Ordinary Least Squares regression, R² confidence scoring, and why it is clamped to 10-minute candles.",
    author: "Yash Rana",
    date: "April 26, 2026",
    readTime: "8 min read",
    category: "Quant Math",
    tags: ["OLS", "Regression", "Ghost Line"]
  },
  {
    title: "Argon2id + AES-GCM-256 Client-Side Cryptography in Tauri Stronghold",
    excerpt: "How client API secrets are encrypted on local SSDs inside sandboxed vaults rather than cloud SQL databases.",
    author: "Aditya",
    date: "April 20, 2026",
    readTime: "11 min read",
    category: "Security & Sandbox",
    tags: ["Argon2id", "Stronghold", "Vault"]
  }
];

const categories = [
  "All Posts",
  "Systems Architecture",
  "Security & Sandbox",
  "AI Swarms",
  "Infrastructure",
  "Timeseries DB",
  "Quant Math"
];

const popularTags = [
  "Rust", "Tokio", "Tauri", "QuestDB", "Redpanda", "Wasm", "OLS", "Consensus", "Agents", "Kite Connect"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Posts");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
  };

  const handleSubscribeScroll = () => {
    const el = document.querySelector("input[type='email']");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    (el as HTMLInputElement)?.focus();
  };

  // Filter logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
        
        {/* Modular Hero section */}
        <BlogHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSubscribeClick={handleSubscribeScroll}
        />

        {/* Featured Post */}
        {searchQuery === "" && selectedCategory === "All Posts" && (
          <FeaturedPost post={featuredArticle} />
        )}

        {/* Category Controls */}
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Articles Grid Stream */}
        <BlogGrid 
          posts={filteredPosts}
          popularTags={popularTags}
          recentPosts={blogPosts.slice(0, 3)}
          onTagClick={handleTagClick}
        />

      </main>

      <Footer />
    </>
  );
}
