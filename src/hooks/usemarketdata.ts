import { useEffect, useMemo, useState } from 'react';
import { providerRegistry } from '@/providers/market';
import type {
  MarketDataStatus,
  MarketTick,
  OHLC,
} from '@/types';

export function useMarketData(symbol: string | null, timeframe = '1h', limit = 200) {
  const provider = providerRegistry.getActive();

  const [status, setStatus] = useState<MarketDataStatus>(() =>
    provider?.getStatus() ?? {
      state: 'unavailable',
      providerId: 'none',
      providerLabel: 'No provider configured',
      message: 'Live market data unavailable',
    }
  );
  const [tick, setTick] = useState<MarketTick | null>(null);
  const [candles, setCandles] = useState<OHLC[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!provider) return;
    const off = provider.onStatus(setStatus);
    const offErr = provider.onError(setError);
    return () => {
      off();
      offErr();
    };
  }, [provider]);

  useEffect(() => {
    if (!provider || !symbol) return;
    const off = provider.subscribeTicks(symbol, setTick);
    return () => off();
  }, [provider, symbol]);

  useEffect(() => {
    if (!provider || !symbol) {
      setCandles([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    provider
      .getCandles(symbol, timeframe, limit)
      .then((data) => {
        if (!cancelled) setCandles(data);
      })
      .catch((e: unknown) => {
        if (!cancelled) setError(e instanceof Error ? e : new Error(String(e)));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [provider, symbol, timeframe, limit]);

  const hasProvider = useMemo(() => provider !== null, [provider]);

  return { status, tick, candles, loading, error, hasProvider, provider };
}