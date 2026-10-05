export * from './market';
export * from './signals';
export * from './news';
export * from './liquidity';

export interface TradeReview {
  id: string;
  symbol: string;
  openedAt: number;
  closedAt?: number;
  side: 'long' | 'short';
  entry: number;
  exit?: number;
  size: number;
  pnl?: number;
  notes?: string;
  screenshotUrl?: string;
  aiAnalysis?: string;
}