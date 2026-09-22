import Image from "next/image";
import { Calendar, Heart, Check } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function ServicesSection() {
  const bridalPackages = [
    {
      title: "Royal Bridal Transformation",
      desc: "Full signature bridal HD / Airbrush look, skin prep, luxury lashes, jewelry & dupatta setting.",
      badge: "Signature Look",
    },
    {
      title: "Engagement & Reception Styling",
      desc: "Chic, radiant, and contemporary styling customized for your event theme and outfit.",
      badge: "High Glamour",
    },
    {
      title: "Pre-Wedding Shoot Makeup",
      desc: "Camera-ready outdoor & studio makeup crafted for natural high-definition photography.",
      badge: "Studio Ready",
    },
    {
      title: "Party & Festive Makeup",
      desc: "Subtle to bold smokey eye looks with flawless long-lasting base for family celebrations.",
      badge: "Quick Glam",
    },
  ];

  const aestheticServices = [
    {
      name: "Permanent Eyebrows Microblading & Ombre",
      desc: "Natural feather hair strokes & soft powder gradient definition.",
    },
    {
      name: "Lip Neutralizing & Rosy Tinting",
      desc: "Color correction for uneven lips with gentle natural pigment infusion.",
    },
    {
      name: "Hydra Facial & High-Frequency Care",
      desc: "Deep pore vacuum extraction, intensive hydration & anti-bacterial therapy.",
    },
    {
      name: "BB Glow & Nano-Needling Skin Radiance",
      desc: "Even skin tone rejuvenation that delivers an enduring, radiant glow.",
    },
    {
      name: "Keratin, Botox & Nanoplastia Hair Spa",
      desc: "Intense cuticle repair and frizz-free permanent straightening.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5" />
              <span>Salon &amp; Parlour Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
              Get A Perfect Celebrity Look Done
            </h2>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg">
              Look Like a Star, Feel Like a Queen — Handcrafted Bridal, Occasion, and Clinical Aesthetic Treatments.
            </p>
          </div>
        </AnimatedReveal>

        {/* Split Editorial Layout: Bridal on Left, Aesthetics on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left: Bridal & Event Glamour */}
          <div className="lg:col-span-6 flex">
            <AnimatedReveal animation="fade-left" className="w-full flex">
              <div className="w-full bg-[#faf8f5] rounded-3xl p-8 border border-amber-200 shadow-md flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-amber-200">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                        Celebrity Styling
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mt-1">
                        Bridal &amp; Occasion Makeup
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#f2c301] text-zinc-950 flex items-center justify-center font-bold">
                      💄
                    </div>
                  </div>

                  {/* Photo Banner */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-amber-200 shadow bg-zinc-900">
                    <Image
                      src="/images/celebrity_makeup.jpg"
                      alt="Celebrity Makeup by Deepika Patidar"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium">
                      ✨ Pre-Bridal &amp; Wedding Packages Available in Indore
                    </div>
                  </div>

                  {/* Bridal Services List */}
                  <div className="space-y-3">
                    {bridalPackages.map((pkg, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-amber-100 flex items-start justify-between gap-3 hover:border-amber-300 transition-colors"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-zinc-900">{pkg.title}</h4>
                          <p className="text-xs text-zinc-600 mt-0.5 leading-snug">{pkg.desc}</p>
                        </div>
                        <span className="text-[10px] font-bold text-[#b8860b] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 flex-shrink-0">
                          {pkg.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-amber-200/80 flex items-center justify-between">
                  <a
                    href="https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20would%20like%20to%20book%20a%20Bridal/Party%20Makeup%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-zinc-950 text-[#f2c301] text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Bridal Appointment</span>
                  </a>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right: Clinical Aesthetics & Permanent Makeup */}
          <div className="lg:col-span-6 flex">
            <AnimatedReveal animation="fade-right" className="w-full flex">
              <div className="w-full bg-zinc-950 text-white rounded-3xl p-8 border border-zinc-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301]">
                        Clinical &amp; Semi-Permanent
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white mt-1">
                        PMU &amp; Aesthetic Care
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 text-[#f2c301] flex items-center justify-center font-bold">
                      🌸
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Advanced, sterile, device-guided non-doctor aesthetic procedures designed to enhance your natural beauty features permanently with zero downtime.
                  </p>

                  {/* Aesthetic Services List */}
                  <div className="space-y-3">
                    {aestheticServices.map((srv, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-[#f2c301]/40 transition-colors flex items-start gap-3"
                      >
                        <Check className="w-4 h-4 text-[#f2c301] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-white">{srv.name}</h4>
                          <p className="text-xs text-zinc-400 mt-0.5 leading-snug">{srv.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between relative z-10">
                  <a
                    href="https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20would%20like%20to%20consult%20for%20Aesthetic/PMU%20treatment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl shimmer-btn text-zinc-950 text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Consult Aesthetic Specialist</span>
                  </a>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
