"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Award,
  ShieldCheck,
  HeartHandshake,
  Quote,
} from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Exact 8 Core Disciplines from PDF Page 2 & 17
  const specializations = [
    {
      name: "Skin",
      tagline: "Glow That Reflects You",
      details: "Comprehensive salon skin care, deep cleanups, facials, skin analysis, D-tan, and body spa therapy.",
      icon: "✨",
    },
    {
      name: "Makeup",
      tagline: "Enhance Your Beauty",
      details: "Basic to pro training, color wheel, undertones, contouring, airbrush makeup, and camera portfolio shoots.",
      icon: "💄",
    },
    {
      name: "Nails",
      tagline: "Perfect Nails For Every Mood",
      details: "Complete nail extensions training, 20+ trendy nail art designs, machine & UV curing knowledge.",
      icon: "💅",
    },
    {
      name: "PMU",
      tagline: "Define. Enhance. Empower.",
      details: "Microblading, combination brows, ombre brows, lip neutralizing & tinting, lash extensions, and beauty mole creation.",
      icon: "👁️",
    },
    {
      name: "Hair",
      tagline: "Stronger. Shinier. Healthier.",
      details: "Hair structure science, pH scale, chemical treatments, keratin, botox, nanoplastia, rebonding, and global color.",
      icon: "💇‍♀️",
    },
    {
      name: "Hair Styles",
      tagline: "Style That Speaks You",
      details: "Sectioning techniques, bridal buns, red-carpet inspired looks, saree/lehenga matching, and Instagram reel training.",
      icon: "🎀",
    },
    {
      name: "Hair Cut",
      tagline: "A Fresh Cut A Fresh You",
      details: "Basic to advanced haircut techniques, professional sectioning methods, correct holding and cutting skills.",
      icon: "✂️",
    },
    {
      name: "Aesthetic",
      tagline: "Advanced Beauty Care Radiance Beyond Beauty",
      details: "Non-doctor aesthetic treatments, professional medi-facials, chemical peels, microdermabrasion, and BB glow.",
      icon: "🌸",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <AnimatedReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founder &amp; Director&apos;s Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
              International-Standard Beauty Education in Indore
            </h2>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg">
              Mentored by Beauty Expert &amp; Celebrity Makeup Artist <strong>Deepika Patidar</strong>
            </p>
          </div>
        </AnimatedReveal>

        {/* Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: High-Resolution Founder Photo & Award Showcase */}
          <div className="lg:col-span-5 relative">
            <AnimatedReveal animation="fade-left">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200 shadow-2xl aspect-[4/5] bg-zinc-950">
                  <Image
                    src="/images/founder_award_stage.png"
                    alt="Deepika Patidar, Founder & Director of Yashree Institute"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2c301] text-zinc-950 text-xs font-bold uppercase tracking-wider mb-2 shadow">
                      <Award className="w-3.5 h-3.5" /> Founder &amp; Director
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Deepika Patidar
                    </h3>
                    <p className="text-xs text-amber-200 font-medium mt-0.5">
                      Celebrity Makeup Artist &amp; Advanced Cosmetologist
                    </p>
                  </div>
                </div>

                {/* Floating Award Badge */}
                <div className="absolute -bottom-6 -right-2 sm:-right-6 glass-dark text-white p-4 rounded-2xl shadow-2xl border border-zinc-800 max-w-[230px] hidden sm:block">
                  <p className="text-xs font-bold text-[#f2c301]">
                    🏆 Award Winner
                  </p>
                  <p className="text-[11px] text-zinc-300 mt-0.5">
                    Business &amp; Beauty Icon Award Show 2026
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right: Exact Profile Content from PDF Page 2 & Page 3 */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <AnimatedReveal animation="fade-right">
              <div className="border-l-4 border-[#f2c301] pl-5 space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                  Visionary Leadership
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">
                  Deepika Patidar
                </h3>
                <p className="text-sm font-semibold text-amber-900">
                  Founder &amp; Director, Yashree Institute, Indore
                </p>
              </div>

              {/* Exact Profile Text from PDF Page 2 */}
              <p className="text-zinc-700 leading-relaxed text-base mt-4">
                <strong>Deepika Patidar</strong> is the visionary Founder and Director of Yashree Institute, Indore. As an expert in Advanced Cosmetology and Aesthetic Treatments, she has dedicated her career to providing international-standard beauty education.
              </p>

              <p className="text-zinc-700 leading-relaxed text-base mt-3">
                With a strong passion for <strong>women empowerment</strong>, Deepika has successfully mentored and trained hundreds of students, transforming them into skilled professionals and successful salon entrepreneurs.
              </p>

              {/* Exact Motto from PDF Page 2 */}
              <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-zinc-900 relative mt-4">
                <Quote className="w-8 h-8 text-[#f2c301] opacity-50 absolute top-3 right-3" />
                <p className="text-sm font-serif italic text-zinc-800 leading-relaxed">
                  &ldquo;Her motto is to deliver top-tier practical knowledge and industry-ready skills, making Yashree Institute a premier hub for career excellence.&rdquo;
                </p>
                <p className="text-xs font-bold text-amber-900 mt-2">
                  — Deepika Patidar (Founder &amp; Director)
                </p>
              </div>

              {/* Core Pillars from PDF Page 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-amber-100 hover:border-amber-300 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-[#b8860b] mb-1" />
                  <h4 className="font-bold text-zinc-900 text-xs">100% Practical</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Live model &amp; dummy practice</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-amber-100 hover:border-amber-300 transition-colors">
                  <HeartHandshake className="w-5 h-5 text-[#b8860b] mb-1" />
                  <h4 className="font-bold text-zinc-900 text-xs">Empowerment</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Women self-reliance &amp; salons</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-amber-100 hover:border-amber-300 transition-colors">
                  <Award className="w-5 h-5 text-[#b8860b] mb-1" />
                  <h4 className="font-bold text-zinc-900 text-xs">100% Placement</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Guaranteed placement support</p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>

        {/* 8 Core Focus Disciplines from Brand Identity (Page 2 & 17) */}
        <AnimatedReveal animation="scale">
          <div className="bg-[#faf8f5] rounded-3xl p-8 lg:p-10 border border-amber-200 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Yashree Institute Disciplines
              </span>
              <h3 className="text-2xl font-serif font-bold text-zinc-950 mt-1">
                Core Beauty &amp; Aesthetic Fields
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Click any discipline below to view its documented scope
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
              {specializations.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3 rounded-2xl text-center transition-all duration-200 border cursor-pointer ${
                    activeTab === idx
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-md scale-105"
                      : "bg-white text-zinc-800 border-zinc-200 hover:border-amber-300 hover:scale-102"
                  }`}
                >
                  <div className="text-xl mb-1">{item.icon}</div>
                  <div className="text-xs font-bold leading-tight">{item.name}</div>
                </button>
              ))}
            </div>

            {/* Active Detail Display */}
            <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#b8860b] uppercase tracking-wider">
                  {specializations[activeTab].tagline}
                </span>
                <h4 className="text-lg font-serif font-bold text-zinc-950">
                  {specializations[activeTab].name} Education Scope
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600">
                  {specializations[activeTab].details}
                </p>
              </div>

              <a
                href="#courses"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#f2c301] text-zinc-950 text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all shadow flex-shrink-0 self-start sm:self-center"
              >
                <span>Explore Programs</span>
                <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
}
