const fs = require('fs');
const path = require('path');

const fileContent = fs.readFileSync('src/data/coursesData.ts', 'utf8');

const coursesList = [
  { slug: 'skin', name: 'Skin', expectedCount: 6 },
  { slug: 'chemical-peels', name: 'Chemical Peels', expectedCount: 4 },
  { slug: 'bb-glow-facial', name: 'BB Glow Facial', expectedCount: 4 },
  { slug: 'korean-facial', name: 'Korean Facial', expectedCount: 4 },
  { slug: 'hydra-facial', name: 'Hydra Facial', expectedCount: 4 },
  { slug: 'hair-chemical', name: 'Hair Chemical', expectedCount: 4 },
  { slug: 'hair-styling', name: 'Hair Styling', expectedCount: 4 },
  { slug: 'hair-cutting', name: 'Hair Cutting', expectedCount: 4 },
  { slug: 'hair-extensions', name: 'Hair Extensions', expectedCount: 4 },
  { slug: 'professional-makeup', name: 'Professional Makeup', expectedCount: 4 },
  { slug: 'semi-permanent-makeup', name: 'Semi-Permanent Makeup (SPMU)', expectedCount: 4 },
  { slug: 'lip-neutralizing', name: 'Lip Neutralizing', expectedCount: 4 },
  { slug: 'lip-tinting', name: 'Lip Tinting', expectedCount: 4 },
  { slug: 'microblading', name: 'Microblading', expectedCount: 4 },
  { slug: 'beauty-mole-creation', name: 'Beauty Mole Creation', expectedCount: 4 },
  { slug: 'lash-lifting', name: 'Lash Lifting', expectedCount: 4 },
  { slug: 'nail-extensions', name: 'Nail Extensions', expectedCount: 4 },
  { slug: 'nail-art', name: 'Nail Art', expectedCount: 4 }
];

const allImages = new Set();
let duplicates = 0;
let missingFiles = 0;
let errors = 0;

console.log('==================================================');
console.log('VERIFYING ALL 18 COURSES IN coursesData.ts');
console.log('==================================================');

coursesList.forEach(({ slug, name, expectedCount }, index) => {
  const courseIdx = index + 1;
  const slugMarker = 'slug: "' + slug + '"';
  const startPos = fileContent.indexOf(slugMarker);
  
  if (startPos === -1) {
    console.error(`❌ [${courseIdx}. ${name} (${slug})] Course NOT FOUND in file!`);
    errors++;
    return;
  }
  
  // Find next course or end of list
  let endPos = fileContent.length;
  if (index < coursesList.length - 1) {
    const nextSlugMarker = 'slug: "' + coursesList[index + 1].slug + '"';
    const nextPos = fileContent.indexOf(nextSlugMarker, startPos);
    if (nextPos !== -1) endPos = nextPos;
  }
  
  const courseBlock = fileContent.slice(startPos, endPos);
  
  // Check hero image
  const heroMatch = courseBlock.match(/heroImage:\s*"([^"]+)"/);
  const heroPath = heroMatch ? heroMatch[1] : null;
  let heroStatus = 'MISSING';
  if (heroPath) {
    const diskPath = path.join('public', heroPath.replace(/^\//, ''));
    if (fs.existsSync(diskPath) && fs.statSync(diskPath).size > 0) {
      heroStatus = `OK (${Math.round(fs.statSync(diskPath).size / 1024)} KB)`;
    } else {
      missingFiles++;
      heroStatus = `FILE MISSING AT ${diskPath}`;
    }
  } else {
    missingFiles++;
  }
  
  // Extract gallery items
  const galleryMatch = courseBlock.match(/gallery:\s*\[([\s\S]*?)\]\s*,\s*whyLearn:/);
  if (!galleryMatch) {
    console.error(`❌ [${courseIdx}. ${name}] gallery block not found!`);
    errors++;
    return;
  }
  
  const galleryContent = galleryMatch[1];
  const imgMatches = [...galleryContent.matchAll(/image:\s*"([^"]+)"/g)].map(m => m[1]);
  
  const countMatches = imgMatches.length === expectedCount;
  if (!countMatches) {
    console.error(`❌ [${courseIdx}. ${name}] Expected ${expectedCount} images, got ${imgMatches.length}`);
    errors++;
  }
  
  console.log(`\n${courseIdx}. ${name} [${slug}] -> Gallery Count: ${imgMatches.length}/${expectedCount} | Hero: ${heroPath} (${heroStatus})`);
  
  imgMatches.forEach((img, gIdx) => {
    const diskPath = path.join('public', img.replace(/^\//, ''));
    const exists = fs.existsSync(diskPath) && fs.statSync(diskPath).size > 0;
    const size = exists ? `${Math.round(fs.statSync(diskPath).size / 1024)} KB` : 'FILE NOT FOUND';
    
    if (!exists) {
      console.error(`   ❌ Gallery ${gIdx + 1}: ${img} [MISSING]`);
      missingFiles++;
    } else {
      console.log(`   ✓ Gallery ${gIdx + 1}: ${img} (${size})`);
    }
    
    if (allImages.has(img)) {
      console.error(`   ❌ DUPLICATE REUSE DETECTED: ${img}`);
      duplicates++;
    }
    allImages.add(img);
  });
});

console.log('\n==================================================');
console.log('SUMMARY AUDIT RESULTS:');
console.log('Total unique gallery images verified:', allImages.size);
console.log('Missing files:', missingFiles);
console.log('Duplicate image paths:', duplicates);
console.log('Structural errors:', errors);
console.log('==================================================');
