const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'services');

const extraImages = [
  // Extra Nails
  {
    filename: 'nail_pastel_art.jpg',
    url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'nail_glitter_tips.jpg',
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop'
  },
  // Extra PMU
  {
    filename: 'pmu_microblading_pen.jpg',
    url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'pmu_lash_volume.jpg',
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'pmu_pigment_mixing.jpg',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop'
  },
  // Extra Aesthetics
  {
    filename: 'aesthet_chemical_peel_brush.jpg',
    url: 'https://images.unsplash.com/photo-1512290900672-1f41e54a3a60?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'aesthet_meso_infusion.jpg',
    url: 'https://images.unsplash.com/photo-1608248597359-5b77054f15d2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'aesthet_derma_roller.jpg',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop'
  },
  // Extra Skincare
  {
    filename: 'spa_botanical_mask.jpg',
    url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'spa_aromatherapy_oils.jpg',
    url: 'https://images.unsplash.com/photo-1608248597359-5b77054f15d2?q=80&w=1000&auto=format&fit=crop'
  },
  // Extra Hair Styling
  {
    filename: 'styling_curls_waves.jpg',
    url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop'
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
  for (const item of extraImages) {
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
