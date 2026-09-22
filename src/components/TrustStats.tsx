import { GraduationCap, Users, Sparkles, Award, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function TrustStats() {
  const stats = [
    {
      icon: GraduationCap,
      value: "100%",
      label: "Practical Exposure",
      subtext: "Live models & step-by-step demonstrations",
    },
    {
      icon: Users,
      value: "25",
      label: "Students Max / Batch",
      subtext: "Personalized 1-on-1 expert attention",
    },
    {
      icon: Sparkles,
      value: "130+",
      label: "Services Covered",
      subtext: "From salon fundamentals to advanced PMU",
    },
    {
      icon: Award,
      value: "100%",
      label: "Placement Support",
      subtext: "Guaranteed salon career & setup guidance",
    },
    {
      icon: HeartHandshake,
      value: "Lifetime",
      label: "Free Consultation",
      subtext: "Ongoing technical guidance for all alumni",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-14 lg:py-18 border-y border-zinc-800 relative overflow-hidden">
      {/* Subtle gold glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#f2c301]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Positioning Statement */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Excellence in Beauty Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Central India&apos;s Benchmark in Professional Cosmetology
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Empowering aspiring beauticians and salon owners with international-standard practical training, real model practice, and lifetime mentorship under Deepika Patidar.
          </p>
        </div>

        {/* 5 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 hover:border-[#f2c301]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f2c301]/10 group-hover:bg-[#f2c301]/20 flex items-center justify-center text-[#f2c301] mb-3 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#f2c301] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-zinc-100 mt-1">
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
