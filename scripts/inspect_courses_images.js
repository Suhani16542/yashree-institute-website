const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'coursesData.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Match each course block
const courseBlocks = content.split(/\/\/\s*={10,}\s*\n\s*\/\/\s*\d+\.\s*/);

console.log(`Found ${courseBlocks.length - 1} course blocks.`);

courseBlocks.slice(1).forEach((block, idx) => {
  const slugMatch = block.match(/slug:\s*["']([^"']+)["']/);
  const heroMatch = block.match(/heroImage:\s*["']([^"']+)["']/);
  const galleryMatches = [...block.matchAll(/image:\s*["']([^"']+)["']/g)].map(m => m[1]);
  
  const slug = slugMatch ? slugMatch[1] : 'unknown';
  const hero = heroMatch ? heroMatch[1] : 'unknown';
  
  console.log(`\n[Course ${idx + 1}: ${slug}]`);
  console.log(`  Hero: ${hero}`);
  console.log(`  Gallery (${galleryMatches.length}): ${galleryMatches.join(', ')}`);
});
