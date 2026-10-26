// Minimal, safe Markdown subset -> token tree (no HTML). Used by ChatWidget.
const LINK_RE = /(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s)]+)/g;

// Parse inline text into [{type:'text'|'bold'|'italic'|'link', text, href}]
export function parseInline(src) {
  const out = [];
  const parts = src.split(LINK_RE);
  for (const part of parts) {
    if (!part) continue;
    let m = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (m) { out.push({ type: 'link', text: clean(m[1]), href: m[2] }); continue; }
    if (/^https?:\/\//.test(part)) { out.push({ type: 'link', text: part, href: part }); continue; }
    const re = /\*\*([^*]+?)\*\*|__([^_]+?)__|\*([^*\s][^*]*?)\*/g;
    let last = 0; let r;
    while ((r = re.exec(part))) {
      if (r.index > last) out.push({ type: 'text', text: clean(part.slice(last, r.index)) });
      if (r[1] || r[2]) out.push({ type: 'bold', text: clean(r[1] || r[2]) });
      else out.push({ type: 'italic', text: clean(r[3]) });
      last = re.lastIndex;
    }
    if (last < part.length) out.push({ type: 'text', text: clean(part.slice(last)) });
  }
  return out.filter((t) => t.text);
}

const clean = (s) => s.replace(/\*+/g, '').replace(/`/g, '');

// Parse into blocks: {type:'p', lines:[inline[]]} | {type:'ul', items:[inline[]]}
export function parseMarkdown(text) {
  const blocks = [];
  for (const raw of String(text || '').split('\n')) {
    const line = raw.replace(/^\s*#{1,6}\s*/, '').replace(/^\s*>\s?/, '');
    const li = line.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)$/);
    const prev = blocks[blocks.length - 1];
    if (li) {
      if (prev && prev.type === 'ul') prev.items.push(parseInline(li[1]));
      else blocks.push({ type: 'ul', items: [parseInline(li[1])] });
    } else if (!line.trim()) {
      blocks.push({ type: 'gap' });
    } else if (prev && prev.type === 'p') prev.lines.push(parseInline(line));
    else blocks.push({ type: 'p', lines: [parseInline(line)] });
  }
  while (blocks.length && blocks[blocks.length - 1].type === 'gap') blocks.pop();
  return blocks.filter((b, i) => !(b.type === 'gap' && (i === 0 || blocks[i - 1].type === 'gap')));
}

export function plainText(text) {
  return parseMarkdown(text).map((b) => b.type === 'gap' ? '' : b.type === 'ul'
    ? b.items.map((it) => '- ' + it.map((t) => t.text).join('')).join('\n')
    : b.lines.map((l) => l.map((t) => t.text).join('')).join('\n')).join('\n');
}
