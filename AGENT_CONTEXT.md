# AGENT_CONTEXT.md — Strat
> **Read this file first. Always. Before writing a single line of code, markup, or copy.**
>
> This is the single source of truth for any AI agent, developer, or tool working on
> the Strat project. It tells you what this product is, what has already been built,
> what still needs to be built, how every layer connects, and what decisions are final.
>
> Cross-reference:
> - `DESIGN.md`      — all visual tokens, components, motion, spacing (authoritative)
> - `COMPLETE_ANALYSIS.md`         — full source-file inventory and data flow details
> - `technical_indicators_analysis.md` — indicator math, consensus engine, UI feature map
> - `system_architecture_and_data_flows.md` — mermaid diagrams, feature-by-feature flows

---

## SECTION 1 — WHAT IS STRAT?

Strat is a **native desktop trading terminal** for Indian stock markets (NSE/BSE)
built on **Tauri + Next.js**. It connects to **Zerodha Kite** via their official API,
ingests live binary market data, runs it through **5 AI/ML agents**, fuses the signals,
and presents institutional-grade analysis in a professional charting interface.

**One-sentence pitch:**
> "Bloomberg Terminal intelligence, built in Rust, for the serious Indian F&O trader."

**What it is NOT:**
- Not a browser-based tool (native desktop only)
- Not a crypto product
- Not an auto-execution / algo-trading bot (intelligence + recommendations only)
- Not a generic SaaS dashboard

**Primary users:**
- Semi-professional to professional Indian F&O (Futures & Options) traders
- Prop desk traders and swing traders on NSE/BSE
- Technically literate users comfortable with RSI, VWAP, OLS, ORB strategies

**Tech maturity:**
- Backend agents: production-grade Rust, fully functional
- Frontend: functional but actively being developed
- Landing page: not yet built (see Section 7)
- Auth system: complete, production-ready

---

## SECTION 2 — COMPLETE TECHNOLOGY STACK

```
LAYER               TECHNOLOGY                  NOTES
─────────────────────────────────────────────────────────────────────────────
Data Source         Zerodha Kite WebSocket      Binary protocol, 184-byte frames
                    Zerodha Kite REST API        Historical candles, instruments, quotes

Ingestion           Rust + Tokio                /ingestion service
Message Bus         Redpanda (Kafka-compatible) Ports 19092 / 29092

AI Agents (5 total):
  Alpha Terminal    Rust                        OHLC engine, WS:8081
  Technical Agent   Rust                        RSI+VWAP, Kafka
  Sentiment Agent   Node.js                     Google News RSS + LLM
  Predictive Agent  Rust                        OLS regression, WS:8082
  Quant-RAG Agent   Rust + DeepSeek v4 Pro      Anomaly detection, WS:8083

Aggregator          Rust                        Decision fusion, WS:8080
Time-Series DB      QuestDB                     Ports 8812 (PG), 9000 (UI), 9009 (ILP)
Desktop Shell       Tauri (Rust)                IPC bridge, SQLite, Stronghold vault
Frontend            Next.js + React             Lightweight Charts, Zustand
Styling             Tailwind CSS + CSS vars     Tokens defined in DESIGN.md
Auth Service        Node.js + Express           PostgreSQL port 5890, Redis port 6379
Security            Argon2id + AES-256          Tauri Stronghold vault for API keys
Testing             Playwright (E2E), Rust      /frontend/tests/, /frontend/src-tauri/tests/
LLM Provider        DeepSeek v4 Pro             Via NVIDIA NIM API (configurable)
LLM Fallback        HuggingFace / OpenAI / Groq / local Ollama
```

---

## SECTION 3 — REPOSITORY STRUCTURE

