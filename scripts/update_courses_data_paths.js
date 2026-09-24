const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'coursesData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Update mappings course-by-course with new dedicated paths:

// 1. SKIN
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Professional Skin Care Program["']/,
  `heroImage: "/images/courses/skin/skin-hero.jpg",\n    aboutTitle: "About the Professional Skin Care Program"`
);

content = content.replace(
  /slug:\s*["']skin["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/skin/skin-01-prep.jpg",
        title: "Clinical Prep & Emulsion Application",
        caption: "Skin analysis, diagnostic prep, and clinical emulsion brush application.",
        stepBadge: "Step 1: Prep"
      },
      {
        image: "/images/courses/skin/skin-02-biomask.jpg",
        title: "Soothing Bio-Mask Acupressure",
        caption: "Soothing facial mask placement and acupressure relaxation by clinical aesthetician.",
        stepBadge: "Step 2: Bio-Mask"
      },
      {
        image: "/images/courses/skin/skin-03-botanical.jpg",
        title: "Gauze Layered Botanical Mask",
        caption: "Targeted botanical peel mask layered over therapeutic gauze barrier.",
        stepBadge: "Step 3: Botanical Layer"
      },
      {
        image: "/images/courses/skin/skin-04-detox.jpg",
        title: "Clinical Detox Mask Peel",
        caption: "Gauze-lifted peel removal, clearing surface impurities and pore congestion.",
        stepBadge: "Step 4: Mask Detox"
      },
      {
        image: "/images/courses/skin/skin-05-hydration.jpg",
        title: "Deep Peptide Hydration Infusion",
        caption: "Active peptide and hyaluronic hydration treatment for barrier restoration.",
        stepBadge: "Step 5: Hydration"
      },
      {
        image: "/images/courses/skin/skin-06-glow.jpg",
        title: "Radiant Clinical Complexion Reveal",
        caption: "Luminous, calm, and deeply nourished finished complexion.",
        stepBadge: "Step 6: Clinical Glow"
      }
    ]`);
  }
);

// 2. CHEMICAL PEELS
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Chemical Peels Program["']/,
  `heroImage: "/images/courses/chemical-peels/peel-hero.jpg",\n    aboutTitle: "About the Chemical Peels Program"`
);

content = content.replace(
  /slug:\s*["']chemical-peels["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/chemical-peels/peel-01-prep.jpg",
        title: "Acid Percentage & Clinical Bowl Prep",
        caption: "AHA/BHA acid percentage calculation, dish formulation, and brush prep.",
        stepBadge: "Step 1: Acid Chemistry"
      },
      {
        image: "/images/courses/chemical-peels/peel-02-apply.jpg",
        title: "Fan-Brush Layered Peel Application",
        caption: "Clinical fan brush strokes layering active chemical peeling agent on skin.",
        stepBadge: "Step 2: Peel Application"
      },
      {
        image: "/images/courses/chemical-peels/peel-03-neutralize.jpg",
        title: "Soothing Gauze Barrier Placement",
        caption: "Calming botanical neutralizing barrier applied to quench active acid.",
        stepBadge: "Step 3: Soothing Barrier"
      },
      {
        image: "/images/courses/chemical-peels/peel-04-quench.jpg",
        title: "Peel Neutralization Lift & Quench",
        caption: "Careful gauze-lifted removal and pH balance restoration by aesthetician.",
        stepBadge: "Step 4: Neutralization Lift"
      },
      {
        image: "/images/courses/chemical-peels/peel-05-soothe.jpg",
        title: "Post-Peel Calming & Wipe Down",
        caption: "Sterile cotton wipe down, antioxidant soothing, and barrier hydration.",
        stepBadge: "Step 5: Post-Peel Care"
      },
      {
        image: "/images/courses/chemical-peels/peel-06-clarity.jpg",
        title: "Crystal Clear Rejuvenated Skin",
        caption: "Post-peel cellular renewal, smooth texture, and luminous tone clarity.",
        stepBadge: "Step 6: Healed Clarity"
      }
    ]`);
  }
);

