# WealthMind4x

A modern AI trading terminal built with **React + TypeScript + Vite**.

This repository is a **clean, provider-agnostic foundation**. It contains:

- No fake market prices, candles, or news.
- A `MarketDataProvider` abstraction ready to accept real MT5 / authorized TradingView / crypto feeds.
- Explicit "Live market data unavailable" states everywhere data is expected.
- A responsive dark trading-terminal UI.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev