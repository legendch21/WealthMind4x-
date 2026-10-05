import type { AISignal } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/StateViews';

interface AISignalPanelProps {
  signals: AISignal[];
  loading?: boolean;
}

const DIRECTION_TONE: Record<string, 'success' | 'danger' | 'neutral'> = {
  long: 'success',
  short: 'danger',
  neutral: 'neutral',
};

export function AISignalPanel({ signals, loading }: AISignalPanelProps) {
  if (loading) {
    return <EmptyState title="Loading signals…" />;
  }
  if (signals.length === 0) {
    return (
      <EmptyState
        title="No AI signals yet"
        message="Signals will appear here once an AI signal source is connected."
      />
    );
  }
  return (
    <div className="wm-signal-list">
      {signals.map((s) => (
        <div key={s.id} className="wm-signal">
          <div className="wm-signal-head">
            <span className="wm-signal-symbol">{s.symbol}</span>
            <Badge tone={DIRECTION_TONE[s.direction] ?? 'neutral'}>{s.direction}</Badge>
            <Badge tone="accent">{s.confidence}</Badge>
            <span className="wm-signal-tf">{s.timeframe}</span>
          </div>
          <p className="wm-signal-rationale">{s.rationale}</p>
          <div className="wm-signal-foot">
            <span>Source: {s.source}</span>
            <span>{new Date(s.createdAt).toLocaleString()}</span>
          </div>
        </div>
      ))}
      <style>{`
        .wm-signal-list { display: flex; flex-direction: column; gap: 10px; }
        .wm-signal {
          border: 1px solid var(--border);
          background: var(--bg-2);
          border-radius: var(--radius-sm);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .wm-signal-head { display: flex; align-items: center; gap: 8px; }
        .wm-signal-symbol { font-weight: 700; font-size: 13px; }
        .wm-signal-tf { margin-left: auto; font-size: 11px; color: var(--text-2); }
        .wm-signal-rationale { margin: 0; font-size: 12.5px; color: var(--text-1); }
        .wm-signal-foot {
          display: flex;
          justify-content: space-between;
          font-size: 10.5px;
          color: var(--text-2);
        }
      `}</style>
    </div>
  );
}