import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('working_parents_section.html', 'utf-8');
const $ = cheerio.load(html);

const logos = [];

$('.wpr-grid-image-wrap img').each((i, el) => {
    let src = $(el).attr('src');
    if (src && src.startsWith('data:image/svg')) {
      src = $(el).attr('data-src') || $(el).attr('bv-data-src');
    }

    if (src) {
      if (src.startsWith('data:image')) {
          const originalSrc = $(el).closest('.wpr-grid-image-wrap').attr('data-src');
          if (originalSrc) {
              src = originalSrc;
          }
      }
      logos.push(src.split('/').pop().split('?')[0]);
    }
});

console.log(JSON.stringify(logos, null, 2));
fs.writeFileSync('working_parents_logos.json', JSON.stringify(logos, null, 2));
