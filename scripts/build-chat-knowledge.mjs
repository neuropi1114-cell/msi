// Builds src/data/chat-knowledge.json from the site's own pages/data so the
// AI chatbot answers from real site content. Run: node scripts/build-chat-knowledge.mjs
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SOURCES = [
  'src/app/about/page.jsx', 'src/app/admissions/page.jsx', 'src/app/contact/page.jsx',
  'src/app/programs', 'src/app/why-msi', 'src/app/ciao-baby/page.jsx',
  'src/app/baby-sensory/BabySensoryContent.jsx', 'src/app/preschool-daycare-hyderabad/page.jsx',
  'src/app/neuroscience-informed-preschool/page.jsx', 'src/app/corporatechildcare/corporatechildcaredata.js',
  'src/app/hitex/hitexdata.jsx', 'src/app/mindspace/mindspacedata.js', 'src/app/kukatpally/kukatpallydata.js',
  'src/app/kondapur/kondapurdata.js', 'src/app/manikonda/manikondadata.js', 'src/app/kavuri-hills/kavurihillsdata.js',
  'src/app/avance/avancedata.js', 'src/app/qcity/qcitydata.jsx', 'src/app/miyapur/miyapurdata.js',
  'src/app/cyberabad-police-commissionerate/cyberabaddata.js', 'src/data/hyderabadCampuses.js',
  'src/data/programs.js', 'src/app/book-your-tour/page.jsx', 'src/app/handbook/page.jsx',
];
const MAX_PER_FILE = 6000;
const MAX_TOTAL = 90000;

function walk(p) {
  const abs = path.join(root, p);
  if (!fs.existsSync(abs)) return [];
  if (fs.statSync(abs).isDirectory())
    return fs.readdirSync(abs).flatMap((f) => walk(path.join(p, f)));
  return /\.(jsx?|json)$/.test(p) ? [p] : [];
}

function extract(src) {
  const out = new Set();
  // JSX text between tags
  for (const m of src.matchAll(/>([^<>{}]{12,})</g)) out.add(m[1]);
  // string literals
  for (const m of src.matchAll(/(['"`])((?:(?!\1)[^\\\n]|\\.){12,}?)\1/g)) out.add(m[2]);
  return [...out]
    .map((s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
    .filter((s) => /\s/.test(s) && /[a-zA-Z]{3}/.test(s))
    .filter((s) => !/[=\[\]{}]|\b(object|w|h|max|min|mb|mt|translate|shadow)-/.test(s))
    // Keep fee/pricing content out of the chatbot entirely.
    .filter((s) => !/\b(fees?|pric(e|es|ing)|costs?|discounts?|subsid(y|ies|ised|ized)|tuition|₹|INR|rupees?)\b/i.test(s))
    .filter((s) => !/^(use |import|export|https?:|\/|\.|#)|className|\b(px|py|text|bg|flex|grid|rounded|md|lg):?-/.test(s));
}

let total = 0;
const docs = [];
for (const file of [...new Set(SOURCES.flatMap(walk))]) {
  let text = extract(fs.readFileSync(path.join(root, file), 'utf8')).join('\n');
  if (text.length > MAX_PER_FILE) text = text.slice(0, MAX_PER_FILE);
  if (!text || total + text.length > MAX_TOTAL) continue;
  total += text.length;
  const route = file.replace(/^src\/app/, '').replace(/\/(page|[a-z]+data)\.(jsx|js)$/, '/').replace(/^src\/data\/.*/, '/');
  docs.push({ source: file, route, text });
}
fs.writeFileSync(path.join(root, 'src/data/chat-knowledge.json'), JSON.stringify(docs, null, 1));
console.log(`chat-knowledge.json: ${docs.length} docs, ${total} chars`);
