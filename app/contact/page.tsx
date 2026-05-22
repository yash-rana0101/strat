import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function ContactPage() {
  return (
    <SubpageLayout
      title="Contact Technical Support"
      subtitle="Troubleshoot local microservices ports, database mappings, or license parameters directly with our engineering team."
      category="Contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-8">
        {/* Technical Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-4">
              Developer Connections
            </h2>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              For technical queries regarding local docker containers, Kafka/Redpanda port allocations (19092), or QuestDB data corruption troubleshooting, please contact our systems engineers.
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass p-4 rounded-xl border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] uppercase tracking-wider block mb-1">
                Systems & SDK Support
              </span>
              <a href="mailto:support@strat.io" className="text-sm font-bold text-[var(--text-primary)] hover:underline">
                support@strat.io
              </a>
            </div>

            <div className="glass p-4 rounded-xl border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono text-[var(--gold-primary)] uppercase tracking-wider block mb-1">
                API Licensing Partnerships
              </span>
              <a href="mailto:partners@strat.io" className="text-sm font-bold text-[var(--text-primary)] hover:underline">
                partners@strat.io
              </a>
            </div>

            <div className="glass p-4 rounded-xl border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                Corporate Address
              </span>
              <address className="text-xs font-bold text-[var(--text-primary)] not-italic leading-relaxed">
                Strat Tech Labs Private Limited<br />
                80 Feet Rd, Koramangala 4th Block,<br />
                Bengaluru, Karnataka 560034, India
              </address>
            </div>
          </div>
        </div>

        {/* Support Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass border border-[var(--border-subtle)] rounded-2xl p-6 md:p-8 space-y-6">
            <h3 className="text-sm font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-3">
              Technical Inquiry Form
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors duration-200"
                    placeholder="you@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Inquiry Topic
                </label>
                <select className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors duration-200">
                  <option>Kite Connect OAuth daily handshake errors</option>
                  <option>Tauri Stronghold local credentials encryption issues</option>
                  <option>QuestDB SQL lazy loading query timeouts</option>
                  <option>Redpanda message topics ingestion failures</option>
                  <option>Commercial API integrations and partnerships</option>
                  <option>Other / General inquiries</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Detailed logs / description
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors duration-200 resize-none font-mono"
                  placeholder="Paste system console logs or describe your setup error..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--accent-primary)] to-[#6EE7B7] hover:from-[var(--accent-hover)] hover:to-[#34D399] text-black font-semibold rounded-lg py-2.5 text-xs font-mono transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.25)] cursor-pointer"
              >
                SEND INQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
