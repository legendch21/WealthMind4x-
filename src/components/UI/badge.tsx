import type { ReactNode } from 'react';

type Tone = 'neutral' | 'success' | 'warning' | 'danger' | 'accent';

export function Badge({ tone = 'neutral', children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className="wm-badge" data-tone={tone}>
      {children}
      <style>{`
        .wm-badge {
          display: inline-flex;
          align-items: center;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          padding: 3px 7px;
          border-radius: 4px;
          border: 1px solid var(--border-strong);
          color: var(--text-1);
          background: var(--bg-2);
        }
        .wm-badge[data-tone='success'] { color: var(--success); border-color: rgba(34,197,94,0.4); background: rgba(34,197,94,0.08); }
        .wm-badge[data-tone='warning'] { color: var(--warning); border-color: rgba(251,191,36,0.4); background: rgba(251,191,36,0.08); }
        .wm-badge[data-tone='danger']  { color: var(--danger);  border-color: rgba(255,92,122,0.4); background: rgba(255,92,122,0.08); }
        .wm-badge[data-tone='accent']  { color: var(--accent);  border-color: rgba(79,156,255,0.4); background: rgba(79,156,255,0.08); }
      `}</style>
    </span>
  );
}