// 3. BB GLOW FACIAL
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the BB Glow Facial Program["']/,
  `heroImage: "/images/courses/bb-glow-facial/bbglow-hero.jpg",\n    aboutTitle: "About the BB Glow Facial Program"`
);

content = content.replace(
  /slug:\s*["']bb-glow-facial["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/bb-glow-facial/bbglow-01-shade.jpg",
        title: "Meso-Serum & Shade Customization",
        caption: "Botanical peptide ampoules and custom undertone shade matching in clinical bowl.",
        stepBadge: "Step 1: Shade Blending"
      },
      {
        image: "/images/courses/bb-glow-facial/bbglow-02-priming.jpg",
        title: "Aesthetic Grid Mask & Serum Priming",
        caption: "Precision therapeutic facial grid mask and active meso-peptide serum application.",
        stepBadge: "Step 2: Skin Priming"
      },
      {
        image: "/images/courses/bb-glow-facial/bbglow-03-infusion.jpg",
        title: "Circular Nano-Infusion Gliding",
        caption: "Fan-brush meso-infusion layering across facial contours for seamless coverage.",
        stepBadge: "Step 3: Meso Infusion"
      },
      {
        image: "/images/courses/bb-glow-facial/bbglow-04-soothing.jpg",
        title: "Calming Therapeutic Mask Infusion",
        caption: "Therapeutic botanical soothing layer quenching active skin after meso infusion.",
        stepBadge: "Step 4: Soothing Infusion"
      },
      {
        image: "/images/courses/bb-glow-facial/bbglow-05-peel.jpg",
        title: "Post-Infusion Calming Mask Removal",
        caption: "Gauze-lifted peel removal clearing residual serum and locking in radiance.",
        stepBadge: "Step 5: Calming Mask"
      },
      {
        image: "/images/courses/bb-glow-facial/bbglow-06-porcelain.jpg",
        title: "Porcelain Glass Skin Reveal",
        caption: "Tone hydration wipe down and radiant, smooth semi-permanent finish.",
        stepBadge: "Step 6: Glass Finish"
      }
    ]`);
  }
);

// 4. KOREAN GLASS SKIN
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Korean Glass Skin Program["']/,
  `heroImage: "/images/courses/korean-facial/korean-hero.jpg",\n    aboutTitle: "About the Korean Glass Skin Program"`
);

content = content.replace(
  /slug:\s*["']korean-glass-skin["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/korean-facial/korean-01-toner.jpg",
        title: "7-Skin Hydrating Essence Layering",
        caption: "Deep penetration toner misting and multi-layer essence patting technique.",
        stepBadge: "Step 1: 7-Skin Layer"
      },
      {
        image: "/images/courses/korean-facial/korean-02-guasha.jpg",
        title: "Rose Quartz Gua Sha Drainage",
        caption: "Sculpting cheekbones and jawline while promoting lymphatic fluid drainage.",
        stepBadge: "Step 2: Gua Sha"
      },
      {
        image: "/images/courses/korean-facial/korean-03-mask.jpg",
        title: "Bio-Cellulose Sheet Infusion",
        caption: "Active fermented galactomyces serum absorption under soothing barrier sheet.",
        stepBadge: "Step 3: Sheet Mask"
      },
      {
        image: "/images/courses/korean-facial/korean-04-cryo.jpg",
        title: "Cryo Ice Globe Calming",
        caption: "Sub-zero ice globe soothing to shrink pores and lock in deep hydration.",
        stepBadge: "Step 4: Cryo Globe"
      },
      {
        image: "/images/courses/korean-facial/korean-05-ceramide.jpg",
        title: "Ceramide Lipid Barrier Seal",
        caption: "Rich botanical ceramide emulsion sealing in moisture and repairing barrier.",
        stepBadge: "Step 5: Barrier Seal"
      },
      {
        image: "/images/courses/korean-facial/korean-06-dewy.jpg",
        title: "Dewy Mirror-Like Glass Complexion",
        caption: "Translucent, plump, mirror-reflective Korean glass finish.",
        stepBadge: "Step 6: Dewy Glass"
      }
    ]`);
  }
);

