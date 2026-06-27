---
title: "API Reference"
description: "Complete REST and WebSocket API documentation with code examples."
section: "Integration Resources"
order: 1
badge: "Integrate"
badgeVariant: "orange"
draft: false
---

## API Reference

Integrate Strat Ai conviction calculations and option chain analytics directly into your quantitative research pipelines.

### REST Endpoints
- `GET /v1/market/conviction/{ticker}`: Fetch the latest consensus conviction percentage.
- `GET /v1/market/options/pain/{ticker}`: Fetch current max pain level and PCR values.

### WebSocket Feeds
Connect to `wss://api.stratai.live/v1/stream` for real-time changes in conviction parameters.
