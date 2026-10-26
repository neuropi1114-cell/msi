// Zero-cost local answer engine for the website chatbot (no LLM / paid API).
// Curated FAQ intents + fuzzy keyword matching + TF-IDF search over site content.
import knowledge from '../../data/chat-knowledge.json';
import { HYDERABAD_CAMPUSES } from '../../data/hyderabadCampuses';

const SITE = 'https://www.myschoolitaly.com';
const CONTACT = 'You can reach our admissions team on +91 70939 04680, on WhatsApp at https://wa.me/917075947070, or by email at info@myschoolitaly.com.';

const STOP = new Set('a an the is are am do does did of to in on for and or at by with from my our your you we i me can could would should will be it this that what which who how when where why there their have has any about please tell know want like need some much many also just get'.split(' '));

const norm = (s) => String(s).toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
const tokens = (s) => norm(s).split(' ').filter((t) => t && !STOP.has(t));
const stem = (t) => t.replace(/(ings?|ies|es|s)$/, '') || t;

function lev(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 3;
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
// fuzzy token match, tolerant to typos
function tokMatch(t, k) {
  if (t === k || stem(t) === stem(k)) return true;
  if (k.length >= 5 && (t.startsWith(k) || k.startsWith(t)) && t.length >= 4) return true;
  const max = k.length >= 8 ? 2 : k.length >= 4 ? 1 : 0;
  return max > 0 && lev(t, k) <= max;
}
function phraseHit(qTokens, qNorm, kw) {
  if (kw.includes(' ')) return qNorm.includes(kw) ? 2 : 0;
  return qTokens.some((t) => tokMatch(t, kw)) ? 1 : 0;
}

const FEE_WORDS = ['fee', 'fees', 'price', 'pricing', 'cost', 'costs', 'charges', 'charge', 'tuition', 'discount', 'discounts', 'payment', 'expensive', 'affordable', 'rupees', 'inr', 'subsidy', 'concession', 'scholarship'];

const centresList = () => HYDERABAD_CAMPUSES.filter(Boolean).map((c) => `- ${c.fullName || c.name}: ${c.address}`).join('\n');

const INTENTS = [
  { id: 'greeting', kw: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste'], exact: true,
    a: () => 'Good day, and thank you for contacting My School ITALY. How may I assist you? You may ask about our programmes, admissions, timings, centres or arranging a call with our admissions team.' },
  { id: 'thanks', kw: ['thanks', 'thank', 'thankyou', 'ok', 'okay', 'great'], exact: true,
    a: () => 'You are most welcome. Please let me know if there is anything else I can assist you with.' },
  { id: 'programmes', kw: ['grade', 'grades', 'class', 'classes', 'programme', 'programmes', 'program', 'programs', 'age', 'ages', 'age group', 'nursery', 'kindergarten', 'toddler', 'playgroup', 'pre nursery', 'lkg', 'ukg', 'k1', 'k2', 'old', 'years old', 'months old', 'eligible', 'eligibility'],
    a: () => 'My School ITALY offers one continuous early-years journey from 45 days onwards:\n- Baby Crèche (from 45 days)\n- Pre-Nursery / Toddler\n- Nursery\n- Kindergarten 1 and Kindergarten 2\n- Daycare, Extended Daycare, Saturday and Holiday Care\n- After-School and Enrichment programmes\nDetails are available at ' + SITE + '/programs/' },
  { id: 'admission', kw: ['admission', 'admissions', 'apply', 'application', 'enrol', 'enroll', 'enrollment', 'enrolment', 'join', 'register', 'registration', 'seat', 'seats', 'documents', 'process', 'procedure', 'intake'],
    a: () => 'Our admission process is simple: book a campus tour, meet our team to discuss your child\'s needs, and complete the enrolment formalities with our admissions office. You may begin at ' + SITE + '/admissions/ or book a visit at ' + SITE + '/book-your-tour/' },
  { id: 'timings', kw: ['timing', 'timings', 'time', 'times', 'hours', 'open', 'opening', 'close', 'closing', 'schedule', 'saturday', 'weekend', 'working days', 'drop off', 'pick up', 'pickup'],
    a: () => 'Our centres are typically open Monday to Friday, 8:00 AM to 7:30 PM, and Saturday, 8:30 AM to 2:00 PM. Extended daycare, Saturday and holiday care are available at selected centres; timings may vary slightly by centre.' },
  { id: 'tour', kw: ['tour', 'visit', 'visiting', 'see the school', 'campus visit', 'walk in', 'appointment', 'demo'],
    a: () => 'We would be delighted to welcome you. You may book a campus tour at ' + SITE + '/book-your-tour/ or I can arrange a call with our admissions team to schedule your visit.' },
  { id: 'location', kw: ['location', 'locations', 'located', 'where', 'address', 'centre', 'centres', 'center', 'centers', 'branch', 'branches', 'campus', 'campuses', 'near', 'nearby', 'nearest', 'directions', 'map', 'hyderabad'],
    a: (q) => {
      const qn = norm(q);
      const cs = HYDERABAD_CAMPUSES.filter(Boolean);
      const has = (n) => n && qn.includes(norm(n).replace(/ campus$/, ''));
      const hit = cs.find((c) => has(c.name) || has(c.id)) || cs.find((c) => (c.nearby || []).some(has));
      if (hit) return `${hit.fullName || hit.name}\nAddress: ${hit.address}\nMore details: ${SITE}${hit.slug}/`;
      return 'Our centres in Hyderabad:\n' + centresList() + '\nPlease let me know your area and I will suggest the nearest centre.';
    } },
  { id: 'daycare', kw: ['daycare', 'day care', 'creche', 'creche', 'infant', 'infants', 'baby', 'babies', 'extended', 'after school', 'afterschool', 'full day', 'working parents', '24 hour', 'holiday care'],
    a: () => 'We offer Baby Crèche from 45 days, full-day Daycare, Extended Daycare with early drop-off and late pick-up, Saturday and Holiday Care, and After-School programmes. Selected centres also offer extended-hours childcare. More information: ' + SITE + '/programs/daycare/' },
  { id: 'curriculum', kw: ['curriculum', 'syllabus', 'method', 'methodology', 'approach', 'neuroscience', 'neuropi', 'teaching', 'learning', 'montessori', 'reggio', 'european', 'italian', 'italy', 'play based', 'activities', 'nep', 'brain', 'emotional', 'development', 'social', 'skills', 'different', 'unique', 'why'],
    a: () => 'My School ITALY follows a neuroscience-informed, European early-years approach, the NeuroPi Way. Learning is play-based and focuses on each child\'s curiosity, emotional wellbeing, communication, independence and social skills, with teachers observing and responding to how every child learns. More: ' + SITE + '/neuropiway/' },
  { id: 'safety', kw: ['safety', 'safe', 'secure', 'security', 'cctv', 'camera', 'hygiene', 'medical', 'doctor', 'nurse', 'first aid', 'ratio', 'teacher ratio', 'caregiver', 'staff'],
    a: () => 'Safety and emotional wellbeing are our highest priority. Our centres follow strict safety protocols, including CCTV monitoring, controlled access, high hygiene standards and attentive caregiver supervision. More: ' + SITE + '/why-msi/safety-emotional-wellbeing/' },
  { id: 'meals', kw: ['meal', 'meals', 'food', 'lunch', 'snack', 'snacks', 'breakfast', 'nutrition', 'diet', 'menu', 'tiffin', 'lunchbox', 'allergy', 'allergies'],
    a: () => 'We place great importance on nutrition, with balanced, age-appropriate meals and snacks. Specific meal arrangements may vary by programme and centre, and our team can share the details. More: ' + SITE + '/why-msi/nutrition-food/' },
  { id: 'transport', kw: ['transport', 'transportation', 'bus', 'van', 'pickup service', 'cab', 'school bus'],
    a: () => 'Transport arrangements depend on the centre. Our admissions team will be happy to confirm the options available near you. ' + CONTACT },
  { id: 'contact', kw: ['contact', 'phone', 'call', 'number', 'email', 'mail', 'whatsapp', 'reach', 'speak', 'talk', 'counsellor', 'counselor', 'counseller', 'consultant', 'person', 'human', 'agent'],
    a: () => CONTACT + ' I can also arrange a call with our admissions team at a time convenient for you.' },
  { id: 'corporate', kw: ['corporate', 'employer', 'company', 'office', 'workplace', 'employee', 'employees', 'tie up', 'partnership'],
    a: () => 'We partner with employers to provide near-workplace corporate childcare, including reserved capacity and priority access for employees. More: ' + SITE + '/corporatechildcare/' },
  { id: 'franchise', kw: ['franchise', 'franchising', 'invest', 'investment', 'partner with you', 'business opportunity'],
    a: () => 'For franchise opportunities, please visit ' + SITE + '/franchise-overview/ or contact us at info@myschoolitaly.com.' },
];

// ---- TF-IDF over site content (sentence-level) ----
const DOCS = knowledge.flatMap((d) => d.text.split('\n').map((s) => s.replace(/&[a-z]+;/g, ' ').trim()).filter((s) => s.length > 40 && s.split(' ').length > 6).map((s) => ({ s, route: d.route, t: tokens(s).map(stem) })));
const DF = new Map();
for (const d of DOCS) for (const t of new Set(d.t)) DF.set(t, (DF.get(t) || 0) + 1);
const idf = (t) => Math.log((DOCS.length + 1) / ((DF.get(t) || 0) + 1));

function search(q) {
  const qt = [...new Set(tokens(q).map(stem))];
  if (!qt.length) return [];
  return DOCS.map((d) => {
    let score = 0;
    for (const t of qt) if (d.t.includes(t)) score += idf(t);
    return { ...d, score: score / Math.sqrt(d.t.length + 5) };
  }).filter((d) => d.score > 0.6).sort((a, b) => b.score - a.score).slice(0, 2);
}

function ageAnswer(q) {
  const m = String(q).toLowerCase().match(/(\d+(?:\.\d+)?)\s*(?:-|\s)?\s*(years?|yrs?|yr|months?|mons?|mths?|days?)\b/);
  if (!m) return null;
  const n = parseFloat(m[1]); const u = m[2][0];
  const months = u === 'd' ? n / 30 : u === 'm' ? n : n * 12;
  if (months < 1.5) return 'Our Baby Crèche welcomes babies from 45 days of age. Our admissions team can advise on the right start date for your baby. Details: ' + SITE + '/programs/';
  let p;
  if (months < 18) p = 'Baby Crèche';
  else if (months < 30) p = 'Pre-Nursery / Toddler (Playgroup)';
  else if (months < 42) p = 'Nursery';
  else if (months < 54) p = 'Kindergarten 1 (Junior KG)';
  else if (months < 72) p = 'Kindergarten 2 (Senior KG)';
  else return 'Our early-years programmes run up to Kindergarten 2, and we also offer After-School and Enrichment programmes for older children. Our admissions team will be glad to advise. Details: ' + SITE + '/programs/';
  return `For a child of that age, our ${p} programme is usually the best fit. Full Daycare and Extended Care can be added if you need longer hours. Final placement is confirmed by our admissions team after understanding your child. Details: ${SITE}/programs/`;
}

export function localAnswer(question) {
  const q = String(question || '').slice(0, 500);
  const qn = norm(q);
  const qt = tokens(q);
  const all = qn.split(' ');

  if (all.some((t) => FEE_WORDS.some((f) => tokMatch(t, f) && f.length >= 4 || t === f)))
    return 'Thank you for your interest. Our admissions team will be happy to assist you with that and share the details relevant to your child and preferred centre. I can arrange a call with them at a time convenient for you.';

  const age = ageAnswer(q);
  if (age) {
    const wantsTime = /timing|time|hour|open|close|schedule/i.test(q);
    return age + (wantsTime ? '\n\n' + INTENTS.find((i) => i.id === 'timings').a() : '');
  }

  let best = null;
  for (const it of INTENTS) {
    let score = 0;
    for (const k of it.kw) score += it.exact ? (all.includes(k) || qn === k ? 1 : 0) : phraseHit(qt, qn, k);
    if (it.exact && qt.length > 3) score = 0; // greetings/thanks only for short messages
    if (score > 0 && (!best || score > best.score)) best = { it, score };
  }
  if (best) return best.it.a(q);

  const hits = search(q);
  if (hits.length) return hits.map((h) => h.s).join('\n\n') + `\n\nMore information: ${SITE}${hits[0].route.includes('[') ? '/' : hits[0].route}`;

  return 'Thank you for your question. I do not have that specific information at the moment, but our admissions team will be glad to help. ' + CONTACT;
}
