export interface ServiceGalleryItem {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  tag?: string;
  aspect?: "portrait" | "landscape" | "square" | "wide";
  isFeatured?: boolean;
  shapeOrType?: string;
  colorOrShade?: string;
  priceRange?: string;
  duration?: string;
  benefits?: string[];
  keyTools?: string[];
  clientDemand?: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  durationBadge: string;
  heroTagline: string;
  metaTitle: string;
  metaDescription: string;
  posterImage: string;
  heroImage: string;
  pdfReference: string;
  
  // Theme & Visual Identity Tokens
  themeAccent: {
    badgeBg: string;
    badgeText: string;
    borderAccent: string;
    tagBg: string;
    gradientGlow: string;
    accentColorHex: string;
  };

  // Schedule & Timing Details
  schedule: {
    duration: string;
    days: string;
    timings: string;
    batchSize: string;
    mode: string;
  };

  // Fees & Pricing Transparency
  pricingInfo: {
    feeStructure: string;
    installmentAvailable: boolean;
    kitInclusionValue: string;
    consultation: string;
  };

  // Training Behavior & Methodology Steps
  trainingBehavior: {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
  };

  overview: string;
  modules: string[];
  keyHighlights: string[];
  kitProvided: string[];
  practicalTraining: {
    title: string;
    description: string;
    features: string[];
  };

  // Dedicated Visual Gallery (Exactly 3 Curated Step-by-Step Unique Visuals)
  galleryHeading: string;
  gallerySubtitle: string;
  galleryImages: ServiceGalleryItem[];

  benefits: string[];
  faqs: { q: string; a: string }[];
  idealFor: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  // 1. AESTHETICS (Non-Doctor Aesthetic Course)
  {
    slug: "aesthetic",
    title: "Non-Doctor Aesthetic Course",
    shortTitle: "Aesthetic & Medi-Facials",
    category: "Clinical Aesthetics",
    durationBadge: "Flagship Program",
    heroTagline: "Master the Art of Industry-Focused Non-Doctor Aesthetic & Medi-Facial Care",
    metaTitle: "Non-Doctor Aesthetic Course in Indore | Yashree Institute",
    metaDescription: "Master non-doctor clinical aesthetics, medi-facials, chemical peels, microdermabrasion & BB glow with hands-on device training in Indore at Yashree Institute.",
    posterImage: "/images/non_doctor_aesthetic.jpg",
    heroImage: "/images/services/aesthet_ultrasound_scrub.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 16)",
    themeAccent: {
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-800",
      borderAccent: "border-emerald-300",
      tagBg: "bg-emerald-100 text-emerald-900",
      gradientGlow: "from-emerald-500/15 via-teal-500/5 to-transparent",
      accentColorHex: "#059669",
    },
    schedule: {
      duration: "Intensive Clinical Track (Offline & Online Options)",
      days: "Monday to Saturday (Flexible Batches)",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Strictly Capped at 25 Students for 1-on-1 Device Practice",
      mode: "Offline Classroom (Indore Campus) + Practical Lab",
    },
    pricingInfo: {
      feeStructure: "Transparent Pricing with Flexible Installment Facility",
      installmentAvailable: true,
      kitInclusionValue: "Sterilization kit, medical safety gear & machine protocol manual provided",
      consultation: "Direct Mentorship & Clinical Guidance by Deepika Patidar",
    },
    trainingBehavior: {
      step1: "Theoretical Dermatology Foundation, Skin pH Science & Fitzpatrick Analysis",
      step2: "Sterile Device Operation, Vacuum Pressure & Active Ingredient Infusion",
      step3: "Supervised Hands-on Practice on Live Models for Medi-Facials, Peels & BB Glow",
      step4: "Clinic Setup Guidance, Treatment Consultation Scripting & Certification",
    },
    overview:
      "Our Non-Doctor Aesthetic Course is formulated in strict accordance with professional cosmetic safety protocols. This flagship curriculum trains you to diagnose complex skin conditions, operate clinical aesthetic devices safely, and perform high-demand non-invasive medi-facial treatments.",
    modules: [
      "Foundation of Aesthetics & Skin Science",
      "Skin Analysis & Fitzpatrick Profiling",
      "Professional Medi-Facials & Clinical Protocols",
      "Chemical Peels & Exfoliation Depth Control",
      "Microdermabrasion & Skin Resurfacing",
      "BB Glow & Nano-Needling Treatments",
      "Laser & Light Therapy Fundamentals",
      "Sterilization, Hygiene & Cross-Contamination Protocols",
      "Client Consent Documentation & Medical Contraindications",
      "Aesthetic Clinic Setup & Treatment Pricing Strategy",
    ],
    keyHighlights: [
      "100% Practical Training on Clinical Aesthetic Machines",
      "Direct Guidance by Deepika Patidar & Aesthetic Specialists",
      "Practice Starter Kit & Safety Documentation Included",
      "Small Batch Size (Max 25 Students) for Dedicated Attention",
      "Prestigious Convocation Ceremony with Stage Certification",
    ],
    kitProvided: [
      "Diagnostic Dermascope & Magnifier Lamp Guide",
      "Clinical Disinfection & Autoclave Protocol Kit",
      "Chemical Peel Neutralizer Solutions & Fan Brushes",
      "Nano-Cartridge Needles & Sterile Ampoule Connectors",
      "Clinical Post-Care Barrier Repair Balms",
    ],
    practicalTraining: {
      title: "Hands-on Device Experience",
      description:
        "Every student operates clinical medi-facial devices directly on live models under the close supervision of our senior trainers.",
      features: [
        "Hydra Vacuum Extraction & Vortex Infusion",
        "Ultrasonic Deep Pore Exfoliation & Desincrustation",
        "AHA/BHA Glycolic & Salicylic Chemical Peel Application",
        "BB Glow Nano-Infusion & Pigment Blending",
        "7-Spectrum LED Phototherapy Light Calibration",
      ],
    },
    galleryHeading: "3-Stage Clinical Aesthetic Masterclass",
    gallerySubtitle:
      "Authentic step-by-step visual documentation: from clinical skin analysis and LED calibration to sterile clinic release.",
    galleryImages: [
      {
            "src": "/images/services/aesthet_skin_analysis.jpg",
            "alt": "Skin Diagnostics & Fitzpatrick Analysis",
            "title": "Stage 01: Clinical Skin Diagnostics & Mapping",
            "subtitle": "Magnification dermascope analysis, moisture barrier evaluation, and customized Fitzpatrick profiling.",
            "tag": "Clinical Prep",
            "benefits": [
                  "Fitzpatrick Type 1-6 analysis",
                  "Hydration level checks",
                  "Tailored treatment mapping"
            ],
            "keyTools": [
                  "Magnification Dermascope",
                  "Moisture Probe"
            ],
            "clientDemand": "Essential Foundation"
      },
      {
            "src": "/images/services/aesthet_ultrasonic_spatula.jpg",
            "alt": "Ultrasonic Cavitation Scrubbing",
            "title": "Stage 02: Ultrasonic Pore Desincrustation",
            "subtitle": "28,000 Hz ultrasound waves emulsifying deep sebum and blackheads with zero skin trauma.",
            "tag": "Deep Cleanse",
            "benefits": [
                  "Painless extraction",
                  "Pore unclogging",
                  "Surface smoothening"
            ],
            "keyTools": [
                  "Ultrasonic Cavitation Spatula",
                  "Desincrustation Gel"
            ],
            "clientDemand": "High Client Demand"
      },
      {
            "src": "/images/services/aesthet_derma_roller.jpg",
            "alt": "Aesthetic Medi-Facial Infusion",
            "title": "Stage 03: Active Cosmeceutical Meso-Infusion",
            "subtitle": "Transdermal delivery of hyaluronic acid, vitamin C, and peptide complexes into epidermis.",
            "tag": "Active Infusion",
            "benefits": [
                  "Deep hydration penetration",
                  "Fine line reduction",
                  "Instant glow"
            ],
            "keyTools": [
                  "Nano-Infusion Handpiece",
                  "Cosmeceutical Ampoules"
            ],
            "clientDemand": "Flagship Treatment"
      },
      {
            "src": "/images/services/aesthet_led_phototherapy.jpg",
            "alt": "LED Phototherapy Calibration",
            "title": "Stage 04: 7-Spectrum LED Light Phototherapy",
            "subtitle": "Targeted wavelengths stimulating collagen renewal and eliminating acne-causing bacteria.",
            "tag": "Light Therapy",
            "benefits": [
                  "Collagen synthesis",
                  "Redness calming",
                  "Acne clearance"
            ],
            "keyTools": [
                  "7-Spectrum LED Tunnel",
                  "Protective Goggles"
            ],
            "clientDemand": "Clinical Standard"
      },
      {
            "src": "/images/services/aesthet_clinical_sanitation.jpg",
            "alt": "Clinical Autoclave & Sterilization Protocols",
            "title": "Stage 05: Hospital-Grade Infection Control",
            "subtitle": "Autoclave cycle verification, barrier wrapping, and medical sanitation protocols.",
            "tag": "Clinic Hygiene",
            "benefits": [
                  "Zero infection risk",
                  "Client safety trust",
                  "Medical compliance"
            ],
            "keyTools": [
                  "Autoclave Machine",
                  "Hospital Antiseptic"
            ],
            "clientDemand": "Safety Standard"
      },
      {
            "src": "/images/services/aesthet_sterile_clinic.jpg",
            "alt": "Sterile Clinic Station & Client Post-Care",
            "title": "Stage 06: Post-Procedure Barrier Restoration",
            "subtitle": "Cryo-globe soothing, ceramide barrier repair balm application, and aftercare prescription.",
            "tag": "Mastered Result",
            "benefits": [
                  "Zero downtime recovery",
                  "Long-lasting skin barrier",
                  "Client loyalty"
            ],
            "keyTools": [
                  "Cryo Globes",
                  "Ceramide Shield Cream"
            ],
            "clientDemand": "Elite Clinic Service"
      }
    ],
    benefits: [
      "Master High-Ticket Medi-Facials & Aesthetic Treatments",
      "Operate Modern Salon & Clinic Grade Machinery Confidently",
      "Understand Active Cosmeceutical Formulations & Contraindications",
      "Receive Yashree Institute Industry-Recognized Certification",
      "Gain Confidence to Launch Your Own Aesthetic Studio or Clinic",
    ],
    faqs: [
      {
        q: "Do I need a medical degree to join this Aesthetic course?",
        a: "No medical background is required. This course is specifically formulated for non-doctor aesthetic practitioners, salon owners, and cosmetologists focusing on non-invasive procedures.",
      },
      {
        q: "Will I get to practice on live models?",
        a: "Yes. All students perform live hands-on procedures under direct instructor supervision once theory and synthetic practice are mastered.",
      },
      {
        q: "What devices are covered in this course?",
        a: "You will master Hydra Facial vacuum extractors, Ultrasonic Spatulas, High-Frequency therapy, Diamond Microdermabrasion, and Photon LED Phototherapy.",
      },
    ],
    idealFor: "Aspiring clinical aesthetic practitioners, salon owners looking to upgrade to medi-facials, and beauty therapists seeking high-earning specialization.",
  },

