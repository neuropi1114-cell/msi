import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = fs.readFileSync('working_parents_logos.json', 'utf8');
const logos = JSON.parse(data);

const ASSETS_DIR = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

async function downloadImage(url, filepath) {
    if (fs.existsSync(filepath)) {
      console.log(`Exists: ${path.basename(filepath)}`);
      return;
    }

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                   .on('error', reject)
                   .once('close', () => resolve(filepath));
            } else {
                res.resume();
                console.log(`Failed to download ${url}: ${res.statusCode}`);
                resolve(null);
            }
        }).on('error', reject);
    });
}

async function main() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    console.log("Navigating to MSI...");
    await page.goto('https://myschoolitaly.com/', { waitUntil: 'networkidle2' });
    
    // Evaluate to get raw image src's based on filename
    const logoUrls = await page.evaluate((names) => {
        const urls = {};
        
        // Check all elements for background images or data-url or src
        document.querySelectorAll('*').forEach(el => {
            let src = el.getAttribute('src');
            if (!src || src.startsWith('data:image/svg')) {
                 src = el.getAttribute('data-src') || el.getAttribute('bv-data-src') || el.getAttribute('data-url') || src;
                 if (!src) {
                     const closest = el.closest('[data-src]');
                     if (closest) src = closest.getAttribute('data-src');
                 }
            }
            
            // Check background-image
            if (!src) {
               const bg = window.getComputedStyle(el).backgroundImage;
               if (bg && bg !== 'none' && bg.includes('url(')) {
                   src = bg.slice(5, -2);
               }
            }

            if (src && typeof src === 'string' && !src.startsWith('data:image/')) {
                const filename = src.split('/').pop().split('?')[0];
                if (names.some(n => n === filename)) {
                    urls[filename] = src;
                }
            }
        });
        return urls;
    }, logos);

    console.log(`Found ${Object.keys(logoUrls).length} full URLs out of ${logos.length} names.`);

    for (const [name, url] of Object.entries(logoUrls)) {
        const cleanUrl = url.startsWith('//') ? 'https:' + url : url;
        const targetPath = path.join(ASSETS_DIR, name);
        await downloadImage(cleanUrl, targetPath);
        console.log(`Downloaded: ${name}`);
    }

    await browser.close();
    console.log("Done downloading logos.");
}

main().catch(console.error);
