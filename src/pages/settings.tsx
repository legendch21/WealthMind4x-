import { Card } from '@/components/ui/Card';
import { env } from '@/config/env';
import { providerRegistry } from '@/providers/market';
import { useProviderStatus } from '@/hooks/useProviderStatus';

export function Settings() {
  const status = useProviderStatus();
  const registered = providerRegistry.list();

  return (
    <div className="wm-page">
      <div className="wm-page-header">
        <div>
          <h1 className="wm-h1">Settings</h1>
          <p className="wm-sub">Configure providers and integrations.</p>
        </div>
      </div>

      <Card title="Market Data Provider" subtitle="Configured via environment variables">
        <dl className="wm-kv">
          <dt>Selected provider</dt>
          <dd><code>{env.marketProvider}</code></dd>
          <dt>Status</dt>
          <dd>{status.state}</dd>
          <dt>Registered providers</dt>
          <dd>{registered.length === 0 ? 'None' : registered.map((p) => p.label).join(', ')}</dd>
          <dt>API base URL</dt>
          <dd><code>{env.apiBaseUrl ?? '— not set —'}</code></dd>
        </dl>
      </Card>

      <Card title="Security" subtitle="Secrets are never exposed to the frontend">
        <p className="wm-note">
          Do not place broker passwords, API secrets, exchange keys, or private keys in frontend
          environment variables. All privileged calls must be proxied through a backend service
          that owns those credentials.
        </p>
      </Card>

      <style>{`
        .wm-page { display: flex; flex-direction: column; gap: 16px; }
        .wm-page-header { display: flex; align-items: center; justify-content: space-between; }
        .wm-h1 { margin: 0; font-size: 18px; font-weight: 700; }
        .wm-sub { margin: 2px 0 0; font-size: 12.5px; color: var(--text-2); }
        .wm-kv {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 8px 16px;
          margin: 0;
          font-size: 12.5px;
        }
        .wm-kv dt { color: var(--text-2); }
        .wm-kv dd { margin: 0; color: var(--text-0); }
        .wm-kv code {
          background: var(--bg-2);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 11.5px;
        }
        .wm-note {
          font-size: 12.5px;
          color: var(--text-1);
          margin: 0;
          max-width: 640px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}