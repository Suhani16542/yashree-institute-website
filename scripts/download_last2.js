const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'public', 'images', 'courses');

const twoImages = [
  { filename: 'hydra_main.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'lash_main.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop' }
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
  for (const item of twoImages) {
    const filePath = path.join(dir, item.filename);
    try {
      await downloadFile(item.url, filePath);
      console.log(`✓ ${item.filename}`);
    } catch (err) {
      console.log(`✗ ${item.filename}: ${err.message}`);
    }
  }
}

run();