```
/alpha-suite (monorepo root)
│
├── /ingestion                    Zerodha tick ingestion (Rust)
│   ├── src/main.rs               Entry — auth + WS bootstrap
│   ├── src/kite_auth.rs          OAuth token exchange
│   ├── src/kite_client.rs        WS client → wss://ws.kite.trade
│   ├── src/parser.rs             Binary 184-byte frame decoder → ParsedTick
│   ├── src/kafka_producer.rs     Protobuf → Kafka market.ticks
│   ├── src/questdb_sink.rs       ILP → QuestDB port 9009
│   └── src/types.rs              ParsedTick struct
│
├── /alpha-terminal               OHLC aggregation engine (Rust, WS:8081)
│   ├── src/engine.rs             Tumbling 10m window aggregator
│   ├── src/consumer.rs           Kafka consumer (market.ticks)
│   ├── src/kafka_producer.rs     market.ohlc.10m publisher
│   └── src/ws_server.rs          WebSocket server port 8081
│
├── /agents
│   ├── /technical                RSI14 + VWAP + patterns (Rust, Kafka)
│   │   ├── src/indicators.rs     RSI14, VWAP computation
│   │   ├── src/signal_engine.rs  TechSignal → technical_signals topic
│   │   └── src/state.rs          Per-symbol rolling window state
│   │
│   ├── /sentiment                News sentiment (Node.js, Kafka)
│   │   ├── fetcher.js            Google News RSS fetcher
│   │   ├── analyzer.js           Sentiment pipeline
│   │   ├── claude.js             LLM scoring (Claude/DeepSeek)
│   │   ├── cache.js              Response caching
│   │   └── kafkaProducer.js      → sentiment_signals topic
│   │
│   ├── /predictive               OLS Ghost Line (Rust, WS:8082)
│   │   ├── src/math.rs           Least-squares linear regression
│   │   ├── src/engine.rs         14-period rolling window, R² confidence
│   │   └── src/ws_server.rs      PredictiveSignal → WS:8082
│   │
│   └── /quant-rag                DeepSeek anomaly engine (Rust, WS:8083)
│       ├── src/engine.rs         ≥2% swing detection on market.ohlc.10m
│       ├── src/llm.rs            DeepSeek v4 Pro REST client
│       └── src/ws_server.rs      MarketInsight → WS:8083
│
├── /aggregator                   Decision fusion (Rust, WS:8080)
│   ├── src/engine.rs             ConsensusEngine — TechSignal + SentimentSignal
│   ├── src/consumer.rs           Reads technical_signals + sentiment_signals
│   ├── src/kafka_producer.rs     → aggregated_decisions topic
│   ├── src/ws_server.rs          BUY/SELL/HOLD → WS:8080
│   ├── src/kite_api.rs           Kite REST proxy + instrument cache
│   └── src/quant/
│       ├── mod.rs                ConsensusEngine::compile_consensus()
│       ├── patterns.rs           PatternEngine::analyze() — 5 patterns
│       └── strategies.rs         StrategyEngine::evaluate() — 5 strategies
│
├── /auth                         Auth service (Node.js + Express)
│   ├── PostgreSQL schema         5 migrations: identity, tokens, persona, KYC, billing
│   └── Redis 7                   Session cache port 6379
│
├── /frontend                     Desktop app shell + UI
│   ├── /src                      Next.js React frontend
│   │   ├── /store
│   │   │   ├── useTradeStore.ts  Central state (symbol, timeframe, candles, cache)
│   │   │   └── useChartUIStore.ts Drawing tool state
│   │   ├── /hooks
│   │   │   ├── useTauriLiveData.ts       IPC event → Zustand binding
│   │   │   ├── useHistoricalData.ts      QuestDB lazy loader + cache
│   │   │   ├── useChartDataSync.ts       Merge historical + live → chart.setData()
│   │   │   ├── useChartInit.ts           Lightweight Charts init
│   │   │   ├── useMultiTimeframeTrend.ts 1H/4H/1D/1W trend analysis
│   │   │   ├── useDrawingEngine.ts       Canvas drawing state machine
│   │   │   └── useMacroIndicators.ts     Macro data for Investor mode
│   │   └── /components
│   │       ├── AlphaPredictiveChart.tsx  MAIN CHART — EMA ribbons, Ghost Line
│   │       ├── TerminalLayout.tsx        Master layout shell
│   │       ├── LeftPanel.tsx             Watchlist + search + sentiment cards
│   │       ├── ConsensusBoard.tsx        Trend/momentum/volatility/volume panel
│   │       ├── DeepQuantPanel.tsx        AI execution plan panel
│   │       ├── QuantRadar.tsx            Floating scanner alert overlay
│   │       ├── SystemConsole.tsx         Service health + latency monitor
│   │       ├── SecurityVault.tsx         API key management modal
│   │       ├── OrderBook.tsx             Level-2 market depth (pending data)
│   │       └── ActivePositions.tsx       Paper trading tracker
│   │
│   └── /src-tauri                Tauri Rust backend
│       └── /src
│           ├── /services
│           │   ├── live_bridges.rs   WS:8081/8082/8083 → emit_all() IPC
│           │   └── historical.rs     QuestDB query → bincode → Uint8Array
│           └── /quant
│               ├── mod.rs            ConsensusEngine (local, Tauri-embedded)
│               ├── patterns.rs       PatternEngine (local copy)
│               ├── strategies.rs     StrategyEngine (local copy)
│               └── radar.rs          Background scanner — 50 F&O symbols @ 60s
│
├── /tools
│   └── /load_tester              Chaos engine — 100 candles/sec + anomaly injection
│
├── docker-compose.yml            Orchestrates: QuestDB, Redpanda, PostgreSQL, Redis
├── DESIGN.md                     ← Visual design system (authoritative)
└── AGENT_CONTEXT.md              ← This file (authoritative meta-context)
```