// 5. HYDRA FACIAL
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Hydra Facial Program["']/,
  `heroImage: "/images/courses/hydra-facial/hydra-hero.jpg",\n    aboutTitle: "About the Hydra Facial Program"`
);

content = content.replace(
  /slug:\s*["']hydra-facial-mastery["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/hydra-facial/hydra-01-cleanse.jpg",
        title: "Ultrasonic D-Tan Skin Cleanse",
        caption: "Deep pre-cleansing removal of surface makeup, sebum, and environmental grime.",
        stepBadge: "Step 1: Deep Cleanse"
      },
      {
        image: "/images/courses/hydra-facial/hydra-02-scrubber.jpg",
        title: "28kHz Ultrasonic Spatula Exfoliation",
        caption: "High-frequency water cavitation dislodging stubborn blackheads and dead cells.",
        stepBadge: "Step 2: Spatula Scrub"
      },
      {
        image: "/images/courses/hydra-facial/hydra-03-vortex.jpg",
        title: "Vortex Suction & Comedone Extraction",
        caption: "Painless hydro-vacuum extraction unclogging T-zone pores and comedones.",
        stepBadge: "Step 3: Vortex Suction"
      },
      {
        image: "/images/courses/hydra-facial/hydra-04-infusion.jpg",
        title: "Hyaluronic & Antioxidant Infusion",
        caption: "Deep dermis hydro-infusion with peptides, vitamins, and hyaluronic acid.",
        stepBadge: "Step 4: Hydro Infusion"
      },
      {
        image: "/images/courses/hydra-facial/hydra-05-cryo.jpg",
        title: "Cold Hammer Cryo Therapy",
        caption: "Immediate pore tightening, calming erythema, and cooling sensitive tissue.",
        stepBadge: "Step 5: Cold Hammer"
      },
      {
        image: "/images/courses/hydra-facial/hydra-06-oxygen.jpg",
        title: "98% Pure Oxygen Mist Dome",
        caption: "Pressurized hyperbaric oxygen spray delivering cellular rejuvenation.",
        stepBadge: "Step 6: Oxygen Dome"
      }
    ]`);
  }
);

// 6. HAIR CHEMICAL
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Hair Chemical Treatments Program["']/,
  `heroImage: "/images/courses/hair-chemical/hair-chem-hero.jpg",\n    aboutTitle: "About the Hair Chemical Treatments Program"`
);

content = content.replace(
  /slug:\s*["']hair-chemical-treatments["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/hair-chemical/hair-chem-01-mix.jpg",
        title: "Developer Ratio & Bleach Mixing",
        caption: "Digital scale precision weighing of developer and lightener ratios.",
        stepBadge: "Step 1: Mixing"
      },
      {
        image: "/images/courses/hair-chemical/hair-chem-02-foils.jpg",
        title: "Balayage Sectioning & Foiling",
        caption: "Clean diagonal slices with feathering strokes avoiding bleed spots.",
        stepBadge: "Step 2: Foiling"
      },
      {
        image: "/images/courses/hair-chemical/hair-chem-03-sat.jpg",
        title: "Full Saturation Processing",
        caption: "Thorough root-to-end saturation ensuring uniform lift to target level.",
        stepBadge: "Step 3: Processing"
      },
      {
        image: "/images/courses/hair-chemical/hair-chem-04-nanoplastia.jpg",
        title: "Nanoplasty Thermal Sealing",
        caption: "Temperature-regulated titanium flat iron passing to lock in keratin matrix.",
        stepBadge: "Step 4: Heat Seal"
      },
      {
        image: "/images/courses/hair-chemical/hair-chem-05-backwash.jpg",
        title: "Plex Bond Neutralizing Wash",
        caption: "Acidic backwash emulsion restoring hair pH and re-linking broken disulfides.",
        stepBadge: "Step 5: Backwash"
      },
      {
        image: "/images/courses/hair-chemical/hair-chem-06-gloss.jpg",
        title: "High-Shine Acidic Color Gloss",
        caption: "Mirror shine, silky cuticle closure, and long-lasting tonal brilliance.",
        stepBadge: "Step 6: Gloss Reveal"
      }
    ]`);
  }
);

