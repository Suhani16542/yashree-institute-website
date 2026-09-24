import {
  Users,
  Award,
  Sparkles,
  Calendar,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Package,
} from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Award,
      tag: "Celebrity Mentorship",
      title: "Industry Experts As Trainers",
      description: "Learn directly from top salon professionals and celebrity makeup artist Deepika Patidar with personal daily feedback.",
    },
    {
      icon: Sparkles,
      tag: "Zero Theory Boredom",
      title: "100% Practical Exposure",
      description: "Step-by-step live demonstrations covering all techniques from basic fundamentals to advanced masterclass clinical care.",
    },
    {
      icon: Users,
      tag: "Real Client Hours",
      title: "Live Model & Mannequin Practice",
      description: "Gain authentic confidence by practicing on real clients and professional dummy stands under senior faculty supervision.",
    },
    {
      icon: ShieldCheck,
      tag: "Authorized Diplomas",
      title: "Recognized Certifications",
      description: "Official credentials valid for salon employment worldwide, brand collaborations, and launching your independent studio.",
    },
    {
      icon: Calendar,
      tag: "Morning & Evening",
      title: "Flexible Batches & Online Options",
      description: "Convenient schedules tailored for college students, homemakers, and working professionals with hybrid support.",
    },
    {
      icon: Package,
      tag: "All Kits Included Free",
      title: "Max 25 Students / Batch",
      description: "Small batch size guarantees 1-on-1 focus. All practice materials, makeup vanity brushes, hair tools & notes are provided free.",
    },
  ];

  return (
    <section id="why-us" className="py-10 md:py-14 lg:py-16 bg-[#faf8f5] relative border-b border-amber-100 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
              <span>Why Yashree Academy?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 tracking-tight leading-tight">
              Your Passion. Our Expertise. Your Career Starts Here!
            </h2>
            <p className="mt-2 text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto">
              Transforming beginners into certified artists through 100% practical training, complete practice kits, and placement assistance in Indore.
            </p>
          </div>
        </AnimatedReveal>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            const delays = [0, 100, 200, 300, 400, 500] as const;
            return (
              <AnimatedReveal
                key={index}
                animation="fade-up"
                delay={delays[index % delays.length]}
                className="h-full"
              >
                <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-amber-200/80 hover:border-[#b8860b] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f2c301] flex items-center justify-center text-[#b8860b] group-hover:text-zinc-950 transition-all duration-300 shadow-2xs">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[10.5px] font-bold text-[#b8860b] bg-amber-50 px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-zinc-950 group-hover:text-[#b8860b] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-semibold text-[#b8860b] justify-between">
                    <span>Yashree Academy Guarantee</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