---

## SECTION 4 — DATA FLOWS (CANONICAL)

### 4.1 Real-Time Tick Path
```
Zerodha Kite WS (binary, 184 bytes)
  └─ ingestion/parser.rs → ParsedTick struct
       ├─ kafka_producer.rs → Kafka [market.ticks] (Protobuf)
       └─ questdb_sink.rs  → QuestDB port 9009 (ILP)
```

### 4.2 OHLC / Chart Path
```
Kafka [market.ticks]
  └─ alpha-terminal/engine.rs (tumbling 10m window)
       ├─ kafka_producer.rs → Kafka [market.ohlc.10m]
       └─ ws_server.rs → WS:8081 (JSON candle stream)
             └─ Tauri live_bridges.rs → emit_all('ohlc-tick')
                  └─ useTauriLiveData.ts → Zustand ohlcCandles[]
                       └─ useChartDataSync.ts → chart.update() ← DIRECT (no React)
```

### 4.3 AI Signal Path
```
Kafka [market.ticks]
  └─ agents/technical → RSI14 + VWAP → TechSignal
       └─ Kafka [technical_signals]

Kafka [live_ticks]
  └─ agents/sentiment → Google News RSS + LLM → NewsSentiment
       └─ Kafka [sentiment_signals]

Kafka [technical_signals] + [sentiment_signals]
  └─ aggregator/engine.rs → ConsensusEngine → AggregatedDecision (BUY/SELL/HOLD)
       └─ WS:8080 → Tauri → emit_all('aggregated-decision')
```

### 4.4 Ghost Line Path
```
Kafka [market.ohlc.10m]
  └─ agents/predictive/engine.rs
       ├─ math.rs: OLS on 14 closes → predicted_close, R²
       └─ ws_server.rs → WS:8082 → PredictiveSignal
             └─ Tauri live_bridges.rs → emit_all('predictive-tick')
                  └─ useTradeStore → predictiveSignals[]
                       └─ AlphaPredictiveChart.tsx → dashed Ghost Line (10m ONLY)
```

### 4.5 Quant-RAG Insight Path
```
Kafka [market.ohlc.10m]
  └─ agents/quant-rag/engine.rs → swing = |close-open|/open * 100
       IF swing ≥ 2.0%:
         └─ llm.rs → DeepSeek v4 Pro → { headline, analysis, sentiment_score }
              └─ ws_server.rs → WS:8083 → MarketInsight
                   └─ Tauri → emit_all('insight-tick')
                        └─ useTradeStore.latestInsight → Swing/Investor panels
```

### 4.6 Deep Quant AI Path (On-demand)
```
User clicks "RUN DEEP QUANT" button in DeepQuantPanel
  └─ invoke('run_deep_quant', { symbol })
       └─ Tauri:
            Step 1: Load 200 candles from QuestDB
            Step 2: IndicatorState::from_candles() → ConsensusReport (16 indicators)
            Step 3: Fetch Google News RSS headlines
            Step 4: Build Master Prompt → POST DeepSeek LLM
            Step 5: Parse JSON → AiExecutionPlan
       └─ Returns to DeepQuantPanel.tsx:
            Renders: conviction_score (0–100) + setup_validation + entry/SL/targets
```

### 4.7 Quant Radar Path (Background)
```
Tauri quant/radar.rs — background Tokio task
  └─ Every 60 seconds, loop 50 F&O symbols:
       For each symbol:
         ├─ Fetch 300 daily candles (Kite API → fallback QuestDB)
         ├─ IndicatorState::from_candles_basic()
         ├─ ConsensusEngine::compile_consensus()
         └─ IF strategy fired OR |trend_score| ≥ 50:
              └─ emit_all('radar-alert', RadarAlert { severity: HIGH/MEDIUM/LOW })
                   └─ QuantRadar.tsx → floating alert card
                        └─ On click → useTradeStore.selectedSymbol = symbol → chart switches
```

