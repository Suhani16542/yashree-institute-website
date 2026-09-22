const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'services');

const nailImages = [
  {
    filename: 'nail_design_1_chrome.jpg',
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop' // Real metallic chrome nails
  },
  {
    filename: 'nail_design_2_french_ombre.jpg',
    url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000&auto=format&fit=crop' // French ombre baby boomer
  },
  {
    filename: 'nail_design_3_acrylic_sculpt.jpg',
    url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop' // Luxury red/nude salon nail extension
  },
  {
    filename: 'nail_design_4_art_pastel.jpg',
    url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop' // Modern pastel manicured nails
  },
  {
    filename: 'nail_design_5_cuticle_russian.jpg',
    url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1000&auto=format&fit=crop' // Clean Russian cuticle manicure prep
  },
  {
    filename: 'nail_design_6_gel_overlay.jpg',
    url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop' // Hands with glossy gel nail extensions
  },
  {
    filename: 'nail_design_7_dark_luxe.jpg',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' // Salon hands showcase
  }
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
  for (const item of nailImages) {
    const destPath = path.join(targetDir, item.filename);
    try {
      await download(item.url, destPath);
      console.log(`✓ Downloaded ${item.filename}`);
    } catch (e) {
      console.error(`✗ Error downloading ${item.filename}:`, e.message);
    }
  }
}

run();
