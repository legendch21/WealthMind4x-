import type { ReactNode } from 'react';

interface BaseStateProps {
  title?: string;
  message?: string;
  action?: ReactNode;
}

export function LoadingState({ message = 'Loading…' }: { message?: string }) {
  return (
    <div className="wm-state">
      <div className="wm-spinner" />
      <div className="wm-state-msg">{message}</div>
      <style>{`
        .wm-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 32px 16px;
          color: var(--text-1);
          text-align: center;
        }
        .wm-spinner {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid var(--border-strong);
          border-top-color: var(--accent);
          animation: wm-spin 0.8s linear infinite;
        }
        @keyframes wm-spin { to { transform: rotate(360deg); } }
        .wm-state-msg { font-size: 12.5px; }
      `}</style>
    </div>
  );
}

export function EmptyState({ title, message, action }: BaseStateProps) {
  return (
    <div className="wm-state">
      <div className="wm-state-title">{title ?? 'Nothing here yet'}</div>
      {message && <div className="wm-state-msg">{message}</div>}
      {action}
      <style>{`
        .wm-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 32px 16px;
          color: var(--text-1);
          text-align: center;
        }
        .wm-state-title { font-size: 13px; font-weight: 600; color: var(--text-0); }
        .wm-state-msg { font-size: 12.5px; color: var(--text-2); max-width: 360px; }
      `}</style>
    </div>
  );
}

export function ErrorState({ title = 'Something went wrong', message }: BaseStateProps) {
  return (
    <div className="wm-state">
      <div className="wm-state-title wm-err">{title}</div>
      {message && <div className="wm-state-msg">{message}</div>}
      <style>{`
        .wm-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 32px 16px;
          color: var(--text-1);
          text-align: center;
        }
        .wm-state-title { font-size: 13px; font-weight: 600; color: var(--text-0); }
        .wm-err { color: var(--danger); }
        .wm-state-msg { font-size: 12.5px; color: var(--text-2); max-width: 360px; }
      `}</style>
    </div>
  );
}

export function UnavailableState({
  title = 'Live market data unavailable',
  message = 'No market data provider is currently connected. Configure a provider in Settings to stream real quotes.',
  action,
}: BaseStateProps) {
  return (
    <div className="wm-state wm-unavail">
      <div className="wm-unavail-icon">⚠</div>
      <div className="wm-state-title">{title}</div>
      <div className="wm-state-msg">{message}</div>
      {action}
      <style>{`
        .wm-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 32px 16px;
          color: var(--text-1);
          text-align: center;
        }
        .wm-unavail {
          border: 1px dashed var(--border-strong);
          border-radius: var(--radius);
          background: repeating-linear-gradient(
            135deg,
            transparent 0 12px,
            rgba(255,255,255,0.012) 12px 24px
          );
        }
        .wm-unavail-icon {
          font-size: 22px;
          color: var(--warning);
          line-height: 1;
        }
        .wm-state-title { font-size: 13px; font-weight: 600; color: var(--text-0); }
        .wm-state-msg { font-size: 12.5px; color: var(--text-2); max-width: 420px; }
      `}</style>
    </div>
  );
}