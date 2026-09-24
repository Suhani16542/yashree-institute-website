"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  BookOpen,
  Layers,
  Gift,
  ArrowRight,
  Check,
  MessageCircle,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  tagline: string;
  durationBadge: string;
  posterImage: string;
  curriculum: string[];
  keyHighlights: string[];
  kitProvided: string[];
  forWho: string;
  courseSlug?: string;
}

const FLAGSHIP_COURSES: Course[] = [
  {
    id: "aesthetic",
    title: "Non-Doctor Aesthetic Course",
    category: "Aesthetics & PMU",
    tagline: "Master the Art of Industry-Focused Non-Doctor Aesthetic & PMU Care",
    durationBadge: "Industry-Focused Flagship",
    posterImage: "/images/non_doctor_aesthetic.jpg",
    courseSlug: "skin",
    curriculum: [
      "Foundation of Aesthetics & Skin Science",
      "Skin Analysis & Fitzpatrick Profiling",
      "Professional Medi-Facials & Clinical Protocols",
      "Chemical Peels & Exfoliation Depth",
      "Microdermabrasion & Skin Resurfacing",
      "BB Glow & Nano-Needling Treatments",
      "Laser & Light Therapy Fundamentals",
      "Permanent Makeup (PMU) Foundations",
      "Infection Control, Sterilization & Safety Protocols",
      "Salon & Aesthetic Business Management",
    ],
    keyHighlights: [
      "Hands-on Aesthetic Device Training",
      "International Standard Curriculum",
      "Digital & Practical Dual Certification",
      "Career Growth & Clinic Setup Guidance",
    ],
    kitProvided: [
      "Hands-on Clinical Device Access",
      "Comprehensive Theory & Protocol Manual",
      "Safety Goggles & Sterilization Kit",
    ],
    forWho: "Beginners, Beauticians, and Beauty Professionals looking to upgrade into high-ticket clinical aesthetics.",
  },
  {
    id: "makeup",
    title: "Make-up Master Class & Professional Course",
    category: "Bridal Makeup",
    tagline: "Basic to Pro Training — Learn • Practice • Shine",
    durationBadge: "Basic To Pro Masterclass",
    posterImage: "/images/makeup_masterclass.jpg",
    courseSlug: "professional-makeup",
    curriculum: [
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
      "Mentored by Celebrity Makeup Artist Deepika Patidar",
      "Practice on Live Models & Dummy Heads",
      "Instagram Reel & Portfolio Training",
      "100% Placement & Freelance Career Assistance",
    ],
    kitProvided: [
      "Complete Professional Make-up Brush Set",
      "Practice Cosmetic Vanity & Product Kit",
      "Beautician Apron & Step-by-Step Study Manual",
    ],
    forWho: "Aspiring bridal makeup artists, beauty enthusiasts, and studio owners.",
  },
  {
    id: "hair-styling",
    title: "Hair Styling Course (Basic to Advanced)",
    category: "Hair Science & Styling",
    tagline: "From Basic Sectioning to Celebrity Red-Carpet Hairstyles",
    durationBadge: "Basic to Advanced",
    posterImage: "/images/hair_styling.jpg",
    courseSlug: "hair-styling",
    curriculum: [
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
      "Speed & Professional Finishing Techniques",
      "Instagram Reel Training (How to Shoot & Showcase)",
      "Recognized Course Certificate",
    ],
    kitProvided: [
      "Hair Styling Tool Kit & Clips",
      "Hair Style Dummy & Adjustable Stand",
      "Hair Styling Accessories & Product Knowledge",
    ],
    forWho: "Hair stylists, salon artists, and bridal specialists aiming for master level finishing.",
  },
  {
    id: "hair-masterclass",
    title: "Hair Master Class & Chemical Treatments",
    category: "Hair Science & Styling",
    tagline: "Hair Structure, Chemical Treatments, Global Colour & Cutting Skills",
    durationBadge: "Advanced Chemical Track",
    posterImage: "/images/hair_masterclass.jpg",
    courseSlug: "hair-chemical",
    curriculum: [
      "Hair Structure, Growth Cycle & pH Scale Science",
      "Hair Type Diagnosis & Client Consultation",
      "Keratin Treatment & Botox Treatment",
      "Nanoplastia & Permanent Straightening / Rebonding",
      "Hair Colour Theory, Root Touch-Up & Global Colour",
      "Advanced Highlights: Strips, Ombre, and Balayage",
      "Basic to Advanced Haircut Sectioning & Holding Methods",
      "Blow-Dry Styling & Professional Hair Wash/Conditioning",
    ],
    keyHighlights: [
      "All Chemical Practice Products Provided",
      "Max 25 Students for 1-on-1 Individual Focus",
      "Step-by-step Live Demonstrations on Models",
      "Comprehensive Theory + PDF Notes",
    ],
    kitProvided: [
      "Hair Cutting Dummy with Tool Set",
      "Practice Chemicals, Keratin & Developers",
      "Technical Color Wheel & Formulation Sheets",
    ],
    forWho: "Salon owners, hairdressers, and students aspiring to become top hair colorists and stylists.",
  },
  {
    id: "nail-extension",
    title: "Nail Extensions & Nail Art Class",
    category: "Nail Studio",
    tagline: "Learn In 15 Days • Earn For A Lifetime",
    durationBadge: "15 Days Intensive",
    posterImage: "/images/nail_art.jpg",
    courseSlug: "nail-extensions",
    curriculum: [
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
      "Official Certificate Provided",
      "PDF Notes & Design Catalog Provided",
    ],
    kitProvided: [
      "Nail Art Brush Set (Multi-piece)",
      "Nail Extension Practice Tips & Products",
      "Nail Vanity Box Access",
    ],
    forWho: "Anyone looking to start a lucrative nail art studio or add nail services to their salon.",
  },
  {
    id: "pmu",
    title: "Permanent Professional Makeup (PMU)",
    category: "Aesthetics & PMU",
    tagline: "Microblading, Lip Tinting & Advanced Aesthetic Care",
    durationBadge: "10 Days High-Income Track",
    posterImage: "/images/pmu_aesthetics.jpg",
    courseSlug: "semi-permanent-makeup",
    curriculum: [
      "Eyebrows Microblading & Micro-Shading",
      "Combination Brows & Ombre Powder Brows",
      "Lip Neutralizing for Dark Lips & Lip Tinting",
      "Semi-Permanent Eyelash Extensions (Classic & Volume)",
      "Beauty Mole Creation",
      "BB Glow Skin Glow Treatments",
      "Hair Extensions Application & Maintenance",
      "Hydra Facial, High Frequency & Ultrasound Techniques",
    ],
    keyHighlights: [
      "High-Income Skill in 10 Days",
      "Safety, Hygiene & Needle Depth Mastery",
      "Live Model Supervised Demonstrations",
      "Accredited Certification & Lifetime Consultation",
    ],
    kitProvided: [
      "PMU Demonstration Tools & Needles",
      "Comprehensive Safety Manual & Practice Latex Sheets",
    ],
    forWho: "Beauty therapists, cosmetologists, and PMU artists wanting high-ticket service expertise.",
  },
  {
    id: "skincare",
    title: "Comprehensive Skin Care & Spa Course",
    category: "Skin Care",
    tagline: "Complete Salon Skin Care, Spa Therapies & Facials",
    durationBadge: "Foundational Diploma",
    posterImage: "/images/skin_care_course.jpg",
    courseSlug: "skin",
    curriculum: [
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
      "Covers 20+ Essential Salon Services",
      "Theory + 100% Practical Hands-on Practice",
      "Only 25 Students per Batch for 1-on-1 Guidance",
      "Guaranteed Course Completion with Certificate",
    ],
    kitProvided: [
      "Beautician Apron & Practice Tools",
      "Skin Care Formulation Guide & Recipe Notes",
    ],
    forWho: "Students starting from zero looking to establish a complete salon service portfolio.",
  },
];

