export interface AcademyEvent {
  id: string;
  title: string;
  category: "Upcoming Workshop" | "Live Seminar" | "Annual Convocation" | "Masterclass" | string;
  date: string;
  day?: string;
  month?: string;
  year?: string;
  time: string;
  venue: string;
  instructor: string;
  seatsStatus: string;
  image: string;
  description: string;
  shortDescription?: string;
  fullDescription?: string;
  highlights: string[];
  isFeatured?: boolean;
  isPublished?: boolean;
  registrationUrl?: string;
  createdAt?: string;
}

export const INITIAL_EVENTS: AcademyEvent[] = [
  {
    id: "event-bridal-masterclass-2026",
    title: "National Bridal Makeup & HD Airbrush Masterclass 2026",
    category: "Masterclass",
    date: "25 March 2026",
    day: "25",
    month: "MAR",
    year: "2026",
    time: "10:00 AM – 5:00 PM (Full Day)",
    venue: "Main Auditorium, Yashree Institute Indore Campus",
    instructor: "Deepika Patidar (Celebrity Makeup Artist)",
    seatsStatus: "Only 12 Seats Left",
    image: "/images/celebrity_makeup.jpg",
    description: "An intensive full-day masterclass covering live royal bridal look creation, color theory undertone correction, camera-ready studio lighting, and portfolio reel shoots.",
    highlights: [
      "Live Step-by-Step Model Demo",
      "Authorized Masterclass Certificate",
      "Free Practice Cosmetics & Vanity Brushes",
      "1-on-1 Portfolio Photo Session",
    ],
    isFeatured: true,
  },
  {
    id: "event-cosmetology-seminar",
    title: "Central India Medi-Aesthetics & Non-Doctor Clinical Seminar",
    category: "Live Seminar",
    date: "12 April 2026",
    day: "12",
    month: "APR",
    year: "2026",
    time: "11:00 AM – 4:00 PM",
    venue: "Brilliant Convention Centre, Vijay Nagar, Indore",
    instructor: "Senior Aesthetic Cosmetologists & Deepika Patidar",
    seatsStatus: "Registrations Open",
    image: "/images/cosmetology_training_hero.jpg",
    description: "Discover the latest clinical aesthetic advancements: Hydra facial protocols, chemical peel depths, BB glow nano-needling, and salon clinic setup guidelines.",
    highlights: [
      "Hands-on Aesthetic Device Walkthrough",
      "Official Industry Seminar Certificate",
      "High-Ticket Clinic Setup Blueprint",
      "Lunch & Networking Included",
    ],
    isFeatured: true,
  },
  {
    id: "event-hair-chemical-workshop",
    title: "Advanced Hair Chemical, Nanoplastia & Balayage Workshop",
    category: "Upcoming Workshop",
    date: "28 April 2026",
    day: "28",
    month: "APR",
    year: "2026",
    time: "10:30 AM – 4:30 PM",
    venue: "Hair Studio Lab, Yashree Institute Indore",
    instructor: "Master Hair Stylist & Technical Educators",
    seatsStatus: "Max 20 Students",
    image: "/images/hair_chemical_hero.jpg",
    description: "Hands-on workshop covering the chemical pH scale, permanent straightening vs nanoplastia, botox infusion, and flawless root touch-up formulations.",
    highlights: [
      "Live Model Supervised Practice",
      "Chemical Product Formulations PDF",
      "Dummy Stand & Cutting Tools Provided",
      "Lifetime Faculty Consultation",
    ],
  },
  {
    id: "event-annual-convocation",
    title: "Grand Annual Student Convocation & Award Gala 2026",
    category: "Annual Convocation",
    date: "15 May 2026",
    day: "15",
    month: "MAY",
    year: "2026",
    time: "4:00 PM – 8:00 PM",
    venue: "Grand Ballroom, Indore",
    instructor: "Chief Dignitaries & Deepika Patidar",
    seatsStatus: "Graduates & Families",
    image: "/images/students_convocation.jpg",
    description: "Felicitating 500+ graduating students with government-recognized diplomas, trophy distribution, media coverage, and direct salon hiring campus drive.",
    highlights: [
      "Authorized Diploma Conferment",
      "Trophy & Excellence Medals",
      "Red Carpet Media & Press Coverage",
      "Direct Placement Interviews",
    ],
  },
];
