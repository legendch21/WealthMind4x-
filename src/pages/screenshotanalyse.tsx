import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ScreenshotAnalysis() {
  return (
    <div className="wm-page">
      <div className="wm-page-header">
        <div>
          <h1 className="wm-h1">Trade Screenshot Analysis</h1>
          <p className="wm-sub">Upload a chart screenshot for AI-powered review.</p>
        </div>
      </div>

      <Card title="Upload" subtitle="Backend analysis not connected">
        <div className="wm-dropzone">
          <div className="wm-dropzone-title">Drop an image here</div>
          <div className="wm-dropzone-sub">
            PNG, JPG up to 10 MB. Analysis endpoint is not configured yet.
          </div>
          <Button disabled>Choose file</Button>
        </div>
      </Card>

      <style>{`
        .wm-page { display: flex; flex-direction: column; gap: 16px; }
        .wm-page-header { display: flex; align-items: center; justify-content: space-between; }
        .wm-h1 { margin: 0; font-size: 18px; font-weight: 700; }
        .wm-sub { margin: 2px 0 0; font-size: 12.5px; color: var(--text-2); }
        .wm-dropzone {
          border: 2px dashed var(--border-strong);
          border-radius: var(--radius);
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }
        .wm-dropzone-title { font-size: 14px; font-weight: 600; }
        .wm-dropzone-sub { font-size: 12px; color: var(--text-2); max-width: 400px; }
      `}</style>
    </div>
  );
}