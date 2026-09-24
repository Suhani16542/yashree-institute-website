const fs = require('fs');
const path = require('path');

const courseImages = {
  "skin": {
    heroImage: "/images/courses/skin_main.jpg",
    galleryImages: [
      "/images/courses/skin_diag.jpg",
      "/images/courses/skin_machine.jpg",
      "/images/courses/skin_steam.jpg",
      "/images/courses/skin_massage.jpg",
      "/images/courses/skin_mask.jpg",
      "/images/courses/skin_glow_result.jpg"
    ]
  },
  "chemical-peels": {
    heroImage: "/images/courses/peel_main.jpg",
    galleryImages: [
      "/images/courses/peel_prep.jpg",
      "/images/courses/peel_apply.jpg",
      "/images/courses/peel_neutral.jpg",
      "/images/courses/peel_cryo.jpg",
      "/images/courses/peels_results.jpg",
      "/images/courses/peel_clarity.jpg"
    ]
  },
  "bb-glow-facial": {
    heroImage: "/images/courses/bbglow_main.jpg",
    galleryImages: [
      "/images/courses/bbglow_device.jpg",
      "/images/courses/bbglow_serum.jpg",
      "/images/courses/bbglow_needling.jpg",
      "/images/courses/bbglow_led.jpg",
      "/images/courses/bbglow_mask_calm.jpg",
      "/images/courses/bbglow_radiance.jpg"
    ]
  },
  "korean-facial": {
    heroImage: "/images/courses/korean_main.jpg",
    galleryImages: [
      "/images/courses/korean_massage.jpg",
      "/images/courses/korean_guasha_stone.jpg",
      "/images/courses/korean_essence.jpg",
      "/images/courses/korean_cryo_globe.jpg",
      "/images/courses/korean_sheet_mask.jpg",
      "/images/courses/korean_glass_reveal.jpg"
    ]
  },
  "hydra-facial": {
    heroImage: "/images/courses/hydra_main.jpg",
    galleryImages: [
      "/images/courses/hydra_scrubber_hz.jpg",
      "/images/courses/hydra_vortex.jpg",
      "/images/courses/hydra_infusion.jpg",
      "/images/courses/hydra_cold_hammer.jpg",
      "/images/courses/hydra_oxygen_spray.jpg",
      "/images/courses/hydra_cleanse.jpg"
    ]
  },
  "hair-chemical": {
    heroImage: "/images/courses/chem_main.jpg",
    galleryImages: [
      "/images/courses/chem_ratio_mix.jpg",
      "/images/courses/hair_chem_foils.jpg",
      "/images/courses/chem_balayage_foil.jpg",
      "/images/courses/chem_iron_seal.jpg",
      "/images/courses/chem_plex_wash.jpg",
      "/images/courses/hair_chem_gloss.jpg"
    ]
  },
  "hair-styling": {
    heroImage: "/images/courses/style_main.jpg",
    galleryImages: [
      "/images/courses/style_tease_prep.jpg",
      "/images/courses/style_tong_curl.jpg",
      "/images/courses/style_royal_juda.jpg",
      "/images/courses/style_russian_updo.jpg",
      "/images/courses/style_gajra_floral.jpg",
      "/images/courses/style_main.jpg"
    ]
  },
  "hair-cutting": {
    heroImage: "/images/courses/cut_main.jpg",
    galleryImages: [
      "/images/courses/cut_shears_tool.jpg",
      "/images/courses/cut_solid_baseline.jpg",
      "/images/courses/hair_cut_layers.jpg",
      "/images/courses/cut_french_bob.jpg",
      "/images/courses/cut_point_texture.jpg",
      "/images/courses/cut_blowdry_move.jpg"
    ]
  },
  "hair-extensions": {
    heroImage: "/images/courses/ext_main.jpg",
    galleryImages: [
      "/images/courses/ext_sectioning.jpg",
      "/images/courses/ext_fusion_keratin.jpg",
      "/images/courses/ext_micro_rings.jpg",
      "/images/courses/ext_tape_sandwich.jpg",
      "/images/courses/ext_razor_blend.jpg",
      "/images/courses/ext_volume_reveal.jpg"
    ]
  },
  "professional-makeup": {
    heroImage: "/images/courses/pro_makeup_main.jpg",
    galleryImages: [
      "/images/courses/pro_makeup_brush.jpg",
      "/images/courses/pro_makeup_contour.jpg",
      "/images/courses/pro_makeup_airbrush.jpg",
      "/images/courses/pro_makeup_cutcrease.jpg",
      "/images/courses/pro_makeup_lips.jpg",
      "/images/courses/pro_makeup_bridal.jpg"
    ]
  },
  "semi-permanent-makeup": {
    heroImage: "/images/courses/spmu_main.jpg",
    galleryImages: [
      "/images/courses/spmu_caliper_map.jpg",
      "/images/courses/spmu_pigment_tray.jpg",
      "/images/courses/spmu_latex_sheet.jpg",
      "/images/courses/spmu_rotary_pen.jpg",
      "/images/courses/spmu_sterile_hygiene.jpg",
      "/images/courses/spmu_healed_ombre.jpg"
    ]
  },
  "lip-neutralizing": {
    heroImage: "/images/courses/lipneut_main.jpg",
    galleryImages: [
      "/images/courses/lipneut_undertone.jpg",
      "/images/courses/lipneut_numb.jpg",
      "/images/courses/lipneut_orange_mix.jpg",
      "/images/courses/lipneut_pixel.jpg",
      "/images/courses/lipneut_balm.jpg",
      "/images/courses/lipneut_healed_pink.jpg"
    ]
  },
  "lip-tinting": {
    heroImage: "/images/courses/liptint_main.jpg",
    galleryImages: [
      "/images/courses/liptint_shade.jpg",
      "/images/courses/liptint_cupid_map.jpg",
      "/images/courses/liptint_watercolor.jpg",
      "/images/courses/liptint_velvet_core.jpg",
      "/images/courses/liptint_hyaluron.jpg",
      "/images/courses/liptint_blush_reveal.jpg"
    ]
  },
  "microblading": {
    heroImage: "/images/courses/blade_main.jpg",
    galleryImages: [
      "/images/courses/blade_caliper.jpg",
      "/images/courses/blade_18u_handpiece.jpg",
      "/images/courses/blade_spine_pattern.jpg",
      "/images/courses/blade_feather_stroke.jpg",
      "/images/courses/blade_pigment_mask.jpg",
      "/images/courses/blade_3d_brows.jpg"
    ]
  },
  "beauty-mole-creation": {
    heroImage: "/images/courses/mole_main.jpg",
    galleryImages: [
      "/images/courses/mole_placement.jpg",
      "/images/courses/mole_melanin_mix.jpg",
      "/images/courses/mole_stipple.jpg",
      "/images/courses/mole_antiseptic.jpg",
      "/images/courses/mole_calm_seal.jpg",
      "/images/courses/mole_accent_reveal.jpg"
    ]
  },
  "lash-lifting": {
    heroImage: "/images/courses/lash_main.jpg",
    galleryImages: [
      "/images/courses/lash_shield_size.jpg",
      "/images/courses/lash_lift_shields.jpg",
      "/images/courses/lash_perm_lotion.jpg",
      "/images/courses/lash_tint_blueblack.jpg",
      "/images/courses/lash_keratin_oil.jpg",
      "/images/courses/lash_curl_result.jpg"
    ]
  },
  "nail-extensions": {
    heroImage: "/images/courses/nailext_main.jpg",
    galleryImages: [
      "/images/courses/nailext_efile_prep.jpg",
      "/images/courses/nailext_forms.jpg",
      "/images/courses/nailext_apex_bead.jpg",
      "/images/courses/nailext_uv_lamp.jpg",
      "/images/courses/nailext_file_shape.jpg",
      "/images/courses/nail_ext_hero.jpg"
    ]
  },
  "nail-art": {
    heroImage: "/images/courses/nailart_main.jpg",
    galleryImages: [
      "/images/courses/nailart_000_brush.jpg",
      "/images/courses/nailart_french_sponge.jpg",
      "/images/courses/nailart_chrome_rub.jpg",
      "/images/courses/nailart_gem_waxpen.jpg",
      "/images/courses/nailart_3d_flowers.jpg",
      "/images/courses/nailart_salon_set.jpg"
    ]
  }
};

