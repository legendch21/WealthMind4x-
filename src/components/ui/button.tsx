import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = 'ghost', children, ...rest }: ButtonProps) {
  return (
    <button className={`wm-btn wm-btn-${variant}`} {...rest}>
      {children}
      <style>{`
        .wm-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          font-size: 12.5px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong);
          background: var(--bg-2);
          color: var(--text-0);
          cursor: pointer;
          transition: background 0.12s ease, border-color 0.12s ease, opacity 0.12s ease;
        }
        .wm-btn:hover:not(:disabled) { background: var(--bg-3); border-color: var(--accent); }
        .wm-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .wm-btn-primary {
          background: var(--accent);
          border-color: var(--accent);
          color: #05101f;
          font-weight: 600;
        }
        .wm-btn-primary:hover:not(:disabled) { filter: brightness(1.08); background: var(--accent); }
        .wm-btn-danger { border-color: var(--danger); color: var(--danger); }
        .wm-btn-danger:hover:not(:disabled) { background: rgba(255, 92, 122, 0.1); border-color: var(--danger); }
      `}</style>
    </button>
  );
}