import { useEffect, useState } from 'react';
import { providerRegistry } from '@/providers/market';
import type { MarketDataStatus } from '@/types';

const UNAVAILABLE: MarketDataStatus = {
  state: 'unavailable',
  providerId: 'none',
  providerLabel: 'No provider configured',
  message: 'Live market data unavailable',
};

export function useProviderStatus(): MarketDataStatus {
  const provider = providerRegistry.getActive();
  const [status, setStatus] = useState<MarketDataStatus>(
    provider?.getStatus() ?? UNAVAILABLE
  );

  useEffect(() => {
    if (!provider) {
      setStatus(UNAVAILABLE);
      return;
    }
    const off = provider.onStatus(setStatus);
    setStatus(provider.getStatus());
    return () => off();
  }, [provider]);

  return status;
}