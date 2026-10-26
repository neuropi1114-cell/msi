import { validateRequest } from '../../../components/chat/callRequest';

export const runtime = 'nodejs';

// Server-only default (never imported by client code); env var overrides it.
const SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbySaOr1_fa1AlK5NzDLOUdnXLo9km0v6NwSSjJoijoSEVjHpsEqvmNBjL_cem48qnFPdQ/exec';

const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const r = (hits.get(ip) || []).filter((t) => now - t < 10 * 60_000);
  r.push(now); hits.set(ip, r);
  if (hits.size > 5000) hits.clear();
  return r.length > 5;
}

export async function POST(req) {
  const ip = (req.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
  if (limited(ip)) return Response.json({ ok: false, error: 'Too many requests' }, { status: 429 });
  let body;
  try { body = await req.json(); } catch { return Response.json({ ok: false, error: 'Bad request' }, { status: 400 }); }
  const { data, error } = validateRequest(body);
  if (error) return Response.json({ ok: false, error }, { status: 400 });

  const record = { ...data, name: String(body.name || '').slice(0, 80), page: String(body.page || '').slice(0, 200), submittedAt: new Date().toISOString() };
  const text = `New call request (website chatbot)\nPhone: ${record.phone}\nGrade: ${record.grade}\nPreferred date: ${record.date}\nPreferred time: ${record.time}\nPage: ${record.page}\nSubmitted: ${record.submittedAt}`;
  const tasks = [];

  if (SHEETS_URL) {
    // Apps Script web apps answer POST with a 302 to script.googleusercontent.com; follow it and check the JSON result.
    tasks.push(fetch(SHEETS_URL, {
      method: 'POST', redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ ...record, secret: process.env.GOOGLE_SHEETS_SECRET || '' }),
      signal: AbortSignal.timeout(15000),
    }).then(async (r) => {
      const j = await r.json().catch(() => null);
      if (!r.ok || !j?.ok) throw new Error('sheets ' + r.status + ' ' + (j?.error || 'bad response'));
    }));
  }
  if (process.env.ADMISSIONS_WEBHOOK_URL) {
    // JSON body works with Slack/Google Chat/Discord ("text"/"content") and generic webhooks (Zapier, Make, Apps Script).
    tasks.push(fetch(process.env.ADMISSIONS_WEBHOOK_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, content: text, ...record }),
    }).then((r) => { if (!r.ok) throw new Error('webhook ' + r.status); }));
  }
  if (process.env.RESEND_API_KEY && process.env.ADMISSIONS_EMAIL) {
    tasks.push(fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'My School ITALY Website <onboarding@resend.dev>',
        to: process.env.ADMISSIONS_EMAIL.split(',').map((s) => s.trim()),
        subject: `Call request: ${record.grade} – ${record.date} ${record.time}`,
        text,
      }),
    }).then((r) => { if (!r.ok) throw new Error('resend ' + r.status); }));
  }

  console.log('[call-request]', JSON.stringify(record));
  if (!tasks.length) {
    console.warn('[call-request] No GOOGLE_SHEETS_WEBHOOK_URL, ADMISSIONS_WEBHOOK_URL or RESEND_API_KEY+ADMISSIONS_EMAIL configured; request only logged.');
    return Response.json({ ok: true, delivered: false });
  }
  const results = await Promise.allSettled(tasks);
  const delivered = results.some((r) => r.status === 'fulfilled');
  results.filter((r) => r.status === 'rejected').forEach((r) => console.error('[call-request] notify failed', r.reason));
  if (!delivered) return Response.json({ ok: false, error: 'Could not submit right now' }, { status: 502 });
  return Response.json({ ok: true, delivered: true });
}
