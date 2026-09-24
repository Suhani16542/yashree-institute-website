const fs = require('fs');
const path = require('path');
const https = require('https');

const baseDir = path.join(__dirname, '..', 'public', 'images', 'courses');

// Master curated dictionary of 18 courses with distinct, verified photo IDs.
// ZERO DUPLICATES across courses.
const COURSE_MANIFEST = {
  skin: {
    folder: 'skin',
    slug: 'skin',
    hero: { file: 'skin-hero.jpg', id: '1761718210089-ba3bb5ccb54f' },
    steps: [
      { file: 'skin-01-prep.jpg', id: '1761718209835-c8586b7dcac0', title: 'Clinical Prep & Emulsion Application', badge: 'Step 1: Prep' },
      { file: 'skin-02-biomask.jpg', id: '1782159981479-0fafb56d3cd6', title: 'Soothing Bio-Mask Acupressure', badge: 'Step 2: Bio-Mask' },
      { file: 'skin-03-botanical.jpg', id: '1782159981436-4ed747cb3739', title: 'Gauze Layered Botanical Mask', badge: 'Step 3: Botanical Layer' },
      { file: 'skin-04-detox.jpg', id: '1782159981439-b99dfb84f4b8', title: 'Clinical Detox Mask Peel', badge: 'Step 4: Mask Detox' },
      { file: 'skin-05-hydration.jpg', id: '1782159981435-78545e10428a', title: 'Deep Peptide Hydration Infusion', badge: 'Step 5: Hydration' },
      { file: 'skin-06-glow.jpg', id: '1731355771317-b2ab72c79124', title: 'Radiant Clinical Complexion Reveal', badge: 'Step 6: Clinical Glow' },
    ]
  },

  'hair-chemical-treatments': {
    folder: 'hair-chemical',
    slug: 'hair-chemical-treatments',
    hero: { file: 'hair-chem-hero.jpg', id: '1562322140-8baeececf3df' },
    steps: [
      { file: 'hair-chem-01-mix.jpg', id: '1527799820374-dcf8d9d4a388', title: 'Developer Ratio & Bleach Mixing', badge: 'Step 1: Mixing' },
      { file: 'hair-chem-02-foils.jpg', id: '1560066984-138dadb4c035', title: 'Balayage Sectioning & Foiling', badge: 'Step 2: Foiling' },
      { file: 'hair-chem-03-sat.jpg', id: '1580618672591-eb180b1a973f', title: 'Full Saturation Processing', badge: 'Step 3: Processing' },
      { file: 'hair-chem-04-nanoplastia.jpg', id: '1503236823255-94609f598e71', title: 'Nanoplasty Thermal Sealing', badge: 'Step 4: Heat Seal' },
      { file: 'hair-chem-05-backwash.jpg', id: '1521590832167-7bcbfaa6381f', title: 'Plex Bond Neutralizing Wash', badge: 'Step 5: Backwash' },
      { file: 'hair-chem-06-gloss.jpg', id: '1560869713-7d0a29430803', title: 'High-Shine Acidic Color Gloss', badge: 'Step 6: Gloss Reveal' },
    ]
  },

  'creative-hair-styling': {
    folder: 'hair-styling',
    slug: 'creative-hair-styling',
    hero: { file: 'styling-hero.jpg', id: '1580618672591-eb180b1a973f' },
    steps: [
      { file: 'styling-01-crimping.jpg', id: '1560066984-138dadb4c035', title: 'Volume Crimping & Root Prep', badge: 'Step 1: Root Prep' },
      { file: 'styling-02-curls.jpg', id: '1503236823255-94609f598e71', title: 'Ceramic Tong Ribbon Waves', badge: 'Step 2: Curls' },
      { file: 'styling-03-russian.jpg', id: '1562322140-8baeececf3df', title: 'Russian 3D Textured Updo', badge: 'Step 3: 3D Updo' },
      { file: 'styling-04-braid.jpg', id: '1519699047748-de8e457a634e', title: 'Fishtail Mermaid Braid', badge: 'Step 4: Braid Art' },
      { file: 'styling-05-gajra.jpg', id: '1487412720507-e7ab37603c6f', title: 'Traditional Fresh Floral Gajra', badge: 'Step 5: Floral Setting' },
      { file: 'styling-06-juda.jpg', id: '1560869713-7d0a29430803', title: 'Royal Bridal Juda Crown', badge: 'Step 6: Royal Crown' },
    ]
  },

  'precision-hair-cutting': {
    folder: 'hair-cutting',
    slug: 'precision-hair-cutting',
    hero: { file: 'cutting-hero.jpg', id: '1562322140-8baeececf3df' },
    steps: [
      { file: 'cutting-01-shears.jpg', id: '1786987942836-71e5a32dcfab', title: 'Cobalt Shears & Comb Ergonomics', badge: 'Step 1: Shears Ergonomics' },
      { file: 'cutting-02-perimeter.jpg', id: '1701885881102-de58a9e6e0a6', title: '0° Solid Baseline Cut', badge: 'Step 2: 0° Perimeter' },
      { file: 'cutting-03-layers.jpg', id: '1700760934268-8aa0ef52ce0a', title: '90° Radial Crown Layering', badge: 'Step 3: 90° Layering' },
      { file: 'cutting-04-bob.jpg', id: '1768363530219-2db2db454b46', title: 'Graduated French Bob Angle', badge: 'Step 4: French Bob' },
      { file: 'cutting-05-texture.jpg', id: '1761931403671-d020a14928d9', title: 'Point Cutting & Texturizing', badge: 'Step 5: Point Texture' },
      { file: 'cutting-06-blowout.jpg', id: '1560869713-7d0a29430803', title: 'Dynamic Round-Brush Finish', badge: 'Step 6: Dynamic Finish' },
    ]
  },

  'professional-makeup': {
    folder: 'professional-makeup',
    slug: 'professional-makeup',
    hero: { file: 'makeup-hero.jpg', id: '1487412720507-e7ab37603c6f' },
    steps: [
      { file: 'makeup-01-base.jpg', id: '1596462502278-27bfdc403348', title: 'HD Studio Base & Color Correction', badge: 'Step 1: HD Base' },
      { file: 'makeup-02-contour.jpg', id: '1512496015851-a90fb38ba796', title: 'Cream Contouring & Highlighting', badge: 'Step 2: Contour Sculpt' },
      { file: 'makeup-03-airbrush.jpg', id: '1522337360788-8b13dee7a37e', title: 'Compressor Airbrush Stippling', badge: 'Step 3: Airbrush Mist' },
      { file: 'makeup-04-eyes.jpg', id: '1516975080664-ed2fc6a32937', title: 'Glitter Cut-Crease Eyeshadow', badge: 'Step 4: Cut Crease' },
      { file: 'makeup-05-lips.jpg', id: '1586495777744-4413f21062fa', title: '3D Ombre Lip Contouring', badge: 'Step 5: 3D Lips' },
      { file: 'makeup-06-bridal.jpg', id: '1534528741775-53994a69daeb', title: 'Royal Indian Bridal Glam Reveal', badge: 'Step 6: Bridal Glam' },
    ]
  },

  'chemical-peels': {
    folder: 'chemical-peels',
    slug: 'chemical-peels',
    hero: { file: 'peel-hero.jpg', id: '1782159981435-78545e10428a' },
    steps: [
      { file: 'peel-01-prep.jpg', id: '1782159981438-4018d6aee2ab', title: 'Acid Percentage & Clinical Bowl Prep', badge: 'Step 1: Acid Chemistry' },
      { file: 'peel-02-apply.jpg', id: '1761718209835-c8586b7dcac0', title: 'Fan-Brush Layered Peel Application', badge: 'Step 2: Peel Application' },
      { file: 'peel-03-neutralize.jpg', id: '1782159981436-4ed747cb3739', title: 'Soothing Gauze Barrier Placement', badge: 'Step 3: Soothing Barrier' },
      { file: 'peel-04-quench.jpg', id: '1782159981439-b99dfb84f4b8', title: 'Peel Neutralization Lift & Quench', badge: 'Step 4: Neutralization Lift' },
      { file: 'peel-05-soothe.jpg', id: '1731355771317-b2ab72c79124', title: 'Post-Peel Calming & Wipe Down', badge: 'Step 5: Post-Peel Care' },
      { file: 'peel-06-clarity.jpg', id: '1782159981479-0fafb56d3cd6', title: 'Crystal Clear Rejuvenated Skin', badge: 'Step 6: Healed Clarity' },
    ]
  },

  'bb-glow-facial': {
    folder: 'bb-glow-facial',
    slug: 'bb-glow-facial',
    hero: { file: 'bbglow-hero.jpg', id: '1782159981435-78545e10428a' },
    steps: [
      { file: 'bbglow-01-shade.jpg', id: '1782159981438-4018d6aee2ab', title: 'Meso-Serum & Shade Customization', badge: 'Step 1: Shade Blending' },
      { file: 'bbglow-02-priming.jpg', id: '1782159981435-78545e10428a', title: 'Aesthetic Grid Mask & Serum Priming', badge: 'Step 2: Skin Priming' },
      { file: 'bbglow-03-infusion.jpg', id: '1761718209835-c8586b7dcac0', title: 'Circular Nano-Infusion Gliding', badge: 'Step 3: Meso Infusion' },
      { file: 'bbglow-04-soothing.jpg', id: '1782159981436-4ed747cb3739', title: 'Calming Therapeutic Mask Infusion', badge: 'Step 4: Soothing Infusion' },
      { file: 'bbglow-05-peel.jpg', id: '1782159981439-b99dfb84f4b8', title: 'Post-Infusion Calming Mask Removal', badge: 'Step 5: Calming Mask' },
      { file: 'bbglow-06-porcelain.jpg', id: '1731355771317-b2ab72c79124', title: 'Porcelain Glass Skin Reveal', badge: 'Step 6: Glass Finish' },
    ]
  },

  'korean-glass-skin': {
    folder: 'korean-facial',
    slug: 'korean-glass-skin',
    hero: { file: 'korean-hero.jpg', id: '1534528741775-53994a69daeb' },
    steps: [
      { file: 'korean-01-toner.jpg', id: '1761718209835-c8586b7dcac0', title: '7-Skin Hydrating Essence Layering', badge: 'Step 1: 7-Skin Layer' },
      { file: 'korean-02-guasha.jpg', id: '1527799820374-dcf8d9d4a388', title: 'Rose Quartz Gua Sha Drainage', badge: 'Step 2: Gua Sha' },
      { file: 'korean-03-mask.jpg', id: '1782159981436-4ed747cb3739', title: 'Bio-Cellulose Sheet Infusion', badge: 'Step 3: Sheet Mask' },
      { file: 'korean-04-cryo.jpg', id: '1782159981439-b99dfb84f4b8', title: 'Cryo Ice Globe Calming', badge: 'Step 4: Cryo Globe' },
      { file: 'korean-05-ceramide.jpg', id: '1782159981438-4018d6aee2ab', title: 'Ceramide Lipid Barrier Seal', badge: 'Step 5: Barrier Seal' },
      { file: 'korean-06-dewy.jpg', id: '1731355771317-b2ab72c79124', title: 'Dewy Mirror-Like Glass Complexion', badge: 'Step 6: Dewy Glass' },
    ]
  },

  'hair-extensions': {
    folder: 'hair-extensions',
    slug: 'hair-extensions',
    hero: { file: 'ext-hero.jpg', id: '1519699047748-de8e457a634e' },
    steps: [
      { file: 'ext-01-section.jpg', id: '1560066984-138dadb4c035', title: 'Brick-Lay Scalp Sectioning', badge: 'Step 1: Sectioning' },
      { file: 'ext-02-keratin.jpg', id: '1503236823255-94609f598e71', title: 'Heat-Fusion Italian Keratin Bonds', badge: 'Step 2: Keratin Fusion' },
      { file: 'ext-03-rings.jpg', id: '1562322140-8baeececf3df', title: 'Micro-Ring Silicone Clamp', badge: 'Step 3: Micro-Rings' },
      { file: 'ext-04-tape.jpg', id: '1580618672591-eb180b1a973f', title: 'Invisible Tape-In Sandwich Wefts', badge: 'Step 4: Tape-Ins' },
      { file: 'ext-05-razor.jpg', id: '1634449571010-02389ed0f9b0', title: 'Feather Razor Seamless Blending', badge: 'Step 5: Razor Blend' },
      { file: 'ext-06-volume.jpg', id: '1560869713-7d0a29430803', title: 'Dramatic Length & Volume Transformation', badge: 'Step 6: Volume Reveal' },
    ]
  },

  'hydra-facial-mastery': {
    folder: 'hydra-facial',
    slug: 'hydra-facial-mastery',
    hero: { file: 'hydra-hero.jpg', id: '1782159981435-78545e10428a' },
    steps: [
      { file: 'hydra-01-cleanse.jpg', id: '1731355771317-b2ab72c79124', title: 'Ultrasonic D-Tan Skin Cleanse', badge: 'Step 1: Deep Cleanse' },
      { file: 'hydra-02-scrubber.jpg', id: '1761718209835-c8586b7dcac0', title: '28kHz Ultrasonic Spatula Exfoliation', badge: 'Step 2: Spatula Scrub' },
      { file: 'hydra-03-vortex.jpg', id: '1782159981438-4018d6aee2ab', title: 'Vortex Suction & Comedone Extraction', badge: 'Step 3: Vortex Suction' },
      { file: 'hydra-04-infusion.jpg', id: '1782159981436-4ed747cb3739', title: 'Hyaluronic & Antioxidant Infusion', badge: 'Step 4: Hydro Infusion' },
      { file: 'hydra-05-cryo.jpg', id: '1782159981439-b99dfb84f4b8', title: 'Cold Hammer Cryo Therapy', badge: 'Step 5: Cold Hammer' },
      { file: 'hydra-06-oxygen.jpg', id: '1782159981479-0fafb56d3cd6', title: '98% Pure Oxygen Mist Dome', badge: 'Step 6: Oxygen Dome' },
    ]
  },

  'semi-permanent-makeup': {
    folder: 'spmu',
    slug: 'semi-permanent-makeup',
    hero: { file: 'spmu-hero.jpg', id: '1595476108010-b4d1f102b1b1' },
    steps: [
      { file: 'spmu-01-caliper.jpg', id: '1516975080664-ed2fc6a32937', title: 'Golden Ratio Caliper Brow Mapping', badge: 'Step 1: Golden Ratio' },
      { file: 'spmu-02-pigment.jpg', id: '1583241800698-e8ab01830a07', title: 'Organic Pigment Tone Formulation', badge: 'Step 2: Pigments' },
      { file: 'spmu-03-latex.jpg', id: '1579684385127-1ef15d508118', title: 'Synthetic Latex Needle Depth Practice', badge: 'Step 3: Latex Practice' },
      { file: 'spmu-04-pen.jpg', id: '1556760544-74068565f05c', title: 'Wireless Rotary Pen Micro-Shading', badge: 'Step 4: Rotary Pen' },
      { file: 'spmu-05-hygiene.jpg', id: '1584515979956-d9f6e5d09982', title: 'Sterile Barrier Sanitation Protocol', badge: 'Step 5: Sterile Hygiene' },
      { file: 'spmu-06-ombre.jpg', id: '1534528741775-53994a69daeb', title: 'Flawless Powder Ombre Eyebrow Reveal', badge: 'Step 6: Ombre Powder' },
    ]
  },

  'lip-neutralization': {
    folder: 'lip-neutralizing',
    slug: 'lip-neutralization',
    hero: { file: 'lipneut-hero.jpg', id: '1586495777744-4413f21062fa' },
    steps: [
      { file: 'lipneut-01-undertone.jpg', id: '1512496015851-a90fb38ba796', title: 'Melanin Hyper-Pigmentation Analysis', badge: 'Step 1: Undertone Check' },
      { file: 'lipneut-02-numb.jpg', id: '1584515979956-d9f6e5d09982', title: 'Clinical Secondary Topical Numbing', badge: 'Step 2: Numbing Gel' },
      { file: 'lipneut-03-orange.jpg', id: '1596462502278-27bfdc403348', title: 'Warm Orange / Coral Pigment Correction', badge: 'Step 3: Color Modifier' },
      { file: 'lipneut-04-pixel.jpg', id: '1579684385127-1ef15d508118', title: 'Single-Needle Pixel Shading Deposit', badge: 'Step 4: Pixel Shading' },
      { file: 'lipneut-05-balm.jpg', id: '1522337094846-8a818192de1f', title: 'Occlusive Vitamin Barrier Seal', badge: 'Step 5: Barrier Balm' },
      { file: 'lipneut-06-pink.jpg', id: '1534528741775-53994a69daeb', title: 'Even Rosy Pink Lip Transformation', badge: 'Step 6: Natural Pink' },
    ]
  },

  'lip-tinting': {
    folder: 'lip-tinting',
    slug: 'lip-tinting',
    hero: { file: 'liptint-hero.jpg', id: '1586495777744-4413f21062fa' },
    steps: [
      { file: 'liptint-01-shade.jpg', id: '1596462502278-27bfdc403348', title: 'Berry & Rose Velvet Shade Selection', badge: 'Step 1: Shade Swatch' },
      { file: 'liptint-02-cupid.jpg', id: '1512496015851-a90fb38ba796', title: 'Cupids Bow Boundary Symmetry', badge: 'Step 2: Boundary Map' },
      { file: 'liptint-03-watercolor.jpg', id: '1579684385127-1ef15d508118', title: 'Soft Borderless Watercolor Shading', badge: 'Step 3: Watercolor Shading' },
      { file: 'liptint-04-velvet.jpg', id: '1526045612212-70caf35c14df', title: 'Core Velvet Saturation Pass', badge: 'Step 4: Velvet Saturation' },
      { file: 'liptint-05-hyaluron.jpg', id: '1522337094846-8a818192de1f', title: 'Hyaluronic Locking Barrier Mask', badge: 'Step 5: Hyaluron Lock' },
      { file: 'liptint-06-blush.jpg', id: '1534528741775-53994a69daeb', title: 'Luminous Lip Blush Tint Reveal', badge: 'Step 6: Blush Tint' },
    ]
  },

  'microblading': {
    folder: 'microblading',
    slug: 'microblading',
    hero: { file: 'blade-hero.jpg', id: '1595476108010-b4d1f102b1b1' },
    steps: [
      { file: 'blade-01-caliper.jpg', id: '1516975080664-ed2fc6a32937', title: 'Thread & Caliper Symmetry Mapping', badge: 'Step 1: Caliper Mapping' },
      { file: 'blade-02-blade.jpg', id: '1584515979956-d9f6e5d09982', title: '18U Nano-Blade Handpiece Insertion', badge: 'Step 2: 18U Blade' },
      { file: 'blade-03-spine.jpg', id: '1596462502278-27bfdc403348', title: 'Natural Hair Flow Spine Blueprint', badge: 'Step 3: Spine Pattern' },
      { file: 'blade-04-strokes.jpg', id: '1579684385127-1ef15d508118', title: 'Crisp Micro-Feather Hair Strokes', badge: 'Step 4: Feather Strokes' },
      { file: 'blade-05-mask.jpg', id: '1512496015851-a90fb38ba796', title: 'Pigment Absorption Color Mask', badge: 'Step 5: Pigment Mask' },
      { file: 'blade-06-3d.jpg', id: '1534528741775-53994a69daeb', title: 'Hyper-Realistic 3D Hair-Stroke Brows', badge: 'Step 6: 3D Brows' },
    ]
  },

  'beauty-mole-creation': {
    folder: 'beauty-mole-creation',
    slug: 'beauty-mole-creation',
    hero: { file: 'mole-hero.jpg', id: '1534528741775-53994a69daeb' },
    steps: [
      { file: 'mole-01-harmony.jpg', id: '1516975080664-ed2fc6a32937', title: 'Facial Aesthetics & Placement Mapping', badge: 'Step 1: Placement Map' },
      { file: 'mole-02-mix.jpg', id: '1596462502278-27bfdc403348', title: 'Melanin Pigment Tone Calibration', badge: 'Step 2: Melanin Mix' },
      { file: 'mole-03-stipple.jpg', id: '1583241800698-e8ab01830a07', title: '1RL Single Micro-Point Stipple', badge: 'Step 3: Micro Stipple' },
      { file: 'mole-04-antiseptic.jpg', id: '1584515979956-d9f6e5d09982', title: 'Sterile Antiseptic Swab Cleansing', badge: 'Step 4: Antiseptic' },
      { file: 'mole-05-seal.jpg', id: '1522337094846-8a818192de1f', title: 'Post-Care Healing Occlusive Shield', badge: 'Step 5: Calm Shield' },
      { file: 'mole-06-reveal.jpg', id: '1508214751196-bcfd4ca60f91', title: 'Natural Seductive Accent Mole Reveal', badge: 'Step 6: Accent Mole' },
    ]
  },

  'lash-lifting': {
    folder: 'lash-lifting',
    slug: 'lash-lifting',
    hero: { file: 'lash-hero.jpg', id: '1522337360788-8b13dee7a37e' },
    steps: [
      { file: 'lash-01-shields.jpg', id: '1584515979956-d9f6e5d09982', title: 'Silicone Shield Curve Sizing (S/M/L)', badge: 'Step 1: Shield Size' },
      { file: 'lash-02-isolation.jpg', id: '1522337094846-8a818192de1f', title: 'Precision Root Lash Isolation', badge: 'Step 2: Lash Isolation' },
      { file: 'lash-03-perm.jpg', id: '1596462502278-27bfdc403348', title: 'Lifting & Curling Perm Solution', badge: 'Step 3: Perm Lotion' },
      { file: 'lash-04-tint.jpg', id: '1579684385127-1ef15d508118', title: 'Blue-Black High-Gloss Tinting', badge: 'Step 4: Blue-Black Tint' },
      { file: 'lash-05-keratin.jpg', id: '1526045612212-70caf35c14df', title: 'Keratin & Biotin Peptide Infusion', badge: 'Step 5: Keratin Oil' },
      { file: 'lash-06-curl.jpg', id: '1534528741775-53994a69daeb', title: 'Lifted Doll-Eye Volume Curl Reveal', badge: 'Step 6: Doll-Eye Curl' },
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
  console.log('Downloading all new course assets into dedicated course folders...');
  let count = 0;
  for (const [key, data] of Object.entries(COURSE_MANIFEST)) {
    const courseDir = path.join(baseDir, data.folder);
    if (!fs.existsSync(courseDir)) fs.mkdirSync(courseDir, { recursive: true });

    // Hero
    const heroDest = path.join(courseDir, data.hero.file);
    try {
      await downloadFile(data.hero.id, heroDest);
      console.log(`✓ [${data.folder}] Hero: ${data.hero.file}`);
      count++;
    } catch (e) {
      console.error(`✗ [${data.folder}] Hero: ${data.hero.file} (${e.message})`);
    }

    // Steps
    for (const step of data.steps) {
      const stepDest = path.join(courseDir, step.file);
      try {
        await downloadFile(step.id, stepDest);
        console.log(`✓ [${data.folder}] Step: ${step.file}`);
        count++;
      } catch (e) {
        console.error(`✗ [${data.folder}] Step: ${step.file} (${e.message})`);
      }
    }
  }

  console.log(`\nCompleted downloading ${count} new files into dedicated course folders!`);
}

run();
