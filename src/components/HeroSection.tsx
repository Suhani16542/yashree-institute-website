"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Star,
} from "lucide-react";

export default function HeroSection() {
  const rotatingHeadlines = [
    {
      line1: "Your Passion. Our Expertise.",
      highlight: "Your Future in Beauty Starts Here.",
      sub: "Indore's Premier Cosmetology & Aesthetic Academy mentored by Celebrity Makeup Artist Deepika Patidar.",
    },
    {
      line1: "Learn the Art of Professional",
      highlight: "Cosmetology & Aesthetic Mastery.",
      sub: "100% practical hands-on training, live model practice, and guaranteed placement assistance.",
    },
    {
      line1: "Transform From Passionate Beginner to",
      highlight: "Globally Certified Beauty Artist.",
      sub: "Master Makeup, Hair Styling, PMU, Nails, and Medi-Aesthetics with free student practice kits provided.",
    },
    {
      line1: "Build Real Industry Skills.",
      highlight: "Launch Your Salon Career.",
      sub: "Empowering women and future salon entrepreneurs with international-standard education and certification.",
    },
    {
      line1: "Learn. Practice. Shine.",
      highlight: "Shape Your Beauty Career.",
      sub: "Small batches of 25 students for personalized 1-on-1 expert attention and lifetime guidance.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingHeadlines.length);
        setFadeState("in");
      }, 400);
    }, 4200);

    return () => clearInterval(timer);
  }, [rotatingHeadlines.length]);

  const current = rotatingHeadlines[currentIndex];

  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-10 lg:pt-8 lg:pb-14 border-b border-zinc-100 min-h-[500px] lg:min-h-[560px] flex items-center justify-center">
      
      {/* =========================================================================
          LEFT ISOLATED VISUAL: Pure Cutout Serum (Moved Upward, Leaning Inward Toward Center \)
          Placed DIRECTLY on the white hero background — NO container, NO box, NO border
         ========================================================================= */}
      <div className="absolute left-[-35px] sm:left-[-15px] md:left-[1%] lg:left-[2.5%] xl:left-[4%] top-[1%] sm:top-[2%] lg:top-[3%] xl:top-[4%] w-[160px] sm:w-[240px] lg:w-[300px] xl:w-[350px] h-[240px] sm:h-[350px] lg:h-[430px] xl:h-[480px] pointer-events-none select-none z-0 animate-float opacity-25 sm:opacity-100 transition-opacity">
        <div className="relative w-full h-full transform rotate-[13deg] lg:rotate-[15deg] origin-top-left transition-transform duration-700">
          <Image
            src="/images/hero_isolated_serum.png"
            alt="Cosmetology Skincare & Serum Visual"
            fill
            sizes="(max-width: 768px) 160px, (max-width: 1280px) 300px, 360px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* =========================================================================
          RIGHT ISOLATED VISUAL: Pure Cutout Brush & Shimmer (Moved Upward, Leaning Inward Toward Center /)
          Placed DIRECTLY on the white hero background — NO container, NO box, NO border
         ========================================================================= */}
      <div className="absolute right-[-35px] sm:right-[-15px] md:right-[1%] lg:right-[2.5%] xl:right-[4%] top-[1%] sm:top-[2%] lg:top-[3%] xl:top-[4%] w-[160px] sm:w-[240px] lg:w-[300px] xl:w-[350px] h-[240px] sm:h-[350px] lg:h-[430px] xl:h-[480px] pointer-events-none select-none z-0 animate-float-reverse opacity-25 sm:opacity-100 transition-opacity">
        <div className="relative w-full h-full transform -rotate-[13deg] lg:-rotate-[15deg] origin-top-right transition-transform duration-700">
          <Image
            src="/images/hero_isolated_brush.png"
            alt="Professional Makeup Artistry & Brush Visual"
            fill
            sizes="(max-width: 768px) 160px, (max-width: 1280px) 300px, 360px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* =========================================================================
          CENTER HERO CONTENT (Clean, Focused, Centered Typography & CTAs)
         ========================================================================= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Top Brand Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm text-zinc-900 text-[11px] sm:text-[13px] font-semibold tracking-wide mb-4 animate-pulse-glow max-w-full">
          <span className="w-2 h-2 rounded-full bg-[#f2c301] flex-shrink-0" />
          <span className="text-[#b8860b] font-bold">YASHREE INSTITUTE</span>
          <span className="text-zinc-400 hidden xs:inline">•</span>
          <span className="text-zinc-700 text-center">Cosmetology &amp; Aesthetic Academy</span>
        </div>

        {/* Rotating Headline Box */}
        <div className="min-h-[100px] sm:min-h-[120px] lg:min-h-[145px] flex flex-col items-center justify-center max-w-3xl mx-auto px-1">
          <h1
            className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-serif font-bold text-zinc-950 tracking-tight leading-[1.18] sm:leading-[1.14] transition-all duration-400 transform ${
              fadeState === "in"
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-2 scale-98"
            }`}
          >
            <span>{current.line1}</span> <br />
            <span className="text-gold-gradient relative inline-block mt-1">
              {current.highlight}
            </span>
          </h1>
        </div>

        {/* Supporting Description */}
        <p
          className={`mt-3 text-zinc-600 text-sm sm:text-base lg:text-[17px] max-w-xl leading-relaxed transition-opacity duration-400 ${
            fadeState === "in" ? "opacity-100" : "opacity-0"
          }`}
        >
          {current.sub}
        </p>

        {/* Dual CTAs (Gold Shimmer "Enquire Now" + Dark Charcoal "Explore Courses") */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-zinc-950 text-white hover:bg-zinc-800 transition-all duration-300 shadow"
          >
            <span>Explore Courses</span>
          </a>
        </div>

        {/* Rotating Headline Indicator Dots */}
        <div className="flex items-center gap-2 mt-5">
          {rotatingHeadlines.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-6 bg-[#f2c301]" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to headline ${i + 1}`}
            />
          ))}
        </div>

        {/* Star Rating & Social Proof Line */}
        <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-center gap-3 text-xs text-zinc-600">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="font-bold text-zinc-900">4.9 / 5.0 Rating</span>
          <span className="text-zinc-300">•</span>
          <span>500+ Certified Alumni in Indore</span>
        </div>

      </div>
    </section>
  );
}