// 7. HAIR STYLING
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Creative Hair Styling Program["']/,
  `heroImage: "/images/courses/hair-styling/styling-hero.jpg",\n    aboutTitle: "About the Creative Hair Styling Program"`
);

content = content.replace(
  /slug:\s*["']creative-hair-styling["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/hair-styling/styling-01-crimping.jpg",
        title: "Volume Crimping & Root Prep",
        caption: "Micro-crimping base roots for 12-hour bridal volume hold and texture.",
        stepBadge: "Step 1: Root Prep"
      },
      {
        image: "/images/courses/hair-styling/styling-02-curls.jpg",
        title: "Ceramic Tong Ribbon Waves",
        caption: "28mm curling barrel wrapping creating uniform, glossy Hollywood waves.",
        stepBadge: "Step 2: Curls"
      },
      {
        image: "/images/courses/hair-styling/styling-03-russian.jpg",
        title: "Russian 3D Textured Updo",
        caption: "Pull-through ribbon petal technique creating structured airy volume.",
        stepBadge: "Step 3: 3D Updo"
      },
      {
        image: "/images/courses/hair-styling/styling-04-braid.jpg",
        title: "Fishtail Mermaid Braid",
        caption: "Multi-strand cascading braid textured with pearl and rhinestone accents.",
        stepBadge: "Step 4: Braid Art"
      },
      {
        image: "/images/courses/hair-styling/styling-05-gajra.jpg",
        title: "Traditional Fresh Floral Gajra",
        caption: "Secure fresh jasmine and rose pinning onto bridal bun base.",
        stepBadge: "Step 5: Floral Setting"
      },
      {
        image: "/images/courses/hair-styling/styling-06-juda.jpg",
        title: "Royal Bridal Juda Crown",
        caption: "High-glamour traditional Indian bridal bun with dupatta anchor points.",
        stepBadge: "Step 6: Royal Crown"
      }
    ]`);
  }
);

// 8. HAIR CUTTING
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Precision Hair Cutting Program["']/,
  `heroImage: "/images/courses/hair-cutting/cutting-hero.jpg",\n    aboutTitle: "About the Precision Hair Cutting Program"`
);

content = content.replace(
  /slug:\s*["']precision-hair-cutting["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/hair-cutting/cutting-01-shears.jpg",
        title: "Cobalt Shears & Comb Ergonomics",
        caption: "Proper scissor tension, finger positioning, and clean sectioning control.",
        stepBadge: "Step 1: Shears Ergonomics"
      },
      {
        image: "/images/courses/hair-cutting/cutting-02-perimeter.jpg",
        title: "0° Solid Baseline Cut",
        caption: "Crisp horizontal perimeter weight line establish on combed wet hair.",
        stepBadge: "Step 2: 0° Perimeter"
      },
      {
        image: "/images/courses/hair-cutting/cutting-03-layers.jpg",
        title: "90° Radial Crown Layering",
        caption: "Over-direction and vertical layering creating weightless interior movement.",
        stepBadge: "Step 3: 90° Layering"
      },
      {
        image: "/images/courses/hair-cutting/cutting-04-bob.jpg",
        title: "Graduated French Bob Angle",
        caption: "Precision 45° nape graduation building geometric weight and profile lift.",
        stepBadge: "Step 4: French Bob"
      },
      {
        image: "/images/courses/hair-cutting/cutting-05-texture.jpg",
        title: "Point Cutting & Texturizing",
        caption: "Notch cutting and channeling removing bulky weight from thick hair.",
        stepBadge: "Step 5: Point Texture"
      },
      {
        image: "/images/courses/hair-cutting/cutting-06-blowout.jpg",
        title: "Dynamic Round-Brush Finish",
        caption: "Polished volume blow-dry showing clean shape, balance, and fluid swing.",
        stepBadge: "Step 6: Dynamic Finish"
      }
    ]`);
  }
);

// 9. HAIR EXTENSIONS
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Hair Extensions Program["']/,
  `heroImage: "/images/courses/hair-extensions/ext-hero.jpg",\n    aboutTitle: "About the Hair Extensions Program"`
);

