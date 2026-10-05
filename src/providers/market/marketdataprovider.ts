import type {
  MarketSymbol,
  MarketTick,
  OHLC,
  MarketDataStatus,
} from '@/types';

export type TickHandler = (tick: MarketTick) => void;
export type StatusHandler = (status: MarketDataStatus) => void;
export type ErrorHandler = (error: Error) => void;

/**
 * Contract every market data source must implement.
 * Keep provider-specific logic (WebSocket, REST, MT5 bridge, TradingView
 * authorized widget postMessage, etc.) fully encapsulated here — the UI must
 * only depend on this interface.
 */
export interface MarketDataProvider {
  readonly id: string;
  readonly label: string;

  /** Establish connection. Should resolve once connected or reject on failure. */
  connect(): Promise<void>;

  /** Tear down connection and release resources. */
  disconnect(): Promise<void>;

  /** Current connection status. */
  getStatus(): MarketDataStatus;

  /** List of tradable symbols exposed by this provider. */
  listSymbols(): Promise<MarketSymbol[]>;

  /** Historical candles. Returns empty array if unavailable. */
  getCandles(symbol: string, timeframe: string, limit: number): Promise<OHLC[]>;

  /** Subscribe to live ticks for a symbol. Returns unsubscribe fn. */
  subscribeTicks(symbol: string, handler: TickHandler): () => void;

  /** Subscribe to status changes. Returns unsubscribe fn. */
  onStatus(handler: StatusHandler): () => void;

  /** Subscribe to transport errors. Returns unsubscribe fn. */
  onError(handler: ErrorHandler): () => void;
}