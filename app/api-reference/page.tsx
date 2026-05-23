import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function ApiReferencePage() {
  const ports = [
    { port: "8080", service: "Aggregator Engine", protocol: "WebSocket", desc: "BUY/SELL/HOLD signals and strategy triggers" },
    { port: "8081", service: "Alpha Terminal Engine", protocol: "WebSocket", desc: "Streaming 10m OHLC candle ticks" },
    { port: "8082", service: "Predictive Agent (OLS)", protocol: "WebSocket", desc: "Dashed Ghost Line price coordinates" },
    { port: "8083", service: "Quant-RAG Agent (DeepSeek)", protocol: "WebSocket", desc: "Market anomaly insights and summaries" },
    { port: "8812", service: "QuestDB SQL Interface", protocol: "PostgreSQL", desc: "Lazy loading historical stock ticks" },
    { port: "9009", service: "QuestDB Ingest Interface", protocol: "TCP (ILP)", desc: "High-speed tick ingestion channel" },
  ];

  const apis = [
    {
      title: "1. Connecting to the Aggregator Signals",
      description: "Subscribe to the Aggregator Engine (Port 8080) to receive unified Buy/Sell/Hold consensus signals compiled from Technical, Sentiment, and Predictive agents.",
      endpoint: "WS /ws/consensus",
      pythonCode: `import websocket
import json

def on_message(ws, message):
    data = json.loads(message)
    # Renders trend_score (-100 to +100), momentum, and active patterns
    print(f"Consensus: {data['decision']} | Trend: {data['trend_score']}")
    print(f"Patterns: {data['patterns']} | Strategies: {data['strategies']}")

ws = websocket.WebSocketApp(
    "ws://127.0.0.1:8080/ws/consensus",
    on_message=on_message
)
ws.run_forever()`,
      rustCode: `use tokio_tungstenite::connect_async;
use futures_util::StreamExt;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "ws://127.0.0.1:8080/ws/consensus";
    let (mut ws_stream, _) = connect_async(url).await?;
    println!("Consensus stream connected.");

    while let Some(msg) = ws_stream.next().await {
        let msg = msg?;
        if msg.is_text() {
            let parsed: ConsensusReport = serde_json::from_str(msg.to_text()?)?;
            println!("Regime: {:?}", parsed.momentum_state);
        }
    }
    Ok(())
}`,
    },
    {
      title: "2. Fetching Historical ticks from QuestDB",
      description: "Strat uses QuestDB at Port 8812 for high-speed local time-series queries. You can pull historical ticks bypassing HTTP loops by query serialization in bincode format.",
      endpoint: "SQL Port 8812",
      pythonCode: `import psycopg2

# Connect directly to local QuestDB SQL engine
conn = psycopg2.connect(
    host="127.0.0.1",
    port=8812,
    user="admin",
    password="quest",
    database="qdb"
)
cursor = conn.cursor()
cursor.execute(
    "SELECT timestamp, symbol, ltp, volume "
    "FROM market_ticks WHERE symbol = 'RELIANCE' "
    "LIMIT 1000"
)
for row in cursor.fetchall():
    print(f"Tick: {row[0]} | Price: {row[2]}")`,
      rustCode: `use sqlx::postgres::PgPoolOptions;

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    // Pipe QuestDB SQL results into local engine vectors
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect("postgres://admin:quest@127.0.0.1:8812/qdb").await?;

    let ticks = sqlx::query!("SELECT symbol, ltp, volume FROM market_ticks LIMIT 500")
        .fetch_all(&pool)
        .await?;

    for tick in ticks {
        println!("Symbol: {} | Price: {:?}", tick.symbol, tick.ltp);
    }
    Ok(())
}`,
    },
  ];

  return (
    <SubpageLayout
      title="Developer API & Port Map"
      subtitle="Connect directly to Strat's background microservices, WebSocket streams, and local QuestDB schema."
      category="Developer API"
    >
      <div className="space-y-16">
        {/* Port Map Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2">
            1. Core Microservices Port Allocation
          </h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            All Strat modules execute locally on your machine, communicating via native IPC and local TCP/WebSocket connections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            2. Stream & Query Specifications
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
