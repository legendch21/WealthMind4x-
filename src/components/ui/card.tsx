import type { ReactNode } from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
  padded?: boolean;
}

export function Card({ title, subtitle, actions, children, padded = true }: CardProps) {
  return (
    <section className="wm-card">
      {(title || actions) && (
        <header className="wm-card-head">
          <div>
            {title && <h3 className="wm-card-title">{title}</h3>}
            {subtitle && <p className="wm-card-sub">{subtitle}</p>}
          </div>
          {actions && <div className="wm-card-actions">{actions}</div>}
        </header>
      )}
      <div className={padded ? 'wm-card-body' : ''}>{children}</div>

      <style>{`
        .wm-card {
          background: var(--bg-1);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .wm-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-bottom: 1px solid var(--border);
          gap: 10px;
        }
        .wm-card-title {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-0);
        }
        .wm-card-sub {
          margin: 2px 0 0;
          font-size: 11px;
          color: var(--text-2);
        }
        .wm-card-body { padding: 14px; }
      `}</style>
    </section>
  );
}