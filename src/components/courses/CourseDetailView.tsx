"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Layers,
  Wrench,
  GraduationCap,
  Calendar,
  Check,
  Star,
  MapPin,
  X,
  UserCheck,
  Maximize2,
} from "lucide-react";
import { CourseData, getCourseBySlug } from "@/data/coursesData";

interface CourseDetailViewProps {
  course: CourseData;
}

export default function CourseDetailView({ course }: CourseDetailViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<{
    image: string;
    title: string;
    caption: string;
    stepBadge?: string;
  } | null>(null);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastHero(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const relatedCourses = course.relatedSlugs
    .map((slug) => getCourseBySlug(slug))
    .filter((c): c is CourseData => c !== undefined)
    .slice(0, 3);

  return (
    <div className="bg-white text-zinc-900 selection:bg-[#f2c301]/30 relative pb-16 sm:pb-0">
      {/* ========================================================
          STICKY SUB-NAVIGATION PILL (Appears on Scroll)
      ======================================================== */}
      {isScrolledPastHero && (
        <div className="hidden md:flex fixed top-20 inset-x-0 z-40 justify-center pointer-events-none animate-in fade-in-0 slide-in-from-top-4 duration-300">
          <div className="bg-zinc-950/95 text-white backdrop-blur-md px-5 py-2.5 rounded-full border border-amber-400/50 shadow-2xl flex items-center gap-4 text-xs font-semibold pointer-events-auto">
            <span className="text-[#f2c301] font-bold border-r border-zinc-700 pr-3 font-serif flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {course.shortTitle}
            </span>
            <a href="#overview" className="hover:text-[#f2c301] transition-colors">
              Overview
            </a>
            <a href="#showcase" className="hover:text-[#f2c301] transition-colors">
              Visual Showcase
            </a>
            <a href="#curriculum" className="hover:text-[#f2c301] transition-colors">
              Curriculum
            </a>
            <a href="#practical" className="hover:text-[#f2c301] transition-colors">
              Practical
            </a>
            <a href="#faq" className="hover:text-[#f2c301] transition-colors">
              FAQ
            </a>
            <a
              href="#enquire"
              className="bg-[#f2c301] text-zinc-950 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-[11px] hover:scale-105 transition-transform shadow-sm"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}

      {/* ========================================================
          1. COURSE HERO SECTION (LUXURY EDITORIAL SPLIT)
      ======================================================== */}
      <section className="relative overflow-hidden pt-6 pb-10 lg:pt-8 lg:pb-14 bg-gradient-to-b from-[#faf8f5] via-white to-white border-b border-zinc-100">
        {/* Subtle decorative gold lighting */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-2xl pointer-events-none -ml-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-5 font-medium">
            <Link href="/" className="hover:text-[#b8860b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#courses" className="hover:text-[#b8860b] transition-colors">
              Courses
            </Link>
            <span>/</span>
            <span className="text-[#b8860b] font-bold">{course.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category & Track Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-[#b8860b] border border-amber-300/80 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  {course.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-zinc-950 text-[#f2c301] shadow-xs">
                  <Award className="w-3.5 h-3.5 text-[#f2c301]" />
                  {course.badge}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Yashree Academy</span>
                </span>
              </div>

              {/* Main Course Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 font-serif leading-[1.12]">
                {course.title}
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-base sm:text-lg font-semibold text-[#b8860b]">
                {course.tagline}
              </p>

              {/* Hero Description */}
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                {course.heroDescription}
              </p>

              {/* Quick Feature Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 bg-white p-3 rounded-2xl border border-amber-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Practical Training</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 bg-white p-3 rounded-2xl border border-amber-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Live Model Demos</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 bg-white p-3 rounded-2xl border border-amber-200/80 shadow-xs col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Deepika Patidar Mentorship</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <a
                  href="#enquire"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all duration-200"
                >
                  <span>Enquire For Next Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/919589871662?text=${encodeURIComponent(
                    `Hi Yashree Institute, I want to enquire about the ${course.title} course.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-zinc-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Admission Desk</span>
                </a>

                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-zinc-400" />
                  <span>View Syllabus</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300/90 bg-zinc-900 group gold-shadow">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full">
                  <Image
                    src={course.heroImage}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent" />
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301]">
                      Certified Academy Track
                    </span>
                    <span className="text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-zinc-200">
                      Indore Campus
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight font-serif">
                    {course.shortTitle}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-1">
                    Hands-on practical stations &bull; Professional tools provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. DEDICATED 6-IMAGE VISUAL MASTERCLASS SHOWCASE
      ======================================================== */}
      <section id="showcase" className="py-10 md:py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-100 text-[#b8860b] border border-amber-300">
              <Sparkles className="w-3.5 h-3.5" /> 6-Stage Visual Masterclass
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 font-serif">
              Visual Execution in 6 Comprehensive Steps
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Authentic visual documentation for {course.shortTitle}: from clinical diagnostic prep and live hands-on techniques to the finished client transformation.
            </p>
          </div>

          {/* 6-Image Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {course.gallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedGalleryImg(item)}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border-2 border-amber-200/90 hover:border-[#b8860b] bg-zinc-900 cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image View */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Step Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-300/60 text-[10.5px] font-bold text-[#f2c301] shadow-md">
                    {item.stepBadge || `Stage 0${idx + 1}`}
                  </div>

                  {/* Zoom indicator */}
                  <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#f2c301]" />
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-5 sm:p-6 bg-white space-y-1.5 border-t border-amber-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-zinc-950 group-hover:text-[#b8860b] transition-colors font-serif leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                      {item.caption}
                    </p>
                  </div>
                  <div className="pt-3 flex items-center justify-between text-[11px] font-semibold text-[#b8860b]">
                    <span>Click to view high-res</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal if image clicked */}
      {selectedGalleryImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in-0 duration-200"
          onClick={() => setSelectedGalleryImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full rounded-3xl overflow-hidden border-2 border-amber-300 shadow-2xl bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={selectedGalleryImg.image}
                alt={selectedGalleryImg.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-5 bg-zinc-950 text-white flex items-center justify-between border-t border-zinc-800">
              <div>
                <span className="text-[11px] font-bold text-[#f2c301] uppercase tracking-wider block">
                  {selectedGalleryImg.stepBadge || "Stage Details"}
                </span>
                <h4 className="text-base font-bold text-white font-serif">
                  {selectedGalleryImg.title}
                </h4>
                <p className="text-xs text-zinc-400">
                  {selectedGalleryImg.caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedGalleryImg(null)}
                className="bg-zinc-800 hover:bg-[#f2c301] hover:text-zinc-950 text-white p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          3. ABOUT THIS COURSE SECTION
      ======================================================== */}
      <section id="overview" className="py-10 md:py-14 bg-[#faf8f5] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-50 text-[#b8860b] border border-amber-200">
                <BookOpen className="w-3.5 h-3.5" /> Course Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 font-serif leading-tight">
                {course.aboutTitle}
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-zinc-600 leading-relaxed">
                {course.aboutDescription.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Tools and Products Mastered */}
              <div className="pt-3.5 border-t border-zinc-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2.5 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#b8860b]" /> Equipment, Formulas &amp; Kits Mastered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.toolsAndKit.map((tool, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white text-zinc-800 border border-amber-200/80 hover:border-amber-300 transition-colors shadow-2xs"
                    >
                      <Check className="w-3.5 h-3.5 text-[#b8860b]" /> {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-7 border-2 border-amber-200/90 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#f2c301] text-zinc-950 flex items-center justify-center shadow-md font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-950 font-serif">
                    The Yashree Standard
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Cosmetology &amp; Aesthetic Excellence
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Individual Attention:</strong> Focused batch size for personal 1-on-1 feedback and hand-holding.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sanitized Clinical Setup:</strong> Medical-grade disinfection, autoclave hygiene, and clean workstations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Comprehensive Manuals:</strong> In-depth theory notes, step-by-step procedure charts, and reference guides.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Client Consultation Ethics:</strong> Learn client profiling, skin/hair diagnosis, and consultation protocols.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="#enquire"
                  className="w-full py-3 rounded-xl bg-zinc-950 text-[#f2c301] text-xs font-bold uppercase tracking-wider text-center block hover:bg-[#b8860b] hover:text-white transition-all shadow-md"
                >
                  Enquire About Batch Dates &amp; Fees
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHAT YOU WILL LEARN / STRUCTURED CURRICULUM
      ======================================================== */}
      <section id="curriculum" className="py-10 md:py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-100 text-[#b8860b] border border-amber-300">
              <Layers className="w-3.5 h-3.5" /> Comprehensive Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 font-serif">
              What You Will Learn in {course.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              A structured step-by-step syllabus designed to build true professional competence from fundamentals to advanced salon &amp; clinical techniques.
            </p>
          </div>

          {/* Curriculum Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {course.curriculum.map((mod, idx) => (
              <div
                key={idx}
                className="bg-[#faf8f5] rounded-2xl p-5 sm:p-6 border-2 border-amber-200/90 hover:border-[#b8860b] shadow-xs hover:shadow-xl transition-all duration-300 space-y-3.5 group"
              >
                <div className="flex items-center justify-between border-b border-zinc-200/80 pb-2.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#b8860b] bg-amber-100/70 px-3 py-1 rounded-full border border-amber-300">
                    {mod.unit}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400">
                    Core Technical Module
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#b8860b] transition-colors leading-snug font-serif">
                  {mod.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {mod.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  {mod.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b8860b] flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. PRACTICAL TRAINING / LEARNING EXPERIENCE
      ======================================================== */}
      <section id="practical" className="py-10 md:py-14 bg-[#faf8f5] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 rounded-3xl p-6 sm:p-8 lg:p-10 text-white border-2 border-amber-400/50 shadow-2xl relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2c301]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
              <div className="lg:col-span-6 space-y-3.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#f2c301]/20 text-[#f2c301] border border-[#f2c301]/40">
                  <ShieldCheck className="w-3.5 h-3.5" /> Real Clinical &amp; Studio Practical
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-white leading-tight">
                  {course.practicalExperience.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {course.practicalExperience.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <div className="bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-zinc-700 text-xs">
                    <span className="text-[#f2c301] font-bold block">100% Practical</span>
                    <span className="text-zinc-400">Classroom Stations</span>
                  </div>
                  <div className="bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-zinc-700 text-xs">
                    <span className="text-[#f2c301] font-bold block">Supervised Practice</span>
                    <span className="text-zinc-400">Live Model Protocols</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-2.5">
                {course.practicalExperience.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400/60 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#f2c301] text-zinc-950 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. COURSE HIGHLIGHTS
      ======================================================== */}
      <section className="py-10 md:py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
              Why Choose This Track
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-serif">
              Course Highlights &amp; Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {course.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#faf8f5] rounded-2xl p-5 sm:p-6 border-2 border-amber-200/90 shadow-xs hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-[#b8860b] flex items-center justify-center border border-amber-300 font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-zinc-950 font-serif">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. WHY LEARN THIS SKILL
      ======================================================== */}
      <section className="py-10 md:py-14 bg-[#faf8f5] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 text-center mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
              Career &amp; Industry Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-serif">
              Why Learn {course.shortTitle}?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Understanding the real industry context, salon client demand, and creative potential of this specialized beauty discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {course.whyLearn.map((reason, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-amber-200/90 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-[#b8860b] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-zinc-900 leading-snug font-serif">
                  {reason.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. FREQUENTLY ASKED QUESTIONS (FAQ)
      ======================================================== */}
      <section id="faq" className="py-10 md:py-14 bg-white border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-100 text-[#b8860b] border border-amber-300">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-serif">
              Questions About {course.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Everything you need to know about prerequisites, tools, practical sessions, and learning methods.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {course.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-amber-200/80 overflow-hidden bg-white shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 hover:bg-[#faf8f5] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-zinc-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#b8860b] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-3.5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-[#faf8f5]/60 animate-in fade-in-0 duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. STRONG CTA & ADMISSION CONSULTATION
      ======================================================== */}
      <section id="enquire" className="py-10 md:py-14 bg-gradient-to-b from-white to-[#faf8f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 rounded-3xl p-6 sm:p-10 text-white border-2 border-amber-400/50 shadow-2xl text-center space-y-5 relative overflow-hidden">
            <div className="space-y-2.5 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f2c301] text-zinc-950 shadow-md">
                <Sparkles className="w-3.5 h-3.5" /> Admissions Open &bull; Indore Campus
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
                Ready to Master {course.shortTitle}?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Connect with our academic counselors for batch schedules, practical station walkthroughs, and admissions consultation.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href="tel:+919589871662"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all"
              >
                <Phone className="w-4 h-4 text-zinc-950" />
                <span>Call +91 95898 71662</span>
              </a>

              <a
                href={`https://wa.me/919589871662?text=${encodeURIComponent(
                  `Hi Yashree Institute, I want to enquire about joining the ${course.title} batch.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors border border-emerald-500/50"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Enquire via WhatsApp</span>
              </a>

              <a
                href="tel:+919244095594"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700"
              >
                <Phone className="w-4 h-4 text-[#f2c301]" />
                <span>Alt: +91 92440 95594</span>
              </a>
            </div>

            <div className="pt-3 border-t border-zinc-800 text-xs text-zinc-400">
              📍 Yashree Institute of Cosmetology &amp; Aesthetics, Near Meghdoot Garden, Vijay Nagar, Indore (M.P.)
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. RELATED COURSES GRID
      ======================================================== */}
      {relatedCourses.length > 0 && (
        <section className="py-10 md:py-14 bg-white border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                  Explore Curriculum
                </span>
                <h3 className="text-2xl font-bold text-zinc-950 font-serif">
                  Related Academy Courses
                </h3>
              </div>
              <Link
                href="/#courses"
                className="text-xs font-bold text-[#b8860b] hover:underline flex items-center gap-1"
              >
                <span>View All 18 Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedCourses.map((relCourse) => (
                <Link
                  key={relCourse.slug}
                  href={`/courses/${relCourse.slug}`}
                  className="group block bg-[#faf8f5] rounded-2xl p-5 sm:p-6 border-2 border-amber-200/80 hover:border-[#b8860b] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-amber-100/80 text-[#b8860b] border border-amber-200">
                        {relCourse.category}
                      </span>
                      <span className="text-[11px] font-semibold text-zinc-400 font-mono">
                        {relCourse.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-zinc-900 group-hover:text-[#b8860b] transition-colors line-clamp-1 font-serif pt-1">
                      {relCourse.title}
                    </h4>
                    <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                      {relCourse.tagline}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-2 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-[#b8860b]">
                    <span>Explore Course Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          MOBILE BOTTOM FLOATING CONTACT BAR
      ======================================================== */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-amber-200 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+919589871662"
          className="flex-1 py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#f2c301]" />
          <span>Call Desk</span>
        </a>
        <a
          href={`https://wa.me/919589871662?text=${encodeURIComponent(
            `Hi Yashree Institute, I want to enquire about the ${course.title} course.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-[#f2c301] text-zinc-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5 text-zinc-950" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
