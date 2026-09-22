import Image from "next/image";
import { Sparkles, CheckCircle2, Scissors, ArrowRight } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function HairArtistrySection() {
  const chemicalModules = [
    "Hair Structure, Porosity & pH Scale Science",
    "Keratin Treatment & Deep Botox Infusion",
    "Nanoplastia & Permanent Straightening / Rebonding",
    "Hair Colour Wheel Theory & Global Color Formulation",
    "Advanced Balayage, Ombre & Strip Highlighting",
    "Precision Sectioning, Angle Holding & Haircut Mastery",
    "Bridal & Red-Carpet Hairstyles (Juda, Buns, Waves)",
    "Hair Dummy & Stand Practice Provided Directly",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#faf8f5] relative border-b border-amber-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Luxury Hair Styling Photo */}
          <div className="lg:col-span-6 relative">
            <AnimatedReveal animation="fade-left">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-2xl bg-zinc-950 aspect-[4/3] group">
                <Image
                  src="/images/hair_training_hero.jpg"
                  alt="Hair Styling & Chemical Treatments Masterclass"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/40 text-xs font-bold text-[#f2c301] flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5" />
                  <span>Chemical &amp; Styling Science</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#f2c301]">
                    Chemical Treatments &amp; Styling
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    Keratin, Botox, Nanoplastia &amp; Advanced Cuts
                  </h3>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedReveal animation="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>Hair Masterclass Track</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight leading-tight mt-3">
                Hair Science, Chemical Treatments &amp; Advanced Styling
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed mt-4">
                Master the exact chemistry of modern hair transformations. From diagnosing hair texture on the <strong>pH scale</strong> to performing flawless <strong>Nanoplastia, Keratin, and Balayage color formulation</strong>, get hands-on experience on live models and mannequins.
              </p>

              {/* Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
                {chemicalModules.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-amber-100 text-xs font-medium text-zinc-800 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn shadow-md hover:scale-105 transition-all"
                >
                  <span>Explore Hair Masterclass</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
