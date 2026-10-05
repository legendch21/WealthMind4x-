export type SignalDirection = 'long' | 'short' | 'neutral';
export type SignalConfidence = 'low' | 'medium' | 'high';

export interface AISignal {
  id: string;
  symbol: string;
  direction: SignalDirection;
  confidence: SignalConfidence;
  timeframe: string;
  entry?: number;
  stopLoss?: number;
  takeProfit?: number;
  rationale: string;
  createdAt: number;
  source: string;
}