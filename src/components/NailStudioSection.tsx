import Image from "next/image";
import { Sparkles, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function NailStudioSection() {
  const nailModules = [
    "Gel & Acrylic Extensions Architecture",
    "Natural Nail Overlaying & Tip Blending",
    "20+ Trending Nail Art Styles (Chrome, Ombre, 3D, Foil)",
    "Cuticle Prep, Precision Shaping & Buffing",
    "UV / LED Lamp Curing Standards & Safety",
    "Refills, Maintenance & Safe Soak-off Removal",
    "Nail Art Brush Set Provided for Practice",
    "Client Consultation & Studio Pricing Setup",
  ];

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-white relative border-b border-amber-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <AnimatedReveal animation="fade-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>15 Days Intensive Track</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight leading-tight mt-3">
                Nail Extensions &amp; 20+ Trend-Setting Nail Art Designs
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed mt-4">
                <strong>&ldquo;Learn in 15 Days • Earn for a Lifetime&rdquo;</strong> — Master the fast-growing luxury nail studio trade. Learn high-end Gel and Acrylic extensions, intricate artistic detailing, and modern machine handling under expert supervision.
              </p>

              {/* Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
                {nailModules.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-[#faf8f5] border border-amber-100 text-xs font-medium text-zinc-800"
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
                  <span>Explore Nail Art Program</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right: Editorial Nail Photo */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <AnimatedReveal animation="fade-right">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-2xl bg-zinc-950 aspect-[4/3] group">
                <Image
                  src="/images/nail_training_hero.jpg"
                  alt="Professional Nail Extensions & Nail Art Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/40 text-xs font-bold text-[#f2c301] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Nail Art Studio Track</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#f2c301]">
                    Quick Career Launch
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    Gel, Acrylic &amp; 3D Nail Art Mastery
                  </h3>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
