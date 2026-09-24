const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'coursesData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Helper to replace gallery and hero for a course slug
function updateCourse(slug, heroImage, galleryArray) {
  const slugRegex = new RegExp('(slug:\\s*["\']' + slug + '["\'][\\s\\S]*?heroImage:\\s*["\'])([^"\']+)(["\'][\\s\\S]*?gallery:\\s*\\[)([\\s\\S]*?)(\\]\\s*,\\s*whyLearn:)');
  
  if (!slugRegex.test(content)) {
    console.error(`Course slug "${slug}" not found in coursesData.ts!`);
    return;
  }
  
  const galleryString = JSON.stringify(galleryArray, null, 6)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, '"')
    .slice(1, -1)
    .trim();

  content = content.replace(slugRegex, (match, p1, oldHero, p2, oldGallery, p3) => {
    return `${p1}${heroImage}${p2}\n${galleryArray.map(item => `      {
        image: "${item.image}",
        title: "${item.title}",
        caption: "${item.caption}",
        stepBadge: "${item.stepBadge}"
      }`).join(',\n')}\n    ${p3}`;
  });
}

// 2. CHEMICAL PEELS
updateCourse('chemical-peels', '/images/courses/chemical-peels/peel-hero.jpg', [
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
    image: "/images/courses/chemical-peels/peel-04-clarity.jpg",
    title: "Crystal Clear Rejuvenated Skin",
    caption: "Post-peel cellular renewal, smooth texture, and luminous tone clarity.",
    stepBadge: "Step 4: Healed Clarity"
  }
]);

// 3. BB GLOW FACIAL
updateCourse('bb-glow-facial', '/images/courses/bb-glow-facial/bbglow-hero.jpg', [
  {
    image: "/images/courses/bb-glow-facial/bbglow-01-shade.jpg",
    title: "Meso-Serum & Shade Customization",
    caption: "Botanical peptide ampoules and custom undertone shade matching in clinical bowl.",
    stepBadge: "Step 1: Shade Blending"
  },
  {
    image: "/images/courses/bb-glow-facial/bbglow-02-infusion.jpg",
    title: "Circular Nano-Infusion Gliding",
    caption: "Fan-brush meso-infusion layering across facial contours for seamless coverage.",
    stepBadge: "Step 2: Meso Infusion"
  },
  {
    image: "/images/courses/bb-glow-facial/bbglow-03-soothing.jpg",
    title: "Calming Therapeutic Mask Infusion",
    caption: "Therapeutic botanical soothing layer quenching active skin after meso infusion.",
    stepBadge: "Step 3: Soothing Infusion"
  },
  {
    image: "/images/courses/bb-glow-facial/bbglow-04-porcelain.jpg",
    title: "Porcelain Glass Skin Reveal",
    caption: "Tone hydration wipe down and radiant, smooth semi-permanent finish.",
    stepBadge: "Step 4: Glass Finish"
  }
]);

// 4. KOREAN FACIAL
updateCourse('korean-facial', '/images/courses/korean-facial/korean-hero.jpg', [
  {
    image: "/images/courses/korean-facial/korean-01-essence.jpg",
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
    image: "/images/courses/korean-facial/korean-04-glass.jpg",
    title: "Dewy Mirror-Like Glass Complexion",
    caption: "Translucent, plump, mirror-reflective Korean glass finish.",
    stepBadge: "Step 4: Dewy Glass"
  }
]);

// 5. HYDRA FACIAL
updateCourse('hydra-facial', '/images/courses/hydra-facial/hydra-hero.jpg', [
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
    image: "/images/courses/hydra-facial/hydra-04-oxygen.jpg",
    title: "98% Pure Oxygen Mist Dome",
    caption: "Pressurized hyperbaric oxygen spray delivering cellular rejuvenation.",
    stepBadge: "Step 4: Oxygen Dome"
  }
]);

