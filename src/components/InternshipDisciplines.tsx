"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Scissors,
  Paintbrush,
  Sparkle,
  BookOpen,
  Award,
  CheckCircle2,
  GraduationCap,
  Layers,
} from "lucide-react";
import { COURSES_LIST, CourseData } from "@/data/coursesData";

export default function InternshipDisciplines() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: "All Disciplines", count: COURSES_LIST.length, icon: BookOpen },
    {
      id: "Beauty & Skin",
      label: "Skin & Aesthetics",
      count: COURSES_LIST.filter((c) => c.category === "Beauty & Skin").length,
      icon: Sparkles,
    },
    {
      id: "Hair",
      label: "Hair Science & Styling",
      count: COURSES_LIST.filter((c) => c.category === "Hair").length,
      icon: Scissors,
    },
    {
      id: "Makeup",
      label: "Makeup & PMU",
      count: COURSES_LIST.filter((c) => c.category === "Makeup").length,
      icon: Paintbrush,
    },
    {
      id: "Nails",
      label: "Nail Studio",
      count: COURSES_LIST.filter((c) => c.category === "Nails").length,
      icon: Sparkle,
    },
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? COURSES_LIST
      : COURSES_LIST.filter((c) => c.category === selectedCategory);

  const getThemeConfig = (category: CourseData["category"]) => {
    switch (category) {
      case "Beauty & Skin":
        return {
          icon: Sparkles,
          topGlow: "from-amber-400 via-[#f2c301] to-emerald-400",
          numBadge: "bg-[#f2c301]/15 text-[#f2c301] border-[#f2c301]/40",
          categoryBadge: "bg-emerald-950/80 text-emerald-300 border-emerald-700/60",
          iconBg: "bg-gradient-to-br from-amber-400 to-emerald-500 text-zinc-950 shadow-amber-500/20",
          cardBorder: "border-zinc-800 hover:border-[#f2c301]/80",
          cardShadow: "hover:shadow-[0_20px_45px_-10px_rgba(242,195,1,0.2)]",
          cardBg: "hover:bg-gradient-to-b hover:from-zinc-900 hover:to-zinc-950",
          highlightPill: "bg-zinc-900/90 text-amber-200 border-zinc-700/80",
          titleHover: "group-hover:text-[#f2c301]",
          ctaHover: "group-hover:text-[#f2c301]",
          ctaBtn: "group-hover:bg-[#f2c301] group-hover:text-zinc-950",
        };
      case "Hair":
        return {
          icon: Scissors,
          topGlow: "from-amber-500 via-orange-400 to-amber-600",
          numBadge: "bg-orange-500/15 text-orange-400 border-orange-500/40",
          categoryBadge: "bg-orange-950/80 text-orange-300 border-orange-700/60",
          iconBg: "bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-orange-500/20",
          cardBorder: "border-zinc-800 hover:border-orange-500/80",
          cardShadow: "hover:shadow-[0_20px_45px_-10px_rgba(249,115,22,0.2)]",
          cardBg: "hover:bg-gradient-to-b hover:from-zinc-900 hover:to-zinc-950",
          highlightPill: "bg-zinc-900/90 text-orange-200 border-zinc-700/80",
          titleHover: "group-hover:text-orange-400",
          ctaHover: "group-hover:text-orange-400",
          ctaBtn: "group-hover:bg-orange-500 group-hover:text-white",
        };
      case "Makeup":
        return {
          icon: Paintbrush,
          topGlow: "from-rose-500 via-pink-400 to-[#f2c301]",
          numBadge: "bg-rose-500/15 text-rose-400 border-rose-500/40",
          categoryBadge: "bg-rose-950/80 text-rose-300 border-rose-700/60",
          iconBg: "bg-gradient-to-br from-rose-500 via-pink-500 to-amber-400 text-white shadow-rose-500/20",
          cardBorder: "border-zinc-800 hover:border-rose-400/80",
          cardShadow: "hover:shadow-[0_20px_45px_-10px_rgba(244,63,94,0.2)]",
          cardBg: "hover:bg-gradient-to-b hover:from-zinc-900 hover:to-zinc-950",
          highlightPill: "bg-zinc-900/90 text-rose-200 border-zinc-700/80",
          titleHover: "group-hover:text-rose-400",
          ctaHover: "group-hover:text-rose-400",
          ctaBtn: "group-hover:bg-rose-500 group-hover:text-white",
        };
      case "Nails":
      default:
        return {
          icon: Sparkle,
          topGlow: "from-purple-500 via-pink-400 to-purple-600",
          numBadge: "bg-purple-500/15 text-purple-400 border-purple-500/40",
          categoryBadge: "bg-purple-950/80 text-purple-300 border-purple-700/60",
          iconBg: "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-purple-500/20",
          cardBorder: "border-zinc-800 hover:border-purple-400/80",
          cardShadow: "hover:shadow-[0_20px_45px_-10px_rgba(168,85,247,0.2)]",
          cardBg: "hover:bg-gradient-to-b hover:from-zinc-900 hover:to-zinc-950",
          highlightPill: "bg-zinc-900/90 text-purple-200 border-zinc-700/80",
          titleHover: "group-hover:text-purple-400",
          ctaHover: "group-hover:text-purple-400",
          ctaBtn: "group-hover:bg-purple-500 group-hover:text-white",
        };
    }
  };

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-900">
      {/* Decorative luxury ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800 text-[#f2c301] shadow-inner">
            <GraduationCap className="w-3.5 h-3.5 text-[#f2c301]" />
            <span>Academic Curriculum &amp; Disciplines</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Explore Our Internship Disciplines
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Select any of the <strong className="text-zinc-200">18 certified beauty courses</strong> below to explore detailed module roadmaps, practical kit setups, and clinical standards before submitting your application.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "bg-[#f2c301] text-zinc-950 border-[#f2c301] shadow-lg shadow-[#f2c301]/20 scale-105"
                    : "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <CatIcon className={`w-3.5 h-3.5 ${isSelected ? "text-zinc-950" : "text-[#f2c301]"}`} />
                <span>{cat.label}</span>
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-[10.5px] font-black ${
                    isSelected
                      ? "bg-zinc-950 text-[#f2c301]"
                      : "bg-zinc-800 text-zinc-300 border border-zinc-700"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 18-Course Luxury Dark Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const overallIndex = COURSES_LIST.findIndex((c) => c.slug === course.slug);
            const numStr = (overallIndex + 1).toString().padStart(2, "0");
            const theme = getThemeConfig(course.category);
            const ThemeIcon = theme.icon;

            // Extract key module highlights
            const moduleHighlights = course.curriculum
              ?.slice(0, 3)
              .map((m) => m.title.replace(/^Module \d+[:\s-]*/i, "").trim())
              .filter(Boolean) || [];

            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className={`group relative bg-zinc-900/90 rounded-3xl p-6 sm:p-7 border ${theme.cardBorder} ${theme.cardShadow} ${theme.cardBg} backdrop-blur-md shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer`}
              >
                {/* Top Animated Glowing Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.topGlow} opacity-70 group-hover:opacity-100 group-hover:h-1.5 transition-all duration-300`}
                />

                {/* Subtle Hover Gradient Glow inside Card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] group-hover:bg-[#f2c301]/5 rounded-full blur-2xl pointer-events-none transition-all" />

                <div className="space-y-4">
                  {/* Top Bar: Sequence Number, Icon & Category Pill */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`font-mono text-xs font-black tracking-wider px-2.5 py-1 rounded-xl border ${theme.numBadge} shadow-inner`}
                      >
                        {numStr}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-xl ${theme.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                      >
                        <ThemeIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <span
                      className={`text-[10.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${theme.categoryBadge}`}
                    >
                      {course.category}
                    </span>
                  </div>

                  {/* Course Name */}
                  <div>
                    <h3
                      className={`text-xl font-serif font-bold text-white ${theme.titleHover} transition-colors duration-200 leading-snug`}
                    >
                      {course.shortTitle}
                    </h3>
                    <p className="text-xs text-[#f2c301] font-semibold mt-0.5">
                      {course.title}
                    </p>
                  </div>

                  {/* Course Specialization Badge */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-zinc-300 bg-zinc-800/90 px-3 py-1 rounded-lg border border-zinc-700/70">
                    <Award className="w-3.5 h-3.5 text-[#f2c301]" />
                    <span>{course.badge}</span>
                  </div>

                  {/* Detailed Description / Summary */}
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {course.heroDescription || course.tagline}
                  </p>

                  {/* Key Learning Modules & Skills Tags */}
                  {moduleHighlights.length > 0 && (
                    <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block">
                        Core Training Topics:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {moduleHighlights.map((topic, i) => (
                          <span
                            key={i}
                            className={`text-[10.5px] font-medium px-2.5 py-0.5 rounded-md border ${theme.highlightPill} line-clamp-1`}
                          >
                            • {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Interactive Action Bar */}
                <div className="pt-5 mt-5 border-t border-zinc-800/90 group-hover:border-zinc-700 flex items-center justify-between text-xs font-bold transition-colors">
                  <div className="space-y-0.5">
                    <span className={`tracking-wide text-zinc-300 ${theme.ctaHover} transition-colors block font-semibold`}>
                      Explore Full Curriculum
                    </span>
                    <span className="text-[10px] text-zinc-500 font-normal">
                      100% Practical Exposure
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full bg-zinc-800 text-zinc-400 ${theme.ctaBtn} flex items-center justify-center transition-all duration-300 shadow-md`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Informational Footer Strip */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-300 shadow-2xl">
          <span className="flex items-center gap-2 font-bold text-[#f2c301]">
            <CheckCircle2 className="w-4 h-4 text-[#f2c301]" />
            18 Certified Academy Programs
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="text-zinc-400">
            Click any discipline above to view syllabus modules, starter kits, and live model practice details.
          </span>
        </div>
      </div>
    </section>
  );
}
