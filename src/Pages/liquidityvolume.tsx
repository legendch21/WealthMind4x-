import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { UnavailableState } from '@/components/ui/StateViews';
import type { LiquidityLevel } from '@/types';

export function LiquidityVolume() {
  const rows: LiquidityLevel[] = [];

  return (
    <div className="wm-page">
      <div className="wm-page-header">
        <div>
          <h1 className="wm-h1">Liquidity & Volume</h1>
          <p className="wm-sub">Order book depth and volume analytics.</p>
        </div>
      </div>
      <Card title="Depth" subtitle="No liquidity feed connected">
        <UnavailableState
          title="Liquidity feed unavailable"
          message="Connect a market data provider to view real order book depth."
        />
        <div style={{ marginTop: 12 }}>
          <Table<LiquidityLevel>
            rows={rows}
            rowKey={(r, i) => `${r.side}-${r.price}-${i}`}
            emptyMessage="No levels"
            columns={[
              { key: 'side', header: 'Side', render: (r) => r.side.toUpperCase() },
              { key: 'price', header: 'Price', align: 'right', render: (r) => r.price.toFixed(5) },
              { key: 'volume', header: 'Volume', align: 'right', render: (r) => r.volume.toLocaleString() },
            ]}
          />
        </div>
      </Card>
      <style>{`
        .wm-page { display: flex; flex-direction: column; gap: 16px; }
        .wm-page-header { display: flex; align-items: center; justify-content: space-between; }
        .wm-h1 { margin: 0; font-size: 18px; font-weight: 700; }
        .wm-sub { margin: 2px 0 0; font-size: 12.5px; color: var(--text-2); }
      `}</style>
    </div>
  );
}