### 4.8 Symbol Switch Path
```
User clicks symbol in LeftPanel watchlist
  └─ invoke('subscribe_ticker', { symbol })
       └─ Tauri:
            ├─ Updates ActiveSymbolState
            └─ Bootstraps WS bridges (LAZY — first call only):
                 ├─ WS:8081 listener → emit('ohlc-tick')
                 ├─ WS:8082 listener → emit('predictive-tick')
                 └─ WS:8083 listener → emit('insight-tick')
  └─ invoke('get_historical_view', { symbol, interval })
       └─ Tauri → QuestDB SQL → bincode serialize → Uint8Array → frontend
            └─ useChartDataSync.ts → merge + deduplicate → chart.setData()
```

---

## SECTION 5 — INTELLIGENCE LAYER (16 INDICATORS + 5 PATTERNS + 5 STRATEGIES)

### 5.1 Indicator Inventory

| # | Indicator | Compute Location | Status |
|---|---|---|---|
| 1 | RSI 14 | Technical Agent (Rust) + Consensus + Frontend | LIVE |
| 2 | VWAP | Technical Agent + Consensus | LIVE |
| 3 | SMA 50 | Consensus Engine | LIVE |
| 4 | SMA 200 | Consensus Engine | LIVE |
| 5 | EMA 9 | Frontend (client-side) | LIVE |
| 6 | EMA 21 | Frontend (client-side) | LIVE |
| 7 | MACD Histogram | Consensus Engine | PENDING (NaN) |
| 8 | Parabolic SAR | Consensus Engine | PENDING (NaN) |
| 9 | Stochastic %K | Consensus Engine | PENDING (NaN) |
| 10 | Bollinger Bands Upper/Lower | Consensus Engine | PENDING (NaN) |
| 11 | ATR 20-period MA | Consensus Engine | PENDING (NaN) |
| 12 | OBV (On-Balance Volume) | Consensus Engine | PENDING (NaN) |
| 13 | CMF (Chaikin Money Flow) | Consensus Engine | PENDING (NaN) |
| 14 | Average Volume (20-period) | Consensus Engine | LIVE |
| 15 | ORB High/Low (Opening Range) | Consensus Engine | PENDING (NaN) |
| 16 | Linear Regression 14-period | Predictive Agent (Rust) | LIVE |

**Current status:** 4 indicators auto-computed in `from_candles_basic()`.
The remaining 12 slots exist in `IndicatorState` struct but return `NaN` — they are
wired to affect ConsensusReport outputs when populated.

### 5.2 TechSignal Score Logic (Technical Agent)

```
RSI < 30  AND  price > VWAP   →  Score 85  (Strong Bullish)
RSI < 30  AND  price ≤ VWAP   →  Score 65  (Moderate Bullish)
RSI < 45  AND  price > VWAP   →  Score 62  (Mild Bullish)
RSI > 70  AND  price < VWAP   →  Score 15  (Strong Bearish)
RSI > 70  AND  price ≥ VWAP   →  Score 35  (Moderate Bearish)
RSI > 55  AND  price < VWAP   →  Score 38  (Mild Bearish)
Everything else                →  Score 50  (Neutral)
```

### 5.3 ConsensusReport Fields

```
1. Trend Score (-100 to +100):
   close > SMA50   → +25   |   close < SMA50   → -25
   close > SMA200  → +25   |   close < SMA200  → -25
   MACD hist > 0   → +25   |   MACD hist < 0   → -25
   SAR < close     → +25   |   SAR > close     → -25

2. Momentum State:
   RSI > 70 OR Stoch %K > 80  →  OVERBOUGHT
   RSI < 30 OR Stoch %K < 20  →  OVERSOLD
   else                        →  NEUTRAL

3. Volatility State:
   price breaks BB Upper/Lower →  EXPANDING
   BB Width < ATR 20-period MA →  SQUEEZING
   else                         →  NORMAL

4. Volume Flow State:
   CMF > 0.05  AND OBV rising  →  ACCUMULATION
   CMF < -0.05 AND OBV falling →  DISTRIBUTION
   else                         →  NEUTRAL

5. Active Patterns    (Vec<String>) — from PatternEngine
6. Active Strategies  (Vec<String>) — from StrategyEngine
```

### 5.4 Candlestick Patterns (PatternEngine)

```
Doji             body / range < 0.10
Hammer           lower_shadow ≥ body×2  AND  upper_shadow ≤ range×0.33
Shooting Star    upper_shadow ≥ body×2  AND  lower_shadow ≤ range×0.33
Bullish Engulfing  prev bearish, curr bullish, curr body engulfs prev body
Bearish Engulfing  prev bullish, curr bearish, curr body engulfs prev body
```

### 5.5 Institutional Strategies (StrategyEngine)