  // 2. COSMETOLOGY (Full Cosmetology Course)
  {
    slug: "cosmetology",
    title: "Full Cosmetology Course",
    shortTitle: "Complete Cosmetology",
    category: "All-in-One Professional Track",
    durationBadge: "Complete Mastery Track",
    heroTagline: "The Complete Beauty, Hair, Makeup & Aesthetic Professional Program",
    metaTitle: "Full Cosmetology Course in Indore | Yashree Institute",
    metaDescription: "Master all dimensions of modern beauty: skin science, hair chemical treatments, bridal makeup, nail art, and salon management in Indore at Yashree Institute.",
    posterImage: "/images/founder_card.jpg",
    heroImage: "/images/cosmetology_training_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 15)",
    themeAccent: {
      badgeBg: "bg-amber-50",
      badgeText: "text-[#b8860b]",
      borderAccent: "border-amber-300",
      tagBg: "bg-amber-100 text-amber-900",
      gradientGlow: "from-amber-500/15 via-yellow-500/5 to-transparent",
      accentColorHex: "#f2c301",
    },
    schedule: {
      duration: "Comprehensive Flagship Track (Full-Time / Part-Time)",
      days: "Monday to Saturday",
      timings: "Morning & Afternoon Batches Available",
      batchSize: "Max 25 Students per Batch for 1-on-1 Focus",
      mode: "Offline Hands-On Workstations (Indore Campus)",
    },
    pricingInfo: {
      feeStructure: "All-Inclusive Master Fee with Flexible Installment Options",
      installmentAvailable: true,
      kitInclusionValue: "Comprehensive multi-domain starter kit & tools provided",
      consultation: "Direct Mentorship by Founder Deepika Patidar",
    },
    trainingBehavior: {
      step1: "Foundational Skin Dermatology, Hair Anatomy & Colorimetry Science",
      step2: "Hands-on Technical Stations across Hair, Skin, Makeup & Nails",
      step3: "Live Client Makeovers, Chemical Texture Services & Bridal Suites",
      step4: "Salon Business Operations, Portfolio Shoot & Convocation Award",
    },
    overview:
      "Our Full Cosmetology Course is the definitive master qualification for anyone looking to build a versatile, top-tier career in the beauty industry. Covering skincare, hair chemistry, advanced styling, HD bridal makeup, and nail artistry, this curriculum transforms passionate learners into full-spectrum beauty directors.",
    modules: [
      "Advanced Skin Anatomy, Physiology & Facial Treatments",
      "Hair Science, Chemical Texturing, Keratin & Nanoplastia",
      "Hair Cutting Architecture & Thermal Styling Mastery",
      "Bridal, HD, Airbrush & Editorial Makeup Artistry",
      "Nail Extensions, Russian Manicure & 3D Nail Art",
      "Basic Clinical Aesthetics & Medi-Facial Protocols",
      "Salon Sanitation, Tool Sterilization & Safety Norms",
      "Client Consultation, Pricing Strategy & Salon Growth",
    ],
    keyHighlights: [
      "All-in-One Multi-Domain Beauty & Cosmetology Education",
      "Extensive Live Model Hands-on Practice Across All Streams",
      "Guidance by Industry Icon Deepika Patidar & Subject Experts",
      "Comprehensive Starter Kit Included with Free Practice Tools",
      "Grand Convocation Ceremony with Stage Felicitation",
    ],
    kitProvided: [
      "Complete Professional Hair Sectioning & Styling Kit",
      "HD Makeup Brush Suite & Base Palette Guide",
      "Skincare Extraction Tools & Facial Bowls",
      "Nail Prep Files, Buffers & Dual-Form Essentials",
      "Official Yashree Institute Master Logbook",
    ],
    practicalTraining: {
      title: "Multi-Station Practical Rotations",
      description:
        "Students rotate through dedicated practical lab stations, mastering real-world salon workflows under expert supervision.",
      features: [
        "Hair Chemical Lab: Keratin, Botoplex & Nanoplastia",
        "Bridal Makeup Studio: HD Airbrush & Contouring",
        "Clinical Skincare Suite: Hydra Facials & Peels",
        "Nail Art Bar: Acrylics, Gel Extensions & Nail Art",
      ],
    },
    galleryHeading: "3-Stage Cosmetology Masterclass",
    gallerySubtitle:
      "Authentic visual workflow: multi-discipline lab workstations, professional vanity formulations, and complete bridal salon suites.",
    galleryImages: [
      {
            "src": "/images/services/cosmet_classroom_stations.jpg",
            "alt": "Multi-Discipline Cosmetology Workstations",
            "title": "Stage 01: Comprehensive Lab & Station Setup",
            "subtitle": "Ergonomic multi-station layout covering skin, hair chemistry, and makeup suites.",
            "tag": "Academy Lab",
            "benefits": [
                  "Individual student workstations",
                  "Sanitized tool organizers",
                  "Direct supervision"
            ],
            "keyTools": [
                  "Styling Chairs",
                  "Laboratory Trolleys"
            ],
            "clientDemand": "Complete Mastery"
      },
      {
            "src": "/images/services/cosmet_tools_vanity.jpg",
            "alt": "Professional Cosmetic Tools & Chemistry Kit",
            "title": "Stage 02: Professional Toolkit & Chemical Formulations",
            "subtitle": "Hands-on mastery over professional product formulations, thermal stylers, and palettes.",
            "tag": "Tool Mastery",
            "benefits": [
                  "Chemical ratio mixing",
                  "Thermal heat protection",
                  "Shade balance"
            ],
            "keyTools": [
                  "Professional Vanity",
                  "Hair & Skin Formulation Kits"
            ],
            "clientDemand": "Industry Standard"
      },
      {
            "src": "/images/services/cosmet_live_demo.jpg",
            "alt": "Live Demonstration & Instructor Masterclass",
            "title": "Stage 03: Live Stage Demonstration & Technique Breakdown",
            "subtitle": "Step-by-step masterclass demonstrations by Deepika Patidar and faculty mentors.",
            "tag": "Live Masterclass",
            "benefits": [
                  "Real-time technique observation",
                  "Interactive Q&A",
                  "Precision guidance"
            ],
            "keyTools": [
                  "Demonstration Stage",
                  "Live Studio Displays"
            ],
            "clientDemand": "Core Pedagogy"
      },
      {
            "src": "/images/services/cosmet_nail_station.jpg",
            "alt": "Nail Artistry & Russian Manicure Station",
            "title": "Stage 04: Integrated Nail Bar & Extension Lab",
            "subtitle": "Hands-on acrylic and gel extension practice with LED light curing and nail art styling.",
            "tag": "Nail Studio",
            "benefits": [
                  "Apex building practice",
                  "Nail extension speed",
                  "Creative nail art"
            ],
            "keyTools": [
                  "48W UV/LED Lamp",
                  "E-File Drills"
            ],
            "clientDemand": "High Salon Demand"
      },
      {
            "src": "/images/services/cosmet_salon_rotations.jpg",
            "alt": "Salon Practical Workstation Rotations",
            "title": "Stage 05: Practical Salon Rotations & Time Management",
            "subtitle": "Simulated high-pace salon environment handling client consultations and simultaneous services.",
            "tag": "Salon Workflow",
            "benefits": [
                  "Commercial speed optimization",
                  "Client communication",
                  "Multi-service workflow"
            ],
            "keyTools": [
                  "Salon Booking System",
                  "Styling Stations"
            ],
            "clientDemand": "Salon Readiness"
      },
      {
            "src": "/images/services/cosmet_bridal_suite.jpg",
            "alt": "Full Bridal & Salon Suite Transformation",
            "title": "Stage 06: Complete Bridal Suite Makeover",
            "subtitle": "End-to-end client makeover combining bridal hair architecture, HD base, and draping.",
            "tag": "Finished Artistry",
            "benefits": [
                  "Full transformation portfolio",
                  "Time-management execution",
                  "Live client consultation"
            ],
            "keyTools": [
                  "Bridal Vanity Suite",
                  "Pro Lighting Array"
            ],
            "clientDemand": "Top Salon Demand"
      }
    ],
    benefits: [
      "Master Every Major Service in High-End Salons & Spas",
      "Eliminate the Need to Take Multiple Disjointed Short Courses",
      "Build a Stunning 360-Degree Professional Client Portfolio",
      "Gain the Confidence & Skills to Launch Your Own Luxury Salon",
      "Network with Industry Leaders at Yashree Institute Events",
    ],
    faqs: [
      {
        q: "Is this course suitable for complete beginners?",
        a: "Yes! We start from absolute fundamentals (skin biology, hair structure, tool handling) and progressively advance to high-end bridal, chemical, and aesthetic artistry.",
      },
      {
        q: "What kind of jobs can I get after completing this course?",
        a: "Graduates work as Senior Salon Stylists, Bridal Makeup Artists, Clinical Aesthetic Assistants, Nail Technicians, Salon Managers, or launch their own independent beauty studios.",
      },
      {
        q: "Do I receive a kit with this course?",
        a: "Yes, an extensive professional practice kit covering key tools across hair, makeup, skin, and nails is included free.",
      },
    ],
    idealFor: "Anyone aiming to become a complete beauty entrepreneur, salon director, or all-round luxury cosmetologist.",
  },

