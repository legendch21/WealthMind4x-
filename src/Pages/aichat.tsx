import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: number;
}

export function AIChat() {
  const [messages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');

  return (
    <div className="wm-page">
      <div className="wm-page-header">
        <div>
          <h1 className="wm-h1">AI Trading Chat</h1>
          <p className="wm-sub">Ask the AI about your positions, strategies, and market context.</p>
        </div>
      </div>

      <Card title="Conversation" subtitle="Chat backend not connected">
        <div className="wm-chat">
          <div className="wm-chat-messages">
            {messages.length === 0 ? (
              <div className="wm-chat-empty">
                No messages yet. Connect your AI backend to enable chat.
              </div>
            ) : (
              messages.map((m) => (
                <div key={m.id} className={`wm-chat-msg wm-chat-${m.role}`}>
                  <span className="wm-chat-role">{m.role}</span>
                  <span>{m.content}</span>
                </div>
              ))
            )}
          </div>
          <div className="wm-chat-input">
            <input
              className="wm-input"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled
            />
            <Button variant="primary" disabled>
              Send
            </Button>
          </div>
        </div>
      </Card>

      <style>{`
        .wm-page { display: flex; flex-direction: column; gap: 16px; }
        .wm-page-header { display: flex; align-items: center; justify-content: space-between; }
        .wm-h1 { margin: 0; font-size: 18px; font-weight: 700; }
        .wm-sub { margin: 2px 0 0; font-size: 12.5px; color: var(--text-2); }
        .wm-chat { display: flex; flex-direction: column; gap: 12px; min-height: 380px; }
        .wm-chat-messages {
          flex: 1;
          background: var(--bg-0);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 14px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-height: 300px;
        }
        .wm-chat-empty { color: var(--text-2); font-size: 12.5px; text-align: center; padding: 40px 0; }
        .wm-chat-msg { display: flex; flex-direction: column; gap: 3px; font-size: 13px; }
        .wm-chat-role { font-size: 10.5px; text-transform: uppercase; color: var(--text-2); letter-spacing: 0.5px; }
        .wm-chat-input { display: flex; gap: 8px; }
        .wm-input {
          flex: 1;
          background: var(--bg-2);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          color: var(--text-0);
          font-size: 13px;
          outline: none;
        }
        .wm-input:focus { border-color: var(--accent); }
      `}</style>
    </div>
  );
}