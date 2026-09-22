import { Sparkles, Compass, Package, Camera, Award, ArrowRight } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function EnrollmentJourney() {
  const steps = [
    {
      step: "01",
      icon: Compass,
      title: "Free Counseling & Batch Selection",
      subtitle: "Personalized Career Assessment",
      description:
        "Speak with celebrity expert Deepika Patidar and counselors to select the right course. Choose between flexible morning, evening, or weekend batches.",
      tag: "Step 1",
    },
    {
      step: "02",
      icon: Package,
      title: "Hands-on Training & Free Starter Kit",
      subtitle: "All Practice Materials Included",
      description:
        "Receive your complete student vanity kit with professional brushes, mannequins, and tools. Start 100% practical training from day one.",
      tag: "Step 2",
    },
    {
      step: "03",
      icon: Camera,
      title: "Live Model Practice & Portfolio Shoot",
      subtitle: "Real Client Confidence",
      description:
        "Perform live transformations on real models. Get your signature bridal & aesthetic portfolio professionally shot under studio lighting with Instagram reel guidance.",
      tag: "Step 3",
    },
    {
      step: "04",
      icon: Award,
      title: "Global Certification & 100% Placement",
      subtitle: "Launch Your Salon Career",
      description:
        "Graduate at the prestigious annual convocation with accredited certificates valid worldwide, plus direct salon placement assistance and lifetime consultation.",
      tag: "Step 4",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Structured Student Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
              Your 4-Step Journey to a Successful Beauty Career
            </h2>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg">
              From zero experience to an internationally certified cosmetology professional with lifetime industry mentorship.
            </p>
          </div>
        </AnimatedReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const delays = [0, 100, 200, 300] as const;
            return (
              <AnimatedReveal
                key={idx}
                animation="fade-up"
                delay={delays[idx]}
                className="h-full"
              >
                <div className="relative bg-[#faf8f5] rounded-3xl p-7 border border-amber-200/80 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                  {/* Step Number Top Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-[#f2c301] flex items-center justify-center font-serif text-lg font-bold group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      <span className="text-[11px] font-bold text-[#b8860b] bg-amber-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-amber-100/60 text-[#b8860b] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-serif font-bold text-zinc-950 group-hover:text-[#b8860b] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-900 mt-1">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs font-bold text-zinc-800">
                    <span>Yashree Advantage</span>
                    <ArrowRight className="w-4 h-4 text-[#b8860b] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <AnimatedReveal animation="scale" delay={200}>
          <div className="mt-14 p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301]">
                Next Batch Starting Soon
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Ready to Begin Your Beauty &amp; Cosmetology Career?
              </h4>
              <p className="text-xs text-zinc-400">
                Only 25 seats per batch for dedicated individual attention. Book your seat today.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn shadow-lg hover:scale-105 transition-all flex-shrink-0"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
