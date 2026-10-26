import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import knowledge from '../../../data/chat-knowledge.json';

export const runtime = 'nodejs';
export const maxDuration = 30;

const MAX_MESSAGE_CHARS = 500;
const MAX_HISTORY = 12;
const RATE_LIMIT = { windowMs: 60_000, max: 10 };
const hits = new Map(); // best-effort per-instance limiter

const CONTACT = `Phone: +91 70939 04680 (tel:+917093904680)
WhatsApp: https://wa.me/917075947070
Email: info@myschoolitaly.com
Book a tour: https://www.myschoolitaly.com/book-your-tour/
Contact page: https://www.myschoolitaly.com/contact/`;

const SYSTEM = `You are the friendly assistant on the website of My School ITALY, a neuroscience-informed preschool, crèche and daycare chain in Hyderabad (ages 45 days to about 7 years; programs include Baby Crèche, Pre-Nursery/Toddler, Nursery, Kindergarten 1 & 2, Daycare, Extended Care, After-School and Enrichment; NeuroPi method).
Rules:
- Answer ONLY using the SITE CONTENT below. Keep answers short (2-4 sentences or a few bullets), warm and parent-friendly.
- If something is not in the site content (e.g. exact fees, seat availability, specific timings, transport), say you don't have that detail and suggest contacting the school (phone/WhatsApp/email below) or booking a tour. Never invent fees, dates or policies.
- Stay on topic (the school, early childhood, admissions, centres). Politely decline unrelated requests.
- Reply in the language the parent writes in.

CONTACT:
${CONTACT}

SITE CONTENT:
${knowledge.map((d) => `## ${d.route}\n${d.text}`).join('\n\n')}`;

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
}

function getModel() {
  const name = process.env.CHAT_MODEL || 'openai/gpt-4o-mini';
  if (process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN) return name; // Vercel AI Gateway
  if (process.env.OPENAI_API_KEY) return createOpenAI({ apiKey: process.env.OPENAI_API_KEY })(name.replace(/^openai\//, ''));
  return null;
}

const text = (body, status = 200) =>
  new Response(body, { status, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

export async function POST(req) {
  const ip = (req.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
  if (limited(ip)) return text('You are sending messages too quickly. Please wait a minute and try again.', 429);

  let body;
  try { body = await req.json(); } catch { return text('Invalid request.', 400); }
  const messages = (Array.isArray(body?.messages) ? body.messages : [])
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));
  if (!messages.length || messages.at(-1).role !== 'user') return text('Please type a question.', 400);

  const model = getModel();
  if (!model) {
    return text(`Our chat assistant isn't available right now. Please reach us on WhatsApp (https://wa.me/917075947070), call +91 70939 04680, or email info@myschoolitaly.com.`, 503);
  }

  try {
    const result = streamText({ model, system: SYSTEM, messages, maxOutputTokens: 400, temperature: 0.3 });
    return result.toTextStreamResponse();
  } catch (e) {
    console.error('chat error', e);
    return text('Sorry, something went wrong. Please contact us on WhatsApp: https://wa.me/917075947070', 500);
  }
}
