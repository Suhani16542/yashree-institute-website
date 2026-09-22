const fs = require('fs');

const file = fs.readFileSync('src/data/servicesData.ts', 'utf8');

// Quick analysis of services
const serviceBlocks = file.split('slug: "');
console.log('Total service sections parsed:', serviceBlocks.length - 1);

for (let i = 1; i < serviceBlocks.length; i++) {
  const block = serviceBlocks[i];
  const slug = block.split('"')[0];
  const title = (block.match(/title:\s*"([^"]+)"/) || [])[1];
  const galleryMatches = block.match(/src:\s*"([^"]+)"/g) || [];
  console.log(`\n========================================`);
  console.log(`[${i}] SLUG: ${slug}`);
  console.log(`    TITLE: ${title}`);
  console.log(`    GALLERY IMAGES COUNT: ${galleryMatches.length}`);
  
  // Show image sources
  const imgs = galleryMatches.map(m => m.replace(/src:\s*"/, '').replace(/"/, ''));
  imgs.forEach((img, idx) => {
    const exists = fs.existsSync('public' + img);
    console.log(`    ${idx + 1}. ${img} -> ${exists ? 'EXISTS' : 'MISSING'}`);
  });
}
