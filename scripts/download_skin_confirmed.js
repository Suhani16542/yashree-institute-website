const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'courses');

const skinImages = [
  // 1. Hero: person receiving facial treatment in clinic
  { name: 'skin_main.jpg', id: '1761718210089-ba3bb5ccb54f' },
  // 2. Step 1: Diagnostics / brush cream application
  { name: 'skin_diag.jpg', id: '1761718209835-c8586b7dcac0' },
  // 3. Step 2: Enzyme Prep / applying soothing mask
  { name: 'skin_machine.jpg', id: '1782159981479-0fafb56d3cd6' },
  // 4. Step 3: Lymph Drainage / facial soothing treatment
  { name: 'skin_steam.jpg', id: '1782159981436-4ed747cb3739' },
  // 5. Step 4: Machine Extraction / removing mask aesthetician
  { name: 'skin_massage.jpg', id: '1782159981439-b99dfb84f4b8' },
  // 6. Step 5: Hydrojelly Infusion / facial treatment
  { name: 'skin_mask.jpg', id: '1761718210089-ba3bb5ccb54f' },
  // 7. Step 6: Glowing finished skin result
  { name: 'skin_glow_result.jpg', id: '1782159981479-0fafb56d3cd6' }
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
  for (const item of skinImages) {
    const dest = path.join(dir, item.name);
    try {
      await downloadFile(item.id, dest);
      console.log(`✓ Downloaded ${item.name} from ID ${item.id}`);
    } catch (e) {
      console.error(`✗ ${item.name}: ${e.message}`);
    }
  }
}

run();
