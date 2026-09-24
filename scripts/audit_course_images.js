const fs = require('fs');
const path = require('path');

const coursesDataFile = path.join(__dirname, '..', 'src', 'data', 'coursesData.ts');
const content = fs.readFileSync(coursesDataFile, 'utf8');

// Also load download_all_course_images_pure.js to see what URLs were assigned
const downloadScript = fs.readFileSync(path.join(__dirname, '..', 'download_all_course_images_pure.js'), 'utf8');
const urlMap = {};
const urlMatches = downloadScript.matchAll(/\{\s*file:\s*['"]([^'"]+)['"],\s*url:\s*['"]([^'"]+)['"]\s*\}/g);
for (const m of urlMatches) {
  urlMap[m[1]] = m[2];
}

const coursesBlocks = content.split(/slug:\s*["']([^"']+)["']/g);
const auditReport = [];

for (let i = 1; i < coursesBlocks.length; i += 2) {
  const slug = coursesBlocks[i];
  const block = coursesBlocks[i + 1];

  const titleMatch = block.match(/title:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : slug;

  const heroMatch = block.match(/heroImage:\s*["']([^"']+)["']/);
  const heroImage = heroMatch ? heroMatch[1] : '';

  const galleryImages = [];
  const galleryMatches = block.matchAll(/["']?image["']?:\s*["']([^"']+)["']/g);
  for (const m of galleryMatches) {
    galleryImages.push(m[1]);
  }

  auditReport.push({
    slug,
    title,
    heroImage,
    galleryImages
  });
}

console.log('=== DETAILED 18-COURSE IMAGE AUDIT REPORT ===\n');

auditReport.forEach((c, idx) => {
  console.log(`[COURSE ${idx + 1}] ${c.title} (/courses/${c.slug})`);
  const heroFilename = path.basename(c.heroImage);
  const heroDiskPath = path.join(__dirname, '..', 'public', c.heroImage);
  const heroExists = fs.existsSync(heroDiskPath);
  const heroSize = heroExists ? (fs.statSync(heroDiskPath).size / 1024).toFixed(1) + ' KB' : 'MISSING';
  console.log(`  HERO: ${c.heroImage} (${heroSize}) -> URL: ${urlMap[heroFilename] || 'N/A'}`);
  
  console.log(`  GALLERY (${c.galleryImages.length} Steps):`);
  c.galleryImages.forEach((img, gIdx) => {
    const filename = path.basename(img);
    const diskPath = path.join(__dirname, '..', 'public', img);
    const exists = fs.existsSync(diskPath);
    const size = exists ? (fs.statSync(diskPath).size / 1024).toFixed(1) + ' KB' : 'MISSING';
    console.log(`    Step ${gIdx + 1}: ${img} (${size}) -> URL: ${urlMap[filename] || 'N/A'}`);
  });
  console.log('');
});
