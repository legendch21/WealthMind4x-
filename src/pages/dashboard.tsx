import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { MarketSelector } from '@/components/ui/MarketSelector';
import { ChartArea } from '@/components/chart/ChartArea';
import { AISignalPanel } from '@/components/signals/AISignalPanel';
import { UnavailableState } from '@/components/ui/StateViews';
import { useMarketData } from '@/hooks/useMarketData';
import { useProviderStatus } from '@/hooks/useProviderStatus';

export function Dashboard() {
  const [symbol, setSymbol] = useState<string | null>(null);
  const status = useProviderStatus();
  const { candles, loading, error, hasProvider } = useMarketData(symbol);

  return (
    <div className="wm-grid">
      <div className="wm-page-header">
        <div>
          <h1 className="wm-h1">Dashboard</h1>
          <p className="wm-sub">Overview of your trading terminal.</p>
        </div>
        <MarketSelector value={symbol} onChange={setSymbol} />
      </div>

      {!hasProvider && (
        <UnavailableState
          title="Live market data unavailable"
          message={`Provider status: ${status.state}. Connect a market data provider to activate live charts and metrics.`}
        />
      )}

      <div className="wm-grid-2">
        <Card title="Chart" subtitle={symbol ?? 'No symbol selected'}>
          <ChartArea
            symbol={symbol}
            candles={candles}
            loading={loading}
            error={error}
            hasProvider={hasProvider}
          />
        </Card>

        <Card title="AI Signals" subtitle="Latest generated signals">
          <AISignalPanel signals={[]} />
        </Card>
      </div>

      <div className="wm-grid-2">
        <Card title="Liquidity Snapshot" subtitle="Bid/ask depth">
          <UnavailableState message="Liquidity feed not connected." />
        </Card>
        <Card title="News & Events" subtitle="High-impact items">
          <UnavailableState message="News feed not connected." />
        </Card>
      </div>

      <style>{`
        .wm-grid { display: flex; flex-direction: column; gap: 16px; }
        .wm-page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .wm-h1 { margin: 0; font-size: 18px; font-weight: 700; }
        .wm-sub { margin: 2px 0 0; font-size: 12.5px; color: var(--text-2); }
        .wm-grid-2 {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 16px;
        }
        @media (max-width: 1100px) {
          .wm-grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}