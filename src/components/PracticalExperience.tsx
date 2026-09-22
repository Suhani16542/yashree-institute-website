import Image from "next/image";
import { CheckCircle2, Camera, Sparkles, PackageCheck } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function PracticalExperience() {
  const kitItems = [
    { title: "Hair Styling Tool Set", desc: "Professional combs, section clips, rollers, crimpers & dummy with stand" },
    { title: "Nail Art Brush & Extension Set", desc: "Complete nail brush kit, extension tips, tools & practice products" },
    { title: "Make-up Brush & Vanity Set", desc: "High-grade blending brushes, sponges, palettes & beauty apron" },
    { title: "Chemical Practice Products", desc: "All salon creams, keratin, color formulas & developer supplied for practice" },
    { title: "Portfolio Shoot & Reel Guidance", desc: "Professional studio camera lighting & Instagram reel creation sessions" },
    { title: "Theory Manuals & PDF Notes", desc: "Detailed step-by-step printed guides and lifetime reference materials" },
  ];

  return (
    <section id="training" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase of Practical Learning */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedReveal animation="fade-left">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200 shadow-xl bg-zinc-900 aspect-[4/3]">
                <Image
                  src="/images/students_convocation.jpg"
                  alt="Practical Training and Student Convocation at Yashree Institute"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-[#f2c301] text-zinc-950 text-xs font-bold uppercase tracking-wider">
                    Real Learning Environment
                  </span>
                  <h4 className="text-xl font-serif font-bold text-white mt-2">
                    Hands-on Sessions on Dummy &amp; Live Models
                  </h4>
                </div>
              </div>

              {/* Sub-grid of two real photos */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-amber-200 shadow-md">
                  <Image
                    src="/images/seminar_awards_grid.jpg"
                    alt="Live Demo & Seminar Sessions at Yashree Institute"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[11px] text-white font-medium text-center">
                    Live Masterclass Demo
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-amber-200 shadow-md">
                  <Image
                    src="/images/award_ceremony_team.jpg"
                    alt="Awards & Student Felicitations"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[11px] text-white font-medium text-center">
                    Academy Felicitations
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Training Description & Kit Inclusions */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <AnimatedReveal animation="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Practical Learning Method</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 tracking-tight leading-tight mt-3">
                Learn By Doing — From Day One with Professional Practice Kits
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed mt-4">
                At Yashree Institute, theory is directly followed by extensive supervised live practice. Students never have to worry about sourcing expensive materials — <strong>all practice cosmetics, brush sets, hair tools, and mannequins are provided directly by us</strong> during training.
              </p>

              {/* Kit Inclusions List */}
              <div className="space-y-3 pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 text-[#b8860b]" />
                  <span>Kit &amp; Resources Provided To Students:</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {kitItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#faf8f5] border border-amber-100 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-zinc-900">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Camera Shoot & Social Media Reel Training Callout */}
              <div className="p-5 rounded-2xl bg-zinc-950 text-white border border-zinc-800 flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-[#f2c301] text-zinc-950 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Studio Portfolio Shoots &amp; Instagram Reel Training
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Learn how to professionally photograph your work, create viral Instagram content, and present a high-end portfolio to attract bridal clients.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