```
Golden Cross    prev_sma50 ≤ prev_sma200 AND sma50 > sma200
Death Cross     prev_sma50 ≥ prev_sma200 AND sma50 < sma200
VWAP Bounce     low ≤ VWAP AND close > VWAP AND prev bearish  [vol > avg×1.5]
ORB Breakout    close > orb_high                              [vol > avg×1.2]
ORB Breakdown   close < orb_low                              [vol > avg×1.2]

Radar severity:
  HIGH   — Golden Cross or ORB Breakout detected (audio beep)
  MEDIUM — |trend_score| ≥ 75 OR any strategy fires
  LOW    — all other triggers
```

### 5.6 Predictive Agent (OLS Ghost Line)

```
Window: 14 closing prices from market.ohlc.10m
m = (N·Σxy − Σx·Σy) / (N·Σx² − (Σx)²)
b = (Σy − m·Σx) / N
predicted_close = m × 14 + b
R² = 1 − (SS_res / SS_tot)   → confidence = R² × 100, clamped [1, 100]

CONSTRAINT: Ghost Line HIDDEN on all non-10m timeframes.
            Mathematical validity is specific to 10m training data.
```

---

## SECTION 6 — UI FEATURES MAP

| Feature | Component File | Data Source | Key Behaviour |
|---|---|---|---|
| Main Chart | AlphaPredictiveChart.tsx | useChartDataSync | Candlesticks + EMA9/21 + Volume + Ghost Line (10m) |
| ConsensusBoard | ConsensusBoard.tsx | ConsensusEngine IPC | Trend gauge + regime badges + pattern pills |
| Deep Quant Panel | DeepQuantPanel.tsx | Tauri IPC (on-demand) | LLM conviction + entry/SL/targets |
| Quant Radar | QuantRadar.tsx | Tauri IPC 'radar-alert' | Floating alerts, audio on HIGH, click → switch symbol |
| Multi-TF Trend | SwingConfluencePanel.tsx | useMultiTimeframeTrend | 1H/4H/1D/1W bias bars |
| Watchlist | LeftPanel + WatchlistPanel.tsx | useTradeStore | Drag-reorder, live price, sentiment cards |
| Order Book | OrderBook.tsx | Awaiting live depth data | Level-2 DOM (partial implementation) |
| System Console | SystemConsole.tsx | useTradeStore.systemLogs | Health dots, latency ms, rolling 500-entry log |
| Security Vault | SecurityVault.tsx | Tauri Stronghold | Argon2id+AES-256 API key storage |
| Active Positions | ActivePositions.tsx | Local state | Paper trading position tracker |

---

## SECTION 7 — WHAT STILL NEEDS TO BE BUILT

This section is the agent's task brief. Every item here is unbuilt or incomplete.

### 7.1 LANDING PAGE (Priority: HIGH)
**Status:** Does not exist yet. Must be built from scratch.
**Purpose:** Marketing/acquisition page for https://trivx.in (or dedicated domain).
**Reference files:**
- `DESIGN.md` — complete visual design system (authoritative, use all tokens)
- `alpha_suite_landing_page_prompt.md` — full section-by-section copy and layout spec

**Sections to build (in order):**
```
1.  Navbar           — fixed, glassmorphism on scroll, logo + nav links + 2 CTAs
2.  Hero             — 100dvh, left copy + right animated terminal mockup
3.  Ticker           — 56px social proof ticker with live market data simulation
4.  Problem Section  — pain agitation with red-tinted comparison cards
5.  How It Works     — 5-step alternating layout with animated mockups per step
6.  Feature Bento    — 4-column bento grid, 6 cells, interactive hover
7.  Performance Stats — 4 stat counters with count-up animation
8.  Architecture     — stack display + animated SVG flow diagram
9.  Testimonials     — 3-column beta trader cards
10. Pricing          — centered card with glow border, feature checklist
11. FAQ              — accordion component, 6 questions
12. Final CTA        — full-bleed minimal section with hero repeat
13. Footer           — 4-column links + copyright bar
```

**Technical requirements:**
- Framework: Next.js 14 (App Router) OR pure HTML/CSS/JS (static)
- All CSS tokens from DESIGN.md — no deviation
- Fonts: Instrument Serif (hero H1), Geist (headings), DM Sans (body), JetBrains Mono (data)
- All animations: CSS or Framer Motion — obey prefers-reduced-motion
- Must be responsive: 375px / 768px / 1024px / 1280px breakpoints
- Terminal mockup in hero: SVG animated candlesticks — no external chart library

