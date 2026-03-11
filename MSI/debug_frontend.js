import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => {
      console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  
  const workingParentsImgs = await page.evaluate(() => {
    const parent = document.querySelector('h2:contains("Working Parents")')?.closest('section');
    if (!parent) return 'No section found';
    const imgs = parent.querySelectorAll('img');
    const missing = [];
    imgs.forEach(img => {
        if (!img.complete || img.naturalHeight === 0 || img.style.display === 'none') {
            missing.push({ src: img.src, display: img.style.display, height: img.naturalHeight });
        }
    });
    return {
        total: imgs.length,
        missing: missing
    };
  });
  
  console.log('Images Stats:', JSON.stringify(workingParentsImgs, null, 2));

  await browser.close();
})();
