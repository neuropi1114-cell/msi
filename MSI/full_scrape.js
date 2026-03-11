import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://myschoolitaly.com/';
const OUTPUT_DIR = path.join(__dirname, 'public', 'scraped');
const IMAGES_DIR = path.join(OUTPUT_DIR, 'images');
const DATA_DIR = path.join(OUTPUT_DIR, 'data');

// Create directories
[OUTPUT_DIR, IMAGES_DIR, DATA_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const downloadedUrls = new Set();
const allData = { pages: [], images: [], videos: [], links: [] };

async function downloadFile(url, targetDir) {
    if (!url || url.startsWith('data:') || downloadedUrls.has(url)) return null;
    
    try {
        // Get the clean filename from the URL
        const urlObj = new URL(url);
        let filename = path.basename(urlObj.pathname)
            .replace(/\?.*$/, '')
            .replace(/[^a-zA-Z0-9._-]/g, '_')
            .substring(0, 100);
        
        if (!filename || filename === '_') filename = `file_${Date.now()}`;
        
        const targetPath = path.join(targetDir, filename);
        
        // Skip if already exists
        if (fs.existsSync(targetPath)) {
            downloadedUrls.add(url);
            return filename;
        }
        
        await new Promise((resolve, reject) => {
            const proto = url.startsWith('https') ? https : http;
            const file = fs.createWriteStream(targetPath);
            
            const req = proto.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                    'Referer': BASE_URL
                }
            }, (res) => {
                if (res.statusCode === 301 || res.statusCode === 302) {
                    file.close();
                    fs.unlinkSync(targetPath);
                    // Follow redirect
                    const redirectUrl = res.headers.location;
                    if (redirectUrl) {
                        downloadedUrls.add(url);
                        resolve(downloadFile(redirectUrl, targetDir));
                    } else {
                        resolve(null);
                    }
                    return;
                }
                if (res.statusCode !== 200) {
                    file.close();
                    if (fs.existsSync(targetPath)) fs.unlinkSync(targetPath);
                    resolve(null);
                    return;
                }
                res.pipe(file);
                file.on('finish', () => { file.close(); resolve(filename); });
                file.on('error', (err) => { fs.unlinkSync(targetPath); reject(err); });
            });
            req.on('error', (err) => {
                if (fs.existsSync(targetPath)) fs.unlinkSync(targetPath);
                reject(err);
            });
            req.setTimeout(15000, () => { req.abort(); });
        });
        
        downloadedUrls.add(url);
        return filename;
    } catch (e) {
        console.warn(`Failed to download: ${url} - ${e.message}`);
        return null;
    }
}

