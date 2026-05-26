"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Terminal,
  Cpu,
  Monitor,
  HardDrive,
  Check,
  ArrowRight,
  Activity,
  Copy,
  Info,
  ExternalLink,
  Laptop,
  Layers,
  Shield,
  Zap,
  RefreshCw,
  Sparkles
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

type OS = "windows" | "macos" | "linux" | "unknown";
type GuideTab = "windows" | "macos";

export default function DownloadPage() {
  const [detectedOS, setDetectedOS] = useState<OS>("unknown");
  const [selectedGuide, setSelectedGuide] = useState<GuideTab>("windows");
  
  // Simulated download state
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStage, setDownloadStage] = useState("");
  const [downloadComplete, setDownloadComplete] = useState(false);
  
  // CLI Copy state
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Auto-detect OS on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      if (userAgent.indexOf("Win") !== -1) {
        setDetectedOS("windows");
        setSelectedGuide("windows");
      } else if (userAgent.indexOf("Mac") !== -1) {
        setDetectedOS("macos");
        setSelectedGuide("macos");
      } else if (userAgent.indexOf("Linux") !== -1) {
        setDetectedOS("linux");
        setSelectedGuide("windows");
      } else {
        setDetectedOS("unknown");
        setSelectedGuide("windows");
      }
    }
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Simulated download trigger
  const triggerDownload = (fileName: string, label: string) => {
    if (downloadingFile) return; // Prevent concurrent downloads
    
    setDownloadingFile(label);
    setDownloadProgress(0);
    setDownloadComplete(false);
    
    const stages = [
      { min: 0, text: "Initializing secure connection to regional CDN..." },
      { min: 20, text: "Authenticating client handshake and license keys..." },
      { min: 45, text: "Allocating local memory buffers for high-performance indexing..." },
      { min: 70, text: "Buffering analytical engine binaries (184 MB)..." },
      { min: 90, text: "Verifying SHA-256 checksum integrity..." },
    ];

    setDownloadStage(stages[0].text);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        
        // Find current stage based on progress
        const currentStage = stages.reduce((acc, stage) => {
          if (next >= stage.min) return stage.text;
          return acc;
        }, stages[0].text);
        
        setDownloadStage(currentStage);

        if (next >= 100) {
          clearInterval(interval);
          setDownloadStage("Binaries successfully retrieved! Enjoy quantitative trading.");
          setDownloadComplete(true);
          
          // Trigger a dummy file download to make it practical
          setTimeout(() => {
            // Reset downloading state after success
            setDownloadingFile(null);
            
            // Create a fake file and download it
            const element = document.createElement("a");
            const file = new Blob(["Strat AI Local Terminal - Executable Mock Payload"], {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = fileName;
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }, 1500);

          return 100;
        }
        return next;
      });
    }, 150);
  };

  const winCliCommand = "winget install strat-ai";
  const macCliCommand = "brew install --cask strat-ai";

  const systemRequirements = [
    {
      metric: "Operating System",
      win: "Windows 10/11 (64-bit, Build 19041+)",
      mac: "macOS 12.0 Monterey or higher",
      icon: <Laptop className="h-4 w-4 text-[var(--accent-primary)]" />
    },
    {
      metric: "Processor (CPU)",
      win: "Intel Core i5 / AMD Ryzen 5 or better",
      mac: "Apple Silicon (M1/M2/M3/M4) or Intel Core i5",
      icon: <Cpu className="h-4 w-4 text-[var(--accent-primary)]" />
    },
    {
      metric: "Graphics (GPU)",
      win: "DirectX 12 capable GPU (NVIDIA GTX 1050 / AMD equivalent)",
      mac: "Metal-compatible integrated or discrete GPU",
      icon: <Monitor className="h-4 w-4 text-[var(--accent-primary)]" />
    },
    {
      metric: "System Memory (RAM)",
      win: "8 GB RAM minimum (16 GB recommended for high-volume ticks)",
      mac: "8 GB Unified Memory minimum (16 GB recommended)",
      icon: <Layers className="h-4 w-4 text-[var(--accent-primary)]" />
    },
    {
      metric: "Local Storage",
      win: "500 MB free space on SSD (Solid State Drive)",
      mac: "450 MB free space on SSD (Solid State Drive)",
      icon: <HardDrive className="h-4 w-4 text-[var(--accent-primary)]" />
    }
  ];

  return (
    <>
      {/* Background DarkVeil CRT scanline layer */}
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-[0.22]">
        <DarkVeil speed={0.15} noiseIntensity={0.01} scanlineIntensity={0.08} scanlineFrequency={1.2} />
      </div>

      {/* Dotted pattern (global layer matching home page) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-dot-grid -z-40" />

      {/* Decorative Orbs for high-end glassmorphic backdrop */}
      <div className="absolute top-[8%] left-[2%] w-[45rem] h-[45rem] rounded-full orb-emerald opacity-30 pointer-events-none -z-30" />
      <div className="absolute top-[35%] right-[2%] w-[40rem] h-[40rem] rounded-full orb-purple opacity-20 pointer-events-none -z-30" />
      <div className="absolute bottom-[8%] left-[5%] w-[32rem] h-[32rem] rounded-full orb-gold opacity-15 pointer-events-none -z-30" />

      <Navbar />

      <main className="flex-grow pt-28 md:pt-36 pb-24">
        {/* Hero Section */}
        <section className="relative mx-auto max-w-[80rem] px-6 text-center md:px-8 pt-10 pb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-filter-[12px] inline-flex h-8 items-center justify-between rounded-full border border-white/5 bg-white/10 px-4 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-2 mb-8 cursor-pointer select-none"
          >
            <ShinyText
              text="⚡ LOCAL QUANT TERMINAL v2.4.0"
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
            Uncompromising Power
            <br /> On Your Desktop
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl text-balance"
          >
            Run high-frequency data calculation engines and microsecond-level local technical indicators directly on your own hardware. Zero cloud latency. Absolute custody of algorithms. Available for Windows & macOS.
          </motion.p>

          {/* Telemetry Bar (Auto Detect Alert) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mb-16 w-full max-w-2xl"
          >
            <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-[var(--border-subtle)] bg-[rgba(12,16,23,0.6)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary)] flex-shrink-0 animate-pulse">
                  <Activity className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    Auto-Detection Telemetry
                  </p>
                  <p className="text-xs font-bold text-[var(--text-primary)] font-mono">
                    Detected OS: <span className="text-[var(--accent-primary)] uppercase">{detectedOS === "unknown" ? "Locating System..." : detectedOS}</span>
                  </p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.15)] text-[10px] font-mono text-[var(--accent-primary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
                  Ready to download
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Core OS Panels Grid */}
        <section className="relative mx-auto max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
            {/* Windows Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl border bg-[var(--bg-card)] p-8 overflow-hidden group transition-all duration-500 flex flex-col justify-between ${
                detectedOS === "windows"
                  ? "border-[rgba(16,185,129,0.4)] shadow-[0_0_40px_rgba(16,185,129,0.08)]"
                  : "border-[var(--border-subtle)] hover:border-[rgba(16,185,129,0.25)]"
              }`}
            >
              {/* Recommended Badge */}
              {detectedOS === "windows" && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--accent-primary)] text-[var(--bg-base)] font-mono text-[9px] font-bold uppercase tracking-wider">
                    <Check className="h-3 w-3" /> Recommended
                  </span>
                </div>
              )}

              {/* Dynamic border beam */}
              <div className={`absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none ${
                detectedOS === "windows" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`} />
              <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[15px] -z-10 pointer-events-none" />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.15)] text-[var(--accent-primary)]">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="9" height="9" />
                      <rect x="13" y="2" width="9" height="9" />
                      <rect x="2" y="13" width="9" height="9" />
                      <rect x="13" y="13" width="9" height="9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                      Strat Ai for Windows
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono">
                      x64 / ARM64 Architecture compatible
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-8">
                  Highly integrated local desktop client compiled natively for Windows architecture. Fully supports GPU-accelerated candlestick rendering (DirectX 12) and low-latency system-level sockets.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                    <Check className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Native Winget Package Manager Support</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                    <Check className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Automatic background telemetry diagnostic checker</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                    <Check className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Low memory footprint with background thread offloading</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => triggerDownload("strat-ai-win-installer.exe", "win-exe")}
                  disabled={!!downloadingFile}
                  className="w-full relative group/btn overflow-hidden rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[#6EE7B7] hover:from-[var(--accent-hover)] hover:to-[#34D399] text-[var(--bg-base)] font-bold py-4 text-xs font-mono tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-y-0" />
                  <span>Download Windows Installer (.exe)</span>
                </button>

                <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)] px-1">
                  <span>Version: 2.4.0 (Stable)</span>
                  <span>Size: ~184 MB</span>
                </div>
              </div>
            </motion.div>

            {/* macOS Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl border bg-[var(--bg-card)] p-8 overflow-hidden group transition-all duration-500 flex flex-col justify-between ${
                detectedOS === "macos"
                  ? "border-[rgba(16,185,129,0.4)] shadow-[0_0_40px_rgba(16,185,129,0.08)]"
                  : "border-[var(--border-subtle)] hover:border-[rgba(16,185,129,0.25)]"
              }`}
            >
              {/* Recommended Badge */}
              {detectedOS === "macos" && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--accent-primary)] text-[var(--bg-base)] font-mono text-[9px] font-bold uppercase tracking-wider">
                    <Check className="h-3 w-3" /> Recommended
                  </span>
                </div>
              )}

              {/* Dynamic border beam */}
              <div className={`absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none ${
                detectedOS === "macos" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`} />
              <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[15px] -z-10 pointer-events-none" />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.15)] text-[var(--accent-primary)]">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-2h2v2zm0-4.5h-2V7h2v5z" className="hidden" />
                      {/* Apple logo icon simplified in vector */}
                      <path d="M12 20.94c-1.12 0-2.22-.3-3.08-.88-1.5-.96-2.42-2.6-2.42-4.54 0-3.32 2.76-6.02 6.14-6.02.66 0 1.34.1 1.94.3 1.14-.96 2.68-1.54 4.36-1.54.4 0 .78.02 1.16.08.3.04.58.12.82.26.16.08.3.2.36.36.1.18.06.42-.08.56l-1.8 1.8c.84.9 1.36 2.06 1.36 3.32 0 3.32-2.76 6.02-6.14 6.02a6.3 6.3 0 0 1-1.74-.26 5.86 5.86 0 0 1-3.96 1.5z" className="hidden" />
                      {/* Standard Apple vector */}
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.1 1.08 2.16 2.06 2.82-1.33z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                      Strat Ai for macOS
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono">
                      Apple Silicon (M1/M2/M3/M4) & Intel
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-8">
                  Optimized local binary package with fully integrated Metal framework shaders. Provides ultra-smooth multi-monitor charting telemetry and deep hardware-level secure sandboxing.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                    <Check className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Native Apple Silicon (M-Series ARM64) build</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                    <Check className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                    <span>High-performance Intel Architecture dmg build</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                    <Check className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Homebrew cask deployment support</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => triggerDownload("strat-ai-mac-arm64.dmg", "mac-arm")}
                    disabled={!!downloadingFile}
                    className="relative group/btn overflow-hidden rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-soft)] text-[var(--text-primary)] hover:text-white font-bold py-3.5 text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Cpu className="h-3.5 w-3.5 shrink-0" />
                    <span>Apple Silicon</span>
                  </button>
                  <button
                    onClick={() => triggerDownload("strat-ai-mac-x64.dmg", "mac-intel")}
                    disabled={!!downloadingFile}
                    className="relative group/btn overflow-hidden rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-soft)] text-[var(--text-primary)] hover:text-white font-bold py-3.5 text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Layers className="h-3.5 w-3.5 shrink-0" />
                    <span>Intel Chip</span>
                  </button>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)] px-1">
                  <span>Version: 2.4.0 (Stable)</span>
                  <span>Size: ~176 MB</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Real-time Buffered Download Progress Overlay */}
        <AnimatePresence>
          {downloadingFile && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[26rem] z-50 rounded-2xl border border-[var(--accent-primary)] bg-[#0C1017] p-5 shadow-[0_0_35px_rgba(16,185,129,0.18)] backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary)] animate-spin">
                    <RefreshCw className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-[var(--text-primary)] uppercase tracking-wide">
                      Buffering Binary Client
                    </h4>
                    <p className="text-[10px] text-[var(--text-muted)] font-mono">
                      Target: {downloadingFile}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono text-[var(--accent-primary)]">
                  {downloadProgress}%
                </span>
              </div>

              {/* Progress bar line */}
              <div className="w-full bg-[var(--bg-elevated)] h-1.5 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[#6EE7B7] rounded-full"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>

              <div className="flex items-center gap-2">
                <Info className="h-3 w-3 text-[var(--accent-primary)] shrink-0" />
                <p className="text-[9px] font-mono text-[var(--text-secondary)] truncate">
                  {downloadStage}
                </p>
              </div>

              {downloadComplete && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-3.5 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2 text-[10px] font-mono text-[var(--accent-primary)]"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Download dispatched to your browser storage!</span>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Visual Mockup Showcase */}
        <section className="relative mx-auto max-w-[80rem] px-6 md:px-8 mt-16 pb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block mb-2">
              TERMINAL PREVIEW
            </span>
            <h2 className="text-3xl font-bold font-heading text-[var(--text-primary)]">
              Visual Clarity at 120 FPS
            </h2>
            <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto mt-2 leading-relaxed">
              Explore a completely locally computed, high-fidelity quantitative analysis terminal, optimized for heavy charts and direct WebSockets.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl mx-auto rounded-2xl border border-[var(--border-subtle)] bg-[rgba(19,25,34,0.4)] p-2 backdrop-blur-md group hover:border-[rgba(16,185,129,0.25)] transition-all duration-500"
          >
            {/* Ambient behind glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[var(--accent-soft)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
            
            {/* Simulated Desktop window control buttons */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[9px] font-mono text-[var(--text-muted)] tracking-wider">
                STRAT AI DESKTOP - LOCAL SESSION
              </div>
              <div className="w-12 h-3" />
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-xl bg-[#06080F]">
              <img
                src="/desktop_mockup.png"
                alt="Strat AI High-Performance Desktop Terminal Dashboard Preview"
                className="w-full h-full object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-700"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glowing border frame corners */}
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-[var(--accent-primary)] opacity-60 rounded-tl-lg" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-[var(--accent-primary)] opacity-60 rounded-tr-lg" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-[var(--accent-primary)] opacity-60 rounded-bl-lg" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-[var(--accent-primary)] opacity-60 rounded-br-lg" />
          </motion.div>
        </section>

        {/* Interactive CLI & Installation Guide */}
        <section className="relative mx-auto max-w-[80rem] px-6 md:px-8 mt-10 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block mb-2">
                SETUP INSTRUCTIONS
              </span>
              <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                Command Line & Guided Setup
              </h2>
            </div>

            {/* Guide Tabs Selector */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedGuide("windows")}
                className={`px-5 py-2.5 rounded-lg font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedGuide === "windows"
                    ? "bg-[var(--accent-soft)] border border-[var(--accent-primary)] text-[var(--accent-primary)]"
                    : "bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Windows Setup
              </button>
              <button
                onClick={() => setSelectedGuide("macos")}
                className={`px-5 py-2.5 rounded-lg font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedGuide === "macos"
                    ? "bg-[var(--accent-soft)] border border-[var(--accent-primary)] text-[var(--accent-primary)]"
                    : "bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                macOS Setup
              </button>
            </div>

            {/* Tab content panel */}
            <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 orb-purple opacity-10 pointer-events-none" />

              {selectedGuide === "windows" ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold font-heading text-[var(--text-primary)] mb-1">
                      Windows CLI Package Installation
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Install and update Strat AI seamlessly via Microsoft's official Windows Package Manager (winget).
                    </p>
                  </div>

                  {/* Terminal Code Block */}
                  <div className="relative bg-[#06080F] border border-[var(--border-subtle)] rounded-xl p-4 font-mono text-xs flex items-center justify-between group overflow-x-auto">
                    <div className="flex items-center gap-3">
                      <Terminal className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                      <span className="text-[var(--text-primary)]">{winCliCommand}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(winCliCommand, "win-cli")}
                      className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-white hover:border-[var(--accent-primary)] transition-all duration-200 cursor-pointer shrink-0 ml-4"
                    >
                      {copiedText === "win-cli" ? <Check className="h-3.5 w-3.5 text-[var(--accent-primary)]" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* Visual Step-by-Step guides */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[var(--border-subtle)]">
                    <div className="space-y-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.2)] text-[var(--accent-primary)] flex items-center justify-center font-mono text-[10px] font-bold">
                        01
                      </div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)]">Download Binary</h4>
                      <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
                        Execute the downloaded installer (`.exe`) file to launch the local installation wizard setup.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.2)] text-[var(--accent-primary)] flex items-center justify-center font-mono text-[10px] font-bold">
                        02
                      </div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)]">SmartScreen Bypass</h4>
                      <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
                        Since Strat AI compiles indicators locally, click "More Info" and "Run Anyway" if triggered.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.2)] text-[var(--accent-primary)] flex items-center justify-center font-mono text-[10px] font-bold">
                        03
                      </div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)]">Local API Auth</h4>
                      <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
                        Launch the terminal and authenticate using your premium license key to buffer initial market feeds.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold font-heading text-[var(--text-primary)] mb-1">
                      macOS Homebrew Cask Installation
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">
                      For developers and advanced quant desks, install the application cask instantly using Homebrew.
                    </p>
                  </div>

                  {/* Terminal Code Block */}
                  <div className="relative bg-[#06080F] border border-[var(--border-subtle)] rounded-xl p-4 font-mono text-xs flex items-center justify-between group overflow-x-auto">
                    <div className="flex items-center gap-3">
                      <Terminal className="h-4 w-4 text-[var(--accent-primary)] shrink-0" />
                      <span className="text-[var(--text-primary)]">{macCliCommand}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(macCliCommand, "mac-cli")}
                      className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-white hover:border-[var(--accent-primary)] transition-all duration-200 cursor-pointer shrink-0 ml-4"
                    >
                      {copiedText === "mac-cli" ? <Check className="h-3.5 w-3.5 text-[var(--accent-primary)]" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* Visual Step-by-Step guides */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[var(--border-subtle)]">
                    <div className="space-y-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.2)] text-[var(--accent-primary)] flex items-center justify-center font-mono text-[10px] font-bold">
                        01
                      </div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)]">Mount disk volume</h4>
                      <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
                        Double-click the downloaded `.dmg` package to mount the secure installer disk drive onto Finder.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.2)] text-[var(--accent-primary)] flex items-center justify-center font-mono text-[10px] font-bold">
                        02
                      </div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)]">Drag to Applications</h4>
                      <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
                        Drag the **Strat AI** logo directly into your system `/Applications` folder directory.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.2)] text-[var(--accent-primary)] flex items-center justify-center font-mono text-[10px] font-bold">
                        03
                      </div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)]">Gatekeeper Approval</h4>
                      <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
                        Due to sandboxed analytical code, approve the developer inside System Settings &gt; Privacy &amp; Security if asked.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Technical Hardware Comparison Specs */}
        <section className="relative mx-auto max-w-[80rem] px-6 md:px-8 mt-10 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block mb-2">
                SYSTEM RECOMMENDATIONS
              </span>
              <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                System & Hardware Specifications
              </h2>
            </div>

            {/* Spec Sheet Grid */}
            <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)] bg-[rgba(6,8,15,0.4)]">
                      <th className="p-4 font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold">
                        Hardware Parameter
                      </th>
                      <th className="p-4 font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold">
                        Windows Specification
                      </th>
                      <th className="p-4 font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold">
                        macOS Specification
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)]">
                    {systemRequirements.map((req, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[rgba(16,185,129,0.02)] transition-colors duration-200"
                      >
                        <td className="p-4 flex items-center gap-3 text-xs font-bold text-[var(--text-primary)]">
                          {req.icon}
                          <span className="font-heading">{req.metric}</span>
                        </td>
                        <td className="p-4 text-xs text-[var(--text-secondary)] font-sans">
                          {req.win}
                        </td>
                        <td className="p-4 text-xs text-[var(--text-secondary)] font-sans">
                          {req.mac}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Security Guarantee Note */}
            <div className="mt-8 flex items-start gap-4 p-5 rounded-xl border border-[rgba(245,158,11,0.15)] bg-[rgba(245,158,11,0.03)]">
              <Shield className="h-5 w-5 text-[var(--gold-primary)] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[var(--text-primary)] font-heading mb-1">
                  Secure Local Workstations & Data Protection
                </h4>
                <p className="text-[10px] text-[var(--text-muted)] leading-relaxed font-sans">
                  Strat AI builds all indicators, algorithms, and models directly inside your workspace's CPU/GPU enclave. Your private API keys, proprietary strategies, and tick logs are never transmitted to any cloud servers. Everything remains fully local and secure under your direct control.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