### 7.2 REMAINING INDICATORS (Priority: MEDIUM)
**Status:** 12 of 16 indicators return NaN in `IndicatorState::from_candles_basic()`
**File:** `/frontend/src-tauri/src/quant/mod.rs`
**Task:** Wire the following indicators using candle OHLC data:
```
MACD Histogram    — 12/26 EMA difference, then 9-period EMA of that
Parabolic SAR     — standard formula, AF 0.02 step, max 0.20
Stochastic %K     — (close - lowest_low_14) / (highest_high_14 - lowest_low_14) × 100
Bollinger Bands   — 20-period SMA ± (2 × 20-period stddev)
ATR 20-period MA  — True Range then 20-period SMA of it
OBV               — cumulative: +volume if close > prev_close, else -volume
CMF               — ((close-low)-(high-close))/(high-low) × volume, 20-period
VWAP              — Σ(typical_price × volume) / Σ(volume), intraday reset
ORB High/Low      — first candle of session defines the opening range
```
When wired, the ConsensusReport Trend Score, Volatility State, Volume Flow will
become fully active (currently partially zero due to NaN inputs).

### 7.3 ORDER BOOK (Priority: LOW)
**Status:** `OrderBook.tsx` component exists but lacks live Level-2 market depth data.
**Task:** Wire Kite's market depth (bid/ask 5-level) from the ingestion ParsedTick struct
into the frontend via a new IPC event `market-depth`.

### 7.4 DEPLOYMENT PIPELINE (Priority: LOW)
**Status:** Docker Compose works locally. No CI/CD or cloud deployment configured.
**Task:** GitHub Actions pipeline — build Rust agents, Tauri desktop app (Windows + macOS),
push Docker images to registry, deploy auth service to cloud.

---

## SECTION 8 — STATE MANAGEMENT REFERENCE

### 8.1 useTradeStore.ts (Zustand — central state)
```typescript
selectedSymbol:     string          // active chart symbol (default: 'RELIANCE')
activeProfile:      'INTRADAY' | 'SWING' | 'INVESTOR'
activeTimeframe:    '1m'|'3m'|'5m'|'10m'|'15m'|'30m'|'1h'|'1d'|'1w'|'1M'
activeRange:        '1Y'|'3Y'|'5Y'
ohlcCandles:        OhlcCandle[]    // max 3000 entries — live OHLC buffer
predictiveSignals:  PredictiveSignal[] // Ghost Line data points
latestInsight:      MarketInsight | null // DeepSeek last insight
historicalCache:    Map<string, OhlcCandle[]>  // key: 'SYMBOL::kiteInterval'
watchlist:          WatchlistItem[] // persisted via SQLite
systemLogs:         LogEntry[]      // rolling 500 entries
```

### 8.2 useChartUIStore.ts (Zustand — drawing state)
```typescript
activeCursorMode:   'default' | 'crosshair' | 'drawing'
activeDrawingTool:  'trendline' | 'fib' | 'rectangle' | 'text' | null
magnetMode:         boolean
drawingVisibility:  boolean
drawingLocked:      boolean
activeColor:        string
```

### 8.3 Cache Key Convention
```
historicalCache key format: 'SYMBOL::kiteInterval'
Example: 'RELIANCE::10minute', 'BANKNIFTY::1day'
Purpose: Prevents stale data when user switches timeframes on same symbol.
```

---

## SECTION 9 — PORT MAP (AUTHORITATIVE)

```
8080   — Aggregator Engine          WebSocket  (BUY/SELL/HOLD decisions)
8081   — Alpha Terminal             WebSocket  (OHLC candles)
8082   — Predictive Agent           WebSocket  (Ghost Line)
8083   — Quant-RAG Agent            WebSocket  (DeepSeek insights)
8812   — QuestDB                    PostgreSQL (SQL queries)
9000   — QuestDB                    HTTP       (Web console)
9009   — QuestDB                    TCP        (ILP high-speed writes)
19092  — Redpanda/Kafka             Kafka      (external access)
29092  — Redpanda/Kafka             Kafka      (internal access)
5890   — PostgreSQL (Auth DB)       PostgreSQL
6379   — Redis (Sessions)           Redis
```

---

## SECTION 10 — KAFKA TOPICS (AUTHORITATIVE)

```
market.ticks           Ingestion service → raw Zerodha ticks (Protobuf)
market.ohlc.10m        Alpha Terminal → completed 10m candles (Protobuf)
live_ticks             Consumed by Technical + Sentiment agents
technical_signals      Technical Agent → TechSignal structs
sentiment_signals      Sentiment Agent → NewsSentiment structs
signals.predictive     Predictive Agent → PredictiveSignal structs
signals.insights       Quant-RAG Agent → MarketInsight structs
aggregated_decisions   Aggregator → AggregatedDecision structs
```

