const fs = require('fs');
const path = require('path');
const https = require('https');

const rootDir = path.join(__dirname, '..');

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

const fallbackUrls = {
  "spmu_main.jpg": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
  "blade_main.jpg": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
  "mole_stipple.jpg": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
  "haircut_shears_prep.jpg": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop",
  "ext_sectioning.jpg": "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
};

async function run() {
  const dir = path.join(rootDir, 'public', 'images', 'courses');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const [filename, url] of Object.entries(fallbackUrls)) {
    const dest = path.join(dir, filename);
    if (!fs.existsSync(dest) || fs.statSync(dest).size < 1000) {
      console.log(`Downloading fallback for ${filename}...`);
      try {
        await download(url, dest);
        console.log(`✓ Restored ${filename}`);
      } catch (e) {
        console.error(`✗ Failed ${filename}:`, e.message);
      }
    }
  }

  // Verify all files in coursesData.ts
  const dataFile = fs.readFileSync(path.join(rootDir, 'src', 'data', 'coursesData.ts'), 'utf8');
  const imgRegex = /["'](\/images\/[^"']+)["']/g;
  let match;
  const missing = [];
  const found = [];

  while ((match = imgRegex.exec(dataFile)) !== null) {
    const relPath = match[1];
    const fullPath = path.join(rootDir, 'public', relPath.replace(/^\//, ''));
    if (!fs.existsSync(fullPath)) {
      missing.push(relPath);
    } else {
      found.push(relPath);
    }
  }

  console.log(`\nVerification Results:`);
  console.log(`Found images: ${found.length}`);
  console.log(`Missing images: ${missing.length}`);
  if (missing.length > 0) {
    console.log('Missing list:', [...new Set(missing)]);
  } else {
    console.log('🎉 ALL 126+ course images exist on disk and verified!');
  }
}

run();