async function scrapePage(page, url, pageData) {
    try {
        console.log(`\nScraping: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        
        // Scroll to trigger lazy loading
        await page.evaluate(async () => {
            await new Promise(resolve => {
                let totalHeight = 0;
                const distance = 300;
                const timer = setInterval(() => {
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    if (totalHeight >= document.body.scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });
        
        await new Promise(r => setTimeout(r, 2000));
        
        // Extract all page data
        const extracted = await page.evaluate((baseUrl) => {
            const results = {
                title: document.title,
                url: window.location.href,
                text: document.body.innerText.substring(0, 5000),
                images: [],
                videos: [],
                links: [],
                headings: []
            };
            
            // Images - all possible sources
            document.querySelectorAll('img').forEach(img => {
                const srcs = [
                    img.getAttribute('src'),
                    img.getAttribute('data-src'),
                    img.getAttribute('bv-data-src'),
                    img.getAttribute('data-lazy-src'),
                    img.getAttribute('data-original'),
                    img.getAttribute('srcset')?.split(',')[0]?.trim()?.split(' ')[0]
                ].filter(s => s && !s.startsWith('data:image/svg') && !s.startsWith('data:image/png;base64,AA'));
                
                srcs.forEach(src => {
                    if (src) {
                        try {
                            const absUrl = new URL(src, baseUrl).href;
                            if (!results.images.includes(absUrl)) {
                                results.images.push(absUrl);
                            }
                        } catch {}
                    }
                });
                
                // Also check parent elements
                const parent = img.closest('[data-src]');
                if (parent) {
                    const psrc = parent.getAttribute('data-src');
                    if (psrc) {
                        try {
                            const absUrl = new URL(psrc, baseUrl).href;
                            if (!results.images.includes(absUrl)) results.images.push(absUrl);
                        } catch {}
                    }
                }
            });
            
            // Background images
            document.querySelectorAll('*').forEach(el => {
                const bg = window.getComputedStyle(el).backgroundImage;
                if (bg && bg !== 'none' && bg.includes('url(')) {
                    const match = bg.match(/url\(['"]?([^'")\s]+)/);
                    if (match && match[1] && !match[1].startsWith('data:')) {
                        try {
                            const absUrl = new URL(match[1], baseUrl).href;
                            if (!results.images.includes(absUrl)) results.images.push(absUrl);
                        } catch {}
                    }
                }
            });
            
            // Videos
            document.querySelectorAll('video, source, iframe[src*="youtube"], iframe[src*="vimeo"]').forEach(el => {
                const src = el.getAttribute('src') || el.getAttribute('data-src');
                if (src) {
                    try {
                        results.videos.push(new URL(src, baseUrl).href);
                    } catch {}
                }
            });
            
            // Links on same domain
            document.querySelectorAll('a[href]').forEach(a => {
                const href = a.getAttribute('href');
                if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
                    try {
                        const absUrl = new URL(href, baseUrl).href;
                        if (absUrl.startsWith('https://myschoolitaly.com')) {
                            results.links.push(absUrl);
                        }
                    } catch {}
                }
            });
            
            // Headings
            document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
                results.headings.push({ tag: h.tagName, text: h.innerText.trim() });
            });
            
            return results;
        }, BASE_URL);
        
        pageData.push(extracted);
        return extracted;
    } catch (e) {
        console.error(`Error scraping ${url}: ${e.message}`);
        return null;
    }
}

async function main() {
    console.log('Starting full website scrape of myschoolitaly.com...');
    console.log('Output directory:', OUTPUT_DIR);
    
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36');
    
    const visitedUrls = new Set();
    const toVisit = [BASE_URL];
    const allPages = [];
    const allImages = new Set();
    const allVideos = new Set();
    
    // Scrape the homepage and collect links
    while (toVisit.length > 0 && visitedUrls.size < 20) {
        const url = toVisit.shift();
        if (visitedUrls.has(url)) continue;
        visitedUrls.add(url);
        
        const pageResult = await scrapePage(page, url, allPages);
        if (!pageResult) continue;
        
        // Add new internal links to visit (limit to important pages only)
        const importantKeywords = ['about', 'franchise', 'contact', 'program', 'early-childhood', 'blog'];
        pageResult.links.forEach(link => {
            if (!visitedUrls.has(link) && !toVisit.includes(link)) {
                const shouldVisit = importantKeywords.some(kw => link.toLowerCase().includes(kw));
                if (shouldVisit) toVisit.push(link);
            }
        });
        
        // Collect all images and videos
        pageResult.images.forEach(img => allImages.add(img));
        pageResult.videos.forEach(vid => allVideos.add(vid));
    }
    
    await browser.close();
    
    // Save page data
    const summaryData = {
        scrapedAt: new Date().toISOString(),
        totalPages: allPages.length,
        totalImages: allImages.size,
        totalVideos: allVideos.size,
        pages: allPages.map(p => ({
            url: p.url,
            title: p.title,
            headings: p.headings,
            textSnippet: p.text?.substring(0, 500)
        })),
        videos: [...allVideos],
        allImageUrls: [...allImages]
    };
    
    fs.writeFileSync(path.join(DATA_DIR, 'scrape_summary.json'), JSON.stringify(summaryData, null, 2));
    console.log('\n✅ Page data saved to scrape_summary.json');
    
    // Now download all images
    console.log(`\nDownloading ${allImages.size} images...`);
    const imageUrls = [...allImages];
    const imageMapping = {};
    
    for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        process.stdout.write(`\r[${i+1}/${imageUrls.length}] Downloading images...`);
        const filename = await downloadFile(url, IMAGES_DIR);
        if (filename) imageMapping[url] = filename;
    }
    
    fs.writeFileSync(path.join(DATA_DIR, 'image_mapping.json'), JSON.stringify(imageMapping, null, 2));
    
    console.log(`\n\n✅ Done! Summary:`);
    console.log(`   Pages scraped: ${allPages.length}`);
    console.log(`   Images downloaded: ${Object.keys(imageMapping).length}/${allImages.size}`);
    console.log(`   Videos found: ${allVideos.size}`);
    console.log(`   Output: ${OUTPUT_DIR}`);
    
    if (allVideos.size > 0) {
        console.log('\n🎥 Video links:');
        [...allVideos].forEach(v => console.log(`   ${v}`));
    }
}

main().catch(console.error);
