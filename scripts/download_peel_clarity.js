const https = require('https');
const fs = require('fs');
const path = require('path');

const dest = path.join(__dirname, '..', 'public', 'images', 'courses', 'peel_clarity.jpg');
const url = 'https://images.unsplash.com/photo-1782159981479-0fafb56d3cd6?q=80&w=1200&auto=format&fit=crop';

https.get(url, (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (locRes) => {
      locRes.pipe(fs.createWriteStream(dest));
    });
  } else {
    res.pipe(fs.createWriteStream(dest));
  }
});
