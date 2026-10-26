'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { GRADES, TIME_SLOTS, normalizePhone, todayISO, validateDate } from './callRequest';

const MAX_CHARS = 500;
const WELCOME_SHORT = 'Welcome to My School ITALY. How may we assist you?';
const WELCOME = 'Welcome to My School ITALY.\n\nI can assist you with information about our school, admissions, available programmes, and scheduling a call with our admissions team.\n\nHow may we assist you today?';
const SUGGESTIONS = ['What grades are available?', 'How can I apply for admission?', 'Where are your centres located?', 'Can I speak with an admissions counsellor?'];
const ASK_CALL = 'Would you like us to arrange a call with our admissions team?';
const NO_THANKS = "Certainly. Please feel free to ask any questions about My School ITALY.";

function Linkify({ text }) {
  return text.split(/(https?:\/\/[^\s)]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline text-msi-blue break-all">{part}</a>
    ) : (<span key={i}>{part}</span>)
  );
}

const Chip = ({ children, onClick, disabled, type = 'button' }) => (
  <button type={type} disabled={disabled} onClick={onClick} className="text-xs text-left border border-msi-orange text-msi-orange bg-white rounded-full px-3 py-1.5 hover:bg-msi-orange hover:text-white transition disabled:opacity-40">{children}</button>
);