  // 3. HAIR MASTERCLASS (Chemical & Advanced Hair Treatments)
  {
    slug: "hair-masterclass",
    title: "Hair Chemical & Advanced Masterclass",
    shortTitle: "Hair Chemical Masterclass",
    category: "Hair Chemical & Reconstruction",
    durationBadge: "Chemical Specialist Track",
    heroTagline: "Master Keratin, Botoplex, Nanoplastia, Balayage & Bond Reconstruction",
    metaTitle: "Hair Chemical & Masterclass in Indore | Yashree Institute",
    metaDescription: "Master professional hair chemical treatments, keratin, nanoplastia, botoplex, balayage, and precision cutting in Indore at Yashree Institute.",
    posterImage: "/images/hair_masterclass.jpg",
    heroImage: "/images/hair_chemical_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 11)",
    themeAccent: {
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-800",
      borderAccent: "border-blue-300",
      tagBg: "bg-blue-100 text-blue-900",
      gradientGlow: "from-blue-500/15 via-indigo-500/5 to-transparent",
      accentColorHex: "#2563eb",
    },
    schedule: {
      duration: "Intensive Chemical & Science Track",
      days: "Monday to Saturday",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students for 1-on-1 Chemical Mixing Supervision",
      mode: "Offline Practical Hair Chemical Lab (Indore Campus)",
    },
    pricingInfo: {
      feeStructure: "Affordable Specialist Fee with Installment Support",
      installmentAvailable: true,
      kitInclusionValue: "Professional chemical bowls, thermal brushes & application kits provided",
      consultation: "Direct Mentorship by Hair Chemical Educators",
    },
    trainingBehavior: {
      step1: "Trichology, Cortex Disulfide Bond Science & Chemical pH Scales",
      step2: "Color Formulation, Developer Volume Ratios & Foil Placement Angles",
      step3: "Live Model Keratin, Botoplex & Nanoplastia Iron Temperature Calibration",
      step4: "Damage Diagnosis, Plex Bond Repair & Client Maintenance Consultation",
    },
    overview:
      "Modern salons earn up to 70% of their revenue from high-ticket chemical and hair reconstruction treatments. This Masterclass demystifies the chemistry of hair, teaching you the exact science behind Keratin, Nanoplastia, Botoplex, Cysteine, Balayage, Highlights, and Precision Hair Cutting.",
    modules: [
      "Trichology & Disulfide Bond Chemistry",
      "Hair Porosity, Elasticity & Strand Testing",
      "Keratin Treatment Protocols & Smoke-Free Sealing",
      "Nanoplastia & Amino Acid Protein Realignment",
      "Botoplex & Deep Cortex Bond Reconstruction",
      "Global Color, Balayage, Ombre & Foil Highlighting",
      "Developer Volume Mathematics (10, 20, 30, 40 Vol)",
      "Precision Shear Angles & Volume Texturizing",
      "Scalp Treatments & Post-Chemical Hair Spa Protocols",
      "Chemical Service Pricing & Aftercare Consultation",
    ],
    keyHighlights: [
      "100% Practical Hands-on Training on Live Client Models",
      "Mastery Over Top International Hair Chemical Brands",
      "Chemical Ratio & Iron Temperature Precision Training",
      "Small Batch Size for Safe, Supervised Chemical Handling",
      "Stage Certification & Yashree Master Credentials",
    ],
    kitProvided: [
      "Professional Tint Bowls & Angled Chemical Brushes",
      "Heat-Resistant Carbon Tail & Sectioning Combs",
      "Sectioning Crocodile Clips & Protective Gloves",
      "Strand Test Foil Roll & Color Measuring Beakers",
      "Comprehensive Hair Chemical Reference Manual",
    ],
    practicalTraining: {
      title: "Live Chemical Workstation Labs",
      description:
        "Students perform full chemical transformations on live models with varying hair textures—curly, damaged, chemically treated, and virgin hair.",
      features: [
        "Keratin & Nanoplastia Iron Sealing at Exact Temperatures (210°C – 230°C)",
        "Balayage Feathering & Foil Highlighting Placement",
        "Plex Bond Rebuilder Mixing in Bleach Formulations",
        "Precision Graduation & Layer Haircuts",
      ],
    },
    galleryHeading: "3-Stage Hair Chemical Masterclass",
    gallerySubtitle:
      "Authentic visual workflow: colorimetry architecture, chemical melting infusion, and high-volume botanical blowouts.",
    galleryImages: [
      {
            "src": "/images/services/chem_balayage_blonde.jpg",
            "alt": "Balayage Color Science & Foil Placement",
            "title": "Stage 01: Colorimetry & Sectioning Architecture",
            "subtitle": "Precise color wheel calculation, developer volume choice, and angled foil feathering.",
            "tag": "Color Chemistry",
            "benefits": [
                  "Seamless blonde gradient",
                  "Zero scalp bleeding",
                  "Plex bond preservation"
            ],
            "keyTools": [
                  "Tint Bowl & Angled Brushes",
                  "Thermal Foils"
            ],
            "clientDemand": "Premium Salon Service"
      },
      {
            "src": "/images/services/chem_color_mixing.jpg",
            "alt": "Chemical Formulation & Bleach Ratios",
            "title": "Stage 02: Bleach Gram Ratios & Plex Additives",
            "subtitle": "Digital scale weighing of powder bleach, 20/30/40 developer, and protective bond builders.",
            "tag": "Formulation Science",
            "benefits": [
                  "Consistent lightening level",
                  "Zero hair breakage",
                  "Controlled lift"
            ],
            "keyTools": [
                  "Digital Gram Scale",
                  "Silicone Whisks"
            ],
            "clientDemand": "Core Science"
      },
      {
            "src": "/images/services/chem_foil_melt.jpg",
            "alt": "Foil Melting & Nanoplastia Application",
            "title": "Stage 03: Chemical Melting & Nanoplastia Infusion",
            "subtitle": "Formulation saturation, keratin realignment, and temperature-controlled sealing.",
            "tag": "Chemical Processing",
            "benefits": [
                  "Frizz elimination for 6+ months",
                  "Deep cortex reconstruction",
                  "Mirror-shine reflection"
            ],
            "keyTools": [
                  "Digital Titanium Iron",
                  "Chemical Applicator"
            ],
            "clientDemand": "High Ticket Booking"
      },
      {
            "src": "/images/services/chem_bond_repair.jpg",
            "alt": "Cortex Disulfide Bond Reconstruction",
            "title": "Stage 04: Botoplex & Deep Fiber Repair",
            "subtitle": "Intensive amino acid infusion restoring elasticity in over-processed chemical hair.",
            "tag": "Fiber Repair",
            "benefits": [
                  "Elasticity recovery",
                  "Split-end sealing",
                  "Thermal shield"
            ],
            "keyTools": [
                  "Deep Heat Cap",
                  "Infusion Bowl"
            ],
            "clientDemand": "Damage Restoration"
      },
      {
            "src": "/images/services/chem_precision_haircut.jpg",
            "alt": "Precision Haircut & Graduation Angles",
            "title": "Stage 05: Structural Shear Angles & Weight Removal",
            "subtitle": "Combining graduated bobs and texturized layers to complement color placement.",
            "tag": "Precision Cut",
            "benefits": [
                  "Symmetrical perimeter line",
                  "Movement enhancement",
                  "Shape definition"
            ],
            "keyTools": [
                  "Japanese Convex Shears",
                  "Sectioning Clips"
            ],
            "clientDemand": "Essential Skill"
      },
      {
            "src": "/images/services/chem_volume_blowout.jpg",
            "alt": "Voluminous Blowout & Silk Finish",
            "title": "Stage 06: High-Gloss Botanical Blowdry & Finish",
            "subtitle": "Round-brush tension control, cold-shot cuticle locking, and diamond shine serum.",
            "tag": "Finished Masterpiece",
            "benefits": [
                  "Bouncy long-lasting volume",
                  "Glass hair gloss",
                  "Client styling tips"
            ],
            "keyTools": [
                  "Ionic Ceramic Dryer",
                  "Boar Bristle Radial Brush"
            ],
            "clientDemand": "Daily Salon Requirement"
      }
    ],
    benefits: [
      "Earn Premium Income from High-Ticket Hair Chemical Services",
      "Eliminate Fear of Hair Damage with Scientific Strand Testing",
      "Master the Trending Nanoplastia & Botoplex Procedures",
      "Deliver Flawless Balayage & Ombre Color Transitions",
      "Receive Prestigious Yashree Institute Certification",
    ],
    faqs: [
      {
        q: "What is the difference between Keratin and Nanoplastia?",
        a: "Keratin forms a protective coating around the hair shaft, whereas Nanoplastia penetrates into the cortex using organic amino acids without harsh chemicals or fumes. We teach both!",
      },
      {
        q: "Will I practice cutting on real hair or only mannequins?",
        a: "You start with dummy mannequins for angle and tension muscle memory, then advance to supervised haircuts on live models.",
      },
      {
        q: "Are chemical brands provided for practice?",
        a: "Yes, all professional chemical products, developers, and treatments are provided for student practice in our chemical lab.",
      },
    ],
    idealFor: "Hairdressers looking to master lucrative chemical treatments, salon staff wanting high-income skills, and passionate styling beginners.",
  },

