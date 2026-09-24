const https = require('https');

const candidateIds = [
  '1570172619644-dfd03ed5d881', // facial spa mask
  '1512290903670-a35b91a788bb',
  '1512496015851-a90fb38ba796', // skincare/makeup
  '1522337360788-8b13dee7a37e', // makeup/beauty
  '1522337094846-8a818192de1f', // skincare
  '1576091160399-112ba8d25d1d', // clinic
  '1516975080664-ed2fc6a32937', // beauty
  '1584515979956-d9f6e5d09982', // clinic hands
  '1596462502278-27bfdc403348', // makeup cosmetic
  '1579684385127-1ef15d508118', // medical clinic
  '1534528741775-53994a69daeb', // woman face
  '1508214751196-bcfd4ca60f91', // portrait
  '1526045612212-70caf35c14df', // cosmetic bottle
  '1586495777744-4413f21062fa', // lips
  '1607779097040-26e80aa78e66', // nails
  '1599940824399-b87987ceb72a', // nails
  '1632345031435-8727f6897d53', // nails
  '1508759073847-9ca702cec7d2', // nails
  '1519014816548-bf5fe059798b', // nails
  '1604654894610-df63bc536371', // nails
  '1560066984-138dadb4c035', // salon styling
  '1562322140-8baeececf3df', // hair salon
  '1521590832167-7bcbfaa6381f', // salon washing
  '1580618672591-eb180b1a973f', // hair styling
  '1595476108010-b4d1f102b1b1', // facial brow
  '1583241800698-e8ab01830a07', // serum pipette
  '1560869713-7d0a29430803', // hair model
  '1634449571010-02389ed0f9b0', // hair cut
  '1519699047748-de8e457a634e', // hair
  '1527799820374-dcf8d9d4a388', // spa massage
  '1540555700478-4be289fbecef', // spa towel massage
  '1515377905703-c4788e51af15', // beauty
  '1487412720507-e7ab37603c6f', // makeup
  '1503236823255-94609f598e71', // salon
  '1556760544-74068565f05c', // hands clinic
  '1616394586066-51b87a829e96',
  '1567928815104-bd541295b719',
  '1492106087820-71aa04417162',
  '1583001809706-e78d22efb3bf'
];

function testUrl(id) {
  return new Promise((resolve) => {
    const url = `https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`;
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (locRes) => {
          resolve({ id, status: locRes.statusCode, ok: locRes.statusCode === 200 });
        }).on('error', () => resolve({ id, status: 500, ok: false }));
      } else {
        resolve({ id, status: res.statusCode, ok: res.statusCode === 200 });
      }
    }).on('error', () => resolve({ id, status: 500, ok: false }));
  });
}

async function run() {
  const results = [];
  for (const id of candidateIds) {
    const res = await testUrl(id);
    if (res.ok) {
      console.log(`VALID: ${id}`);
    } else {
      console.log(`INVALID: ${id} (${res.status})`);
    }
  }
}

run();
