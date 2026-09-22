import Image from "next/image";
import { Sparkles, CheckCircle2, Shield, Award, ArrowRight } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function CosmetologySection() {
  const modules = [
    "Foundation of Aesthetics & Skin Science",
    "Clinical Skin Analysis & Fitzpatrick Profiling",
    "Professional Medi-Facials & Hydra Care",
    "Chemical Peels & Exfoliation Depth Control",
    "Microdermabrasion & Skin Resurfacing",
    "BB Glow & Nano-Needling Treatments",
    "Infection Control, Hygiene & Sterilization",
    "Clinic Setup & Aesthetic Business Management",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#faf8f5] relative border-b border-amber-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Editorial Image Composition */}
          <div className="lg:col-span-6 relative">
            <AnimatedReveal animation="fade-left">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-2xl bg-zinc-950 aspect-[4/3] group">
                <Image
                  src="/images/cosmetology_training_hero.jpg"
                  alt="Professional Cosmetology & Aesthetic Academy Training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/40 text-xs font-bold text-[#f2c301] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Clinical Cosmetology Track</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#f2c301]">
                    High-Income Clinical Career
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    Non-Doctor Aesthetic Training &amp; Medi-Facials
                  </h3>
                </div>
              </div>

              {/* Floating Trust Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-zinc-950 text-white p-4 rounded-2xl shadow-2xl border border-zinc-800 max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-2 text-[#f2c301] text-xs font-bold mb-1">
                  <Shield className="w-4 h-4" /> Device Hands-on
                </div>
                <p className="text-[11px] text-zinc-300">
                  100% supervised device practice on live models in sterile clinic setup.
                </p>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right: PDF Sourced Content */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedReveal animation="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>Flagship Discipline</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight leading-tight mt-3">
                Master Advanced Cosmetology &amp; Medi-Aesthetic Science
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed mt-4">
                Step into the highest-paying segment of modern beauty care. Our <strong>Non-Doctor Aesthetic Course</strong> is meticulously formulated based on international dermatological protocols, equipping you to perform clinical medi-facials, peels, and resurfacing safely.
              </p>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
                {modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-amber-100/80 text-xs font-medium text-zinc-800 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn shadow-md hover:scale-105 transition-all"
                >
                  <span>View Full Syllabus</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20want%20to%20know%20more%20about%20the%20Non-Doctor%20Aesthetic%20Course."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-zinc-900 hover:text-[#b8860b] transition-colors underline underline-offset-4"
                >
                  Inquire Batch Dates &rarr;
                </a>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