  // 4. HAIR STYLING (Bridal & Commercial Hair Styling)
  {
    slug: "hair-styling",
    title: "Bridal & Commercial Hair Styling Course",
    shortTitle: "Hair Styling Artistry",
    category: "Bridal & Editorial Styling",
    durationBadge: "Artistry Track",
    heroTagline: "Master Traditional Indian Bridal Judahs, Hollywood Waves, Braids & Editorial Updos",
    metaTitle: "Hair Styling Course in Indore | Yashree Institute",
    metaDescription: "Master bridal hair styling, Russian updos, Bollywood waves, messy buns & floral ornamentation in Indore at Yashree Institute.",
    posterImage: "/images/services/styling_bridal_juda.jpg",
    heroImage: "/images/hair_styling.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 9)",
    themeAccent: {
      badgeBg: "bg-rose-50",
      badgeText: "text-rose-800",
      borderAccent: "border-rose-300",
      tagBg: "bg-rose-100 text-rose-900",
      gradientGlow: "from-rose-500/15 via-pink-500/5 to-transparent",
      accentColorHex: "#e11d48",
    },
    schedule: {
      duration: "Practical Artistry Track (Flexible Timings)",
      days: "Monday to Saturday",
      timings: "Morning & Afternoon Batches",
      batchSize: "Max 25 Students for Detailed Hands-On Correction",
      mode: "Offline Styling Studio with Dedicated Mannequin Stations",
    },
    pricingInfo: {
      feeStructure: "Affordable Artistry Fee with Easy Installments",
      installmentAvailable: true,
      kitInclusionValue: "Dummy stands, styling combs, pins & padding provided for practice",
      consultation: "Direct Feedback by Celebrity Bridal Stylists",
    },
    trainingBehavior: {
      step1: "Blowdry Ergonomics, Root Volume Teasing & Foundation Padding",
      step2: "Tonging Directions, Wave Setting & Finger Sculpting Techniques",
      step3: "Bridal Judah Structuring, Dupatta Pinning & Floral Gajra Placement",
      step4: "Speed-Styling Workflows for High-Pressure Wedding Seasons",
    },
    overview:
      "Bridal hair styling is an essential, high-earning component of every Indian wedding season. This course provides comprehensive training in 30+ signature hairstyles—from timeless royal bridal judahs and textured Russian buns to glamorous Hollywood waves, mermaid braids, and cocktail updos.",
    modules: [
      "Hair Prep, Texture Building & Root Teasing",
      "Blowdry Architecture & Volume Curling Techniques",
      "25+ Royal Bridal Judah & Bun Variations",
      "Hollywood Waves & S-Curl Sculpture",
      "Russian Textured Updos & Pulling Techniques",
      "Traditional & Contemporary Braiding (Fishtail, 4-Strand, Dutch)",
      "Bridal Dupatta Pinning & Heavy Veil Balancing",
      "Real Floral (Gajra), Tiara & Accessory Placement",
      "Speed-Styling Strategies (15-Minute Client Turnaround)",
      "Bridal Portfolio Photography & Lighting Setup",
    ],
    keyHighlights: [
      "Master 30+ Commercial & Bridal Hairstyles Step-by-Step",
      "Dedicated Pivot Point Mannequin for Every Student",
      "Real-World Dupatta & Veil Anchoring Practical",
      "Small Batch Size for Direct One-on-One Form Correction",
      "Yashree Certificate Awarded at Grand Convocation",
    ],
    kitProvided: [
      "Professional Teasing & Tail Combs Set",
      "Bridal Padding, Doughnuts & Foam Inserts",
      "Bobby Pins, U-Pins & Invisible Hairnet Pack",
      "Thermal Section Clips & Dressing Brush",
      "Official Yashree Hairstyling Portfolio Catalog",
    ],
    practicalTraining: {
      title: "Hands-on Mannequin & Model Studio",
      description:
        "Every technique is demonstrated by our master stylist and replicated by students with immediate individual correction.",
      features: [
        "Thermal Barrel Tonging at 180°C – 210°C with Hold Sprays",
        "Multi-Strand Pull-Through Braiding & Petal Texturizing",
        "Heavy Kundan Tikka & Matha Patti Anchoring",
        "Bridal Veil Draping on Live Models",
      ],
    },
    galleryHeading: "3-Stage Hair Styling Masterclass",
    gallerySubtitle:
      "Authentic step-by-step visual documentation: mannequin foundation, thermal iron sculpting, and grand royal bridal ornamentation.",
    galleryImages: [
      {
            "src": "/images/services/hair_dummy_mannequin.jpg",
            "alt": "Mannequin Sectioning & Foundation Padding",
            "title": "Stage 01: Architectural Sectioning & Base Padding",
            "subtitle": "Crown teasing, donut padding attachment, and anchor bobby pin interlocking.",
            "tag": "Styling Foundation",
            "benefits": [
                  "12-hour hold foundation",
                  "Weight distribution balance",
                  "Symmetrical crown lift"
            ],
            "keyTools": [
                  "Pivot Point Dummy",
                  "Sectioning Clips & Teasing Comb"
            ],
            "clientDemand": "Bridal Essential"
      },
      {
            "src": "/images/services/hair_curling_tongs_iron.jpg",
            "alt": "Thermal Tonging & Hollywood Waves Texture",
            "title": "Stage 02: Thermal Iron Ribbons & Wave Sculpting",
            "subtitle": "Directional barrel wrapping, clip-setting cooling, and smoothing wide-tooth combout.",
            "tag": "Thermal Artistry",
            "benefits": [
                  "Uniform wave consistency",
                  "Thermal damage defense",
                  "Long-lasting bounce"
            ],
            "keyTools": [
                  "28mm Ceramic Curling Tong",
                  "Thermal Hold Spray"
            ],
            "clientDemand": "Celebrity & Red Carpet"
      },
      {
            "src": "/images/services/hair_bridal_juda_bun.jpg",
            "alt": "Textured Bridal Judah & Petal Pulling",
            "title": "Stage 03: Textured Russian Bun & Volume Petals",
            "subtitle": "Airy strand pulling techniques creating high-definition textured bridal buns.",
            "tag": "Russian Updo",
            "benefits": [
                  "Weightless volume appearance",
                  "Modern bridal elegance",
                  "Secure pin locking"
            ],
            "keyTools": [
                  "Invisible Hairnets",
                  "Texture Powder"
            ],
            "clientDemand": "High Bridal Demand"
      },
      {
            "src": "/images/services/hair_pure_01_royal_juda.jpg",
            "alt": "Traditional Royal Indian Bridal Juda",
            "title": "Stage 04: Classic Royal Indian Juda Architecture",
            "subtitle": "Multi-level donut stacking and sleek crown finish for traditional wedding ceremonies.",
            "tag": "Royal Architecture",
            "benefits": [
                  "Dupatta weight support",
                  "Symmetrical rear profile",
                  "Classic heritage look"
            ],
            "keyTools": [
                  "Heavy-Duty U-Pins",
                  "Shine Gloss Spray"
            ],
            "clientDemand": "Wedding Staple"
      },
      {
            "src": "/images/services/hair_pure_02_hollywood_waves.jpg",
            "alt": "Glossy Glamour Hollywood S-Waves",
            "title": "Stage 05: Hollywood Glamour S-Curl Ribbon Wave",
            "subtitle": "Side-parted seamless S-wave flow finished with anti-humidity mirror gloss.",
            "tag": "Hollywood Glam",
            "benefits": [
                  "Red carpet elegance",
                  "Seamless ribbon reflection",
                  "Zero frizz flyaways"
            ],
            "keyTools": [
                  "Dressing Paddle Brush",
                  "Wave Setting Clamps"
            ],
            "clientDemand": "Cocktail & Reception"
      },
      {
            "src": "/images/services/hair_gajra_accessories.jpg",
            "alt": "Grand Royal Bridal Juda & Gajra Ornamentation",
            "title": "Stage 06: Royal Bridal Floral & Matha Patti Anchoring",
            "subtitle": "Fresh floral gajra anchoring, crystal accessory placement, and 360-degree veil support.",
            "tag": "Signature Bridal",
            "benefits": [
                  "Veil & dupatta secure support",
                  "Photogenic 360-degree symmetry",
                  "Traditional elegance"
            ],
            "keyTools": [
                  "U-Pins & Invisible Hair Nets",
                  "Fresh Floral Gajra"
            ],
            "clientDemand": "Highest Wedding Demand"
      }
    ],
    benefits: [
      "Command High Bridal Booking Fees During Wedding Seasons",
      "Work Seamlessly Alongside Top Bridal Makeup Artists",
      "Master the Exact Techniques for High-Hold Weather-Resistant Styles",
      "Build an Editorial-Quality Social Media Styling Portfolio",
      "Receive Certified Recognition from Yashree Institute",
    ],
    faqs: [
      {
        q: "Do I need prior hairdressing experience?",
        a: "No prior experience is necessary. We teach hair preparation, sectioning, and tool mechanics from day one.",
      },
      {
        q: "Do I get to keep the mannequin?",
        a: "Students practice on our professional high-density mannequin heads in the classroom. Mannequins are also available for purchase if you wish to practice at home.",
      },
      {
        q: "Are hot tools (tongs, crimpers, dryers) provided in class?",
        a: "Yes, all thermal irons, crimpers, blowdryers, and styling products are provided at the workstations during class hours.",
      },
    ],
    idealFor: "Bridal makeup artists wanting full hair-makeup packages, freelance hair stylists, and salon professionals.",
  },

