import { streamText, generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createOpenAI } from '@ai-sdk/openai';
import knowledge from '../../../data/chat-knowledge.json';
import { localAnswer } from '../../../components/chat/localEngine';

export const runtime = 'nodejs';
export const maxDuration = 30;

const MAX_MESSAGE_CHARS = 500;
const MAX_HISTORY = 12;
const GEMINI_TIMEOUT_MS = Number(process.env.GEMINI_TIMEOUT_MS) || 10_000;
const RATE_LIMIT = { windowMs: 60_000, max: 10 };
const hits = new Map(); // best-effort per-instance limiter

const CONTACT = `Phone: +91 70939 04680 (tel:+917093904680)
WhatsApp: https://wa.me/917075947070
Email: info@myschoolitaly.com
Book a tour: https://www.myschoolitaly.com/book-your-tour/
Contact page: https://www.myschoolitaly.com/contact/`;

const SYSTEM = `You are the professional admissions assistant on the website of My School ITALY, a neuroscience-informed preschool, crèche and daycare chain in Hyderabad (ages 45 days to about 7 years; programs include Baby Crèche, Pre-Nursery/Toddler, Nursery, Kindergarten 1 & 2, Daycare, Extended Care, After-School and Enrichment; NeuroPi method).
Rules:
- Answer ONLY using the SITE CONTENT below. Keep answers concise (2-4 sentences or a few bullets) in a polished, professional and courteous tone. Never use emoji or slang.
- If something is not in the site content or these rules (e.g. seat availability, transport), say you don't have that detail and suggest contacting the school (phone/WhatsApp/email below) or booking a tour. Never invent dates or policies.
- Age guidance (typical; final placement is confirmed by the admissions team): Baby Crèche from 45 days to about 12-18 months; Pre-Nursery / Toddler / Playgroup about 1.5 to 2.5 years; Nursery about 2.5 to 3.5 years; Kindergarten 1 (Junior KG) about 3.5 to 4.5 years; Kindergarten 2 (Senior KG) about 4.5 to 5.5 years; Daycare, Extended Care and After-School are available alongside. When a parent gives their child's age, recommend the matching programme by name first, mention daycare if useful, and offer to arrange a call or a tour.
- Timings: centres are typically open Monday to Friday, 8:00 AM to 7:30 PM, and Saturday 8:30 AM to 2:00 PM; Early Drop-Off, Late Pick-Up, Extended, Saturday and Holiday Care are available at selected centres, and timings may vary slightly by centre. Answer every part of a multi-part question.
- "Grades" or "classes" means our programs/age groups (list them with ages). 
- Never discuss or even mention fees, pricing, costs, subsidies or discounts unless the parent asks, and even then do not give any figures. Instead, say politely that our admissions team will be happy to assist with that, and offer to arrange a call with them.
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

const GEMINI_KEY = () => process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;

function getGemini() {
  const key = GEMINI_KEY();
  if (!key) return null;
  const name = (process.env.CHAT_MODEL || 'gemini-3.5-flash-lite').replace(/^google\//, '');
  return createGoogleGenerativeAI({ apiKey: key })(name);
}

function getModel() {
  const name = process.env.CHAT_MODEL || 'openai/gpt-4o-mini';
  if (process.env.AI_GATEWAY_API_KEY) return name; // AI Gateway (string model id)
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

  const question = messages.at(-1).content;

  // Free Gemini path (preferred when a key is set). Non-streaming so any error or
  // rate limit (429) is caught and we fall back to the local engine.
  const gemini = getGemini();
  if (gemini) {
    try {
      const { text: answer } = await generateText({
        model: gemini, system: SYSTEM, messages, maxOutputTokens: 400, temperature: 0.3, maxRetries: 0,
        abortSignal: AbortSignal.timeout(GEMINI_TIMEOUT_MS),
      });
      if (answer && answer.trim()) return text(answer.trim());
      console.error('[chat] gemini returned empty answer, using local fallback');
    } catch (e) {
      console.error('[chat] gemini error, using local fallback:', e?.name || '', e?.statusCode || '', String(e?.message || e).slice(0, 300));
    }
    return text(localAnswer(question));
  }

  const model = getModel();
  if (!model) return text(localAnswer(question)); // free local engine (default)

  try {
    const result = streamText({ model, system: SYSTEM, messages, maxOutputTokens: 400, temperature: 0.3 });
    return result.toTextStreamResponse();
  } catch (e) {
    console.error('chat error', e);
    return text(localAnswer(question));
  }
}
