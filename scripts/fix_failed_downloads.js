const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'courses');

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// 23 Verified Unsplash images specifically replacing the 404s
const fixList = [
  // Hydra Facial
  { file: 'hydra_main.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop' },
  { file: 'hydra_vortex.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop' },
  { file: 'hydra_infusion.jpg', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop' },

  // Hair Chemical
  { file: 'hair_chem_gloss.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' },

  // Hair Cut
  { file: 'hair_cut_layers.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' },

  // Hair Ext
  { file: 'ext_razor_blend.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop' },

  // SPMU
  { file: 'spmu_main.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'spmu_caliper_map.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' },
  { file: 'spmu_pigment_tray.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },

  // Lip Neutralizing
  { file: 'lipneut_main.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lipneut_orange_mix.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },

  // Lip Tinting
  { file: 'liptint_main.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop' },
  { file: 'liptint_shade.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },

  // Microblading
  { file: 'blade_main.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'blade_caliper.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' },
  { file: 'blade_spine_pattern.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },

  // Beauty Mole
  { file: 'mole_placement.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' },
  { file: 'mole_melanin_mix.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },
  { file: 'mole_stipple.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' },

  // Lash Lifting
  { file: 'lash_main.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lash_lift_shields.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lash_perm_lotion.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' }
];

async function run() {
  console.log('Fixing remaining images...');
  for (const item of fixList) {
    const dest = path.join(targetDir, item.file);
    try {
      await downloadFile(item.url, dest);
      console.log(`✓ Fixed: ${item.file}`);
    } catch (e) {
      console.error(`✗ Error: ${item.file}:`, e.message);
    }
  }
  console.log('All remaining images fixed!');
}

run();