  // 5. MAKEUP (Professional & Bridal Makeup Mastery)
  {
    slug: "makeup",
    title: "Professional & Bridal Makeup Course",
    shortTitle: "Professional Makeup Artistry",
    category: "Bridal & HD Makeup",
    durationBadge: "Mastery Track",
    heroTagline: "Learn HD Bridal, Airbrush, Cut-Crease Eyes & Celebrity Red Carpet Makeup",
    metaTitle: "Professional Makeup Course in Indore | Yashree Institute",
    metaDescription: "Master professional bridal makeup, HD base, airbrush, cut crease eyes & red carpet looks with Deepika Patidar at Yashree Institute Indore.",
    posterImage: "/images/makeup_masterclass.jpg",
    heroImage: "/images/makeup_training_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 7)",
    themeAccent: {
      badgeBg: "bg-purple-50",
      badgeText: "text-purple-800",
      borderAccent: "border-purple-300",
      tagBg: "bg-purple-100 text-purple-900",
      gradientGlow: "from-purple-500/15 via-fuchsia-500/5 to-transparent",
      accentColorHex: "#9333ea",
    },
    schedule: {
      duration: "Intensive Professional Track (Full-Time / Part-Time)",
      days: "Monday to Saturday",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students for Personalized Face-Mapping Feedback",
      mode: "Offline Makeup Studio with Individual Lighted Vanities (Indore)",
    },
    pricingInfo: {
      feeStructure: "Transparent Course Fee with Easy Installments",
      installmentAvailable: true,
      kitInclusionValue: "Professional makeup brush suite & color theory palette guide provided",
      consultation: "Personal Mentorship by Master Makeup Artist Deepika Patidar",
    },
    trainingBehavior: {
      step1: "Color Wheel Theory, Skin Undertone Analysis & Flawless Base Prep",
      step2: "Airbrush Machine Handling, Cream Contouring & Baking Symmetry",
      step3: "Intricate Eye Artistry (Smokey, Cut-Crease, Glitter) & 3D Lash Application",
      step4: "Live Bridal Makeovers, Studio Photography & Graduation Award",
    },
    overview:
      "Deepika Patidar, founder of Yashree Institute, brings her award-winning celebrity makeup experience directly into the classroom. This course covers everything from skincare prep and skin undertone correction to HD base blending, Airbrush technology, cut-crease eye artistry, and long-lasting bridal makeup.",
    modules: [
      "Skin Anatomy, Undertone Analysis & Skin Prep Routine",
      "Color Theory, Color Correctors & Concealer Formulations",
      "Flawless HD Base Application & Waterproof Baking",
      "Cream & Powder Facial Contouring, Highlighting & Blushing",
      "Eye Makeup Artistry: Soft Glam, Arabic Smokey, Halo & Half Cut-Crease",
      "Precision Eyebrow Architecture & 3D Faux Mink Lash Application",
      "Airbrush Makeup Mechanics, PSI Control & Silicone Formulations",
      "Indian Traditional Bridal, Western Bridal, Cocktail & Reception Looks",
      "Bridal Saree & Dupatta Draping (Gujarati, South Indian, Bengali)",
      "Vanity Setup, Professional Hygiene, Client Pricing & Social Branding",
    ],
    keyHighlights: [
      "Direct Classroom Mentorship by Icon Deepika Patidar",
      "100% Practical Training on Live Models with Diverse Skin Tones",
      "Hands-On Airbrush Machine & Compressor Practice",
      "Professional HD Bridal Portfolio Shoot at Completion",
      "Prestigious Stage Certification at Annual Convocation",
    ],
    kitProvided: [
      "Professional 32-Piece Makeup Brush Suite in Luxury Roll",
      "Color Correction & Undertone Swatch Guide",
      "Stainless Steel Palette & Spatula for Hygienic Decanting",
      "Practice Eye Chart & Latex Face Templates",
      "Official Yashree Institute Master Makeup Logbook",
    ],
    practicalTraining: {
      title: "Live Bridal Studio Experience",
      description:
        "Students work on live models daily, experimenting with diverse Indian skin tones (Fair, Medium, Dusky, Warm, Cool, Olive) under expert lighting.",
      features: [
        "Airbrush Compressor Operation & Fine Micro-Mist Spraying",
        "Cut-Crease Eyeline Symmetry with Liquid Foil Pigments",
        "Waterproof Base Stress-Testing for Tears & Sweat",
        "Complete Bridal Transformation (Base + Eyes + Hair + Draping)",
      ],
    },
    galleryHeading: "3-Stage Professional Makeup Masterclass",
    gallerySubtitle:
      "Authentic step-by-step visual documentation: vanity ergonomics, HD airbrush sculpting, and red carpet glamour.",
    galleryImages: [
      {
            "src": "/images/services/makeup_brush_vanity.jpg",
            "alt": "Pro Makeup Vanity & Brush Ergonomics",
            "title": "Stage 01: Vanity Ergonomics & Skin Prep Routine",
            "subtitle": "Brush anatomy mastery, primer color-correction, and skin barrier hydration.",
            "tag": "Base Architecture",
            "benefits": [
                  "Custom undertone matching",
                  "Zero creasing prep",
                  "Sanitized tool hygiene"
            ],
            "keyTools": [
                  "32-Piece Synthetic & Goat Hair Brushes",
                  "HD Hydrating Primers"
            ],
            "clientDemand": "Flawless Base Foundation"
      },
      {
            "src": "/images/services/makeup_contouring.jpg",
            "alt": "Facial Bone Structure Contouring",
            "title": "Stage 02: Cream Contouring & Symmetrical Baking",
            "subtitle": "Cheekbone, jawline, and nose sculpting with cream and translucent setting powder.",
            "tag": "Facial Sculpting",
            "benefits": [
                  "Enhanced facial bone structure",
                  "Flash-photography proof",
                  "Smooth blending"
            ],
            "keyTools": [
                  "Angle Contour Brush",
                  "Micro-Fine Baking Powder"
            ],
            "clientDemand": "Essential Skill"
      },
      {
            "src": "/images/services/makeup_airbrush_demo.jpg",
            "alt": "Airbrush HD Foundation & Soft Contouring",
            "title": "Stage 03: HD Airbrush Blending & Micro-Misting",
            "subtitle": "Compressor PSI control, micro-mist silicon base, and bone structure contouring.",
            "tag": "Airbrush Mastery",
            "benefits": [
                  "24-hour sweatproof wear",
                  "Camera-ready 4K finish",
                  "Soft cheekbone definition"
            ],
            "keyTools": [
                  "Dual-Action Airbrush Compressor",
                  "Cream & Powder Sculpt Palettes"
            ],
            "clientDemand": "Bridal & Fashion Portfolio"
      },
      {
            "src": "/images/services/makeup_cut_crease.jpg",
            "alt": "Half Cut-Crease & Glitter Eye Artistry",
            "title": "Stage 04: Advanced Cut-Crease & Arabic Smokey Eyes",
            "subtitle": "Precise concealer cut, gradient transition blending, and foil shimmer pigment placement.",
            "tag": "Eye Artistry",
            "benefits": [
                  "High-definition eye depth",
                  "No fallout glitter adherence",
                  "Wing liner symmetry"
            ],
            "keyTools": [
                  "Flat Concealer Brush 00",
                  "Pressed Glitter Pigments"
            ],
            "clientDemand": "Bridal Glamour"
      },
      {
            "src": "/images/services/makeup_lip_artistry.jpg",
            "alt": "Precision Lip Shading & Velvet Ombre",
            "title": "Stage 05: Lip Contour Architecture & Velvet Stain",
            "subtitle": "Asymmetry correction, cupid's bow sharpening, and long-wear non-transfer ombre lips.",
            "tag": "Lip Architecture",
            "benefits": [
                  "Plumper lip appearance",
                  "16-hour smudge-proof wear",
                  "Velvet matte texture"
            ],
            "keyTools": [
                  "Precision Lip Brush",
                  "Liquid Matte Stains"
            ],
            "clientDemand": "High Demand"
      },
      {
            "src": "/images/services/makeup_glam_redcarpet.jpg",
            "alt": "Luxury Red Carpet & Bridal Glam Finish",
            "title": "Stage 06: Red Carpet Glamour & Final HD Reveal",
            "subtitle": "Full bridal transformation shoot under professional studio lighting array.",
            "tag": "Red Carpet Reveal",
            "benefits": [
                  "Ultra HD bridal portrait look",
                  "Non-transfer longevity",
                  "Studio photography tested"
            ],
            "keyTools": [
                  "Studio Ring Light",
                  "3D Mink Lashes",
                  "Setting Mist"
            ],
            "clientDemand": "Highest Earning Service"
      }
    ],
    benefits: [
      "Launch a Thriving Career as an Independent Bridal Makeup Artist",
      "Charge Premium Bridal Packages (₹15,000 to ₹50,000+ per Bride)",
      "Master Both Traditional Brush & Modern Airbrush Techniques",
      "Build a Portfolio That Attracts High-Paying Wedding Inquiries",
      "Receive Yashree Institute's Industry-Recognized Certification",
    ],
    faqs: [
      {
        q: "Do I need to bring my own makeup products to class?",
        a: "During classroom demonstrations and initial practice, professional products and palettes are provided in the academy. You will receive guidance on building your own custom kit.",
      },
      {
        q: "Will Deepika Patidar personally teach in this course?",
        a: "Yes! Deepika Patidar conducts signature masterclasses, personal demonstrations, and individual student assessments.",
      },
      {
        q: "Does this course include airbrush training?",
        a: "Yes, complete airbrush equipment operation, maintenance, and formulation techniques are thoroughly covered.",
      },
    ],
    idealFor: "Aspiring bridal makeup artists, freelance beauty consultants, and salon owners wanting to dominate the bridal season.",
  },

