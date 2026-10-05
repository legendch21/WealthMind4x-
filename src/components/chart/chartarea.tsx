import type { OHLC } from '@/types';
import {
  LoadingState,
  ErrorState,
  EmptyState,
} from '@/components/ui/StateViews';

interface ChartAreaProps {
  symbol: string | null;
  candles: OHLC[];
  loading: boolean;
  error: Error | null;
  hasProvider: boolean;
}

export function ChartArea({ symbol, candles, loading, error, hasProvider }: ChartAreaProps) {
  if (!hasProvider) {
    return (
      <div className="wm-chart wm-chart-empty">
        <div className="wm-chart-msg">
          <div className="wm-chart-title">Chart unavailable</div>
          <div className="wm-chart-sub">Connect a market data provider to view live charts.</div>
        </div>
      </div>
    );
  }
  if (!symbol) {
    return (
      <div className="wm-chart wm-chart-empty">
        <EmptyState title="Select a market" message="Choose a symbol from the market selector." />
      </div>
    );
  }
  if (loading) {
    return (
      <div className="wm-chart wm-chart-empty">
        <LoadingState message={`Loading candles for ${symbol}…`} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="wm-chart wm-chart-empty">
        <ErrorState title="Failed to load candles" message={error.message} />
      </div>
    );
  }
  if (candles.length === 0) {
    return (
      <div className="wm-chart wm-chart-empty">
        <EmptyState title="No candles returned" message="The provider returned an empty series." />
      </div>
    );
  }

  return (
    <div className="wm-chart">
      <div className="wm-chart-meta">
        <span>{symbol}</span>
        <span>·</span>
        <span>{candles.length} candles</span>
      </div>
      <div className="wm-chart-hint">
        Chart rendering layer ready — plug in your preferred charting library (e.g., lightweight-charts) here.
      </div>

      <style>{`
        .wm-chart {
          position: relative;
          height: 380px;
          background: var(--bg-0);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .wm-chart-empty { justify-content: center; }
        .wm-chart-msg { text-align: center; }
        .wm-chart-title { font-size: 13px; font-weight: 600; color: var(--text-0); }
        .wm-chart-sub { font-size: 12px; color: var(--text-2); margin-top: 4px; }
        .wm-chart-meta {
          position: absolute;
          top: 10px;
          left: 12px;
          font-size: 11px;
          color: var(--text-2);
          font-family: var(--font-mono);
          display: flex;
          gap: 6px;
        }
        .wm-chart-hint {
          font-size: 12px;
          color: var(--text-2);
          max-width: 460px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}