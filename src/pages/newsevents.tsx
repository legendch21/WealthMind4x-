import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import type { NewsItem } from '@/types';

export function NewsEvents() {
  const items: NewsItem[] = [];

  return (
    <div className="wm-page">
      <div className="wm-page-header">
        <div>
          <h1 className="wm-h1">News & Events</h1>
          <p className="wm-sub">Market-moving headlines and economic events.</p>
        </div>
      </div>
      <Card title="Feed" subtitle="No news source connected yet">
        <Table<NewsItem>
          rows={items}
          rowKey={(r) => r.id}
          emptyMessage="No news source connected."
          columns={[
            { key: 'time', header: 'Time', render: (r) => new Date(r.publishedAt).toLocaleString() },
            { key: 'title', header: 'Title', render: (r) => r.title },
            { key: 'source', header: 'Source', render: (r) => r.source },
            { key: 'impact', header: 'Impact', render: (r) => r.impact ?? '—' },
          ]}
        />
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