  // 6. NAIL EXTENSIONS (Nail Extensions & Luxury Nail Art)
  {
    slug: "nail-extension",
    title: "Nail Extensions & Nail Art Course",
    shortTitle: "Nail Extension & Art",
    category: "Nail Artistry & Extensions",
    durationBadge: "Studio Specialist Track",
    heroTagline: "Master Acrylics, Gel Extensions, Polygel, Russian Manicure & 3D Luxury Nail Art",
    metaTitle: "Nail Extensions & Nail Art Course in Indore | Yashree Institute",
    metaDescription: "Master acrylic nail extensions, UV gel extensions, polygel, Russian manicures & 3D chrome nail art in Indore at Yashree Institute.",
    posterImage: "/images/nail_art.jpg",
    heroImage: "/images/nail_training_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 12)",
    themeAccent: {
      badgeBg: "bg-pink-50",
      badgeText: "text-pink-800",
      borderAccent: "border-pink-300",
      tagBg: "bg-pink-100 text-pink-900",
      gradientGlow: "from-pink-500/15 via-rose-500/5 to-transparent",
      accentColorHex: "#ec4899",
    },
    schedule: {
      duration: "Intensive Studio Specialist Track",
      days: "Monday to Saturday",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students with Individual E-File & Lamp Workstations",
      mode: "Offline Nail Art Studio (Indore Campus)",
    },
    pricingInfo: {
      feeStructure: "Affordable Specialist Fee with Installment Facility",
      installmentAvailable: true,
      kitInclusionValue: "Complete nail brush set, practice tips & color wheel provided",
      consultation: "Direct Mentorship by Certified Nail Master Trainers",
    },
    trainingBehavior: {
      step1: "Natural Nail Anatomy, Hygiene & Russian E-File Cuticle Preparation",
      step2: "Tip Attachment, Form Sizing & Apex Structural Building (Acrylic & Gel)",
      step3: "3D Encapsulated Flowers, Chrome Pigments, French Ombre & Cat-Eye Art",
      step4: "Safe Drill Removal, Studio Speed-Optimization & Convocation Felicitation",
    },
    overview:
      "Nail artistry is the fastest-growing segment in the Indian salon industry with high recurring client revenue. This comprehensive program trains you in all global extension systems—Acrylics, Soft Gel, Hard Gel, and Polygel—combined with advanced salon art such as French baby boomers, chrome mirrors, cat-eye velvet, and 3D floral encapsulation.",
    modules: [
      "Natural Nail Anatomy, Diseases & Contraindications",
      "Russian Dry Manicure & E-File Cuticle Prep",
      "Tip Placement, Sizing & Form Sculpting Architecture",
      "Acrylic Liquid & Monomer Ratio Control",
      "UV/LED Hard Gel & Soft Gel Overlay Techniques",
      "Polygel Dual Form Sculpting & Slip Solution Handling",
      "Apex Placement & Structural Strength Architecture",
      "French Ombre, Baby Boomer & Negative Space Art",
      "3D Floral Encapsulation, Swarovski Crystals & Chrome Dust",
      "Safe E-File Removal, Refills & Studio Business Setup",
    ],
    keyHighlights: [
      "100% Practical Training on Both Practice Hands & Live Models",
      "Dedicated E-File Drill & 48W UV/LED Lamp for Each Student",
      "Zero Air-Bubble & Zero Lifting Apex Construction Training",
      "Small Batch Size for Intricate Hand-Guidance",
      "Yashree Certified Nail Master Credentials Awarded",
    ],
    kitProvided: [
      "Professional Kolinsky Acrylic & Gel Brushes",
      "Fine Line Detailer Nail Art Brushes (000, 00, 1)",
      "Practice Finger Stand & Sized Nail Tip Assortment",
      "Nail Buffer, 100/180 Grit Files & Dust Brush",
      "Official Yashree Institute Nail Art Style Guide",
    ],
    practicalTraining: {
      title: "Hands-on Nail Workstations",
      description:
        "Students build live extension sets from prep to polish, mastering precise filing angles and smooth cuticle blending.",
      features: [
        "E-File Cuticle Diamond Flame Bit Operation (5,000 – 15,000 RPM)",
        "Single-Bead Acrylic Application & Pinching C-Curves",
        "Polygel Dual-Form Alignment Without Cuticle Flooding",
        "Magnetic Cat-Eye Velvet & Glass Chrome Rubbing",
      ],
    },
    galleryHeading: "3-Stage Nail Extension & Art Masterclass",
    gallerySubtitle:
      "Authentic step-by-step visual documentation: Russian apex prep, polygel hybrid sculpting, and 3D floral encapsulation.",
    galleryImages: [
      {
            "src": "/images/services/nail_05_russian_apex.jpg",
            "alt": "Russian Manicure & Apex Arch Sculpting",
            "title": "Stage 01: Russian Dry Manicure & Apex Building",
            "subtitle": "Diamond flame bit cuticle cleanup, tip sizing, and structural stress-point apex arch.",
            "tag": "Structural Prep",
            "benefits": [
                  "4-week lifting prevention",
                  "Pristine cuticle line",
                  "Optimum nail strength"
            ],
            "keyTools": [
                  "35,000 RPM E-File",
                  "Diamond Flame Bits",
                  "Acid-Free Primer"
            ],
            "clientDemand": "Salon Quality Foundation"
      },
      {
            "src": "/images/services/nail_06_rose_polygel.jpg",
            "alt": "Polygel Dual Form Sculpting & Curing",
            "title": "Stage 02: Polygel Hybrid Application & UV Curing",
            "subtitle": "Slip solution smoothing, dual form pinch curve, and 48W LED light polymerisation.",
            "tag": "Sculpting Mastery",
            "benefits": [
                  "Lightweight natural feel",
                  "Zero monomer fumes",
                  "Crystal bubble-free clarity"
            ],
            "keyTools": [
                  "Rose Polygel Tube",
                  "Dual Forms",
                  "48W UV/LED Lamp"
            ],
            "clientDemand": "Top Trending Technique"
      },
      {
            "src": "/images/services/nail_01_gold_chrome.jpg",
            "alt": "Mirror Gold Chrome & Holo Pigments",
            "title": "Stage 03: Liquid Mirror Chrome & Metallic Rubbing",
            "subtitle": "Silicone applicator buffing for ultra-reflective gold, silver, and holo mirror nails.",
            "tag": "Chrome Art",
            "benefits": [
                  "Streak-free mirror finish",
                  "Non-chipping top seal",
                  "Glamour shine"
            ],
            "keyTools": [
                  "Chrome Pigment Buffers",
                  "No-Wipe Top Coat"
            ],
            "clientDemand": "Popular Studio Request"
      },
      {
            "src": "/images/services/nail_03_ruby_sculpted.jpg",
            "alt": "Sculpted Acrylics & C-Curve Pinching",
            "title": "Stage 04: Pure Acrylic Monomer Bead Placement",
            "subtitle": "Perfect liquid-to-powder ratio control and deep C-curve pinching for coffin and stiletto shapes.",
            "tag": "Acrylic Artistry",
            "benefits": [
                  "Maximum structural durability",
                  "Razor-sharp sidewalls",
                  "High-stress resistance"
            ],
            "keyTools": [
                  "Kolinsky Size 10 Brush",
                  "Monomer Dappen Dish"
            ],
            "clientDemand": "Classic Studio Extension"
      },
      {
            "src": "/images/services/nail_07_emerald_cat_eye.jpg",
            "alt": "Cat-Eye Velvet Magnetic Shimmer",
            "title": "Stage 05: 9D Magnetic Cat-Eye Velvet Swirls",
            "subtitle": "Neodymium magnet manipulation creating deep multidimensional gemstone velvet reflections.",
            "tag": "Cat-Eye Velvet",
            "benefits": [
                  "Mesmerizing optical depth",
                  "Smooth magnetic lines",
                  "Luxury finish"
            ],
            "keyTools": [
                  "Strong Neodymium Magnet",
                  "9D Cat-Eye Polish"
            ],
            "clientDemand": "High Client Demand"
      },
      {
            "src": "/images/services/nail_19_3d_encapsulated_flowers.jpg",
            "alt": "3D Encapsulated Florals & Velvet Top Gloss",
            "title": "Stage 06: 3D Encapsulated Flowers & Diamond Finish",
            "subtitle": "Dried flower embedding, gold foil marbling, and scratch-resistant diamond top gloss.",
            "tag": "Haute Nail Art",
            "benefits": [
                  "Intricate 3D depth",
                  "Non-yellowing diamond gloss",
                  "Luxury bridal nail art portfolio"
            ],
            "keyTools": [
                  "Fine Detailer 000 Brush",
                  "Real Dried Florals",
                  "No-Wipe Diamond Top Coat"
            ],
            "clientDemand": "Premium Nail Studio Menu"
      }
    ],
    benefits: [
      "Open Your Own High-Margin Nail Bar or Freelance Nail Studio",
      "Earn ₹1,500 – ₹4,500 per Client Set in Under 90 Minutes",
      "Master Russian E-File Techniques That Ensure 4+ Week Retention",
      "Create Captivating Instagram & Pinterest-Ready Nail Art Portfolios",
      "Receive Certified Recognition from Yashree Institute",
    ],
    faqs: [
      {
        q: "Are acrylic fumes harmful during practice?",
        a: "Our academy is equipped with high-efficiency air filtration systems and we teach low-odor monomer techniques alongside odorless Polygel systems.",
      },
      {
        q: "Will I learn how to use an electronic nail drill (E-File)?",
        a: "Yes! Complete E-File safety, bit selection (flame, safety barrel, ceramic), RPM speeds, and cuticle work are thoroughly taught.",
      },
      {
        q: "Do nails damage natural nail plates?",
        a: "When applied and removed correctly using our scientific protocols, natural nails remain completely healthy without thinning or tearing.",
      },
    ],
    idealFor: "Beauty entrepreneurs wanting to start a nail bar, salon stylists expanding their services, and creative nail enthusiasts.",
  },

