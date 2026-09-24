const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'courses');

const bbglowImages = [
  { name: 'bbglow_main.jpg', id: '1782159981435-78545e10428a' },     // Hero: meso serum treatment
  { name: 'bbglow_device.jpg', id: '1782159981438-4018d6aee2ab' },   // Step 1: Meso serum & shade prep
  { name: 'bbglow_serum.jpg', id: '1782159981435-78545e10428a' },    // Step 2: Meso serum glide application
  { name: 'bbglow_needling.jpg', id: '1761718209835-c8586b7dcac0' }, // Step 3: Nano-infusion brush & glide
  { name: 'bbglow_led.jpg', id: '1782159981436-4ed747cb3739' },      // Step 4: Therapeutic calming infusion
  { name: 'bbglow_mask_calm.jpg', id: '1782159981439-b99dfb84f4b8' },// Step 5: Post-infusion peel mask lift
  { name: 'bbglow_radiance.jpg', id: '1731355771317-b2ab72c79124' }, // Step 6: Flawless porcelain glass finish
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
  for (const item of bbglowImages) {
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
