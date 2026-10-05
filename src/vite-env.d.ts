/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_MARKET_PROVIDER?: 'mt5' | 'tradingview' | 'crypto' | 'none';
  readonly VITE_MT5_PUBLIC_ENDPOINT?: string;
  readonly VITE_TRADINGVIEW_PUBLIC_ENDPOINT?: string;
  readonly VITE_CRYPTO_PUBLIC_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}