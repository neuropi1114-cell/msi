import http from 'http';

const port = 9230;
const pageUrl = process.argv[2] || 'http://localhost:3459/day-care';
const base = 'http://localhost:' + port;

function getJson(path) {
  return new Promise((resolve, reject) => {
    http.get(base + path, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let ws;
function send(method, params = {}) {
  return new Promise((resolve) => {
    const id = Math.random().toString(36).slice(2);
    const handler = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id === id) {
        ws.removeEventListener('message', handler);
        resolve(msg);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

const tabs = await getJson('/json');
const tab = tabs.find((t) => t.type === 'page');
if (!tab) {
  console.log('NO TAB');
  process.exit(1);
}

ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((res) => (ws.onopen = res));

const events = [];
ws.addEventListener('message', (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.method === 'Runtime.exceptionThrown' || msg.method === 'Runtime.consoleAPICalled' || msg.method === 'Log.entryAdded') {
    events.push(JSON.stringify(msg));
  }
});

await send('Runtime.enable');
await send('Log.enable');
await send('Page.enable');

// reload and wait
await send('Page.reload', { ignoreCache: true });
await sleep(15000);

// also click Read More buttons to trigger drawers
try {
  const clickRes = await send('Runtime.evaluate', {
    expression: `(() => { const b = Array.from(document.querySelectorAll('button')).find(x => x.textContent.includes('Read More')); if (!b) return 'no-button'; b.click(); return 'clicked'; })()`,
    returnByValue: true,
  });
  console.log('CLICK:', JSON.stringify(clickRes));
} catch (e) {
  console.log('click err', e.message);
}
await sleep(4000);

// grab body text snippet
try {
  const res = await send('Runtime.evaluate', {
    expression: `(() => { const overlay = document.querySelector('nextjs-portal, nextjs-overlay, #__next-build-indicator'); return document.querySelector('body') ? document.querySelector('body').innerText.slice(0, 200) : 'nobody'; })()`,
    returnByValue: true,
  });
  console.log('BODY:', JSON.stringify(res?.result?.result?.value || res));
} catch (e) {
  console.log('eval err', e.message);
}

console.log('EVENTS:');
for (const e of events.slice(0, 40)) console.log(e.slice(0, 1500));
ws.close();
process.exit(0);