---

## SECTION 11 — KEY ARCHITECTURAL CONSTRAINTS

These are non-negotiable decisions. Do not change them without explicit instruction.

```
1. Ghost Line is ONLY visible on 10m timeframe.
   Reason: OLS model trained on 10m data. Displaying on 1D would be mathematically invalid.
   File: AlphaPredictiveChart.tsx — hide condition: activeTimeframe !== '10m'

2. Chart rendering BYPASSES React state.
   Reason: Zero-latency requirement. React reconciliation adds 2–15ms per update.
   Method: chart.setData() and chart.update() called directly from hooks.
   Never pass OHLC data through React state for chart rendering.

3. WS bridges are LAZY — bootstrapped on first subscribe_ticker call only.
   Reason: Desktop resources. Don't open 4 WebSocket connections at boot.
   File: live_bridges.rs

4. Historical data uses BINCODE serialization (not JSON) for IPC.
   Reason: JSON parsing of 3000 candles adds 50–200ms overhead.
   Method: Vec<u8> → Uint8Array → client-side decode.

5. API keys NEVER stored in plaintext.
   Reason: Security. Tauri Stronghold vault with Argon2id + AES-256.
   File: SecurityVault.tsx + Tauri Stronghold commands.

6. Cache key is 'SYMBOL::kiteInterval' format — exact match required.
   Reason: Prevents stale cache hits when switching timeframes.
   File: useHistoricalData.ts

7. Quant Radar scans with 500ms sleep between symbols.
   Reason: Kite API rate limit protection.
   File: quant/radar.rs

8. Docker Compose is the single orchestration source for infra services.
   Never hardcode service addresses. Use env vars from docker-compose.yml.

9. LLM provider is configurable via environment variables (3 env vars).
   Never hardcode DeepSeek endpoint. Support: HuggingFace / OpenAI / Groq / Ollama.

10. Frontend state max candle buffer = 3000 entries.
    Reason: Memory and chart performance. Circular eviction beyond 3000.
```

---

## SECTION 12 — DESIGN SYSTEM SUMMARY (Quick Reference)

> Full spec is in `DESIGN.md`. This is a quick lookup only.

```
THEME:        Dark (--bg-base: #080C14 always)
ACCENT:       --accent-primary: #00D4FF  (electric cyan — single restrained accent)
BULL COLOR:   --green-bull: #00E676      (bullish/buy ONLY)
BEAR COLOR:   --red-bear: #FF3D57        (bearish/sell ONLY)
WARN COLOR:   --amber-warn: #FFB800
AI COLOR:     --purple-ai: #7C3AED       (AI-generated content ONLY)
TEXT PRIMARY: --text-primary: #E8EEF7    (NOT pure white)
TEXT SEC:     --text-secondary: #8898AA
TEXT MUTED:   --text-muted: #4A5568

FONT DISPLAY: "Instrument Serif"         (hero H1 only)
FONT HEADING: "Geist"                    (H2–H4)
FONT BODY:    "DM Sans"                  (body copy)
FONT MONO:    "JetBrains Mono"           (all data values, numbers, code)

SPACING BASE: 8pt grid (4/8/12/16/24/32/48/64/96/128/160px)
MAX WIDTH:    1280px (not 1440)
BORDER BASE:  1px solid #1E2D40
RADIUS BASE:  10px (cards), 16px (large), 6px (badges)

MOTION EASING: cubic-bezier(0.16, 1, 0.3, 1)  (ease-out-expo, Linear-style)
REDUCED MOTION: prefers-reduced-motion: reduce → disable ALL animations
```

---

## SECTION 13 — AUTH SYSTEM (COMPLETE — DO NOT REBUILD)

The `/auth` service is **production-complete**. Do not regenerate or replace it.

```
✅ Registration + Login (email/password, Argon2 hashing)
✅ JWT access + refresh token rotation
✅ Google OAuth social login
✅ TOTP-based MFA
✅ Aadhaar + PAN KYC verification adapters
✅ Subscription billing with webhook payment processing
✅ AES-256 encryption, token blacklisting, circuit breaker
✅ PostgreSQL schema (5 migrations complete)
✅ Redis session cache
✅ Test suite: billing, webhooks, integration tests
```

---

## SECTION 14 — AGENT INSTRUCTIONS

When you (the AI agent) receive a task related to this project:

