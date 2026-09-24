const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'courses');

const fixImages = [
  { filename: 'skin_glow.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop' },
  { filename: 'bbglow_hero.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'korean_glass_skin.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_chem_gloss.jpg', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_cut_bob.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_ext_blend.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop' },
  { filename: 'spmu_hero.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'microblade_hero.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed with status ${response.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => resolve(dest));
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  for (const item of fixImages) {
    const destPath = path.join(targetDir, item.filename);
    try {
      await download(item.url, destPath);
      const stats = fs.statSync(destPath);
      console.log(`✓ ${item.filename} (${Math.round(stats.size / 1024)} KB)`);
    } catch (e) {
      console.error(`✗ ${item.filename}:`, e.message);
    }
  }
}

run();
