export interface MarketSymbol {
  symbol: string;
  name: string;
  assetClass: 'forex' | 'crypto' | 'indices' | 'commodities' | 'stocks' | 'unknown';
  base?: string;
  quote?: string;
  exchange?: string;
}

export interface MarketTick {
  symbol: string;
  bid: number;
  ask: number;
  last?: number;
  volume?: number;
  timestamp: number;
}

export interface OHLC {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export type ConnectionState =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'error'
  | 'unavailable';

export interface MarketDataStatus {
  state: ConnectionState;
  providerId: string;
  providerLabel: string;
  lastUpdate?: number;
  message?: string;
}