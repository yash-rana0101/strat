import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. No Cloud Storage for Brokerage Credentials",
      content: "Alpha Suite is a local desktop application. Your Zerodha Kite Connect API Key, API Secret, and daily Access Tokens are stored locally on your own machine. We do not operate cloud databases to host or mirror your credentials, rendering centralized leaks impossible.",
    },
    {
      title: "2. Tauri Stronghold Encryption Standards",
      content: "All sensitive files, including credentials and user watchlist paths, are written to local disk directories encrypted inside a Tauri Stronghold vault using Argon2id master key derivation and AES-GCM-256 encryption. Memory is zeroed out immediately after API requests complete to prevent RAM scraper exploits.",
    },
    {
      title: "3. Direct-to-Broker WebSocket Pipeline",
      content: "When connecting your feed, the client initiates a direct connection from your computer to the official broker gateway (wss://ws.kite.trade). Ticks are parsed locally, sent to your local Redpanda message queue, and cached on your local QuestDB instance. No telemetry or transaction details are routed through any intermediary servers.",
    },
    {
      title: "4. Anonymized Diagnostic Audits",
      content: "If you explicitly toggle 'Submit Diagnostics' in the developer panel, the application will periodically send anonymized system crash telemetry (e.g. system memory allocation locks or Tokio stream panics) to our support system. These reports never contain API keys, trading decisions, or custom strategy parameters.",
    },
  ];

  return (
    <SubpageLayout
      title="Privacy & Data Policy"
      subtitle="Last updated: May 22, 2026. Learn how our local-first architecture keeps your credentials and trading strategies strictly private."
      category="Legal"
    >
      <div className="max-w-3xl space-y-8 pb-8">
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          At Alpha Suite, we prioritize the absolute sovereignty of your trading configurations. Because our terminal operates entirely inside a sandboxed desktop container, we do not monitor, compile, or sell your trading logs, watchlist entries, or ML indicator configurations.
        </p>

        <div className="space-y-8 mt-6">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm font-bold font-heading text-[var(--text-primary)]">
                {sec.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
