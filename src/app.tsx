import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Dashboard } from '@/pages/Dashboard';
import { LiveMarkets } from '@/pages/LiveMarkets';
import { AISignals } from '@/pages/AISignals';
import { NewsEvents } from '@/pages/NewsEvents';
import { LiquidityVolume } from '@/pages/LiquidityVolume';
import { AIChat } from '@/pages/AIChat';
import { ScreenshotAnalysis } from '@/pages/ScreenshotAnalysis';
import { Settings } from '@/pages/Settings';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/markets" element={<LiveMarkets />} />
          <Route path="/signals" element={<AISignals />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/liquidity" element={<LiquidityVolume />} />
          <Route path="/chat" element={<AIChat />} />
          <Route path="/screenshot" element={<ScreenshotAnalysis />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}