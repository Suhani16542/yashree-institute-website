export interface AcademyVideo {
  id: string;
  title: string;
  category: "Masterclasses & Demos" | "Student Practice & Reels" | "Awards & Ceremonies" | "Campus Tour & Facilities" | "Student Testimonials";
  videoUrl: string;
  embedUrl: string;
  thumbnail: string;
  description: string;
  duration?: string;
  isFeatured?: boolean;
  date?: string;
}

// Helper to convert youtube URLs to embeddable format
export function parseVideoEmbed(url: string): { embedUrl: string; thumbnail: string } {
  const trimmed = (url || "").trim();
  
  // YouTube standard or short
  const ytMatch = trimmed.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/i);
  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1];
    return {
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  }

  // Vimeo
  const vimeoMatch = trimmed.match(/vimeo\.com\/(\d+)/i);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
      thumbnail: "/images/makeup_training_hero.jpg",
    };
  }

  // Fallback direct URL or upload
  return {
    embedUrl: trimmed,
    thumbnail: "/images/makeup_training_hero.jpg",
  };
}

export const INITIAL_ACADEMY_VIDEOS: AcademyVideo[] = [
  {
    id: "video-bridal-makeup",
    title: "Signature Royal Bridal HD Makeup Masterclass",
    category: "Masterclasses & Demos",
    videoUrl: "https://www.youtube.com/watch?v=e_04ZrNroTo",
    embedUrl: "https://www.youtube.com/embed/e_04ZrNroTo?autoplay=1&rel=0",
    thumbnail: "/images/makeup_training_hero.jpg",
    description: "Deepika Patidar demonstrating the complete step-by-step royal bridal transformation: skin prep, undertone color wheel correction, cut-crease eye makeup, airbrush base, and lehenga matching dupatta setting.",
    duration: "6:15 min",
    isFeatured: true,
    date: "2026-02-20",
  },
  {
    id: "video-medi-facial",
    title: "Clinical Medi-Facial & Non-Doctor Aesthetic Procedure",
    category: "Masterclasses & Demos",
    videoUrl: "https://www.youtube.com/watch?v=GkXQ_dI47hU",
    embedUrl: "https://www.youtube.com/embed/GkXQ_dI47hU?autoplay=1&rel=0",
    thumbnail: "/images/cosmetology_training_hero.jpg",
    description: "Live student device demonstration: Hydra facial vacuum extraction, high-frequency anti-bacterial therapy, chemical peel neutralizer application, and Fitzpatrick profiling.",
    duration: "5:30 min",
    isFeatured: true,
    date: "2026-02-14",
  },
  {
    id: "video-convocation-highlights",
    title: "Grand Annual Student Convocation & Award Felicitations",
    category: "Awards & Ceremonies",
    videoUrl: "https://www.youtube.com/watch?v=r_sP9C_zFYo",
    embedUrl: "https://www.youtube.com/embed/r_sP9C_zFYo?autoplay=1&rel=0",
    thumbnail: "/images/students_convocation.jpg",
    description: "Indore campus annual graduation ceremony: official authorized diplomas presented on stage to 500+ certified beauty artists stepping into salon employment & independent studios.",
    duration: "7:45 min",
    isFeatured: true,
    date: "2026-02-05",
  },
  {
    id: "video-hair-chemical",
    title: "Hair Chemical Masterclass: Nanoplastia & Rebonding",
    category: "Masterclasses & Demos",
    videoUrl: "https://www.youtube.com/watch?v=f2nN-n8v6Zk",
    embedUrl: "https://www.youtube.com/embed/f2nN-n8v6Zk?autoplay=1&rel=0",
    thumbnail: "/images/hair_chemical_hero.jpg",
    description: "In-depth practical training on hair shaft structure, pH scale balancing, keratin infusion, botox therapy, and precision section holding on live models.",
    duration: "4:50 min",
    date: "2026-01-28",
  },
  {
    id: "video-nail-art-reel",
    title: "Gel Extensions & 3D Acrylic Nail Art Studio Reel",
    category: "Student Practice & Reels",
    videoUrl: "https://www.youtube.com/watch?v=aG9bWwI5v2k",
    embedUrl: "https://www.youtube.com/embed/aG9bWwI5v2k?autoplay=1&rel=0",
    thumbnail: "/images/nail_training_hero.jpg",
    description: "Quick viral reel of students mastering French ombré, chrome glitter powder, foil stamping, and UV/LED curing lamp techniques during the 15-day intensive track.",
    duration: "Reel (1:30 min)",
    date: "2026-01-22",
  },
  {
    id: "video-hair-buns",
    title: "Celebrity Red-Carpet Juda & Advanced Braiding",
    category: "Masterclasses & Demos",
    videoUrl: "https://www.youtube.com/watch?v=kYJvB1tYv-Y",
    embedUrl: "https://www.youtube.com/embed/kYJvB1tYv-Y?autoplay=1&rel=0",
    thumbnail: "/images/hair_training_hero.jpg",
    description: "Advanced styling covering messy bridal buns, donut padding volume, 3-strand Dutch braids, and traditional pearl accessory placements.",
    duration: "5:10 min",
    date: "2026-01-18",
  },
  {
    id: "video-campus-tour",
    title: "Indore Campus Walkthrough & Vanity Studio Lab",
    category: "Campus Tour & Facilities",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
    thumbnail: "/images/gallery_academy_class.jpg",
    description: "Explore our modern learning facility near Meghdoot Garden: Air-conditioned theory halls, individualized vanity makeup stations, mannequin dummy stands, and photography ring lights.",
    duration: "3:40 min",
    date: "2026-01-10",
  },
  {
    id: "video-pmu-microblading",
    title: "Permanent Eyebrows Microblading & PMU Demo",
    category: "Masterclasses & Demos",
    videoUrl: "https://www.youtube.com/watch?v=vVj_e4s5Qo4",
    embedUrl: "https://www.youtube.com/embed/vVj_e4s5Qo4?autoplay=1&rel=0",
    thumbnail: "/images/pmu_procedure_hero.jpg",
    description: "Precision needle depth, latex sheet mapping, ombré shading, and sterile color pigment infusion for permanent eyebrow artistry.",
    duration: "4:30 min",
    date: "2026-01-05",
  },
];