// 6. HAIR CHEMICAL
updateCourse('hair-chemical', '/images/courses/hair-chemical/hair-chem-hero.jpg', [
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
    image: "/images/courses/hair-chemical/hair-chem-03-iron.jpg",
    title: "Nanoplasty Thermal Sealing",
    caption: "Temperature-regulated titanium flat iron passing to lock in keratin matrix.",
    stepBadge: "Step 3: Heat Seal"
  },
  {
    image: "/images/courses/hair-chemical/hair-chem-04-gloss.jpg",
    title: "High-Shine Acidic Color Gloss",
    caption: "Mirror shine, silky cuticle closure, and long-lasting tonal brilliance.",
    stepBadge: "Step 4: Gloss Reveal"
  }
]);

// 7. HAIR STYLING
updateCourse('hair-styling', '/images/courses/hair-styling/styling-hero.jpg', [
  {
    image: "/images/courses/hair-styling/styling-01-prep.jpg",
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
    image: "/images/courses/hair-styling/styling-03-braid.jpg",
    title: "Fishtail Mermaid Braid",
    caption: "Multi-strand cascading braid textured with pearl and rhinestone accents.",
    stepBadge: "Step 3: Braid Art"
  },
  {
    image: "/images/courses/hair-styling/styling-04-juda.jpg",
    title: "Royal Bridal Juda Crown",
    caption: "High-glamour traditional Indian bridal bun with dupatta anchor points.",
    stepBadge: "Step 4: Royal Crown"
  }
]);

// 8. HAIR CUTTING
updateCourse('hair-cutting', '/images/courses/hair-cutting/cutting-hero.jpg', [
  {
    image: "/images/courses/hair-cutting/cutting-01-shears.jpg",
    title: "Cobalt Shears & Comb Ergonomics",
    caption: "Proper scissor tension, finger positioning, and clean sectioning control.",
    stepBadge: "Step 1: Shears Ergonomics"
  },
  {
    image: "/images/courses/hair-cutting/cutting-02-baseline.jpg",
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
    image: "/images/courses/hair-cutting/cutting-04-blowout.jpg",
    title: "Dynamic Round-Brush Finish",
    caption: "Polished volume blow-dry showing clean shape, balance, and fluid swing.",
    stepBadge: "Step 4: Dynamic Finish"
  }
]);

// 9. HAIR EXTENSIONS
updateCourse('hair-extensions', '/images/courses/hair-extensions/ext-hero.jpg', [
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
    image: "/images/courses/hair-extensions/ext-03-tape.jpg",
    title: "Invisible Tape-In Sandwich Wefts",
    caption: "Ultra-flat medical-grade polyurethane wefts bonded seamlessly.",
    stepBadge: "Step 3: Tape-Ins"
  },
  {
    image: "/images/courses/hair-extensions/ext-04-volume.jpg",
    title: "Dramatic Length & Volume Transformation",
    caption: "Full head glam with 24-inch natural virgin Remy hair movement.",
    stepBadge: "Step 4: Volume Reveal"
  }
]);

// 10. PROFESSIONAL MAKEUP
updateCourse('professional-makeup', '/images/courses/professional-makeup/makeup-hero.jpg', [
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
    image: "/images/courses/professional-makeup/makeup-03-eyes.jpg",
    title: "Glitter Cut-Crease Eyeshadow",
    caption: "Sharp concealer cut crease, pigment transition, and cosmetic glitter seal.",
    stepBadge: "Step 3: Cut Crease"
  },
  {
    image: "/images/courses/professional-makeup/makeup-04-bridal.jpg",
    title: "Royal Indian Bridal Glam Reveal",
    caption: "Flawless traditional dulhan bridal look with jewellery and bindi styling.",
    stepBadge: "Step 4: Bridal Glam"
  }
]);

// 11. SPMU (semi-permanent-makeup)
updateCourse('semi-permanent-makeup', '/images/courses/spmu/spmu-hero.jpg', [
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
    image: "/images/courses/spmu/spmu-03-pen.jpg",
    title: "Wireless Rotary Pen Micro-Shading",
    caption: "1RL cartridge shading creating pixelated soft ombre powder gradient.",
    stepBadge: "Step 3: Rotary Pen"
  },
  {
    image: "/images/courses/spmu/spmu-04-ombre.jpg",
    title: "Flawless Powder Ombre Eyebrow Reveal",
    caption: "Crisp, smudge-proof, realistic brows lasting 2-3 years.",
    stepBadge: "Step 4: Ombre Powder"
  }
]);

