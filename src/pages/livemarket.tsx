import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { MarketSelector } from '@/components/ui/MarketSelector';
import { Table } from '@/components/ui/Table';
import { UnavailableState } from '@/components/ui/StateViews';
import { useMarketData } from '@/hooks/useMarketData';
import { useProviderStatus } from '@/hooks/useProviderStatus';
import type { MarketTick } from '@/types';

export function LiveMarkets() {
  const [symbol, setSymbol] = useState<string | null>(null);
  const status = useProviderStatus();
  const { tick, hasProvider } = useMarketData(symbol);
  const rows: MarketTick[] = tick ? [tick] : [];

  return (
    <div className="wm-page">
      <div className="wm-page-header">
        <div>
          <h1 className="wm-h1">Live Markets</h1>
          <p className="wm-sub">Real-time quotes and market depth.</p>
        </div>
        <MarketSelector value={symbol} onChange={setSymbol} />
      </div>

      <Card title="Quotes" subtitle={`Provider: ${status.providerLabel} · ${status.state}`}>
        {!hasProvider ? (
          <UnavailableState />
        ) : (
          <Table<MarketTick>
            rows={rows}
            rowKey={(r) => `${r.symbol}-${r.timestamp}`}
            emptyMessage="Waiting for live ticks…"
            columns={[
              { key: 'symbol', header: 'Symbol', render: (r) => r.symbol },
              { key: 'bid', header: 'Bid', align: 'right', render: (r) => r.bid.toFixed(5) },
              { key: 'ask', header: 'Ask', align: 'right', render: (r) => r.ask.toFixed(5) },
              {
                key: 'spread',
                header: 'Spread',
                align: 'right',
                render: (r) => (r.ask - r.bid).toFixed(5),
              },
              {
                key: 'time',
                header: 'Time',
                align: 'right',
                render: (r) => new Date(r.timestamp).toLocaleTimeString(),
              },
            ]}
          />
        )}
      </Card>

      <style>{`
        .wm-page { display: flex; flex-direction: column; gap: 16px; }
        .wm-page-header {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; flex-wrap: wrap;
        }
        .wm-h1 { margin: 0; font-size: 18px; font-weight: 700; }
        .wm-sub { margin: 2px 0 0; font-size: 12.5px; color: var(--text-2); }
      `}</style>
    </div>
  );
}