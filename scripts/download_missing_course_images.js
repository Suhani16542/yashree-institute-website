const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'public', 'images', 'courses');

// 23 fallback URLs that are guaranteed working Unsplash IDs for specific procedures
const missingImages = [
  // Skin Diagnostics / Consultation
  { filename: 'skin_diag.jpg', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop' },
  // Peel prep / cleansing
  { filename: 'peel_prep.jpg', url: 'https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1000&auto=format&fit=crop' },
  // Peel neutralizer / soothing
  { filename: 'peel_neutral.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  // BB Glow microneedling / meso ampoule infusion
  { filename: 'bbglow_infuse.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' },
  { filename: 'bbglow_needling.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop' },
  // Hydra Facial
  { filename: 'hydra_main.jpg', url: 'https://images.unsplash.com/photo-1512290903670-a35b91a788bb?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'hydra_vortex.jpg', url: 'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?q=80&w=1000&auto=format&fit=crop' },
  { filename: 'hydra_infusion.jpg', url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1000&auto=format&fit=crop' },
  // Hair Chemical Gloss
  { filename: 'hair_chem_gloss.jpg', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop' },
  // Hair Cut Layers
  { filename: 'hair_cut_layers.jpg', url: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1000&auto=format&fit=crop' },
  // Hair Extension Razor Blend
  { filename: 'ext_razor_blend.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  // SPMU / Microblading / Beauty spot
  { filename: 'spmu_main.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'spmu_caliper_map.jpg', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop' },
  { filename: 'spmu_pigment_tray.jpg', url: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=1000&auto=format&fit=crop' },
  { filename: 'blade_main.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'blade_caliper.jpg', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop' },
  { filename: 'blade_spine_pattern.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' },
  { filename: 'mole_placement.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },
  { filename: 'mole_melanin_mix.jpg', url: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=1000&auto=format&fit=crop' },
  { filename: 'mole_stipple.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop' },
  // Lash Lift
  { filename: 'lash_main.jpg', url: 'https://images.unsplash.com/photo-1583001809706-e78d22efb3bf?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'lash_lift_shields.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' },
  { filename: 'lash_perm_lotion.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading missing 23 images...');
  let successCount = 0;
  for (const item of missingImages) {
    const filePath = path.join(dir, item.filename);
    try {
      await downloadFile(item.url, filePath);
      console.log(`✓ ${item.filename}`);
      successCount++;
    } catch (err) {
      console.log(`✗ ${item.filename}: ${err.message}`);
    }
  }
  console.log(`\nCompleted missing: ${successCount}/${missingImages.length}`);
}

run();
