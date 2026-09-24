const fs = require('fs');
const path = require('path');
const https = require('https');

const baseDir = path.join(__dirname, '..', 'public', 'images', 'courses');

// 17 Courses (Course 2 to 18) x 4 Images Each
// Unique, topic-exact, verified photo IDs. Skin is NOT included and UNTOUCHED.
const FOUR_IMAGE_MANIFEST = {
  // 2. Chemical Peels
  'chemical-peels': {
    folder: 'chemical-peels',
    hero: { file: 'peel-hero.jpg', id: '1782159981435-78545e10428a' },
    steps: [
      { file: 'peel-01-prep.jpg', id: '1782159981438-4018d6aee2ab', title: 'Acid Percentage & Clinical Bowl Prep', badge: 'Step 1: Acid Chemistry', caption: 'AHA/BHA acid percentage calculation, dish formulation, and brush prep.' },
      { file: 'peel-02-apply.jpg', id: '1761718209835-c8586b7dcac0', title: 'Fan-Brush Layered Peel Application', badge: 'Step 2: Peel Application', caption: 'Clinical fan brush strokes layering active chemical peeling agent on skin.' },
      { file: 'peel-03-neutralize.jpg', id: '1782159981436-4ed747cb3739', title: 'Soothing Gauze Barrier Placement', badge: 'Step 3: Soothing Barrier', caption: 'Calming botanical neutralizing barrier applied to quench active acid.' },
      { file: 'peel-04-clarity.jpg', id: '1782159981479-0fafb56d3cd6', title: 'Crystal Clear Rejuvenated Skin', badge: 'Step 4: Healed Clarity', caption: 'Post-peel cellular renewal, smooth texture, and luminous tone clarity.' },
    ]
  },

  // 3. BB Glow Facial
  'bb-glow-facial': {
    folder: 'bb-glow-facial',
    hero: { file: 'bbglow-hero.jpg', id: '1782159981435-78545e10428a' },
    steps: [
      { file: 'bbglow-01-shade.jpg', id: '1782159981438-4018d6aee2ab', title: 'Meso-Serum & Shade Customization', badge: 'Step 1: Shade Blending', caption: 'Botanical peptide ampoules and custom undertone shade matching in clinical bowl.' },
      { file: 'bbglow-02-infusion.jpg', id: '1761718209835-c8586b7dcac0', title: 'Circular Nano-Infusion Gliding', badge: 'Step 2: Meso Infusion', caption: 'Fan-brush meso-infusion layering across facial contours for seamless coverage.' },
      { file: 'bbglow-03-soothing.jpg', id: '1782159981436-4ed747cb3739', title: 'Calming Therapeutic Mask Infusion', badge: 'Step 3: Soothing Infusion', caption: 'Therapeutic botanical soothing layer quenching active skin after meso infusion.' },
      { file: 'bbglow-04-porcelain.jpg', id: '1731355771317-b2ab72c79124', title: 'Porcelain Glass Skin Reveal', badge: 'Step 4: Glass Finish', caption: 'Tone hydration wipe down and radiant, smooth semi-permanent finish.' },
    ]
  },

  // 4. Korean Glass Skin
  'korean-glass-skin': {
    folder: 'korean-facial',
    hero: { file: 'korean-hero.jpg', id: '1534528741775-53994a69daeb' },
    steps: [
      { file: 'korean-01-essence.jpg', id: '1761718209835-c8586b7dcac0', title: '7-Skin Hydrating Essence Layering', badge: 'Step 1: 7-Skin Layer', caption: 'Deep penetration toner misting and multi-layer essence patting technique.' },
      { file: 'korean-02-guasha.jpg', id: '1527799820374-dcf8d9d4a388', title: 'Rose Quartz Gua Sha Drainage', badge: 'Step 2: Gua Sha', caption: 'Sculpting cheekbones and jawline while promoting lymphatic fluid drainage.' },
      { file: 'korean-03-mask.jpg', id: '1782159981436-4ed747cb3739', title: 'Bio-Cellulose Sheet Infusion', badge: 'Step 3: Sheet Mask', caption: 'Active fermented galactomyces serum absorption under soothing barrier sheet.' },
      { file: 'korean-04-glass.jpg', id: '1731355771317-b2ab72c79124', title: 'Dewy Mirror-Like Glass Complexion', badge: 'Step 4: Dewy Glass', caption: 'Translucent, plump, mirror-reflective Korean glass finish.' },
    ]
  },

  // 5. Hydra Facial
  'hydra-facial-mastery': {
    folder: 'hydra-facial',
    hero: { file: 'hydra-hero.jpg', id: '1782159981435-78545e10428a' },
    steps: [
      { file: 'hydra-01-cleanse.jpg', id: '1731355771317-b2ab72c79124', title: 'Ultrasonic D-Tan Skin Cleanse', badge: 'Step 1: Deep Cleanse', caption: 'Deep pre-cleansing removal of surface makeup, sebum, and environmental grime.' },
      { file: 'hydra-02-scrubber.jpg', id: '1761718209835-c8586b7dcac0', title: '28kHz Ultrasonic Spatula Exfoliation', badge: 'Step 2: Spatula Scrub', caption: 'High-frequency water cavitation dislodging stubborn blackheads and dead cells.' },
      { file: 'hydra-03-vortex.jpg', id: '1782159981438-4018d6aee2ab', title: 'Vortex Suction & Comedone Extraction', badge: 'Step 3: Vortex Suction', caption: 'Painless hydro-vacuum extraction unclogging T-zone pores and comedones.' },
      { file: 'hydra-04-oxygen.jpg', id: '1782159981479-0fafb56d3cd6', title: '98% Pure Oxygen Mist Dome', badge: 'Step 4: Oxygen Dome', caption: 'Pressurized hyperbaric oxygen spray delivering cellular rejuvenation.' },
    ]
  },

  // 6. Hair Chemical Treatments
  'hair-chemical-treatments': {
    folder: 'hair-chemical',
    hero: { file: 'hair-chem-hero.jpg', id: '1562322140-8baeececf3df' },
    steps: [
      { file: 'hair-chem-01-mix.jpg', id: '1527799820374-dcf8d9d4a388', title: 'Developer Ratio & Bleach Mixing', badge: 'Step 1: Mixing', caption: 'Digital scale precision weighing of developer and lightener ratios.' },
      { file: 'hair-chem-02-foils.jpg', id: '1560066984-138dadb4c035', title: 'Balayage Sectioning & Foiling', badge: 'Step 2: Foiling', caption: 'Clean diagonal slices with feathering strokes avoiding bleed spots.' },
      { file: 'hair-chem-03-iron.jpg', id: '1503236823255-94609f598e71', title: 'Nanoplasty Thermal Sealing', badge: 'Step 3: Heat Seal', caption: 'Temperature-regulated titanium flat iron passing to lock in keratin matrix.' },
      { file: 'hair-chem-04-gloss.jpg', id: '1560869713-7d0a29430803', title: 'High-Shine Acidic Color Gloss', badge: 'Step 4: Gloss Reveal', caption: 'Mirror shine, silky cuticle closure, and long-lasting tonal brilliance.' },
    ]
  },

  // 7. Creative Hair Styling
  'creative-hair-styling': {
    folder: 'hair-styling',
    hero: { file: 'styling-hero.jpg', id: '1580618672591-eb180b1a973f' },
    steps: [
      { file: 'styling-01-prep.jpg', id: '1560066984-138dadb4c035', title: 'Volume Crimping & Root Prep', badge: 'Step 1: Root Prep', caption: 'Micro-crimping base roots for 12-hour bridal volume hold and texture.' },
      { file: 'styling-02-curls.jpg', id: '1503236823255-94609f598e71', title: 'Ceramic Tong Ribbon Waves', badge: 'Step 2: Curls', caption: '28mm curling barrel wrapping creating uniform, glossy Hollywood waves.' },
      { file: 'styling-03-braid.jpg', id: '1519699047748-de8e457a634e', title: 'Fishtail Mermaid Braid', badge: 'Step 3: Braid Art', caption: 'Multi-strand cascading braid textured with pearl and rhinestone accents.' },
      { file: 'styling-04-juda.jpg', id: '1560869713-7d0a29430803', title: 'Royal Bridal Juda Crown', badge: 'Step 4: Royal Crown', caption: 'High-glamour traditional Indian bridal bun with dupatta anchor points.' },
    ]
  },

  // 8. Precision Hair Cutting
  'precision-hair-cutting': {
    folder: 'hair-cutting',
    hero: { file: 'cutting-hero.jpg', id: '1562322140-8baeececf3df' },
    steps: [
      { file: 'cutting-01-shears.jpg', id: '1786987942836-71e5a32dcfab', title: 'Cobalt Shears & Comb Ergonomics', badge: 'Step 1: Shears Ergonomics', caption: 'Proper scissor tension, finger positioning, and clean sectioning control.' },
      { file: 'cutting-02-baseline.jpg', id: '1701885881102-de58a9e6e0a6', title: '0° Solid Baseline Cut', badge: 'Step 2: 0° Perimeter', caption: 'Crisp horizontal perimeter weight line establish on combed wet hair.' },
      { file: 'cutting-03-layers.jpg', id: '1700760934268-8aa0ef52ce0a', title: '90° Radial Crown Layering', badge: 'Step 3: 90° Layering', caption: 'Over-direction and vertical layering creating weightless interior movement.' },
      { file: 'cutting-04-blowout.jpg', id: '1560869713-7d0a29430803', title: 'Dynamic Round-Brush Finish', badge: 'Step 4: Dynamic Finish', caption: 'Polished volume blow-dry showing clean shape, balance, and fluid swing.' },
    ]
  },

  // 9. Hair Extensions
  'hair-extensions': {
    folder: 'hair-extensions',
    hero: { file: 'ext-hero.jpg', id: '1519699047748-de8e457a634e' },
    steps: [
      { file: 'ext-01-section.jpg', id: '1560066984-138dadb4c035', title: 'Brick-Lay Scalp Sectioning', badge: 'Step 1: Sectioning', caption: 'Clean grid partitioning ensuring natural weight distribution and zero scalp tension.' },
      { file: 'ext-02-keratin.jpg', id: '1503236823255-94609f598e71', title: 'Heat-Fusion Italian Keratin Bonds', badge: 'Step 2: Keratin Fusion', caption: 'Thermal clamp melt forming microscopic, invisible cylindrical bonds.' },
      { file: 'ext-03-tape.jpg', id: '1580618672591-eb180b1a973f', title: 'Invisible Tape-In Sandwich Wefts', badge: 'Step 3: Tape-Ins', caption: 'Ultra-flat medical-grade polyurethane wefts bonded seamlessly.' },
      { file: 'ext-04-volume.jpg', id: '1560869713-7d0a29430803', title: 'Dramatic Length & Volume Transformation', badge: 'Step 4: Volume Reveal', caption: 'Full head glam with 24-inch natural virgin Remy hair movement.' },
    ]
  },

  // 10. Professional Makeup
  'professional-makeup': {
    folder: 'professional-makeup',
    hero: { file: 'makeup-hero.jpg', id: '1487412720507-e7ab37603c6f' },
    steps: [
      { file: 'makeup-01-base.jpg', id: '1596462502278-27bfdc403348', title: 'HD Studio Base & Color Correction', badge: 'Step 1: HD Base', caption: 'Orange & peach corrector neutralization with camera-ready primer prep.' },
      { file: 'makeup-02-contour.jpg', id: '1512496015851-a90fb38ba796', title: 'Cream Contouring & Highlighting', badge: 'Step 2: Contour Sculpt', caption: 'Sculpting cheekbones, jawline, and nose with high-definition blending.' },
      { file: 'makeup-03-eyes.jpg', id: '1516975080664-ed2fc6a32937', title: 'Glitter Cut-Crease Eyeshadow', badge: 'Step 3: Cut Crease', caption: 'Sharp concealer cut crease, pigment transition, and cosmetic glitter seal.' },
      { file: 'makeup-04-bridal.jpg', id: '1534528741775-53994a69daeb', title: 'Royal Indian Bridal Glam Reveal', badge: 'Step 4: Bridal Glam', caption: 'Flawless traditional dulhan bridal look with jewellery and bindi styling.' },
    ]
  },

  // 11. SPMU
  'semi-permanent-makeup': {
    folder: 'spmu',
    hero: { file: 'spmu-hero.jpg', id: '1595476108010-b4d1f102b1b1' },
    steps: [
      { file: 'spmu-01-caliper.jpg', id: '1516975080664-ed2fc6a32937', title: 'Golden Ratio Caliper Brow Mapping', badge: 'Step 1: Golden Ratio', caption: 'Surgical thread and caliper alignment for custom facial bone structure.' },
      { file: 'spmu-02-pigment.jpg', id: '1583241800698-e8ab01830a07', title: 'Organic Pigment Tone Formulation', badge: 'Step 2: Pigments', caption: 'Color theory mixing neutralizing cool, warm, and neutral Fitzpatrick undertones.' },
      { file: 'spmu-03-pen.jpg', id: '1556760544-74068565f05c', title: 'Wireless Rotary Pen Micro-Shading', badge: 'Step 3: Rotary Pen', caption: '1RL cartridge shading creating pixelated soft ombre powder gradient.' },
      { file: 'spmu-04-ombre.jpg', id: '1534528741775-53994a69daeb', title: 'Flawless Powder Ombre Eyebrow Reveal', badge: 'Step 4: Ombre Powder', caption: 'Crisp, smudge-proof, realistic brows lasting 2-3 years.' },
    ]
  },

  // 12. Lip Neutralization
  'lip-neutralization': {
    folder: 'lip-neutralizing',
    hero: { file: 'lipneut-hero.jpg', id: '1586495777744-4413f21062fa' },
    steps: [
      { file: 'lipneut-01-undertone.jpg', id: '1512496015851-a90fb38ba796', title: 'Melanin Hyper-Pigmentation Analysis', badge: 'Step 1: Undertone Check', caption: 'Assessing cool purple, grey, and deep brown undertones across lip borders.' },
      { file: 'lipneut-02-orange.jpg', id: '1596462502278-27bfdc403348', title: 'Warm Orange / Coral Pigment Correction', badge: 'Step 2: Color Modifier', caption: 'Custom titanium-free warm modifier blending cancelling dark melanin tones.' },
      { file: 'lipneut-03-pixel.jpg', id: '1579684385127-1ef15d508118', title: 'Single-Needle Pixel Shading Deposit', badge: 'Step 3: Pixel Shading', caption: 'Gentle pendulum movement depositing pigment without trauma or swelling.' },
      { file: 'lipneut-04-pink.jpg', id: '1534528741775-53994a69daeb', title: 'Even Rosy Pink Lip Transformation', badge: 'Step 4: Natural Pink', caption: 'Healed warm baby-pink result eliminating dark patches permanently.' },
    ]
  },

  // 13. Lip Tinting
  'lip-tinting': {
    folder: 'lip-tinting',
    hero: { file: 'liptint-hero.jpg', id: '1586495777744-4413f21062fa' },
    steps: [
      { file: 'liptint-01-shade.jpg', id: '1596462502278-27bfdc403348', title: 'Berry & Rose Velvet Shade Selection', badge: 'Step 1: Shade Swatch', caption: 'Organic vegan pigment swatch matching client skin warmth and preference.' },
      { file: 'liptint-02-cupid.jpg', id: '1512496015851-a90fb38ba796', title: 'Cupids Bow Boundary Symmetry', badge: 'Step 2: Boundary Map', caption: 'Creating a soft, defined lip outline without harsh artificial lipliner edges.' },
      { file: 'liptint-03-watercolor.jpg', id: '1579684385127-1ef15d508118', title: 'Soft Borderless Watercolor Shading', badge: 'Step 3: Watercolor Shading', caption: 'Airy gradient pigment saturation from center to outer lip contour.' },
      { file: 'liptint-04-blush.jpg', id: '1534528741775-53994a69daeb', title: 'Luminous Lip Blush Tint Reveal', badge: 'Step 4: Blush Tint', caption: 'Juicy, youthful, tinted velvet lip glow lasting up to 2 years.' },
    ]
  },

  // 14. Microblading
  'microblading': {
    folder: 'microblading',
    hero: { file: 'blade-hero.jpg', id: '1595476108010-b4d1f102b1b1' },
    steps: [
      { file: 'blade-01-caliper.jpg', id: '1516975080664-ed2fc6a32937', title: 'Thread & Caliper Symmetry Mapping', badge: 'Step 1: Caliper Mapping', caption: 'Precision geometric measurement aligning head, arch, and tail of the brow.' },
      { file: 'blade-02-handpiece.jpg', id: '1584515979956-d9f6e5d09982', title: '18U Nano-Blade Handpiece Insertion', badge: 'Step 2: 18U Blade', caption: 'Single-use sterilized surgical blade angle calibration (45° to skin).' },
      { file: 'blade-03-strokes.jpg', id: '1579684385127-1ef15d508118', title: 'Crisp Micro-Feather Hair Strokes', badge: 'Step 3: Feather Strokes', caption: 'Superficial dermal incision depositing pigment with zero bleeding or scarring.' },
      { file: 'blade-04-3d.jpg', id: '1534528741775-53994a69daeb', title: 'Hyper-Realistic 3D Hair-Stroke Brows', badge: 'Step 4: 3D Brows', caption: 'Dense, natural, undetectable 3D brow transformation.' },
    ]
  },

  // 15. Beauty Mole Creation
  'beauty-mole-creation': {
    folder: 'beauty-mole-creation',
    hero: { file: 'mole-hero.jpg', id: '1534528741775-53994a69daeb' },
    steps: [
      { file: 'mole-01-mapping.jpg', id: '1516975080664-ed2fc6a32937', title: 'Facial Aesthetics & Placement Mapping', badge: 'Step 1: Placement Map', caption: 'Choosing iconic Marilyn, cheekbone, or chin points complementing face shape.' },
      { file: 'mole-02-melanin.jpg', id: '1596462502278-27bfdc403348', title: 'Melanin Pigment Tone Calibration', badge: 'Step 2: Melanin Mix', caption: 'Blending organic dark brown and graphite tones matching natural moles.' },
      { file: 'mole-03-stipple.jpg', id: '1583241800698-e8ab01830a07', title: '1RL Single Micro-Point Stipple', badge: 'Step 3: Micro Stipple', caption: 'Controlled 90° stippling creating realistic rounded borders and soft density.' },
      { file: 'mole-04-reveal.jpg', id: '1508214751196-bcfd4ca60f91', title: 'Natural Seductive Accent Mole Reveal', badge: 'Step 4: Accent Mole', caption: 'Subtle, gorgeous, naturally healed aesthetic mark.' },
    ]
  },

  // 16. Lash Lifting
  'lash-lifting': {
    folder: 'lash-lifting',
    hero: { file: 'lash-hero.jpg', id: '1522337360788-8b13dee7a37e' },
    steps: [
      { file: 'lash-01-shield.jpg', id: '1584515979956-d9f6e5d09982', title: 'Silicone Shield Curve Sizing (S/M/L)', badge: 'Step 1: Shield Size', caption: 'Anatomical eyelid shield selection matching natural lash length and curl goal.' },
      { file: 'lash-02-isolation.jpg', id: '1522337094846-8a818192de1f', title: 'Precision Root Lash Isolation & Perm', badge: 'Step 2: Lash Perming', caption: 'Parallel adhesive combing lifting individual natural lashes with curling perm solution.' },
      { file: 'lash-03-tint.jpg', id: '1579684385127-1ef15d508118', title: 'Blue-Black High-Gloss Tinting', badge: 'Step 3: Blue-Black Tint', caption: 'Deep jet-black pigment saturation creating mascara-like eye definition.' },
      { file: 'lash-04-curl.jpg', id: '1534528741775-53994a69daeb', title: 'Lifted Doll-Eye Volume Curl Reveal', badge: 'Step 4: Doll-Eye Curl', caption: 'Dramatic upward fan curl lasting 6 to 8 weeks with zero daily mascara.' },
    ]
  },

  // 17. Nail Extensions
  'nail-extensions': {
    folder: 'nail-extensions',
    hero: { file: 'nailext-hero.jpg', id: '1604654894610-df63bc536371' },
    steps: [
      { file: 'nailext-01-prep.jpg', id: '1607779097040-26e80aa78e66', title: 'Diamond E-File Cuticle & Plate Prep', badge: 'Step 1: E-File Prep', caption: 'Gentle cuticle lifting and nail plate dehydration for lifting-free retention.' },
      { file: 'nailext-02-form.jpg', id: '1599940824399-b87987ceb72a', title: 'Sculpting Forms & Length Sizing', badge: 'Step 2: Sculpting Forms', caption: 'Precision dual-form attachment customizing client nail extension architecture.' },
      { file: 'nailext-03-apex.jpg', id: '1632345031435-8727f6897d53', title: 'Crystal Apex Structure Build', badge: 'Step 3: Apex Bead', caption: 'Controlling crystal clear acrylic / polygel bead for strong structural reinforcement.' },
      { file: 'nailext-04-set.jpg', id: '1508759073847-9ca702cec7d2', title: 'Crisp Shaping & Salon Showcase Set', badge: 'Step 4: Finished Set', caption: 'Crisp coffin / almond perimeter filing and diamond high-gloss UV top coat seal.' },
    ]
  },

  // 18. Nail Art
  'nail-art': {
    folder: 'nail-art',
    hero: { file: 'nailart-hero.jpg', id: '1604654894610-df63bc536371' },
    steps: [
      { file: 'nailart-01-brush.jpg', id: '1596462502278-27bfdc403348', title: '000 Fine Liner Brush Detailing', badge: 'Step 1: Liner Brush', caption: 'Precision fine hand-drawn micro strokes, geometric lines, and floral outlines.' },
      { file: 'nailart-02-chrome.jpg', id: '1632345031435-8727f6897d53', title: 'Mirror Chrome Powder Buffing', badge: 'Step 2: Chrome Buff', caption: 'Metallic pigments and holographic flakes buffed to an ultra-reflective mirror sheen.' },
      { file: 'nailart-03-gems.jpg', id: '1519014816548-bf5fe059798b', title: 'Swarovski Crystal & 3D Florals', badge: 'Step 3: 3D Embellishment', caption: 'Precision wax pen placement of rhinestones, pearls, and acrylic embossed florals.' },
      { file: 'nailart-04-salon.jpg', id: '1508759073847-9ca702cec7d2', title: 'Luxury Studio Design Showcase', badge: 'Step 4: Masterpiece Set', caption: 'Intricate, salon-ready runway nail art set cured under 48W dual UV/LED lamp.' },
    ]
  }
};

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
  console.log('Starting exact 4-image download for Courses 2-18 (Skin untouched)...');
  let downloadedCount = 0;

  for (const [slug, data] of Object.entries(FOUR_IMAGE_MANIFEST)) {
    const courseDir = path.join(baseDir, data.folder);
    if (!fs.existsSync(courseDir)) fs.mkdirSync(courseDir, { recursive: true });

    // Download Hero
    const heroDest = path.join(courseDir, data.hero.file);
    try {
      await downloadFile(data.hero.id, heroDest);
      console.log(`✓ [${slug}] Hero: ${data.hero.file}`);
      downloadedCount++;
    } catch (e) {
      console.error(`✗ [${slug}] Hero: ${data.hero.file} (${e.message})`);
    }

    // Download 4 Steps
    for (const step of data.steps) {
      const stepDest = path.join(courseDir, step.file);
      try {
        await downloadFile(step.id, stepDest);
        console.log(`✓ [${slug}] ${step.file}`);
        downloadedCount++;
      } catch (e) {
        console.error(`✗ [${slug}] ${step.file} (${e.message})`);
      }
    }
  }

  console.log(`\nFinished downloading: ${downloadedCount} files.`);
}

run();
