import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCRAPED_IMAGES = path.join(__dirname, 'public', 'scraped', 'images');
const TARGET_BASE = path.join(__dirname, 'public', 'images');

// Define folder categories and keywords to match files
const CATEGORIES = {
  'hero': ['built-on-neuroscience', 'hero', 'IMG_20241209', 'IMG_20221103', 'khoa-pham', 'Pic_8', 'DSC00', 'DSC01'],
  'logos/working-parents': ['wp-logo', 'Accenture', 'TCS', 'Microsoft', 'KWE', 'Broadcom', 'ICICI', 'Vodafone', 'Amazon', 'hcl', 'wipro', 'ibm', 'cognizant', 'Cyient', 'ValueLabs', 'oracle', 'optum', 'HSBC', 'Deloitte', 'Novartis', '6102f4', 'Infosys', 'Wells_Fargo', 'TSWREIS', 'TTWREIS', 'Tech-Mahindra', 'Samudara', 'Amaron', 'QCIty', 'Religare', 'hps', 'novvvva', 'hhimachal', 'ppppresvas', 'granules', 'Siemens', 'Xoriant', 'Genpact', 'SSC_Technologies', 'Gemini-Consulting', '348423720', 'mc.png', 'kidzen', 'proeves', 'Zinnia', 'images-1', 'images-2'],
  'awards': ['Iconic-Brand', 'ida-awards', 'MSME', 'Queens-award', 'EBA_National', 'EBA_One'],
  'media': ['press16', 'press24', 'press25', 'press29', 'press30'],
  'team': ['Dr-Aperna', 'Dr-Dr-Gseller', 'Untitled-design-5', '90291873', 'image-bee', 'logoz'],
  'blog': ['spooktacular', 'halloween', 'brain-boosting', 'neuroscience', 'childcare', 'msi-pre-school'],
  'school': ['Asian', 'asian-indian', 'school-bag', 'atom', 'cross-out', 'vector-bg'],
  'logo': ['78_logo', 'logo', 'The-Neuroscientific', 'f4f4', 'b588997d'],
  'misc': [] // catch-all
};

// Ensure all target directories exist
Object.keys(CATEGORIES).forEach(cat => {
    const dir = path.join(TARGET_BASE, cat);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Read all files in the scraped images directory
const files = fs.existsSync(SCRAPED_IMAGES) ? fs.readdirSync(SCRAPED_IMAGES) : [];
console.log(`Found ${files.length} scraped images to organize`);

const mapping = { byCategory: {}, byOldPath: {} };
Object.keys(CATEGORIES).forEach(cat => { mapping.byCategory[cat] = []; });

// Classify each file
files.forEach(file => {
    let category = 'misc';
    let found = false;
    
    for (const [cat, keywords] of Object.entries(CATEGORIES)) {
        if (keywords.some(kw => file.toLowerCase().includes(kw.toLowerCase()))) {
            category = cat;
            found = true;
            break;
        }
    }
    
    const srcPath = path.join(SCRAPED_IMAGES, file);
    const targetDir = path.join(TARGET_BASE, category);
    const targetPath = path.join(targetDir, file);
    
    // Copy (not move - keep originals for safety)
    try {
        fs.copyFileSync(srcPath, targetPath);
        mapping.byCategory[category].push(file);
        mapping.byOldPath[file] = `images/${category}/${file}`;
    } catch (e) {
        console.warn(`Failed to copy ${file}: ${e.message}`);
    }
});

// Also copy existing working-parents-logos folder
const wpLogosDir = path.join(__dirname, 'public', 'assets', 'working-parents-logos');
const wpTargetDir = path.join(TARGET_BASE, 'logos', 'working-parents');
if (fs.existsSync(wpLogosDir) && !fs.existsSync(wpTargetDir)) {
    fs.mkdirSync(wpTargetDir, { recursive: true });
}
if (fs.existsSync(wpLogosDir)) {
    fs.readdirSync(wpLogosDir).forEach(f => {
        const src = path.join(wpLogosDir, f);
        const dst = path.join(wpTargetDir, f);
        if (!fs.existsSync(dst)) {
            fs.copyFileSync(src, dst);
            mapping.byCategory['logos/working-parents'].push(f);
        }
    });
}

// Generate report
fs.writeFileSync(
    path.join(__dirname, 'public', 'images', 'asset_mapping.json'),
    JSON.stringify(mapping, null, 2)
);

console.log('\n📁 Asset Organization Summary:');
Object.entries(mapping.byCategory).forEach(([cat, files]) => {
    if (files.length > 0) {
        console.log(`  ${cat}: ${files.length} files`);
    }
});
console.log('\n✅ Done! All images organized in public/images/');
