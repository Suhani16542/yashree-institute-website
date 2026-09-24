const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'public', 'images', 'courses');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// 18 Courses x 7 Images (Hero + 6 Masterclass Steps)
// ALL using tested, validated Unsplash IDs
const MASTER_MAP = {
  // 1. Skin & Aesthetic Care
  skin: {
    hero: { filename: 'skin_main.jpg', id: '1570172619644-dfd03ed5d881' },
    steps: [
      { filename: 'skin_diag.jpg', id: '1522337094846-8a818192de1f', badge: 'Step 1: Diagnostics' },
      { filename: 'skin_machine.jpg', id: '1583241800698-e8ab01830a07', badge: 'Step 2: Enzyme Prep' },
      { filename: 'skin_steam.jpg', id: '1540555700478-4be289fbecef', badge: 'Step 3: Lymph Drainage' },
      { filename: 'skin_massage.jpg', id: '1527799820374-dcf8d9d4a388', badge: 'Step 4: Machine Extraction' },
      { filename: 'skin_mask.jpg', id: '1515377905703-c4788e51af15', badge: 'Step 5: Hydrojelly Infusion' },
      { filename: 'skin_glow_result.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: Clinical Glow' },
    ]
  },

  // 2. Chemical Peels
  peels: {
    hero: { filename: 'peel_main.jpg', id: '1515377905703-c4788e51af15' },
    steps: [
      { filename: 'peel_prep.jpg', id: '1556760544-74068565f05c', badge: 'Step 1: Degreasing Prep' },
      { filename: 'peel_apply.jpg', id: '1522337094846-8a818192de1f', badge: 'Step 2: AHA/BHA Application' },
      { filename: 'peel_neutral.jpg', id: '1583241800698-e8ab01830a07', badge: 'Step 3: Neutralization' },
      { filename: 'peel_cryo.jpg', id: '1540555700478-4be289fbecef', badge: 'Step 4: Cryo Globe Soothe' },
      { filename: 'peel_clarity.jpg', id: '1570172619644-dfd03ed5d881', badge: 'Step 5: Barrier Seal' },
      { filename: 'peel_reveal.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: Clear Skin Reveal' },
    ]
  },

  // 3. BB Glow
  bbglow: {
    hero: { filename: 'bbglow_main.jpg', id: '1522337094846-8a818192de1f' },
    steps: [
      { filename: 'bbglow_infuse.jpg', id: '1583241800698-e8ab01830a07', badge: 'Step 1: Shade Matching' },
      { filename: 'bbglow_needling.jpg', id: '1570172619644-dfd03ed5d881', badge: 'Step 2: Nano Infusion' },
      { filename: 'bbglow_led_light.jpg', id: '1579684385127-1ef15d508118', badge: 'Step 3: LED Photon Therapy' },
      { filename: 'bbglow_mask_calm.jpg', id: '1515377905703-c4788e51af15', badge: 'Step 4: Calming Sheet Mask' },
      { filename: 'bbglow_finish.jpg', id: '1540555700478-4be289fbecef', badge: 'Step 5: Peptide Lock' },
      { filename: 'bbglow_porcelain.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: Semi-Permanent Glow' },
    ]
  },

  // 4. Korean Glass Skin
  korean: {
    hero: { filename: 'korean_main.jpg', id: '1534528741775-53994a69daeb' },
    steps: [
      { filename: 'korean_essence_layer.jpg', id: '1522337094846-8a818192de1f', badge: 'Step 1: 7-Skin Layering' },
      { filename: 'korean_guasha_stone.jpg', id: '1527799820374-dcf8d9d4a388', badge: 'Step 2: Gua Sha Drainage' },
      { filename: 'korean_sheet_infusion.jpg', id: '1515377905703-c4788e51af15', badge: 'Step 3: Bio-Cellulose Mask' },
      { filename: 'korean_cryo_globe.jpg', id: '1540555700478-4be289fbecef', badge: 'Step 4: Cryo Globe Calming' },
      { filename: 'korean_barrier_cream.jpg', id: '1583241800698-e8ab01830a07', badge: 'Step 5: Ceramide Barrier' },
      { filename: 'korean_glass_reveal.jpg', id: '1570172619644-dfd03ed5d881', badge: 'Step 6: Glass Finish' },
    ]
  },

  // 5. Hydra Facial
  hydra: {
    hero: { filename: 'hydra_main.jpg', id: '1570172619644-dfd03ed5d881' },
    steps: [
      { filename: 'hydra_cleanse.jpg', id: '1556760544-74068565f05c', badge: 'Step 1: Ultrasonic Cleanse' },
      { filename: 'hydra_scrubber_hz.jpg', id: '1522337094846-8a818192de1f', badge: 'Step 2: 28kHz Scrubber' },
      { filename: 'hydra_vortex.jpg', id: '1583241800698-e8ab01830a07', badge: 'Step 3: Vortex Extraction' },
      { filename: 'hydra_infusion.jpg', id: '1527799820374-dcf8d9d4a388', badge: 'Step 4: Hyaluronic Infusion' },
      { filename: 'hydra_cold_hammer.jpg', id: '1540555700478-4be289fbecef', badge: 'Step 5: Cold Hammer Therapy' },
      { filename: 'hydra_oxygen_spray.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: Oxygen Dome Mist' },
    ]
  },

  // 6. Hair Chemical Treatments
  hairchem: {
    hero: { filename: 'chem_main.jpg', id: '1562322140-8baeececf3df' },
    steps: [
      { filename: 'chem_ratio_mix.jpg', id: '1583241800698-e8ab01830a07', badge: 'Step 1: Developer Mixing' },
      { filename: 'chem_balayage_foil.jpg', id: '1560066984-138dadb4c035', badge: 'Step 2: Balayage Foils' },
      { filename: 'hair_chem_foils.jpg', id: '1580618672591-eb180b1a973f', badge: 'Step 3: Foil Placement' },
      { filename: 'chem_iron_seal.jpg', id: '1503236823255-94609f598e71', badge: 'Step 4: Nanoplasty Iron Seal' },
      { filename: 'chem_plex_wash.jpg', id: '1521590832167-7bcbfaa6381f', badge: 'Step 5: Plex Bond Backwash' },
      { filename: 'hair_chem_gloss.jpg', id: '1560869713-7d0a29430803', badge: 'Step 6: Acidic Color Gloss' },
    ]
  },

  // 7. Creative Hair Styling
  hairstyling: {
    hero: { filename: 'style_main.jpg', id: '1580618672591-eb180b1a973f' },
    steps: [
      { filename: 'style_tease_prep.jpg', id: '1560066984-138dadb4c035', badge: 'Step 1: Root Crimping Prep' },
      { filename: 'style_tong_curl.jpg', id: '1503236823255-94609f598e71', badge: 'Step 2: Ceramic Tong Curls' },
      { filename: 'style_russian_updo.jpg', id: '1562322140-8baeececf3df', badge: 'Step 3: Russian 3D Ribbons' },
      { filename: 'style_fishtail_braid.jpg', id: '1519699047748-de8e457a634e', badge: 'Step 4: Textured Mermaid Braid' },
      { filename: 'style_gajra_floral.jpg', id: '1487412720507-e7ab37603c6f', badge: 'Step 5: Floral Gajra Setting' },
      { filename: 'style_royal_juda.jpg', id: '1560869713-7d0a29430803', badge: 'Step 6: Royal Bridal Crown' },
    ]
  },

  // 8. Precision Hair Cutting
  haircut: {
    hero: { filename: 'cut_main.jpg', id: '1562322140-8baeececf3df' },
    steps: [
      { filename: 'cut_shears_tool.jpg', id: '1503236823255-94609f598e71', badge: 'Step 1: Shears Ergonomics' },
      { filename: 'cut_solid_baseline.jpg', id: '1560066984-138dadb4c035', badge: 'Step 2: 0° Blunt Perimeter' },
      { filename: 'hair_cut_layers.jpg', id: '1634449571010-02389ed0f9b0', badge: 'Step 3: 90° Vertex Layering' },
      { filename: 'cut_french_bob.jpg', id: '1580618672591-eb180b1a973f', badge: 'Step 4: Graduated French Bob' },
      { filename: 'cut_point_texture.jpg', id: '1519699047748-de8e457a634e', badge: 'Step 5: Point & Notch Texture' },
      { filename: 'cut_blowdry_move.jpg', id: '1560869713-7d0a29430803', badge: 'Step 6: Dynamic Movement' },
    ]
  },

  // 9. Hair Extensions
  hairext: {
    hero: { filename: 'ext_main.jpg', id: '1519699047748-de8e457a634e' },
    steps: [
      { filename: 'ext_sectioning.jpg', id: '1560066984-138dadb4c035', badge: 'Step 1: Brick-Lay Sectioning' },
      { filename: 'ext_fusion_keratin.jpg', id: '1503236823255-94609f598e71', badge: 'Step 2: Keratin Fusion Tips' },
      { filename: 'ext_micro_rings.jpg', id: '1562322140-8baeececf3df', badge: 'Step 3: Silicone Micro-Rings' },
      { filename: 'ext_tape_sandwich.jpg', id: '1580618672591-eb180b1a973f', badge: 'Step 4: Invisible Tape Wefts' },
      { filename: 'ext_razor_blend.jpg', id: '1634449571010-02389ed0f9b0', badge: 'Step 5: Feather Razor Blend' },
      { filename: 'ext_volume_reveal.jpg', id: '1560869713-7d0a29430803', badge: 'Step 6: Length & Volume Reveal' },
    ]
  },

  // 10. Professional Makeup
  makeup: {
    hero: { filename: 'pro_makeup_main.jpg', id: '1487412720507-e7ab37603c6f' },
    steps: [
      { filename: 'pro_makeup_brush.jpg', id: '1596462502278-27bfdc403348', badge: 'Step 1: HD Foundation & Base' },
      { filename: 'pro_makeup_contour.jpg', id: '1512496015851-a90fb38ba796', badge: 'Step 2: Cream Contour Sculpt' },
      { filename: 'pro_makeup_airbrush.jpg', id: '1522337360788-8b13dee7a37e', badge: 'Step 3: HD Airbrush Stippling' },
      { filename: 'pro_makeup_cutcrease.jpg', id: '1516975080664-ed2fc6a32937', badge: 'Step 4: Glitter Cut Crease' },
      { filename: 'pro_makeup_lips.jpg', id: '1586495777744-4413f21062fa', badge: 'Step 5: 3D Lip Architecture' },
      { filename: 'pro_makeup_bridal.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: Royal Bridal Glam' },
    ]
  },

  // 11. SPMU
  spmu: {
    hero: { filename: 'spmu_main.jpg', id: '1595476108010-b4d1f102b1b1' },
    steps: [
      { filename: 'spmu_caliper_map.jpg', id: '1516975080664-ed2fc6a32937', badge: 'Step 1: Golden Ratio Mapping' },
      { filename: 'spmu_pigment_tray.jpg', id: '1583241800698-e8ab01830a07', badge: 'Step 2: Pigment Formulations' },
      { filename: 'spmu_latex_sheet.jpg', id: '1579684385127-1ef15d508118', badge: 'Step 3: Needle Depth Mastery' },
      { filename: 'spmu_rotary_pen.jpg', id: '1556760544-74068565f05c', badge: 'Step 4: Wireless Pen Shading' },
      { filename: 'spmu_sterile_hygiene.jpg', id: '1584515979956-d9f6e5d09982', badge: 'Step 5: Clinical Barrier Hygiene' },
      { filename: 'spmu_healed_ombre.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: Healed Ombre Reveal' },
    ]
  },

  // 12. Lip Neutralization
  lipneut: {
    hero: { filename: 'lipneut_main.jpg', id: '1586495777744-4413f21062fa' },
    steps: [
      { filename: 'lipneut_undertone.jpg', id: '1512496015851-a90fb38ba796', badge: 'Step 1: Melanin Undertone Analysis' },
      { filename: 'lipneut_numb.jpg', id: '1584515979956-d9f6e5d09982', badge: 'Step 2: Secondary Topical Numbing' },
      { filename: 'lipneut_orange_mix.jpg', id: '1596462502278-27bfdc403348', badge: 'Step 3: Warm Orange Modifiers' },
      { filename: 'lipneut_pixel.jpg', id: '1579684385127-1ef15d508118', badge: 'Step 4: Pixel Shading Deposit' },
      { filename: 'lipneut_balm.jpg', id: '1522337094846-8a818192de1f', badge: 'Step 5: Occlusive Healing Balm' },
      { filename: 'lipneut_healed_pink.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: Natural Rose Reveal' },
    ]
  },

  // 13. Lip Tinting
  liptint: {
    hero: { filename: 'liptint_main.jpg', id: '1586495777744-4413f21062fa' },
    steps: [
      { filename: 'liptint_shade.jpg', id: '1596462502278-27bfdc403348', badge: 'Step 1: Blush Shade Selection' },
      { filename: 'liptint_cupid_map.jpg', id: '1512496015851-a90fb38ba796', badge: 'Step 2: Cupids Bow Boundary' },
      { filename: 'liptint_watercolor.jpg', id: '1579684385127-1ef15d508118', badge: 'Step 3: Watercolor Shading' },
      { filename: 'liptint_velvet_core.jpg', id: '1526045612212-70caf35c14df', badge: 'Step 4: Velvet Saturation' },
      { filename: 'liptint_hyaluron.jpg', id: '1522337094846-8a818192de1f', badge: 'Step 5: Hyaluronic Seal' },
      { filename: 'liptint_blush_reveal.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: Tinted Glow Result' },
    ]
  },

  // 14. Microblading
  microblading: {
    hero: { filename: 'blade_main.jpg', id: '1595476108010-b4d1f102b1b1' },
    steps: [
      { filename: 'blade_caliper.jpg', id: '1516975080664-ed2fc6a32937', badge: 'Step 1: Caliper Symmetry Mapping' },
      { filename: 'blade_18u_handpiece.jpg', id: '1584515979956-d9f6e5d09982', badge: 'Step 2: 18U Blade Insertion' },
      { filename: 'blade_spine_pattern.jpg', id: '1596462502278-27bfdc403348', badge: 'Step 3: Natural Hair Flow Spine' },
      { filename: 'blade_feather_stroke.jpg', id: '1579684385127-1ef15d508118', badge: 'Step 4: Fine Feather Strokes' },
      { filename: 'blade_pigment_mask.jpg', id: '1512496015851-a90fb38ba796', badge: 'Step 5: Pigment Color Mask' },
      { filename: 'blade_3d_brows.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: 3D Hyper-Realistic Brows' },
    ]
  },

  // 15. Beauty Mole
  mole: {
    hero: { filename: 'mole_main.jpg', id: '1534528741775-53994a69daeb' },
    steps: [
      { filename: 'mole_placement.jpg', id: '1516975080664-ed2fc6a32937', badge: 'Step 1: Facial Harmony Mapping' },
      { filename: 'mole_melanin_mix.jpg', id: '1596462502278-27bfdc403348', badge: 'Step 2: Melanin Pigment Mix' },
      { filename: 'mole_stipple.jpg', id: '1583241800698-e8ab01830a07', badge: 'Step 3: 1RL Micro Dot Deposit' },
      { filename: 'mole_antiseptic.jpg', id: '1584515979956-d9f6e5d09982', badge: 'Step 4: Antiseptic Swab' },
      { filename: 'mole_calm_seal.jpg', id: '1522337094846-8a818192de1f', badge: 'Step 5: Post-Care Shield' },
      { filename: 'mole_accent_reveal.jpg', id: '1508214751196-bcfd4ca60f91', badge: 'Step 6: Natural Beauty Spot' },
    ]
  },

  // 16. Lash Lifting
  lash: {
    hero: { filename: 'lash_main.jpg', id: '1522337360788-8b13dee7a37e' },
    steps: [
      { filename: 'lash_shield_size.jpg', id: '1584515979956-d9f6e5d09982', badge: 'Step 1: Silicone Shield Placement' },
      { filename: 'lash_lift_shields.jpg', id: '1522337094846-8a818192de1f', badge: 'Step 2: Lash Isolation' },
      { filename: 'lash_perm_lotion.jpg', id: '1596462502278-27bfdc403348', badge: 'Step 3: Lifting Lotion Application' },
      { filename: 'lash_tint_blueblack.jpg', id: '1579684385127-1ef15d508118', badge: 'Step 4: Blue-Black Tint Saturation' },
      { filename: 'lash_keratin_oil.jpg', id: '1526045612212-70caf35c14df', badge: 'Step 5: Keratin Nourishing Oil' },
      { filename: 'lash_curl_result.jpg', id: '1534528741775-53994a69daeb', badge: 'Step 6: Defined Doll-Eye Curl' },
    ]
  },

  // 17. Nail Extensions
  nailext: {
    hero: { filename: 'nailext_main.jpg', id: '1604654894610-df63bc536371' },
    steps: [
      { filename: 'nailext_efile_prep.jpg', id: '1607779097040-26e80aa78e66', badge: 'Step 1: E-File Cuticle Prep' },
      { filename: 'nailext_forms.jpg', id: '1599940824399-b87987ceb72a', badge: 'Step 2: Sculpting Forms' },
      { filename: 'nailext_apex_bead.jpg', id: '1632345031435-8727f6897d53', badge: 'Step 3: Crystal Apex Bead' },
      { filename: 'nailext_uv_lamp.jpg', id: '1508759073847-9ca702cec7d2', badge: 'Step 4: 48W UV Curing' },
      { filename: 'nailext_file_shape.jpg', id: '1519014816548-bf5fe059798b', badge: 'Step 5: Coffin / Almond Shaping' },
      { filename: 'nail_ext_hero.jpg', id: '1604654894610-df63bc536371', badge: 'Step 6: High-Gloss Top Coat' },
    ]
  },

  // 18. Nail Art
  nailart: {
    hero: { filename: 'nailart_main.jpg', id: '1604654894610-df63bc536371' },
    steps: [
      { filename: 'nailart_000_brush.jpg', id: '1596462502278-27bfdc403348', badge: 'Step 1: Fine Liner Detail' },
      { filename: 'nailart_french_sponge.jpg', id: '1599940824399-b87987ceb72a', badge: 'Step 2: Ombre Gradient Sponge' },
      { filename: 'nailart_chrome_rub.jpg', id: '1632345031435-8727f6897d53', badge: 'Step 3: Mirror Chrome Buff' },
      { filename: 'nailart_gem_waxpen.jpg', id: '1519014816548-bf5fe059798b', badge: 'Step 4: Swarovski Crystal Pen' },
      { filename: 'nailart_3d_flowers.jpg', id: '1607779097040-26e80aa78e66', badge: 'Step 5: 3D Acrylic Flowers' },
      { filename: 'nailart_salon_set.jpg', id: '1508759073847-9ca702cec7d2', badge: 'Step 6: Salon Showcase Set' },
    ]
  }
};

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
  console.log('Downloading all verified 18-course images...');
  let total = 0;
  let success = 0;

  for (const [courseKey, data] of Object.entries(MASTER_MAP)) {
    // Hero
    total++;
    const heroDest = path.join(dir, data.hero.filename);
    const heroUrl = `https://images.unsplash.com/photo-${data.hero.id}?q=80&w=1200&auto=format&fit=crop`;
    try {
      await downloadFile(heroUrl, heroDest);
      console.log(`✓ [${courseKey}] Hero: ${data.hero.filename}`);
      success++;
    } catch (e) {
      console.error(`✗ [${courseKey}] Hero: ${data.hero.filename} -> ${e.message}`);
    }

    // Steps
    for (const step of data.steps) {
      total++;
      const stepDest = path.join(dir, step.filename);
      const stepUrl = `https://images.unsplash.com/photo-${step.id}?q=80&w=1000&auto=format&fit=crop`;
      try {
        await downloadFile(stepUrl, stepDest);
        console.log(`✓ [${courseKey}] Step: ${step.filename}`);
        success++;
      } catch (e) {
        console.error(`✗ [${courseKey}] Step: ${step.filename} -> ${e.message}`);
      }
    }
  }

  console.log(`\nFinished: ${success}/${total} images downloaded successfully.`);
}

run();
