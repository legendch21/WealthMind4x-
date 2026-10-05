export type ProviderId = 'mt5' | 'tradingview' | 'crypto' | 'none';

export interface AppEnv {
  apiBaseUrl: string | undefined;
  marketProvider: ProviderId;
  mt5PublicEndpoint: string | undefined;
  tradingViewPublicEndpoint: string | undefined;
  cryptoPublicEndpoint: string | undefined;
}

export const env: AppEnv = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  marketProvider: (import.meta.env.VITE_MARKET_PROVIDER as ProviderId) ?? 'none',
  mt5PublicEndpoint: import.meta.env.VITE_MT5_PUBLIC_ENDPOINT,
  tradingViewPublicEndpoint: import.meta.env.VITE_TRADINGVIEW_PUBLIC_ENDPOINT,
  cryptoPublicEndpoint: import.meta.env.VITE_CRYPTO_PUBLIC_ENDPOINT,
};