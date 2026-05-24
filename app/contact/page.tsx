"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Users,
  Headphones,
  ArrowRight,
  Clock,
  ExternalLink,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DarkVeil from "@/app/components/effects/DarkVeil";
import ShinyText from "@/components/ui/ShinyText";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "support",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "support",
        message: ""
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5 text-[var(--accent-primary)]" />,
      title: "General & Support Email",
      description: "Direct channel for setup assistance, billing, or licensing inquiries",
      contact: "support@strat.io",
      action: "Send Email",
      link: "mailto:support@strat.io"
    },
    {
      icon: <Phone className="h-5 w-5 text-[var(--accent-primary)]" />,
      title: "Support Hotline",
      description: "Speak directly with our customer support and product experts",
      contact: "+91-7060603346",
      action: "Call Now",
      link: "tel:+917060603346"
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-[var(--accent-primary)]" />,
      title: "Trader Community",
      description: "Join active traders in our official community channel",
      contact: "Active Community",
      action: "Join Discord",
      link: "https://discord.gg"
    },
    {
      icon: <MapPin className="h-5 w-5 text-[var(--accent-primary)]" />,
      title: "Noida Design Studio",
      description: "Visit our core quantitative product design office",
      contact: "Noida, UP, India",
      action: "View Location",
      link: "#office-coords"
    }
  ];

  const supportOptions = [
    {
      icon: <Headphones className="h-5 w-5 text-[var(--accent-primary)]" />,
      title: "Technical & Setup Support",
      description: "Get assistance with installing the desktop client, setting up your workspace, or configuring local indicators."
    },
    {
      icon: <Users className="h-5 w-5 text-[var(--accent-primary)]" />,
      title: "Commercial & Team Licenses",
      description: "Learn about custom multi-workstation keys, corporate trading desk setups, and premium integrations."
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-[var(--accent-primary)]" />,
      title: "General Product Inquiries",
      description: "Ask questions about the feature roadmap, beta access programs, or strategic partner options."
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
      <div className="absolute top-[12%] left-[3%] w-[45rem] h-[45rem] rounded-full orb-emerald opacity-35 pointer-events-none -z-30" />
      <div className="absolute top-[40%] right-[3%] w-[38rem] h-[38rem] rounded-full orb-purple opacity-25 pointer-events-none -z-30" />
      <div className="absolute bottom-[10%] left-[8%] w-[30rem] h-[30rem] rounded-full orb-gold opacity-15 pointer-events-none -z-30" />

      <Navbar />

      <main className="flex-grow pt-28 md:pt-36 pb-24">
        {/* Centered Hero Section */}
        <section className="relative mx-auto max-w-[80rem] px-6 text-center md:px-8 pt-10 pb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-filter-[12px] inline-flex h-8 items-center justify-between rounded-full border border-white/5 bg-white/10 px-4 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-2 mb-8 cursor-pointer select-none"
          >
            <ShinyText
              text="💬 WE ARE HERE TO HELP"
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
            Connect With
            <br className="hidden md:block" /> Our Support Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl text-balance"
          >
            Have questions about Strat Ai's visual interface, custom workspace setups, or licensing options? Our team in Noida and Bengaluru is ready to assist you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#contact-form-section"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[var(--accent-primary)] text-[var(--bg-base)] font-bold text-xs tracking-wider uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)] cursor-pointer gap-2"
            >
              <span>Send Us an Inquiry</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </section>

        {/* Contact Methods Grid */}
        <section className="relative mx-auto mt-16 max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 overflow-hidden group hover:border-[rgba(16,185,129,0.3)] transition-all duration-300 text-center flex flex-col justify-between"
              >
                {/* Border Beam emulation */}
                <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

                <div>
                  <div className="flex justify-center mb-5">
                    <div className="p-3.5 rounded-lg bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.15)] text-[var(--accent-primary)] group-hover:scale-105 transition-transform duration-300">
                      {method.icon}
                    </div>
                  </div>

                  <h3 className="font-semibold font-heading text-sm text-[var(--text-primary)] mb-2">
                    {method.title}
                  </h3>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-normal mb-4 max-w-[200px] mx-auto">
                    {method.description}
                  </p>
                </div>

                <div className="mt-4 space-y-3.5">
                  <p className="text-xs font-mono font-bold text-[var(--text-primary)]">
                    {method.contact}
                  </p>
                  <a
                    href={method.link}
                    className="inline-flex items-center justify-center w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:bg-[var(--accent-soft)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white font-mono text-[10px] font-bold tracking-wider py-2.5 rounded-lg transition-all duration-200 uppercase gap-1.5"
                  >
                    <span>{method.action}</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form & Support Swarm Info */}
        <section id="contact-form-section" className="relative mx-auto mt-20 max-w-[80rem] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300">
              {/* Border Beam emulation */}
              <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_10s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

              <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-6 border-b border-[var(--border-subtle)] pb-3">
                Send Us a Message
              </h2>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="p-4 rounded-full bg-[var(--accent-soft)] border border-[var(--border-glow)] text-[var(--accent-primary)]">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-[var(--text-primary)]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-sm">
                    Thank you for reaching out. Your inquiry has been queued, and a support representative will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg px-3.5 py-2.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200 font-sans placeholder:text-[var(--text-muted)]"
                        placeholder="Yash"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg px-3.5 py-2.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200 font-sans placeholder:text-[var(--text-muted)]"
                        placeholder="Rana"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg px-3.5 py-2.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200 font-sans placeholder:text-[var(--text-muted)]"
                      placeholder="you@domain.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg px-3.5 py-2.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200 font-sans cursor-pointer"
                    >
                      <option value="support">Technical & Setup Support</option>
                      <option value="licensing">Commercial & Team Licenses</option>
                      <option value="product">General Product Inquiries</option>
                      <option value="feedback">Product Feedback & Suggestions</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                      Message Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg px-3.5 py-2.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200 font-sans resize-none placeholder:text-[var(--text-muted)]"
                      placeholder="Describe your question or issue in detail here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[var(--accent-primary)] to-[#6EE7B7] hover:from-[var(--accent-hover)] hover:to-[#34D399] text-[var(--bg-base)] font-bold rounded-lg py-3.5 text-xs font-mono tracking-widest uppercase transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Support swarm categories & Quick FAQ */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-2">
                Operational Boundaries
              </h2>

              <div className="space-y-4">
                {supportOptions.map((option, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 overflow-hidden hover:border-[rgba(16,185,129,0.15)] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.1)] text-[var(--accent-primary)] flex-shrink-0">
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold font-heading text-xs text-[var(--text-primary)] mb-1">
                          {option.title}
                        </h3>
                        <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick FAQ Link Card */}
              <div className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--accent-soft)] p-6 text-center space-y-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 orb-emerald opacity-10 pointer-events-none" />
                <h3 className="font-semibold font-heading text-sm text-[var(--text-primary)]">
                  Need Immediate System Diagnostics?
                </h3>
                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed max-w-sm mx-auto">
                  Verify our dynamic network metrics, active systems interfaces, and operational telemetry in real-time.
                </p>
                <a
                  href="/status"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[var(--accent-primary)] text-[var(--bg-base)] font-bold text-[10px] font-mono tracking-wider uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_15px_var(--accent-glow)] w-full gap-1.5"
                >
                  <span>Check Infrastructure Status</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Office Coordinate Information */}
        <section id="office-coords" className="relative mx-auto mt-24 max-w-[80rem] px-6 md:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold tracking-widest uppercase block mb-2">
              OUR OFFICES
            </span>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Noida & Bengaluru Coordinates
            </h2>
            <p className="text-[11px] text-[var(--text-secondary)] max-w-md mx-auto mt-2 leading-relaxed">
              Our quantitative design studio and infrastructure labs are located in India's leading technology enclaves.
            </p>
          </div>

          <div className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 overflow-hidden group hover:border-[rgba(16,185,129,0.25)] transition-all duration-300 text-center max-w-3xl mx-auto">
            {/* Border Beam emulation */}
            <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,transparent_40%,var(--accent-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 -z-10 animate-[spin_8s_linear_infinite] transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-[1px] bg-[var(--bg-card)] rounded-[11px] -z-10 pointer-events-none" />

            <div className="absolute top-0 right-0 w-32 h-32 orb-purple opacity-20" />
            
            <MapPin className="h-8 w-8 mx-auto mb-4 text-[var(--accent-primary)] animate-[pulse_2s_infinite]" />
            <h3 className="text-base font-bold font-heading text-[var(--text-primary)] mb-3">
              Strat Ai Labs Private Limited
            </h3>
            
            <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto mb-4 leading-relaxed font-sans font-medium">
              80 Feet Rd, Koramangala 4th Block,<br />
              Bengaluru, Karnataka 560034, India
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] font-mono text-[var(--text-muted)] border-t border-[var(--border-subtle)] pt-4 mt-4">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                Support Hours: Mon - Fri, 09:00 - 18:00 IST
              </span>
              <span>
                •
              </span>
              <span>
                Operational Support: Active Session Enclaves
              </span>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent-soft)] hover:border-[var(--accent-primary)] font-bold text-xs tracking-wider uppercase transition-all duration-200 mt-6 gap-2"
            >
              <span>Get Office Directions</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

