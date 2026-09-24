export interface CourseModule {
  unit: string;
  title: string;
  description: string;
  topics: string[];
}

export interface GalleryItem {
  image: string;
  title: string;
  caption: string;
  stepBadge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CourseData {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Beauty & Skin" | "Hair" | "Makeup" | "Nails";
  tagline: string;
  badge: string;
  heroDescription: string;
  heroImage: string;
  aboutTitle: string;
  aboutDescription: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  curriculum: CourseModule[];
  practicalExperience: {
    title: string;
    description: string;
    steps: string[];
  };
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  gallery: GalleryItem[];
  whyLearn: {
    title: string;
    description: string;
  }[];
  faqs: FaqItem[];
  relatedSlugs: string[];
  toolsAndKit: string[];
}

export const COURSES_LIST: CourseData[] = [
  // ==========================================
  // 1. SKIN
  // ==========================================
  {
    slug: "skin",
    title: "Skin & Advanced Aesthetic Care Course",
    shortTitle: "Skin",
    category: "Beauty & Skin",
    tagline: "Master Skin Science, Diagnostic Analysis & Advanced Clinical Medi-Facial Protocols",
    badge: "Clinical Aesthetics",
    heroDescription:
      "Comprehensive aesthetic training covering dermal anatomy, Fitzpatrick typing, comedone extraction, ultrasonic deep cleansing, galvanic infusion, and scientific skincare regimes.",
    heroImage: "/images/courses/skin/skin-hero.jpg",
    aboutTitle: "About the Professional Skin Care Program",
    aboutDescription: [
      "The Skin & Advanced Aesthetic Care Course at Yashree Institute provides comprehensive, science-backed education on facial skin health, dermal layers, barrier repair, and clinical skincare routines.",
      "Students learn how to diagnose skin conditions accurately under Woods lamp magnification, curate tailored treatment protocols, and perform hands-on cleansing, exfoliation, extraction, and nutrient infusion safely.",
      "Emphasis is placed on clinical sterilization, client consultation ethics, customized post-care guidance, and hands-on practice on diverse skin types and undertones."
    ],
    metaTitle: "Skin Care Course in Indore | Advanced Facial Aesthetics - Yashree Institute",
    metaDescription: "Learn professional skin care, skin anatomy, diagnosis, medi-facials, and clinical protocols at Yashree Institute Indore. Hands-on practical aesthetic training.",
    keywords: ["Skin Course Indore", "Skin care training", "Facial course Indore", "Aesthetic skin training", "Yashree Institute skin"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Dermal Science & Fitzpatrick Skin Classification",
        description: "Foundational understanding of skin layers, epidermal turnover, and melanin physiology.",
        topics: [
          "Structure & physiology of Epidermis, Dermis, and Hypodermis",
          "Fitzpatrick skin scale I to VI and sensitivity markers",
          "Understanding skin barrier function, lipid mantle, and pH balance",
          "Identifying dry, oily, combination, sensitive, and acne-prone skin"
        ]
      },
      {
        unit: "Module 02",
        title: "Clinical Skin Diagnostics & Woods Lamp Analysis",
        description: "Professional tools and consultation frameworks for precise skin diagnosis.",
        topics: [
          "Magnifying lamp and Woods light diagnostic techniques",
          "Identifying pigmentation, dehydration lines, and comedones",
          "Client consultation, medical contraindication screening, and consent forms",
          "Developing customized homecare and salon treatment roadmaps"
        ]
      },
      {
        unit: "Module 03",
        title: "Deep Cleansing, Extractions & Exfoliation Protocols",
        description: "Hygienic extraction methodologies and advanced physical/enzymatic exfoliation.",
        topics: [
          "Sterile manual comedone extraction and comedone loop handling",
          "Ultrasonic skin scrubber cavitation and pore decongestion",
          "Enzymatic papaya/pineapple gentle exfoliation techniques",
          "High-frequency ozone direct & indirect spark therapy for acne"
        ]
      },
      {
        unit: "Module 04",
        title: "Acupressure Facial Massage, Masks & Serum Infusion",
        description: "Therapeutic massage strokes, lymphatic drainage, and customized mask layering.",
        topics: [
          "Lymphatic drainage facial massage techniques and pressure points",
          "Galvanic iontophoresis and active serum infusion",
          "Alginate peel-off masks, biocellulose sheets, and clay packs",
          "Post-treatment barrier restoration and SPF broad-spectrum protocols"
        ]
      }
    ],
    practicalExperience: {
      title: "Hands-on Clinical Skincare Stations",
      description: "Students perform live diagnostic evaluations and step-by-step facials in our sanitized clinical salon setup.",
      steps: [
        "Patient intake, Fitzpatrick profiling, and skin health documentation",
        "Ultrasonic deep pore cleansing and aseptic comedone extraction",
        "Active serum galvanic infusion and acupressure lifting massage",
        "Customized hydrojelly mask formulation and SPF application"
      ]
    },
    highlights: [
      {
        title: "Comprehensive Skin Anatomy",
        description: "Learn cellular biology, dermal layers, and skin barrier chemistry.",
        icon: "BookOpen"
      },
      {
        title: "Clinical Diagnostics Equipment",
        description: "Master skin scanners, Woods lamps, and moisture analyzers.",
        icon: "Sparkles"
      },
      {
        title: "Hands-on Live Model Training",
        description: "Direct supervised practice across all major skin types and concerns.",
        icon: "ShieldCheck"
      },
      {
        title: "Sanitation & Safety Standards",
        description: "Hospital-grade autoclaving, disposable protocols, and antiseptic procedures.",
        icon: "Award"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "High Demand Across Salons & Clinics",
        description: "Skincare treatments represent the most consistent recurring service in beauty studios and wellness spas."
      },
      {
        title: "Scientific Foundation for Advanced Aesthetics",
        description: "Deep understanding of dermal layers is mandatory before progressing into chemical peels, lasers, and PMU."
      },
      {
        title: "Client Retention & Consultation Confidence",
        description: "Educated skin specialists build trust through knowledgeable consultations and customized product regimens."
      }
    ],
    faqs: [
      {
        question: "Is prior aesthetic experience needed to enroll in the Skin course?",
        answer: "No prior experience is necessary. The curriculum starts from foundational dermal biology and progresses systematically into clinical hands-on protocols."
      },
      {
        question: "Will I practice on live clients and dummy models?",
        answer: "Yes, training includes mannequin simulation for technique mastery followed by supervised practice on live models under expert guidance."
      },
      {
        question: "What machines and diagnostic tools will I learn to operate?",
        answer: "You will learn to operate skin analyzers, Woods lamps, ultrasonic cavitation scrubbers, high frequency ozone devices, and galvanic iontophoresis machines."
      },
      {
        question: "How does this course cover infection control and sanitation?",
        answer: "We emphasize medical-grade sterilization, autoclave procedures, disposable PPE protocols, and antiseptic client prep to maintain pristine hygiene."
      }
    ],
    relatedSlugs: ["chemical-peels", "hydra-facial", "korean-facial", "bb-glow-facial"],
    toolsAndKit: ["Ultrasonic Cavitation Scrubber", "High-Frequency Ozone Wand", "Woods Lamp Skin Analyzer", "Comedone Extractor Kit", "Galvanic Infusion Device", "Clinical Disinfection Station"]
  },

