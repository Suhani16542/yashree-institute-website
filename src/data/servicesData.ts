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
  overview: string;
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

  modules: string[];
  keyHighlights: string[];
  kitProvided: string[];
  practicalTraining: {
    title: string;
    description: string;
    features: string[];
  };

  // Dedicated Visual Gallery (100% pure service-specific images)
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
    durationBadge: "Industry-Focused Flagship",
    heroTagline: "Master the Art of Industry-Focused Non-Doctor Aesthetic & PMU Care",
    metaTitle: "Non-Doctor Aesthetic Course in Indore | Yashree Institute",
    metaDescription: "Master non-doctor clinical aesthetics, medi-facials, chemical peels, microdermabrasion & BB glow with hands-on device training in Indore at Yashree Institute.",
    posterImage: "/images/non_doctor_aesthetic.jpg",
    heroImage: "/images/services/aesthet_hydra_suction.jpg",
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
      days: "Monday to Saturday (Flexible Options)",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Strictly Capped at 25 Students for 1-on-1 Device Practice",
      mode: "Offline Classroom (Indore Campus) + Online Theory Access",
    },
    pricingInfo: {
      feeStructure: "Affordable Course Fee with Instant WhatsApp Inquiries",
      installmentAvailable: true,
      kitInclusionValue: "Sterilization kit, medical goggles & machine protocol manual provided free",
      consultation: "Lifetime Free Technical Consultation with Deepika Patidar",
    },
    trainingBehavior: {
      step1: "Theoretical Dermatology Foundation, Skin pH Science & Fitzpatrick Analysis",
      step2: "Sterile Device Operation, Needle Depth Calibration & Safety Protocols",
      step3: "Supervised Hands-on Practice on Live Models for Hydra Facials, Peels & BB Glow",
      step4: "Clinic Setup Incubation, Treatment Pricing Strategy & Convocation Certification",
    },
    overview:
      "Our Non-Doctor Aesthetic Course is formulated in strict accordance with international dermatological safety protocols. This flagship curriculum trains you to diagnose complex skin conditions, operate clinical aesthetic devices safely, and perform high-ticket non-invasive aesthetic procedures.",
    modules: [
      "Foundation of Aesthetics & Skin Science",
      "Skin Analysis & Fitzpatrick Profiling",
      "Professional Medi-Facials & Clinical Protocols",
      "Chemical Peels & Exfoliation Depth Control",
      "Microdermabrasion & Skin Resurfacing",
      "BB Glow & Nano-Needling Treatments",
      "Laser & Light Therapy Fundamentals",
      "Permanent Makeup (PMU) Foundations",
      "Infection Control, Sterilization & Safety Protocols",
      "Salon & Aesthetic Business Management",
    ],
    keyHighlights: [
      "Hands-on Aesthetic Device Training on Live Models",
      "International Standard Curriculum with Safety Protocols",
      "Digital & Practical Dual Accredited Certification",
      "Career Growth & Clinic Setup Guidance from Experts",
    ],
    kitProvided: [
      "Hands-on Clinical Device Supervised Access",
      "Comprehensive Theory & Treatment Protocol Manual",
      "Sterile Safety Goggles & Medical Sterilization Kit",
      "Fitzpatrick Skin Analysis Diagnostic Charts",
    ],
    practicalTraining: {
      title: "Sterile Clinical Device Practice on Real Models",
      description:
        "Every student gets dedicated time operating advanced aesthetic machinery under the direct supervision of experienced cosmetologists. You learn safe needle depths, sanitization workflows, and real client consultations.",
      features: [
        "100% Supervised Device Training",
        "Clinical Consultation Practice",
        "Live Case-Study Client Handling",
      ],
    },
    galleryHeading: "Inside Our Clinical Aesthetics & Medi-Facial Training",
    gallerySubtitle:
      "Explore real clinical device operations, sterile medi-facial workflows, chemical peeling depths, and Fitzpatrick skin diagnostics at Yashree Institute Indore.",
    galleryImages: [
      {
        src: "/images/services/aesthet_hydra_suction.jpg",
        alt: "Advanced Medi-Facial Vortex Suction Device",
        title: "Clinical Vortex Suction & Hydra-Facial",
        subtitle: "Hydro-dermabrasion deep pore vacuum extraction and active serum infusion.",
        tag: "Hydra Device",
        aspect: "wide",
        isFeatured: true,
        shapeOrType: "Hydro-Vacuum Dermabrasion",
        colorOrShade: "AHA Salicylic & Hyaluronic Infusion",
        priceRange: "₹2,500 – ₹5,000 / Session",
        duration: "45 Mins Procedure",
        benefits: [
          "Delivers instant glass-skin glow with zero client downtime",
          "Removes deep blackheads, dead cells, and sebum buildup",
          "High-ticket salon treatment commanding top profit margins"
        ],
        keyTools: ["Hydra-Dermabrasion Machine", "Vortex Suction Tips", "Salicylic & Hyaluronic Serums"],
        clientDemand: "Top Trending Medi-Facial in High Demand"
      },
      {
        src: "/images/services/aesthet_photon_led.jpg",
        alt: "LED Light Phototherapy Skin Rejuvenation",
        title: "LED Photon Light Therapy",
        subtitle: "Targeted red and blue wavelength photon energy for collagen stimulation and acne control.",
        tag: "Phototherapy",
        aspect: "portrait",
        shapeOrType: "Multi-Wave LED Dome Therapy",
        colorOrShade: "630nm Red & 415nm Blue Light",
        priceRange: "₹1,500 – ₹3,000 / Add-on",
        duration: "20 – 30 Mins",
        benefits: [
          "Red Light (630nm) accelerates collagen synthesis and skin firming",
          "Blue Light (415nm) destroys acne-causing P. acnes bacteria",
          "Non-invasive calming add-on after chemical peels and microneedling"
        ],
        keyTools: ["Multi-Wave LED Dome", "Protective Eye Goggles", "Photo-Active Ampoules"],
        clientDemand: "Essential Clinical Finishing Therapy"
      },
      {
        src: "/images/services/aesthet_microdermabrasion.jpg",
        alt: "Diamond Tip Microdermabrasion Resurfacing",
        title: "Diamond Microdermabrasion Resurfacing",
        subtitle: "Controlled mechanical exfoliation removing stratum corneum dead cells.",
        tag: "Resurfacing",
        aspect: "square",
        shapeOrType: "Diamond Wand Mechanical Peeling",
        colorOrShade: "Fine Diamond Grain Tips (D-150/D-200)",
        priceRange: "₹2,000 – ₹3,500 / Session",
        duration: "30 – 40 Mins",
        benefits: [
          "Smooths uneven skin texture and reduces superficial acne scars",
          "Boosts transdermal absorption of active anti-aging serums by 80%",
          "Safe mechanical resurfacing without chemical irritation"
        ],
        keyTools: ["Diamond Head Wand", "Vacuum Suction Unit", "Calming Thermal Mask"],
        clientDemand: "High Client Retention for Skin Smoothing"
      },
      {
        src: "/images/services/aesthet_skin_diagnostics.jpg",
        alt: "Fitzpatrick Skin Analysis and Diagnostic Consultation",
        title: "Fitzpatrick Skin Diagnostic Profiling",
        subtitle: "Evaluating skin moisture levels, sebum production, and hyperpigmentation depth.",
        tag: "Skin Science",
        aspect: "landscape",
        shapeOrType: "Clinical Digital Consultation",
        colorOrShade: "Fitzpatrick Scale Types I - VI",
        priceRange: "₹1,000 – ₹2,000 (Consultation)",
        duration: "15 Mins Diagnostic",
        benefits: [
          "Accurately diagnoses Fitzpatrick Skin Types I through VI",
          "Prevents hyperpigmentation risks by selecting correct peel strengths",
          "Builds strong client trust through scientific digital consultations"
        ],
        keyTools: ["Skin Diagnostic Magnifier", "Moisture & Sebum Sensors", "Fitzpatrick Chart"],
        clientDemand: "Core Consultation Competency"
      },
      {
        src: "/images/services/aesthet_clinical_sanitation.jpg",
        alt: "Sterile Aesthetic Clinic Tray and Protocol",
        title: "Hospital-Grade Sterilization Standards",
        subtitle: "Autoclave sanitization, medical-grade nitrile gloves, and single-use disposable tips.",
        tag: "Sterile Clinic",
        aspect: "landscape",
        shapeOrType: "Clinical Hygiene & Autoclave Protocol",
        colorOrShade: "Medical-Grade Sterile Supplies",
        priceRange: "Included in Treatment",
        duration: "Standard Setup",
        benefits: [
          "Zero risk of cross-contamination or post-procedure infections",
          "Compliance with international dermatological safety protocols",
          "Establishes a premium, doctor-level clinical reputation"
        ],
        keyTools: ["Autoclave Sterilizer", "Medical Nitrile Gloves", "Disposable Cartridges"],
        clientDemand: "Critical Safety Certification Standard"
      },
      {
        src: "/images/services/aesthet_ultrasonic_spatula.jpg",
        alt: "Ultrasound Skin Scrubber and Spatula Peeling",
        title: "Ultrasound Cavitation Skin Peeling",
        subtitle: "High-frequency ultrasonic vibrations for gentle blackhead loosening and serum iontophoresis.",
        tag: "Ultrasound Scrub",
        aspect: "square",
        shapeOrType: "28,000 Hz Ultrasonic Cavitation",
        colorOrShade: "Ionic Peptide Infusion",
        priceRange: "₹1,800 – ₹3,000 / Session",
        duration: "30 Mins",
        benefits: [
          "28,000 Hz ultrasonic waves painlessly dislodge stubborn comedones",
          "Positive & negative ionic modes push peptides deep into dermal layers",
          "Gentle and soothing for sensitive and rosacea-prone skin types"
        ],
        keyTools: ["Ultrasonic Stainless Steel Spatula", "Ionizing Gel", "Desincrustation Solution"],
        clientDemand: "Must-Have Daily Salon Treatment"
      },
      {
        src: "/images/services/aesthet_derma_roller.jpg",
        alt: "Microneedling and Derma Rolling Device",
        title: "Precision Nano & Microneedling",
        subtitle: "Safe epidermal puncture depth calibration for scar revision and transdermal serum delivery.",
        tag: "Needling Protocol",
        aspect: "portrait",
        shapeOrType: "0.25mm - 1.5mm Precision Needling",
        colorOrShade: "Sterile Meso-Peptide Cocktail",
        priceRange: "₹3,500 – ₹7,000 / Session",
        duration: "45 – 60 Mins",
        benefits: [
          "Stimulates natural elastin and collagen induction therapy (CIT)",
          "Significantly fades open pores, fine lines, and post-acne pitting",
          "High ROI procedure commanding premium client fees"
        ],
        keyTools: ["Derma Roller & Micro-Pen", "Numbing Cream (Lidocaine)", "Sterile Meso-Peptides"],
        clientDemand: "Top-Tier Skin Rejuvenation Service"
      },
    ],
    benefits: [
      "Enter the highest-earning bracket in modern salon and medi-spa care",
      "Gain recognized certifications accepted by leading beauty clinics",
      "Learn sterile hygiene protocols to ensure client safety and zero downtime",
      "Lifetime technical support and consultation from Deepika Patidar",
    ],
    faqs: [
      {
        q: "Do I need a medical degree to join this Aesthetic course?",
        a: "No medical degree is required. This curriculum is specifically designed for non-doctor cosmetologists, beauticians, and aesthetic practitioners covering non-invasive procedures legally permitted for certified aestheticians.",
      },
      {
        q: "Are practice machines and skincare products provided during training?",
        a: "Yes! All aesthetic machines, chemical peels, serums, and sterilization supplies are provided by Yashree Institute during class hours.",
      },
      {
        q: "What is the batch timing?",
        a: "We offer convenient morning batches (10 AM – 1 PM) and afternoon batches (2 PM – 5 PM) from Monday to Saturday.",
      },
    ],
    idealFor: "Beauticians, salon owners, and cosmetologists looking to offer lucrative medi-facial and clinical skincare treatments.",
  },

  // 2. MAKEUP (Make-up Master Class & Professional Course)
  {
    slug: "makeup",
    title: "Make-up Master Class & Professional Course",
    shortTitle: "Professional Makeup",
    category: "Bridal & Glamour",
    durationBadge: "Basic to Pro Masterclass",
    heroTagline: "Learn • Practice • Shine — Mentored by Celebrity Artist Deepika Patidar",
    metaTitle: "Professional Makeup Course in Indore | Yashree Institute",
    metaDescription: "Enroll in the basic-to-pro makeup masterclass mentored by Celebrity Makeup Artist Deepika Patidar in Indore. 100% practical, airbrush demo & studio portfolio shoots.",
    posterImage: "/images/makeup_masterclass.jpg",
    heroImage: "/images/services/makeup_bridal_hd_base.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 8 & 14)",
    themeAccent: {
      badgeBg: "bg-amber-50",
      badgeText: "text-[#b8860b]",
      borderAccent: "border-amber-300",
      tagBg: "bg-amber-100 text-amber-900",
      gradientGlow: "from-[#f2c301]/20 via-amber-500/10 to-transparent",
      accentColorHex: "#f2c301",
    },
    schedule: {
      duration: "Basic to Pro Masterclass Track",
      days: "Monday to Saturday (Regular Batches)",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students for Personalized 1-on-1 Guidance",
      mode: "Offline Hands-on in Indore + Portfolio Studio Shoots",
    },
    pricingInfo: {
      feeStructure: "Transparent Course Fee with Flexible Installment Options",
      installmentAvailable: true,
      kitInclusionValue: "Complete professional makeup brush set & vanity cosmetics included free",
      consultation: "Direct Mentorship with Celebrity Artist Deepika Patidar",
    },
    trainingBehavior: {
      step1: "Color Wheel Theory, Facial Undertones & HD Skin Prep",
      step2: "Contouring Geometry, Seamless Eye Blending & Precision Liner",
      step3: "5 Full Supervised Transformations on Live Indian Bridal Models",
      step4: "Studio Lighting Camera Shoot, Instagram Reel Creation & Convocation Certificate",
    },
    overview:
      "Mentored directly by Celebrity Makeup Artist Deepika Patidar, this comprehensive makeup masterclass takes you from basic color science to high-glamour bridal transformations, HD base formulation, and professional studio portfolio shoots.",
    modules: [
      "Colour Wheel Theory & Undertone Identification",
      "Skin Type Preparation & Flawless Base Creation",
      "Eye Shade Selection & Seamless Blending Mastery",
      "Lipstick Application & Ombre Lip Techniques",
      "Precision Eyeliner & Mascara Application",
      "Face Shape Contouring & Strobe Highlighting",
      "Airbrush Make-up Demonstration & Practice",
      "Bridal, Engagement & Red-Carpet Glamour Looks",
      "5 Complete Live Makeup Hands-on Practices",
      "Professional Portfolio Studio Camera Shoot",
    ],
    keyHighlights: [
      "Personal Mentorship by Celebrity Makeup Artist Deepika Patidar",
      "5 Full Live Model Practical Transformations",
      "Studio Lighting Camera Portfolio Shoot Included",
      "Instagram Reel Creation & Social Media Branding Training",
    ],
    kitProvided: [
      "Complete Professional Make-up Brush Vanity Set",
      "Student Practice Cosmetic Palette & Foundation Kit",
      "Official Yashree Institute Beautician Apron",
      "Step-by-Step Color & Blending Theory Manual",
    ],
    practicalTraining: {
      title: "Live Bridal Demos, Model Practice & Studio Lighting",
      description:
        "Students work on real models to create wedding, reception, and party looks. You will also learn how to light, photograph, and shoot reels of your work using professional studio equipment.",
      features: [
        "Live Indian Bridal Demonstrations",
        "5 Independent Live Model Practice Sessions",
        "HD Studio Lighting & Camera Portfolio Shoot",
      ],
    },
    galleryHeading: "Inside Our Makeup Mastery & Bridal Studio",
    gallerySubtitle:
      "Step into our bridal transformations, HD airbrush demos, precision eye blending, and camera lighting portfolio shoots in Indore.",
    galleryImages: [
      {
        src: "/images/services/makeup_bridal_hd_base.jpg",
        alt: "High-Definition Bridal Makeup Artistry",
        title: "High-Definition Bridal Base Artistry",
        subtitle: "Flawless HD skin base formulation, micro-stippling, and seamless contour blending.",
        tag: "HD Bridal Base",
        aspect: "wide",
        isFeatured: true,
        shapeOrType: "Waterproof HD Base Formulation",
        colorOrShade: "Warm Golden & Honey Beige Undertones",
        priceRange: "₹15,000 – ₹35,000 / Bride",
        duration: "90 – 120 Mins",
        benefits: [
          "Flawless 18-hour sweatproof base for Indian wedding ceremonies",
          "Zero flashback under high-intensity 4K wedding videography",
          "Bridal bookings command top revenue per client"
        ],
        keyTools: ["HD Foundations", "Beauty Blenders", "Micro-Setting Powders", "Fixing Mist"],
        clientDemand: "Highest Revenue Bridal Service in India"
      },
      {
        src: "/images/services/makeup_cut_crease_eyes.jpg",
        alt: "Editorial Cut-Crease Eyes and Winged Liner",
        title: "Editorial Cut-Crease Eye Artistry",
        subtitle: "Precision winged eyeliner, ombre eyeshadow blending, and dimensional glitter pigments.",
        tag: "Eye Artistry",
        aspect: "portrait",
        shapeOrType: "Half & Full Cut-Crease Architecture",
        colorOrShade: "Rose Gold, Bronze & Champagne Glitter",
        priceRange: "₹3,000 – ₹6,000 / Eye Glam",
        duration: "45 Mins",
        benefits: [
          "Creates dramatic eye depth and enlarges hooded eyelids",
          "Flawless gradient blending between warm transition and shimmer hues",
          "Signature look for sangeet, cocktail, and high-fashion shoots"
        ],
        keyTools: ["Cut-Crease Concealer Brushes", "Pigment Palettes", "Silk 3D Lashes"],
        clientDemand: "Viral Social Media & Sangeet Demand"
      },
      {
        src: "/images/services/makeup_contour_sculpt.jpg",
        alt: "Face Shape Contouring and Strobe Highlighting",
        title: "Face Contouring & Strobe Geometry",
        subtitle: "Highlighting bone structure, jawline sculpting, and liquid strobe placement.",
        tag: "Contour Mastery",
        aspect: "landscape",
        shapeOrType: "Diamond & Oval Face Sculpting",
        colorOrShade: "Cool Taupe Contour & Champagne Glow",
        priceRange: "₹2,500 – ₹5,000 / Session",
        duration: "30 Mins",
        benefits: [
          "Transforms round, square, or oblong faces into balanced oval symmetry",
          "Sculpts sharp cheekbones and slim jawlines naturally",
          "Mastering cream contouring under powder for seamless dimension"
        ],
        keyTools: ["Cream Contour Sticks", "Angle Stippling Brush", "Liquid Highlighter"],
        clientDemand: "Crucial for Modern Camera-Ready Glamour"
      },
      {
        src: "/images/services/makeup_glam_redcarpet.jpg",
        alt: "Red Carpet and Cocktail Glamour Makeup",
        title: "Red Carpet & Cocktail Glamour",
        subtitle: "Glass skin finish with luminous liquid illuminators and statement evening lips.",
        tag: "Red Carpet Glam",
        aspect: "portrait",
        shapeOrType: "Luxe Glass-Skin Cocktail Finish",
        colorOrShade: "Deep Plum, Wine & Radiant Glow",
        priceRange: "₹5,000 – ₹10,000 / Look",
        duration: "60 Mins",
        benefits: [
          "Luminous dewiness without looking oily or creasing",
          "Bold statement lips and smoked-out lower lashlines",
          "High demand for engagement, reception, and party bookings"
        ],
        keyTools: ["Illuminating Primers", "Matte Velvet Lipsticks", "Glow Setting Spray"],
        clientDemand: "Lucrative Party & Reception Bookings"
      },
      {
        src: "/images/services/makeup_velvet_lips.jpg",
        alt: "Velvet Lip Contouring and Ombre Application",
        title: "Velvet Matte Lip Contouring & Ombre",
        subtitle: "Lip mapping, overlining symmetry, and ombre center highlight techniques.",
        tag: "Lip Artistry",
        aspect: "square",
        shapeOrType: "3D Pout Ombre Mapping",
        colorOrShade: "Spiced Rose & Nude Center Gradient",
        priceRange: "₹1,500 – ₹2,500 / Service",
        duration: "15 Mins",
        benefits: [
          "Fixes asymmetrical lip shapes and adds natural plumpness",
          "Smudge-proof and transfer-resistant for all-day bridal comfort",
          "Creates trendy 3D ombre lip gradients with ease"
        ],
        keyTools: ["Precision Lip Liners", "Lip Palette", "Flat Concealer Shader"],
        clientDemand: "Essential Bridal Finishing Touch"
      },
      {
        src: "/images/services/makeup_skin_foundation.jpg",
        alt: "HD Skin Prep and Foundation Matching",
        title: "Skin Prep, Hydration & Primer Matching",
        subtitle: "Matching warm, cool, and olive Indian undertones without flashback.",
        tag: "Skin Prep",
        aspect: "landscape",
        shapeOrType: "Undertone Color Science (Olive/Warm/Cool)",
        colorOrShade: "Custom Foundation Pigment Blends",
        priceRange: "Included in Makeup",
        duration: "20 Mins",
        benefits: [
          "Identifies undertones (Warm, Olive, Cool) to eliminate gray ashy base",
          "Targeted hydration for dry vs oily T-zones to prevent caking",
          "Builds a luminous barrier for smooth, poreless makeup adhesion"
        ],
        keyTools: ["Ceramide Moisturizers", "Pore-Filling Primers", "Color Correctors"],
        clientDemand: "Secret to 100% Client Satisfaction"
      },
      {
        src: "/images/services/makeup_airbrush_technique.jpg",
        alt: "Airbrush Makeup Compressor and Gun Demo",
        title: "Airbrush Makeup Gun Demonstration",
        subtitle: "Micro-atomized silicone foundation misting for 24-hour waterproof bridal wear.",
        tag: "Airbrush Demo",
        aspect: "square",
        shapeOrType: "Micro-Mist Silicone Airbrushing",
        colorOrShade: "Silicone High-Def Pigment Inks",
        priceRange: "₹20,000 – ₹45,000 / Bridal Package",
        duration: "90 Mins",
        benefits: [
          "Delivers featherlight HD coverage without touching the skin with brushes",
          "100% waterproof and tear-proof for emotional bridal moments",
          "Premium upgrade service adding high value per bridal package"
        ],
        keyTools: ["Airbrush Compressor", "Dual-Action Gun", "Silicone Airbrush Inks"],
        clientDemand: "Ultra-Premium High-End Bridal Service"
      },
    ],
    benefits: [
      "Establish an independent freelance bridal makeup business",
      "Build a high-definition professional portfolio to attract affluent wedding clients",
      "Master HD foundation blending without caking or creasing",
      "100% placement assistance in top salon chains and bridal studios",
    ],
    faqs: [
      {
        q: "Can beginners with no makeup experience join this course?",
        a: "Absolutely! The course starts from ground zero with color wheel theory, skin preparation, and brush holding techniques before progressing to advanced bridal looks.",
      },
      {
        q: "Are practice cosmetics provided by the institute?",
        a: "Yes! High-grade professional makeup products, brush sets, and vanity materials are provided during classes.",
      },
      {
        q: "Will I get my own portfolio shoot?",
        a: "Yes, every student gets a professional studio camera shoot with real models to launch their Instagram and bridal portfolio.",
      },
    ],
    idealFor: "Aspiring bridal makeup artists, beauty enthusiasts, salon owners, and influencers aiming for master-level artistry.",
  },

  // 3. HAIR STYLING (Hair Styling Course - Basic to Advanced)
  {
    slug: "hair-styling",
    title: "Hair Styling Course (Basic to Advanced)",
    shortTitle: "Hair Styling Masterclass",
    category: "Hair Artistry",
    durationBadge: "Basic to Advanced",
    heroTagline: "From Basic Sectioning to Celebrity Red-Carpet Hairstyles",
    metaTitle: "Hair Styling Course in Indore | Yashree Institute",
    metaDescription: "Learn basic to advanced bridal hair styling, classic buns, braids, juda styling, and Instagram reel techniques in Indore at Yashree Institute.",
    posterImage: "/images/hair_styling.jpg",
    heroImage: "/images/services/hair_bridal_juda_bun.jpg",
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
      duration: "Basic to Advanced Fast-Track Styling",
      days: "Monday to Saturday",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students with Individual Mannequin Stand",
      mode: "Offline Classroom Training in Indore",
    },
    pricingInfo: {
      feeStructure: "Pocket-Friendly Fee Structure with Easy Installments",
      installmentAvailable: true,
      kitInclusionValue: "Styling dummy with stand, combs, clips & accessories provided free",
      consultation: "Lifetime Free Technical Consultation for Hair Styling",
    },
    trainingBehavior: {
      step1: "Precision Sectioning, Blow Dry, Ironing & Heat Curling Fundamentals",
      step2: "Bridal Buns, Saree Juda & Advanced Multi-Strand Braiding on Dummies",
      step3: "Matching Hairstyles to Necklines, Face Shapes & Lehenga Cuts on Real Models",
      step4: "Speed Setting for Busy Wedding Seasons & Instagram Reel Video Shooting",
    },
    overview:
      "Master the art of high-fashion and bridal hairstyling. Learn precision sectioning, high-volume backcombing, classic and messy buns, red-carpet waves, and matching hairstyles to saree and lehenga cuts.",
    modules: [
      "Hair Sectioning Techniques & Tools Introduction",
      "Blow Dry, Ironing & Heat Curling Mastery",
      "Classic & Trendy Buns (Donut Bun, Saree Bun, Messy Bun)",
      "Braiding Masterclass (3-Strand, French, Fishtail, Advanced)",
      "Juda Styling with Traditional & Modern Accessories",
      "Half-Up Half-Down & Open Hair Curl Setting",
      "Hair Padding, Volume Techniques & Backcombing",
      "Bridal Advanced, Engagement & Reception Looks",
      "High Fashion Bun & Red-Carpet Inspired Hairstyles",
      "Saree & Lehenga Matching Styling & Face Shape Analysis",
    ],
    keyHighlights: [
      "Live Demo + Hands-on Practice on Live Models & Mannequins",
      "Speed & Professional Finishing Techniques for Wedding Seasons",
      "Instagram Reel Training (How to Shoot & Showcase)",
      "Recognized Course Certificate Valid Worldwide",
    ],
    kitProvided: [
      "Professional Hair Styling Comb & Section Clips Set",
      "Hair Styling Practice Dummy with Adjustable Stand",
      "Hair Padding, Accessories & Styling Product Knowledge",
      "Printed Hair Style Catalog & Guidebook",
    ],
    practicalTraining: {
      title: "Hands-on Mannequin & Live Model Setting",
      description:
        "Extensive practice on mannequin dummy heads and real models to master speed, symmetry, accessory placement, and long-lasting hold.",
      features: [
        "Dummy Head Practice with Sectioning Tools",
        "Live Model Bridal Juda & Saree Styling",
        "Speed Building for Busy Wedding Seasons",
      ],
    },
    galleryHeading: "Inside Our Hair Artistry & Bridal Juda Sessions",
    gallerySubtitle:
      "From dummy head sectioning and heat tong curls to royal Indian bridal judas, textured sangeet braids, and floral accessory styling.",
    galleryImages: [
      {
        src: "/images/services/hair_bridal_juda_bun.jpg",
        alt: "Royal Indian Bridal Juda and Updo",
        title: "Royal Bridal Juda & Updo Architecture",
        subtitle: "High-volume backcombing, structured wedding buns, and zero-fall bobby pin locking.",
        tag: "Bridal Juda",
        aspect: "wide",
        isFeatured: true,
        shapeOrType: "Structured High-Volume Bridal Juda",
        colorOrShade: "Classic Indian Traditional Bun Styling",
        priceRange: "₹3,500 – ₹8,000 / Bridal Hair",
        duration: "45 – 60 Mins",
        benefits: [
          "Locks heavy bridal dupattas securely with zero slipping",
          "Creates majestic royal Indian wedding silhouette for brides",
          "Specialized bridal hair commands high earnings per wedding"
        ],
        keyTools: ["Donut Stuffing", "Crimp Iron", "U-Pins & Bobby Pins", "Hard Hold Spray"],
        clientDemand: "Must-Have for Indian Wedding Artistry"
      },
      {
        src: "/images/services/hair_curling_tongs_iron.jpg",
        alt: "Heat Tong Curling and Ironing Tools",
        title: "Heat Tong Curling & Temperature Mastery",
        subtitle: "25mm and 32mm barrel tong curls, spiral ribbon twists, and heat protectants.",
        tag: "Tong Curls",
        aspect: "square",
        shapeOrType: "25mm / 32mm Spiral Barrel Curls",
        colorOrShade: "High-Gloss Thermo-Sealed Waves",
        priceRange: "₹1,500 – ₹3,000 / Styling",
        duration: "30 Mins",
        benefits: [
          "Creates long-lasting bounce that survives humid outdoor venues",
          "Mastering curl direction to open up the client's face",
          "Prevents thermal hair damage through correct heat settings"
        ],
        keyTools: ["25mm Ceramic Curling Tong", "Sectioning Clips", "Thermal Shield Spray"],
        clientDemand: "Core Hair Styling Foundation"
      },
      {
        src: "/images/services/hair_fishtail_braids.jpg",
        alt: "Textured Mermaid and Fishtail Braid",
        title: "Multi-Strand Fishtail & Mermaid Braids",
        subtitle: "Pull-through volume braiding with crystal pins for sangeet and mehendi looks.",
        tag: "Sangeet Braids",
        aspect: "landscape",
        shapeOrType: "3D Pull-Through Fishtail Braid",
        colorOrShade: "Textured Bohemian Finish",
        priceRange: "₹2,500 – ₹5,000 / Hairstyle",
        duration: "40 Mins",
        benefits: [
          "Transforms thin hair into thick, voluminous 3D statement braids",
          "Seamless incorporation of baby's breath flowers and pearls",
          "Favorite style for Mehendi, Haldi, and destination pre-wedding shoots"
        ],
        keyTools: ["Micro-Elastic Bands", "Pearl Pins", "Volumizing Dust"],
        clientDemand: "Extremely Popular for Haldi & Mehendi"
      },
      {
        src: "/images/services/hair_gajra_accessories.jpg",
        alt: "Traditional Gajra and Floral Hair Accessories",
        title: "Floral Gajra & Bridal Hair Pinning",
        subtitle: "Real rose layering, jasmine gajra placement, and bridal matha patti integration.",
        tag: "Accessory Design",
        aspect: "portrait",
        shapeOrType: "Fresh Rose & Jasmine Matha Patti Draping",
        colorOrShade: "Fresh Floral Wedding Accents",
        priceRange: "₹2,000 – ₹4,000 / Add-on",
        duration: "25 Mins",
        benefits: [
          "Painless pinning technique preventing scalp headache for brides",
          "Flawless placement of heavy matha patti, maang tikka, and passas",
          "Harmonious color matching with bridal lehenga and floral themes"
        ],
        keyTools: ["Fresh Floral Gajra", "Invisible Hair Nets", "Cushioned Hair Pads"],
        clientDemand: "Essential Indian Wedding Expertise"
      },
      {
        src: "/images/services/hair_dummy_mannequin.jpg",
        alt: "Mannequin Dummy Head Practice Station",
        title: "Mannequin Sectioning & Teasing Stations",
        subtitle: "360-degree adjustable dummy stands for building muscle memory and speed.",
        tag: "Dummy Practice",
        aspect: "square",
        shapeOrType: "Mannequin Dexterity Training",
        colorOrShade: "High-Density Practice Hair",
        priceRange: "Included in Starter Kit",
        duration: "Daily Practice",
        benefits: [
          "Builds finger dexterity, hand speed, and symmetrical styling habits",
          "Dedicated high-density dummy head provided to each student",
          "Unlimited trial and error practice before touching live bridal clients"
        ],
        keyTools: ["High-Density Mannequin Dummy", "360 Stand", "Teasing Comb"],
        clientDemand: "Rapid Skill Acquisition Standard"
      },
      {
        src: "/images/services/hair_speed_updo.jpg",
        alt: "Fast Bridal Speed Styling",
        title: "Speed Setting for Busy Wedding Seasons",
        subtitle: "15-minute quick updo architectures for high-volume bridal studio schedules.",
        tag: "Speed Styling",
        aspect: "landscape",
        shapeOrType: "15-Minute Rapid Updo Architecture",
        colorOrShade: "Quick-Lock Texture Finish",
        priceRange: "₹2,000 – ₹4,500 / Guest",
        duration: "15 Mins Execution",
        benefits: [
          "Styles 6 to 10 bridesmaids/guests within tight wedding morning timelines",
          "Multiplies salon throughput and day-rate earnings significantly",
          "Reliable long-hold architecture requiring zero touch-ups"
        ],
        keyTools: ["Fast-Locking Hairpins", "Quick-Dry Lacquer", "Donut Foam"],
        clientDemand: "High Salon Day-Rate Profitability"
      },
    ],
    benefits: [
      "Deliver stunning bridal and reception hairstyles that stay intact for hours",
      "Match hairdos seamlessly to necklines, lehengas, and face shapes",
      "Earn high income as a specialized bridal hair stylist",
      "All practice dummy heads and tools provided by the institute",
    ],
    faqs: [
      {
        q: "Are dummy heads provided for home and class practice?",
        a: "Yes! High-density hair mannequin dummy heads with stands are provided during your practical training sessions.",
      },
      {
        q: "How many hairstyles will I learn?",
        a: "You will master 15+ bridal, reception, party, and red-carpet hairstyles including traditional judas and modern messy buns.",
      },
    ],
    idealFor: "Hair stylists, salon staff, and bridal specialists wanting to elevate their hairstyling repertoire.",
  },

  // 4. HAIR MASTERCLASS (Hair Master Class & Chemical Treatments)
  {
    slug: "hair-masterclass",
    title: "Hair Master Class & Chemical Treatments",
    shortTitle: "Hair Chemical Science",
    category: "Chemical Science",
    durationBadge: "Advanced Chemical Track",
    heroTagline: "Hair Structure, Keratin, Botox, Nanoplastia & Rebonding",
    metaTitle: "Hair Chemical Treatments & Cut Masterclass | Yashree Institute Indore",
    metaDescription: "Learn Keratin, Hair Botox, Nanoplastia, Permanent Straightening, Global Color, Balayage, and Advanced Haircuts at Yashree Institute Indore.",
    posterImage: "/images/hair_masterclass.jpg",
    heroImage: "/images/services/chem_keratin_gloss.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 10 & 11)",
    themeAccent: {
      badgeBg: "bg-indigo-50",
      badgeText: "text-indigo-800",
      borderAccent: "border-indigo-300",
      tagBg: "bg-indigo-100 text-indigo-900",
      gradientGlow: "from-indigo-500/15 via-blue-500/5 to-transparent",
      accentColorHex: "#4f46e5",
    },
    schedule: {
      duration: "Advanced Hair Chemistry & Cutting Masterclass",
      days: "Monday to Saturday (Full-Time Practical)",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students for Dedicated Chemical Safety Supervision",
      mode: "Offline Classroom Training in Indore",
    },
    pricingInfo: {
      feeStructure: "Competitive Course Fee with Free Practice Chemicals Included",
      installmentAvailable: true,
      kitInclusionValue: "Chemical products, keratin formulas, developers & cutting dummy included",
      consultation: "Lifetime Technical Consultation on Color Formulations",
    },
    trainingBehavior: {
      step1: "Hair Anatomy, Porosity Diagnosis, pH Scale Science & Consultation",
      step2: "Nanoplastia, Keratin & Botox Deep Penetration Protocols",
      step3: "Global Hair Color Formulation, Balayage & Root Touch-ups on Models",
      step4: "Scissor Angles, Sectioning & Precision Haircuts followed by Blow-Dry Styling",
    },
    overview:
      "Become an expert in hair chemistry and precision haircutting. This masterclass covers the science of the pH scale, damage repair treatments like Nanoplastia and Botox, global color formulation, and modern haircutting techniques.",
    modules: [
      "Hair Structure, Growth Cycle & pH Scale Science",
      "Hair Type Diagnosis & Client Consultation",
      "Keratin Treatment & Botox Treatment Protocols",
      "Nanoplastia & Permanent Straightening / Rebonding",
      "Hair Colour Theory, Root Touch-Up & Global Colour",
      "Advanced Highlights: Strips, Ombre, and Balayage",
      "Basic to Advanced Haircut Sectioning & Holding Methods",
      "Blow-Dry Styling & Professional Hair Wash/Conditioning",
    ],
    keyHighlights: [
      "All Chemical Practice Products Provided by Yashree",
      "Max 25 Students per Batch for 1-on-1 Attention",
      "Step-by-Step Live Demonstrations on Real Clients",
      "Comprehensive Chemistry Theory + PDF Notes",
    ],
    kitProvided: [
      "Hair Cutting Dummy with Tool & Scissor Set",
      "Practice Chemicals, Keratin & Developers",
      "Technical Color Wheel & Formulation Sheets",
      "Salon Safety Goggles & Chemical Apron",
    ],
    practicalTraining: {
      title: "Supervised Chemical Formulation & Live Application",
      description:
        "Perform Keratin, Botox, Straightening, and Balayage applications on live models under expert supervision to ensure zero hair damage and pristine gloss.",
      features: [
        "Live Client Texture Diagnosis",
        "Precise Chemical Neutralization Practice",
        "Advanced Scissor Sectioning & Texturizing",
      ],
    },
    galleryHeading: "Inside Our Hair Chemistry & Cut Masterclass",
    gallerySubtitle:
      "Explore Nanoplastia, Keratin infusion, global color formulation, balayage highlights, and precision scissor haircutting in Indore.",
    galleryImages: [
      {
        src: "/images/services/chem_keratin_gloss.jpg",
        alt: "Keratin and Nanoplastia Chemical Infusion",
        title: "Keratin & Nanoplastia Protein Infusion",
        subtitle: "Thermal bond realignment, deep protein sealing, and zero-frizz mirror gloss finishing.",
        tag: "Chemical Science",
        aspect: "wide",
        isFeatured: true,
        shapeOrType: "Deep Keratin Protein Thermal Sealing",
        colorOrShade: "Mirror Gloss Frizz-Free Finish",
        priceRange: "₹4,500 – ₹12,000 / Treatment",
        duration: "120 – 180 Mins",
        benefits: [
          "Infuses hydrolysed keratin deep into the hair cortex",
          "Eliminates 95% frizz and provides wash-and-wear smoothness for 4-6 months",
          "High ticket salon service charging premium rates per client"
        ],
        keyTools: ["Titanium Flat Iron (230°C)", "Keratin Formula", "Clarifying Shampoo"],
        clientDemand: "Highest Margin Chemical Treatment"
      },
      {
        src: "/images/services/chem_balayage_blonde.jpg",
        alt: "Balayage Color Melting and Foil Highlights",
        title: "Balayage & Color Melt Transition",
        subtitle: "Freehand feathering, slice foiling, and seamless dimensional color melts.",
        tag: "Balayage Art",
        aspect: "portrait",
        shapeOrType: "Freehand Balayage & Root Melt",
        colorOrShade: "Caramel, Ash Blonde & Honey Melt",
        priceRange: "₹6,000 – ₹15,000 / Service",
        duration: "150 – 210 Mins",
        benefits: [
          "Seamless sun-kissed gradient with soft root regrowth (low maintenance for clients)",
          "Mastering foil placement geometry for dimensional contrast",
          "Commands premium global color service fees"
        ],
        keyTools: ["Balayage Paddle Board", "Feathering Tint Brush", "Lightening Clay"],
        clientDemand: "Top Requested Salon Hair Color"
      },
      {
        src: "/images/services/chem_shear_haircut.jpg",
        alt: "Precision Haircut and Sectioning Angles",
        title: "Precision Angle Haircut Mastery",
        subtitle: "Graduation cuts, diagonal forward lines, feathering, and texturizing shear control.",
        tag: "Haircut Mastery",
        aspect: "square",
        shapeOrType: "0°, 45°, 90°, 180° Angle Cutting",
        colorOrShade: "Texturized Salon Cut & Layers",
        priceRange: "₹800 – ₹2,500 / Haircut",
        duration: "30 – 45 Mins",
        benefits: [
          "Mastering 0°, 45°, 90°, and 180° elevation cutting planes",
          "Removes weight and creates bouncy interior layers without thinning ends",
          "Core foundation for daily high-volume salon haircutting"
        ],
        keyTools: ["Japanese Steel Shears", "Texturizing Scissors", "Cutting Comb"],
        clientDemand: "Daily Essential Salon Revenue"
      },
      {
        src: "/images/services/chem_volume_blowout.jpg",
        alt: "Volume Ceramic Blow Dry Styling",
        title: "Ceramic Ionic Volume Blow-Dry",
        subtitle: "Out-curl, in-curl, and high-velocity root elevation for salon-finish bounce.",
        tag: "Blow-Dry Styling",
        aspect: "landscape",
        shapeOrType: "Ionic Ceramic Root Elevation",
        colorOrShade: "High-Volume Bouncy Blowout",
        priceRange: "₹600 – ₹1,500 / Blow-Dry",
        duration: "30 Mins",
        benefits: [
          "Locks in salon shine and seals cuticle scales tightly",
          "Creates bouncy voluminous blow-outs that last for 3 days",
          "Essential finishing standard after every haircut or chemical service"
        ],
        keyTools: ["Ionic 2200W Dryer", "Ceramic Round Brushes", "Blow-Dry Serum"],
        clientDemand: "Essential Daily Finishing Skill"
      },
      {
        src: "/images/services/chem_foil_melt.jpg",
        alt: "Foil Highlights and Bleach Application",
        title: "Foil Strips & Micro-Weaving",
        subtitle: "Even bleach saturation without bleeding, root shadowing, and toner balancing.",
        tag: "Foil Highlights",
        aspect: "square",
        shapeOrType: "Micro-Weave Foil Saturation",
        colorOrShade: "Platinum & Vanilla Blonde",
        priceRange: "₹4,000 – ₹9,000 / Half-Head",
        duration: "90 – 120 Mins",
        benefits: [
          "Clean micro-weave sectioning ensuring zero line of demarcation",
          "Controlled lifting without overlapping on previously bleached hair",
          "High client demand for trendy ash-blonde and caramel streaks"
        ],
        keyTools: ["Embossed Salon Foils", "Pin-Tail Metal Comb", "Toning Gloss"],
        clientDemand: "High Margin Highlight Package"
      },
      {
        src: "/images/services/chem_plex_repair.jpg",
        alt: "Hair Bond Repair and Post Treatment Therapy",
        title: "Disulfide Bond Repair & Deep Conditioning",
        subtitle: "Molecular plex treatments re-linking broken keratin bonds in chemically treated hair.",
        tag: "Bond Repair",
        aspect: "landscape",
        shapeOrType: "Molecular Disulfide Bond Therapy",
        colorOrShade: "Structural Keratin Reconnection",
        priceRange: "₹2,000 – ₹4,000 / Add-on",
        duration: "30 Mins",
        benefits: [
          "Repairs extreme chemical breakage and heat damage from the inside",
          "Restores hair elasticity and structural strength",
          "Lucrative add-on treatment during bleaching and coloring"
        ],
        keyTools: ["Plex Bond Multiplier", "Deep Protein Mask", "Hair Steamer"],
        clientDemand: "High-Margin Treatment Add-On"
      },
    ],
    benefits: [
      "Offer high-ticket hair chemical services that generate immense salon revenue",
      "Understand the science behind hair bonds to prevent breakage",
      "Gain recognized certification for salon employment and salon ownership",
      "Lifetime consultation for complex hair color formulations",
    ],
    faqs: [
      {
        q: "Are the chemical products provided by the institute?",
        a: "Yes, 100% of all practice chemicals, developers, keratin formulas, and hair dyes are provided by Yashree Institute during training.",
      },
      {
        q: "Will I learn haircuts in this course?",
        a: "Yes, the syllabus includes basic to advanced precision haircutting, sectioning angles, holding methods, and styling blow-drys.",
      },
    ],
    idealFor: "Hairdressers, salon owners, and cosmetologists looking to master chemical treatments and premium haircutting.",
  },

  // 5. NAIL EXTENSION (Nail Extensions & Nail Art Class) — 100% PURE NAIL ART DESIGNS
  {
    slug: "nail-extension",
    title: "Nail Extensions & Nail Art Class",
    shortTitle: "Nail Extensions & Art",
    category: "Nail Studio",
    durationBadge: "15 Days Intensive",
    heroTagline: "Learn In 15 Days • Earn For A Lifetime",
    metaTitle: "Nail Extensions & Nail Art Course in Indore | Yashree Institute",
    metaDescription: "Complete 15-day certified nail extension and nail art training in Indore. Gel, acrylic, chrome, ombre, 3D art & UV machine knowledge at Yashree Institute.",
    posterImage: "/images/nail_art.jpg",
    heroImage: "/images/services/nail_pure_01_technician_live.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 12)",
    themeAccent: {
      badgeBg: "bg-fuchsia-50",
      badgeText: "text-fuchsia-800",
      borderAccent: "border-fuchsia-300",
      tagBg: "bg-fuchsia-100 text-fuchsia-900",
      gradientGlow: "from-fuchsia-500/15 via-pink-500/5 to-transparent",
      accentColorHex: "#c026d3",
    },
    schedule: {
      duration: "15 Days Intensive Career-Ready Track",
      days: "Monday to Saturday (Daily Hands-on Practical)",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students with Individual UV/LED Station",
      mode: "Offline Practical Training in Indore",
    },
    pricingInfo: {
      feeStructure: "Fast-Track 15-Day Course Fee with High ROI",
      installmentAvailable: true,
      kitInclusionValue: "Complete multi-piece nail brush set & practice tips provided free",
      consultation: "Lifetime Free Technical Guidance for Nail Art",
    },
    trainingBehavior: {
      step1: "Nail Anatomy, Sanitization, Cuticle Care, Shaping & Buffing",
      step2: "Gel & Acrylic Extension Tip Application, Blending & UV Curing",
      step3: "20+ Viral Nail Art Techniques (Chrome, Ombre, 3D, Foil, French)",
      step4: "Safe Refills, Soak-off Removal & Nail Studio Setup Pricing",
    },
    overview:
      "Learn in 15 Days • Earn for a Lifetime! Master the rapid-growth nail industry with practical training in Gel Extensions, Acrylic Extensions, 20+ viral nail art techniques, and UV/LED curing equipment.",
    modules: [
      "Complete Nail Anatomy & Sanitization Standards",
      "Gel Extensions, Acrylic Extensions & Overlaying",
      "Nail Shaping, Buffing & Cuticle Care",
      "20+ Trendy Nail Art Designs (Glitter, Ombre, Chrome, Foil, 3D)",
      "Product & UV/LED Curing Machine Knowledge",
      "Refills, Maintenance & Safe Nail Removal",
      "Client Pricing & Nail Studio Setup Basics",
    ],
    keyHighlights: [
      "Fast 15-Day Career-Ready Track",
      "Extensive Live Hands-on Practice on Dummy & Real Nails",
      "Official Certificate Provided upon Completion",
      "PDF Notes & Design Catalog Included",
    ],
    kitProvided: [
      "Professional Multi-Piece Nail Art Brush Set",
      "Nail Extension Practice Tips & Tools",
      "Nail Vanity Box & Practice Products Access",
      "UV Curing Lamp Operating Guide",
    ],
    practicalTraining: {
      title: "Dummy & Real Client Nail Transformations",
      description:
        "Gain real speed and symmetry by practicing gel overlays, acrylic sculpting, and intricate foil/chrome art on mannequin hands and live clients.",
      features: [
        "UV / LED Lamp Curing Protocols",
        "20+ Nail Art Live Practice Sessions",
        "Safe Soak-Off & Nail Health Maintenance",
      ],
    },
    galleryHeading: "Inside Our Nail Art & Extension Studio",
    gallerySubtitle:
      "Explore 15-day hands-on practical training in gel overlays, acrylic sculpting, chrome mirror art, 3D florals, and UV curing at Yashree Institute Indore.",
    galleryImages: [
      {
        src: "/images/services/nail_pure_01_technician_live.jpg",
        alt: "Nail Technician Live Client Extension Application",
        title: "Live Salon Manicure & Extension Filing",
        subtitle: "Professional nail artist carefully shaping client nail plates and applying apex balance.",
        tag: "Live Client Work",
        aspect: "wide",
        isFeatured: true,
        shapeOrType: "Custom Extension Filing & Apex Architecture",
        colorOrShade: "Live Salon Practical Workflow",
        priceRange: "₹2,500 – ₹4,500 / Session",
        duration: "60 Mins",
        benefits: [
          "Hands-on experience handling live client consultations and shaping",
          "Mastering proper ergonomic file holding and dust extraction",
          "Flawless sidewall filing ensuring zero lifting"
        ],
        keyTools: ["Professional Nail Files (100/180)", "Dust Brush", "Dehydrator & Primer"],
        clientDemand: "Core Practical Mastery"
      },
      {
        src: "/images/services/nail_pure_02_french_glitter.jpg",
        alt: "French Manicure with Glitter Accent Nail",
        title: "French Manicure with Glitter Ring Accent",
        subtitle: "Classic crisp white French smile line paired with dense sparkling glitter on the accent nail.",
        tag: "French & Glitter",
        aspect: "portrait",
        shapeOrType: "Square / Oval French Tips",
        colorOrShade: "Crisp White & Holographic Silver Glitter",
        priceRange: "₹2,200 – ₹3,500 / Set",
        duration: "45 Mins",
        benefits: [
          "Evergreen timeless look requested by corporate and bridal clients",
          "Glitter accent adds modern sparkle without overwhelming the clean French base",
          "Fast salon workflow delivering high customer satisfaction"
        ],
        keyTools: ["French Smile Line Brush", "Chunky Cosmetic Glitter", "Gloss Top Coat"],
        clientDemand: "Top Daily Salon Request"
      },
      {
        src: "/images/services/nail_pure_03_acrylic_crystal.jpg",
        alt: "Acrylic Nail Art with Crystals",
        title: "Acrylic Sculpting & Crystal Embellishments",
        subtitle: "Durable acrylic extension sculpting studded with sparkling light-catching crystals.",
        tag: "3D Crystal Glam",
        aspect: "square",
        shapeOrType: "Sculpted Coffin Shape",
        colorOrShade: "Soft Rose Base & AB Crystal Studs",
        priceRange: "₹3,200 – ₹5,500 / Set",
        duration: "70 Mins",
        benefits: [
          "Indestructible crystal placement techniques using specialized resin gel",
          "Adds high luxury appeal for engagements and wedding parties",
          "High profit margin on crystal placement add-on services"
        ],
        keyTools: ["Kolinsky #10 Brush", "Crystal Pickup Tool", "Rhinestone Resin Gel"],
        clientDemand: "Wedding & Festive Season Favorite"
      },
      {
        src: "/images/services/nail_pure_04_salon_acrylics.jpg",
        alt: "Salon Sagesse Professional Acrylic Extensions",
        title: "Salon Master Acrylic Extensions",
        subtitle: "Smooth monomer powder blending with balanced stress-point architecture.",
        tag: "Acrylic Sculpting",
        aspect: "landscape",
        shapeOrType: "Tapered Coffin / Ballerina",
        colorOrShade: "Natural Nude & High-Gloss Finish",
        priceRange: "₹2,800 – ₹4,800 / Set",
        duration: "60 Mins",
        benefits: [
          "Sculpts durable break-resistant extensions on short or damaged natural nails",
          "Balanced apex preventing painful cracks during daily work",
          "Commands the highest ticket price in commercial nail studios"
        ],
        keyTools: ["Monomer Liquid", "Core Acrylic Powders", "Nail Sculpting Forms"],
        clientDemand: "Highest Revenue Service"
      },
      {
        src: "/images/services/nail_pure_05_extensions_art.jpg",
        alt: "Nail Extensions with Fine Line Nail Art",
        title: "Sculpted Extensions & Detailed Nail Art",
        subtitle: "Precision linework, contrasting color blocking, and geometric gel detailing.",
        tag: "Nail Artistry",
        aspect: "portrait",
        shapeOrType: "Medium Almond Shape",
        colorOrShade: "Dual-Tone Contrast & Fine Gold Accents",
        priceRange: "₹2,500 – ₹4,000 / Set",
        duration: "55 Mins",
        benefits: [
          "Develops fine micro-brush hand control and linework confidence",
          "Popular modern aesthetic for influencers and younger clientele",
          "Quick custom art add-on that boosts ticket size"
        ],
        keyTools: ["Fine Detail Liners (7mm)", "Dotting Tools", "Pigment Gel Paints"],
        clientDemand: "High Social Media Popularity"
      },
      {
        src: "/images/services/nail_pure_06_hologram_art.jpg",
        alt: "Hologram Chrome Reflective Nail Art",
        title: "Holographic Chrome & Light Shimmer",
        subtitle: "Multi-spectrum prismatic reflection shifting colors with every hand gesture.",
        tag: "Hologram Chrome",
        aspect: "square",
        shapeOrType: "Almond / Stiletto Extensions",
        colorOrShade: "Prismatic Holographic Rainbow",
        priceRange: "₹2,600 – ₹4,200 / Set",
        duration: "50 Mins",
        benefits: [
          "Ultra-fine micro-pigment creates smooth, streak-free holographic mirror reflections",
          "Viral party trend with immense client enthusiasm",
          "Non-peeling seal formula lasting 4+ weeks"
        ],
        keyTools: ["Holo Chrome Powder", "Silicone Applicator", "No-Wipe Gel Gloss"],
        clientDemand: "Viral Trending Look"
      },
      {
        src: "/images/services/nail_pure_07_flower_art.jpg",
        alt: "Hand-Painted Flower Nail Art",
        title: "Hand-Painted Botanical & Floral Gel Art",
        subtitle: "Delicate layered flower petals, leaves, and spring bloom accents.",
        tag: "Floral Art",
        aspect: "landscape",
        shapeOrType: "Soft Oval Shape",
        colorOrShade: "Pastel Petals & Leaf Green Accents",
        priceRange: "₹2,400 – ₹3,800 / Set",
        duration: "50 Mins",
        benefits: [
          "Mastering realistic flower petal dimension and shading",
          "Soft romantic design ideal for pre-wedding shoots and spring parties",
          "High artistic appeal commanding premium custom art fees"
        ],
        keyTools: ["Round Tip Detail Brush", "Gel Paints", "Matte/Gloss Top Coats"],
        clientDemand: "Feminine & Pre-Wedding Staple"
      },
      {
        src: "/images/services/nail_pure_08_french_tip.jpg",
        alt: "Crisp French Tip Nail Art",
        title: "Classic & Modern French Tip Styling",
        subtitle: "Razor-sharp French smile line curves on extended nail tip beds.",
        tag: "French Tips",
        aspect: "portrait",
        shapeOrType: "Square / Squoval French",
        colorOrShade: "Milky White & Translucent Pink Base",
        priceRange: "₹2,000 – ₹3,200 / Set",
        duration: "40 Mins",
        benefits: [
          "Essential core foundation for all professional nail technicians",
          "Crisp smile lines achieved freehand or with guide brushes",
          "High client retention with natural regrowth camouflaging"
        ],
        keyTools: ["French Smile Brush", "High-Opacity White Gel", "Rubber Base"],
        clientDemand: "Evergreen Classic"
      },
      {
        src: "/images/services/nail_pure_09_pink_glitter.jpg",
        alt: "Pink Nails and Glitter Manicure",
        title: "Blush Pink Gel & High-Sparkle Glitter",
        subtitle: "Vibrant blush pink gel base with cascading glitter density toward the cuticle.",
        tag: "Pink & Glitter",
        aspect: "landscape",
        shapeOrType: "Natural Rounded Oval",
        colorOrShade: "Blush Pink & Rose Gold Glitter",
        priceRange: "₹2,000 – ₹3,200 / Set",
        duration: "40 Mins",
        benefits: [
          "Quick and beautiful design for salon walk-ins and everyday wear",
          "Strengthens natural nails with flexible rubber base technology",
          "High-shine glass finish resistant to chipping"
        ],
        keyTools: ["Rubber Base Gel", "Fine Rose Gold Glitter", "UV/LED Lamp"],
        clientDemand: "High Daily Walk-in Demand"
      },
      {
        src: "/images/services/nail_pure_10_red_polish.jpg",
        alt: "Red Nail Polish Glossy Manicure",
        title: "Classic Crimson Gloss Manicure",
        subtitle: "Rich iconic crimson red high-pigment gel polish with flawless cuticle contouring.",
        tag: "Classic Crimson",
        aspect: "portrait",
        shapeOrType: "Classic Oval / Almond",
        colorOrShade: "Deep Royal Crimson Red",
        priceRange: "₹1,800 – ₹2,800 / Set",
        duration: "35 Mins",
        benefits: [
          "Mastering flawless color application right up to the cuticle edge without flooding",
          "Iconic universal color that flatters all skin tones",
          "High-speed salon service with rapid turnaround"
        ],
        keyTools: ["High-Pigment Red Gel", "Precision Clean-up Brush", "Diamond Gloss Seal"],
        clientDemand: "All-Time Top Seller"
      },
      {
        src: "/images/services/nail_pure_11_strass_crystals.jpg",
        alt: "Nail Art Strass Crystals",
        title: "3D Strass Crystals & Diamond Cluster",
        subtitle: "Multi-faceted strass crystal arrangements with caviar micro-beads for 3D depth.",
        tag: "Strass Crystals",
        aspect: "square",
        shapeOrType: "Long Ballerina Extension",
        colorOrShade: "Silver Strass & Iridescent Shimmer",
        priceRange: "₹3,500 – ₹6,000 / Set",
        duration: "75 Mins",
        benefits: [
          "Teaches 3D crystal architecture and structural placement",
          "Zero snagging on hair or clothing with gap-filler resin sealing",
          "High-ticket luxury service commanding maximum profit"
        ],
        keyTools: ["Strass Crystals", "Caviar Beads", "UV Resin Glue"],
        clientDemand: "Luxury Bridal Must-Have"
      },
      {
        src: "/images/services/nail_pure_12_swirl_purple.jpg",
        alt: "Swirly Purple Konad Stamping Nail Art",
        title: "Konad Stamping & Purple Abstract Swirls",
        subtitle: "High-precision metal plate stamping and freehand deep purple swirls.",
        tag: "Stamping Art",
        aspect: "landscape",
        shapeOrType: "Medium Square Shape",
        colorOrShade: "Royal Violet, Purple & White Stamping",
        priceRange: "₹2,200 – ₹3,500 / Set",
        duration: "45 Mins",
        benefits: [
          "Fast, repeatable intricate art transfer in seconds using silicone stamper",
          "Enables beginners to produce complex graphics instantly",
          "Expands salon art catalog with hundreds of plate patterns"
        ],
        keyTools: ["Stamping Metal Plate", "Silicone Stamper", "High-Viscosity Stamping Polish"],
        clientDemand: "Fast Artistic Add-On"
      },
      {
        src: "/images/services/nail_pure_13_silver_french.jpg",
        alt: "French Manicure with Silver Polish",
        title: "Silver Metallic French V-Line Art",
        subtitle: "Modern deep V-cut French smile lines lined with high-shine metallic silver.",
        tag: "Silver French",
        aspect: "portrait",
        shapeOrType: "Extended Coffin / Stiletto",
        colorOrShade: "Mirror Silver & Nude Base",
        priceRange: "₹2,500 – ₹3,800 / Set",
        duration: "50 Mins",
        benefits: [
          "Contemporary modern twist on traditional French manicures",
          "Elongates fingers and creates slimming silhouette",
          "Top choice for evening parties and cocktail events"
        ],
        keyTools: ["Striping Tape", "Silver Metallic Gel", "Ultra-Gloss Top Coat"],
        clientDemand: "Party & Evening Favorite"
      },
      {
        src: "/images/services/nail_pure_14_uv_lamp_curing.jpg",
        alt: "UV Manicure Lamps Curing Station",
        title: "Professional UV/LED Curing Station",
        subtitle: "Equipped student stations with dual-wave 365nm+405nm curing lamps and timer control.",
        tag: "Curing Station",
        aspect: "wide",
        shapeOrType: "Professional Station Equipment",
        colorOrShade: "Dual-Wave UV/LED Setup",
        priceRange: "Included Free in Course Kit",
        duration: "Full Course Access",
        benefits: [
          "Understanding exact curing science to prevent under-cured gel allergies",
          "Low-heat mode prevents painful heat spikes for clients",
          "Hands-on practice on individual professional salon lamps"
        ],
        keyTools: ["48W Dual-Wave UV/LED Lamp", "Low Heat Mode", "Digital Timer"],
        clientDemand: "Professional Equipment Knowledge"
      },
      {
        src: "/images/services/nail_pure_15_color_testing.jpg",
        alt: "Gel Polish Color Testing and Swatch Palette",
        title: "Color Swatch Palette & Texture Testing",
        subtitle: "Gel polish swatch testing, opacity gradation, and color formulation mastery.",
        tag: "Color Formulation",
        aspect: "square",
        shapeOrType: "Swatch Palette Practice",
        colorOrShade: "50+ Professional Gel Shades",
        priceRange: "Included in Practice Kit",
        duration: "Full Course Access",
        benefits: [
          "Master color theory and custom mixing to match any client outfit",
          "Testing high vs. low viscosity gels for different art styles",
          "Building professional swatch portfolios for salon presentation"
        ],
        keyTools: ["Color Wheel", "Practice Tip Sticks", "Gel Palette"],
        clientDemand: "Essential Technical Training"
      },
      {
        src: "/images/services/nail_pure_16_gel_extensions.jpg",
        alt: "Gelnagel Professional Gel Extensions",
        title: "Structure Gel Overlays & Apex Extension",
        subtitle: "High-flexibility builder gel sculpting with natural look and lightweight feel.",
        tag: "Gel Extensions",
        aspect: "landscape",
        shapeOrType: "Natural Oval Gel Extension",
        colorOrShade: "Translucent Soft Pink Builder",
        priceRange: "₹2,500 – ₹4,000 / Set",
        duration: "50 Mins",
        benefits: [
          "100% odorless formulation ideal for boutique salon environments",
          "Flexible, natural movement that won't snap under light pressure",
          "Safe soak-off and refill maintenance without damaging natural nails"
        ],
        keyTools: ["Builder in a Bottle (BIAB)", "Oval Gel Brush", "Dehydrator"],
        clientDemand: "Fastest Growing Modern Service"
      },
      {
        src: "/images/services/nail_pure_17_violet_shimmer.jpg",
        alt: "Dark Violet Shimmer Manicure",
        title: "Deep Violet & Micro-Shimmer Gloss",
        subtitle: "Rich midnight violet gel polish infused with fine iridescent micro-glitter particles.",
        tag: "Shimmer Polish",
        aspect: "portrait",
        shapeOrType: "Classic Almond Shape",
        colorOrShade: "Royal Midnight Violet & Silver Sparkle",
        priceRange: "₹2,000 – ₹3,400 / Set",
        duration: "40 Mins",
        benefits: [
          "Dramatic evening shade with deep jewel-tone undertones",
          "Non-fading high-gloss top coat lasting 4+ weeks",
          "Popular winter and party celebration styling"
        ],
        keyTools: ["Micro-Shimmer Violet Gel", "LED Curing Lamp", "Mirror Top Coat"],
        clientDemand: "Evening & Party Classic"
      },
      {
        src: "/images/services/nail_pure_18_red_stripes.jpg",
        alt: "Red Nail Art with White Stripes",
        title: "Crimson Red with Fine-Line Striping Art",
        subtitle: "High-contrast geometric striping tape technique over high-pigment crimson red.",
        tag: "Geometric Art",
        aspect: "square",
        shapeOrType: "Tapered Square Extensions",
        colorOrShade: "Crimson Red & Crisp White Stripes",
        priceRange: "₹2,400 – ₹3,800 / Set",
        duration: "45 Mins",
        benefits: [
          "Teaches razor-sharp line spacing and striping tape adhesion",
          "Bold festive contrast loved by modern fashion clients",
          "Fast execution delivering high perceived design value"
        ],
        keyTools: ["Striping Tape Line", "White Liner Gel", "Precision Tweezers"],
        clientDemand: "Festive & Holiday Favorite"
      },
      {
        src: "/images/services/nail_pure_19_natural_french.jpg",
        alt: "Natural French Manicure",
        title: "Clean Natural French Crescent Manicure",
        subtitle: "Subtle sheer nude base with delicate natural white smile crescent line.",
        tag: "Natural French",
        aspect: "landscape",
        shapeOrType: "Natural Rounded Square",
        colorOrShade: "Translucent Nude & Soft Milky Crescent",
        priceRange: "₹1,800 – ₹2,800 / Set",
        duration: "35 Mins",
        benefits: [
          "Ultra-clean aesthetic suitable for medical, corporate, and daily wear",
          "Minimalist clean look emphasizing natural nail plate health",
          "High repeat salon booking frequency"
        ],
        keyTools: ["Sheer Nude Base", "Fine Smile Brush", "Cuticle Oil"],
        clientDemand: "Daily Essential Service"
      },
    ],
    benefits: [
      "Launch a lucrative nail bar or add nail stations to existing salons",
      "Master fast 15-day career-ready skills",
      "Recognized certificate valid for salon employment and salon licensing",
      "All practice brushes and tips supplied during the course",
    ],
    faqs: [
      {
        q: "Is 15 days enough to learn nail extensions?",
        a: "Yes! The 15-day curriculum is intensive and 100% practical, giving you hours of daily hands-on application on tips, dummies, and real nails.",
      },
      {
        q: "Do I get a nail brush kit?",
        a: "Yes, a multi-piece professional nail art brush set is provided for your practice.",
      },
    ],
    idealFor: "Students, beauticians, and entrepreneurs wanting to start a fast-growing, high-margin nail art business.",
  },

  // 6. PMU (Permanent Professional Makeup)
  {
    slug: "pmu",
    title: "Permanent Professional Makeup (PMU)",
    shortTitle: "PMU & Microblading",
    category: "Aesthetics & PMU",
    durationBadge: "10 Days High-Income Track",
    heroTagline: "Microblading, Lip Tinting & Advanced Aesthetic Care",
    metaTitle: "Permanent Makeup (PMU) & Microblading Course in Indore | Yashree Institute",
    metaDescription: "Learn eyebrow microblading, ombre powder brows, lip neutralizing, lash extensions, and BB glow in Indore at Yashree Institute.",
    posterImage: "/images/pmu_aesthetics.jpg",
    heroImage: "/images/services/pmu_lip_watercolor_tint.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 13)",
    themeAccent: {
      badgeBg: "bg-purple-50",
      badgeText: "text-purple-800",
      borderAccent: "border-purple-300",
      tagBg: "bg-purple-100 text-purple-900",
      gradientGlow: "from-purple-500/15 via-violet-500/5 to-transparent",
      accentColorHex: "#9333ea",
    },
    schedule: {
      duration: "10 Days High-Income Specialized Track",
      days: "Monday to Saturday (Intensive Clinical Sessions)",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students with Sterile Clinical Workstation",
      mode: "Offline Practical Training in Indore",
    },
    pricingInfo: {
      feeStructure: "High-ROI Certification Fee with Instant Inquiries",
      installmentAvailable: true,
      kitInclusionValue: "Latex practice skins, measurement calipers & demonstration tools included",
      consultation: "Lifetime Free Clinical Support for Complex Treatments",
    },
    trainingBehavior: {
      step1: "Facial Geometry, Golden Ratio Brow Mapping & Skin Depth Science",
      step2: "Microblading Hair-Stroke & Ombre Powder Shading on Synthetic Latex",
      step3: "Dark Lip Neutralization & Color Correction Theory",
      step4: "Supervised Live Model Microblading, Lash Extensions & BB Glow Execution",
    },
    overview:
      "A specialized 10-day high-income track in semi-permanent makeup. Master eyebrow microblading, ombre powder brows, dark lip neutralizing, lash extensions, and BB glow skin rejuvenation.",
    modules: [
      "Eyebrows Microblading & Micro-Shading",
      "Combination Brows & Ombre Powder Brows",
      "Lip Neutralizing for Dark Lips & Lip Tinting",
      "Semi-Permanent Eyelash Extensions (Classic & Volume)",
      "Beauty Mole Creation",
      "BB Glow Skin Radiance Treatments",
      "Hair Extensions Application & Maintenance",
      "Hydra Facial, High Frequency & Ultrasound Techniques",
    ],
    keyHighlights: [
      "High-Income Skill in 10 Days",
      "Safety, Hygiene & Needle Depth Mastery",
      "Supervised Demonstrations on Live Models",
      "Accredited Certification & Lifetime Consultation",
    ],
    kitProvided: [
      "PMU Demonstration Tools & Sterile Needles",
      "Latex Practice Skin Sheets & Measurement Calipers",
      "Safety, Pigment & Sterilization Guidebook",
    ],
    practicalTraining: {
      title: "Latex Sheet Precision to Live Model Execution",
      description:
        "Students first master stroke symmetry on synthetic latex skin before performing supervised microblading, lip tinting, and lash extensions on live models.",
      features: [
        "Latex Skin Depth & Stroke Practice",
        "Color Pigment Mixing & Neutralization",
        "Live Model Supervised PMU Sessions",
      ],
    },
    galleryHeading: "Inside Our PMU, Microblading & Aesthetic Suite",
    gallerySubtitle:
      "Master golden-ratio brow mapping, microblading hair-strokes, ombre powder shading, dark lip neutralization, and lash extensions in Indore.",
    galleryImages: [
      {
        src: "/images/services/pmu_lip_watercolor_tint.jpg",
        alt: "Dark Lip Neutralization and Warm Pigments",
        title: "Dark Lip Neutralization & Watercolor Tint",
        subtitle: "Orange and warm-base pigment formulation to correct hyperpigmented melanin lips.",
        tag: "Lip Neutralizing",
        aspect: "wide",
        isFeatured: true,
        shapeOrType: "Watercolor Lip Shading",
        colorOrShade: "Warm Peach & Coral Neutralizer",
        priceRange: "₹8,000 – ₹16,000 / Treatment",
        duration: "90 – 120 Mins",
        benefits: [
          "Corrects dark, cool, melanin-rich lip tones into youthful blush pink",
          "Gives defined lip borders and luscious watercolor tint for 2+ years",
          "High demand procedure across Indian skin tones"
        ],
        keyTools: ["Digital PMU Rotary Machine", "Warm Orange Neutralizer", "3-Round Needle"],
        clientDemand: "Enormous Market Demand in India"
      },
      {
        src: "/images/services/pmu_brow_mapping.jpg",
        alt: "Golden Ratio Caliper Eyebrow Mapping",
        title: "Golden Ratio Caliper Brow Mapping",
        subtitle: "Precise measurement calipers and mapped strings for custom facial symmetry.",
        tag: "Brow Mapping",
        aspect: "portrait",
        shapeOrType: "Golden Ratio Facial Symmetry Mapping",
        colorOrShade: "Custom Arch Architectural Mapping",
        priceRange: "Included in Brow Service",
        duration: "20 Mins",
        benefits: [
          "Ensures mathematically perfect symmetry matching unique bone structure",
          "Client approval of mapped shape before making a single cut",
          "Builds total client confidence and prevents shape asymmetry"
        ],
        keyTools: ["Golden Ratio Caliper", "Inked Mapping String", "White Mapping Pencil"],
        clientDemand: "Core Precision Protocol"
      },
      {
        src: "/images/services/pmu_ombre_powder.jpg",
        alt: "Ombre Powder Brows Digital Shading",
        title: "Ombre Powder Brows & Micro-Shading",
        subtitle: "Pixelated digital machine shading creating soft makeup-gradient brow fullness.",
        tag: "Ombre Brows",
        aspect: "landscape",
        shapeOrType: "Ombre Powder Shading",
        colorOrShade: "Espresso & Ash Brown Mineral Pigments",
        priceRange: "₹7,000 – ₹14,000 / Procedure",
        duration: "90 Mins",
        benefits: [
          "Soft powdery gradient that is lighter at front and sharper at the tail",
          "Ideal for oily and mature skin types where microblading fades faster",
          "Longest lasting brow technique (up to 3 years)"
        ],
        keyTools: ["Wireless PMU Pen", "1RL Micro Cartridge", "Mineral Pigments"],
        clientDemand: "Versatile All-Skin-Type Solution"
      },
      {
        src: "/images/services/pmu_silicone_latex_sheet.jpg",
        alt: "Synthetic Silicone Latex Skin Practice",
        title: "Synthetic Latex Skin Depth Practice",
        subtitle: "Practicing stroke curvature, angle consistency, and depth pressure on silicone sheets.",
        tag: "Latex Practice",
        aspect: "portrait",
        shapeOrType: "Synthetic Latex Dexterity Training",
        colorOrShade: "Epidermal Needle Calibration",
        priceRange: "Included in Kit",
        duration: "Unlimited Practice",
        benefits: [
          "Mastering precise epidermal needle depth without cutting the dermis",
          "Building smooth hand curvature on 3D contoured silicone faces",
          "Free latex practice sheets provided for unlimited hands-on drills"
        ],
        keyTools: ["3D Silicone Practice Face", "Practice Latex Sheets", "Micro Pigments"],
        clientDemand: "Crucial Muscle Memory Training"
      },
      {
        src: "/images/services/pmu_membrane_cartridges.jpg",
        alt: "Sterile Single Use PMU Cartridge Needles",
        title: "Single-Use Sterile Cartridge Safety",
        subtitle: "Medical-grade sterilization, membrane safety cartridges, and pre-treatment numbing.",
        tag: "Safety Protocol",
        aspect: "landscape",
        shapeOrType: "EO Gas Sterile Needle Safety",
        colorOrShade: "Single-Use 1RL / 3RL Cartridges",
        priceRange: "Medical Standard",
        duration: "Pre-Treatment Setup",
        benefits: [
          "Safety membrane prevents pigment backflow into the motor",
          "EO gas sterilized single-use blister packaging for zero infection risk",
          "Medical compliance adhering to international PMU safety standards"
        ],
        keyTools: ["EO Sterilized Cartridges", "Barrier Film Tape", "Medical Sharps Container"],
        clientDemand: "Medical Hygiene Standard"
      },
      {
        src: "/images/services/pmu_lash_volume_extensions.jpg",
        alt: "Semi Permanent Eyelash Extensions Application",
        title: "Semi-Permanent Eyelash Extensions",
        subtitle: "Classic 1-on-1 and 3D Russian volume lash isolation and medical adhesive bonding.",
        tag: "Lash Extensions",
        aspect: "square",
        shapeOrType: "Classic 1-on-1 & 3D Russian Volume",
        colorOrShade: "Jet Black Silk Lashes",
        priceRange: "₹3,000 – ₹6,000 / Set",
        duration: "60 – 90 Mins",
        benefits: [
          "Adds dramatic curl, length, and volume without mascara",
          "Painless medical-grade adhesive bonding that lasts 4-6 weeks",
          "High recurring monthly refill revenue for salons"
        ],
        keyTools: ["Curved Lash Tweezers", "Silk Mink Lashes", "Medical Grade Cyanoacrylate Glue"],
        clientDemand: "High Monthly Recurring Salon Service"
      },
    ],
    benefits: [
      "Charge premium rates per PMU treatment",
      "Solve client concerns like sparse brows and dark lips permanently",
      "Accredited credentials accepted nationally",
      "Lifetime consultation for complex pigment matching",
    ],
    faqs: [
      {
        q: "Is prior experience required to learn Microblading?",
        a: "No prior experience is necessary. We teach facial measurement geometry, skin anatomy, and needle depth control from the basics.",
      },
      {
        q: "What products are provided during training?",
        a: "Latex practice skins, measurement tools, sterile needles, and pigments are supplied during practical sessions.",
      },
    ],
    idealFor: "Cosmetologists, beauty therapists, and makeup artists wanting to master top-tier semi-permanent enhancements.",
  },

  // 7. SKINCARE (Comprehensive Skin Care & Spa Course)
  {
    slug: "skincare",
    title: "Comprehensive Skin Care & Spa Course",
    shortTitle: "Skin Care & Salon Spa",
    category: "Skin & Spa",
    durationBadge: "Foundational Diploma",
    heroTagline: "Complete Salon Skin Care, Spa Therapies & Facials",
    metaTitle: "Comprehensive Skin Care & Spa Course in Indore | Yashree Institute",
    metaDescription: "Master 20+ essential salon services: facials, cleanups, waxing, body spa polishing, head therapy, and organic recipes at Yashree Institute Indore.",
    posterImage: "/images/skin_care_course.jpg",
    heroImage: "/images/services/spa_facial_acupressure.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 7 & 15)",
    themeAccent: {
      badgeBg: "bg-teal-50",
      badgeText: "text-teal-800",
      borderAccent: "border-teal-300",
      tagBg: "bg-teal-100 text-teal-900",
      gradientGlow: "from-teal-500/15 via-emerald-500/5 to-transparent",
      accentColorHex: "#0d9488",
    },
    schedule: {
      duration: "Comprehensive Foundational Diploma (20+ Services)",
      days: "Monday to Saturday",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Max 25 Students for Dedicated Hands-on Guidance",
      mode: "Offline Classroom Training in Indore",
    },
    pricingInfo: {
      feeStructure: "Affordable Entry-Level Diploma with Easy Payment Plans",
      installmentAvailable: true,
      kitInclusionValue: "Beautician apron, tools & organic recipe guidebook provided free",
      consultation: "Lifetime Free Technical Consultation for Parlour Setup",
    },
    trainingBehavior: {
      step1: "Skin Types, Hygiene, Cleanups, D-Tan & Professional Bleaching Protocols",
      step2: "Threading, Face Waxing & Body Waxing (Normal, Cream, Strip Wax)",
      step3: "Signature Facial Massage Strokes & Pressure Point Relaxation",
      step4: "Body Spa Polishing, Head Therapy, Hair Spa & Homemade Organic Blends",
    },
    overview:
      "A complete foundational diploma covering 20+ core salon skin and spa services. From threading, cleanups, and D-tan to signature facials, body polishing, head massage therapies, and homemade organic blends.",
    modules: [
      "Threading (Eyebrows, Upper Lips, Forehead, Chin)",
      "Cleanups, D-Tan & Professional Bleach Application",
      "Signature Facials for All Skin Types",
      "Body Waxing & Face Waxing (Oil, Normal, Cream, Bikini Wax)",
      "Body Spa Polishing & Body Therapy Massage",
      "Head Oil Massage & Head Therapy Massage",
      "Hair Spa Conditioning Protocols",
      "Manicure & Pedicure Spa Procedures",
      "Homemade Organic Facials & Homemade SPA Blends",
    ],
    keyHighlights: [
      "Covers 20+ Essential Daily Salon Services",
      "100% Practical Hands-on Training on Live Models",
      "Only 25 Students per Batch for Personal Attention",
      "Official Course Certificate & Recipe Guide",
    ],
    kitProvided: [
      "Beautician Apron & Practice Tools",
      "Skin Care Formulation Guide & Organic Recipe Notes",
      "Facial & Spa Protocol Reference Handbook",
    ],
    practicalTraining: {
      title: "Hands-on Client Protocol & Spa Techniques",
      description:
        "Master correct pressure points, hygienic waxing methods, cleanup steps, and specialized massage strokes on real clients under tutor supervision.",
      features: [
        "Hygienic Waxing & Threading Sessions",
        "Step-by-Step Signature Facials",
        "Relaxing Body & Head Spa Therapies",
      ],
    },
    galleryHeading: "Inside Our Salon Skincare & Spa Therapy Training",
    gallerySubtitle:
      "Hands-on mastery of 20+ foundational services including cleanups, D-Tan, signature facials, body spa polishing, and organic blends in Indore.",
    galleryImages: [
      {
        src: "/images/services/spa_facial_acupressure.jpg",
        alt: "Signature Facial Massage and Lymphatic Drainage",
        title: "Signature Facial Massage Therapy",
        subtitle: "Acupressure lymphatic drainage, effleurage lifting strokes, and deep skin rejuvenation.",
        tag: "Facial Massage",
        aspect: "wide",
        isFeatured: true,
        shapeOrType: "Acupressure Lymphatic Drainage",
        colorOrShade: "Botanical Vitamin E Creams",
        priceRange: "₹1,500 – ₹3,500 / Facial",
        duration: "45 – 60 Mins",
        benefits: [
          "Stimulates facial blood circulation and drains lymphatic puffiness",
          "Firms sagging facial muscles with signature upward lifting strokes",
          "Foundational high-retention salon service performed daily"
        ],
        keyTools: ["Facial Massage Creams", "Jade Rollers", "Gua Sha Stones"],
        clientDemand: "Core Essential Daily Salon Service"
      },
      {
        src: "/images/services/spa_dtan_cleanse_pack.jpg",
        alt: "D-Tan Brightening Mask and Deep Cleansing",
        title: "D-Tan & Brightening Cleansing",
        subtitle: "Active tan removal formulations, pore de-clogging, and soothing thermal cooling packs.",
        tag: "D-Tan Protocol",
        aspect: "portrait",
        shapeOrType: "Deep Pore Exfoliation & Pack",
        colorOrShade: "Kojic Acid & Clove Brightening Pack",
        priceRange: "₹800 – ₹1,800 / Cleanup",
        duration: "30 Mins",
        benefits: [
          "Instantly reverses sun tan, hyperpigmentation, and dullness",
          "Removes deep trapped dirt, blackheads, and environmental pollutants",
          "High client volume especially during summer and wedding preps"
        ],
        keyTools: ["D-Tan Pack with Kojic Acid", "Face Sponge", "Cooling Toner"],
        clientDemand: "High-Volume Daily Salon Walk-in"
      },
      {
        src: "/images/services/spa_ayurvedic_head_massage.jpg",
        alt: "Relaxing Warm Oil Head Massage Therapy",
        title: "Relaxing Head Massage & Hair Spa",
        subtitle: "Deep scalp pressure point massage, warm oil therapy, and cuticle conditioning steam.",
        tag: "Head Spa",
        aspect: "square",
        shapeOrType: "Ayurvedic Scalp Shiro-Abhyanga",
        colorOrShade: "Warm Bhringraj & Brahmi Herbal Oils",
        priceRange: "₹600 – ₹1,500 / Session",
        duration: "30 Mins",
        benefits: [
          "Relieves tension, reduces stress headaches, and improves sleep",
          "Stimulates scalp hair follicles to reduce hair fall",
          "Popular add-on service during regular salon visits"
        ],
        keyTools: ["Warm Herbal Ayurvedic Oils", "Scalp Massager", "Hair Steamer"],
        clientDemand: "High Client Satisfaction & Loyalty"
      },
      {
        src: "/images/services/spa_body_polishing_scrub.jpg",
        alt: "Body Spa Polishing and Salt Scrub Therapy",
        title: "Body Spa Polishing & Scrub Therapy",
        subtitle: "Aromatic sea salt scrubs, dry brush exfoliation, and hydrating body wrap applications.",
        tag: "Body Polishing",
        aspect: "landscape",
        shapeOrType: "Full Body Sea Salt Exfoliation",
        colorOrShade: "Aromatic Essential Oils & Salt Granules",
        priceRange: "₹3,500 – ₹7,000 / Spa Package",
        duration: "75 – 90 Mins",
        benefits: [
          "Exfoliates dry dead skin cells across back, arms, and legs",
          "Deeply hydrates and restores baby-soft skin texture",
          "Top bridal pre-wedding package component"
        ],
        keyTools: ["Dead Sea Salt Scrub", "Body Polishing Oil", "Thermal Wrap Sheets"],
        clientDemand: "Top Pre-Bridal Package Component"
      },
      {
        src: "/images/services/spa_hygienic_waxing_station.jpg",
        alt: "Hygienic Waxing and Threading Standards",
        title: "Hygienic Waxing & Threading Protocols",
        subtitle: "Painless eyebrow threading techniques and strip/rica wax temperature control.",
        tag: "Wax & Threading",
        aspect: "portrait",
        shapeOrType: "Painless Rica & Liposoluble Waxing",
        colorOrShade: "White Chocolate & Aloe Vera Wax",
        priceRange: "₹500 – ₹2,500 / Service",
        duration: "20 – 45 Mins",
        benefits: [
          "Mastering painless rapid-pull waxing without skin peeling or burns",
          "Painless eyebrow shaping and upper lip threading with organic cotton threads",
          "Steady, reliable daily cash flow for salons and home parlours"
        ],
        keyTools: ["Rica & Honey Wax Heater", "Disposable Wax Strips", "Cotton Thread 40"],
        clientDemand: "Daily Foundation of Parlour Cash Flow"
      },
      {
        src: "/images/services/spa_ozone_steam_towel.jpg",
        alt: "Facial Steaming and Warm Herbal Towels",
        title: "Facial Steaming & Warm Towel Rituals",
        subtitle: "Ozone steam pore dilation and comforting aromatherapy warm towel compresses.",
        tag: "Spa Rituals",
        aspect: "landscape",
        shapeOrType: "Aromatherapy Ozone Steaming",
        colorOrShade: "Lavender & Eucalyptus Steam",
        priceRange: "Included in Spa Facial",
        duration: "15 Mins",
        benefits: [
          "Softens stubborn blackheads and comedones for painless extraction",
          "Infuses relaxing essential oil vapors (Lavender, Eucalyptus, Tea Tree)",
          "Provides a luxurious five-star spa ambiance for clients"
        ],
        keyTools: ["Ozone Facial Steamer", "Towel Warmer Cabinet", "Aromatherapy Oils"],
        clientDemand: "Five-Star Luxury Experience Enhancer"
      },
      {
        src: "/images/services/spa_foot_pedicure_therapy.jpg",
        alt: "Spa Manicure and Pedicure Foot Care",
        title: "Spa Manicure & Pedicure Therapies",
        subtitle: "Dead callus filing, cuticle treatment, and relaxing foot reflexology massage.",
        tag: "Mani-Pedi Spa",
        aspect: "square",
        shapeOrType: "Deluxe Hydro-Jet Foot Spa",
        colorOrShade: "Dead Sea Mineral Soak & Polish",
        priceRange: "₹1,200 – ₹2,500 / Mani-Pedi",
        duration: "45 – 60 Mins",
        benefits: [
          "Removes hard cracked heel calluses and restores smooth soles",
          "Reflexology pressure points on feet relieve body fatigue",
          "Essential recurring hygiene treatment for men and women"
        ],
        keyTools: ["Foot Spa Tub with Bubble Jet", "Callus Scraper & Rasp", "Cuticle Pusher"],
        clientDemand: "Steady Monthly Recurring Service"
      },
    ],
    benefits: [
      "Master all fundamental services required to run or work in a successful parlour",
      "Gain confidence through direct practice on live models",
      "Receive official certificate and organic recipe guide",
      "100% placement support in established salon chains",
    ],
    faqs: [
      {
        q: "Is this course suitable for beginners?",
        a: "Yes, it is the perfect foundational course for anyone starting from zero in the beauty and salon industry.",
      },
      {
        q: "Will I learn organic and homemade facials?",
        a: "Yes, the syllabus includes special sessions on organic skin blends and natural DIY facial recipes.",
      },
    ],
    idealFor: "Beginners, homemakers, and students looking to establish a strong foundational career in beauty parlours and salons.",
  },

  // 8. COSMETOLOGY (Advanced Cosmetology Program)
  {
    slug: "cosmetology",
    title: "Advanced Cosmetology Program",
    shortTitle: "Cosmetology Academy",
    category: "Full Diploma",
    durationBadge: "Comprehensive Diploma",
    heroTagline: "Complete Cosmetology, Hair, Skin & Salon Business Mastery",
    metaTitle: "Cosmetology Academy Program in Indore | Yashree Institute",
    metaDescription: "Indore's premier Cosmetology academy diploma mentored by Celebrity Artist Deepika Patidar. 100% practical training in skin, hair, PMU, makeup, and salon management.",
    posterImage: "/images/welcome_poster.jpg",
    heroImage: "/images/services/cosmet_salon_rotations.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 2, 3 & 17)",
    themeAccent: {
      badgeBg: "bg-amber-50",
      badgeText: "text-[#b8860b]",
      borderAccent: "border-amber-400",
      tagBg: "bg-[#f2c301]/25 text-zinc-950",
      gradientGlow: "from-[#f2c301]/25 via-amber-500/10 to-transparent",
      accentColorHex: "#d4af37",
    },
    schedule: {
      duration: "All-in-One Comprehensive Cosmetology Diploma (8 Disciplines)",
      days: "Monday to Saturday (Full Salon Rotations)",
      timings: "Morning: 10:00 AM – 1:00 PM | Afternoon: 2:00 PM – 5:00 PM",
      batchSize: "Strictly 25 Students per Batch for 1-on-1 Guidance",
      mode: "Offline Classroom Training + Studio Shoots + Online Theory",
    },
    pricingInfo: {
      feeStructure: "Comprehensive Diploma with Full Multi-Discipline Kit Included",
      installmentAvailable: true,
      kitInclusionValue: "Complete student vanity, dummy heads, brushes & tools included free",
      consultation: "Lifetime Free Mentorship & Salon Business Advisory",
    },
    trainingBehavior: {
      step1: "Full Rotations across Skin, Hair, Makeup, Nails, PMU & Haircuts",
      step2: "Client Management, Stock Inventory, Product Formulation & Salon Pricing",
      step3: "Complete Supervised Transformations on Real Bridal & Medi-Spa Clients",
      step4: "Convocation Ceremony, Global Certificate Award & 100% Placement Support",
    },
    overview:
      "The flagship all-inclusive diploma combining all 8 beauty disciplines: Skin Care, Hair Artistry, Makeup, PMU, Nail Extensions, Hair Cutting, Aesthetic Care, and Salon Management under Deepika Patidar.",
    modules: [
      "Comprehensive Skin Analysis & Medi-Facial Science",
      "Basic to Pro Bridal & High-Fashion Makeup Artistry",
      "Hair Styling, Chemical Treatments, Keratin & Nanoplastia",
      "Basic to Advanced Haircuts, Sectioning & Angle Precision",
      "Gel & Acrylic Nail Extensions with 20+ Art Designs",
      "Permanent Makeup (PMU) & Microblading Foundations",
      "Client Management, Stock Inventory & Salon Entrepreneurship",
      "Studio Camera Portfolio Lighting & Social Media Branding",
    ],
    keyHighlights: [
      "All-in-One Comprehensive Cosmetology Diploma",
      "Mentored by Celebrity Makeup Artist Deepika Patidar",
      "Small Batches of 25 Students for 1-on-1 Guidance",
      "100% Placement Guarantee & Lifetime Free Consultation",
    ],
    kitProvided: [
      "Complete Multi-Discipline Student Vanity Kit",
      "Hair Styling Dummy Head with Stand",
      "Make-up Brush Vanity Box & Nail Art Tool Set",
      "Comprehensive Printed Theory Manuals & Protocols",
    ],
    practicalTraining: {
      title: "360-Degree Salon & Clinical Rotations",
      description:
        "Students rotate through skin, makeup, hair, nail, and aesthetic stations, gaining all-round proficiency to run their own salon business independently.",
      features: [
        "Multi-Discipline Real Client Demonstrations",
        "Complete Bridal & Aesthetic Transformations",
        "Business, Pricing & Salon Launch Incubation",
      ],
    },
    galleryHeading: "Inside Our 360° Cosmetology Academy Experience",
    gallerySubtitle:
      "An immersive journey across all 8 beauty disciplines, salon rotations, live masterclasses, convocation ceremonies, and entrepreneurship in Indore.",
    galleryImages: [
      {
        src: "/images/services/cosmet_salon_rotations.jpg",
        alt: "Comprehensive Cosmetology 360 Salon Rotations",
        title: "360° Salon & Clinical Rotation Practice",
        subtitle: "Multi-discipline mastery across skin, hair, makeup, PMU, and nails under master cosmetologists.",
        tag: "Flagship Academy",
        aspect: "wide",
        isFeatured: true,
        shapeOrType: "All-in-One Cosmetology Rotations",
        colorOrShade: "Multi-Discipline Professional Stations",
        priceRange: "High-Ticket Complete Salon Career",
        duration: "Comprehensive Diploma Track",
        benefits: [
          "Complete mastery of all 130+ salon and medi-spa services",
          "Equips you to launch and manage a complete luxury unisex salon",
          "Highest career versatility and maximum earning potential"
        ],
        keyTools: ["Full Salon Equipment", "Multi-Discipline Stations", "Client Management Systems"],
        clientDemand: "All-in-One Cosmetology Leader"
      },
      {
        src: "/images/services/cosmet_bridal_suite.jpg",
        alt: "Bridal Transformation Studio Suite",
        title: "Bridal Transformation Studio",
        subtitle: "Complete head-to-toe bridal styling, jewelry matching, and camera-ready prep.",
        tag: "Bridal Suite",
        aspect: "portrait",
        shapeOrType: "Complete Bridal Transformation Suite",
        colorOrShade: "Royal Head-to-Toe Indian Bridal Styling",
        priceRange: "₹25,000 – ₹75,000 / Bridal Package",
        duration: "Full Day Wedding Suite",
        benefits: [
          "Holistic bridal prep: HD makeup, hair updo, saree draping, and nail art",
          "Studio lighting calibration for high-definition bridal photography",
          "High-ticket complete bridal packages"
        ],
        keyTools: ["Studio Ring Lights", "Bridal Vanity Station", "Dupatta Setting Pins"],
        clientDemand: "High-Ticket Bridal Transformation"
      },
      {
        src: "/images/services/cosmet_classroom_stations.jpg",
        alt: "Cosmetology Classroom Workstations in Indore",
        title: "Equipped Cosmetology Workstations",
        subtitle: "Individual student stations for hair sectioning, facial therapy, and nail sculpting.",
        tag: "Academy Stations",
        aspect: "landscape",
        shapeOrType: "Individual Student Workstation Setup",
        colorOrShade: "Modern Indore Academy Classrooms",
        priceRange: "Included in Course",
        duration: "Daily Academy Rotations",
        benefits: [
          "Strict 25-student cap ensuring 1-on-1 daily mentorship",
          "State-of-the-art Indore campus with individual mirrors and power stations",
          "Safe, supportive, and empowering environment for women entrepreneurs"
        ],
        keyTools: ["Ergonomic Salon Chairs", "Styling Mirrors", "UV Sanitizers"],
        clientDemand: "Premium Learning Infrastructure"
      },
      {
        src: "/images/services/cosmet_tools_vanity.jpg",
        alt: "Comprehensive Cosmetology Student Vanity Kit",
        title: "All-in-One Professional Student Kit",
        subtitle: "Multi-discipline vanity box, brushes, dummy heads, shears, and nail tools provided free.",
        tag: "Starter Vanity",
        aspect: "square",
        shapeOrType: "Full Student Vanity Suitcase",
        colorOrShade: "Multi-Discipline Tools & Cosmetics",
        priceRange: "Included Free in Diploma",
        duration: "Provided upon Enrollment",
        benefits: [
          "Includes practice tools for hair, makeup, nails, and skincare free of charge",
          "High-grade equipment ready for commercial client use after graduation",
          "Saves students thousands in initial salon setup costs"
        ],
        keyTools: ["Multi-Level Vanity Box", "Pro Brush Set", "Dummy Heads & Scissors"],
        clientDemand: "Comprehensive Student Inclusions"
      },
      {
        src: "/images/services/cosmet_hair_science.jpg",
        alt: "Hair Science and Chemical Texture Station",
        title: "Hair Chemistry & Texturizing Station",
        subtitle: "Keratin infusions, balayage color melts, and precision scissor haircutting.",
        tag: "Hair Chemistry",
        aspect: "portrait",
        shapeOrType: "Advanced Hair Chemistry & Cutting Desk",
        colorOrShade: "Chemical Formulations & Balayage",
        priceRange: "High-Demand Salon Track",
        duration: "Chemical Module",
        benefits: [
          "Expertise in chemical damage repair, Nanoplastia, and balayage colors",
          "Mastery of modern European and Indian hair cutting techniques",
          "High salon client retention for chemical and haircutting services"
        ],
        keyTools: ["Keratin Thermal Irons", "Color Formulation Whisk", "Pro Scissors"],
        clientDemand: "Top Salon Service Earner"
      },
      {
        src: "/images/services/cosmet_skin_clinical.jpg",
        alt: "Clinical Aesthetics and Skin Care Station",
        title: "Clinical Aesthetics & Medi-Spa Station",
        subtitle: "Hydra facials, diamond dermabrasion, and signature acupressure skin treatments.",
        tag: "Skin Clinical",
        aspect: "landscape",
        shapeOrType: "Medi-Spa & Skin Clinical Desk",
        colorOrShade: "Clinical Device Rotations",
        priceRange: "Medi-Spa Track",
        duration: "Skin Clinical Module",
        benefits: [
          "Combines clinical device medi-facials with relaxing organic spa therapies",
          "Treats client skin concerns: acne, pigmentation, aging, and tanning",
          "Accredited certifications valid nationally and internationally"
        ],
        keyTools: ["Hydra Vacuum Unit", "LED Dome", "Signature Facial Massage Kits"],
        clientDemand: "High Client Retention & Revisit Rate"
      },
      {
        src: "/images/services/cosmet_nail_station.jpg",
        alt: "Nail Extensions and Art Practice Desk",
        title: "Nail Extension & Art Desk",
        subtitle: "Gel tip overlays, acrylic sculpting, chrome mirror art, and UV lamp curing.",
        tag: "Nail Studio",
        aspect: "square",
        shapeOrType: "Dedicated Nail Bar Station",
        colorOrShade: "UV Polygel & 20+ Art Catalogs",
        priceRange: "Nail Studio Track",
        duration: "Nail Module",
        benefits: [
          "Rapid-growth nail bar skills integrated into full cosmetology diploma",
          "Mastering 20+ viral nail art techniques and safe e-file refills",
          "Adds high-margin nail stations to your salon floor plan"
        ],
        keyTools: ["LED UV Curing Lamps", "Acrylic Brushes", "Chrome & Foil Art Sets"],
        clientDemand: "High Margin Add-On Salon Service"
      },
      {
        src: "/images/services/cosmet_live_demo.jpg",
        alt: "Live Cosmetology Masterclass Demonstration",
        title: "Live Demonstrations & Salon Business",
        subtitle: "Client consultations, inventory management, treatment pricing, and salon launch guidance.",
        tag: "Salon Business",
        aspect: "landscape",
        shapeOrType: "Business Incubation & Live Demo Stage",
        colorOrShade: "Salon Launch Guidance",
        priceRange: "Business Module",
        duration: "Incubation Track",
        benefits: [
          "Business incubation: how to price services, manage staff, and buy salon stock",
          "Social media reel shooting, lighting, and client booking funnels",
          "100% placement support and lifetime advisory with Deepika Patidar"
        ],
        keyTools: ["POS Billing Software Guide", "Studio Lighting", "Portfolio Cameras"],
        clientDemand: "Complete Salon Entrepreneurship Track"
      },
    ],
    benefits: [
      "Become a complete 360-degree beauty professional capable of handling all 130+ salon services",
      "Launch your own independent beauty parlour or aesthetic studio",
      "Globally recognized diploma awarded at annual convocation",
      "Guaranteed placement assistance and lifetime business advisory",
    ],
    faqs: [
      {
        q: "What all is included in this comprehensive diploma?",
        a: "It covers all 8 core disciplines: Skin, Hair, Makeup, Nails, PMU, Haircuts, Aesthetics, and Salon Business Management.",
      },
      {
        q: "Are all practice kits included?",
        a: "Yes, complete practice kits for hair, makeup, nails, and skincare are supplied during the course.",
      },
    ],
    idealFor: "Students aspiring to become salon owners, celebrity artists, and all-round certified cosmetology leaders.",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