export default function ChatWidget() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [teaser, setTeaser] = useState(true);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // {role, content, ui?, chat?}
  const [stage, setStage] = useState('chat'); // chat | askCall | phone | grade | date | time | submitting
  const [lead, setLead] = useState({});
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [date, setDate] = useState('');
  const [gradeSel, setGradeSel] = useState('');
  const endRef = useRef(null);
  const msgsRef = useRef([]);
  msgsRef.current = messages;

  useEffect(() => { const t = setTimeout(() => setVisible(true), 500); return () => clearTimeout(t); }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, open, stage]);

  const push = (...m) => setMessages((prev) => [...prev, ...m]);
  const bot = (content, ui) => ({ role: 'assistant', content, ui });

  function openChat(firstQuestion) {
    setOpen(true);
    setTeaser(false);
    if (msgsRef.current.length === 0) {
      const init = [bot(WELCOME, firstQuestion ? undefined : 'suggestions')];
      setMessages(init);
      msgsRef.current = init;
      if (firstQuestion) setTimeout(() => ask(firstQuestion), 250);
    } else if (firstQuestion) ask(firstQuestion);
  }

  async function ask(q) {
    q = q.trim().slice(0, MAX_CHARS);
    if (!q || busy) return;
    const history = [...msgsRef.current.map((m) => ({ ...m, ui: undefined })), { role: 'user', content: q, chat: true }];
    const apiMsgs = history.filter((m) => m.chat).map(({ role, content }) => ({ role, content }));
    setMessages([...history, { role: 'assistant', content: '', chat: true }]);
    setInput('');
    setBusy(true);
    let acc = '';
    try {
      const res = await fetch('/api/chat/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: apiMsgs }) });
      if (!res.body) throw new Error('no body');
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMessages([...history, { role: 'assistant', content: acc, chat: true }]);
      }
    } catch { /* fall through */ }
    if (!acc) acc = 'I am unable to answer that at the moment. Please reach us on WhatsApp: https://wa.me/917075947070';
    setMessages([...history, { role: 'assistant', content: acc, chat: true }, bot(ASK_CALL, 'askCall')]);
    setStage('askCall');
    setBusy(false);
  }

  function answerCall(yes) {
    push({ role: 'user', content: yes ? 'Yes, arrange a call' : 'No, thank you' });
    if (yes) { setLead({}); setStage('phone'); push(bot('Please enter your phone number.')); }
    else { setStage('chat'); push(bot(NO_THANKS, 'suggestions')); }
  }

  function submitPhone(v) {
    push({ role: 'user', content: v });
    const phone = normalizePhone(v);
    if (!phone) return push(bot('The number entered does not appear to be valid. Please enter a 10-digit Indian mobile number (e.g. 98765 43210) or an international number starting with + and country code.'));
    setLead((l) => ({ ...l, phone }));
    setStage('grade');
    push(bot('Which grade or programme are you interested in?', 'grade'));
  }

  function submitGrade(v) {
    const grade = v.trim().slice(0, 80);
    if (!grade) return;
    push({ role: 'user', content: grade });
    setLead((l) => ({ ...l, grade }));
    setStage('date');
    setDate('');
    push(bot('Please select your preferred date for the call.', 'date'));
  }

  function submitDate() {
    if (!date || date < todayISO() || !validateDate(date)) return push(bot('Please select a date from today onwards, within the next three months.', 'date'));
    push({ role: 'user', content: fmtDate(date) });
    setLead((l) => ({ ...l, date }));
    setStage('time');
    push(bot('Please select your preferred time.', 'time'));
  }

  function availableSlots(d) {
    if (d !== todayISO()) return TIME_SLOTS;
    const now = new Date();
    return TIME_SLOTS.filter((s) => {
      const [hm, ap] = s.split(' '); let [h, m] = hm.split(':').map(Number);
      if (ap === 'PM' && h !== 12) h += 12;
      return h * 60 + m > now.getHours() * 60 + now.getMinutes() + 30;
    });
  }

  async function submitTime(time) {
    if (!availableSlots(lead.date).includes(time)) return push(bot('Please select one of the available time slots.', 'time'));
    push({ role: 'user', content: time });
    const req = { ...lead, time };
    setStage('submitting');
    try {
      const res = await fetch('/api/call-request/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...req, page: window.location.pathname }) });
      const j = await res.json().catch(() => ({}));
      if (!res.ok || !j.ok) throw new Error(j.error || 'failed');
      push(bot(`Thank you. Your call request has been submitted successfully.\n\nYour details:\nPhone number: ${req.phone}\nGrade: ${req.grade}\nPreferred date: ${fmtDate(req.date)}\nPreferred time: ${req.time}\n\nOur admissions team will contact you to confirm your appointment.`));
      setStage('chat');
    } catch {
      push(bot('We were unable to submit your request at this time. Please try another time slot, or reach us on WhatsApp: https://wa.me/917075947070 / call +91 70939 04680.', 'time'));
      setStage('time');
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    const v = input.trim();
    if (!v) return;
    setInput('');
    if (stage === 'phone') return submitPhone(v);
    if (stage === 'grade') return submitGrade(v);
    if (stage === 'chat' || stage === 'askCall') { setStage('chat'); return ask(v); }
  }

  const last = messages.length - 1;
  const placeholder = { phone: 'Enter phone number…', grade: 'Select a grade / programme above' }[stage] || 'Type your question…';
  const inputDisabled = busy || ['grade', 'date', 'time', 'submitting'].includes(stage);

  function renderUi(m, i) {
    if (i !== last || !m.ui) return null;
    if (m.ui === 'suggestions') return <div className="flex flex-wrap gap-2 pt-2">{SUGGESTIONS.map((s) => <Chip key={s} disabled={busy} onClick={() => ask(s)}>{s}</Chip>)}</div>;
    if (m.ui === 'askCall' && stage === 'askCall') return (
      <div className="flex flex-wrap gap-2 pt-2"><Chip onClick={() => answerCall(true)}>Yes, arrange a call</Chip><Chip onClick={() => answerCall(false)}>No, thank you</Chip></div>
    );
    if (m.ui === 'grade' && stage === 'grade') return (
      <form className="flex gap-2 pt-2 items-center w-full max-w-[88%]" onSubmit={(e) => { e.preventDefault(); if (GRADES.includes(gradeSel)) { submitGrade(gradeSel); setGradeSel(''); } }}>
        <select required value={gradeSel} onChange={(e) => setGradeSel(e.target.value)} aria-label="Grade / Programme"
          className="flex-1 min-w-0 text-sm bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-gray-800 focus:outline-none focus:border-msi-blue">
          <option value="" disabled>Select grade / programme</option>
          {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
        <Chip type="submit" disabled={!gradeSel}>Continue</Chip>
      </form>
    );
    if (m.ui === 'date' && stage === 'date') return (
      <div className="flex gap-2 pt-2 items-center">
        <input type="date" min={todayISO()} value={date} onChange={(e) => setDate(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-2 py-1" aria-label="Preferred date" />
        <Chip disabled={!date} onClick={submitDate}>Confirm</Chip>
      </div>
    );
    if (m.ui === 'time' && stage === 'time') {
      const slots = availableSlots(lead.date);
      return slots.length ? <div className="flex flex-wrap gap-2 pt-2">{slots.map((s) => <Chip key={s} onClick={() => submitTime(s)}>{s}</Chip>)}</div>
        : <div className="pt-2 text-xs">No slots left today. <button className="underline text-msi-blue" onClick={() => { setStage('date'); push(bot('Please select your preferred date for the call.', 'date')); }}>Pick another date</button></div>;
    }
    return null;
  }

  if (!visible) return null;

  return (
    <div className={`fixed ${pathname === '/' ? 'bottom-20' : 'bottom-4'} right-4 z-[9999] font-lato flex flex-col items-end`}>
      {open ? (
        <div className="mb-3 flex flex-col w-[calc(100vw-2rem)] sm:w-[370px] h-[70vh] sm:h-[540px] max-h-[620px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden" role="dialog" aria-label="My School ITALY chat assistant">
          <div className="flex items-center justify-between px-4 py-3 bg-msi-purple text-white">
            <div>
              <p className="font-fredoka text-lg leading-tight !text-white">My School ITALY</p>
              <p className="text-xs !text-white/80">Admissions assistant</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-1 rounded-full hover:bg-white/20"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-msi-cream">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[88%] whitespace-pre-wrap text-sm px-3 py-2 rounded-2xl ${m.role === 'user' ? 'bg-msi-blue text-white rounded-br-sm' : 'bg-white text-gray-800 shadow-sm rounded-bl-sm'}`}>
                  {m.content ? <Linkify text={m.content} /> : <span className="animate-pulse">…</span>}
                </div>
                {renderUi(m, i)}
              </div>
            ))}
            {stage === 'submitting' && <p className="text-xs text-gray-500 animate-pulse">Submitting…</p>}
            <div ref={endRef} />
          </div>
          <form onSubmit={onSubmit} className="flex items-center gap-2 p-2 border-t border-gray-100 bg-white">
            <input value={input} onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))} maxLength={MAX_CHARS} disabled={inputDisabled}
              inputMode={stage === 'phone' ? 'tel' : 'text'} placeholder={placeholder}
              className="flex-1 text-sm px-3 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-msi-blue disabled:bg-gray-50" aria-label="Your message" />
            <button type="submit" disabled={inputDisabled || !input.trim()} aria-label="Send" className="p-2 rounded-full bg-msi-orange text-white disabled:opacity-40"><Send size={18} /></button>
          </form>
        </div>
      ) : teaser && (
        <div className="mb-3 max-w-[calc(100vw-2rem)] sm:max-w-[300px] space-y-2">
          <div className="relative bg-white shadow-lg rounded-2xl rounded-br-sm px-4 py-2 text-sm font-semibold text-msi-purple">
            <button onClick={() => openChat()} className="text-left">{WELCOME_SHORT}</button>
            <button onClick={() => setTeaser(false)} aria-label="Dismiss" className="absolute -top-2 -right-2 bg-white shadow rounded-full p-0.5 text-gray-500"><X size={12} /></button>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            {SUGGESTIONS.map((s) => <Chip key={s} onClick={() => openChat(s)}>{s}</Chip>)}
          </div>
        </div>
      )}
      <button onClick={() => (open ? setOpen(false) : openChat())} aria-label={open ? 'Close chat' : 'Chat with us'} className="flex items-center gap-2 bg-msi-orange text-white rounded-full shadow-lg px-4 py-3 hover:scale-105 transition">
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        <span className="hidden sm:inline font-fredoka">{open ? 'Close' : 'Ask us anything'}</span>
      </button>
    </div>
  );
}

function fmtDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}