content = content.replace(
  /slug:\s*["']hair-extensions["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/hair-extensions/ext-01-section.jpg",
        title: "Brick-Lay Scalp Sectioning",
        caption: "Clean grid partitioning ensuring natural weight distribution and zero scalp tension.",
        stepBadge: "Step 1: Sectioning"
      },
      {
        image: "/images/courses/hair-extensions/ext-02-keratin.jpg",
        title: "Heat-Fusion Italian Keratin Bonds",
        caption: "Thermal clamp melt forming microscopic, invisible cylindrical bonds.",
        stepBadge: "Step 2: Keratin Fusion"
      },
      {
        image: "/images/courses/hair-extensions/ext-03-rings.jpg",
        title: "Micro-Ring Silicone Clamp",
        caption: "Cold-application nano rings clamped securely without glue or chemical adhesives.",
        stepBadge: "Step 3: Micro-Rings"
      },
      {
        image: "/images/courses/hair-extensions/ext-04-tape.jpg",
        title: "Invisible Tape-In Sandwich Wefts",
        caption: "Ultra-flat medical-grade polyurethane wefts bonded seamlessly.",
        stepBadge: "Step 4: Tape-Ins"
      },
      {
        image: "/images/courses/hair-extensions/ext-05-razor.jpg",
        title: "Feather Razor Seamless Blending",
        caption: "Slithering shears blending extension lengths naturally into client hair.",
        stepBadge: "Step 5: Razor Blend"
      },
      {
        image: "/images/courses/hair-extensions/ext-06-volume.jpg",
        title: "Dramatic Length & Volume Transformation",
        caption: "Full head glam with 24-inch natural virgin Remy hair movement.",
        stepBadge: "Step 6: Volume Reveal"
      }
    ]`);
  }
);

// 10. PROFESSIONAL MAKEUP
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Professional Makeup Program["']/,
  `heroImage: "/images/courses/professional-makeup/makeup-hero.jpg",\n    aboutTitle: "About the Professional Makeup Program"`
);

content = content.replace(
  /slug:\s*["']professional-makeup["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/professional-makeup/makeup-01-base.jpg",
        title: "HD Studio Base & Color Correction",
        caption: "Orange & peach corrector neutralization with camera-ready primer prep.",
        stepBadge: "Step 1: HD Base"
      },
      {
        image: "/images/courses/professional-makeup/makeup-02-contour.jpg",
        title: "Cream Contouring & Highlighting",
        caption: "Sculpting cheekbones, jawline, and nose with high-definition blending.",
        stepBadge: "Step 2: Contour Sculpt"
      },
      {
        image: "/images/courses/professional-makeup/makeup-03-airbrush.jpg",
        title: "Compressor Airbrush Stippling",
        caption: "Silicone-based micro-droplet misting for a waterproof 24-hour HD base.",
        stepBadge: "Step 3: Airbrush Mist"
      },
      {
        image: "/images/courses/professional-makeup/makeup-04-eyes.jpg",
        title: "Glitter Cut-Crease Eyeshadow",
        caption: "Sharp concealer cut crease, pigment transition, and cosmetic glitter seal.",
        stepBadge: "Step 4: Cut Crease"
      },
      {
        image: "/images/courses/professional-makeup/makeup-05-lips.jpg",
        title: "3D Ombre Lip Contouring",
        caption: "Precise lip boundary mapping with central velvet highlight ombre effect.",
        stepBadge: "Step 5: 3D Lips"
      },
      {
        image: "/images/courses/professional-makeup/makeup-06-bridal.jpg",
        title: "Royal Indian Bridal Glam Reveal",
        caption: "Flawless traditional dulhan bridal look with jewellery and bindi styling.",
        stepBadge: "Step 6: Bridal Glam"
      }
    ]`);
  }
);

// 11. SPMU
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Semi-Permanent Makeup Program["']/,
  `heroImage: "/images/courses/spmu/spmu-hero.jpg",\n    aboutTitle: "About the Semi-Permanent Makeup Program"`
);

