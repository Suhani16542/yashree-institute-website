export interface GalleryItem {
  id: string;
  title: string;
  category: "Celebrity Makeup" | "Awards & Seminars" | "Student Convocation" | "Practical Training" | "Salon & Studio";
  image: string;
  caption: string;
  isFeatured?: boolean;
  date?: string;
  likes?: number;
}

export const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "award-bhopal-2026",
    title: "Business & Beauty Icon Award 2026 — Bhopal",
    category: "Awards & Seminars",
    image: "/images/award_ceremony_team.jpg",
    caption: "Deepika Patidar & Yashree Institute leadership felicitated on national stage with the prestigious Business & Beauty Icon Award 2026 in Bhopal.",
    isFeatured: true,
    date: "2026-02-15",
  },
  {
    id: "founder-national-stage",
    title: "Founder Award Presentation & Felicitations",
    category: "Awards & Seminars",
    image: "/images/founder_award_stage.png",
    caption: "Deepika Patidar honored on national stage for transformative contributions to professional cosmetology education and women empowerment.",
    isFeatured: true,
    date: "2026-01-20",
  },
  {
    id: "student-convocation-2026",
    title: "Grand Annual Student Convocation & Certification",
    category: "Student Convocation",
    image: "/images/students_convocation.jpg",
    caption: "Indore campus convocation: official diplomas & certification kits awarded to graduating students taking off in salon & freelance careers.",
    isFeatured: true,
    date: "2026-02-01",
  },
  {
    id: "graduating-artists",
    title: "Graduating Certified Beauty Artists Batch",
    category: "Student Convocation",
    image: "/images/students_graduating.jpg",
    caption: "Celebration of success: students proudly holding their authorized certifications after completing 100% practical training.",
    date: "2026-01-28",
  },
  {
    id: "celeb-makeup-signature",
    title: "Celebrity Red-Carpet & Bridal Transformation",
    category: "Celebrity Makeup",
    image: "/images/celebrity_makeup.jpg",
    caption: "Signature bridal HD glamour look crafted by Deepika Patidar. Flawless base, bespoke eye artistry, and royal styling.",
    isFeatured: true,
    date: "2026-02-10",
  },
  {
    id: "celeb-look-1",
    title: "Royal Indian Bridal Haute Couture Look",
    category: "Celebrity Makeup",
    image: "/images/celeb_makeup_1.jpg",
    caption: "Intricate traditional bridal styling with jewelry alignment, dupatta draping, and waterproof long-stay base.",
    date: "2026-02-05",
  },
  {
    id: "celeb-look-2",
    title: "Contemporary Reception & Cocktail Glamour",
    category: "Celebrity Makeup",
    image: "/images/celeb_makeup_2.jpg",
    caption: "High-fashion smokey eyes with nude lip gloss and modern textured waves for wedding reception events.",
    date: "2026-01-18",
  },
  {
    id: "celeb-look-3",
    title: "Editorial Fashion & Studio Lighting Shoot",
    category: "Celebrity Makeup",
    image: "/images/celeb_makeup_3.jpg",
    caption: "High-definition camera ready beauty makeup created during studio lighting and Instagram reel portfolio masterclass.",
    date: "2026-01-12",
  },
  {
    id: "seminar-stage-demo",
    title: "Live Masterclass Seminar & Keynote Speech",
    category: "Awards & Seminars",
    image: "/images/seminar_awards_grid.jpg",
    caption: "Live stage demonstrations, keynote speeches, hands-on masterclasses, and student felicitations.",
    date: "2026-01-15",
  },
  {
    id: "hands-on-practical-class",
    title: "Live Hands-on Clinical Training Session",
    category: "Practical Training",
    image: "/images/gallery_hands_on.jpg",
    caption: "Students practicing device handling, micro-needling, and facial hygiene under direct 1-on-1 faculty supervision.",
    date: "2026-02-12",
  },
  {
    id: "live-demo-mastery",
    title: "Live Model Step-by-Step Demonstration",
    category: "Practical Training",
    image: "/images/gallery_live_demo.jpg",
    caption: "Deepika Patidar demonstrating live blending, contouring, and precision brush strokes in front of students.",
    date: "2026-02-08",
  },
  {
    id: "academy-classroom-vibe",
    title: "Interactive Academy Workshop & Batch Training",
    category: "Practical Training",
    image: "/images/gallery_academy_class.jpg",
    caption: "Dedicated classroom sessions equipped with student vanity stations, mirrors, and individual practice kits.",
    date: "2026-01-25",
  },
  {
    id: "nail-studio-mastery",
    title: "Creative Gel & Acrylic 3D Nail Art Creations",
    category: "Salon & Studio",
    image: "/images/nail_art.jpg",
    caption: "Trendy ombré, chrome glitter, and extension creations crafted during the 15-day intensive nail studio masterclass.",
    date: "2026-02-02",
  },
  {
    id: "hair-artistry-buns",
    title: "Advanced Bridal Hairstyling & Juda Accessories",
    category: "Salon & Studio",
    image: "/images/hair_styling.jpg",
    caption: "Celebrity red-carpet buns, intricate fishtail braiding, and floral lehenga matching hair styling.",
    date: "2026-01-30",
  },
];
