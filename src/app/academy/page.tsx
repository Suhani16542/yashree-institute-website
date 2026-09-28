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
  ShieldCheck,
  Film,
  Layers,
  Loader2,
} from "lucide-react";
import { academyVideosApi } from "@/lib/api";
import { resolveAssetUrl } from "@/lib/api/config";
import { AcademyVideoItem } from "@/lib/api/types";

export interface FormattedAcademyVideo {
  id: string;
  title: string;
  category: string;
  normalizedCategory: "MASTERCLASSES & DEMOS" | "STUDENT PRACTICE & REELS" | "AWARDS & CEREMONIES" | "CAMPUS TOUR & FACILITIES" | "STUDENT TESTIMONIALS" | "OTHER";
  videoUrl: string;
  embedUrl: string;
  thumbnail: string;
  description: string;
  duration?: string;
  isFeatured?: boolean;
  date?: string;
  isMp4: boolean;
}

const CATEGORY_TABS = [
  "ALL",
  "MASTERCLASSES & DEMOS",
  "STUDENT PRACTICE & REELS",
  "AWARDS & CEREMONIES",
  "CAMPUS TOUR & FACILITIES",
  "STUDENT TESTIMONIALS",
] as const;

type CategoryTabType = (typeof CATEGORY_TABS)[number];

function normalizeCategory(cat?: string | null): FormattedAcademyVideo["normalizedCategory"] {
  if (!cat) return "MASTERCLASSES & DEMOS";
  const upper = cat.trim().toUpperCase();
  if (upper.includes("MASTERCLASS") || upper.includes("DEMO")) return "MASTERCLASSES & DEMOS";
  if (upper.includes("REEL") || upper.includes("PRACTICE")) return "STUDENT PRACTICE & REELS";
  if (upper.includes("AWARD") || upper.includes("CEREMON")) return "AWARDS & CEREMONIES";
  if (upper.includes("CAMPUS") || upper.includes("TOUR") || upper.includes("FACILIT")) return "CAMPUS TOUR & FACILITIES";
  if (upper.includes("TESTIMONIAL") || upper.includes("STUDENT")) return "STUDENT TESTIMONIALS";
  return "MASTERCLASSES & DEMOS";
}

