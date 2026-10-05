import { useProviderStatus } from '@/hooks/useProviderStatus';

interface TopBarProps {
  onMenuClick: () => void;
}

const STATE_LABEL: Record<string, string> = {
  connected: 'Connected',
  connecting: 'Connecting…',
  disconnected: 'Disconnected',
  error: 'Error',
  unavailable: 'Unavailable',
};

export function TopBar({ onMenuClick }: TopBarProps) {
  const status = useProviderStatus();

  return (
    <header className="wm-topbar">
      <button className="wm-menu-btn" onClick={onMenuClick} aria-label="Toggle menu">
        ☰
      </button>

      <div className="wm-topbar-title">
        <span className="wm-dot" data-state={status.state} />
        <span className="wm-status-label">
          {status.providerLabel} · {STATE_LABEL[status.state] ?? status.state}
        </span>
      </div>

      <div className="wm-topbar-right">
        <span className="wm-clock">{new Date().toLocaleTimeString()}</span>
      </div>

      <style>{`
        .wm-topbar {
          height: 52px;
          background: var(--bg-1);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 12px;
          flex-shrink: 0;
        }
        .wm-menu-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-0);
          border-radius: var(--radius-sm);
          width: 34px;
          height: 34px;
          cursor: pointer;
          font-size: 15px;
        }
        .wm-topbar-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: var(--text-1);
        }
        .wm-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--text-2);
        }
        .wm-dot[data-state='connected'] { background: var(--success); box-shadow: 0 0 8px var(--success); }
        .wm-dot[data-state='connecting'] { background: var(--warning); }
        .wm-dot[data-state='error'] { background: var(--danger); }
        .wm-dot[data-state='unavailable'] { background: var(--text-2); }
        .wm-topbar-right {
          margin-left: auto;
          color: var(--text-2);
          font-size: 12px;
          font-family: var(--font-mono);
        }
        @media (max-width: 900px) {
          .wm-menu-btn { display: inline-flex; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}