"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, Award, Sparkles } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Celebrity" | "Seminars" | "Training" | "Convocation";
  image: string;
  caption: string;
  isFeatured?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "award-1",
    title: "Business & Beauty Icon Award 2026 — Bhopal",
    category: "Seminars",
    image: "/images/award_ceremony_team.jpg",
    caption: "Deepika Patidar & Yashree Institute leadership felicitated on stage with the Business & Beauty Icon Award 2026 in Bhopal.",
    isFeatured: true,
  },
  {
    id: "founder-stage",
    title: "Founder Award Presentation",
    category: "Seminars",
    image: "/images/founder_award_stage.png",
    caption: "Honored on national stage for transformative contributions to women empowerment and professional cosmetology education.",
  },
  {
    id: "convocation-main",
    title: "Student Convocation & Award Ceremony",
    category: "Convocation",
    image: "/images/students_convocation.jpg",
    caption: "Annual convocation at Indore campus: official certificates awarded to graduating students embarking on salon careers.",
  },
  {
    id: "celeb-main",
    title: "Celebrity Makeup — Glam. Grace. Perfection.",
    category: "Celebrity",
    image: "/images/celebrity_makeup.jpg",
    caption: "Look Like a Star, Feel Like a Queen — High-fashion bridal looks and masterclass certifications.",
  },
  {
    id: "seminar-grid",
    title: "Seminars, Workshops & Live Demos",
    category: "Training",
    image: "/images/seminar_awards_grid.jpg",
    caption: "Live stage demonstrations, keynote speeches, hands-on masterclasses, and student felicitations.",
    isFeatured: true,
  },
  {
    id: "founder-card",
    title: "Mentorship & Salon Career Incubation",
    category: "Convocation",
    image: "/images/founder_profile.jpg",
    caption: "Deepika Patidar personally guiding students into confident beauty entrepreneurs and certified artists.",
  },
];

const TABS = ["All Showcase", "Celebrity", "Seminars", "Training", "Convocation"] as const;

export default function GalleryShowcase() {
  const [activeTab, setActiveTab] = useState<string>("All Showcase");

  const filteredItems =
    activeTab === "All Showcase"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#faf8f5] relative border-b border-amber-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-[#b8860b]" />
            <span>Moments of Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
            Awards, Seminars &amp; Convocation Gallery
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg">
            Authentic moments from Yashree Institute — national award stages, celebrity masterclasses, and proud student graduations.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === tab
                  ? "bg-zinc-950 text-[#f2c301] shadow-md scale-105"
                  : "bg-white text-zinc-700 hover:bg-amber-50 hover:text-zinc-950 border border-zinc-200"
              }`}
            >
              {tab === "All Showcase" ? "All Moments" : tab}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => {
            const isWide = item.isFeatured;
            return (
              <div
                key={item.id}
                className={`group bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col ${
                  isWide ? "md:col-span-8 lg:col-span-8" : "md:col-span-4 lg:col-span-4"
                }`}
              >
                <div
                  className={`relative bg-zinc-950 overflow-hidden ${
                    isWide ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={isWide ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 100vw, 400px"}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#f2c301] text-[10px] font-bold uppercase tracking-wider border border-amber-300/40">
                      {item.category}
                    </span>
                    {isWide && (
                      <span className="px-2.5 py-1 rounded-full bg-[#f2c301] text-zinc-950 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                        <Award className="w-3 h-3" /> Featured Milestone
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3
                      className={`font-serif font-bold text-white leading-tight ${
                        isWide ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 bg-white flex-1 flex items-center">
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