  // 7. PMU & MICROBLADING (Semi-Permanent Makeup)
  {
    slug: "pmu",
    title: "Semi-Permanent Makeup (PMU) & Microblading",
    shortTitle: "PMU & Microblading",
    category: "Permanent Makeup & Aesthetics",
    durationBadge: "Specialist Certification",
    heroTagline: "Master Microblading, Ombre Powder Brows, Lip Blush & Lash Enhancements",
    metaTitle: "PMU & Microblading Course in Indore | Yashree Institute",
    metaDescription: "Master microblading, ombre powder brows, lip blushing & eyeliner PMU with sterile needle calibration in Indore at Yashree Institute.",
    posterImage: "/images/pmu_aesthetics.jpg",
    heroImage: "/images/pmu_procedure_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 13)",
    themeAccent: {
      badgeBg: "bg-teal-50",
      badgeText: "text-teal-800",
      borderAccent: "border-teal-300",
      tagBg: "bg-teal-100 text-teal-900",
      gradientGlow: "from-teal-500/15 via-emerald-500/5 to-transparent",
      accentColorHex: "#0d9488",
    },
    schedule: {
      duration: "Intensive Clinical Specialist Track",
      days: "Monday to Saturday",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Strictly Limited to 25 Students for High-Precision Focus",
      mode: "Offline Sterile Clinical Laboratory (Indore Campus)",
    },
    pricingInfo: {
      feeStructure: "Specialist Investment with Easy Installment Options",
      installmentAvailable: true,
      kitInclusionValue: "Latex practice skins, golden ratio calipers & pigment guides provided",
      consultation: "Direct Mentorship by PMU Aesthetic Specialists",
    },
    trainingBehavior: {
      step1: "Skin Histology, Golden Ratio Facial Caliper Mapping & Symmetry Law",
      step2: "Synthetic 3D Latex Muscle-Memory Stroke Training & Needle Depth Calibration",
      step3: "Organic Mineral Pigment Colorimetry, Undertone Modifiers & Numbing Protocols",
      step4: "Supervised Live Client Procedures, Healed Results Care & Certification",
    },
    overview:
      "Semi-Permanent Makeup (PMU) represents the apex of high-ticket aesthetic beauty services. This specialized course trains you in manual Microblading hair strokes, digital Ombre Powder Brows, Lip Neutralization, Watercolor Lip Blush, and Lash Enhancements under strict clinical hygiene protocols.",
    modules: [
      "Skin Histology, Epidermis Depth & Healing Biology",
      "Golden Ratio Facial Architecture & Caliper Eyebrow Mapping",
      "Manual Microblading: U-Blade Stroke Patterns & Hair Flow Direction",
      "Digital PMU Rotary Machine Handling & Voltage Calibration",
      "Ombre Powder Brows & Pixel Shading Techniques",
      "Lip Neutralization for Dark Lips & Watercolor Lip Blush",
      "Pigment Colorimetry, Warm/Cool Undertone Modifiers & Dilution",
      "Topical Anesthetics, Pain Management & Safety Protocols",
      "Cross-Contamination Prevention & Bloodborne Pathogen Standards",
      "Client Consent Forms, Aftercare Protocols & PMU Business Pricing",
    ],
    keyHighlights: [
      "Extensive Training on 3D Synthetic Latex Before Live Models",
      "Mastery Over Both Manual Microblading & Digital Rotary Machines",
      "Clinical Disinfection & Needle Cartridge Safety Protocols",
      "Small Batch Size for High-Precision Trainer Supervision",
      "Prestigious Stage Certification at Annual Convocation",
    ],
    kitProvided: [
      "Golden Ratio Brow Mapping Caliper & String Pack",
      "Assorted Synthetic 3D Latex Face & Eyebrow Practice Sheets",
      "Manual Microblade Handpiece & Sterile Disposable Blades",
      "Pigment Color Wheel & Undertone Modifier Guide",
      "Official Yashree Institute Clinical PMU Manual",
    ],
    practicalTraining: {
      title: "Sterile PMU Clinical Workstations",
      description:
        "Students develop precise muscle memory on latex sheets before advancing to supervised live model treatments with full numbing protocols.",
      features: [
        "0.5mm Epidermis Depth Feather Stroke Execution",
        "Digital Rotary Machine Voltage Calibration (4.5V – 7.0V)",
        "Lip Color Neutralization Using Orange & Warm Modifiers",
        "Sterile Barrier Film Wrapping & Autoclave Disposal",
      ],
    },
    galleryHeading: "3-Stage PMU & Microblading Masterclass",
    gallerySubtitle:
      "Authentic step-by-step visual documentation: latex symmetry mapping, organic pigment calibration, and hyper-realistic healed results.",
    galleryImages: [
      {
            "src": "/images/services/pmu_latex_practice.jpg",
            "alt": "Latex Skin Mapping & Golden Ratio Symmetry",
            "title": "Stage 01: Golden Ratio Eyebrow Mapping & Latex Practice",
            "subtitle": "Caliper string mapping, facial symmetry calculations, and depth control on synthetic latex.",
            "tag": "Symmetry Mapping",
            "benefits": [
                  "Mathematical facial balance",
                  "Correct 0.5mm epidermis depth",
                  "Muscle relaxation techniques"
            ],
            "keyTools": [
                  "Golden Ratio Caliper",
                  "Mapping String",
                  "3D Latex Face Form"
            ],
            "clientDemand": "PMU Precision Requirement"
      },
      {
            "src": "/images/services/pmu_pigment_mixing.jpg",
            "alt": "Organic Pigment Mixing & Machine Stroke Technique",
            "title": "Stage 02: Pigment Colorimetry & Rotary Calibration",
            "subtitle": "Cool/warm undertone balancing, modifier drops, and single-needle rotary stroke vibration.",
            "tag": "Pigment Chemistry",
            "benefits": [
                  "Zero gray/blue discoloration over time",
                  "Smooth pigment retention",
                  "Painless numbing protocol"
            ],
            "keyTools": [
                  "Wireless Rotary PMU Pen",
                  "Swiss Organic Mineral Pigments"
            ],
            "clientDemand": "Specialist High-Fee Art"
      },
      {
            "src": "/images/services/pmu_brow_mapping.jpg",
            "alt": "Live Client Facial Contour Mapping",
            "title": "Stage 03: Live Brow Architecture & Muscle Analysis",
            "subtitle": "Custom brow shaping tailored to client brow bone structure, age, and natural expression.",
            "tag": "Live Architecture",
            "benefits": [
                  "Personalized aesthetic alignment",
                  "Client pre-approval symmetry",
                  "Painless numbing"
            ],
            "keyTools": [
                  "Mapping Pencil",
                  "Sterile Ruler"
            ],
            "clientDemand": "Client Satisfaction"
      },
      {
            "src": "/images/services/pmu_lash_volume.jpg",
            "alt": "Semi-Permanent Lash Line Enhancement",
            "title": "Stage 04: Lash Line Tightlining & Dark Definition",
            "subtitle": "Micro-pigmentation directly into the eyelash root line for natural eye enlargement.",
            "tag": "Lash Tightline",
            "benefits": [
                  "Natural lash enhancement",
                  "Waterproof permanent definition",
                  "Zero daily eyeliner need"
            ],
            "keyTools": [
                  "Nano Single-Needle Cartridge",
                  "Deep Black Mineral Pigment"
            ],
            "clientDemand": "High Demand"
      },
      {
            "src": "/images/services/pmu_lip_watercolor_tint.jpg",
            "alt": "Lip Neutralization & Watercolor Blush",
            "title": "Stage 05: Lip Melanin Neutralization & Watercolor Blush",
            "subtitle": "Warm orange modifier passes neutralizing dark tones followed by rose blush infusion.",
            "tag": "Lip Blush",
            "benefits": [
                  "Even warm pink undertone",
                  "Crisp border symmetry",
                  "Long 2-3 year durability"
            ],
            "keyTools": [
                  "1RL/3RL Membrane Cartridges",
                  "Topical Numbing Gel"
            ],
            "clientDemand": "High-Ticket Specialty"
      },
      {
            "src": "/images/services/pmu_microblading_strokes.jpg",
            "alt": "Hyper-Realistic Hair Strokes & Powder Blend",
            "title": "Stage 06: Hyper-Realistic Microblading & Ombre Finish",
            "subtitle": "Feathered hair-stroke microblading combined with soft ombre powder shading.",
            "tag": "Healed Masterpiece",
            "benefits": [
                  "Natural undetectable eyebrow density",
                  "18-24 months retention",
                  "Minimal redness client release"
            ],
            "keyTools": [
                  "U-Blade 18-Pin Microblade",
                  "Soothing Calming Balm"
            ],
            "clientDemand": "Top Luxury PMU Earning"
      }
    ],
    benefits: [
      "Charge High Specialist Fees (₹8,000 to ₹25,000 per PMU Procedure)",
      "Offer Highly Sought-After Semi-Permanent Solutions to Clients",
      "Master Safe Needle Depth Without Causing Scarring or Discoloration",
      "Build an Elite Clinical Aesthetic Portfolio",
      "Receive Certified PMU Specialist Recognition from Yashree Institute",
    ],
    faqs: [
      {
        q: "Is PMU tattooing painful for the client?",
        a: "We teach advanced multi-phase topical numbing protocols (pre-procedure cream and secondary gel) that make the procedure virtually pain-free for clients.",
      },
      {
        q: "How long do PMU results last?",
        a: "Microblading and Ombre Powder Brows typically last 18–24 months, while Lip Blush lasts 2–3 years depending on client skin type and aftercare.",
      },
      {
        q: "How many live models will I practice on?",
        a: "After demonstrating 100% precision on synthetic 3D latex, students perform supervised live model procedures.",
      },
    ],
    idealFor: "Aesthetic practitioners, makeup artists wanting permanent services, and aspiring cosmetic micropigmentation specialists.",
  },