content = content.replace(
  /slug:\s*["']semi-permanent-makeup["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/spmu/spmu-01-caliper.jpg",
        title: "Golden Ratio Caliper Brow Mapping",
        caption: "Surgical thread and caliper alignment for custom facial bone structure.",
        stepBadge: "Step 1: Golden Ratio"
      },
      {
        image: "/images/courses/spmu/spmu-02-pigment.jpg",
        title: "Organic Pigment Tone Formulation",
        caption: "Color theory mixing neutralizing cool, warm, and neutral Fitzpatrick undertones.",
        stepBadge: "Step 2: Pigments"
      },
      {
        image: "/images/courses/spmu/spmu-03-latex.jpg",
        title: "Synthetic Latex Needle Depth Practice",
        caption: "Hands-on needle vibration and skin resistance training on 3D latex faces.",
        stepBadge: "Step 3: Latex Practice"
      },
      {
        image: "/images/courses/spmu/spmu-04-pen.jpg",
        title: "Wireless Rotary Pen Micro-Shading",
        caption: "1RL cartridge shading creating pixelated soft ombre powder gradient.",
        stepBadge: "Step 4: Rotary Pen"
      },
      {
        image: "/images/courses/spmu/spmu-05-hygiene.jpg",
        title: "Sterile Barrier Sanitation Protocol",
        caption: "Hospital-grade machine wrapping, single-use needle disposal, and PPE.",
        stepBadge: "Step 5: Sterile Hygiene"
      },
      {
        image: "/images/courses/spmu/spmu-06-ombre.jpg",
        title: "Flawless Powder Ombre Eyebrow Reveal",
        caption: "Crisp, smudge-proof, realistic brows lasting 2-3 years.",
        stepBadge: "Step 6: Ombre Powder"
      }
    ]`);
  }
);

// 12. LIP NEUTRALIZATION
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Lip Neutralization Program["']/,
  `heroImage: "/images/courses/lip-neutralizing/lipneut-hero.jpg",\n    aboutTitle: "About the Lip Neutralization Program"`
);

content = content.replace(
  /slug:\s*["']lip-neutralization["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/lip-neutralizing/lipneut-01-undertone.jpg",
        title: "Melanin Hyper-Pigmentation Analysis",
        caption: "Assessing cool purple, grey, and deep brown undertones across lip borders.",
        stepBadge: "Step 1: Undertone Check"
      },
      {
        image: "/images/courses/lip-neutralizing/lipneut-02-numb.jpg",
        title: "Clinical Secondary Topical Numbing",
        caption: "Medical lidocaine compress ensuring a completely pain-free procedure.",
        stepBadge: "Step 2: Numbing Gel"
      },
      {
        image: "/images/courses/lip-neutralizing/lipneut-03-orange.jpg",
        title: "Warm Orange / Coral Pigment Correction",
        caption: "Custom titanium-free warm modifier blending cancelling dark melanin tones.",
        stepBadge: "Step 3: Color Modifier"
      },
      {
        image: "/images/courses/lip-neutralizing/lipneut-04-pixel.jpg",
        title: "Single-Needle Pixel Shading Deposit",
        caption: "Gentle pendulum movement depositing pigment without trauma or swelling.",
        stepBadge: "Step 4: Pixel Shading"
      },
      {
        image: "/images/courses/lip-neutralizing/lipneut-05-balm.jpg",
        title: "Occlusive Vitamin Barrier Seal",
        caption: "Medical healing balm application locking in pigments during 5-day healing.",
        stepBadge: "Step 5: Barrier Balm"
      },
      {
        image: "/images/courses/lip-neutralizing/lipneut-06-pink.jpg",
        title: "Even Rosy Pink Lip Transformation",
        caption: "Healed warm baby-pink result eliminating dark patches permanently.",
        stepBadge: "Step 6: Natural Pink"
      }
    ]`);
  }
);

// 13. LIP TINTING
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Lip Tinting & Velvet Blush Program["']/,
  `heroImage: "/images/courses/lip-tinting/liptint-hero.jpg",\n    aboutTitle: "About the Lip Tinting & Velvet Blush Program"`
);

