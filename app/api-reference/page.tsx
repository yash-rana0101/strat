import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function ApiReferencePage() {
  const ports = [
    { port: "8080", service: "Swarm Consensus Feed", protocol: "WebSocket", desc: "Live BUY/SELL/HOLD conviction scores and momentum states" },
    { port: "8081", service: "Session Telemetry Feed", protocol: "WebSocket", desc: "High-fidelity tick streams and interactive chart coordinates" },
    { port: "8082", service: "Secure Journal Export", protocol: "HTTP JSON", desc: "Local analytics export for automated trading journals" },
  ];

  const apis = [
    {
      title: "1. Subscribing to Swarm Consensus Signals",
      description: "Subscribe to the local Consensus stream (Port 8080) to receive unified market conviction scores calculated by Strat's specialized analytics swarm in real-time.",
      endpoint: "WS /ws/consensus",
      pythonCode: `import websocket
import json

def on_consensus(ws, message):
    data = json.loads(message)
    # Access unified conviction scores and analytical decisions
    print(f"Decision: {data['decision']} | Conviction Score: {data['conviction_score']}/100")
    print(f"Active Regime: {data['regime']} | Supporting Indicators: {data['confluences']}")

ws = websocket.WebSocketApp(
    "ws://127.0.0.1:8080/ws/consensus",
    on_message=on_consensus
)
ws.run_forever()`,
      rustCode: `use tokio_tungstenite::connect_async;
use futures_util::StreamExt;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "ws://127.0.0.1:8080/ws/consensus";
    let (mut ws_stream, _) = connect_async(url).await?;
    println!("Swarm consensus stream connected successfully.");

    while let Some(msg) = ws_stream.next().await {
        let msg = msg?;
        if msg.is_text() {
            let report: SwarmReport = serde_json::from_str(msg.to_text()?)?;
            println!("Swarm Conviction Score: {}", report.conviction_score);
        }
    }
    Ok(())
}`,
    },
    {
      title: "2. Automating Your Trading Journal",
      description: "Query your local secure endpoint to fetch setups, trade targets, and statistical performance metrics to automatically log into your private sheets.",
      endpoint: "GET /api/journal",
      pythonCode: `import requests

# Fetch compiled daily setups from secure local memory
response = requests.get("http://127.0.0.1:8082/api/journal")
if response.status_code == 200:
    setups = response.json()
    for setup in setups:
        print(f"Instrument: {setup['symbol']} | Limit Entry: {setup['entry']}")
        print(f"Target: {setup['target']} | Stop-Loss: {setup['stop_loss']}")`,
      rustCode: `use reqwest;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    // Fetch local secure setups for sheet synchronization
    let response = reqwest::get("http://127.0.0.1:8082/api/journal")
        .await?
        .json::<Vec<TradingSetup>>()
        .await?;

    for setup in response {
        println!("Exporting {} setup - Entry: {}", setup.symbol, setup.entry);
    }
    Ok(())
}`,
    },
  ];

  return (
    <SubpageLayout
      title="Integration & Automation Hub"
      subtitle="Synchronize conviction scores, telemetry streams, and custom setups directly into your private spreadsheets or analytical dashboards."
      category="Developer API"
    >
      <div className="space-y-16">
        {/* Port Map Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2">
            1. Secure Local Port Allocations
          </h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            All Strat modules execute locally on your machine, communicating via native IPC and secure local ports to ensure your strategy setups remain completely private.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ports.map((p, idx) => (
              <div key={idx} className="glass p-4 rounded-xl border border-[var(--border-subtle)] flex items-start gap-4">
                <div className="font-mono text-xs font-bold text-[var(--accent-primary)] bg-[var(--accent-soft)] px-2.5 py-1.5 rounded border border-[rgba(16,185,129,0.15)] select-none">
                  {p.port}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold font-heading text-[var(--text-primary)]">
                    {p.service} ({p.protocol})
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Details */}
        <section className="space-y-12">
          <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2">
            2. Local Feed Specifications
          </h2>
          {apis.map((api, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Description Column */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-base font-bold font-heading text-[var(--text-primary)]">
                  {api.title}
                </h3>
                <div className="inline-block font-mono text-[9px] uppercase font-bold text-[var(--accent-primary)] bg-[var(--accent-soft)] px-2.5 py-1 rounded border border-[rgba(16,185,129,0.15)]">
                  {api.endpoint}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {api.description}
                </p>
              </div>

              {/* Code Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="glass border border-[var(--border-subtle)] rounded-xl overflow-hidden">
                  <div className="bg-[var(--bg-muted)] border-b border-[var(--border-subtle)] px-4 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      Code Interface
                    </span>
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
                    </div>
                  </div>

                  <div className="p-4 space-y-4">
                    {/* Python */}
                    <div>
                      <div className="text-[9px] font-mono text-[var(--accent-primary)] mb-1.5 uppercase tracking-widest font-bold">
                        # Python Script
                      </div>
                      <pre className="font-mono text-[11px] text-[var(--text-secondary)] overflow-x-auto bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)] leading-relaxed">
                        <code>{api.pythonCode}</code>
                      </pre>
                    </div>

                    {/* Rust */}
                    <div>
                      <div className="text-[9px] font-mono text-[var(--gold-primary)] mb-1.5 uppercase tracking-widest font-bold">
                        // Rust Integration
                      </div>
                      <pre className="font-mono text-[11px] text-[var(--text-secondary)] overflow-x-auto bg-[var(--bg-base)] p-3 rounded-lg border border-[var(--border-subtle)] leading-relaxed">
                        <code>{api.rustCode}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </SubpageLayout>
  );
}
