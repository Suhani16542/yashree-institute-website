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
  benefits: string[];
  faqs: { q: string; a: string }[];
  idealFor: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
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
    heroImage: "/images/cosmetology_training_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 16)",
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
    heroImage: "/images/makeup_training_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 8 & 14)",
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
    heroImage: "/images/hair_training_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 9)",
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
    heroImage: "/images/hair_chemical_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 10 & 11)",
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
    heroImage: "/images/nail_training_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 12)",
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
    heroImage: "/images/pmu_procedure_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 13)",
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
    heroImage: "/images/skincare_spa_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 7)",
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
    heroImage: "/images/cosmetology_training_hero.jpg",
    pdfReference: "Official Curriculum from Yashree Institute PDF (Page 2, 3 & 17)",
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
