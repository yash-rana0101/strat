"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "../../effects/AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full orb-emerald"
        animate={{ scale: [1, 1.1, 1], opacity: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full orb-purple"
        animate={{ scale: [1, 0.9, 1], opacity: [1, 1.2, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? "bg-[var(--accent-primary)]" : i % 3 === 1 ? "bg-[var(--gold-primary)]" : "bg-[var(--color-ai)]"}`}
            style={{
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-dot-grid" />

      <div className="relative mx-auto max-w-[800px] text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold mb-6 leading-[1.05] font-heading tracking-[-0.02em]">
            Your Edge
            <br />
            Starts{" "}
            <span className="text-gradient italic">Now</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
            Join the beta. Get institutional-grade intelligence built for the
            serious trader who demands precision.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            id="final-cta"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] font-semibold text-sm tracking-wide uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_30px_var(--accent-glow)] cursor-pointer"
          >
            Start 3 Days Free Trial
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="ml-2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <p className="text-xs text-[var(--text-muted)] mt-4">
            No payment required. Invite-only beta.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