  // ==========================================
  // 2. CHEMICAL PEELS
  // ==========================================
  {
    slug: "chemical-peels",
    title: "Chemical Peels & Clinical Exfoliation Course",
    shortTitle: "Chemical Peels",
    category: "Beauty & Skin",
    tagline: "Master AHA, BHA, Glycolic, Salicylic, Lactic, TCA & Combination Peel Science",
    badge: "Clinical Dermatology",
    heroDescription:
      "Understand acid percentages, pH depth, keratolytic action, Fitzpatrick risk management, hyperpigmentation correction, acne protocols, and post-peel barrier neutralization.",
    heroImage: "/images/courses/chemical-peels/peel-hero.jpg",
    aboutTitle: "About the Chemical Peels Program",
    aboutDescription: [
      "The Chemical Peels & Clinical Exfoliation Course at Yashree Institute provides rigorous education on biochemical skin resurfacing, keratolysis, and cellular turnover.",
      "Students learn how to assess skin indications (melasma, post-inflammatory hyperpigmentation, active acne, fine lines) and safely select the appropriate acid molecule and concentration.",
      "The training emphasizes neutralization endpoints, frosting recognition, pre-peel priming, emergency wash protocols, and comprehensive homecare barrier restoration."
    ],
    metaTitle: "Chemical Peels Course in Indore | AHA, BHA, Glycolic, Salicylic - Yashree Institute",
    metaDescription: "Master chemical peels, acid percentages, pigmentation treatment, acne peels, and clinical safety at Yashree Institute Indore. Hands-on aesthetic training.",
    keywords: ["Chemical Peels Course Indore", "Glycolic peel training", "Salicylic peel course", "Aesthetic chemical peels", "Skin pigmentation treatment"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Acid Chemistry, pH & Penetration Depths",
        description: "Understanding AHA, BHA, PHA, and TCA molecular weights.",
        topics: [
          "Alpha Hydroxy Acids (Glycolic, Lactic, Mandelic) science",
          "Beta Hydroxy Acids (Salicylic) lipid-solubility in pore decongestion",
          "Trichloroacetic Acid (TCA) and Modified Jessner peel formulations",
          "Free acid value, pKa constants, and concentration percentages"
        ]
      },
      {
        unit: "Module 02",
        title: "Client Profiling & Fitzpatrick Safety Guidelines",
        description: "Preventing post-inflammatory hyperpigmentation on Indian skin.",
        topics: [
          "Assessing Fitzpatrick skin types III to V common in India",
          "Pre-peel skin priming with tyrosinase inhibitors (2-4 week prep)",
          "Contraindications: active herpes, isotretinoin use, open wounds",
          "Client informed consent documentation and patch test protocols"
        ]
      },
      {
        unit: "Module 03",
        title: "Step-by-Step Peel Application & Neutralization",
        description: "Application strokes, timer tracking, and endpoint recognition.",
        topics: [
          "Degreasing skin with alcohol/acetone prep solutions",
          "Layering techniques with fan brushes and gauze swabs",
          "Monitoring erythema, blanching, and pinpoint frosting",
          "Alkaline neutralization vs self-neutralizing peel protocols"
        ]
      },
      {
        unit: "Module 04",
        title: "Post-Peel Care, Barrier Repair & Complication Handling",
        description: "Managing flaking, soothing redness, and sun protection.",
        topics: [
          "Post-peel soothing with cold compresses and hyaluronic serums",
          "Ceramide and peptide barrier creams for epidermal recovery",
          "Broad-spectrum physical zinc oxide sunscreen compliance",
          "Managing unexpected burns, persistent erythema, and PIH reversal"
        ]
      }
    ],
    practicalExperience: {
      title: "Supervised Clinical Peel Demonstrations",
      description: "Students perform pre-peel prep, timed acid application, neutralization, and post-peel soothing in clinical environments.",
      steps: [
        "Skin degreasing, sensitive area vaseline barrier protection",
        "Layered acid application with real-time timer tracking",
        "Neutralizer spray application and cold compress soothing",
        "Soothing mask application and strict post-care client briefing"
      ]
    },
    highlights: [
      {
        title: "Acid Molecule Science",
        description: "Understand Glycolic, Salicylic, Lactic, Mandelic, and TCA.",
        icon: "BookOpen"
      },
      {
        title: "Indian Skin Fitzpatrick Safety",
        description: "Prevent PIH and complications on skin types III-VI.",
        icon: "ShieldCheck"
      },
      {
        title: "Pigmentation & Acne Treatment",
        description: "Formulate targeted protocols for melasma, acne, and tanning.",
        icon: "Sparkles"
      },
      {
        title: "Clinical Neutralization Mastery",
        description: "Master timer-based and endpoint-based neutralization.",
        icon: "Award"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Most Effective Non-Invasive Skin Treatment",
        description: "Chemical peels produce visible clinical improvements for hyperpigmentation, acne scars, and dull skin texture."
      },
      {
        title: "High Client Demand in Aesthetic Clinics",
        description: "Peel packages (3-6 sessions) ensure sustained client bookings and high salon loyalty."
      },
      {
        title: "Essential Knowledge for Aesthetic Practitioners",
        description: "Understanding acid chemistry elevates you from a traditional beautician into a clinical aesthetician."
      }
    ],
    faqs: [
      {
        question: "Is chemical peel training safe for beginners?",
        answer: "Yes, our curriculum starts with mild superficial peels before advancing, with heavy emphasis on safety, timer tracking, and neutralizers."
      },
      {
        question: "What specific peels are included in the practical training?",
        answer: "You will practice with Glycolic acid, Salicylic acid, Lactic acid, Mandelic acid, and combination brightening peels."
      },
      {
        question: "How do we prevent burns or hyperpigmentation on darker skin tones?",
        answer: "We train extensively on Fitzpatrick skin typing, pre-peel tyrosinase inhibitor priming, low-concentration building, and strict post-care."
      },
      {
        question: "What equipment and solutions are used during training?",
        answer: "Students use clinical degreasing prep, professional peel solutions, neutralizer sprays, fan brushes, and cold compress equipment."
      }
    ],
    relatedSlugs: ["skin", "hydra-facial", "korean-facial", "bb-glow-facial"],
    toolsAndKit: ["Graded Chemical Peel Solutions Set", "Alkaline Neutralizer Spray", "Clinical Fan Brushes & Dappen Dishes", "Digital Stopwatch Timer", "Barrier Occlusive Ointment", "Calming Hydrogel Sheet Masks"]
  },

  // ==========================================
  // 3. BB GLOW FACIAL
  // ==========================================
  {
    slug: "bb-glow-facial",
    title: "BB Glow Facial & Nano-Needling Course",
    shortTitle: "BB Glow Facial",
    category: "Beauty & Skin",
    tagline: "Master Meso-Infusion, Nano-Needling, Semi-Permanent Foundation & LED Phototherapy",
    badge: "Semi-Permanent Skincare",
    heroDescription:
      "Learn sterile nano-cartridge micro-needling, meso-white pigment blending, peptides, niacinamide infusion, LED phototherapy stimulation, and long-lasting glass-skin radiance.",
    heroImage: "/images/courses/bb-glow-facial/bbglow-hero.jpg",
    aboutTitle: "About the BB Glow Facial Program",
    aboutDescription: [
      "The BB Glow Facial & Nano-Needling Course at Yashree Institute introduces students to the globally popular Korean semi-permanent brightening treatment.",
      "Students learn how to use automated Derma-Pen devices with microscopic nano-needles to infuse nutrient-rich meso serums and safe organic color pigments into the upper epidermal layer.",
      "The treatment evens out skin tone, camouflages redness, reduces dark circles, and delivers a lasting luminous glow without clogging pores or entering the deeper dermis."
    ],
    metaTitle: "BB Glow Facial Course in Indore | Nano Needling & Meso Glow - Yashree Institute",
    metaDescription: "Master BB Glow facial treatment, nano-needling, derma pen devices, meso serums, and LED phototherapy at Yashree Institute Indore. 100% practical training.",
    keywords: ["BB Glow Course Indore", "Nano needling training", "Derma pen course", "Semi permanent foundation training", "Meso glow facial"],
    curriculum: [
      {
        unit: "Module 01",
        title: "BB Glow Science & Epidermal Infusion Mechanics",
        description: "Understanding nano-needles, depth settings, and serum safety.",
        topics: [
          "Differences between micro-needling (collagen induction) and nano-needling",
          "Upper epidermal pigment deposition without bleeding or downtime",
          "Ingredients analysis: Niacinamide, Hyaluronic acid, Peptides, and Plant extracts",
          "Sanitation, single-use needle disposal, and machine barrier wrapping"
        ]
      },
      {
        unit: "Module 02",
        title: "Derma Pen Machine Operation & Speed Calibration",
        description: "Device handling, stroke patterns, and cartridge selection.",
        topics: [
          "Derma pen vibration frequencies and needle depth calibration (0.25mm to 0.5mm)",
          "Nano-round and nano-square cartridge selection for delicate zones",
          "Linear and circular glide techniques for even serum distribution",
          "Facial zone mapping: forehead, cheeks, nose, chin, and under-eye area"
        ]
      },
      {
        unit: "Module 03",
        title: "Exfoliation Prep, Shade Matching & Meso Layering",
        description: "Pre-treatment enzymatic peeling and custom pigment blending.",
        topics: [
          "Exfoliating gel and neutralizing foam pre-cleansing protocol",
          "Shade matching: Light, Light-Medium, Medium, Deep, and Dark pigments",
          "Layering hydrating meso ampoules before tinted serum infusion",
          "Targeted blending for under-eye dark circles and acne redness"
        ]
      },
      {
        unit: "Module 04",
        title: "LED Phototherapy, Soothing Masks & Client Protocols",
        description: "Enhancing glow with photon LED light and post-care guidelines.",
        topics: [
          "Red LED (collagen), Blue LED (acne), and Yellow LED (brightening) wavelength therapy",
          "Biocellulose and peptide repair mask application after treatment",
          "Post-treatment instructions: 24-hour water avoidance and SPF compliance",
          "Structuring multi-session packages (3 to 5 treatments for longevity)"
        ]
      }
    ],
    practicalExperience: {
      title: "Complete Step-by-Step BB Glow Execution",
      description: "Students perform full BB Glow facials on live models using automated Derma-Pens, sterile ampoules, and LED light tunnels.",
      steps: [
        "Exfoliation gel prep and neutralizing foam rinse",
        "Meso-serum shade selection and Derma-Pen nano-needling infusion",
        "Photon LED phototherapy session (15-20 minutes)",
        "Soothing peptide mask and SPF application"
      ]
    },
    highlights: [
      {
        title: "Automated Derma-Pen Handling",
        description: "Master digital nano-needling speed and depth settings.",
        icon: "Sparkles"
      },
      {
        title: "Customized Meso Shade Blending",
        description: "Match complexions accurately from fair to deep undertones.",
        icon: "BookOpen"
      },
      {
        title: "Multi-Wavelength LED Therapy",
        description: "Incorporate Red, Blue, and Yellow light photo-stimulation.",
        icon: "Award"
      },
      {
        title: "Instant Glass-Skin Finish",
        description: "Deliver immediate radiance with zero pain or downtime.",
        icon: "ShieldCheck"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Trendy High-Margin Facial Service",
        description: "BB Glow is one of the most requested modern aesthetic treatments among clients wanting instant radiance."
      },
      {
        title: "Pain-Free with Zero Downtime",
        description: "Clients love that nano-needling does not cause bleeding, peeling, or downtime like traditional micro-needling."
      },
      {
        title: "Repeat Package Bookings",
        description: "Treatments are sold in series of 3-5 sessions, guaranteeing repeat appointments and client retention."
      }
    ],
    faqs: [
      {
        question: "Is the BB Glow facial painful?",
        answer: "No, because it uses microscopic nano-cartridges that only reach the upper epidermis without penetrating into nerve endings."
      },
      {
        question: "Will the BB Glow pigments clog pores or cause acne?",
        answer: "No, approved meso pigments are non-comedogenic, enriched with peptides, and naturally shed with epidermal cellular turnover."
      },
      {
        question: "How long do the results of a BB Glow session last?",
        answer: "A single session delivers glow for 1-2 weeks; a full series of 3 to 4 treatments maintains radiant results for up to 4-6 months."
      },
      {
        question: "Are practice machines and serums provided in class?",
        answer: "Yes, automated Derma-Pens, sterile nano cartridges, meso ampoules, and LED therapy units are provided for hands-on learning."
      }
    ],
    relatedSlugs: ["korean-facial", "hydra-facial", "skin", "chemical-peels"],
    toolsAndKit: ["Wireless Automated Derma-Pen Device", "Sterile Nano-Round Cartridges", "Multi-Shade BB Meso Ampoules Set", "Multi-Color LED Phototherapy Tunnel", "Exfoliating Gel & Neutralizing Foam", "Post-Treatment Peptide Soothing Masks"]
  },

  // ==========================================
  // 4. KOREAN FACIAL
  // ==========================================
  {
    slug: "korean-facial",
    title: "Korean Glass Skin & Spicule Facial Course",
    shortTitle: "Korean Facial",
    category: "Beauty & Skin",
    tagline: "Master K-Beauty Double Cleansing, Spicule Bio-Microneedling, Ampoule Layering & Glow Protocols",
    badge: "K-Beauty Aesthetics",
    heroDescription:
      "Master the famous 10-step Korean skincare method: oil & water double cleansing, natural sea-sponge spicule bio-needling, essence sandwiching, cryo-sculpting, and porcelain glass-skin finishing.",
    heroImage: "/images/courses/korean-facial/korean-hero.jpg",
    aboutTitle: "About the Korean Glass Skin Program",
    aboutDescription: [
      "The Korean Glass Skin & Spicule Facial Course teaches the revolutionary principles of K-Beauty aesthetics centered on skin barrier health, extreme hydration, and gentle cellular renewal.",
      "Students master the famous 10-step Korean facial protocol, including botanical oil double cleansing, rice water essence layering, cryo-globe lymphatic sculpting, and seaweed spicule bio-microneedling.",
      "This program equips aestheticians to deliver poreless, translucent, and deeply hydrated glass skin finishes that are trending across luxury salons worldwide."
    ],
    metaTitle: "Korean Facial Course in Indore | Glass Skin & Spicule Bio-Needling - Yashree Institute",
    metaDescription: "Learn authentic Korean glass skin facials, spicule bio-microneedling, double cleansing, and ampoule layering at Yashree Institute Indore. Practical training.",
    keywords: ["Korean Facial Course Indore", "Glass Skin training", "Spicule bio needling", "K-Beauty facial course", "Deepika Patidar aesthetics"],
    curriculum: [
      {
        unit: "Module 01",
        title: "K-Beauty Philosophy & The 10-Step Protocol",
        description: "The holistic Korean skincare approach to hydration and barrier repair.",
        topics: [
          "Understanding the K-Beauty philosophy: Gentle, cumulative, barrier-first care",
          "Step 1 & 2: Hydrophilic oil cleansing followed by amino acid foaming wash",
          "Step 3 & 4: Rice ferment softening toners and multi-layer essence patting",
          "Understanding Galactomyces, Snail Mucin, Centella Asiatica (Cica), and Ginseng"
        ]
      },
      {
        unit: "Module 02",
        title: "Natural Spicule Bio-Microneedling Therapy",
        description: "Liquid microneedling using hydrolyzed marine sponge spicules.",
        topics: [
          "What are sponge spicules and how they stimulate collagen without needles",
          "Massaging microscopic bio-spicules into the epidermal matrix",
          "72-hour sustained active cellular stimulation and natural peeling",
          "Indications: texture refinement, enlarged pores, and hyperpigmentation"
        ]
      },
      {
        unit: "Module 03",
        title: "Cryo-Sculpting, Gua Sha & Lymphatic Drainage",
        description: "Temperature-controlled sculpting tools for depuffing and contouring.",
        topics: [
          "Cryo globe cooling therapy to shrink pores and soothe inflammation",
          "Traditional Korean jade and rose quartz Gua Sha facial lifting strokes",
          "Targeting lymph nodes along the jawline, clavicle, and neck for depuffing",
          "Hydrogel and modeling rubber mask formulation and peeling"
        ]
      },
      {
        unit: "Module 04",
        title: "Glass Skin Sealing, Homecare & Salon Packages",
        description: "The final barrier locks for translucent porcelain radiance.",
        topics: [
          "Ceramide and hyaluronic acid emulsion locking techniques",
          "Non-sticky dewdrop sun essence application for high-gloss finish",
          "Curating customized K-beauty morning and evening home routines",
          "Pricing and marketing high-ticket Korean glass skin packages"
        ]
      }
    ],
    practicalExperience: {
      title: "Authentic Multi-Step Korean Facial Practice",
      description: "Students execute the full multi-tier glass skin protocol on live models using imported K-Beauty products and cooling cryo tools.",
      steps: [
        "Botanical oil double-cleansing and gentle enzymatic pore refining",
        "Spicule bio-micro-needling massage and ampoule sandwiching",
        "Cryo-globe lymphatic sculpting and modeling rubber mask setting",
        "Dewy essence locking and glass-skin final presentation"
      ]
    },
    highlights: [
      {
        title: "Authentic K-Beauty Protocols",
        description: "Learn the complete 10-step glass skin layered methodology.",
        icon: "Sparkles"
      },
      {
        title: "Spicule Bio-Microneedling",
        description: "Master needle-free natural collagen stimulation.",
        icon: "Award"
      },
      {
        title: "Cryo-Globe & Gua Sha Sculpting",
        description: "Contour face shape and drain lymphatic fluid.",
        icon: "ShieldCheck"
      },
      {
        title: "High-Ticket Client Demand",
        description: "Offer the single most trending facial service in the industry.",
        icon: "BookOpen"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Globally Trending Skincare Movement",
        description: "Korean Glass Skin is currently the most searched and requested facial trend worldwide."
      },
      {
        title: "Gentle Yet Highly Effective",
        description: "Appeals to clients who dislike harsh chemical peels or invasive needles but want remarkable glow."
      },
      {
        title: "High Client Retention & Retail Potential",
        description: "Korean skincare clients frequently purchase recommended homecare ampoules and essences."
      }
    ],
    faqs: [
      {
        question: "What makes Korean facials different from traditional European facials?",
        answer: "Korean facials emphasize layered hydration, gentle enzyme exfoliation, bio-spicules, and cooling cryotherapy rather than harsh squeezing or heavy scrubbing."
      },
      {
        question: "What are sponge spicules and is it painful?",
        answer: "Spicules are microscopic natural silica needles derived from marine sponges. They cause a mild prickling sensation that stimulates natural skin renewal."
      },
      {
        question: "Can this facial be performed on sensitive or acne-prone skin?",
        answer: "Yes, K-beauty formulations rich in Centella Asiatica, Mugwort, and Heartleaf are specifically formulated to calm inflammation and acne."
      },
      {
        question: "What tools are utilized during the training?",
        answer: "You will learn to operate cryogenic facial globes, ultrasonic spatulas, Gua Sha sculpting stones, and modeling rubber mask bowls."
      }
    ],
    relatedSlugs: ["bb-glow-facial", "hydra-facial", "skin", "chemical-peels"],
    toolsAndKit: ["Stainless Steel Cryo-Globes", "Natural Rose Quartz Gua Sha Stones", "Hydrolyzed Spicule Bio-Serum Kit", "K-Beauty 10-Step Ampoules Set", "Modeling Rubber Mask Alginate Kit", "Dewy Barrier Sun Essence"]
  },

  // ==========================================
  // 5. HYDRA FACIAL
  // ==========================================
  {
    slug: "hydra-facial",
    title: "Hydra Facial & Clinical Hydro-Dermabrasion",
    shortTitle: "Hydra Facial",
    category: "Beauty & Skin",
    tagline: "Master Vortex Suction, Hydro-Exfoliation, Oxygen Jet Spray, Ultrasonic Scrubbing & RF Skin Tightening",
    badge: "Clinical Medi-Facial",
    heroDescription:
      "Learn multi-functional 7-in-1 Hydra Facial device operation: vortex vacuum extraction, lactic/salicylic hydro-peel infusion, cold hammer tightening, ultrasonic cavitation, oxygen spray, and bipolar radiofrequency.",
    heroImage: "/images/courses/hydra-facial/hydra-hero.jpg",
    aboutTitle: "About the Hydra Facial Program",
    aboutDescription: [
      "The Hydra Facial & Clinical Hydro-Dermabrasion Course at Yashree Institute provides comprehensive hands-on training on modern multi-functional clinical medi-facial machines.",
      "Students master the mechanics of vortex suction technology that painlessly vacuums out blackheads, sebum, and dead cells while simultaneously infusing hydrating serums.",
      "The program covers full 7-in-1 machine handling: Hydro-Dermabrasion handpieces, Oxygen Spray guns, Ultrasonic Scrubber spatulas, Bipolar Radiofrequency, and Cryo Cold Hammers."
    ],
    metaTitle: "Hydra Facial Course in Indore | 7-in-1 Machine Medi-Facial - Yashree Institute",
    metaDescription: "Master Hydra Facial 7-in-1 machine operation, vortex suction, hydro-dermabrasion, and RF skin tightening at Yashree Institute Indore. Hands-on clinical training.",
    keywords: ["Hydra Facial Course Indore", "Hydro dermabrasion training", "7 in 1 facial machine", "Medi facial course", "Clinical aesthetic training"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Hydro-Dermabrasion Science & Machine Engineering",
        description: "Understanding vortex-fusion technology, suction bars, and serum tanks.",
        topics: [
          "Physics of negative pressure vacuum suction and vortex tip spiral grooves",
          "Understanding Solution Tanks: S1 (Lactic acid), S2 (Salicylic acid), S3 (Hyaluronic & Peptides)",
          "Sterilization of spiral tips, waste bottle drainage, and internal pipe auto-cleaning",
          "Client indications, contraindications, and skin sensitivity checks"
        ]
      },
      {
        unit: "Module 02",
        title: "Vortex Cleansing, Acid Peel & Painless Extraction",
        description: "Step-by-step handpiece gliding for complete pore decongestion.",
        topics: [
          "Step 1: Vortex Cleansing with lactic acid to dissolve superficial stratum corneum",
          "Step 2: Vortex Hydro-Peel with salicylic acid to dissolve sebum in T-zone",
          "Step 3: Painless vortex vacuum extraction of stubborn blackheads and comedones",
          "Adjusting vacuum bar pressure for delicate, mature, and sensitive skin types"
        ]
      },
      {
        unit: "Module 03",
        title: "Ultrasonic, Oxygen Spray & Radiofrequency Tightening",
        description: "Mastering the auxiliary handles of 7-in-1 aesthetic devices.",
        topics: [
          "Ultrasonic cavitation scrubber for deep pore peeling and product sonophoresis",
          "High-pressure Oxygen Jet Spray gun for micro-misting antioxidant serums",
          "Bipolar Radiofrequency (RF) handle for collagen contraction and skin firming",
          "Ultrasound eye probe for transdermal dark circle serum delivery"
        ]
      },
      {
        unit: "Module 04",
        title: "Cold Hammer Cryo-Sealing & Treatment Protocol Customization",
        description: "Pore closing, soothing erythema, and packaging medi-facials.",
        topics: [
          "Cold hammer cryo application (-5°C) to lock in active serums and minimize redness",
          "Customizing protocols: Anti-Acne Hydra, Anti-Aging Hydra, and Bridal Glow Hydra",
          "Post-treatment sunscreen protocols and client aftercare guidance",
          "Machine maintenance, filter replacement, and sanitary clinic workflows"
        ]
      }
    ],
    practicalExperience: {
      title: "Extensive Hands-on 7-in-1 Machine Practice",
      description: "Every student operates the multi-functional Hydra Facial workstation on live clients under certified instructor guidance.",
      steps: [
        "Machine inspection, solution tank refilling, and tip sterilization",
        "Vortex suction hydro-cleansing and T-zone blackhead extraction",
        "Ultrasonic serum infusion, RF collagen tightening, and Oxygen spray",
        "Cold hammer cryo-sealing and waste canister inspection"
      ]
    },
    highlights: [
      {
        title: "7-in-1 Machine Mastery",
        description: "Master Vortex, Oxygen Jet, RF, Ultrasound, Scrubber, and Cold Hammer.",
        icon: "Sparkles"
      },
      {
        title: "Painless Vacuum Extraction",
        description: "Extract blackheads instantly without needles or manual pinching.",
        icon: "ShieldCheck"
      },
      {
        title: "Customized Clinical Protocols",
        description: "Tailor medi-facials for acne, aging, pigmentation, and brides.",
        icon: "Award"
      },
      {
        title: "Highest Demanded Medi-Facial",
        description: "The number one requested machine facial in modern clinics.",
        icon: "BookOpen"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Gold Standard in Clinical Skincare",
        description: "Hydra Facial is the single most recognized and requested medi-facial brand service across clinics and luxury salons."
      },
      {
        title: "Instant Visible Results with High Client Retention",
        description: "Clients immediately see extracted sebum in the waste jar and luminous skin, resulting in monthly re-bookings."
      },
      {
        title: "Essential for Modern Aesthetic Clinics",
        description: "Mastering clinical machine operations is essential for modern aesthetic practitioners seeking top salon roles."
      }
    ],
    faqs: [
      {
        question: "Will I learn how to operate all handles on the 7-in-1 machine?",
        answer: "Yes, you will master the Hydro-dermabrasion handle, Ultrasonic scrubber, Ultrasound probe, Bipolar RF, Oxygen spray, and Cold hammer."
      },
      {
        question: "What serums are used in the three solution tanks?",
        answer: "Tank A contains lactic acid for cleansing, Tank B contains salicylic acid for extractions, and Tank C contains hyaluronic acid and peptide nutrients."
      },
      {
        question: "Is Hydra Facial safe for all skin types?",
        answer: "Yes, the vacuum suction pressure and solution flow are fully adjustable, making it suitable for sensitive, dry, and acne-prone skin."
      },
      {
        question: "Do students get to practice on live models?",
        answer: "Yes, practical training includes performing complete 60-minute Hydra Facial sessions on live clients with instructor supervision."
      }
    ],
    relatedSlugs: ["skin", "chemical-peels", "bb-glow-facial", "korean-facial"],
    toolsAndKit: ["Multi-Functional 7-in-1 Hydra Machine Workstation", "Sterile Spiral Silicone & Diamond Tips", "Specialized Hydro-Dermabrasion Solutions (A, B, C)", "High-Pressure Oxygen Spray Gun", "Bipolar Radiofrequency Handpiece", "Cryo Cold Hammer Tool"]
  },

  // ==========================================
  // 6. HAIR CHEMICAL
  // ==========================================
  {
    slug: "hair-chemical",
    title: "Hair Chemical Treatments & Color Science",
    shortTitle: "Hair Chemical",
    category: "Hair",
    tagline: "Master Keratin, Nanoplastia, Botox, Rebonding, Balayage & Global Color Chemistry",
    badge: "Advanced Hair Science",
    heroDescription:
      "Deep dive into hair structure, pH science, disulfide bond realignment, smoothing therapies (Keratin, Botox, Nanoplastia), and precision color formulation.",
    heroImage: "/images/courses/hair-chemical/hair-chem-hero.jpg",
    aboutTitle: "About the Hair Chemical & Color Course",
    aboutDescription: [
      "The Hair Chemical Treatments & Color Science program is designed for stylists seeking mastery over hair restructuring, smoothing therapies, and advanced color formulation.",
      "Students learn how to assess porosity, elasticity, and chemical damage before formulating lightening agents, developers, permanent dyes, and restructuring treatments.",
      "The course provides thorough practical exposure to Keratin Gloss, Hair Botox, Nanoplastia, Permanent Straightening, Foiling techniques, Balayage melts, and Bond-repair systems."
    ],
    metaTitle: "Hair Chemical & Color Course Indore | Keratin, Botox, Balayage - Yashree Institute",
    metaDescription: "Master hair chemical treatments, keratin, nanoplastia, hair botox, rebonding, balayage, and global color at Yashree Institute Indore. 100% practical training.",
    keywords: ["Hair Chemical Course", "Keratin training Indore", "Balayage course", "Hair color masterclass", "Nanoplastia training"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Trichology, Hair Structure & pH Scale Science",
        description: "Understanding hair cortex, cuticle bonds, and chemical reactivity.",
        topics: [
          "Cuticle, Cortex, and Medulla anatomical breakdown",
          "Disulfide bonds, hydrogen bonds, and salt linkages",
          "The chemical pH scale and its impact on hair elasticity",
          "Porosity, density, and elasticity strand test protocols"
        ]
      },
      {
        unit: "Module 02",
        title: "Smoothing, Straightening & Rebonding Systems",
        description: "Step-by-step chemical realignment and thermal restructuring.",
        topics: [
          "Permanent Straightening and Rebonding chemical process",
          "Keratin Gloss smoothing therapy and protein infusion",
          "Nanoplastia organic amino-acid restructuring",
          "Hair Botox deep conditioning and cuticle sealing"
        ]
      },
      {
        unit: "Module 03",
        title: "Hair Color Theory, Undercoats & Formulation",
        description: "The universal color wheel, developer volumes, and neutralizers.",
        topics: [
          "Color wheel, contributing undertones, and tonal neutralization",
          "Volume 10, 20, 30, and 40 developer selection and mixing ratios",
          "Root touch-ups, 100% grey coverage, and global color application",
          "Pre-lightening, bleach formulation, and toner balancing"
        ]
      },
      {
        unit: "Module 04",
        title: "Advanced Highlighting, Balayage & Bond Repair",
        description: "Modern artistic foiling, freehand painting, and plex therapies.",
        topics: [
          "Balayage freehand painting and seamless shadow roots",
          "Babylights, classic foil placement, and chunky highlights",
          "Plex and bond-building repair treatments during chemical services",
          "Chemical damage restoration and post-color salon aftercare"
        ]
      }
    ],
    practicalExperience: {
      title: "Live Salon Chemical & Color Application",
      description: "Work with professional chemical products, mixing scales, foiling boards, and temperature-controlled irons on live models.",
      steps: [
        "Hair diagnosis, elasticity testing, and client color consultation",
        "Precision sectioning, developer calculation, and product application",
        "Thermal activation, iron pass technique, and neutralizing wash",
        "Deep bond conditioning, blowout, and final styling review"
      ]
    },
    highlights: [
      {
        title: "Trichology & Bond Science",
        description: "Understand the scientific why behind every chemical formula.",
        icon: "BookOpen"
      },
      {
        title: "High-Ticket Smoothing Services",
        description: "Learn Keratin, Nanoplastia, and Hair Botox protocols.",
        icon: "Sparkles"
      },
      {
        title: "Modern Balayage & Ombre",
        description: "Master modern freehand painting and blending techniques.",
        icon: "Award"
      },
      {
        title: "Bond-Repair & Plex Technologies",
        description: "Protect hair integrity during aggressive lightening services.",
        icon: "ShieldCheck"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Highest Revenue Services in Hair Salons",
        description: "Chemical treatments like Keratin and Balayage carry the highest ticket values and client loyalty in modern salons."
      },
      {
        title: "Eliminate Guesswork and Product Errors",
        description: "Understanding color chemistry and bond science prevents disasters and guarantees consistent results."
      },
      {
        title: "Essential for Senior Stylist Progression",
        description: "Mastery of chemical services is a core prerequisite for advanced salon stylists and color specialists."
      }
    ],
    faqs: [
      {
        question: "What chemical smoothing treatments are covered in this course?",
        answer: "The course covers Keratin smoothing, Hair Botox therapy, Nanoplastia, Permanent Straightening, and Rebonding techniques."
      },
      {
        question: "Will I learn how to choose the right developer and toner?",
        answer: "Yes, you will learn comprehensive color theory, undertone neutralization, and how to accurately choose 10, 20, 30, or 40 volume developers."
      },
      {
        question: "Are practice products provided during the training?",
        answer: "Yes, all professional chemical products, developers, foils, mixing bowls, and styling irons are provided for hands-on classroom practice."
      },
      {
        question: "How do we practice chemical safety and ventilation?",
        answer: "Students are trained in salon safety standards, scalp barrier protection, skin allergy patch tests, and proper workstation ventilation."
      }
    ],
    relatedSlugs: ["hair-styling", "hair-cutting", "hair-extensions"],
    toolsAndKit: ["Professional Color Mixing Station", "Digital Gram Scale", "Thermal Titanium Iron", "Sectioning Grips & Combs", "Highlighting Foils & Boards", "Bond-Building Plex Kit"]
  },

  // ==========================================
  // 7. HAIR STYLING
  // ==========================================
  {
    slug: "hair-styling",
    title: "Hair Styling (Basic to Advanced)",
    shortTitle: "Hair Styling",
    category: "Hair",
    tagline: "From Basic Sectioning to Celebrity Red-Carpet, Bridal Juda & Editorial Hairstyles",
    badge: "Bridal & Editorial",
    heroDescription:
      "Master the art of sectioning, heat manipulation, classic and modern updos, traditional bridal judas, Hollywood glam waves, and intricate multi-strand braids.",
    heroImage: "/images/courses/hair-styling/styling-hero.jpg",
    aboutTitle: "About the Hair Styling Masterclass",
    aboutDescription: [
      "The Hair Styling Course at Yashree Institute takes students on a complete journey from foundational hair preparation to high-fashion bridal and red-carpet hairstyles.",
      "Students master tools of the trade—curling wands, crimpers, blow dryers, paddings, and setting sprays—to create long-lasting, photo-ready hairstyles for all face shapes.",
      "The curriculum features dedicated training on classic Indian bridal judas with flower attachments, textured boho braids, Hollywood retro waves, messy high buns, and editorial fashion styles."
    ],
    metaTitle: "Hair Styling Course in Indore | Bridal Juda, Curls & Updos - Yashree Institute",
    metaDescription: "Learn professional hair styling from basic to advanced at Yashree Institute Indore. Master bridal judas, Hollywood waves, messy buns, braids, and dummy practice.",
    keywords: ["Hair Styling Course Indore", "Bridal hairstyle course", "Juda hairstyle training", "Hair updo masterclass", "Deepika Patidar hair"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Hair Preparation, Texture & Heat Styling Tools",
        description: "Mastering blow-drying, backcombing, crimping, and curl holding.",
        topics: [
          "Hair texture analysis and pre-styling product selection",
          "Out-curl, in-curl, and volume blow-dry techniques",
          "Micro-crimping for structural volume and crown lifting",
          "Thermal curling irons, tongs, and wand manipulation"
        ]
      },
      {
        unit: "Module 02",
        title: "Classic & Contemporary Bridal Buns & Judas",
        description: "Architectural buns, stuffing placement, and accessory anchoring.",
        topics: [
          "Classic donut bun, low bridal chignon, and royal reception updo",
          "Messy textured bun and French twist variations",
          "Traditional floral gajra pinning and jewelry placement",
          "Dupatta pinning and veil anchoring techniques"
        ]
      },
      {
        unit: "Module 03",
        title: "Advanced Braids, Hollywood Waves & Open Hair Styles",
        description: "Intricate multi-strand braids and red-carpet cascading curls.",
        topics: [
          "Fishtail, Dutch, 4-strand, and pull-through boho braids",
          "Sleek Hollywood glam waves with zero frizz finish",
          "Half-up, half-down styles with crown twists and curls",
          "Face framing tendrils and soft fringe styling"
        ]
      },
      {
        unit: "Module 04",
        title: "Speed Styling & Portfolio Reel Creation",
        description: "Quick salon turnarounds and shooting video content for social media.",
        topics: [
          "15-minute quick party styling techniques for peak bridal rush",
          "Fixing stubborn hair flyaways and weather-proof hold sprays",
          "Hair photoshoot lighting, angles, and reel recording tips",
          "Client consultation based on face shape and outfit neckline"
        ]
      }
    ],
    practicalExperience: {
      title: "Extensive Mannequin & Live Model Practice",
      description: "Every student practices on dedicated styling mannequins and live models with full access to thermal tools and professional accessories.",
      steps: [
        "Root crimping, sectioning, and high-volume crown padding",
        "Curling, pin-setting, and cooling for 12+ hour hold",
        "Sculpting bridal judas and anchoring heavy accessories",
        "Final polish, flyaway control, and portfolio photography"
      ]
    },
    highlights: [
      {
        title: "Hands-on Dummy & Live Models",
        description: "Daily practical sessions on human-hair mannequins and models.",
        icon: "Sparkles"
      },
      {
        title: "Bridal & Red-Carpet Specialization",
        description: "Master Indian bridal judas, modern updos, and Hollywood waves.",
        icon: "Award"
      },
      {
        title: "Accessory & Dupatta Setting",
        description: "Learn heavy dupatta pinning and maang tikka security.",
        icon: "ShieldCheck"
      },
      {
        title: "Social Media Portfolio Shoot",
        description: "Learn how to record trending 360-degree hair reels.",
        icon: "BookOpen"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "High Demand During Wedding & Festive Seasons",
        description: "Bridal hair stylists are in constant demand across India for weddings, pre-wedding shoots, and festive celebrations."
      },
      {
        title: "Ideal Synergy with Makeup Artistry",
        description: "Combining makeup artistry with professional hair styling doubles your client booking value."
      },
      {
        title: "Immediate Freelance & Studio Readiness",
        description: "Skills can be practiced and monetized quickly for bridal, event, and salon clients."
      }
    ],
    faqs: [
      {
        question: "Do I need to bring my own hair dummy mannequin?",
        answer: "Training dummy stands and mannequins are provided during classroom sessions for comprehensive daily practice."
      },
      {
        question: "Will I learn both Indian bridal and Western hairstyles?",
        answer: "Yes, the course includes traditional Indian bridal judas with gajra attachments as well as Western messy buns and Hollywood waves."
      },
      {
        question: "How do we keep hairstyles holding for 12+ hours during weddings?",
        answer: "You will be taught specialized heat prep, texturizing crimping, pin anchoring mechanics, and professional finishing hold sprays."
      },
      {
        question: "Can beginners without prior hair styling experience join?",
        answer: "Absolutely. The course starts from basic sectioning, hand posture, and tool safety before progressing into intricate styles."
      }
    ],
    relatedSlugs: ["hair-chemical", "hair-cutting", "hair-extensions", "professional-makeup"],
    toolsAndKit: ["Ceramic Curling Tongs & Wands", "Micro-Texturizing Crimper", "Ionic Volume Blow Dryer", "Sectioning Clips & Carbon Combs", "Bridal Hair Padding & Donuts", "Mannequin Head with Clamp"]
  },

  // ==========================================
  // 8. HAIR CUTTING
  // ==========================================
  {
    slug: "hair-cutting",
    title: "Hair Cutting & Structural Design Course",
    shortTitle: "Hair Cutting",
    category: "Hair",
    tagline: "Master Geometric Angles, Elevation Science, Shear Control & Contemporary Cut Designs",
    badge: "Precision Cutting",
    heroDescription:
      "Learn precision shear handling, point cutting, texturizing shears, 0 to 180-degree elevation angles, classic bobs, modern layerings, feathers, and custom face-framing techniques.",
    heroImage: "/images/courses/hair-cutting/cutting-hero.jpg",
    aboutTitle: "About the Precision Hair Cutting Course",
    aboutDescription: [
      "The Hair Cutting & Structural Design Course trains students in the architectural geometry of haircutting, body posture, scissor mastery, and client face shape analysis.",
      "From basic blunt cuts to intricate multi-tiered layers, graduating bobs, curtain bangs, and feather cuts, students master the exact hand angles and sectioning lines required for clean lines.",
      "Extensive practical training covers dry and wet cutting methodologies, shear-over-comb, razor feathering, texturizing thinning, and blowout styling for finished looks."
    ],
    metaTitle: "Hair Cutting Course Indore | Layers, Bobs, Precision Cuts - Yashree Institute",
    metaDescription: "Master professional haircutting, shear handling, elevation angles, layering, bob cuts, and texturizing at Yashree Institute Indore. Practical hands-on training.",
    keywords: ["Hair Cutting Course Indore", "Haircut training", "Layer cut course", "Bob cut masterclass", "Professional shear training"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Scissor Ergonomics, Sectioning & Elevation Angles",
        description: "The fundamental physics and mechanics of structural hair cutting.",
        topics: [
          "Proper scissor-finger ergonomics and hand posture mechanics",
          "Understanding 0°, 45°, 90°, and 180° elevation angles",
          "Horizontal, vertical, diagonal forward, and diagonal back parting lines",
          "Distribution of weight lines and natural hair growth patterns"
        ]
      },
      {
        unit: "Module 02",
        title: "Classic & Geometric Cut Architectures",
        description: "Blunt lines, graduated bobs, and structured solid forms.",
        topics: [
          "One-length solid blunt cut with zero tension",
          "Classic graduated A-line bob and inverted bob cutting",
          "Uniform 90° layered cut for balanced perimeter movement",
          "Men's and unisex precision shear-over-comb blending"
        ]
      },
      {
        unit: "Module 03",
        title: "Contemporary Layering, Feathers & Face Framing",
        description: "Modern commercial haircutting styles requested in upscale salons.",
        topics: [
          "Step cut and multi-tier forward graduation layers",
          "Feather cut and butterfly layer haircut techniques",
          "Curtain bangs, wispy fringes, and bottleneck fringe design",
          "Texturizing, slide cutting, point cutting, and thinning shears"
        ]
      },
      {
        unit: "Module 04",
        title: "Finishing, Blowout Styling & Client Consultation",
        description: "Styling the finished cut to showcase movement and structure.",
        topics: [
          "Round brush blowout styling for bounce and volume",
          "Texturizing dry hair after blow-drying for personalized movement",
          "Analyzing client face shape (oval, round, square, heart) for cut selection",
          "Scissor maintenance, oiling, tension adjustment, and blade care"
        ]
      }
    ],
    practicalExperience: {
      title: "Repeated Sectioning & Cutting Practice",
      description: "Students execute complete haircut transformations on mannequins followed by live model cuts with 1-on-1 instructor corrections.",
      steps: [
        "Head mapping, 4-quadrant sectioning, and perimeter guideline cutting",
        "Executing precise elevation angles and uniform finger tension",
        "Cross-checking vertical and horizontal lines for perfect symmetry",
        "Texturizing, volume blow-dry styling, and final polish"
      ]
    },
    highlights: [
      {
        title: "Elevation & Angle Geometry",
        description: "Master 0°, 45°, 90°, and 180° elevation techniques.",
        icon: "BookOpen"
      },
      {
        title: "Trending Commercial Styles",
        description: "Learn Butterfly layers, Curtain bangs, and Inverted bobs.",
        icon: "Sparkles"
      },
      {
        title: "Ergonomic Scissor Mastery",
        description: "Prevent hand fatigue with professional posture training.",
        icon: "ShieldCheck"
      },
      {
        title: "Blowout & Texturizing Finishing",
        description: "Complete every haircut with a salon-grade blowout finish.",
        icon: "Award"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Core Foundation of Every Hair Salon",
        description: "Haircuts are the highest-frequency service driving repeat salon visits and everyday client traffic."
      },
      {
        title: "Confidence to Recreate Any Trending Style",
        description: "Mastering angle geometry allows you to recreate any celebrity photo or video reference accurately."
      },
      {
        title: "Lifelong Portable Professional Skill",
        description: "Precision cutting skills remain universally valuable across salons, fashion shoots, and independent styling."
      }
    ],
    faqs: [
      {
        question: "Do I need my own professional scissors to start?",
        answer: "Classroom scissors and shears are provided during training, and our mentors guide you on purchasing your own optimal shears."
      },
      {
        question: "How many different haircut styles will I learn?",
        answer: "You will master 12+ foundational and trending styles including blunt cuts, step cuts, butterfly layers, feather cuts, and classic bobs."
      },
      {
        question: "Will I learn how to choose haircuts based on face shape?",
        answer: "Yes, face shape profiling (round, oval, square, diamond) is an integral component of the consultation module."
      },
      {
        question: "Is blow-drying taught along with haircutting?",
        answer: "Yes, every haircut session concludes with round-brush blowouts and texturizing to present the final silhouette."
      }
    ],
    relatedSlugs: ["hair-styling", "hair-chemical", "hair-extensions"],
    toolsAndKit: ["Japanese Steel Cutting Shears", "Texturizing Thinning Scissors", "Sectioning Combs & Crocodile Clips", "Ceramic Thermal Round Brushes", "Ionic Salon Hairdryer", "Mannequin Cutting Stand"]
  },

  // ==========================================
  // 9. HAIR EXTENSIONS
  // ==========================================
  {
    slug: "hair-extensions",
    title: "Hair Extensions & Volumizing Masterclass",
    shortTitle: "Hair Extensions",
    category: "Hair",
    tagline: "Master Tape-In, Micro-Ring, Nano-Ring, Keratin I-Tip, Clip-In & Invisible Weft Systems",
    badge: "Hair Transformations",
    heroDescription:
      "Learn professional hair extension applications: seamless tape-ins, micro-ring loops, nano-rings, keratin hot-melt fusion, invisible beaded wefts, color blending, and damage-free removal.",
    heroImage: "/images/courses/hair-extensions/ext-hero.jpg",
    aboutTitle: "About the Hair Extensions Program",
    aboutDescription: [
      "The Hair Extensions & Volumizing Masterclass at Yashree Institute provides advanced technical training on non-surgical hair lengthening and density enhancement.",
      "Students master all major semi-permanent and permanent extension methods: Tape-Ins, Micro-Ring I-Tips, Nano-Rings, Keratin Heat Fusion Bonds, and Invisible Weft Sew-ins.",
      "The curriculum covers accurate grammage calculation, color undertone blending, natural hair sectioning, weight distribution to prevent traction alopecia, and maintenance refitting."
    ],
    metaTitle: "Hair Extensions Course in Indore | Tape-In, Micro-Ring, Keratin - Yashree Institute",
    metaDescription: "Master professional hair extensions, tape-in, micro-rings, nano-rings, keratin fusion, and wefts at Yashree Institute Indore. Practical hands-on training.",
    keywords: ["Hair Extensions Course Indore", "Tape in hair extensions", "Micro ring extensions", "Keratin hair extensions", "Hair volumizing course"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Hair Quality Science, Grammage & Sectioning",
        description: "Understanding Remy hair, cuticle alignment, and weight physics.",
        topics: [
          "Differences between 100% Remy Human Hair, synthetic, and mixed fibers",
          "Cuticle alignment, hair density calculation, and strand grammage per head",
          "Sectioning grids: brickwork pattern, horseshoe parting, and perimeter clearance",
          "Preventing traction alopecia through correct tension and weight distribution"
        ]
      },
      {
        unit: "Module 02",
        title: "Tape-In Extensions & Invisible Weft Systems",
        description: "Flat seamless tape sandwiches and beaded row weft sew-ins.",
        topics: [
          "Tape-in extension placement, sandwich sealing, and heat pressing",
          "Invisible beaded row weft installation with micro-rings and curved needles",
          "Blending extensions seamlessly with natural hair layers",
          "Safe tape-in solvent removal, adhesive re-taping, and reapplication"
        ]
      },
      {
        unit: "Module 03",
        title: "Micro-Ring, Nano-Ring & Keratin Hot-Melt Fusion",
        description: "Strand-by-strand micro-attachment and keratin bond sculpting.",
        topics: [
          "Micro-ring and nano-ring bead clamping with pulling loops and pliers",
          "Keratin I-Tip and flat-tip thermal fusion connector melting",
          "Rolling cylindrical and flat keratin bonds for discreet invisibility",
          "Keratin bond crushing with remover solutions for painless extraction"
        ]
      },
      {
        unit: "Module 04",
        title: "Cutting, Blending, Color Matching & Homecare",
        description: "Sculpting extensions into natural hair and client maintenance.",
        topics: [
          "Razor feathering and slide-cutting to eliminate blunt shelf lines",
          "Color matching multi-tonal hair with highlighted extension bundles",
          "Client homecare: loop brushes, sulfate-free washing, and nighttime braiding",
          "Pricing extension services, hair sourcing, and profit margin analysis"
        ]
      }
    ],
    practicalExperience: {
      title: "Extensive Mannequin & Live Installation Practice",
      description: "Students install full-head and volume-fill sets on specialized mannequins and live models using authentic Remy hair strands.",
      steps: [
        "Head mapping, sectioning grid lines, and gram weight distribution",
        "Executing Tape-in sandwiches and Micro-ring bead clamping",
        "Keratin hot-melt bond rolling and seamless placement",
        "Slide-cut blending, thermal styling, and removal refitting"
      ]
    },
    highlights: [
      {
        title: "5+ Extension Systems",
        description: "Master Tape-In, Micro-Ring, Nano-Ring, Keratin, and Wefts.",
        icon: "Sparkles"
      },
      {
        title: "Traction-Safe Weight Physics",
        description: "Protect client natural hair health with correct sectioning.",
        icon: "ShieldCheck"
      },
      {
        title: "Seamless Slide-Cut Blending",
        description: "Eliminate artificial lines for an undetectable blend.",
        icon: "Award"
      },
      {
        title: "High-Ticket Client Service",
        description: "Command premium service fees with recurring maintenance.",
        icon: "BookOpen"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Highest Revenue per Client in Hair Industry",
        description: "Hair extension services command substantial upfront installation fees and ongoing maintenance appointments every 6-8 weeks."
      },
      {
        title: "Instant Dramatic Transformations",
        description: "Delivers immediate results for clients with thin hair, hair loss, or short haircuts wanting instant bridal volume."
      },
      {
        title: "Specialized Niche with Low Competition",
        description: "Certified extension specialists stand out in the salon market because few stylists possess multi-method mastery."
      }
    ],
    faqs: [
      {
        question: "Which extension methods are taught in the course?",
        answer: "You will master Tape-Ins, Micro-Rings, Nano-Rings, Keratin Heat Fusion Bonds, and Invisible Beaded Wefts."
      },
      {
        question: "Does wearing hair extensions damage natural hair?",
        answer: "When installed with correct sectioning grids and weight balance as taught in our course, extensions do not damage natural hair."
      },
      {
        question: "Are practice hair strands and tools provided?",
        answer: "Yes, practice Remy human hair bundles, thermal fusion irons, micro-ring pliers, pulling needles, and tape tabs are supplied."
      },
      {
        question: "Will I learn how to cut and blend the extensions?",
        answer: "Yes, slide-cutting, razor feathering, and heat styling to eliminate noticeable separation lines are core modules."
      }
    ],
    relatedSlugs: ["hair-styling", "hair-cutting", "hair-chemical"],
    toolsAndKit: ["Thermal Keratin Fusion Connector Iron", "Micro-Ring & Nano-Ring Clamping Pliers", "Loop Pulling Threader Needles", "Replacement Medical-Grade Tape Tabs", "Extension Loop Detangling Brush", "Hair Sizing & Gram Scale"]
  },

  // ==========================================
  // 10. PROFESSIONAL MAKEUP
  // ==========================================
  {
    slug: "professional-makeup",
    title: "Professional Makeup Masterclass",
    shortTitle: "Professional Makeup",
    category: "Makeup",
    tagline: "Basic to Pro Artist Training — Bridal, Editorial, HD & Airbrush Makeup Artistry",
    badge: "Deepika Patidar Mentorship",
    heroDescription:
      "Mentored by Celebrity Makeup Artist Deepika Patidar. Master skin prep, color wheel undertones, flawless HD base creation, cut-crease eye artistry, airbrush techniques, and bridal portfolios.",
    heroImage: "/images/courses/professional-makeup/makeup-hero.jpg",
    aboutTitle: "About the Professional Makeup Masterclass",
    aboutDescription: [
      "The Professional Makeup Masterclass at Yashree Institute is a prestigious career-oriented program led by Celebrity Makeup Artist Deepika Patidar.",
      "Students progress from basic color theory and skin preparation to advanced HD base building, cream contouring, strobe highlighting, and intricate eye techniques.",
      "The curriculum covers all major commercial disciplines: North & South Indian Bridal, Engagement & Reception Glam, HD Red-Carpet Looks, Airbrush Makeup, and Portfolio Studio Shoots."
    ],
    metaTitle: "Professional Makeup Course in Indore | Deepika Patidar Masterclass - Yashree Institute",
    metaDescription: "Master professional bridal, HD, airbrush makeup at Yashree Institute Indore mentored by Celebrity Artist Deepika Patidar. 100% practical live model training.",
    keywords: ["Makeup Course Indore", "Deepika Patidar makeup", "Bridal makeup training", "HD makeup masterclass", "Airbrush makeup course"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Color Wheel, Undertones & Skin Architecture",
        description: "Scientific undertone matching and flawless skin preparation.",
        topics: [
          "Color wheel fundamentals, primary, secondary, and complementary tones",
          "Warm, cool, and olive undertone identification",
          "Skin preparation: cleansers, toners, serums, primers, and barrier creams",
          "Color correcting: peach, orange, green, and lavender correctors"
        ]
      },
      {
        unit: "Module 02",
        title: "HD Flawless Base, Contouring & Baking",
        description: "Layering techniques for long-lasting, sweat-proof base creation.",
        topics: [
          "Foundation selection: liquid, cream, stick, and mineral formulations",
          "Cream contouring, liquid blush, and strobe highlighting placement",
          "Baking and translucent powder setting for flash photography",
          "Waterproof and sweat-resistant bridal base techniques"
        ]
      },
      {
        unit: "Module 03",
        title: "Eye Makeup Mastery, Lashes & Lip Artistry",
        description: "Intricate eye looks from soft glam to dramatic cut-creases.",
        topics: [
          "Half cut-crease, full cut-crease, and spotlight halo eye designs",
          "Classic smokey eyes, glitter pigment presses, and gel wing liners",
          "Mink lash application, lash cluster blending, and brow sculpting",
          "Precision lip mapping, ombre lips, and matte transfer-proof finishes"
        ]
      },
      {
        unit: "Module 04",
        title: "Airbrush Demo, Bridal Looks & Studio Photoshoot",
        description: "High-definition airbrush application and portfolio building.",
        topics: [
          "Airbrush compressor handling, PSI pressure, and micro-fine foundation misting",
          "Royal Indian Bridal, Engagement, Mehndi, and Reception transformations",
          "Studio lighting, posing models, and Instagram reel recording",
          "Freelance bridal kit curation, budgeting, and client contracts"
        ]
      }
    ],
    practicalExperience: {
      title: "Extensive Live Model Transformations",
      description: "Students complete full makeup looks on live models using international brand cosmetic vanities under mentor supervision.",
      steps: [
        "Skin assessment, undertone matching, and prep with luxury skincare",
        "Color correction and seamless HD foundation blending",
        "Intricate eye makeup application, eyeliner, and lash placement",
        "Professional studio photo shoot and Instagram reel capture"
      ]
    },
    highlights: [
      {
        title: "Mentorship by Deepika Patidar",
        description: "Learn directly from an award-winning celebrity makeup artist.",
        icon: "Award"
      },
      {
        title: "Complete Bridal Vanities",
        description: "Practice with premium international HD cosmetic brands.",
        icon: "Sparkles"
      },
      {
        title: "Airbrush Makeup Demo",
        description: "Experience modern HD airbrush compressor techniques.",
        icon: "BookOpen"
      },
      {
        title: "Studio Portfolio Photoshoot",
        description: "Build an impressive professional digital portfolio for clients.",
        icon: "ShieldCheck"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "High-Earning Freelance Bridal Industry",
        description: "Bridal makeup artists in India command top-tier booking fees for destination weddings and festive seasons."
      },
      {
        title: "Celebrity & Media Opportunities",
        description: "Opens avenues into fashion shoots, commercial advertising, runway events, and beauty studios."
      },
      {
        title: "Direct Celebrity Guidance",
        description: "Learn trade secrets, portfolio strategies, and client negotiation tactics directly from Deepika Patidar."
      }
    ],
    faqs: [
      {
        question: "Who leads the Professional Makeup Masterclass?",
        answer: "The course is guided and mentored directly by Celebrity Makeup Artist Deepika Patidar along with senior academy educators."
      },
      {
        question: "Do I need to purchase an expensive makeup kit before joining?",
        answer: "No, classroom practice cosmetics, brushes, and products are available at the academy during your training period."
      },
      {
        question: "Will I receive photos and videos of my work for my portfolio?",
        answer: "Yes, students participate in professional studio camera shoots to build their Instagram and client portfolios."
      },
      {
        question: "Does the course cover airbrush makeup?",
        answer: "Yes, the masterclass includes comprehensive airbrush compressor demonstrations, product ratios, and spray technique training."
      }
    ],
    relatedSlugs: ["hair-styling", "semi-permanent-makeup", "lip-tinting", "microblading"],
    toolsAndKit: ["Pro HD Brush Vanity (32-Piece)", "Airbrush Compressor & Gun", "Color Correcting & Concealer Wheel", "Pro Contour & Highlight Palette", "Mink Lashes & Applicator", "Translucent Setting Powders"]
  },

  // ==========================================
  // 11. SEMI-PERMANENT MAKEUP (SPMU)
  // ==========================================
  {
    slug: "semi-permanent-makeup",
    title: "Semi-Permanent Makeup (SPMU) Masterclass",
    shortTitle: "Semi-Permanent Makeup (SPMU)",
    category: "Makeup",
    tagline: "Master Ombre Powder Brows, Micro-Pigmentation, Eyeliner Tattoo & Safe Clinical PMU Devices",
    badge: "Medical PMU Artistry",
    heroDescription:
      "Comprehensive permanent makeup training: digital rotary machines, needle cartridges, organic pigments, skin undertones, ombre powder shading, precision lash line enhancement, and sterile clinic protocols.",
    heroImage: "/images/courses/spmu/spmu-hero.jpg",
    aboutTitle: "About the Semi-Permanent Makeup (SPMU) Program",
    aboutDescription: [
      "The Semi-Permanent Makeup (SPMU) Masterclass at Yashree Institute provides rigorous technical and clinical training in micro-pigmentation artistry.",
      "Students learn how to deposit cosmetic-grade mineral and organic pigments into the upper reticular dermis using medical-grade digital rotary PMU machines.",
      "The course covers full eyebrow architecture (Ombre Powder Brows, Misty Brows), Classic & Winged Permanent Eyeliner, color retention science, touch-up protocols, and strict sterilization."
    ],
    metaTitle: "Semi-Permanent Makeup (SPMU) Course in Indore | Powder Brows - Yashree Institute",
    metaDescription: "Master semi-permanent makeup, ombre powder brows, PMU machines, micro-pigmentation, and eyeliner tattoo at Yashree Institute Indore. Practical training.",
    keywords: ["SPMU Course Indore", "Semi permanent makeup training", "Ombre powder brows course", "Micro pigmentation training", "PMU academy Indore"],
    curriculum: [
      {
        unit: "Module 01",
        title: "PMU Science, Skin Depth & Pigment Chemistry",
        description: "Understanding dermal layers, needle speeds, and pigment retention.",
        topics: [
          "Dermal layer penetration (0.5mm to 1.0mm) vs traditional body tattoos (2.0mm)",
          "Organic vs inorganic iron oxide and hybrid pigment formulations",
          "Color theory: warm, cool, neutral pigments and preventing blue/red fading",
          "Sterilization, single-use membrane needle cartridges, and bloodborne pathogen safety"
        ]
      },
      {
        unit: "Module 02",
        title: "Brow Mapping & Golden Ratio Architecture",
        description: "Using calipers, string, and compasses for symmetrical brow design.",
        topics: [
          "Morphological facial analysis and Golden Ratio (Phi 1.618) brow mapping",
          "Mapping string technique, caliper measurement, and pre-draw approval",
          "Selecting brow shapes matching eye sockets, bone structure, and client age",
          "Topical numbing protocols (primary and secondary epinephrine gels)"
        ]
      },
      {
        unit: "Module 03",
        title: "Ombre Powder Brows & Pixel Shading Technique",
        description: "Digital machine pendulum movements and pixel density gradients.",
        topics: [
          "Digital rotary PMU machine stroke speeds, voltage, and hand speed",
          "1RL (Single Round Liner) and 3RS needle cartridge pendulum motions",
          "Creating soft, airy brow heads with gradient pixel saturation towards tails",
          "Practice on synthetic 3D silicone latex skins before live model execution"
        ]
      },
      {
        unit: "Module 04",
        title: "Permanent Eyeliner, Touch-ups & Healed Results",
        description: "Lash line enhancement, aftercare healing, and color boosting.",
        topics: [
          "Tightline lash enhancement and classic winged permanent eyeliner",
          "Eyelid stretching technique and avoiding pigment migration",
          "4 to 6-week healing cycle, lymphatic crusting, and color retention rates",
          "Annual color boost touch-ups and client consultation consent contracts"
        ]
      }
    ],
    practicalExperience: {
      title: "Silicone Latex Simulation & Live Model Procedures",
      description: "Students complete extensive hours on 3D latex skins mastering pixel speed before performing full procedures on live models under supervision.",
      steps: [
        "Sterile workstation setup, barrier film wrapping, and pigment mixing",
        "Golden ratio brow mapping and client approval",
        "Topical numbing application and 1RL needle pixel shading",
        "Post-procedure soothing, barrier balm application, and aftercare sheet"
      ]
    },
    highlights: [
      {
        title: "Medical-Grade Digital PMU Machines",
        description: "Master voltage, stroke length, and needle cartridge depth.",
        icon: "Sparkles"
      },
      {
        title: "Ombre Powder Brows Specialization",
        description: "Create soft, airy gradient brows suitable for all skin types.",
        icon: "Award"
      },
      {
        title: "Color Retention & Anti-Fade Science",
        description: "Formulate pigments that heal true to tone without turning gray.",
        icon: "ShieldCheck"
      },
      {
        title: "Aseptic Clinical Protocol",
        description: "Hospital-standard disposable needle and sterilization training.",
        icon: "BookOpen"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "High-Ticket Premium Beauty Discipline",
        description: "SPMU procedures command high service fees per client with minimal disposable material costs."
      },
      {
        title: "Long-Lasting Client Satisfaction",
        description: "Results last 1.5 to 3 years, giving clients effortless daily beauty and high referral trust."
      },
      {
        title: "Rapidly Expanding Clinical Niche",
        description: "Clinics and aesthetic studios actively seek skilled SPMU artists for brows, lips, and liners."
      }
    ],
    faqs: [
      {
        question: "What is the difference between SPMU Powder Brows and Microblading?",
        answer: "Microblading uses a manual blade to draw hair strokes (best for dry skin), while SPMU Powder Brows uses a digital machine to create a soft makeup powder effect (suitable for all skin types, including oily)."
      },
      {
        question: "Is the procedure painful for the client?",
        answer: "Topical medical-grade anesthetic creams (primary and secondary numbing) are applied throughout, keeping discomfort minimal."
      },
      {
        question: "How long does a semi-permanent makeup treatment last?",
        answer: "Ombre powder brows and permanent eyeliner typically last between 1.5 to 3 years before requiring a touch-up."
      },
      {
        question: "Do students practice on live clients during the course?",
        answer: "Yes, after completing extensive hours on 3D synthetic silicone skins, students perform full procedures on live models under close supervision."
      }
    ],
    relatedSlugs: ["microblading", "lip-neutralizing", "lip-tinting", "beauty-mole-creation"],
    toolsAndKit: ["Professional Digital Rotary PMU Device", "Sterile 1RL & 3RS Membrane Cartridges", "Organic Brow & Eyeliner Pigment Set", "Golden Ratio Caliper & Mapping String", "Medical-Grade Topical Anesthetic Cream", "3D Silicone Practice Latex Sheets"]
  },

  // ==========================================
  // 12. LIP NEUTRALIZING
  // ==========================================
  {
    slug: "lip-neutralizing",
    title: "Lip Neutralizing & Pigmentation Correction",
    shortTitle: "Lip Neutralizing",
    category: "Makeup",
    tagline: "Master Color Correction for Hyperpigmentation, Dark Lips, Smokers' Tone & Cool Undertones",
    badge: "Specialized PMU",
    heroDescription:
      "Advanced micro-pigmentation correction for melanin-rich and hyperpigmented lips: color theory, warm neutralizing pigments (orange, warm peach, yellow), needle velocity, and multi-session lightening.",
    heroImage: "/images/courses/lip-neutralizing/lipneut-hero.jpg",
    aboutTitle: "About the Lip Neutralizing Course",
    aboutDescription: [
      "The Lip Neutralizing & Pigmentation Correction Course at Yashree Institute is a specialized PMU program dedicated to correcting cool, dark, and hyperpigmented lips.",
      "Common in Indian complexions, dark lip tones require precise color theory—using warm orange, saffron, and yellow-based correcting pigments to neutralize blue, purple, and brown undertones.",
      "Students master delicate lip mucosal depth control, gentle pixel deposits without trauma, preventing hyperpigmentation relapse, and multi-stage session planning."
    ],
    metaTitle: "Lip Neutralizing Course in Indore | Dark Lip Color Correction - Yashree Institute",
    metaDescription: "Master lip neutralizing, dark lip color correction, warm pigment formulation, and PMU lip lightening at Yashree Institute Indore. Specialized training.",
    keywords: ["Lip Neutralizing Course Indore", "Dark lip correction training", "Lip pigmentation PMU", "Melanin rich lip neutralization", "Deepika Patidar PMU"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Lip Anatomy, Melanin Science & Causes of Darkness",
        description: "Understanding vermilion border, mucosal tissue, and hyperpigmentation.",
        topics: [
          "Anatomy of the lips: Vermilion border, Cupid's bow, and mucosal transition",
          "Causes of lip darkness: Genetics, melanin concentration, smoking, and sun exposure",
          "Identifying cool blue, violet, ash, and brown underlying undertones",
          "Contraindications: Cold sore virus (Herpes Simplex) management and anti-viral prep"
        ]
      },
      {
        unit: "Module 02",
        title: "Color Theory & Neutralizer Formulations",
        description: "The science of complementary color cancellation on dark lips.",
        topics: [
          "Complementary color wheel cancellation: Orange neutralizes Blue/Gray",
          "Warm Golden Yellow neutralizes Deep Purple/Violet undertones",
          "Why target red or pink pigments turn gray if applied directly on dark lips",
          "Formulating custom neutralizing cocktails with high-opacity titanium dioxide blends"
        ]
      },
      {
        unit: "Module 03",
        title: "Needle Cartridge Selection & Low-Trauma Shading",
        description: "Machine speeds, hand angles, and delicate pixel implantation.",
        topics: [
          "Needle cartridge selection: 3RL, 5RS, and 1RL for delicate lip tissues",
          "Whip-shading and cross-hatching stroke techniques without laceration",
          "Managing lip swelling, lymph fluid, and needle stretch tension",
          "Synthetic 3D silicone lip practice focusing on uniform pigment distribution"
        ]
      },
      {
        unit: "Module 04",
        title: "Healing Timeline, Multi-Session Plans & Target Tints",
        description: "Managing healed color changes and adding target pinks in Stage 2.",
        topics: [
          "Healed color progression: Initial bright orange to soft neutral nude-pink",
          "Structuring 2 to 3-session treatment plans spaced 6 to 8 weeks apart",
          "Stage 2 target tint application (rose, peach, coral) once base is neutralized",
          "Post-care balm protocols and cold sore prevention advice"
        ]
      }
    ],
    practicalExperience: {
      title: "Dark Lip Pigmentation Corrections on Live Models",
      description: "Students analyze undertones, mix custom warm neutralizing pigments, and perform procedures on live models under expert clinical supervision.",
      steps: [
        "Lip undertone diagnosis and anti-viral client health screening",
        "Custom warm pigment mixing (Target Orange / Golden Corrector)",
        "Gentle pixel shading with primary & secondary topical numbing",
        "Post-procedure cooling compress and healing balm application"
      ]
    },
    highlights: [
      {
        title: "Color Theory for Indian Lip Tones",
        description: "Master complementary color cancellation for blue/purple undertones.",
        icon: "BookOpen"
      },
      {
        title: "Low-Trauma Whip Shading",
        description: "Implant pigment smoothly without bruising or tearing.",
        icon: "Sparkles"
      },
      {
        title: "Multi-Session Protocol Planning",
        description: "Learn how to take dark lips to rosy pink across 2-3 sessions.",
        icon: "ShieldCheck"
      },
      {
        title: "High Client Demand in India",
        description: "One of the most sought-after PMU services in Indian aesthetic clinics.",
        icon: "Award"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Extremely Common Concern in South Asia",
        description: "Dark and hyperpigmented lips affect millions of women and men, creating huge steady demand for neutralizing specialists."
      },
      {
        title: "Life-Changing Client Confidence",
        description: "Restores natural pink warmth to lips, giving clients enormous self-esteem and creating word-of-mouth referrals."
      },
      {
        title: "High-Ticket Specialty Procedure",
        description: "Because multi-session color correction requires true expertise, specialists charge premium rates per procedure."
      }
    ],
    faqs: [
      {
        question: "Can dark lips be made pink in a single session?",
        answer: "Dark lips require color neutralization first (using warm orange/yellow) in Session 1, followed by target rosy pinks in Session 2 after 6-8 weeks."
      },
      {
        question: "Will the lips stay orange permanently after the first session?",
        answer: "No, the bright orange color softens during the 4-week healing cycle, settling into a natural, lightened nude-pink base."
      },
      {
        question: "How do we prevent cold sores after a lip procedure?",
        answer: "Clients prone to herpes simplex are advised to consult their physician for preventative anti-viral medication before and after treatment."
      },
      {
        question: "What machines and needles are used for lip neutralizing?",
        answer: "We use digital rotary PMU machines with low-vibration 1RL, 3RL, or 5RS cartridges to minimize trauma and ensure even pixel distribution."
      }
    ],
    relatedSlugs: ["lip-tinting", "semi-permanent-makeup", "microblading", "beauty-mole-creation"],
    toolsAndKit: ["Digital Precision PMU Pen", "Specialized Warm Lip Neutralizer Inks (Orange, Saffron)", "3RL & 5RS Lip Shader Cartridges", "Secondary Vasoconstrictor Numbing Gel", "3D Silicone Lip Practice Models", "Antiseptic Lip Rinse & Healing Balm"]
  },

  // ==========================================
  // 13. LIP TINTING
  // ==========================================
  {
    slug: "lip-tinting",
    title: "Lip Tinting & Velvet Blush Masterclass",
    shortTitle: "Lip Tinting",
    category: "Makeup",
    tagline: "Master Watercolor Lip Blush, Velvet Matte Shading, Ombre Lips & Contour Definition",
    badge: "Semi-Permanent Lip Artistry",
    heroDescription:
      "Learn semi-permanent lip blush and watercolor tinting: Vermilion border defining, ombre gradients, custom rose/berry/nude pigment blending, topical anesthesia, and 2-year smudge-proof results.",
    heroImage: "/images/courses/lip-tinting/liptint-hero.jpg",
    aboutTitle: "About the Lip Tinting & Blush Program",
    aboutDescription: [
      "The Lip Tinting & Velvet Blush Masterclass at Yashree Institute teaches the refined artistry of semi-permanent lip blushing and watercolor tinting.",
      "Students learn how to enhance lip shape, restore lost vermilion border definition, create youthful fullness, and infuse translucent velvet tints that last up to 2 years.",
      "The curriculum covers precision lip mapping, custom pigment mixing (Rose, Nude, Berry, Coral), light pixel shading techniques, and painless client comfort protocols."
    ],
    metaTitle: "Lip Tinting Course in Indore | Lip Blush & Watercolor Lips - Yashree Institute",
    metaDescription: "Master lip tinting, watercolor lip blush, velvet matte shading, and semi-permanent lip color at Yashree Institute Indore. Practical hands-on training.",
    keywords: ["Lip Tinting Course Indore", "Lip blush training", "Watercolor lips course", "Permanent lip color training", "Deepika Patidar PMU"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Lip Aesthetics, Symmetry & Precision Mapping",
        description: "Designing the ideal lip silhouette and Cupid's bow symmetry.",
        topics: [
          "Anatomy of the Cupid's bow, oral commissures, and vermilion border",
          "Lip mapping with waterproof mapping pencils and thread",
          "Correcting asymmetry and defining pale borders without going into white skin",
          "Primary and secondary topical numbing protocols for painless comfort"
        ]
      },
      {
        unit: "Module 02",
        title: "Pigment Chemistry & Color Formulation",
        description: "Selecting and mixing flattering lip blush shades.",
        topics: [
          "Inorganic mineral vs organic lip blush pigment formulations",
          "Matching skin undertones: Dusty Rose, Peach Nude, Cherry Red, and Coral",
          "Dilution techniques with shading solution for translucent watercolor effects",
          "Preventing dark healed borders and unnatural harsh outlines"
        ]
      },
      {
        unit: "Module 03",
        title: "Watercolor Tinting & Velvet Shading Techniques",
        description: "Hand movements, needle configuration, and pixel layering.",
        topics: [
          "1RL, 3RS, and curved Magnum needle configurations",
          "Pendulum shading, circular polishing, and whip-shading techniques",
          "Creating 3D Ombre Lip Blush with deeper borders and lighter centers",
          "Practice on realistic 3D silicone lip models before live client sessions"
        ]
      },
      {
        unit: "Module 04",
        title: "Healing Phases, Retouching & Client Aftercare",
        description: "Guiding clients through flaking, color bloom, and annual touch-ups.",
        topics: [
          "Day 1 to 30 healing timeline: Peeling phase, ghost phase, and color bloom",
          "Post-care instructions: Ointment application, hydration, and sun protection",
          "Executing the 6-week perfecting touch-up session",
          "Pricing lip blush services, photography lighting, and portfolio marketing"
        ]
      }
    ],
    practicalExperience: {
      title: "Live Model Watercolor Lip Blushing",
      description: "Students execute complete Lip Blush procedures on live models using premium digital PMU pens and organic pigments.",
      steps: [
        "Lip symmetry mapping and color consultation with client",
        "Topical numbing application and barrier safety prep",
        "Whip-shading translucent color infusion across the lip body",
        "Soothing barrier balm application and client aftercare guide"
      ]
    },
    highlights: [
      {
        title: "Translucent Watercolor Technique",
        description: "Create soft, youthful lip color that looks naturally flushed.",
        icon: "Sparkles"
      },
      {
        title: "Custom Shade Formulation",
        description: "Mix bespoke Dusty Rose, Peach, Berry, and Nude shades.",
        icon: "BookOpen"
      },
      {
        title: "Cupid's Bow Symmetry Mapping",
        description: "Restore lost vermilion borders and correct asymmetry.",
        icon: "ShieldCheck"
      },
      {
        title: "Up to 2-Year Smudge-Proof Results",
        description: "Provide clients with effortless, smudge-free lip color.",
        icon: "Award"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Top-Requested Beauty Treatment by Modern Women",
        description: "Women love waking up with effortless, naturally tinted lips without needing daily lipstick reapplication."
      },
      {
        title: "High Service Profitability",
        description: "Procedures take approximately 2 hours and yield high profit margins with minimal consumable costs."
      },
      {
        title: "Synergy with Makeup & PMU Services",
        description: "Easily cross-sold to bridal, makeup, and brow clients seeking semi-permanent beauty solutions."
      }
    ],
    faqs: [
      {
        question: "How long does a Lip Blush treatment take to perform?",
        answer: "A complete procedure including consultation, mapping, numbing, and shading takes approximately 2 to 2.5 hours."
      },
      {
        question: "Does Lip Blush look like heavy lipstick?",
        answer: "No, modern watercolor lip blush creates a soft, translucent tint similar to a tinted lip balm, not heavy lipstick."
      },
      {
        question: "How long do the results last?",
        answer: "Lip tinting results typically last between 1.5 to 2.5 years before gradually fading naturally."
      },
      {
        question: "Is training conducted on live models?",
        answer: "Yes, students train on 3D silicone lips first and then perform complete procedures on live models under close supervision."
      }
    ],
    relatedSlugs: ["lip-neutralizing", "semi-permanent-makeup", "microblading", "beauty-mole-creation"],
    toolsAndKit: ["Precision Wireless PMU Shading Pen", "Organic Lip Blush Pigment Collection", "Single-Use 1RL & 3RS Membrane Needles", "Precision Mapping Pencils & Caliper", "Topical Anesthetic Numbing Gels", "3D Silicone Lip Training Sheets"]
  },

  // ==========================================
  // 14. MICROBLADING
  // ==========================================
  {
    slug: "microblading",
    title: "Eyebrow Microblading & Microshading Course",
    shortTitle: "Microblading",
    category: "Makeup",
    tagline: "Master Hyper-Realistic Feather Hair Strokes, Manual Blade Handling & Brow Symmetry",
    badge: "Feather Brow Artistry",
    heroDescription:
      "Learn hyper-realistic eyebrow microblading: manual pen ergonomics, U-blades, flex blades, spine flow patterns, Golden Ratio brow mapping, pigment color retention, and combination hybrid brows.",
    heroImage: "/images/courses/microblading/blade-hero.jpg",
    aboutTitle: "About the Eyebrow Microblading Program",
    aboutDescription: [
      "The Eyebrow Microblading & Microshading Course at Yashree Institute is a masterclass in hyper-realistic manual feather brow artistry.",
      "Students learn how to etch ultra-fine, crisp hair strokes into the basal membrane of the epidermis using specialized manual microblading handpieces and micro-blades.",
      "The curriculum covers natural hair growth patterns, spine direction (Spine 3, Spine 5, Spine 6), Golden Ratio symmetry mapping, skin depth control, and hybrid microshading."
    ],
    metaTitle: "Microblading Course in Indore | Feather Eyebrow Training - Yashree Institute",
    metaDescription: "Master eyebrow microblading, manual feather hair strokes, golden ratio mapping, and hybrid brows at Yashree Institute Indore. 100% practical training.",
    keywords: ["Microblading Course Indore", "Eyebrow microblading training", "Feather brows course", "Manual brow tattooing", "Deepika Patidar microblading"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Dermal Depth, Micro-Blades & Skin Physiology",
        description: "Understanding epidermal-dermal junction depth and blade types.",
        topics: [
          "Targeting the basal layer (0.2mm to 0.5mm) without cutting into deep dermis",
          "Hard blades vs Flex blades (12CF, 14CF, 18U-Blade) selection",
          "Skin types: Why microblading is ideal for normal/dry skin vs oily skin limitations",
          "Sanitation, single-use autoclave packaged blades, and biohazard disposal"
        ]
      },
      {
        unit: "Module 02",
        title: "Golden Ratio (Phi) Mapping & Symmetry Mastery",
        description: "Precision mapping for flawless facial harmony.",
        topics: [
          "Golden Ratio (1.618) caliper mapping to establish head, arch, and tail",
          "String mapping technique with charcoal thread for clean architectural lines",
          "Adjusting brow shapes for asymmetric bone structures and brow muscles",
          "Topical numbing protocols for pain-free manual blading"
        ]
      },
      {
        unit: "Module 03",
        title: "Natural Hair Stroke Patterns & Spine Flows",
        description: "Replicating natural brow hair growth directions.",
        topics: [
          "Spine 3, Spine 5, Spine 6, and Asian/Universal hair flow patterns",
          "Drawing head transitions, connecting lower strokes, and upper curve blending",
          "Pressure calibration and the characteristic 'crisp paper sound' of correct depth",
          "Extensive practice on flat and curved 3D silicone latex skins"
        ]
      },
      {
        unit: "Module 04",
        title: "Pigment Masking, Hybrid Shading & Healed Touch-ups",
        description: "Pigment rubbing, manual microshading, and 6-week touch-ups.",
        topics: [
          "Pigment rub-in (masking) technique for maximum stroke saturation",
          "Manual stippling microshading between strokes for dense Hybrid / Combo brows",
          "Managing the 4 to 6-week healing cycle and stroke retention",
          "Executing the perfection touch-up session and long-term client care"
        ]
      }
    ],
    practicalExperience: {
      title: "Extensive Blade Practice on Latex & Live Models",
      description: "Students master stroke flow on silicone skins before performing complete feather brow procedures on live models under expert guidance.",
      steps: [
        "Facial analysis, Golden Ratio caliper mapping, and client pre-draw approval",
        "Topical numbing application and sterile manual blade assembly",
        "Precision hair stroke blading following client natural hair flow",
        "Pigment masking, soothing balm application, and aftercare briefing"
      ]
    },
    highlights: [
      {
        title: "Hyper-Realistic Hair Strokes",
        description: "Learn stroke patterns that blend seamlessly with natural brow hairs.",
        icon: "Sparkles"
      },
      {
        title: "Golden Ratio Phi Mapping",
        description: "Master caliper and string mapping for perfect symmetry.",
        icon: "Award"
      },
      {
        title: "Hybrid Combo Brow Option",
        description: "Combine manual blading with manual microshading for fullness.",
        icon: "ShieldCheck"
      },
      {
        title: "Single-Use Sterile Standards",
        description: "Complete hygiene training with hospital-grade disposable tools.",
        icon: "BookOpen"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Most Prestigious Brow Enhancement Skill",
        description: "Microblading remains the gold standard in semi-permanent brow artistry globally."
      },
      {
        title: "High Fee Per Client Procedure",
        description: "Microblading artists command premium rates for 2-hour procedures with high profit margins."
      },
      {
        title: "Enormous Demand Among Alopecia & Thin Brow Clients",
        description: "Provides life-changing cosmetic transformations for clients with sparse, over-plucked, or thinning brows."
      }
    ],
    faqs: [
      {
        question: "Is microblading suitable for all skin types?",
        answer: "Microblading is ideal for normal to dry skin. For oily skin, we teach the Hybrid/Combo method (blading combined with microshading) for optimal retention."
      },
      {
        question: "How long does microblading last?",
        answer: "Healed microblading typically lasts between 12 to 18 months before needing an annual color boost."
      },
      {
        question: "Will microblading damage existing natural eyebrow hair?",
        answer: "No, microblading cuts are placed superfically in the upper epidermis without disturbing hair follicles located deeper in the dermis."
      },
      {
        question: "Are manual blades and practice kits supplied?",
        answer: "Yes, professional manual pens, sterile 18U and flex blades, organic brow pigments, and silicone practice skins are provided."
      }
    ],
    relatedSlugs: ["semi-permanent-makeup", "lip-neutralizing", "lip-tinting", "beauty-mole-creation"],
    toolsAndKit: ["Ergonomic Manual Microblading Pens", "Sterile 14CF & 18U Flex Micro-Blades", "Golden Ratio (Phi) Caliper & Mapping String", "Microblading Organic Pigment Trio", "Medical Grade Topical Anesthetics", "3D Silicone Eyebrow Practice Skins"]
  },

  // ==========================================
  // 15. BEAUTY MOLE CREATION
  // ==========================================
  {
    slug: "beauty-mole-creation",
    title: "Beauty Mole Creation & Aesthetic Spot Artistry",
    shortTitle: "Beauty Mole Creation",
    category: "Makeup",
    tagline: "Master Aesthetic Spot Placement, Marilyn Monroe Beauty Marks & Natural Micro-Pigmentation",
    badge: "Facial Aesthetic PMU",
    heroDescription:
      "Learn precise aesthetic beauty mark creation: facial landmark analysis (cheekbone, upper lip, chin), natural melanin pigment formulation, 1RL needle micro-dotting, depth control, and natural healed spot integration.",
    heroImage: "/images/courses/beauty-mole-creation/mole-hero.jpg",
    aboutTitle: "About the Beauty Mole Creation Program",
    aboutDescription: [
      "The Beauty Mole Creation & Aesthetic Spot Artistry course at Yashree Institute is an exclusive aesthetic micro-pigmentation program.",
      "Iconic beauty marks—such as the classic Marilyn Monroe cheek spot, upper lip mark, or Cindy Crawford aesthetic dot—accentuate facial symmetry and charisma.",
      "Students learn precision facial landmark analysis, natural pigment blending (cool espresso, warm chestnut), 1RL micro-stippling technique, and safe healed depth control."
    ],
    metaTitle: "Beauty Mole Creation Course in Indore | Aesthetic Beauty Marks - Yashree Institute",
    metaDescription: "Master professional beauty mole creation, aesthetic beauty spots, facial landmark mapping, and micro-pigmentation at Yashree Institute Indore.",
    keywords: ["Beauty Mole Creation Indore", "Beauty mark tattooing", "Aesthetic mole course", "PMU beauty spot", "Facial aesthetics Indore"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Facial Aesthetics & Iconic Beauty Mark Placement",
        description: "Analyzing facial geometry and classic beauty spot landmarks.",
        topics: [
          "History and allure of iconic beauty marks (Marilyn Monroe, Cindy Crawford, Madonna)",
          "Facial symmetry assessment: Cheekbone accentuation, Cupid's bow, and chin dimples",
          "Selecting appropriate size (1mm to 2mm) to ensure natural appearance",
          "Skin assessment: Distinguishing aesthetic beauty spots from abnormal dermatological lesions"
        ]
      },
      {
        unit: "Module 02",
        title: "Pigment Chemistry & Custom Color Formulation",
        description: "Formulating realistic mole colors that mimic natural melanin.",
        topics: [
          "Why pure black pigment should never be used (avoids blue/gray tattoo effect)",
          "Blending rich espresso brown, warm chocolate, and soft taupe mineral pigments",
          "Matching client undertones and natural freckle/mole colorations",
          "Stability of micro-pigments in upper dermal layers over time"
        ]
      },
      {
        unit: "Module 03",
        title: "1RL Micro-Stippling & Needle Depth Control",
        description: "Executing soft-edged, natural-looking circular spots.",
        topics: [
          "Single Round Liner (1RL) needle cartridge configuration and perpendicular angle",
          "Micro-stippling dotting technique: Soft perimeter edges with denser center",
          "Calibrating depth (0.5mm) to prevent pigment blurring or blowout",
          "Practicing precise dot sizing on synthetic silicone face models"
        ]
      },
      {
        unit: "Module 04",
        title: "Healing, Aftercare & Touch-up Protocols",
        description: "Post-procedure care and long-term retention management.",
        topics: [
          "Micro-crusting healing phases and expected 30% color softening",
          "Post-care balm application, sun protection, and avoiding picking",
          "Executing the 4-week perfection touch-up if needed",
          "Adding beauty marks as high-value add-ons to bridal and salon services"
        ]
      }
    ],
    practicalExperience: {
      title: "Precision Placement & Live Model Execution",
      description: "Students practice micro-dotting on synthetic silicone skins before performing beauty mark placements on live clients under supervision.",
      steps: [
        "Facial landmark analysis and client pencil pre-draw confirmation",
        "Custom brown pigment formulation and 1RL needle assembly",
        "Micro-stippling dotting with perpendicular hand technique",
        "Soothing barrier balm application and client aftercare guide"
      ]
    },
    highlights: [
      {
        title: "Facial Landmark Alignment",
        description: "Learn aesthetic placement to highlight cheekbones and lips.",
        icon: "Sparkles"
      },
      {
        title: "Realistic Melanin Formulation",
        description: "Formulate natural chocolate browns that never turn blue.",
        icon: "BookOpen"
      },
      {
        title: "1RL Micro-Stippling Precision",
        description: "Create soft, feathered-edge beauty spots that look natural.",
        icon: "ShieldCheck"
      },
      {
        title: "Quick High-Margin Service Add-on",
        description: "A fast 20-minute procedure that adds instant salon revenue.",
        icon: "Award"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Trendy Quick-Turnaround Service",
        description: "Takes only 15-20 minutes to perform, making it an easy add-on to any bridal, makeup, or PMU appointment."
      },
      {
        title: "Zero Product Waste & Minimal Consumables",
        description: "Requires minimal pigment and needle materials while providing a high profit margin."
      },
      {
        title: "Enhances Facial Charisma & Individuality",
        description: "Allows clients to accentuate their best facial features with an iconic, elegant beauty mark."
      }
    ],
    faqs: [
      {
        question: "Will the created beauty mark turn blue or green over time?",
        answer: "No. We teach you never to use black ink; we use specialized mineral-based espresso and chocolate brown pigments that fade naturally without discoloration."
      },
      {
        question: "How long does a semi-permanent beauty mole last?",
        answer: "A professionally created beauty mole typically lasts between 1.5 to 3 years before gradually softening."
      },
      {
        question: "Is the procedure painful?",
        answer: "Because the spot is tiny (1-2mm), the procedure takes under 2 minutes of blading with topical numbing, causing virtually zero pain."
      },
      {
        question: "Can existing light moles be darkened or enhanced?",
        answer: "Yes, clients frequently request darkening or defining existing faint natural beauty spots."
      }
    ],
    relatedSlugs: ["semi-permanent-makeup", "lip-tinting", "microblading", "lash-lifting"],
    toolsAndKit: ["Digital Precision PMU Pen", "Sterile 1RL Micro-Needle Cartridges", "Natural Espresso & Chocolate Pigment Inks", "Precision Sizing Calliper", "Topical Anesthetic Gel", "Silicone Facial Practice Model"]
  },

  // ==========================================
  // 16. LASH LIFTING
  // ==========================================
  {
    slug: "lash-lifting",
    title: "Lash Lifting, Keratin Tinting & Brow Lamination",
    shortTitle: "Lash Lifting",
    category: "Makeup",
    tagline: "Master Silicone Shield Wrapping, Chemical Disulfide Perming, Keratin Infusion & Lash Tinting",
    badge: "Eye Aesthetic Artistry",
    heroDescription:
      "Learn natural eyelash lifting and keratin enhancement: silicone rod sizing (S, M, L), chemical disulfide perm solutions, keratin conditioning, deep black tinting, and brow lamination.",
    heroImage: "/images/courses/lash-lifting/lash-hero.jpg",
    aboutTitle: "About the Lash Lifting & Tinting Program",
    aboutDescription: [
      "The Lash Lifting, Keratin Tinting & Brow Lamination Course at Yashree Institute trains students in non-damaging chemical curling and styling of natural lashes.",
      "Unlike artificial extensions, lash lifting works with the client's natural eyelashes—curling them upward from the root using anatomical silicone shields and safe perm solutions.",
      "The curriculum includes deep keratin protein infusions, semi-permanent black tinting, and dual training in trending Brow Lamination for full, feathered brows."
    ],
    metaTitle: "Lash Lifting Course in Indore | Keratin Lash Perm & Tint - Yashree Institute",
    metaDescription: "Master natural lash lifting, keratin lash tinting, silicone shields, and brow lamination at Yashree Institute Indore. Practical hands-on training.",
    keywords: ["Lash Lifting Course Indore", "Keratin lash lift training", "Lash tinting course", "Brow lamination training", "Deepika Patidar lashes"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Lash Anatomy, Growth Cycles & Shield Selection",
        description: "Understanding natural lash health, follicle phases, and shield curvature.",
        topics: [
          "Anatomy of the natural eyelash: Anagen, Catagen, and Telogen growth phases",
          "Silicone shield rod sizing: Small (dramatic lift), Medium (natural curl), Large (subtle curve)",
          "Contraindications: Eye infections, blepharitis, dry eye syndrome, and patch testing",
          "Sterilization, eye hygiene, and lower lash isolation with hydrogel patches"
        ]
      },
      {
        unit: "Module 02",
        title: "Lash Wrapping Mechanics & Chemical Perming",
        description: "Securing lashes without criss-crossing and timed perm solutions.",
        topics: [
          "Lash lift adhesive application and straight 90° lash alignment on silicone shield",
          "Step 1: Perming lotion (Thioglycolate) application to break disulfide bonds",
          "Timing calibration based on fine, normal, or coarse natural lash thickness (8 to 12 mins)",
          "Avoiding root over-processing and preventing tip singeing"
        ]
      },
      {
        unit: "Module 03",
        title: "Neutralization, Keratin Infusion & Black Tinting",
        description: "Rebuilding bonds, intense color tinting, and protein nourishment.",
        topics: [
          "Step 2: Neutralizer lotion application to lock in the newly lifted curl structure",
          "Deep blue-black and rich black lash tinting formulation and application",
          "Step 3: Keratin protein and panthenol nourishing essence infusion",
          "Safe shield removal with warm saline and conditioning comb-out"
        ]
      },
      {
        unit: "Module 04",
        title: "Brow Lamination Masterclass & Client Aftercare",
        description: "Restructuring eyebrow hairs for fluffy, model-like brows.",
        topics: [
          "Brow lamination chemical process: Relaxing, brushing into direction, and setting",
          "Brow shaping, waxing/threading alignment, and hybrid brow tinting",
          "24-hour aftercare rules: Avoiding steam, water, and oil-based cleansers",
          "Structuring recurring salon lash and brow bar service packages"
        ]
      }
    ],
    practicalExperience: {
      title: "Complete Live Model Lash Lifting & Brow Lamination",
      description: "Students execute full lash lifting and brow lamination treatments on live models under close mentor supervision.",
      steps: [
        "Under-eye patch placement and silicone shield sizing",
        "Precision lash wrapping with Y-comb tools",
        "Timed perming, neutralizing, and black tint application",
        "Keratin nourishment infusion and final mascara-effect reveal"
      ]
    },
    highlights: [
      {
        title: "100% Natural Lash Enhancement",
        description: "Deliver 6-8 weeks of curled mascara-effect lashes without extensions.",
        icon: "Sparkles"
      },
      {
        title: "Dual Lash Lift & Brow Lamination",
        description: "Master both lash lifting and fluffy brow lamination in one course.",
        icon: "Award"
      },
      {
        title: "Keratin Protein Nourishment",
        description: "Strengthen and condition natural lashes during the lifting process.",
        icon: "ShieldCheck"
      },
      {
        title: "High-Volume Quick Salon Service",
        description: "45-minute treatment with high client demand and low product cost.",
        icon: "BookOpen"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Popular Low-Maintenance Alternative to Extensions",
        description: "Clients love that lash lifts require no refills, no special washing restrictions, and last 6-8 weeks."
      },
      {
        title: "Fast 45-Minute Salon Service",
        description: "Stylists can perform multiple lash lifts daily with low raw material cost and high profit margins."
      },
      {
        title: "Dual Eyelash & Eyebrow Service Potential",
        description: "Combining lash lifts with brow lamination creates the ultimate high-demand eye aesthetic combo package."
      }
    ],
    faqs: [
      {
        question: "How long does a Lash Lift last on natural lashes?",
        answer: "A professional lash lift lasts between 6 to 8 weeks, following the natural lifecycle and shed rate of eyelashes."
      },
      {
        question: "Will lash lifting damage my natural eyelashes?",
        answer: "No, when timed accurately according to lash diameter and followed by keratin protein nourishment, natural lashes remain healthy and strong."
      },
      {
        question: "Is Brow Lamination also included in this course?",
        answer: "Yes, the course includes full training on Brow Lamination chemical restructuring, direction styling, and tinting."
      },
      {
        question: "Can clients wear mascara after a lash lift?",
        answer: "Yes, after the initial 24-hour setting window, clients can wear mascara and apply regular makeup freely."
      }
    ],
    relatedSlugs: ["beauty-mole-creation", "microblading", "semi-permanent-makeup", "lip-tinting"],
    toolsAndKit: ["Anatomical Silicone Rods (S, M, L)", "Precision Y-Comb & Lash Lifting Tool", "Perm & Neutralizer Solution Sachets", "Intense Blue-Black Lash Tint Kit", "Keratin Nourishing Lash Conditioning Oil", "Hydrogel Eye Isolation Patches"]
  },

  // ==========================================
  // 17. NAIL EXTENSIONS
  // ==========================================
  {
    slug: "nail-extensions",
    title: "Nail Extensions & Sculpting Course",
    shortTitle: "Nail Extensions",
    category: "Nails",
    tagline: "Master Acrylic Extensions, Hard Gel, Polygel, Tip Overlays & Russian Manicure Prep",
    badge: "Studio Nail Artistry",
    heroDescription:
      "Master dry Russian cuticle prep, tip application, paper form sculpting, monomer-to-polymer bead ratios, polygel dual forms, UV/LED curing, and apex building for salon durability.",
    heroImage: "/images/courses/nail-extensions/nailext-hero.jpg",
    aboutTitle: "About the Nail Extensions Program",
    aboutDescription: [
      "The Nail Extensions & Sculpting Course at Yashree Institute trains aspiring nail technicians in the structural science of modern artificial nail enhancements.",
      "Students master multiple extension systems: Acrylic Liquid & Powder sculpting, Hard Builder Gel overlays, Polygel dual forms, and soft gel extensions.",
      "Great emphasis is placed on electric e-file dry manicures, cuticle clearing, seamless tip blending, apex architecture for crack prevention, and safe removal protocols."
    ],
    metaTitle: "Nail Extensions Course in Indore | Acrylic, Gel & Polygel - Yashree Institute",
    metaDescription: "Learn professional nail extensions, acrylic sculpting, gel extensions, polygel, and Russian manicure prep at Yashree Institute Indore. Hands-on training.",
    keywords: ["Nail Extension Course Indore", "Acrylic nails training", "Gel nails course", "Polygel nail extensions", "Nail academy Indore"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Nail Anatomy, Sanitation & Russian E-File Prep",
        description: "Hygiene, nail plate chemistry, and electric file cuticle cleaning.",
        topics: [
          "Nail matrix, nail bed, hyponychium, and cuticle anatomy",
          "Dry Russian manicure using diamond flame and ball e-file drill bits",
          "Nail dehydration, acid-free primer, and adhesion chemistry",
          "Disinfection, autoclave sterilization, and sanitizing solutions"
        ]
      },
      {
        unit: "Module 02",
        title: "Tip Application & Full Cover Extensions",
        description: "Selecting tips, seamless blending, and soft gel systems.",
        topics: [
          "Sizing and gluing clear, natural, and French tips correctly",
          "Seamless step blending with 100/180 grit files without natural nail damage",
          "Soft gel full cover tip application with UV extend gel",
          "Square, Coffin, Stiletto, Almond, and Oval nail shaping"
        ]
      },
      {
        unit: "Module 03",
        title: "Acrylic Sculpting & Monomer Bead Control",
        description: "Mastering liquid-to-powder ratios and structural apex creation.",
        topics: [
          "Kolinsky brush care and liquid monomer absorption ratios",
          "3-bead acrylic application method and cuticle perimeter zone safety",
          "Sculpting with paper nail forms without artificial plastic tips",
          "C-curve pinching and structural apex balance for strength"
        ]
      },
      {
        unit: "Module 04",
        title: "Hard Gel, Polygel & Safe Nail Removal",
        description: "Self-leveling builder gels, hybrid polygels, and refills.",
        topics: [
          "Hard builder gel sculpting and flash curing techniques",
          "Polygel dual form sculpting with slip solution",
          "Nail refill, rebalancing grown out apex, and crack repair",
          "Safe non-damaging acetone soak-off and e-file debulking"
        ]
      }
    ],
    practicalExperience: {
      title: "Hands-on Nail Table Workstation Training",
      description: "Students work on practice trainer hands and live models using professional UV/LED lamps and electric files.",
      steps: [
        "E-file Russian cuticle cleaning and nail bed preparation",
        "Tip sizing, gluing, blending, and paper form alignment",
        "Acrylic / Gel product application with balanced apex building",
        "Final contour filing, buffing, and high-shine top coat curing"
      ]
    },
    highlights: [
      {
        title: "Multiple Extension Mediums",
        description: "Master Acrylic, Hard Builder Gel, Polygel, and Soft Gels.",
        icon: "Sparkles"
      },
      {
        title: "Russian E-File Cuticle Prep",
        description: "Learn clean cuticle pocket prep with electric drill bits.",
        icon: "ShieldCheck"
      },
      {
        title: "Apex Architecture & Durability",
        description: "Build strong, natural-looking extensions that resist lifting.",
        icon: "Award"
      },
      {
        title: "Live Model Sculpting",
        description: "Execute full 10-finger sets on live clients under guidance.",
        icon: "BookOpen"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Booming Nail Bar & Salon Industry",
        description: "Nail extensions have become one of the fastest-growing repeat beauty services across Indian cities."
      },
      {
        title: "High Profit Margin Per Client",
        description: "Extension services carry low raw material cost and high service value with mandatory 3-4 week refills."
      },
      {
        title: "Creative & Rewarding Specialization",
        description: "Allows nail artists to build loyal client followings and showcase eye-catching content on social media."
      }
    ],
    faqs: [
      {
        question: "What types of nail extensions are taught in this course?",
        answer: "You will master Acrylic liquid & powder sculpting, Hard Builder Gel extensions, Hybrid Polygel, and Soft Gel Full Cover tips."
      },
      {
        question: "Is electric file (E-File) training included?",
        answer: "Yes, students learn safe Russian manicure e-file cuticle techniques, bit selection, RPM speeds, and debulking."
      },
      {
        question: "Do students practice on live clients?",
        answer: "Yes, after completing trainer hand simulations, students execute full sets on live models with mentor supervision."
      },
      {
        question: "How long do extensions created with these methods typically last?",
        answer: "Properly prepped extensions with correct apex architecture last 3 to 4 weeks before requiring a routine infill."
      }
    ],
    relatedSlugs: ["nail-art", "professional-makeup", "skin"],
    toolsAndKit: ["Professional 35,000 RPM E-File Drill", "Diamond Russian Cuticle Bit Set", "48W UV/LED Curing Lamp", "100% Pure Kolinsky Acrylic Brush", "Monomer Dappen Dish & Powders", "Polygel Dual Forms & Slip Solution"]
  },

  // ==========================================
  // 18. NAIL ART
  // ==========================================
  {
    slug: "nail-art",
    title: "Nail Art & Studio Design Mastery",
    shortTitle: "Nail Art",
    category: "Nails",
    tagline: "Master Chrome, Cat-Eye, Ombre, 3D Acrylic Florals, Marble, Rhinestones & Freehand Art",
    badge: "Creative Nail Artistry",
    heroDescription:
      "Elevate your nail studio with trending designs: mirror chrome pigments, magnetic cat-eye velvet, French baby boomer ombre, 3D acrylic sculpting, blooming gels, and Swarovski stone placement.",
    heroImage: "/images/courses/nail-art/nailart-hero.jpg",
    aboutTitle: "About the Nail Art Masterclass",
    aboutDescription: [
      "The Nail Art & Studio Design Mastery course at Yashree Institute empowers artists with advanced visual techniques, fine-line brush control, and creative medium combinations.",
      "From salon staple French ombre and blooming watercolor florals to metallic chromes, 5D magnetic cat-eye effects, encapsulated glitters, and 3D acrylic petals, students learn every in-demand technique.",
      "The curriculum emphasizes brush angle control, product consistency, color harmonies, quick commercial salon hacks, and durable top-coat sealing for chip-resistant longevity."
    ],
    metaTitle: "Nail Art Course in Indore | 3D Florals, Chrome, Cat-Eye - Yashree Institute",
    metaDescription: "Learn advanced nail art, 3D acrylic flowers, chrome, marble, baby boomer ombre, and rhinestone placement at Yashree Institute Indore. Practical studio training.",
    keywords: ["Nail Art Course Indore", "3D Nail Art training", "Chrome nails course", "Cat eye nail art", "Bridal nail designs"],
    curriculum: [
      {
        unit: "Module 01",
        title: "Fine Liner Brush Control & French Baby Boomer",
        description: "Brush ergonomics, dotting tools, and seamless ombre blending.",
        topics: [
          "Fine liner, striper, and flat gel brush maintenance and stroke techniques",
          "Classic white French smile line painting with precision brushes",
          "Baby boomer pink-and-white sponge ombre fade technique",
          "Geometric line art, negative space designs, and checkerboards"
        ]
      },
      {
        unit: "Module 02",
        title: "Chrome Powders, Cat-Eye & Foil Encapsulation",
        description: "Mirror finishes, magnetic velvet effects, and metallic foil work.",
        topics: [
          "Mirror gold, silver, holographic, and glazed donut chrome application",
          "5D and 9D magnetic cat-eye wand patterns (velvet, galaxy, French smile)",
          "Transfer foil adhesion with specialized foil gel",
          "Encapsulated dried flowers, mylar flakes, and glitter inlays"
        ]
      },
      {
        unit: "Module 03",
        title: "3D Acrylic Sculpting & Embossed Gel Art",
        description: "Dimensional floral petals, sweater textures, and blooming gels.",
        topics: [
          "3D acrylic brush manipulation for realistic flower petals and leaves",
          "Embossed sweater nail art and 3D gel line texturing",
          "Blooming gel watercolor blossoms, snake print, and smoke effects",
          "Natural marble veining with alcohol inks and gold leaf accents"
        ]
      },
      {
        unit: "Module 04",
        title: "Rhinestone Architecture & Studio Sealing",
        description: "Bridal stone placement, clusters, and chip-proof top coats.",
        topics: [
          "Swarovski crystal sizing, cluster balance, and caviar bead borders",
          "UV gem glue anchoring and gap filling for snag-free wear",
          "Matte, glossy, and rubber top coat sealing protocols",
          "Shooting macro nail photography and social media reels"
        ]
      }
    ],
    practicalExperience: {
      title: "Extensive Tip Art & Live Model Application",
      description: "Students build a complete portfolio display wheel of 30+ trending nail art styles and execute full sets on live models.",
      steps: [
        "Base color application and matte/gloss surface prep",
        "Fine-line freehand painting and pigment rubbing",
        "3D acrylic petal sculpting and crystal cluster anchoring",
        "High-gloss sealed top coat curing and macro photography"
      ]
    },
    highlights: [
      {
        title: "30+ Trending Art Styles",
        description: "Master Chromes, Cat-Eye, Marble, 3D Flowers, and Ombre.",
        icon: "Sparkles"
      },
      {
        title: "Precision Brush Control",
        description: "Learn fine-line control for intricate freehand work.",
        icon: "Award"
      },
      {
        title: "Bridal Crystal Embellishments",
        description: "Anchor heavy Swarovski stones securely without falling.",
        icon: "ShieldCheck"
      },
      {
        title: "Portfolio Wheel Creation",
        description: "Take home a complete display wheel to showcase to clients.",
        icon: "BookOpen"
      }
    ],
    gallery: [
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
    ],
    whyLearn: [
      {
        title: "Multiply Service Revenue with Art Add-ons",
        description: "Nail art adds substantial value to basic manicures and extension sets with minimal extra product cost."
      },
      {
        title: "High Client Loyalty & Social Virality",
        description: "Creative nail art is the single most shared beauty content on Instagram and Pinterest."
      },
      {
        title: "Essential for Bridal & Festive Bookings",
        description: "Brides demand customized nail designs matching their lehengas and wedding themes."
      }
    ],
    faqs: [
      {
        question: "Do I need to be naturally good at drawing to learn nail art?",
        answer: "Not at all. We teach systematic brush placement techniques, muscle memory exercises, and tool hacks that anyone can master."
      },
      {
        question: "What art styles are covered in the curriculum?",
        answer: "Over 30 styles including Chrome, Cat-Eye, Marble, 3D Acrylic Florals, French Ombre, Blooming Gel, and Rhinestone clusters."
      },
      {
        question: "How do we ensure rhinestones do not fall off quickly?",
        answer: "We teach specialized UV gem gel anchoring, perimeter sealing, and gap-filling methods to keep stones intact for weeks."
      },
      {
        question: "Will I create my own design display wheel?",
        answer: "Yes, every student builds a multi-tier nail art wheel containing all practiced designs to display for future clients."
      }
    ],
    relatedSlugs: ["nail-extensions", "professional-makeup", "skin"],
    toolsAndKit: ["Detail Liner & Striper Brush Set", "Magnetic Cat-Eye Wand Tool", "3D Acrylic Sculpting Brush", "Chrome Powder Pigment Palette", "UV Crystal Adhesive Gel", "Nail Art Practice Display Wheels"]
  }
];

export function getCourseBySlug(slug: string): CourseData | undefined {
  return COURSES_LIST.find((c) => c.slug === slug);
}

export function getAllCourses(): CourseData[] {
  return COURSES_LIST;
}

export function getCoursesByCategory(category: CourseData["category"]): CourseData[] {
  return COURSES_LIST.filter((c) => c.category === category);
}
