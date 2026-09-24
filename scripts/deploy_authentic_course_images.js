const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'public', 'images', 'services');
const destDir = path.join(__dirname, '..', 'public', 'images', 'courses');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function copy(srcName, destName) {
  const src = path.join(srcDir, srcName);
  const dest = path.join(destDir, destName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${srcName} -> ${destName}`);
  } else {
    console.warn(`Source not found: ${srcName}`);
  }
}

// 1. SKIN COURSE
copy('aesthet_skin_diagnostics.jpg', 'skin_main.jpg');
copy('aesthet_skin_analysis.jpg', 'skin_diag.jpg');
copy('aesthet_ultrasonic_spatula.jpg', 'skin_machine.jpg');
copy('spa_ozone_steam_towel.jpg', 'skin_steam.jpg');
copy('spa_facial_massage.jpg', 'skin_massage.jpg');
copy('spa_botanical_mask.jpg', 'skin_mask.jpg');
copy('aesthet_sterile_clinic.jpg', 'skin_glow_result.jpg');

// 2. CHEMICAL PEELS
copy('aesthet_skin_analysis.jpg', 'peel_main.jpg');
copy('spa_dtan_cleanse.jpg', 'peel_prep.jpg');
copy('aesthet_ultrasound_scrub.jpg', 'peel_apply.jpg');
copy('spa_facial_acupressure.jpg', 'peel_neutral.jpg');
copy('spa_ozone_steam_towel.jpg', 'peel_cryo.jpg');
copy('spa_botanical_mask.jpg', 'peel_clarity.jpg');
copy('aesthet_sterile_clinic.jpg', 'peel_reveal.jpg');

// 3. BB GLOW FACIAL
copy('aesthet_derma_roller.jpg', 'bbglow_main.jpg');
copy('aesthet_skin_analysis.jpg', 'bbglow_infuse.jpg');
copy('aesthet_derma_roller.jpg', 'bbglow_needling.jpg');
copy('aesthet_led_phototherapy.jpg', 'bbglow_led_light.jpg');
copy('spa_botanical_mask.jpg', 'bbglow_mask_calm.jpg');
copy('spa_facial_massage.jpg', 'bbglow_finish.jpg');
copy('aesthet_sterile_clinic.jpg', 'bbglow_porcelain.jpg');

// 4. KOREAN GLASS SKIN
copy('spa_facial_massage.jpg', 'korean_main.jpg');
copy('spa_dtan_cleanse.jpg', 'korean_essence_layer.jpg');
copy('spa_facial_acupressure.jpg', 'korean_guasha_stone.jpg');
copy('spa_botanical_mask.jpg', 'korean_sheet_infusion.jpg');
copy('spa_ozone_steam_towel.jpg', 'korean_cryo_globe.jpg');
copy('aesthet_ultrasonic_spatula.jpg', 'korean_barrier_cream.jpg');
copy('aesthet_sterile_clinic.jpg', 'korean_glass_reveal.jpg');

// 5. HYDRA FACIAL MASTERY
copy('aesthet_hydrafacial_device.jpg', 'hydra_main.jpg');
copy('aesthet_skin_analysis.jpg', 'hydra_cleanse.jpg');
copy('aesthet_ultrasonic_spatula.jpg', 'hydra_scrubber_hz.jpg');
copy('aesthet_hydra_suction.jpg', 'hydra_vortex.jpg');
copy('aesthet_microdermabrasion.jpg', 'hydra_infusion.jpg');
copy('spa_ozone_steam_towel.jpg', 'hydra_cold_hammer.jpg');
copy('aesthet_photon_led.jpg', 'hydra_oxygen_spray.jpg');

// 6. HAIR CHEMICAL TREATMENTS
copy('chem_keratin_treatment.jpg', 'chem_main.jpg');
copy('chem_color_mixing.jpg', 'chem_ratio_mix.jpg');
copy('chem_balayage_color.jpg', 'chem_balayage_foil.jpg');
copy('chem_foil_highlights.jpg', 'hair_chem_foils.jpg');
copy('chem_nanoplastia_gloss.jpg', 'chem_iron_seal.jpg');
copy('chem_plex_repair.jpg', 'chem_plex_wash.jpg');
copy('chem_keratin_gloss.jpg', 'hair_chem_gloss.jpg');

// 7. CREATIVE HAIR STYLING
copy('hair_bridal_juda_bun.jpg', 'style_main.jpg');
copy('hair_dummy_mannequin.jpg', 'style_tease_prep.jpg');
copy('hair_curling_tongs_iron.jpg', 'style_tong_curl.jpg');
copy('hair_pure_01_royal_juda.jpg', 'style_russian_updo.jpg');
copy('hair_fishtail_braids.jpg', 'style_fishtail_braid.jpg');
copy('hair_gajra_accessories.jpg', 'style_gajra_floral.jpg');
copy('hair_pure_06_jasmine_gajra.jpg', 'style_royal_juda.jpg');

// 8. PRECISION HAIR CUTTING
copy('chem_precision_haircut.jpg', 'cut_main.jpg');
copy('chem_shear_haircut.jpg', 'cut_shears_tool.jpg');
copy('chem_precision_haircut.jpg', 'cut_solid_baseline.jpg');
copy('chem_shear_haircut.jpg', 'hair_cut_layers.jpg');
copy('chem_precision_haircut.jpg', 'cut_french_bob.jpg');
copy('chem_shear_haircut.jpg', 'cut_point_texture.jpg');
copy('chem_volume_blowout.jpg', 'cut_blowdry_move.jpg');

// 9. HAIR EXTENSIONS
copy('hair_pure_02_hollywood_waves.jpg', 'ext_main.jpg');
copy('hair_dummy_mannequin.jpg', 'ext_sectioning.jpg');
copy('chem_shear_haircut.jpg', 'ext_fusion_keratin.jpg');
copy('chem_precision_haircut.jpg', 'ext_micro_rings.jpg');
copy('hair_pure_10_golden_curl_cascade.jpg', 'ext_tape_sandwich.jpg');
copy('chem_shear_haircut.jpg', 'ext_razor_blend.jpg');
copy('hair_pure_15_voluminous_blowout_waves.jpg', 'ext_volume_reveal.jpg');

// 10. PROFESSIONAL MAKEUP
copy('makeup_bridal_hd.jpg', 'pro_makeup_main.jpg');
copy('makeup_foundation_prep.jpg', 'pro_makeup_brush.jpg');
copy('makeup_contour_sculpt.jpg', 'pro_makeup_contour.jpg');
copy('makeup_airbrush_technique.jpg', 'pro_makeup_airbrush.jpg');
copy('makeup_cut_crease_eyes.jpg', 'pro_makeup_cutcrease.jpg');
copy('makeup_lip_artistry.jpg', 'pro_makeup_lips.jpg');
copy('makeup_glam_redcarpet.jpg', 'pro_makeup_bridal.jpg');

// 11. SPMU
copy('pmu_brow_mapping.jpg', 'spmu_main.jpg');
copy('pmu_brow_mapping.jpg', 'spmu_caliper_map.jpg');
copy('pmu_pigment_mixing.jpg', 'spmu_pigment_tray.jpg');
copy('pmu_latex_practice.jpg', 'spmu_latex_sheet.jpg');
copy('pmu_membrane_cartridges.jpg', 'spmu_rotary_pen.jpg');
copy('pmu_sterile_needles.jpg', 'spmu_sterile_hygiene.jpg');
copy('pmu_ombre_powder.jpg', 'spmu_healed_ombre.jpg');

// 12. LIP NEUTRALIZATION
copy('pmu_lip_neutralization.jpg', 'lipneut_main.jpg');
copy('pmu_pigment_mixing.jpg', 'lipneut_undertone.jpg');
copy('pmu_membrane_cartridges.jpg', 'lipneut_numb.jpg');
copy('pmu_pigment_mixing.jpg', 'lipneut_orange_mix.jpg');
copy('pmu_lip_neutralization.jpg', 'lipneut_pixel.jpg');
copy('pmu_latex_practice.jpg', 'lipneut_balm.jpg');
copy('pmu_lip_watercolor_tint.jpg', 'lipneut_healed_pink.jpg');

// 13. LIP TINTING
copy('pmu_lip_watercolor_tint.jpg', 'liptint_main.jpg');
copy('pmu_pigment_mixing.jpg', 'liptint_shade.jpg');
copy('pmu_lip_neutralization.jpg', 'liptint_cupid_map.jpg');
copy('pmu_lip_watercolor_tint.jpg', 'liptint_watercolor.jpg');
copy('pmu_lip_neutralization.jpg', 'liptint_velvet_core.jpg');
copy('pmu_latex_practice.jpg', 'liptint_hyaluron.jpg');
copy('pmu_lip_watercolor_tint.jpg', 'liptint_blush_reveal.jpg');

// 14. MICROBLADING
copy('pmu_microblading_strokes.jpg', 'blade_main.jpg');
copy('pmu_brow_mapping.jpg', 'blade_caliper.jpg');
copy('pmu_sterile_needles.jpg', 'blade_18u_handpiece.jpg');
copy('pmu_latex_practice.jpg', 'blade_spine_pattern.jpg');
copy('pmu_microblading_strokes.jpg', 'blade_feather_stroke.jpg');
copy('pmu_pigment_mixing.jpg', 'blade_pigment_mask.jpg');
copy('pmu_ombre_powder.jpg', 'blade_3d_brows.jpg');

// 15. BEAUTY MOLE
copy('pmu_brow_mapping.jpg', 'mole_main.jpg');
copy('pmu_brow_mapping.jpg', 'mole_placement.jpg');
copy('pmu_pigment_mixing.jpg', 'mole_melanin_mix.jpg');
copy('pmu_sterile_needles.jpg', 'mole_stipple.jpg');
copy('pmu_membrane_cartridges.jpg', 'mole_antiseptic.jpg');
copy('pmu_latex_practice.jpg', 'mole_calm_seal.jpg');
copy('pmu_brow_mapping.jpg', 'mole_accent_reveal.jpg');

// 16. LASH LIFTING
copy('pmu_lash_volume.jpg', 'lash_main.jpg');
copy('pmu_lash_volume.jpg', 'lash_shield_size.jpg');
copy('pmu_lash_volume_extensions.jpg', 'lash_lift_shields.jpg');
copy('pmu_lash_volume.jpg', 'lash_perm_lotion.jpg');
copy('pmu_lash_volume_extensions.jpg', 'lash_tint_blueblack.jpg');
copy('pmu_lash_volume.jpg', 'lash_keratin_oil.jpg');
copy('pmu_lash_volume_extensions.jpg', 'lash_curl_result.jpg');

// 17. NAIL EXTENSIONS
copy('nail_05_russian_manicure_prep.jpg', 'nailext_main.jpg');
copy('nail_cuticle_care.jpg', 'nailext_efile_prep.jpg');
copy('nail_acrylic_sculpt.jpg', 'nailext_forms.jpg');
copy('nail_gel_extensions.jpg', 'nailext_apex_bead.jpg');
copy('nail_uv_lamp.jpg', 'nailext_uv_lamp.jpg');
copy('nail_cuticle_care.jpg', 'nailext_file_shape.jpg');
copy('nail_03_ruby_sculpted.jpg', 'nail_ext_hero.jpg');

// 18. NAIL ART
copy('nail_01_gold_chrome.jpg', 'nailart_main.jpg');
copy('nail_brushes_tools.jpg', 'nailart_000_brush.jpg');
copy('nail_french_ombre.jpg', 'nailart_french_sponge.jpg');
copy('nail_chrome_art.jpg', 'nailart_chrome_rub.jpg');
copy('nail_06_swarovski_rhinestone.jpg', 'nailart_gem_waxpen.jpg');
copy('nail_19_3d_encapsulated_flowers.jpg', 'nailart_3d_flowers.jpg');
copy('nail_04_pastel_florals.jpg', 'nailart_salon_set.jpg');

console.log('Successfully deployed all verified procedural images to public/images/courses/!');