export default function CoursesSection() {
  const [activeCourseId, setActiveCourseId] = useState<string>("aesthetic");

  const activeCourse =
    FLAGSHIP_COURSES.find((c) => c.id === activeCourseId) || FLAGSHIP_COURSES[0];

  return (
    <section id="courses" className="py-10 md:py-14 lg:py-16 bg-[#faf8f5] relative border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            1. CLEAN & ELEGANT ACADEMY COURSES SHOWCASE HERO
        ======================================================== */}
        <div className="relative rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border-2 border-amber-300/60 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden mb-8 sm:mb-10">
          {/* Subtle gold ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2c301]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2c301]/20 border border-amber-400/40 text-[#f2c301] text-xs font-bold uppercase tracking-widest shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Certified Professional Programs</span>
              </div>

              {/* 1 Strong Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-[1.15]">
                Explore Our Professional Academy Courses
              </h2>

              {/* 1 Short Paragraph */}
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Discover professional training programs in Skin, Hair, Makeup, SPMU and Nail Art, designed with practical, hands-on learning.
              </p>

              {/* Core Practical USPs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 bg-zinc-900/90 p-3 rounded-2xl border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-[#f2c301] flex-shrink-0" />
                  <span>100% Practical Training</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 bg-zinc-900/90 p-3 rounded-2xl border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-[#f2c301] flex-shrink-0" />
                  <span>Live Model Sessions</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 bg-zinc-900/90 p-3 rounded-2xl border border-zinc-800 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#f2c301] flex-shrink-0" />
                  <span>Deepika Patidar Mentorship</span>
                </div>
              </div>

              {/* 1 View Courses Button & WhatsApp Enquiry */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#inspector"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all duration-200"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>View Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919589871662?text=Hi%20Yashree%20Institute,%20I%20would%20like%20to%20enquire%20about%20your%20academy%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/50 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#f2c301]" />
                  <span>WhatsApp Admission Desk</span>
                </a>
              </div>
            </div>

            {/* Right Academy Masterclass Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-amber-300/80 shadow-2xl bg-zinc-950 group">
                <Image
                  src="/images/academy_courses_showcase.jpg"
                  alt="Yashree Institute Professional Beauty Academy Training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-amber-300/40 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#f2c301] block">
                      Yashree Institute Indore
                    </span>
                    <p className="text-xs font-semibold text-zinc-200">
                      Skin • Hair • Makeup • SPMU • Nails
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-[#f2c301] flex items-center justify-center border border-amber-400/50">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. FLAGSHIP MASTERCLASS INTERACTIVE EXPLORER
        ======================================================== */}
        <div id="inspector" className="text-center max-w-2xl mx-auto mb-6 space-y-1.5 pt-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
            Detailed Curriculum Preview
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 font-serif">
            Interactive Program Inspector
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-4">
          {/* Left Course Selector Menu */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            <div className="px-2 pb-1 text-xs font-bold uppercase tracking-wider text-zinc-500">
              Select Academy Track:
            </div>
            {FLAGSHIP_COURSES.map((course) => {
              const isSelected = course.id === activeCourseId;
              return (
                <button
                  key={course.id}
                  onClick={() => setActiveCourseId(course.id)}
                  className={`text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-xl scale-[1.02]"
                      : "bg-white text-zinc-800 border-zinc-200/80 hover:border-amber-300 hover:bg-amber-50/50"
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-[#f2c301] text-zinc-950"
                            : "bg-amber-100 text-zinc-800"
                        }`}
                      >
                        {course.category}
                      </span>
                    </div>
                    <h3
                      className={`text-sm font-serif font-bold ${
                        isSelected ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {course.title}
                    </h3>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected ? "text-[#f2c301] translate-x-1" : "text-zinc-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Featured Course Details Screen */}
          <div className="lg:col-span-8 bg-white rounded-3xl border-2 border-amber-200/80 shadow-2xl p-5 sm:p-7 lg:p-8 relative overflow-hidden flex flex-col justify-between">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                    {activeCourse.category} • {activeCourse.durationBadge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mt-1">
                    {activeCourse.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 font-medium mt-1">
                    {activeCourse.tagline}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold self-start sm:self-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Seats Available
                </span>
              </div>

              {/* Poster Preview & Core Overview */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] border-2 border-amber-200/80 shadow-lg bg-zinc-950 group">
                  <Image
                    src={activeCourse.posterImage}
                    alt={activeCourse.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#f2c301] border border-amber-300/30">
                    Official Flyer
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" /> Key Course Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {activeCourse.keyHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-zinc-700 leading-relaxed">
                    <strong className="text-zinc-900 font-bold block mb-0.5">Who Should Enroll:</strong>
                    {activeCourse.forWho}
                  </div>
                </div>
              </div>

              {/* Complete Curriculum Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#b8860b]" /> Complete Syllabus Modules:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCourse.curriculum.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-[#faf8f5] border border-amber-100 text-xs text-zinc-800"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kit Provided Box */}
              <div className="p-4 rounded-2xl bg-zinc-950 text-white border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#f2c301]">
                    <Gift className="w-4 h-4" /> Practice Kit Provided by Yashree:
                  </div>
                  <p className="text-xs text-zinc-300">
                    {activeCourse.kitProvided.join(" • ")}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <span className="text-[11px] font-bold text-amber-200 bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800">
                    Included Free
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>📍 Offline in Indore</span>
                <span>•</span>
                <span>💻 Online Option Available</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link
                  href={activeCourse.courseSlug ? `/courses/${activeCourse.courseSlug}` : `/services/${activeCourse.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-900 bg-amber-50 hover:bg-amber-100/80 border border-amber-200 transition-all hover:scale-102"
                >
                  <span>Dedicated Course Page</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#b8860b]" />
                </Link>

                <a
                  href={`https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20am%20interested%20in%20enquiring%20about%20the%20${encodeURIComponent(activeCourse.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-950 shimmer-btn shadow-md hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire Fees on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