// Parses different YouTube & video URL formats into embeddable URLs, thumbnails, and media flags
export function parseVideoMedia(
  rawUrl: string,
  rawThumb?: string | null,
  videoSource?: string | null
): {
  resolvedUrl: string;
  embedUrl: string;
  thumbnail: string;
  isMp4: boolean;
} {
  const trimmed = (rawUrl || "").trim();
  const resolvedUrl = resolveAssetUrl(trimmed, trimmed);
  const fallbackThumb = resolveAssetUrl(rawThumb) || "/images/makeup_training_hero.jpg";

  // If backend explicitly flags videoSource as upload
  if (videoSource === "upload") {
    return {
      resolvedUrl,
      embedUrl: resolvedUrl,
      thumbnail: fallbackThumb,
      isMp4: true,
    };
  }

  // Check YouTube formats: standard, share, embed, shorts, youtu.be
  const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const ytMatch = trimmed.match(ytRegex);

  if (ytMatch && ytMatch[1] && videoSource !== "upload") {
    const videoId = ytMatch[1];
    const autoYtThumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const resolvedThumb = rawThumb?.trim() ? resolveAssetUrl(rawThumb) : autoYtThumb;
    return {
      resolvedUrl,
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`,
      thumbnail: resolvedThumb || autoYtThumb,
      isMp4: false,
    };
  }

  // Check Vimeo
  const vimeoMatch = trimmed.match(/vimeo\.com\/(\d+)/i);
  if (vimeoMatch && vimeoMatch[1]) {
    const resolvedThumb = rawThumb?.trim() ? resolveAssetUrl(rawThumb) : "/images/cosmetology_training_hero.jpg";
    return {
      resolvedUrl,
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
      thumbnail: resolvedThumb,
      isMp4: false,
    };
  }

  // Check MP4 / direct uploaded video file (backend uploads, Cloudinary, S3, or relative storage)
  const isDirectVideo =
    videoSource === "upload" ||
    resolvedUrl.endsWith(".mp4") ||
    resolvedUrl.endsWith(".webm") ||
    resolvedUrl.endsWith(".mov") ||
    resolvedUrl.endsWith(".mkv") ||
    resolvedUrl.endsWith(".ogg") ||
    resolvedUrl.endsWith(".m4v") ||
    resolvedUrl.includes("/uploads/") ||
    resolvedUrl.includes("cloudinary.com") ||
    (!resolvedUrl.includes("youtube.com") && !resolvedUrl.includes("youtu.be"));

  return {
    resolvedUrl,
    embedUrl: resolvedUrl,
    thumbnail: fallbackThumb,
    isMp4: Boolean(isDirectVideo || !resolvedUrl.startsWith("http")),
  };
}

function formatAcademyVideoFromApi(v: AcademyVideoItem, idx: number): FormattedAcademyVideo {
  const thumbSource = v.thumbnail || v.thumbnailUrl;
  const { resolvedUrl, embedUrl, thumbnail, isMp4 } = parseVideoMedia(
    v.videoUrl || "",
    thumbSource,
    v.videoSource
  );

  const normCat = normalizeCategory(v.category);
  const createdDate = v.createdAt ? new Date(v.createdAt) : null;
  const formattedDate = createdDate && !isNaN(createdDate.getTime())
    ? createdDate.toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })
    : "Recently Added";

  return {
    id: v.id || v._id || `vid-${idx}`,
    title: v.title || "Academy Masterclass Video",
    category: v.category || "Masterclasses & Demos",
    normalizedCategory: normCat,
    videoUrl: resolvedUrl,
    embedUrl,
    thumbnail: thumbnail || resolveAssetUrl(thumbSource) || "/images/makeup_training_hero.jpg",
    duration: v.duration && v.duration.trim() ? v.duration.trim() : "Video",
    description: v.description || "Watch 100% practical hands-on live aesthetic & cosmetology demonstration at Yashree Institute Indore.",
    date: formattedDate,
    isFeatured: Boolean(v.featured ?? v.isFeatured),
    isMp4,
  };
}

export default function AcademyPage() {
  const [videos, setVideos] = useState<FormattedAcademyVideo[]>([]);
  const [activeCategory, setActiveCategory] = useState<CategoryTabType>("ALL");
  const [selectedVideo, setSelectedVideo] = useState<FormattedAcademyVideo | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch live published videos dynamically from API
  useEffect(() => {
    async function loadPublishedVideos() {
      setLoading(true);
      try {
        const res = await academyVideosApi.getPublic({ limit: 100 });
        if (Array.isArray(res.videos) && res.videos.length > 0) {
          // Show only published videos
          const publishedOnly = res.videos.filter((v) => v.published !== false);
          setVideos(publishedOnly.map(formatAcademyVideoFromApi));
        } else {
          setVideos([]);
        }
      } catch (err) {
        console.error("Failed to load academy videos from API:", err);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    }
    loadPublishedVideos();
  }, []);

  const filteredVideos =
    activeCategory === "ALL"
      ? videos
      : videos.filter((v) => v.normalizedCategory === activeCategory);

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
                  <span>{loading ? "Loading" : videos.length}+ Academy Videos</span>
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
                  href="/admin"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/60 text-xs font-semibold text-amber-200 transition-all shadow-sm hover:scale-105"
                >
                  <Upload className="w-3.5 h-3.5 text-[#f2c301]" />
                  <span>Admin Video Publisher Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. CATEGORY FILTER TABS
        ======================================================== */}
        <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {CATEGORY_TABS.map((cat) => {
              const isSelected = activeCategory === cat;
              const count =
                cat === "ALL"
                  ? videos.length
                  : videos.filter((v) => v.normalizedCategory === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    isSelected
                      ? "bg-zinc-950 text-[#f2c301] shadow-md scale-105"
                      : "bg-amber-50/70 text-zinc-700 hover:bg-amber-100 hover:text-zinc-950 border border-amber-200/60"
                  }`}
                >
                  <span>{cat}</span>
                  {!loading && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isSelected
                          ? "bg-[#f2c301] text-zinc-950"
                          : "bg-white text-zinc-600 border border-amber-200"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            3. DYNAMIC VIDEO GRID
        ======================================================== */}
        <section className="py-8 md:py-10 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            /* Loading Skeletons */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200/60 animate-pulse flex flex-col justify-between shadow-xs"
                >
                  <div className="aspect-[16/10] bg-zinc-200 w-full" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-zinc-200 rounded-md w-3/4" />
                    <div className="h-3 bg-zinc-100 rounded-md w-full" />
                    <div className="h-3 bg-zinc-100 rounded-md w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredVideos.length === 0 ? (
            /* Empty State */
            <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-amber-200 p-8 max-w-2xl mx-auto space-y-3 shadow-xs">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100/70 border border-amber-300/60 flex items-center justify-center text-[#b8860b]">
                <Film className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 font-serif">
                No Videos in &quot;{activeCategory}&quot;
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto">
                New masterclass videos and reels published via the Admin Dashboard will automatically appear here.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-[#f2c301] text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span>Publish Video from Admin Desk</span>
                </Link>
                {activeCategory !== "ALL" && (
                  <button
                    onClick={() => setActiveCategory("ALL")}
                    className="px-5 py-2.5 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-bold hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    View All Videos
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Dynamic Video Cards Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredVideos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedVideo(item)}
                  className="group bg-white rounded-3xl overflow-hidden border-2 border-amber-200/80 hover:border-[#b8860b] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                >
                  {/* Video Studio Screen Mockup */}
                  <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-zinc-950/20 opacity-85 group-hover:opacity-90 transition-opacity" />

                    {/* Top Bar: Live Studio Badge & Category */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                        <span>{item.isMp4 ? "MP4 VIDEO" : "4K DEMO"}</span>
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
              ))}
            </div>
          )}
        </section>

        {/* ========================================================
            4. VIDEO PLAYER MODAL POPUP
        ======================================================== */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in-0 duration-200"
            onClick={() => setSelectedVideo(null)}
          >
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
                {selectedVideo.isMp4 ? (
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
                      {selectedVideo.duration && (
                        <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 text-[10px] font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#f2c301]" />
                          <span>{selectedVideo.duration}</span>
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
