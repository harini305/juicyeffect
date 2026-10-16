// CDP screenshot tool: node shoot.mjs <outDir> <width> <mobile:0|1> <url>...
// Scrolls page to trigger lazy loading, then captures full page as JPEG.
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const [outDir, widthArg, mobileArg, ...urls] = process.argv.slice(2);
const width = +widthArg, mobile = mobileArg === '1';
mkdirSync(outDir, { recursive: true });
const CH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const port = 9300 + Math.floor(Math.random() * 500);
const prof = path.join(outDir, '..', 'cdp-profile-' + port);
const proc = spawn(CH, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let ws, id = 0; const pending = new Map();
async function connect() {
  for (let i = 0; i < 40; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      const pg = list.find(t => t.type === 'page');
      if (pg) { ws = new WebSocket(pg.webSocketDebuggerUrl); break; }
    } catch {}
    await sleep(250);
  }
  await new Promise(r => ws.addEventListener('open', r));
  ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
}
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const evalJs = async expr => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value;

await connect();
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width, height: mobile ? 844 : 900, deviceScaleFactor: 1, mobile });
if (mobile) await send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
for (const url of urls) {
  const name = (url.replace(/https?:\/\/[^/]+\/?/, '') || 'home').replace(/[\/?=&]+/g, '_');
  await send('Page.navigate', { url });
  await sleep(5000);
  // dismiss announcement / scroll to bottom slowly
  await evalJs(`(async()=>{for(let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,250));}window.scrollTo(0,0);await new Promise(r=>setTimeout(r,1500));return document.body.scrollHeight})()`);
  const h = await evalJs('Math.min(document.documentElement.scrollHeight, 16000)');
  const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 70, captureBeyondViewport: true, clip: { x: 0, y: 0, width, height: h, scale: 1 } });
  const file = path.join(outDir, `${name}--${mobile ? 'mobile' : 'desktop'}.jpg`);
  writeFileSync(file, Buffer.from(shot.result.data, 'base64'));
  console.log('saved', file, h);
}
ws.close(); proc.kill();
process.exit(0);
