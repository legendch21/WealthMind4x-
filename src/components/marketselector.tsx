import { useEffect, useState } from 'react';
import { providerRegistry } from '@/providers/market';
import type { MarketSymbol } from '@/types';

interface MarketSelectorProps {
  value: string | null;
  onChange: (symbol: string) => void;
}

export function MarketSelector({ value, onChange }: MarketSelectorProps) {
  const [symbols, setSymbols] = useState<MarketSymbol[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const provider = providerRegistry.getActive();
    if (!provider) {
      setSymbols([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    provider
      .listSymbols()
      .then((list) => {
        if (cancelled) return;
        setSymbols(list);
        if (list.length > 0 && !value) onChange(list[0].symbol);
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : String(e));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <span className="wm-market-selector-disabled">Loading symbols…</span>;
  }

  if (error) {
    return <span className="wm-market-selector-disabled">Symbol list failed</span>;
  }

  if (symbols.length === 0) {
    return (
      <span className="wm-market-selector-disabled" title="Live market data unavailable">
        No symbols available
      </span>
    );
  }

  return (
    <select
      className="wm-market-selector"
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Select market…
      </option>
      {symbols.map((s) => (
        <option key={s.symbol} value={s.symbol}>
          {s.symbol} — {s.name}
        </option>
      ))}

      <style>{`
        .wm-market-selector {
          background: var(--bg-2);
          color: var(--text-0);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          padding: 7px 10px;
          font-size: 12.5px;
          min-width: 200px;
          outline: none;
        }
        .wm-market-selector:focus { border-color: var(--accent); }
        .wm-market-selector-disabled {
          font-size: 12px;
          color: var(--text-2);
          border: 1px dashed var(--border-strong);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
        }
      `}</style>
    </select>
  );
}