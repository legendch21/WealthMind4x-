import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="app-main">
        <TopBar onMenuClick={() => setMobileOpen((v) => !v)} />
        <main className="app-content">
          <Outlet />
        </main>
      </div>

      <style>{`
        .app-shell {
          display: flex;
          height: 100vh;
          width: 100%;
          background: var(--bg-0);
          overflow: hidden;
        }
        .app-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .app-content {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }
        @media (max-width: 900px) {
          .app-content { padding: 14px; }
        }
      `}</style>
    </div>
  );
}