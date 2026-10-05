export type NewsImpact = 'low' | 'medium' | 'high';

export interface NewsItem {
  id: string;
  title: string;
  summary?: string;
  source: string;
  url?: string;
  publishedAt: number;
  symbols?: string[];
  impact?: NewsImpact;
  category?: 'economic' | 'earnings' | 'geopolitical' | 'crypto' | 'other';
}