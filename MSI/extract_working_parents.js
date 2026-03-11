import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlPath = 'C:\\Users\\harsh\\Downloads\\My School ITALY _ The Neuroscientific European Preschool.html';
const html = fs.readFileSync(htmlPath, 'utf-8');
const $ = cheerio.load(html);

const saveSection = (textToFind, filename) => {
    const el = $('*:contains("' + textToFind + '")').last().closest('section');
    if (el.length) {
        fs.writeFileSync(filename, el.html() || '');
        console.log('Saved', filename);
    } else {
        console.log('Could not find', textToFind);
    }
}

saveSection('Working Parents', 'working_parents_section.html');
