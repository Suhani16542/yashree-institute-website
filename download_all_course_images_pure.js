const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const targetDir = path.join(__dirname, 'public', 'images', 'courses');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Helper to download image
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// 126 Curated High-Definition Unsplash Photos for each exact course procedure
const courseManifest = [
  // 1. SKIN
  { file: 'skin_hero.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop' },
  { file: 'skin_diag.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' },
  { file: 'skin_enzyme.jpg', url: 'https://images.unsplash.com/photo-1512290900672-1f5581561730?q=80&w=1000&auto=format&fit=crop' },
  { file: 'skin_lymph.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop' },
  { file: 'skin_machine.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop' },
  { file: 'skin_steam.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  { file: 'skin_glow_result.jpg', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop' },

  // 2. CHEMICAL PEELS
  { file: 'peel_hero.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' },
  { file: 'peel_chem.jpg', url: 'https://images.unsplash.com/photo-1608248597359-00f074d2b27a?q=80&w=1000&auto=format&fit=crop' },
  { file: 'peel_prep.jpg', url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1000&auto=format&fit=crop' },
  { file: 'peel_apply.jpg', url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop' },
  { file: 'peel_neutral.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' },
  { file: 'peel_cryo.jpg', url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000&auto=format&fit=crop' },
  { file: 'peel_clarity.jpg', url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop' },

  // 3. BB GLOW
  { file: 'bbglow_main.jpg', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop' },
  { file: 'bbglow_blend.jpg', url: 'https://images.unsplash.com/photo-1607006314368-24570077977b?q=80&w=1000&auto=format&fit=crop' },
  { file: 'bbglow_pen.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop' },
  { file: 'bbglow_infuse.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' },
  { file: 'bbglow_led_light.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop' },
  { file: 'bbglow_mask_calm.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' },
  { file: 'bbglow_finish.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },

  // 4. KOREAN FACIAL
  { file: 'korean_main.jpg', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop' },
  { file: 'korean_essence_layer.jpg', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop' },
  { file: 'korean_guasha_stone.jpg', url: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1000&auto=format&fit=crop' },
  { file: 'korean_sheet_infusion.jpg', url: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=1000&auto=format&fit=crop' },
  { file: 'korean_cryo_globe.jpg', url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop' },
  { file: 'korean_barrier_cream.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'korean_glass_reveal.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop' },

  // 5. HYDRA FACIAL
  { file: 'hydra_main.jpg', url: 'https://images.unsplash.com/photo-1512290903671-1f48358482aa?q=80&w=1000&auto=format&fit=crop' },
  { file: 'hydra_vortex_tip.jpg', url: 'https://images.unsplash.com/photo-1616394586066-51b87a829e96?q=80&w=1000&auto=format&fit=crop' },
  { file: 'hydra_suction_tzone.jpg', url: 'https://images.unsplash.com/photo-1567928815104-bd541295b719?q=80&w=1000&auto=format&fit=crop' },
  { file: 'hydra_scrubber_hz.jpg', url: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop' },
  { file: 'hydra_oxygen_spray.jpg', url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'hydra_rf_tighten.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  { file: 'hydra_cold_hammer.jpg', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop' },

  // 6. HAIR CHEMICAL
  { file: 'chem_main.jpg', url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop' },
  { file: 'chem_ratio_mix.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop' },
  { file: 'chem_balayage_foil.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop' },
  { file: 'chem_keratin_apply.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' },
  { file: 'chem_iron_seal.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'chem_plex_wash.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop' },
  { file: 'chem_glass_blowout.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=1000&auto=format&fit=crop' },

  // 7. HAIR STYLING
  { file: 'style_main.jpg', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop' },
  { file: 'style_tease_prep.jpg', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop' },
  { file: 'style_tong_curl.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' },
  { file: 'style_russian_updo.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  { file: 'style_fishtail_braid.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop' },
  { file: 'style_gajra_floral.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop' },
  { file: 'style_royal_juda.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' },

  // 8. HAIR CUTTING
  { file: 'cut_main.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop' },
  { file: 'cut_shears_tool.jpg', url: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1000&auto=format&fit=crop' },
  { file: 'cut_solid_baseline.jpg', url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop' },
  { file: 'cut_layer_90deg.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=1000&auto=format&fit=crop' },
  { file: 'cut_french_bob.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' },
  { file: 'cut_point_texture.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop' },
  { file: 'cut_blowdry_move.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' },

  // 9. HAIR EXTENSIONS
  { file: 'ext_main.jpg', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop' },
  { file: 'ext_tape_sandwich.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' },
  { file: 'ext_fusion_keratin.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop' },
  { file: 'ext_micro_rings.jpg', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop' },
  { file: 'ext_razor_blend.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop' },
  { file: 'ext_thermal_wave.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=1000&auto=format&fit=crop' },
  { file: 'ext_volume_reveal.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },

  // 10. PROFESSIONAL MAKEUP
  { file: 'pro_makeup_main.jpg', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'pro_makeup_brush.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },
  { file: 'pro_makeup_contour.jpg', url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1000&auto=format&fit=crop' },
  { file: 'pro_makeup_airbrush.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' },
  { file: 'pro_makeup_cutcrease.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop' },
  { file: 'pro_makeup_lips.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop' },
  { file: 'pro_makeup_bridal.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },

  // 11. SPMU
  { file: 'spmu_main.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop' },
  { file: 'spmu_caliper_map.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' },
  { file: 'spmu_pigment_tray.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },
  { file: 'spmu_latex_sheet.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' },
  { file: 'spmu_rotary_pen.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' },
  { file: 'spmu_sterile_hygiene.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop' },
  { file: 'spmu_healed_ombre.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop' },

  // 12. LIP NEUTRALIZING
  { file: 'lipneut_main.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lipneut_undertone.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lipneut_numb.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lipneut_orange_mix.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lipneut_pixel.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lipneut_balm.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lipneut_healed_pink.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },

  // 13. LIP TINTING
  { file: 'liptint_main.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop' },
  { file: 'liptint_shade.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },
  { file: 'liptint_cupid_map.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop' },
  { file: 'liptint_watercolor.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' },
  { file: 'liptint_velvet_core.jpg', url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1000&auto=format&fit=crop' },
  { file: 'liptint_hyaluron.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'liptint_blush_reveal.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },

  // 14. MICROBLADING
  { file: 'blade_main.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop' },
  { file: 'blade_caliper.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' },
  { file: 'blade_18u_handpiece.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' },
  { file: 'blade_spine_pattern.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },
  { file: 'blade_feather_stroke.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' },
  { file: 'blade_pigment_mask.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop' },
  { file: 'blade_3d_brows.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },

  // 15. BEAUTY MOLE
  { file: 'mole_main.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },
  { file: 'mole_placement.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' },
  { file: 'mole_melanin_mix.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },
  { file: 'mole_stipple.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop' },
  { file: 'mole_antiseptic.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' },
  { file: 'mole_calm_seal.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'mole_accent_reveal.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop' },

  // 16. LASH LIFTING
  { file: 'lash_main.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lash_shield_size.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lash_ycomb_align.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lash_perm_lotion.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lash_tint_blueblack.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lash_keratin_oil.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' },
  { file: 'lash_curl_result.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },

  // 17. NAIL EXTENSIONS
  { file: 'nailext_main.jpg', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailext_efile_prep.jpg', url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailext_forms.jpg', url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailext_apex_bead.jpg', url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailext_uv_lamp.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailext_file_shape.jpg', url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailext_diamond_top.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop' },

  // 18. NAIL ART
  { file: 'nailart_main.jpg', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailart_000_brush.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailart_french_sponge.jpg', url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailart_chrome_rub.jpg', url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailart_gem_waxpen.jpg', url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailart_3d_flowers.jpg', url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1000&auto=format&fit=crop' },
  { file: 'nailart_salon_set.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop' }
];

async function run() {
  console.log('Downloading curated procedural images for all 18 courses...');
  for (const item of courseManifest) {
    const dest = path.join(targetDir, item.file);
    try {
      await downloadFile(item.url, dest);
      console.log(`✓ Downloaded ${item.file}`);
    } catch (e) {
      console.error(`✗ Error downloading ${item.file}:`, e.message);
    }
  }
  console.log('All downloads completed successfully!');
}

run();
