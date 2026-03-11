import fs from 'fs';
import path from 'path';

const agencies = [
  "Accenture-Logo.jpg.bv.webp", "TCS-Logo.jpg.bv.webp", "Microsoft-Logo.jpg.bv.webp", "KWE-Logo.jpg.bv.webp", 
  "Broadcom-Logo.jpg.bv.webp", "ICICI-Bank-Logo.jpg.bv.webp", "Vodafone-Logo.jpg.bv.webp", "Amazon-Logo-1.jpg.bv.webp", 
  "wipro-2.png.bv.webp", "ibm-1.png.bv.webp", "cognizant-1.png.bv.webp", "66d78f20fde2ae84afdc6040_optum-healthcare-logo.png.bv.webp", 
  "Novartis-Logo.svg.png.bv_resized_desktop.png.bv.webp", "TSWREIS-Logo.jpg.bv.webp", "TTWREIS-Logo.jpg.bv.webp", "Tech-Mahindra-Logo.jpg.bv.webp", 
  "Samudara-Infra-Logo.jpg.bv.webp", "Amaron-Logo.jpg.bv.webp", "QCIty.jpg.bv.webp", "Religare-Logo.jpg.bv.webp", 
  "Amazon-Logo.jpg.bv.webp", "Vodafone-Logo-1.jpg.bv.webp", "hps.png.bv.webp", "novvvva.png.bv.webp", 
  "hhimachal.png.bv.webp", "ppppresvas-1.png.bv.webp", "500px-Gemini-Consulting.svg.png.bv.webp", "ibm.svg", 
  "images-1.png.bv.webp", "images-2.png.bv.webp", "proeves-logo.png.bv.webp"
];

const sourceDir = path.join(process.cwd(), 'public', 'assets');
const targetDir = path.join(sourceDir, 'working-parents-logos');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const cleanedAgencies = [];

agencies.forEach((filename, index) => {
    const sourcePath = path.join(sourceDir, filename);
    if (fs.existsSync(sourcePath)) {
        // Create a cleaner filename (e.g., logo-1.webp, logo-2.webp)
        const ext = path.extname(filename);
        let cleanExt = ext;
        if (filename.includes('.webp')) cleanExt = '.webp';
        if (filename.includes('.svg') && !filename.includes('.webp')) cleanExt = '.svg';
        
        const newName = `wp-logo-${index + 1}${cleanExt}`;
        const targetPath = path.join(targetDir, newName);
        
        fs.renameSync(sourcePath, targetPath);
        cleanedAgencies.push(newName);
        console.log(`Moved and renamed: ${filename} -> ${newName}`);
    } else {
        console.log(`Not found: ${filename}`);
    }
});

fs.writeFileSync('wp_cleaned_logos.json', JSON.stringify(cleanedAgencies, null, 2));
console.log('Done!');
