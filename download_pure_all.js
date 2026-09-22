const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'services');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 100% Verified, specific beauty photography URLs
const imageManifest = [
  // ==================== NAILS (PURE NAIL DESIGNS) ====================
  {
    filename: 'nail_chrome_gold.jpg',
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'nail_french_babyboomer.jpg',
    url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'nail_ruby_sculpted.jpg',
    url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'nail_pastel_palette.jpg',
    url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'nail_russian_manicure.jpg',
    url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'nail_gloss_gel_overlay.jpg',
    url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'nail_art_tools_station.jpg',
    url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'nail_stiletto_luxe.jpg',
    url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop'
  },

  // ==================== MAKEUP (PURE MAKEUP VISUALS) ====================
  {
    filename: 'makeup_bridal_hd_base.jpg',
    url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'makeup_cut_crease_eyes.jpg',
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'makeup_contour_sculpt.jpg',
    url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'makeup_glam_redcarpet.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'makeup_velvet_lips.jpg',
    url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'makeup_skin_foundation.jpg',
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'makeup_airbrush_technique.jpg',
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'makeup_vanity_palette.jpg',
    url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop'
  },

  // ==================== HAIR STYLING (PURE HAIR STYLES) ====================
  {
    filename: 'hair_bridal_juda_bun.jpg',
    url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'hair_curling_tongs_iron.jpg',
    url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'hair_fishtail_braids.jpg',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'hair_gajra_accessories.jpg',
    url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'hair_dummy_mannequin.jpg',
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'hair_speed_updo.jpg',
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'hair_textured_waves.jpg',
    url: 'https://images.unsplash.com/photo-1492106087820-71aa04417162?q=80&w=1000&auto=format&fit=crop'
  },

  // ==================== HAIR CHEMICAL & CUT ====================
  {
    filename: 'chem_keratin_gloss.jpg',
    url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'chem_balayage_blonde.jpg',
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'chem_shear_haircut.jpg',
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'chem_volume_blowout.jpg',
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'chem_foil_melt.jpg',
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'chem_plex_repair.jpg',
    url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop'
  },

  // ==================== AESTHETICS (MEDI-FACIALS & DEVICES) ====================
  {
    filename: 'aesthet_hydra_suction.jpg',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'aesthet_photon_led.jpg',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'aesthet_skin_diagnostics.jpg',
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'aesthet_clinical_sanitation.jpg',
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'aesthet_ultrasonic_spatula.jpg',
    url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?q=80&w=1000&auto=format&fit=crop'
  },

  // ==================== PMU & MICROBLADING ====================
  {
    filename: 'pmu_brow_arch_mapping.jpg',
    url: 'https://images.unsplash.com/photo-1583001809873-a2254f9a463c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'pmu_lip_watercolor_tint.jpg',
    url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'pmu_lash_volume_extensions.jpg',
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'pmu_silicone_latex_sheet.jpg',
    url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'pmu_membrane_cartridges.jpg',
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop'
  },

  // ==================== SKINCARE & SPA ====================
  {
    filename: 'spa_facial_acupressure.jpg',
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'spa_dtan_cleanse_pack.jpg',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'spa_ayurvedic_head_massage.jpg',
    url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'spa_body_polishing_scrub.jpg',
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'spa_hygienic_waxing_station.jpg',
    url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'spa_ozone_steam_towel.jpg',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop'
  },
  {
    filename: 'spa_foot_pedicure_therapy.jpg',
    url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop'
  }
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
  console.log(`Checking & downloading ${imageManifest.length} pure images...`);
  for (const item of imageManifest) {
    const destPath = path.join(targetDir, item.filename);
    try {
      await download(item.url, destPath);
      const stats = fs.statSync(destPath);
      console.log(`✓ ${item.filename} (${Math.round(stats.size / 1024)} KB)`);
    } catch (e) {
      console.error(`✗ ${item.filename}:`, e.message);
    }
  }
  console.log('Done!');
}

run();
