"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Trophy,
  Sparkles,
  Award,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Upload,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Camera,
  Layers,
} from "lucide-react";
import { INITIAL_GALLERY_ITEMS, GalleryItem } from "@/data/gallerySeed";

const CATEGORIES = [
  "All Moments",
  "Awards & Seminars",
  "Student Convocation",
  "Celebrity Makeup",
  "Practical Training",
  "Salon & Studio",
] as const;

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>(INITIAL_GALLERY_ITEMS);
  const [activeCategory, setActiveCategory] = useState<string>("All Moments");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch live items from the API endpoint
  useEffect(() => {
    async function loadGallery() {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        if (data.success && Array.isArray(data.items) && data.items.length > 0) {
          setItems(data.items);
        }
      } catch (err) {
        console.warn("Using initial gallery items:", err);
      } finally {
        setLoading(false);
      }
    }
    loadGallery();
  }, []);

  const filteredItems =
    activeCategory === "All Moments"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="flex min-h-screen flex-col bg-[#faf8f5] text-zinc-900 selection:bg-[#f2c301]/30">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO HEADER SECTION
        ======================================================== */}
        <section className="bg-zinc-950 text-white py-10 md:py-14 lg:py-16 relative overflow-hidden border-b border-zinc-800">
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-3.5">
              {/* Breadcrumb / Top Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-widest shadow-xs">
                <Trophy className="w-3.5 h-3.5" />
                <span>Yashree Institute • Official Media Showcase</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.1]">
                Moments of <span className="text-gold-gradient">Excellence</span> &amp; Artistry
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Explore our national award felicitations, grand student convocations, live clinical masterclasses, and celebrity bridal transformations in Indore.
              </p>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                  <ShieldCheck className="w-4 h-4 text-[#f2c301]" />
                  <span>Business &amp; Beauty Icon 2026</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                  <Camera className="w-4 h-4 text-[#f2c301]" />
                  <span>{items.length}+ Documented Memories</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                  <Layers className="w-4 h-4 text-[#f2c301]" />
                  <span>100% Verified Campus Photos</span>
                </span>
              </div>

              {/* Admin Portal Button */}
              <div className="pt-2">
                <Link
                  href="/admin/gallery"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/60 text-xs font-semibold text-amber-200 transition-all shadow-sm hover:scale-105"
                >
                  <Upload className="w-3.5 h-3.5 text-[#f2c301]" />
                  <span>Admin Upload &amp; Photo Management Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. CATEGORY FILTER TABS
        ======================================================== */}
        <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 min-w-max mx-auto">
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat;
                const count =
                  cat === "All Moments"
                    ? items.length
                    : items.filter((i) => i.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? "bg-zinc-950 text-[#f2c301] shadow-md scale-105"
                        : "bg-amber-50/70 text-zinc-700 hover:bg-amber-100 hover:text-zinc-950 border border-amber-200/60"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isSelected
                          ? "bg-[#f2c301] text-zinc-950"
                          : "bg-white text-zinc-600 border border-amber-200"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. DYNAMIC GALLERY GRID
        ======================================================== */}
        <section className="py-8 md:py-10 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-amber-200 p-6 sm:p-8">
              <Sparkles className="w-10 h-10 text-[#f2c301] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-zinc-900 font-serif">
                No Photos Found in this Category
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Upload new photos to this category from the Admin Desk.
              </p>
              <Link
                href="/admin/gallery"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-[#f2c301] text-xs font-bold uppercase tracking-wider"
              >
                <Upload className="w-4 h-4" />
                <span>Upload New Image</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredItems.map((item, index) => {
                const isFeatured = item.isFeatured;
                return (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="group bg-white rounded-3xl overflow-hidden border-2 border-amber-200/80 hover:border-[#b8860b] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        unoptimized={item.image.startsWith("/uploads/") || item.image.startsWith("http")}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[#f2c301] text-[10px] font-bold uppercase tracking-wider border border-amber-300/40">
                          {item.category}
                        </span>

                        {isFeatured && (
                          <span className="px-2.5 py-1 rounded-full bg-[#f2c301] text-zinc-950 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                            <Award className="w-3 h-3" /> Featured
                          </span>
                        )}
                      </div>

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-3.5 left-4 right-4 text-white">
                        <h3 className="font-serif font-bold text-base sm:text-lg leading-snug group-hover:text-[#f2c301] transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Caption & Date Card Body */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 bg-white">
                      <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3 font-normal">
                        {item.caption}
                      </p>

                      <div className="pt-2.5 border-t border-amber-100 flex items-center justify-between text-[11px] text-zinc-400">
                        {item.date && (
                          <span className="flex items-center gap-1 font-medium text-zinc-500">
                            <Calendar className="w-3.5 h-3.5 text-[#b8860b]" />
                            <span>{item.date}</span>
                          </span>
                        )}
                        <span className="text-[#b8860b] font-bold group-hover:underline flex items-center gap-1">
                          <span>View Full Photo</span>
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ========================================================
            4. LIGHTBOX PREVIEW MODAL
        ======================================================== */}
        {currentLightboxItem && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in-0 duration-200">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-zinc-900/90 text-white hover:text-[#f2c301] hover:bg-zinc-800 border border-zinc-700 transition-all cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 text-white hover:text-[#f2c301] hover:bg-zinc-800 border border-zinc-700 transition-all cursor-pointer hidden sm:flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 text-white hover:text-[#f2c301] hover:bg-zinc-800 border border-zinc-700 transition-all cursor-pointer hidden sm:flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="max-w-5xl w-full max-h-[90vh] bg-zinc-950 rounded-3xl overflow-hidden border-2 border-amber-300/40 shadow-2xl flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Column */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[450px] lg:min-h-[550px] bg-black">
                <Image
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-contain p-2"
                  unoptimized={currentLightboxItem.image.startsWith("/uploads/") || currentLightboxItem.image.startsWith("http")}
                />
              </div>

              {/* Sidebar Info Column */}
              <div className="w-full lg:w-96 p-5 sm:p-6 bg-zinc-900 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#f2c301]/20 border border-amber-400/40 text-[#f2c301] text-[10px] font-bold uppercase tracking-wider">
                      {currentLightboxItem.category}
                    </span>
                    {currentLightboxItem.isFeatured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#f2c301] text-zinc-950 text-[10px] font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-tight">
                    {currentLightboxItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {currentLightboxItem.caption}
                  </p>

                  {currentLightboxItem.date && (
                    <div className="flex items-center gap-2 text-xs text-zinc-400 pt-2 border-t border-zinc-800">
                      <Calendar className="w-4 h-4 text-[#f2c301]" />
                      <span>Event Date: {currentLightboxItem.date}</span>
                    </div>
                  )}
                </div>

                {/* Lightbox CTAs */}
                <div className="pt-4 space-y-2.5">
                  <a
                    href={`https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20saw%20this%20gallery%20photo%20"${encodeURIComponent(
                      currentLightboxItem.title
                    )}"%20and%20wanted%20to%20enquire%20more.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl shimmer-btn text-zinc-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:scale-102 transition-transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                    <span>
                      Photo {(lightboxIndex ?? 0) + 1} of {filteredItems.length}
                    </span>
                    <button
                      onClick={closeLightbox}
                      className="text-zinc-400 hover:text-white underline cursor-pointer"
                    >
                      Back to Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            5. BOTTOM ADMISSION CTA SECTION
        ======================================================== */}
        <section className="bg-zinc-950 text-white py-10 md:py-14 border-t border-zinc-800 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shape Your Career with Central India's Best</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Ready to Be Part of Our Next Convocation?
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Enroll in our Skin, Hair, Makeup, SPMU, or Nail Art courses with 100% practical exposure, free kits, and authorized diplomas in Indore.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all"
              >
                <span>Apply for Admission</span>
              </Link>

              <a
                href="https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20want%20to%20enquire%20about%20academy%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#f2c301]" />
                <span>Chat with Counselors</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