content = content.replace(
  /slug:\s*["']lip-tinting["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/lip-tinting/liptint-01-shade.jpg",
        title: "Berry & Rose Velvet Shade Selection",
        caption: "Organic vegan pigment swatch matching client skin warmth and preference.",
        stepBadge: "Step 1: Shade Swatch"
      },
      {
        image: "/images/courses/lip-tinting/liptint-02-cupid.jpg",
        title: "Cupids Bow Boundary Symmetry",
        caption: "Creating a soft, defined lip outline without harsh artificial lipliner edges.",
        stepBadge: "Step 2: Boundary Map"
      },
      {
        image: "/images/courses/lip-tinting/liptint-03-watercolor.jpg",
        title: "Soft Borderless Watercolor Shading",
        caption: "Airy gradient pigment saturation from center to outer lip contour.",
        stepBadge: "Step 3: Watercolor Shading"
      },
      {
        image: "/images/courses/lip-tinting/liptint-04-velvet.jpg",
        title: "Core Velvet Saturation Pass",
        caption: "Multi-needle magnum shading for rich color density and even tint.",
        stepBadge: "Step 4: Velvet Saturation"
      },
      {
        image: "/images/courses/lip-tinting/liptint-05-hyaluron.jpg",
        title: "Hyaluronic Locking Barrier Mask",
        caption: "Post-care hydration wrap preventing crusting and optimizing color retention.",
        stepBadge: "Step 5: Hyaluron Lock"
      },
      {
        image: "/images/courses/lip-tinting/liptint-06-blush.jpg",
        title: "Luminous Lip Blush Tint Reveal",
        caption: "Juicy, youthful, tinted velvet lip glow lasting up to 2 years.",
        stepBadge: "Step 6: Blush Tint"
      }
    ]`);
  }
);

// 14. MICROBLADING
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Eyebrow Microblading Program["']/,
  `heroImage: "/images/courses/microblading/blade-hero.jpg",\n    aboutTitle: "About the Eyebrow Microblading Program"`
);

content = content.replace(
  /slug:\s*["']microblading["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/microblading/blade-01-caliper.jpg",
        title: "Thread & Caliper Symmetry Mapping",
        caption: "Precision geometric measurement aligning head, arch, and tail of the brow.",
        stepBadge: "Step 1: Caliper Mapping"
      },
      {
        image: "/images/courses/microblading/blade-02-blade.jpg",
        title: "18U Nano-Blade Handpiece Insertion",
        caption: "Single-use sterilized surgical blade angle calibration (45° to skin).",
        stepBadge: "Step 2: 18U Blade"
      },
      {
        image: "/images/courses/microblading/blade-03-spine.jpg",
        title: "Natural Hair Flow Spine Blueprint",
        caption: "Designing Asian & European spine patterns matching natural hair growth.",
        stepBadge: "Step 3: Spine Pattern"
      },
      {
        image: "/images/courses/microblading/blade-04-strokes.jpg",
        title: "Crisp Micro-Feather Hair Strokes",
        caption: "Superficial dermal incision depositing pigment with zero bleeding or scarring.",
        stepBadge: "Step 4: Feather Strokes"
      },
      {
        image: "/images/courses/microblading/blade-05-mask.jpg",
        title: "Pigment Absorption Color Mask",
        caption: "5-minute pigment bath soaking micro-strokes for optimal healed retention.",
        stepBadge: "Step 5: Pigment Mask"
      },
      {
        image: "/images/courses/microblading/blade-06-3d.jpg",
        title: "Hyper-Realistic 3D Hair-Stroke Brows",
        caption: "Dense, natural, undetectable 3D brow transformation.",
        stepBadge: "Step 6: 3D Brows"
      }
    ]`);
  }
);

// 15. BEAUTY MOLE
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Beauty Mole Creation Program["']/,
  `heroImage: "/images/courses/beauty-mole-creation/mole-hero.jpg",\n    aboutTitle: "About the Beauty Mole Creation Program"`
);

