import { GraduationCap, Users, Sparkles, Award, HeartHandshake, Star } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function TrustStats() {
  const stats = [
    {
      icon: GraduationCap,
      value: "100%",
      label: "Practical Exposure",
      subtext: "Live models & supervised step-by-step demos",
    },
    {
      icon: Users,
      value: "25",
      label: "Students Max / Batch",
      subtext: "Personalized 1-on-1 mentorship by Deepika Patidar",
    },
    {
      icon: Sparkles,
      value: "18+",
      label: "Certified Programs",
      subtext: "Skin, Hair, Bridal Makeup, SPMU & Nail Art",
    },
    {
      icon: Award,
      value: "100%",
      label: "Placement Support",
      subtext: "Salon employment & freelance studio setup",
    },
    {
      icon: HeartHandshake,
      value: "Lifetime",
      label: "Free Consultation",
      subtext: "Ongoing technical mentorship for all graduates",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-10 md:py-14 lg:py-16 border-y border-zinc-800 relative overflow-hidden">
      {/* Subtle gold glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] bg-[#f2c301]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Positioning Statement */}
        <AnimatedReveal animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-widest mb-2.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#f2c301]" />
              <span>Central India&apos;s Benchmark Academy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white tracking-tight">
              International-Standard Cosmetology &amp; Aesthetic Training in Indore
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Empowering aspiring beauty artists, homemakers, and salon owners with genuine hands-on clinical training, live client confidence, and lifetime professional support.
            </p>

            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-200 text-[11px] font-semibold">
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span>4.9 / 5.0 Rated by 500+ Certified Graduates</span>
            </div>
          </div>
        </AnimatedReveal>

        {/* 5 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-[#f2c301]/60 hover:bg-zinc-900 transition-all duration-300 group hover:-translate-y-1 shadow-lg ${
                  index === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="w-13 h-13 rounded-2xl bg-[#f2c301]/10 group-hover:bg-[#f2c301] group-hover:text-zinc-950 flex items-center justify-center text-[#f2c301] mb-3.5 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#f2c301] tracking-tight group-hover:scale-105 transition-transform">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-zinc-100 mt-1.5 font-serif">
                  {item.label}
                </div>
                <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
