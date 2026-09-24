import Image from "next/image";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function StudentConvocation() {
  return (
    <section className="py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text / Certificate Recognition */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedReveal animation="fade-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Convocation &amp; Placement</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight leading-tight mt-3">
                Proud Certificate Distribution &amp; Career Graduation
              </h2>

              <blockquote className="p-6 rounded-2xl bg-[#faf8f5] border-l-4 border-[#f2c301] text-zinc-800 italic text-base sm:text-lg leading-relaxed shadow-sm mt-4">
                &ldquo;Certificates Were Proudly Awarded To All Students Upon The Successful Completion Of Professional Courses At Yashree Institute Indore. Under The Visionary Guidance Of Founder Deepika Patidar, The Institute Empowers Women With Essential Skills, Fostering Self-reliance And Building A Strong Foundation For Their Bright Professional Careers.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-[#b8860b] flex-shrink-0" />
                  <span>Authorized Certifications valid for salon licensing &amp; employment</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-[#b8860b] flex-shrink-0" />
                  <span>Mentorship to launch independent freelance studio or parlour</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-[#b8860b] flex-shrink-0" />
                  <span>Direct salon placement assistance in top beauty chains</span>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#f2c301] via-[#d4af37] to-[#e6b800] hover:brightness-105 shadow-md transition-all hover:scale-105"
                >
                  Join Next Batch &amp; Get Certified
                </a>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Image Grid */}
          <div className="lg:col-span-6 relative">
            <AnimatedReveal animation="fade-right">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200 shadow-2xl bg-zinc-900 aspect-[4/3]">
                <Image
                  src="/images/students_convocation.jpg"
                  alt="Convocation Ceremony at Yashree Institute Indore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301]">
                    Annual Convocation
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    Transforming Passion into Professional Independence
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
