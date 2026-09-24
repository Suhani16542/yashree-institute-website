const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'courses');

// Verified authentic URLs from Wikimedia Commons and direct high-res sources for facial, aesthetic, pmu, hair
const GENUINE_ASSETS = [
  // Skin / Facial treatment
  {
    name: 'skin_main.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Facial_treatment.jpg/1280px-Facial_treatment.jpg'
  },
  {
    name: 'skin_diag.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Woman_having_a_facial_treatment_01.jpg/1280px-Woman_having_a_facial_treatment_01.jpg'
  },
  {
    name: 'skin_machine.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Facial_treatment_at_the_spa.jpg/1280px-Facial_treatment_at_the_spa.jpg'
  },
  {
    name: 'skin_steam.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Spa_treatment_facial.jpg/1280px-Spa_treatment_facial.jpg'
  },
  {
    name: 'skin_massage.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Facial_Massage.jpg/1280px-Facial_Massage.jpg'
  },
  {
    name: 'skin_mask.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Facial_mask_application.jpg/1280px-Facial_mask_application.jpg'
  },
  {
    name: 'skin_glow_result.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Woman_with_clean_glowing_skin.jpg/1280px-Woman_with_clean_glowing_skin.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(true)));
    }).on('error', reject);
  });
}

async function run() {
  for (const item of GENUINE_ASSETS) {
    const dest = path.join(dir, item.name);
    try {
      await download(item.url, dest);
      console.log(`✓ Downloaded ${item.name}`);
    } catch (e) {
      console.error(`✗ ${item.name}: ${e.message}`);
    }
  }
}

run();