content = content.replace(
  /slug:\s*["']beauty-mole-creation["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/beauty-mole-creation/mole-01-harmony.jpg",
        title: "Facial Aesthetics & Placement Mapping",
        caption: "Choosing iconic Marilyn, cheekbone, or chin points complementing face shape.",
        stepBadge: "Step 1: Placement Map"
      },
      {
        image: "/images/courses/beauty-mole-creation/mole-02-mix.jpg",
        title: "Melanin Pigment Tone Calibration",
        caption: "Blending organic dark brown and graphite tones matching natural moles.",
        stepBadge: "Step 2: Melanin Mix"
      },
      {
        image: "/images/courses/beauty-mole-creation/mole-03-stipple.jpg",
        title: "1RL Single Micro-Point Stipple",
        caption: "Controlled 90° stippling creating realistic rounded borders and soft density.",
        stepBadge: "Step 3: Micro Stipple"
      },
      {
        image: "/images/courses/beauty-mole-creation/mole-04-antiseptic.jpg",
        title: "Sterile Antiseptic Swab Cleansing",
        caption: "Gentle wipe down removing excess surface pigment without irritation.",
        stepBadge: "Step 4: Antiseptic"
      },
      {
        image: "/images/courses/beauty-mole-creation/mole-05-seal.jpg",
        title: "Post-Care Healing Occlusive Shield",
        caption: "Protective breathable film sealing pigment for crisp long-lasting retention.",
        stepBadge: "Step 5: Calm Shield"
      },
      {
        image: "/images/courses/beauty-mole-creation/mole-06-reveal.jpg",
        title: "Natural Seductive Accent Mole Reveal",
        caption: "Subtle, gorgeous, naturally healed aesthetic mark.",
        stepBadge: "Step 6: Accent Mole"
      }
    ]`);
  }
);

// 16. LASH LIFTING
content = content.replace(
  /heroImage:\s*["']\/images\/courses\/[^"']+["'],\s*aboutTitle:\s*["']About the Lash Lifting & Lamination Program["']/,
  `heroImage: "/images/courses/lash-lifting/lash-hero.jpg",\n    aboutTitle: "About the Lash Lifting & Lamination Program"`
);

content = content.replace(
  /slug:\s*["']lash-lifting["'][\s\S]*?gallery:\s*\[[\s\S]*?\]/,
  (match) => {
    return match.replace(/gallery:\s*\[[\s\S]*?\]/, `gallery: [
      {
        image: "/images/courses/lash-lifting/lash-01-shields.jpg",
        title: "Silicone Shield Curve Sizing (S/M/L)",
        caption: "Anatomical eyelid shield selection matching natural lash length and curl goal.",
        stepBadge: "Step 1: Shield Size"
      },
      {
        image: "/images/courses/lash-lifting/lash-02-isolation.jpg",
        title: "Precision Root Lash Isolation",
        caption: "Parallel adhesive combing lifting individual natural lashes without crossing.",
        stepBadge: "Step 2: Lash Isolation"
      },
      {
        image: "/images/courses/lash-lifting/lash-03-perm.jpg",
        title: "Lifting & Curling Perm Solution",
        caption: "Timed thioglycolate formula reshaping keratin bonds at lash roots.",
        stepBadge: "Step 3: Perm Lotion"
      },
      {
        image: "/images/courses/lash-lifting/lash-04-tint.jpg",
        title: "Blue-Black High-Gloss Tinting",
        caption: "Deep jet-black pigment saturation creating mascara-like eye definition.",
        stepBadge: "Step 4: Blue-Black Tint"
      },
      {
        image: "/images/courses/lash-lifting/lash-05-keratin.jpg",
        title: "Keratin & Biotin Peptide Infusion",
        caption: "Deep conditioning serum restoring moisture and strengthening lash cuticle.",
        stepBadge: "Step 5: Keratin Oil"
      },
      {
        image: "/images/courses/lash-lifting/lash-06-curl.jpg",
        title: "Lifted Doll-Eye Volume Curl Reveal",
        caption: "Dramatic upward fan curl lasting 6 to 8 weeks with zero daily mascara.",
        stepBadge: "Step 6: Doll-Eye Curl"
      }
    ]`);
  }
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated coursesData.ts with new dedicated folder paths!');
