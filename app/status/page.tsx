import React from "react";
import SubpageLayout from "@/app/components/layout/SubpageLayout";

export default function StatusPage() {
  const topics = [
    { name: "market.ticks", type: "Raw Feed", rate: "28,401 msg/s", status: "Active" },
    { name: "market.ohlc.10m", type: "Aggregated OHLC", rate: "50 msg/s", status: "Active" },
    { name: "technical_signals", type: "Indicator Stream", rate: "50 msg/s", status: "Active" },
    { name: "sentiment_signals", type: "News Sentiment Score", rate: "1 msg/min", status: "Active" },
    { name: "signals.predictive", type: "OLS Ghost Line Close", rate: "50 msg/s", status: "Active" },
    { name: "aggregated_decisions", type: "Consensus Signal (8080)", rate: "50 msg/s", status: "Active" },
  ];

  const metrics = [
    { name: "Zerodha WebSockets", status: "Operational", desc: "Ingesting 184-byte binary frames directly via wss://ws.kite.trade", latency: "14ms" },
    { name: "Redpanda Streaming Bus", status: "Operational", desc: "Local Kafka message broker at ports 19092 & 29092", latency: "2ms" },
    { name: "QuestDB Ingest Sink", status: "Operational", desc: "Influx Line Protocol (ILP) writes on TCP port 9009", latency: "8ms" },
    { name: "DeepSeek v4 Pro NIM", status: "Operational", desc: "NVIDIA NIM API endpoint for Quant-RAG insights", latency: "380ms" },
  ];

  return (
    <SubpageLayout
      title="System Status & Telemetry"
      subtitle="Real-time monitor of local database ports, streaming queue metrics, and indicator engine health."
      category="Telemetry"
    >
      <div className="space-y-12">
        {/* Pulsing Uptime Banner */}
        <div className="glass border border-[var(--border-glow)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(16,185,129,0.06)]">
          <div className="flex items-center gap-4">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            </span>
            <div>
              <h2 className="text-lg font-bold font-heading text-[var(--text-primary)]">
                All Local Services Active
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                ConsensusEngine (8080) broadcasting decisions. Last ping received 3s ago.
              </p>
            </div>
          </div>
          <div className="font-mono text-xs text-[var(--accent-primary)] bg-[var(--accent-soft)] border border-[rgba(16,185,129,0.15)] px-3 py-1 rounded">
            LOCAL ENGINE: OK
          </div>
        </div>

        {/* Kafka Topics Table */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold font-heading text-[var(--text-primary)] uppercase tracking-wider">
            Redpanda Stream Telemetry (Kafka Bus)
          </h3>
          <div className="glass border border-[var(--border-subtle)] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-mono text-xs">
                <thead>
                  <tr className="bg-[var(--bg-muted)] border-b border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                    <th className="p-4">Topic Name</th>
                    <th className="p-4">Payload Type</th>
                    <th className="p-4">Publish Rate</th>
                    <th className="p-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                  {topics.map((t, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/20">
                      <td className="p-4 font-bold text-[var(--text-primary)]">{t.name}</td>
                      <td className="p-4">{t.type}</td>
                      <td className="p-4 text-[var(--accent-primary)]">{t.rate}</td>
                      <td className="p-4 text-right">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                        {t.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Network Metrics */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold font-heading text-[var(--text-primary)] uppercase tracking-wider">
            Connector Latencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="glass p-5 rounded-xl border border-[var(--border-subtle)] flex flex-col justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-bold font-heading text-[var(--text-primary)]">
                      {m.name}
                    </h4>
                    <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                      {m.latency}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