const coursesDataPath = path.join(__dirname, '..', 'src', 'data', 'coursesData.ts');
let content = fs.readFileSync(coursesDataPath, 'utf8');

for (const [slug, mapping] of Object.entries(courseImages)) {
  // Update heroImage
  const slugRegex = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?heroImage:\\s*["'])([^"']+)(["'])`);
  const heroMatch = content.match(slugRegex);
  if (heroMatch) {
    content = content.replace(slugRegex, `$1${mapping.heroImage}$3`);
    console.log(`Updated heroImage for ${slug} -> ${mapping.heroImage}`);
  }

  // Update gallery images
  const courseSectionRegex = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?gallery:\\s*\\[)([\\s\\S]*?)(\\][\\s\\S]*?whyLearn:)`);
  const galleryMatch = content.match(courseSectionRegex);
  if (galleryMatch) {
    const header = galleryMatch[1];
    let galleryBody = galleryMatch[2];
    const footer = galleryMatch[3];

    let imgIndex = 0;
    galleryBody = galleryBody.replace(/(["']?image["']?\s*:\s*["'])([^"']+)(["'])/g, (fullMatch, p1, p2, p3) => {
      if (imgIndex < mapping.galleryImages.length) {
        const newImg = mapping.galleryImages[imgIndex];
        imgIndex++;
        return `${p1}${newImg}${p3}`;
      }
      return fullMatch;
    });

    content = content.replace(galleryMatch[0], `${header}${galleryBody}${footer}`);
    console.log(`Updated ${imgIndex} gallery images for ${slug}`);
  } else {
    console.warn(`Could not find gallery match for slug ${slug}`);
  }
}

fs.writeFileSync(coursesDataPath, content, 'utf8');
console.log('Successfully updated all coursesData.ts images!');
