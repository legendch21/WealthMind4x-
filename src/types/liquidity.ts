export interface LiquidityLevel {
  price: number;
  volume: number;
  side: 'bid' | 'ask';
}

export interface LiquidityData {
  symbol: string;
  timestamp: number;
  bids: LiquidityLevel[];
  asks: LiquidityLevel[];
  spread?: number;
  totalBidVolume?: number;
  totalAskVolume?: number;
}