// 12. LIP NEUTRALIZING
updateCourse('lip-neutralizing', '/images/courses/lip-neutralizing/lipneut-hero.jpg', [
  {
    image: "/images/courses/lip-neutralizing/lipneut-01-undertone.jpg",
    title: "Melanin Hyper-Pigmentation Analysis",
    caption: "Assessing cool purple, grey, and deep brown undertones across lip borders.",
    stepBadge: "Step 1: Undertone Check"
  },
  {
    image: "/images/courses/lip-neutralizing/lipneut-02-orange.jpg",
    title: "Warm Orange / Coral Pigment Correction",
    caption: "Custom titanium-free warm modifier blending cancelling dark melanin tones.",
    stepBadge: "Step 2: Color Modifier"
  },
  {
    image: "/images/courses/lip-neutralizing/lipneut-03-pixel.jpg",
    title: "Single-Needle Pixel Shading Deposit",
    caption: "Gentle pendulum movement depositing pigment without trauma or swelling.",
    stepBadge: "Step 3: Pixel Shading"
  },
  {
    image: "/images/courses/lip-neutralizing/lipneut-04-pink.jpg",
    title: "Even Rosy Pink Lip Transformation",
    caption: "Healed warm baby-pink result eliminating dark patches permanently.",
    stepBadge: "Step 4: Natural Pink"
  }
]);

// 13. LIP TINTING
updateCourse('lip-tinting', '/images/courses/lip-tinting/liptint-hero.jpg', [
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
    image: "/images/courses/lip-tinting/liptint-04-blush.jpg",
    title: "Luminous Lip Blush Tint Reveal",
    caption: "Juicy, youthful, tinted velvet lip glow lasting up to 2 years.",
    stepBadge: "Step 4: Blush Tint"
  }
]);

// 14. MICROBLADING
updateCourse('microblading', '/images/courses/microblading/blade-hero.jpg', [
  {
    image: "/images/courses/microblading/blade-01-caliper.jpg",
    title: "Thread & Caliper Symmetry Mapping",
    caption: "Precision geometric measurement aligning head, arch, and tail of the brow.",
    stepBadge: "Step 1: Caliper Mapping"
  },
  {
    image: "/images/courses/microblading/blade-02-handpiece.jpg",
    title: "18U Nano-Blade Handpiece Insertion",
    caption: "Single-use sterilized surgical blade angle calibration (45° to skin).",
    stepBadge: "Step 2: 18U Blade"
  },
  {
    image: "/images/courses/microblading/blade-03-strokes.jpg",
    title: "Crisp Micro-Feather Hair Strokes",
    caption: "Superficial dermal incision depositing pigment with zero bleeding or scarring.",
    stepBadge: "Step 3: Feather Strokes"
  },
  {
    image: "/images/courses/microblading/blade-04-3d.jpg",
    title: "Hyper-Realistic 3D Hair-Stroke Brows",
    caption: "Dense, natural, undetectable 3D brow transformation.",
    stepBadge: "Step 4: 3D Brows"
  }
]);

// 15. BEAUTY MOLE CREATION
updateCourse('beauty-mole-creation', '/images/courses/beauty-mole-creation/mole-hero.jpg', [
  {
    image: "/images/courses/beauty-mole-creation/mole-01-mapping.jpg",
    title: "Facial Aesthetics & Placement Mapping",
    caption: "Choosing iconic Marilyn, cheekbone, or chin points complementing face shape.",
    stepBadge: "Step 1: Placement Map"
  },
  {
    image: "/images/courses/beauty-mole-creation/mole-02-melanin.jpg",
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
    image: "/images/courses/beauty-mole-creation/mole-04-reveal.jpg",
    title: "Natural Seductive Accent Mole Reveal",
    caption: "Subtle, gorgeous, naturally healed aesthetic mark.",
    stepBadge: "Step 4: Accent Mole"
  }
]);

