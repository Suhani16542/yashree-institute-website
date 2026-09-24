import Link from "next/link";
import { Sparkles, ArrowRight, PackageCheck, Camera, ShieldCheck, Users } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function PracticalExperience() {
  const highlights = [
    { 
      title: "Live Model Sessions", 
      desc: "Supervised client practice on real models for true salon confidence",
      icon: <Users className="w-5 h-5 text-[#f2c301]" />
    },
    { 
      title: "Free Student Practice Kits", 
      desc: "Hair, makeup, nails, skin & chemical tools provided with no extra fee",
      icon: <PackageCheck className="w-5 h-5 text-[#f2c301]" />
    },
    { 
      title: "Studio Camera & Reel Training", 
      desc: "Professional lighting, model shoots & viral Instagram video editing",
      icon: <Camera className="w-5 h-5 text-[#f2c301]" />
    },
    { 
      title: "1-on-1 Expert Mentorship", 
      desc: "Direct daily supervision and feedback under Deepika Patidar",
      icon: <ShieldCheck className="w-5 h-5 text-[#f2c301]" />
    },
  ];

  return (
    <section id="training" className="py-10 md:py-14 lg:py-16 bg-zinc-950 text-white relative overflow-hidden border-t border-b border-zinc-800">
      {/* Ambient luxury lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal animation="fade-up">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2c301]/20 border border-amber-400/40 text-[#f2c301] text-xs font-bold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Practical Learning Method</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white tracking-tight leading-[1.15]">
              Learn By Doing — From Day One with Professional Practice Kits
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              At Yashree Institute, theory is directly followed by extensive supervised live practice. Students never have to worry about sourcing expensive materials — <strong>all practice cosmetics, brush sets, hair tools, and mannequins are provided directly by us</strong> during training.
            </p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400/60 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between shadow-lg group hover:scale-[1.02]"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center group-hover:bg-[#f2c301] group-hover:text-zinc-950 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-serif group-hover:text-[#f2c301] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-[#f2c301]">
                  <span>Included Free in Batch</span>
                </div>
              </div>
            ))}
          </div>

          {/* Centered CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <Link
              href="/practical-training"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all duration-200"
            >
              <PackageCheck className="w-4 h-4" />
              <span>View Practical Training Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919589871662?text=Hi%20Yashree%20Institute,%20I%20want%20to%20know%20about%20your%20practical%20training%20and%20kits."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/50 transition-all"
            >
              <span>Enquire Practice Kits on WhatsApp</span>
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
