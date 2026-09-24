const fs = require('fs');
const path = require('path');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        fs.unlink(dest, () => {});
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          if (stats.size < 1000) {
            fs.unlinkSync(dest);
            return reject(new Error(`File too small: ${stats.size} bytes`));
          }
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  // Ultra-luxurious beauty academy / aesthetic salon masterclass scene
  const academyUrl = "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop";
  const dest = path.join(__dirname, '..', 'public', 'images', 'academy_courses_showcase.jpg');
  
  console.log('Downloading academy courses showcase image...');
  await download(academyUrl, dest);
  console.log('✓ Successfully downloaded academy_courses_showcase.jpg');
}

run().catch(console.error);
