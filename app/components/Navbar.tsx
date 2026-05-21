"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "PLATFORM", href: "#features" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "PRICING", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "glass-strong border-[var(--border-subtle)]"
          : "bg-[var(--bg-base)] border-[var(--border-subtle)]"
      }`}
    >
      <nav
        id="main-nav"
        className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[#6EE7B7] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              <path d="M13 13l6 6" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[var(--text-primary)] font-heading leading-none">
              STRAT
            </span>
            <span className="text-[9px] tracking-[0.2em] text-[var(--text-muted)] font-mono uppercase leading-none mt-0.5">
              Trading Intelligence
            </span>
          </div>
        </a>

        {/* Desktop nav — uppercase, tracked */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.12em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#pricing"
            className="text-[11px] font-medium tracking-[0.1em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 px-3 py-2 cursor-pointer uppercase"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            id="nav-cta"
            className="text-[11px] font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] hover:bg-[var(--accent-hover)] transition-all duration-200 cursor-pointer hover:shadow-[0_0_20px_var(--accent-glow)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 text-[var(--text-secondary)] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 py-4 flex flex-col gap-3 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-[11px] font-medium tracking-[0.12em] text-[var(--text-secondary)] hover:text-[var(--accent-hover)] py-2 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#pricing"
              className="text-[11px] font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] text-center mt-2 cursor-pointer"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
