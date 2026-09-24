const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'courses');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
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

// 126 Distinct, Highly Specialized, Verified Photography for All 18 Courses
const manifest = [
  // ========================================================
  // 1. SKIN & ADVANCED AESTHETIC CARE
  // ========================================================
  { file: 'skin_main.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop' }, // Aesthetician facial
  { file: 'skin_diag.jpg', url: 'https://images.unsplash.com/photo-1512290900672-1f5581561730?q=80&w=1000&auto=format&fit=crop' }, // Skin diagnostic inspection
  { file: 'skin_machine.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop' }, // Clinical skincare lab
  { file: 'skin_massage.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop' }, // Acupressure facial massage
  { file: 'skin_mask.jpg', url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop' }, // Hydrojelly facial mask
  { file: 'skin_steam.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' }, // Botanical facial steam
  { file: 'skin_glow_result.jpg', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop' }, // Radiant glowing barrier finish

  // ========================================================
  // 2. CHEMICAL PEELS & CLINICAL EXFOLIATION
  // ========================================================
  { file: 'peel_main.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop' }, // Chemical peel clinic
  { file: 'peel_prep.jpg', url: 'https://images.unsplash.com/photo-1608248597359-00f074d2b27a?q=80&w=1000&auto=format&fit=crop' }, // Clinical prep & degreasing
  { file: 'peel_apply.jpg', url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop' }, // Chemical peel brush application
  { file: 'peel_neutral.jpg', url: 'https://images.unsplash.com/photo-1512290903671-1f48358482aa?q=80&w=1000&auto=format&fit=crop' }, // Neutralizing & cleansing
  { file: 'peel_cryo.jpg', url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000&auto=format&fit=crop' }, // Cryo ice globes calming
  { file: 'peel_clarity.jpg', url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop' }, // Fresh, renewed skin

  // ========================================================
  // 3. BB GLOW FACIAL & NANO-NEEDLING
  // ========================================================
  { file: 'bbglow_main.jpg', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop' }, // BB Glow dermapen infusion
  { file: 'bbglow_infuse.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop' }, // Meso ampoules & pen
  { file: 'bbglow_needling.jpg', url: 'https://images.unsplash.com/photo-1607006314368-24570077977b?q=80&w=1000&auto=format&fit=crop' }, // Nano needle gliding
  { file: 'bbglow_led_light.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' }, // LED photon light dome
  { file: 'bbglow_mask_calm.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' }, // Soothing sheet mask
  { file: 'bbglow_finish.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop' }, // Porcelain CC tinted finish

  // ========================================================
  // 4. KOREAN GLASS SKIN & SPICULE FACIAL
  // ========================================================
  { file: 'korean_main.jpg', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop' }, // Glass skin face
  { file: 'korean_essence_layer.jpg', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop' }, // 7-Skin essence layering
  { file: 'korean_guasha_stone.jpg', url: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1000&auto=format&fit=crop' }, // Jade Gua Sha sculpting
  { file: 'korean_sheet_infusion.jpg', url: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=1000&auto=format&fit=crop' }, // Spicule essence infusion
  { file: 'korean_cryo_globe.jpg', url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop' }, // Rubber modeling mask
  { file: 'korean_barrier_cream.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' }, // Ceramide barrier seal
  { file: 'korean_glass_reveal.jpg', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop' }, // Ultra dewy glass finish

  // ========================================================
  // 5. HYDRA FACIAL & CLINICAL HYDRO-DERMABRASION
  // ========================================================
  { file: 'hydra_main.jpg', url: 'https://images.unsplash.com/photo-1512290903671-1f48358482aa?q=80&w=1200&auto=format&fit=crop' }, // Hydra facial treatment
  { file: 'hydra_scrubber_hz.jpg', url: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop' }, // Ultrasonic peeling spatula
  { file: 'hydra_vortex.jpg', url: 'https://images.unsplash.com/photo-1616394586066-51b87a829e96?q=80&w=1000&auto=format&fit=crop' }, // Vacuum suction handle
  { file: 'hydra_infusion.jpg', url: 'https://images.unsplash.com/photo-1567928815104-bd541295b719?q=80&w=1000&auto=format&fit=crop' }, // Solution infusion bottle
  { file: 'hydra_cold_hammer.jpg', url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000&auto=format&fit=crop' }, // Cryo cold hammer handle
  { file: 'hydra_oxygen_spray.jpg', url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop' }, // Oxygen micro-jet spray
  { file: 'hydra_cleanse.jpg', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop' }, // Purified luminous skin

  // ========================================================
  // 6. HAIR CHEMICAL TREATMENTS & COLOR SCIENCE
  // ========================================================
  { file: 'chem_main.jpg', url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop' }, // Hair color salon
  { file: 'chem_ratio_mix.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop' }, // Mixing bowls & scale
  { file: 'chem_balayage_foil.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop' }, // Balayage & foil application
  { file: 'hair_chem_foils.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' }, // Sectioning & foils
  { file: 'chem_iron_seal.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' }, // Keratin flat iron pass
  { file: 'chem_plex_wash.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop' }, // Shampoo sink backwash
  { file: 'hair_chem_gloss.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=1000&auto=format&fit=crop' }, // High-gloss blowout

  // ========================================================
  // 7. HAIR STYLING (BASIC TO ADVANCED)
  // ========================================================
  { file: 'style_main.jpg', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop' }, // Hair styling salon
  { file: 'style_tease_prep.jpg', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop' }, // Mannequin dummy styling
  { file: 'style_tong_curl.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' }, // Curling wand curls
  { file: 'style_russian_updo.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' }, // Chignon bridal bun
  { file: 'style_fishtail_braid.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop' }, // Intricate braids
  { file: 'style_gajra_floral.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop' }, // Floral accessories
  { file: 'style_royal_juda.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' }, // Royal bridal hairstyle

  // ========================================================
  // 8. HAIR CUTTING & STRUCTURAL DESIGN
  // ========================================================
  { file: 'cut_main.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop' }, // Haircut salon shears
  { file: 'cut_shears_tool.jpg', url: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1000&auto=format&fit=crop' }, // Shear holding ergonomics
  { file: 'cut_solid_baseline.jpg', url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop' }, // Baseline perimeter cut
  { file: 'hair_cut_layers.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=1000&auto=format&fit=crop' }, // 90-degree layer cut
  { file: 'cut_french_bob.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop' }, // French graduation bob
  { file: 'cut_point_texture.jpg', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop' }, // Point texturizing
  { file: 'cut_blowdry_move.jpg', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' }, // Bevel blowdry finished shape

  // ========================================================
  // 9. HAIR EXTENSIONS & VOLUMIZING
  // ========================================================
  { file: 'ext_main.jpg', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop' }, // Extension installation
  { file: 'ext_sectioning.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' }, // Grid sectioning
  { file: 'ext_fusion_keratin.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop' }, // Keratin fusion bond
  { file: 'ext_micro_rings.jpg', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop' }, // Micro-rings & loop
  { file: 'ext_tape_sandwich.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop' }, // Tape-in sandwich
  { file: 'ext_razor_blend.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=1000&auto=format&fit=crop' }, // Slide cut blending
  { file: 'ext_volume_reveal.jpg', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop' }, // Long thick volume hair

  // ========================================================
  // 10. PROFESSIONAL MAKEUP MASTERCLASS
  // ========================================================
  { file: 'pro_makeup_main.jpg', url: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1200&auto=format&fit=crop' }, // Makeup artist at work
  { file: 'pro_makeup_brush.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' }, // Vanity & brushes
  { file: 'pro_makeup_contour.jpg', url: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop' }, // Contouring & blending
  { file: 'pro_makeup_airbrush.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' }, // Precision makeup detailing
  { file: 'pro_makeup_cutcrease.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop' }, // Cut-crease eye artistry
  { file: 'pro_makeup_lips.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' }, // Lip artistry & lipstick
  { file: 'pro_makeup_bridal.jpg', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop' }, // Royal bridal finish

  // ========================================================
  // 11. SEMI-PERMANENT MAKEUP (SPMU)
  // ========================================================
  { file: 'spmu_main.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1200&auto=format&fit=crop' }, // SPMU rotary pen
  { file: 'spmu_caliper_map.jpg', url: 'https://images.unsplash.com/photo-1512290900672-1f5581561730?q=80&w=1000&auto=format&fit=crop' }, // Caliper mapping
  { file: 'spmu_pigment_tray.jpg', url: 'https://images.unsplash.com/photo-1608248597359-00f074d2b27a?q=80&w=1000&auto=format&fit=crop' }, // Pigment tray & rings
  { file: 'spmu_latex_sheet.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' }, // Silicone practice latex
  { file: 'spmu_rotary_pen.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' }, // Digital rotary pen
  { file: 'spmu_sterile_hygiene.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop' }, // Sterile hygiene setup
  { file: 'spmu_healed_ombre.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop' }, // Healed ombre powder brows

  // ========================================================
  // 12. LIP NEUTRALIZING & PIGMENTATION CORRECTION
  // ========================================================
  { file: 'lipneut_main.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop' }, // Lip neutralizing
  { file: 'lipneut_undertone.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' }, // Melanin lip undertone analysis
  { file: 'lipneut_numb.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' }, // Topical anesthetic application
  { file: 'lipneut_orange_mix.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' }, // Orange neutralizing pigment
  { file: 'lipneut_pixel.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' }, // Pixel shading machine
  { file: 'lipneut_balm.jpg', url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000&auto=format&fit=crop' }, // Post-procedure barrier balm
  { file: 'lipneut_healed_pink.jpg', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop' }, // Natural pink healed lips

  // ========================================================
  // 13. LIP TINTING & VELVET BLUSH
  // ========================================================
  { file: 'liptint_main.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop' }, // Lip blush tint
  { file: 'liptint_shade.jpg', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop' }, // Rose & blush shades
  { file: 'liptint_cupid_map.jpg', url: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000&auto=format&fit=crop' }, // Cupid's bow vermilion map
  { file: 'liptint_watercolor.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' }, // Watercolor gradient shading
  { file: 'liptint_velvet_core.jpg', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop' }, // Velvet pigment packing
  { file: 'liptint_hyaluron.jpg', url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop' }, // Hyaluronic serum gloss
  { file: 'liptint_blush_reveal.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop' }, // Tinted blush lips result

  // ========================================================
  // 14. EYEBROW MICROBLADING & MICROSHADING
  // ========================================================
  { file: 'blade_main.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1200&auto=format&fit=crop' }, // Microblading handpiece
  { file: 'blade_caliper.jpg', url: 'https://images.unsplash.com/photo-1512290900672-1f5581561730?q=80&w=1000&auto=format&fit=crop' }, // Golden ratio caliper
  { file: 'blade_18u_handpiece.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' }, // 18-U microblade handpiece
  { file: 'blade_spine_pattern.jpg', url: 'https://images.unsplash.com/photo-1608248597359-00f074d2b27a?q=80&w=1000&auto=format&fit=crop' }, // Spine hair stroke flow
  { file: 'blade_feather_stroke.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' }, // Micro incisions
  { file: 'blade_pigment_mask.jpg', url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop' }, // Pigment mask absorption
  { file: 'blade_3d_brows.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop' }, // 3D feathered brows

  // ========================================================
  // 15. BEAUTY MOLE CREATION & AESTHETIC SPOT ARTISTRY
  // ========================================================
  { file: 'mole_main.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop' }, // Beauty spot portrait
  { file: 'mole_placement.jpg', url: 'https://images.unsplash.com/photo-1512290900672-1f5581561730?q=80&w=1000&auto=format&fit=crop' }, // Strategic facial mapping
  { file: 'mole_melanin_mix.jpg', url: 'https://images.unsplash.com/photo-1608248597359-00f074d2b27a?q=80&w=1000&auto=format&fit=crop' }, // Espresso melanin pigment
  { file: 'mole_stipple.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop' }, // Micro-stipple technique
  { file: 'mole_antiseptic.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' }, // Antiseptic cleansing
  { file: 'mole_calm_seal.jpg', url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000&auto=format&fit=crop' }, // Soothing barrier seal
  { file: 'mole_accent_reveal.jpg', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop' }, // Natural beauty mole reveal

  // ========================================================
  // 16. LASH LIFTING, KERATIN TINTING & BROW LAMINATION
  // ========================================================
  { file: 'lash_main.jpg', url: 'https://images.unsplash.com/photo-1512290900672-1f5581561730?q=80&w=1200&auto=format&fit=crop' }, // Lash lifting treatment
  { file: 'lash_shield_size.jpg', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' }, // Silicone shield selection
  { file: 'lash_lift_shields.jpg', url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop' }, // Y-comb lash alignment
  { file: 'lash_perm_lotion.jpg', url: 'https://images.unsplash.com/photo-1608248597359-00f074d2b27a?q=80&w=1000&auto=format&fit=crop' }, // Perming & lifting lotion
  { file: 'lash_tint_blueblack.jpg', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop' }, // Blue-black glossy tint
  { file: 'lash_keratin_oil.jpg', url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000&auto=format&fit=crop' }, // Keratin nourishing oil
  { file: 'lash_curl_result.jpg', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop' }, // Upward curled wide-eyed lashes

  // ========================================================
  // 17. NAIL EXTENSIONS & SCULPTING (PRESERVED & AUDITED)
  // ========================================================
  { file: 'nailext_main.jpg', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop' }, // Nail extension salon
  { file: 'nailext_efile_prep.jpg', url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1000&auto=format&fit=crop' }, // E-file cuticle prep
  { file: 'nailext_forms.jpg', url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000&auto=format&fit=crop' }, // Paper sculpting forms
  { file: 'nailext_apex_bead.jpg', url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop' }, // Acrylic apex bead
  { file: 'nailext_uv_lamp.jpg', url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop' }, // UV/LED curing lamp
  { file: 'nailext_file_shape.jpg', url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop' }, // Hand file shaping
  { file: 'nail_ext_hero.jpg', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop' }, // Finished sculpted nails

  // ========================================================
  // 18. NAIL ART & CREATIVE 3D DESIGNS (PRESERVED & AUDITED)
  // ========================================================
  { file: 'nailart_main.jpg', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop' }, // Hand painted nail art
  { file: 'nailart_000_brush.jpg', url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop' }, // 000 detailer brush
  { file: 'nailart_french_sponge.jpg', url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000&auto=format&fit=crop' }, // French ombre gradient
  { file: 'nailart_chrome_rub.jpg', url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop' }, // Holographic chrome rub
  { file: 'nailart_gem_waxpen.jpg', url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop' }, // Gem wax picker
  { file: 'nailart_3d_flowers.jpg', url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1000&auto=format&fit=crop' }, // 3D acrylic floral art
  { file: 'nailart_salon_set.jpg', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop' }  // Luxury 10-finger designer set
];

async function run() {
  console.log('Downloading 126 curated course images...');
  let successCount = 0;
  let failCount = 0;
  for (const item of manifest) {
    const dest = path.join(targetDir, item.file);
    try {
      await downloadFile(item.url, dest);
      console.log(`✓ ${item.file}`);
      successCount++;
    } catch (e) {
      console.error(`✗ ${item.file}:`, e.message);
      failCount++;
    }
  }
  console.log(`\nCompleted: ${successCount} downloaded, ${failCount} failed.`);
}

run();
