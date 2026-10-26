'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const MAX_CHARS = 500;
const GREETING = { role: 'assistant', content: 'Ciao! 👋 I can help with our programs, centres, admissions and more. What would you like to know?' };
const SUGGESTIONS = ['What programs do you offer?', 'From what age do you take children?', 'How do I book a tour?'];

function Linkify({ text }) {
  return text.split(/(https?:\/\/[^\s)]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline text-msi-blue break-all">{part}</a>
    ) : (<span key={i}>{part}</span>)
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, open]);

  async function send(content) {
    const q = content.trim().slice(0, MAX_CHARS);
    if (!q || busy) return;
    const history = [...messages, { role: 'user', content: q }];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setBusy(true);
    try {
      const res = await fetch('/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.filter((m) => m !== GREETING) }),
      });
      if (!res.body) throw new Error('no body');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...history, { role: 'assistant', content: acc }]);
      }
      if (!acc) setMessages([...history, { role: 'assistant', content: 'Sorry, I could not answer that. Please reach us on WhatsApp: https://wa.me/917075947070' }]);
    } catch {
      setMessages([...history, { role: 'assistant', content: 'Connection problem. Please try again, or WhatsApp us: https://wa.me/917075947070' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-[9999] font-lato">
      {open && (
        <div className="mb-3 flex flex-col w-[calc(100vw-2rem)] sm:w-[370px] h-[70vh] sm:h-[520px] max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden" role="dialog" aria-label="My School ITALY chat assistant">
          <div className="flex items-center justify-between px-4 py-3 bg-msi-purple text-white">
            <div>
              <p className="font-fredoka text-lg leading-tight !text-white">My School ITALY</p>
              <p className="text-xs !text-white/80">AI assistant · answers may need confirming</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-1 rounded-full hover:bg-white/20"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-msi-cream">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] whitespace-pre-wrap text-sm px-3 py-2 rounded-2xl ${m.role === 'user' ? 'bg-msi-blue text-white rounded-br-sm' : 'bg-white text-gray-800 shadow-sm rounded-bl-sm'}`}>
                  {m.content ? <Linkify text={m.content} /> : <span className="animate-pulse">…</span>}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)} className="text-xs border border-msi-orange text-msi-orange rounded-full px-3 py-1 hover:bg-msi-orange hover:text-white transition">{s}</button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2 p-2 border-t border-gray-100 bg-white">
            <input value={input} onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))} maxLength={MAX_CHARS} placeholder="Ask about programs, centres, admissions…" className="flex-1 text-sm px-3 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-msi-blue" aria-label="Your message" />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send" className="p-2 rounded-full bg-msi-orange text-white disabled:opacity-40"><Send size={18} /></button>
          </form>
        </div>
      )}
      <button onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close chat' : 'Chat with us'} className="flex items-center gap-2 bg-msi-orange text-white rounded-full shadow-lg px-4 py-3 hover:scale-105 transition">
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        <span className="hidden sm:inline font-fredoka">{open ? 'Close' : 'Ask us anything'}</span>
      </button>
    </div>
  );
}
