import Image from "next/image";
import { Sparkles, CheckCircle2, Camera, Heart, ArrowRight } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function MakeupMasterySection() {
  const highlights = [
    "Colour Wheel Theory & Skin Undertone Matching",
    "Flawless HD & Airbrush Foundation Base Creation",
    "Eye Shade Selection & Seamless Smokey/Glitter Blending",
    "Face Shape Contouring, Baking & Strobe Highlighting",
    "Precision Lip Shaping, Ombre & Waterproof Seal",
    "5 Complete Live Bridal & Red-Carpet Transformations",
    "Professional Studio Lighting Camera Portfolio Shoot",
    "Viral Instagram Reel Creation & Video Editing Mastery",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-amber-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content Description */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <AnimatedReveal animation="fade-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>Celebrity Masterclass Track</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight leading-tight mt-3">
                Professional Makeup Artistry &amp; Bridal Transformations
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed mt-4">
                Learn directly under the personal mentorship of <strong>Celebrity Makeup Artist Deepika Patidar</strong>. From basic skin prep to ultra-glam royal bridal looks and airbrushing, we transform passionate beginners into high-demand bridal artists.
              </p>

              {/* Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-[#faf8f5] border border-amber-100 text-xs font-medium text-zinc-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Studio Shoot Callout */}
              <div className="p-4 rounded-2xl bg-zinc-950 text-white border border-zinc-800 flex items-center gap-3.5 mt-4">
                <div className="w-10 h-10 rounded-xl bg-[#f2c301] text-zinc-950 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <strong className="text-white block font-serif text-sm">Portfolio Shoots &amp; Reel Training</strong>
                  <span className="text-zinc-400">High-definition studio camera shoot with real models included for your professional portfolio.</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn shadow-md hover:scale-105 transition-all"
                >
                  <span>Explore Makeup Masterclass</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right: Editorial Bridal Makeup Visual */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <AnimatedReveal animation="fade-right">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-2xl bg-zinc-950 aspect-[4/3] group">
                <Image
                  src="/images/makeup_training_hero.jpg"
                  alt="Professional Bridal Makeup Training with Deepika Patidar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/40 text-xs font-bold text-[#f2c301] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Basic to Pro Makeup</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#f2c301]">
                    Personal Mentorship
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    Mentored by Celebrity Artist Deepika Patidar
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