### Before writing any code:
1. Read this file (`AGENT_CONTEXT.md`) completely
2. Check `DESIGN.md` for all visual tokens if the task involves UI
3. Identify which section of the codebase the task touches (use Section 3 tree)
4. Check Section 11 constraints — never violate them
5. Check Section 7 for what is unbuilt vs what is complete

### When building the landing page:
1. Read `DESIGN.md` fully — every token, every component, every rule
2. Read `alpha_suite_landing_page_prompt.md` for section copy and layout spec
3. Use ONLY the fonts, colors, spacing, and radius values defined in `DESIGN.md`
4. Follow the 13-section structure in Section 7.1 of this file
5. Hero mockup = SVG animated candlesticks — build it, don't link to an external chart
6. All numbers in data context use `font-family: "JetBrains Mono"` — no exceptions
7. Green (#00E676) = bull signals only. Red (#FF3D57) = bear signals only.
8. `prefers-reduced-motion` override is mandatory — include it

### When writing Rust (agents, Tauri):
1. Respect the port map in Section 9 — never change ports
2. Respect the Kafka topic names in Section 10 — exact strings required
3. For indicator wiring (Section 7.2) — add to `from_candles_basic()` in `mod.rs`
4. Ghost Line constraint (Section 11, item 1) is non-negotiable

### When writing TypeScript (frontend hooks, components):
1. Chart updates MUST go through `chart.setData()` / `chart.update()` directly
2. Never pipe OHLC candles through React state for rendering purposes
3. Cache keys are `'SYMBOL::kiteInterval'` — use this exact format
4. Zustand store shape is defined in Section 8 — extend, never replace

### Output format expectations:
- Code: production-ready, no placeholder comments like `// TODO implement this`
- Files: complete, not partial snippets (unless explicitly a patch)
- CSS: use CSS custom properties from DESIGN.md — no magic hex values
- Copy: use the voice guidelines in Section 15 below

---

## SECTION 15 — COPY & VOICE GUIDELINES

```
VOICE:    Authoritative. Precise. Earned confidence. Engineer-built.
AUDIENCE: Serious Indian F&O traders who know RSI, VWAP, ORB.

DO:
  ✓ Use real technical terminology (RSI, VWAP, OLS, Protobuf, ORB Breakout)
  ✓ Use specific numbers: "Sub-50ms", "16 indicators", "50 F&O symbols"
  ✓ Say "your conviction" "your edge" "your setup" — trader POV
  ✓ Format all data values in monospace font (JetBrains Mono)
  ✓ Use ₹ for Indian currency

DON'T:
  ✗ "AI-powered" without specifics (say "DeepSeek LLM" or "OLS regression")
  ✗ "10x your returns" — unsubstantiated, hype
  ✗ "The future of trading" — cliché
  ✗ Exclamation marks in professional copy
  ✗ Emoji in any heading or professional UI text
  ✗ Crypto/blockchain references (this is equity/F&O)
```

---

## SECTION 16 — INFRASTRUCTURE (DOCKER COMPOSE)

All infra services are orchestrated via `docker-compose.yml` at monorepo root.

```yaml
Services:
  questdb:
    image: questdb/questdb:latest
    ports: ["9000:9000", "9009:9009", "8812:8812"]
    volumes: [questdb_data:/var/lib/questdb]

  redpanda:
    image: redpandadata/redpanda:latest
    ports: ["19092:19092", "29092:29092"]
    command: redpanda start --kafka-addr PLAINTEXT://0.0.0.0:29092,OUTSIDE://0.0.0.0:19092

  postgres:
    image: postgres:15
    ports: ["5890:5432"]
    environment: POSTGRES_DB=auth_db

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]
```

**Development startup order:**
```
1. docker-compose up (starts QuestDB, Redpanda, PostgreSQL, Redis)
2. cargo run --bin ingestion        (start tick ingestion)
3. cargo run --bin alpha-terminal   (start OHLC engine)
4. cargo run --bin predictive       (start ghost line agent)
5. cargo run --bin quant-rag        (start DeepSeek agent)
6. cargo run --bin technical        (start technical agent)
7. node agents/sentiment/index.js   (start sentiment agent)
8. cargo run --bin aggregator       (start decision engine)
9. cd frontend && npm run tauri dev (start desktop app)
```

**Test mode:** Set `ALPHA_TEST_MODE=true` to bypass all live APIs.
Emits deterministic mock data at 100 candles/sec via `/tools/load_tester/`.

---

*AGENT_CONTEXT.md — Strat v1.0*
*This file is the authoritative entry point for all AI agents and developers.*
*When in doubt about any decision, this file + DESIGN.md have the answer.*
*Do not begin building without reading Sections 1, 7, 11, and 14 at minimum.*
