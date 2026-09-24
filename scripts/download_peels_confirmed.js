const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'courses');

const chemicalPeelImages = [
  { name: 'peel_main.jpg', id: '1782159981435-78545e10428a' },     // Hero
  { name: 'peel_prep.jpg', id: '1782159981438-4018d6aee2ab' },     // Step 1: Prep & Acid formulation dish
  { name: 'peel_apply.jpg', id: '1761718209835-c8586b7dcac0' },    // Step 2: Fan-brush layering on skin
  { name: 'peel_neutral.jpg', id: '1782159981436-4ed747cb3739' },  // Step 3: Neutralizing application
  { name: 'peel_cryo.jpg', id: '1782159981439-b99dfb84f4b8' },     // Step 4: Neutralization quench & mask peel
  { name: 'peels_results.jpg', id: '1731355771317-b2ab72c79124' }, // Step 5: Thermal soothing
  { name: 'peel_clarity.jpg', id: '1567521464027-f12626d26316' },  // Step 6: Radiant clear skin
];

function downloadFile(id, dest) {
  const url = `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (locRes) => {
          if (locRes.statusCode !== 200) return reject(new Error(`Status ${locRes.statusCode}`));
          const file = fs.createWriteStream(dest);
          locRes.pipe(file);
          file.on('finish', () => file.close(() => resolve(dest)));
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(() => resolve(dest)));
      } else {
        reject(new Error(`Status ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const item of chemicalPeelImages) {
    const dest = path.join(dir, item.name);
    try {
      await downloadFile(item.id, dest);
      console.log(`✓ Downloaded ${item.name} from photo-${item.id}`);
    } catch (e) {
      console.error(`✗ ${item.name}: ${e.message}`);
    }
  }
}

run();
