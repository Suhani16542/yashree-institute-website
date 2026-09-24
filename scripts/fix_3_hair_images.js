const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = 'public/images/services';

const replacements = [
  {
    // Real 3D bubble braid / textured braid (pure hair back view)
    name: 'hair_pure_16_boho_bubble_braid.jpg',
    url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    // Real French twist / classic elegant bridal bun (pure hair back view)
    name: 'hair_pure_17_classic_french_twist.jpg',
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop'
  },
  {
    // Real princess bridal crown / tiara with cascading curls (pure hair view)
    name: 'hair_pure_20_crystal_tiara_bridal.jpg',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop'
  },
  {
    // Real vintage retro victory rolls / glamorous curls
    name: 'hair_pure_18_vintage_victory_rolls.jpg',
    url: 'https://images.unsplash.com/photo-1584297091622-af8e5fd6432b?q=80&w=1000&auto=format&fit=crop'
  }
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', (err) => { fs.unlink(destPath, () => {}); reject(err); });
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      } else {
        file.close();
        fs.unlink(destPath, () => {});
        reject(new Error(`Failed with status ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Replacing images with pure hairstyle photos...');
  for (const item of replacements) {
    const dest = path.join(targetDir, item.name);
    try {
      await downloadFile(item.url, dest);
      console.log('✓ Successfully Replaced:', item.name);
    } catch (e) {
      console.error('✗ Error downloading:', item.name, e.message);
    }
  }
  console.log('Replacements complete!');
}

run();