  // 8. SKINCARE & SPA (Clinical Skincare, D-Tan & Body Spa)
  {
    slug: "skincare",
    title: "Clinical Skincare & Body Spa Course",
    shortTitle: "Skincare & Spa Therapy",
    category: "Skin Science & Spa Therapy",
    durationBadge: "Therapy Track",
    heroTagline: "Master Skin Science, Anti-Acne, Anti-Pigmentation, D-Tan, Clean-ups & Body Spa",
    metaTitle: "Skincare & Spa Course in Indore | Yashree Institute",
    metaDescription: "Master professional skincare, facial acupressure, chemical peels, body polishing & spa treatments in Indore at Yashree Institute.",
    posterImage: "/images/skin_care_course.jpg",
    heroImage: "/images/skincare_spa_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 14)",
    themeAccent: {
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-800",
      borderAccent: "border-amber-300",
      tagBg: "bg-amber-100 text-amber-900",
      gradientGlow: "from-amber-500/15 via-orange-500/5 to-transparent",
      accentColorHex: "#d97706",
    },
    schedule: {
      duration: "Practical Therapy Track (Flexible Timings)",
      days: "Monday to Saturday",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students for Dedicated Treatment Bed Practice",
      mode: "Offline Clinical Skincare & Spa Suite (Indore Campus)",
    },
    pricingInfo: {
      feeStructure: "Affordable Therapy Course Fee with Installments",
      installmentAvailable: true,
      kitInclusionValue: "Facial packs, essential oils, extraction tools & protocol manual included",
      consultation: "Direct Mentorship by Certified Skincare Instructors",
    },
    trainingBehavior: {
      step1: "Dermatological Physiology, Skin Barrier Function & Sebaceous Chemistry",
      step2: "Ozone Steam, Pore Extraction & Botanical Active Formulation",
      step3: "Facial Acupressure Points, Lymphatic Drainage & Marma Point Therapy",
      step4: "Full Body Exfoliation Polishing, Body Wrap Protocols & Certification",
    },
    overview:
      "A healthy, glowing complexion is the foundation of beauty. This course blends dermatological skin therapy with luxury spa relaxation. You will learn to diagnose skin conditions (acne, hyperpigmentation, melasma, dehydration) and perform clinical facials, D-tan therapies, chemical peels, body polishing, and Ayurvedic spa rituals.",
    modules: [
      "Skin Histology, Epidermal Layers & Acid Mantle pH",
      "Skin Diagnostics: Oily, Dry, Combination, Sensitive & Acne-Prone",
      "Clinical Clean-Ups & Comedone Extraction Protocols",
      "Anti-Acne, Anti-Aging & Hyper-Pigmentation Medi-Facials",
      "D-Tan Protocols, Enzyme Masks & Botanical Infusions",
      "Facial Acupressure, Kansa Wand & Lymphatic Drainage Massage",
      "Ozone Steaming, High Frequency & Ultrasonic Exfoliation",
      "Full Body Polishing, Scrubs & Hydrating Thermal Wraps",
      "Ayurvedic Head Massage & Shoulder Stress Relief",
      "Spa Hygiene, Towel Sanitation & Client Package Pricing",
    ],
    keyHighlights: [
      "100% Practical Training on Clinical Facial Beds",
      "Mastery Over Active Cosmetic Ingredients (Niacinamide, Retinol, AHA/BHA)",
      "Holistic Acupressure & Ayurvedic Marma Point Massage Techniques",
      "Small Batch Size for Individual Ergonomic Posture Guidance",
      "Yashree Institute Stage Felicitation at Annual Convocation",
    ],
    kitProvided: [
      "Professional Stainless Steel Comedone Extraction Tool Set",
      "Facial Fan Brushes & Measuring Bowls",
      "Botanical Scrub & Mask Starter Assortment",
      "Kansa Wand Acupressure Tool",
      "Official Yashree Clinical Skincare Protocol Guide",
    ],
    practicalTraining: {
      title: "Hands-on Clinical Spa Suites",
      description:
        "Students practice in fully equipped spa cabins with hydraulic beds, ozone steamers, and organic formulations.",
      features: [
        "Acupressure Facial Strokes for Natural Lifting & Lymphatic Flow",
        "High-Frequency Argon/Neon Wand Sterilization for Acne",
        "Full Body Scrub Application & Warm Towel Removal",
        "Custom Botanical Mask Formulation for Instant Brightening",
      ],
    },
    galleryHeading: "3-Stage Skincare & Spa Masterclass",
    gallerySubtitle:
      "Authentic step-by-step visual documentation: botanical ozone cleanse, ayurvedic acupressure, and full body silk polishing.",
    galleryImages: [
      {
            "src": "/images/services/spa_botanical_mask.jpg",
            "alt": "Botanical Cleanse & Ozone Steam Detox",
            "title": "Stage 01: Ozone Steam & Herbal Botanical Cleanse",
            "subtitle": "Warm towel pore opening, botanical peel formulation, and vacuum blackhead extraction.",
            "tag": "Deep Cleansing",
            "benefits": [
                  "Cellular debris clearance",
                  "Sebum regulation",
                  "Pore size refinement"
            ],
            "keyTools": [
                  "Digital Ozone Facial Steamer",
                  "Botanical Fruit Enzyme Mask"
            ],
            "clientDemand": "Core Spa Treatment"
      },
      {
            "src": "/images/services/spa_ozone_steam_towel.jpg",
            "alt": "Ozone Steaming & Warm Towel Aromatherapy",
            "title": "Stage 02: Thermal Towel Compress & Pore Dilatation",
            "subtitle": "Lavender infused warm compresses softening keratinized plugs for gentle extractions.",
            "tag": "Aromatherapy Prep",
            "benefits": [
                  "Relaxation induction",
                  "Pore softening",
                  "Deep blood circulation"
            ],
            "keyTools": [
                  "Towel Warmer Cabinet",
                  "Essential Herbal Oils"
            ],
            "clientDemand": "Luxury Standard"
      },
      {
            "src": "/images/services/spa_facial_acupressure.jpg",
            "alt": "Facial Marma Points & Kansa Wand",
            "title": "Stage 03: Kansa Wand Acupressure & Lymphatic Flow",
            "subtitle": "Bronze alloy Kansa wand massage balancing skin pH and draining accumulated toxins.",
            "tag": "Ayurvedic Therapy",
            "benefits": [
                  "Natural facelift stimulation",
                  "Toxin drainage",
                  "Cooling skin energy"
            ],
            "keyTools": [
                  "Bronze Kansa Wand",
                  "Cold-Pressed Kumkumadi Tailam"
            ],
            "clientDemand": "Holistic Wellness"
      },
      {
            "src": "/images/services/spa_ayurvedic_head_massage.jpg",
            "alt": "Ayurvedic Marma Point Head & Neck Massage",
            "title": "Stage 04: Cranial Marma Points & Stress Relief",
            "subtitle": "Warm herbal oil infusion, cranial pressure point stimulation, and tension release.",
            "tag": "Therapeutic Massage",
            "benefits": [
                  "Stress & tension relief",
                  "Microcirculation boost",
                  "Hair follicle nourishment"
            ],
            "keyTools": [
                  "Warm Oil Dispenser",
                  "Organic Herbal Blends"
            ],
            "clientDemand": "High Client Satisfaction"
      },
      {
            "src": "/images/services/spa_foot_pedicure_therapy.jpg",
            "alt": "Spa Pedicure Therapy & Reflexology",
            "title": "Stage 05: Reflexology Foot Spa & Callus Removal",
            "subtitle": "Sea salt foot bath, dead skin softening, and reflex pressure point therapy.",
            "tag": "Foot Reflexology",
            "benefits": [
                  "Tired feet revitalization",
                  "Deep skin smoothing",
                  "Total body relaxation"
            ],
            "keyTools": [
                  "Hydromassage Foot Tub",
                  "Pumice Scrub Bar"
            ],
            "clientDemand": "Popular Add-On"
      },
      {
            "src": "/images/services/spa_body_polishing_scrub.jpg",
            "alt": "Full Body Polishing & Silk Glow Nourishment",
            "title": "Stage 06: Full Body Polishing & Silk Glow Reveal",
            "subtitle": "Walnut shell exfoliation, cocoa butter wrap, and luminous gold silk glow finishing.",
            "tag": "Bridal Glow Finish",
            "benefits": [
                  "Full body tan removal",
                  "Velvet-soft skin texture",
                  "Glowing bridal radiance"
            ],
            "keyTools": [
                  "Micro-Exfoliating Scrub",
                  "Hydrating Cocoa Wrap"
            ],
            "clientDemand": "High-Margin Bridal Package"
      }
    ],
    benefits: [
      "Master High-Demand Facial & Body Spa Treatments for Recurring Clients",
      "Prescribe Customized Skincare Routines for Different Skin Concerns",
      "Deliver Luxury Relaxation Combined with Clinical Efficacy",
      "Build High-Ticket Bridal Spa & Glow Packages",
      "Receive Certified Skincare Credentials from Yashree Institute",
    ],
    faqs: [
      {
        q: "Will I learn how to treat active acne and pigmentation?",
        a: "Yes, our clinical module covers active acne protocols, comedone extractions, salicylic/glycolic applications, and post-inflammatory pigmentation reduction.",
      },
      {
        q: "Does this course cover full body treatments?",
        a: "Yes, full body polishing, exfoliation scrubs, hydrating wraps, and back facials are fully included in the curriculum.",
      },
      {
        q: "Is prior knowledge of biology required?",
        a: "No, we teach all necessary skin physiology, epidermal layers, and ingredient chemistry in easy, practical terms.",
      },
    ],
    idealFor: "Spa therapists, aesthetic clinic assistants, salon estheticians, and wellness entrepreneurs.",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

export function getAllServices(): ServiceDetail[] {
  return SERVICES_DATA;
}
