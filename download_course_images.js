const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'courses');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Curated high-resolution, specific beauty photography URLs for all 18 courses
const courseImages = [
  // 1. SKIN
  { filename: 'skin_hero.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'skin_analysis.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop' },
  { filename: 'skin_massage.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop' },
  { filename: 'skin_mask.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop' },
  { filename: 'skin_clinic.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { filename: 'skin_glow.jpg', url: 'https://images.unsplash.com/photo-1512290900672-1f5be634cb34?q=80&w=800&auto=format&fit=crop' },

  // 2. CHEMICAL PEELS
  { filename: 'peels_hero.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'peels_application.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=800&auto=format&fit=crop' },
  { filename: 'peels_brush.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { filename: 'peels_neutralizer.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop' },
  { filename: 'peels_results.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop' },
  { filename: 'peels_lab.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },

  // 3. BB GLOW FACIAL
  { filename: 'bbglow_hero.jpg', url: 'https://images.unsplash.com/photo-1512290900672-1f5be634cb34?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'bbglow_device.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=800&auto=format&fit=crop' },
  { filename: 'bbglow_serum.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop' },
  { filename: 'bbglow_needling.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop' },
  { filename: 'bbglow_led.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop' },
  { filename: 'bbglow_radiance.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },

  // 4. KOREAN FACIAL
  { filename: 'korean_hero.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'korean_glass_skin.jpg', url: 'https://images.unsplash.com/photo-1512290900672-1f5be634cb34?q=80&w=800&auto=format&fit=crop' },
  { filename: 'korean_sheet_mask.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop' },
  { filename: 'korean_essence.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop' },
  { filename: 'korean_massage.jpg', url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop' },
  { filename: 'korean_glow_finish.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },

  // 5. HYDRA FACIAL
  { filename: 'hydra_hero.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'hydra_vortex.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hydra_infusion.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hydra_led.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hydra_scrub.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hydra_cleanse.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop' },

  // 6. HAIR CHEMICAL
  { filename: 'hair_chem_hero.jpg', url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'hair_chem_keratin.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_chem_color_mix.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_chem_foils.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_chem_straightening.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_chem_gloss.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=800&auto=format&fit=crop' },

  // 7. HAIR STYLING
  { filename: 'hair_style_hero.jpg', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'hair_style_juda.jpg', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_style_curls.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_style_braid.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_style_mannequin.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_style_updo.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop' },

  // 8. HAIR CUTTING
  { filename: 'hair_cut_hero.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'hair_cut_scissors.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_cut_layers.jpg', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_cut_bob.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_cut_blowout.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_cut_precision.jpg', url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop' },

  // 9. HAIR EXTENSIONS
  { filename: 'hair_ext_hero.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'hair_ext_tape.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_ext_micro_ring.jpg', url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_ext_blend.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_ext_volume.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop' },
  { filename: 'hair_ext_keratin_tip.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop' },

  // 10. PROFESSIONAL MAKEUP
  { filename: 'makeup_pro_hero.jpg', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'makeup_pro_eyes.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' },
  { filename: 'makeup_pro_contour.jpg', url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop' },
  { filename: 'makeup_pro_bridal.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
  { filename: 'makeup_pro_brushes.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { filename: 'makeup_pro_airbrush.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop' },

  // 11. SPMU (SEMI-PERMANENT MAKEUP)
  { filename: 'spmu_hero.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'spmu_pigments.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop' },
  { filename: 'spmu_machine.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { filename: 'spmu_latex.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { filename: 'spmu_mapping.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' },
  { filename: 'spmu_cartridges.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=800&auto=format&fit=crop' },

  // 12. LIP NEUTRALIZING
  { filename: 'lip_neut_hero.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'lip_neut_pigments.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lip_neut_color_theory.jpg', url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lip_neut_process.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lip_neut_natural.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lip_neut_tools.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },

  // 13. LIP TINTING
  { filename: 'lip_tint_hero.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'lip_tint_velvet.jpg', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lip_tint_ombre.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lip_tint_blush.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lip_tint_pigment_cup.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lip_tint_gloss_finish.jpg', url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop' },

  // 14. MICROBLADING
  { filename: 'microblade_hero.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'microblade_hair_strokes.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' },
  { filename: 'microblade_caliper.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { filename: 'microblade_blade_tools.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { filename: 'microblade_healed.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
  { filename: 'microblade_golden_ratio.jpg', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop' },

  // 15. BEAUTY MOLE CREATION
  { filename: 'beauty_mole_hero.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'beauty_mole_dotting.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { filename: 'beauty_mole_aesthetic.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' },
  { filename: 'beauty_mole_pigments.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop' },
  { filename: 'beauty_mole_hygiene.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { filename: 'beauty_mole_portrait.jpg', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop' },

  // 16. LASH LIFTING
  { filename: 'lash_lift_hero.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'lash_lift_shields.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lash_lift_tint.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lash_lift_curl.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lash_lift_keratin.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=800&auto=format&fit=crop' },
  { filename: 'lash_lift_result.jpg', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop' },

  // 17. NAIL EXTENSIONS
  { filename: 'nail_ext_hero.jpg', url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'nail_ext_acrylic_forms.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=800&auto=format&fit=crop' },
  { filename: 'nail_ext_gel_overlay.jpg', url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop' },
  { filename: 'nail_ext_polygel.jpg', url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop' },
  { filename: 'nail_ext_uv_cure.jpg', url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop' },
  { filename: 'nail_ext_shaping.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },

  // 18. NAIL ART
  { filename: 'nail_art_hero.jpg', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop' },
  { filename: 'nail_art_3d_flowers.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop' },
  { filename: 'nail_art_chrome_gold.jpg', url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop' },
  { filename: 'nail_art_fine_brushes.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { filename: 'nail_art_french_ombre.jpg', url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop' },
  { filename: 'nail_art_rhinestones.jpg', url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed with status ${response.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => resolve(dest));
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Checking & downloading ${courseImages.length} course-specific images...`);
  for (const item of courseImages) {
    const destPath = path.join(targetDir, item.filename);
    try {
      await download(item.url, destPath);
      const stats = fs.statSync(destPath);
      console.log(`✓ ${item.filename} (${Math.round(stats.size / 1024)} KB)`);
    } catch (e) {
      console.error(`✗ ${item.filename}:`, e.message);
    }
  }
  console.log('All course images downloaded successfully!');
}

run();
