import {
  Users,
  Award,
  Sparkles,
  Calendar,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function WhyChooseUs() {
  // Exact points from PDF Page 3 & Page 7/11/13/15/16
  const pillars = [
    {
      icon: Award,
      title: "Industry Experts As Trainers",
      description: "Learn directly from top salon professionals and celebrity makeup artist Deepika Patidar.",
    },
    {
      icon: Sparkles,
      title: "100% Practical Exposure",
      description: "Step-by-step live demonstrations covering all techniques from basic fundamentals to masterclass level.",
    },
    {
      icon: Users,
      title: "Live Model Practice",
      description: "Gain real confidence by practicing on actual clients and professional mannequins under guidance.",
    },
    {
      icon: ShieldCheck,
      title: "International Certified Courses",
      description: "Certifications recognized globally for professional beauty careers and independent salon entrepreneurship.",
    },
    {
      icon: Calendar,
      title: "Flexible Batches",
      description: "Convenient morning and evening schedules tailored for students and working professionals. Online classes available.",
    },
    {
      icon: GraduationCap,
      title: "25 Students Only 1 Batch",
      description: "Guaranteed one-on-one student attention, all practice products provided by us, and study notes included.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#faf8f5] relative border-b border-amber-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
              <span>Why Yashree Academy?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
              Your Passion. Our Expertise. Your Future Starts Here!
            </h2>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg">
              Transforming beginners into certified artists through 100% practical learning, premium product training, and guaranteed 100% placement assistance.
            </p>
          </div>
        </AnimatedReveal>

        {/* 6 Grid Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="p-8 rounded-3xl bg-white border border-amber-100/80 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f2c301]/20 flex items-center justify-center text-[#b8860b] mb-6 transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-zinc-900 group-hover:text-[#b8860b] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-bold text-[#b8860b] gap-1">
                    <span>Yashree Academy Guarantee</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Documented Badges from PDF Page 7 */}
        <AnimatedReveal animation="scale" delay={200}>
          <div className="mt-14 p-6 rounded-2xl bg-white border border-amber-200 shadow-sm flex flex-wrap items-center justify-around gap-4 text-center">
            <div className="text-xs sm:text-sm font-bold text-zinc-800">
              💻 <span className="text-[#b8860b]">Online Classes</span> Available
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-800">
              🤝 <span className="text-[#b8860b]">Lifetime Free</span> Consultation
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-800">
              ✨ <span className="text-[#b8860b]">130+</span> Services Covered
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-800">
              📊 <span className="text-[#b8860b]">Client &amp; Stock</span> Management Training
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
