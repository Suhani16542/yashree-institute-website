"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Play,
  Sparkles,
  Video,
  Award,
  Calendar,
  X,
  Clock,
  Upload,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Film,
  Layers,
} from "lucide-react";
import { INITIAL_ACADEMY_VIDEOS, AcademyVideo } from "@/data/academyVideosSeed";

const CATEGORIES = [
  "All Videos",
  "Masterclasses & Demos",
  "Student Practice & Reels",
  "Awards & Ceremonies",
  "Campus Tour & Facilities",
  "Student Testimonials",
] as const;

export default function AcademyPage() {
  const [videos, setVideos] = useState<AcademyVideo[]>(INITIAL_ACADEMY_VIDEOS);
  const [activeCategory, setActiveCategory] = useState<string>("All Videos");
  const [selectedVideo, setSelectedVideo] = useState<AcademyVideo | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch live videos from API
  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch("/api/academy-videos");
        const data = await res.json();
        if (data.success && Array.isArray(data.items) && data.items.length > 0) {
          setVideos(data.items);
        }
      } catch (err) {
        console.warn("Using default academy videos:", err);
      } finally {
        setLoading(false);
      }
    }
    loadVideos();
  }, []);

  const filteredVideos =
    activeCategory === "All Videos"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col bg-[#faf8f5] text-zinc-900 selection:bg-[#f2c301]/30">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO HEADER SECTION
        ======================================================== */}
        <section className="bg-zinc-950 text-white py-10 md:py-14 lg:py-16 relative overflow-hidden border-b border-zinc-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-3.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-widest shadow-xs">
                <Video className="w-3.5 h-3.5" />
                <span>Yashree Academy • Masterclass &amp; Video Hub</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.1]">
                Watch 100% Practical <span className="text-gold-gradient">Training in Action</span>
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Step inside Central India&apos;s leading beauty &amp; cosmetology academy. Watch real client demos, student practice reels, convocation ceremonies, and masterclass walkthroughs in Indore.
              </p>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                  <Film className="w-4 h-4 text-[#f2c301]" />
                  <span>{videos.length}+ Academy Videos</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                  <ShieldCheck className="w-4 h-4 text-[#f2c301]" />
                  <span>Deepika Patidar Masterclasses</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                  <Layers className="w-4 h-4 text-[#f2c301]" />
                  <span>Live Studio &amp; Vanity Reels</span>
                </span>
              </div>

              {/* Admin Portal Link */}
              <div className="pt-2">
                <Link
                  href="/admin/academy"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/60 text-xs font-semibold text-amber-200 transition-all shadow-sm hover:scale-105"
                >
                  <Upload className="w-3.5 h-3.5 text-[#f2c301]" />
                  <span>Admin Video Upload Desk</span>
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
                  cat === "All Videos"
                    ? videos.length
                    : videos.filter((v) => v.category === cat).length;

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
            3. DYNAMIC VIDEO GRID
        ======================================================== */}
        <section className="py-8 md:py-10 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-amber-200 p-8">
              <Film className="w-10 h-10 text-[#f2c301] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-zinc-900 font-serif">
                No Videos in this Category Yet
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Upload new videos or YouTube shorts from the Admin Desk.
              </p>
              <Link
                href="/admin/academy"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-[#f2c301] text-xs font-bold uppercase tracking-wider"
              >
                <Upload className="w-4 h-4" />
                <span>Upload New Video</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredVideos.map((item) => {
                const isFeatured = item.isFeatured;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedVideo(item)}
                    className="group bg-white rounded-3xl overflow-hidden border-2 border-amber-200/80 hover:border-[#b8860b] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                  >
                    {/* Video Studio Screen Mockup */}
                    <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        unoptimized={item.thumbnail.startsWith("http") || item.thumbnail.startsWith("/uploads/")}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-zinc-950/20 opacity-85 group-hover:opacity-90 transition-opacity" />

                      {/* Top Bar: Live Studio Badge & Category */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                          <span>4K DEMO</span>
                        </div>

                        <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[#f2c301] text-[10px] font-bold uppercase tracking-wider border border-amber-300/40">
                          {item.category}
                        </span>
                      </div>

                      {/* Center Glowing Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-13 h-13 rounded-full bg-[#f2c301] text-zinc-950 flex items-center justify-center group-hover:scale-115 transition-transform duration-300 shadow-2xl border-2 border-white group-hover:bg-amber-300">
                          <Play className="w-5 h-5 fill-zinc-950 ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom Media Metadata Bar */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between z-10">
                        {/* Sound Wave Micro-Graphic */}
                        <div className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 h-2 bg-[#f2c301] rounded-full animate-pulse" />
                          <span className="w-0.5 h-3 bg-[#f2c301] rounded-full" />
                          <span className="w-0.5 h-1.5 bg-[#f2c301] rounded-full animate-pulse" />
                          <span className="w-0.5 h-2.5 bg-[#f2c301] rounded-full" />
                        </div>

                        {/* Duration Badge */}
                        {item.duration && (
                          <div className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold flex items-center gap-1 border border-zinc-700">
                            <Clock className="w-3 h-3 text-[#f2c301]" />
                            <span>{item.duration}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 bg-white">
                      <div>
                        <h3 className="font-serif font-bold text-base sm:text-lg text-zinc-950 group-hover:text-[#b8860b] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2 font-normal mt-1.5">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-amber-100 flex items-center justify-between text-[11px] text-zinc-400">
                        {item.date && (
                          <span className="flex items-center gap-1 font-medium text-zinc-500">
                            <Calendar className="w-3.5 h-3.5 text-[#b8860b]" />
                            <span>{item.date}</span>
                          </span>
                        )}
                        <span className="text-[#b8860b] font-bold group-hover:underline flex items-center gap-1">
                          <span>Watch Video</span>
                          <Play className="w-3 h-3 fill-[#b8860b]" />
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
            4. VIDEO PLAYER MODAL POPUP
        ======================================================== */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in-0 duration-200">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-zinc-900 text-white hover:text-[#f2c301] hover:bg-zinc-800 border border-zinc-700 transition-all cursor-pointer"
              aria-label="Close Video"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="max-w-4xl w-full bg-zinc-950 rounded-3xl overflow-hidden border-2 border-amber-300/40 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Responsive Video Frame */}
              <div className="relative aspect-video w-full bg-black">
                {selectedVideo.videoUrl.endsWith(".mp4") || selectedVideo.videoUrl.startsWith("/uploads/videos/") ? (
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <iframe
                    src={selectedVideo.embedUrl}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                )}
              </div>

              {/* Video Info Bar */}
              <div className="p-6 sm:p-8 bg-zinc-900 text-white space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#f2c301]/20 border border-amber-400/40 text-[#f2c301] text-[10px] font-bold uppercase tracking-wider">
                        {selectedVideo.category}
                      </span>
                      {selectedVideo.isFeatured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#f2c301] text-zinc-950 text-[10px] font-bold uppercase tracking-wider">
                          Featured Masterclass
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-2">
                      {selectedVideo.title}
                    </h2>
                  </div>

                  <a
                    href={`https://wa.me/919589871662?text=Hi%20Yashree%20Institute,%20I%20saw%20your%20academy%20video%20"${encodeURIComponent(
                      selectedVideo.title
                    )}"%20and%20want%20to%20enquire%20about%20the%20course.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl shimmer-btn text-zinc-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-shrink-0 hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire Batch Fees</span>
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            5. ADMISSION CTA STRIP
        ======================================================== */}
        <section className="bg-zinc-950 text-white py-10 md:py-14 border-t border-zinc-800 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Learn With Practical Confidence</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Ready to Join Our Next Practical Batch in Indore?
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto">
              Limited to 25 students per batch. All student vanity kits, mannequins, and tools provided free.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all"
              >
                <span>Book Campus Visit &amp; Counseling</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
