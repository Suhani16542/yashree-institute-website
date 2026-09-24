const http = require('http');

const routes = [
  '/',
  '/courses/skin',
  '/courses/hair-chemical',
  '/courses/hair-styling',
  '/courses/hair-cutting',
  '/courses/professional-makeup',
  '/courses/nail-extensions',
  '/courses/nail-art',
  '/courses/chemical-peels',
  '/courses/bb-glow-facial',
  '/courses/korean-facial',
  '/courses/hair-extensions',
  '/courses/hydra-facial',
  '/courses/semi-permanent-makeup',
  '/courses/lip-neutralizing',
  '/courses/lip-tinting',
  '/courses/microblading',
  '/courses/beauty-mole-creation',
  '/courses/lash-lifting',
  '/services/aesthetic',
  '/services/makeup',
  '/services/hair-styling',
  '/services/hair-masterclass',
  '/services/nail-extension',
  '/services/pmu',
  '/services/skincare',
  '/services/cosmetology'
];

function checkUrl(urlPath) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3000${urlPath}`, (res) => {
      resolve({ path: urlPath, status: res.statusCode });
    });
    req.on('error', (err) => {
      resolve({ path: urlPath, error: err.message });
    });
  });
}

async function verifyAll() {
  console.log('Verifying all 18 course routes + home + services on local dev server...');
  let success = 0;
  for (const r of routes) {
    const res = await checkUrl(r);
    if (res.status === 200) {
      console.log(`✓ [200 OK] ${res.path}`);
      success++;
    } else {
      console.error(`✗ [${res.status || 'ERROR'}] ${res.path}:`, res.error || '');
    }
  }
  console.log(`\nVerification Result: ${success} / ${routes.length} routes passed successfully!`);
}

verifyAll();