// 16. LASH LIFTING
updateCourse('lash-lifting', '/images/courses/lash-lifting/lash-hero.jpg', [
  {
    image: "/images/courses/lash-lifting/lash-01-shield.jpg",
    title: "Silicone Shield Curve Sizing (S/M/L)",
    caption: "Anatomical eyelid shield selection matching natural lash length and curl goal.",
    stepBadge: "Step 1: Shield Size"
  },
  {
    image: "/images/courses/lash-lifting/lash-02-isolation.jpg",
    title: "Precision Root Lash Isolation & Perm",
    caption: "Parallel adhesive combing lifting individual natural lashes with curling perm solution.",
    stepBadge: "Step 2: Lash Perming"
  },
  {
    image: "/images/courses/lash-lifting/lash-03-tint.jpg",
    title: "Blue-Black High-Gloss Tinting",
    caption: "Deep jet-black pigment saturation creating mascara-like eye definition.",
    stepBadge: "Step 3: Blue-Black Tint"
  },
  {
    image: "/images/courses/lash-lifting/lash-04-curl.jpg",
    title: "Lifted Doll-Eye Volume Curl Reveal",
    caption: "Dramatic upward fan curl lasting 6 to 8 weeks with zero daily mascara.",
    stepBadge: "Step 4: Doll-Eye Curl"
  }
]);

// 17. NAIL EXTENSIONS
updateCourse('nail-extensions', '/images/courses/nail-extensions/nailext-hero.jpg', [
  {
    image: "/images/courses/nail-extensions/nailext-01-prep.jpg",
    title: "Diamond E-File Cuticle & Plate Prep",
    caption: "Gentle cuticle lifting and nail plate dehydration for lifting-free retention.",
    stepBadge: "Step 1: E-File Prep"
  },
  {
    image: "/images/courses/nail-extensions/nailext-02-form.jpg",
    title: "Sculpting Forms & Length Sizing",
    caption: "Precision dual-form attachment customizing client nail extension architecture.",
    stepBadge: "Step 2: Sculpting Forms"
  },
  {
    image: "/images/courses/nail-extensions/nailext-03-apex.jpg",
    title: "Crystal Apex Structure Build",
    caption: "Controlling crystal clear acrylic / polygel bead for strong structural reinforcement.",
    stepBadge: "Step 3: Apex Bead"
  },
  {
    image: "/images/courses/nail-extensions/nailext-04-set.jpg",
    title: "Crisp Shaping & Salon Showcase Set",
    caption: "Crisp coffin / almond perimeter filing and diamond high-gloss UV top coat seal.",
    stepBadge: "Step 4: Finished Set"
  }
]);

// 18. NAIL ART
updateCourse('nail-art', '/images/courses/nail-art/nailart-hero.jpg', [
  {
    image: "/images/courses/nail-art/nailart-01-brush.jpg",
    title: "000 Fine Liner Brush Detailing",
    caption: "Precision fine hand-drawn micro strokes, geometric lines, and floral outlines.",
    stepBadge: "Step 1: Liner Brush"
  },
  {
    image: "/images/courses/nail-art/nailart-02-chrome.jpg",
    title: "Mirror Chrome Powder Buffing",
    caption: "Metallic pigments and holographic flakes buffed to an ultra-reflective mirror sheen.",
    stepBadge: "Step 2: Chrome Buff"
  },
  {
    image: "/images/courses/nail-art/nailart-03-gems.jpg",
    title: "Swarovski Crystal & 3D Florals",
    caption: "Precision wax pen placement of rhinestones, pearls, and acrylic embossed florals.",
    stepBadge: "Step 3: 3D Embellishment"
  },
  {
    image: "/images/courses/nail-art/nailart-04-salon.jpg",
    title: "Luxury Studio Design Showcase",
    caption: "Intricate, salon-ready runway nail art set cured under 48W dual UV/LED lamp.",
    stepBadge: "Step 4: Masterpiece Set"
  }
]);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated all 17 courses (2-18) in coursesData.ts with unique 4 images & heroes!');
