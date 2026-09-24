const fs = require('fs');
const content = fs.readFileSync('src/data/coursesData.ts', 'utf8');
const matches = [...content.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('All slugs in coursesData.ts:', matches);
