import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import AnimatedReveal from "@/components/AnimatedReveal";
import {
  Sparkles,
  Award,
  ShieldCheck,
  GraduationCap,
  CheckCircle2,
  Quote,
  HeartHandshake,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Yashree Institute Indore | Founder Deepika Patidar & Aesthetic Academy",
  description:
    "Learn about Yashree Institute of Cosmetology & Aesthetic Academy in Indore, founded by celebrity makeup artist & aesthetician Deepika Patidar. Empowering students with 100% practical beauty education.",
  keywords: [
    "About Yashree Institute",
    "Deepika Patidar Indore",
    "Best Beauty Academy Indore",
    "Cosmetology Institute Indore",
    "Deepika Patidar Makeup Artist",
    "Aesthetic Training Indore",
  ],
  alternates: {
    canonical: "https://yashreeinstitute.com/about",
  },
  openGraph: {
    title: "About Yashree Institute Indore | Founder Deepika Patidar",
    description:
      "Empowering women with international-standard beauty and aesthetic education. Mentored by award-winning artist Deepika Patidar.",
    url: "https://yashreeinstitute.com/about",
    siteName: "Yashree Institute of Cosmetology & Aesthetic Academy",
    images: [
      {
        url: "/images/founder_award_stage.png",
        width: 1200,
        height: 630,
        alt: "Deepika Patidar, Founder & Director of Yashree Institute",
      },
    ],
  },
};

export default function AboutPage() {
  const coreDisciplines = [
    {
      name: "Skin & Medi-Facials",
      tagline: "Glow That Reflects You",
      details:
        "Comprehensive salon skin care, deep cleanups, clinical facials, Woods lamp diagnosis, D-tan, and body spa therapy.",
      icon: "✨",
      slug: "skin",
    },
    {
      name: "Professional Makeup",
      tagline: "Enhance Your Beauty",
      details:
        "Basic to pro training, color wheel, undertones, contouring, HD airbrush makeup, and studio camera portfolio shoots.",
      icon: "💄",
      slug: "professional-makeup",
    },
    {
      name: "Nail Extensions & Art",
      tagline: "Perfect Nails For Every Mood",
      details:
        "Complete nail extensions training, 20+ trendy nail art designs, acrylic/polygel apex building, and UV curing knowledge.",
      icon: "💅",
      slug: "nail-extensions",
    },
    {
      name: "Permanent Makeup (SPMU)",
      tagline: "Define. Enhance. Empower.",
      details:
        "Microblading, ombre powder brows, lip neutralizing & blush tinting, lash lifting, and aesthetic beauty mole creation.",
      icon: "👁️",
      slug: "semi-permanent-makeup",
    },
    {
      name: "Hair Chemical Treatments",
      tagline: "Stronger. Shinier. Healthier.",
      details:
        "Trichology hair structure science, pH scale, chemical treatments, keratin, botox, nanoplastia, rebonding, and global color.",
      icon: "💇‍♀️",
      slug: "hair-chemical",
    },
    {
      name: "Hair Styling Masterclass",
      tagline: "Style That Speaks You",
      details:
        "Sectioning techniques, traditional bridal judas, red-carpet inspired looks, lehenga matching, and Instagram reel shoots.",
      icon: "🎀",
      slug: "hair-styling",
    },
    {
      name: "Precision Hair Cutting",
      tagline: "A Fresh Cut A Fresh You",
      details:
        "Basic to advanced haircut techniques, professional sectioning methods, correct shear holding angles, and blowout mastery.",
      icon: "✂️",
      slug: "hair-cutting",
    },
    {
      name: "Clinical Aesthetics",
      tagline: "Radiance Beyond Beauty",
      details:
        "Non-doctor aesthetic treatments, professional medi-facials, chemical peels, microdermabrasion, and BB glow nano-needling.",
      icon: "🌸",
      slug: "chemical-peels",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-[#f2c301]/30">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. LUXURY EDITORIAL HERO BANNER
        ======================================================== */}
        <section className="relative overflow-hidden pt-8 pb-10 lg:pt-12 lg:pb-14 bg-gradient-to-b from-[#faf8f5] via-white to-white border-b border-zinc-100">
          {/* Subtle gold ambient lighting */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-2xl pointer-events-none -ml-20" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-4 font-medium">
              <Link href="/" className="hover:text-[#b8860b] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#b8860b] font-bold">About Yashree Institute</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>Premier Cosmetology &amp; Aesthetic Academy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 font-serif leading-[1.15]">
                Empowering Future Beauty Leaders in Indore
              </h1>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Under the visionary mentorship of <strong>Deepika Patidar</strong>, Yashree Institute transforms passionate learners into certified, confident, and independent beauty salon entrepreneurs.
              </p>
            </div>

            {/* Core Academy Stats Banner */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mt-8 max-w-5xl mx-auto">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-amber-200/80 shadow-xs text-center space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#b8860b] block">
                  500+
                </span>
                <p className="text-xs font-bold text-zinc-800 uppercase tracking-wide">
                  Graduates Mentored
                </p>
                <p className="text-[11px] text-zinc-500">Across Central India</p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-amber-200/80 shadow-xs text-center space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#b8860b] block">
                  18+
                </span>
                <p className="text-xs font-bold text-zinc-800 uppercase tracking-wide">
                  Certified Courses
                </p>
                <p className="text-[11px] text-zinc-500">Skin, Hair, Makeup &amp; Nails</p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-amber-200/80 shadow-xs text-center space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#b8860b] block">
                  100%
                </span>
                <p className="text-xs font-bold text-zinc-800 uppercase tracking-wide">
                  Practical Exposure
                </p>
                <p className="text-[11px] text-zinc-500">Live Models &amp; Clinical Stations</p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-amber-200/80 shadow-xs text-center space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#b8860b] block">
                  100%
                </span>
                <p className="text-xs font-bold text-zinc-800 uppercase tracking-wide">
                  Placement &amp; Setup
                </p>
                <p className="text-[11px] text-zinc-500">Salon &amp; Studio Guidance</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. FOUNDER & DIRECTOR DEEPIKA PATIDAR PROFILE
        ======================================================== */}
        <section className="py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: High-Resolution Founder Photo & Award Showcase */}
              <div className="lg:col-span-5 relative">
                <AnimatedReveal animation="fade-left">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200 shadow-2xl aspect-[4/5] bg-zinc-950">
                      <Image
                        src="/images/founder_award_stage.png"
                        alt="Deepika Patidar, Founder & Director of Yashree Institute"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2c301] text-zinc-950 text-xs font-bold uppercase tracking-wider mb-2 shadow">
                          <Award className="w-3.5 h-3.5" /> Founder &amp; Director
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white">
                          Deepika Patidar
                        </h3>
                        <p className="text-xs text-amber-200 font-medium mt-0.5">
                          Celebrity Makeup Artist &amp; Advanced Cosmetologist
                        </p>
                      </div>
                    </div>

                    {/* Floating Award Badge */}
                    <div className="absolute -bottom-6 -right-2 sm:-right-6 glass-dark text-white p-4 rounded-2xl shadow-2xl border border-zinc-800 max-w-[230px] hidden sm:block">
                      <p className="text-xs font-bold text-[#f2c301]">
                        🏆 Award Winner
                      </p>
                      <p className="text-[11px] text-zinc-300 mt-0.5">
                        Business &amp; Beauty Icon Award Show 2026
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              </div>

              {/* Right: Visionary Story & Philosophy */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                <AnimatedReveal animation="fade-right">
                  <div className="border-l-4 border-[#f2c301] pl-4 space-y-0.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                      Visionary Leadership
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">
                      Deepika Patidar
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-amber-900">
                      Founder &amp; Director, Yashree Institute, Indore
                    </p>
                  </div>

                  <p className="text-zinc-700 leading-relaxed text-sm sm:text-base mt-3">
                    <strong>Deepika Patidar</strong> is the visionary Founder and Director of Yashree Institute, Indore. As an expert in Advanced Cosmetology and Aesthetic Treatments, she has dedicated her career to providing international-standard beauty education.
                  </p>

                  <p className="text-zinc-700 leading-relaxed text-sm sm:text-base mt-2">
                    With a strong passion for <strong>women empowerment</strong>, Deepika has successfully mentored and trained hundreds of students, transforming them into skilled professionals and successful salon entrepreneurs.
                  </p>

                  {/* Exact Motto Quote */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-zinc-900 relative mt-3">
                    <Quote className="w-7 h-7 text-[#f2c301] opacity-40 absolute top-3 right-3" />
                    <p className="text-xs sm:text-sm font-serif italic text-zinc-800 leading-relaxed">
                      &ldquo;Every woman has the power to define her own destiny through skill, dedication, and knowledge. At Yashree Institute, we don&apos;t just teach beauty techniques; we build the confidence to lead, create, and achieve financial independence.&rdquo;
                    </p>
                    <span className="block mt-1.5 text-xs font-bold text-[#b8860b] uppercase tracking-wider">
                      — Deepika Patidar
                    </span>
                  </div>

                  {/* Core Mentorship Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-800 bg-[#faf8f5] p-2.5 sm:p-3 rounded-xl border border-amber-100">
                      <ShieldCheck className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                      <span>1-on-1 Personal Attention &amp; Small Batches</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-800 bg-[#faf8f5] p-2.5 sm:p-3 rounded-xl border border-amber-100">
                      <Award className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                      <span>State &amp; National Beauty Awards Recognized</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-800 bg-[#faf8f5] p-2.5 sm:p-3 rounded-xl border border-amber-100">
                      <HeartHandshake className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                      <span>Direct Salon Setup &amp; Pricing Guidance</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-800 bg-[#faf8f5] p-2.5 sm:p-3 rounded-xl border border-amber-100">
                      <Sparkles className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                      <span>Instagram Reel &amp; Camera Shoot Training</span>
                    </div>
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. GRAND STUDENT CONVOCATION & CAREER PLACEMENT
        ======================================================== */}
        <section className="py-10 md:py-14 lg:py-16 bg-[#faf8f5] relative overflow-hidden border-b border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Text / Certificate Recognition */}
              <div className="lg:col-span-6 space-y-4">
                <AnimatedReveal animation="fade-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Convocation &amp; Placement</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 tracking-tight leading-tight mt-2">
                    Proud Certificate Distribution &amp; Career Graduation
                  </h2>

                  <blockquote className="p-4 sm:p-5 rounded-2xl bg-white border-l-4 border-[#f2c301] text-zinc-800 italic text-sm sm:text-base leading-relaxed shadow-xs mt-3">
                    &ldquo;Certificates Were Proudly Awarded To All Students Upon The Successful Completion Of Professional Courses At Yashree Institute Indore. Under The Visionary Guidance Of Founder Deepika Patidar, The Institute Empowers Women With Essential Skills, Fostering Self-reliance And Building A Strong Foundation For Their Bright Professional Careers.&rdquo;
                  </blockquote>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                      <span>Authorized Certifications valid for salon licensing &amp; employment</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                      <span>Mentorship to launch independent freelance studio or parlour</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                      <span>Direct salon placement assistance in top beauty chains</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="#enquire"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all duration-200"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Join Next Batch &amp; Get Certified</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </AnimatedReveal>
              </div>

              {/* Right Image Grid */}
              <div className="lg:col-span-6 relative">
                <AnimatedReveal animation="fade-right">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/90 shadow-2xl bg-zinc-900 aspect-[4/3] group">
                    <Image
                      src="/images/students_convocation.jpg"
                      alt="Convocation Ceremony at Yashree Institute Indore"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301]">
                        Annual Convocation
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white mt-1">
                        Transforming Passion into Professional Independence
                      </h3>
                      <p className="text-xs text-zinc-300 mt-1">
                        Official Diploma Distribution Ceremony in Indore Campus
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. 8 CORE SPECIALIZATION PILLARS
        ======================================================== */}
        <section className="py-10 md:py-14 lg:py-16 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-100 text-[#b8860b] border border-amber-300">
                <BookOpen className="w-3.5 h-3.5" /> Comprehensive Curriculum
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-zinc-950 mt-1">
                8 Core Academic Disciplines
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600">
                Every department at Yashree Institute provides 100% hands-on training with professional equipment and live model demonstrations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreDisciplines.map((disc, idx) => (
                <Link
                  key={idx}
                  href={`/courses/${disc.slug}`}
                  className="group bg-[#faf8f5] p-5 sm:p-6 rounded-2xl border-2 border-amber-200/80 hover:border-[#b8860b] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-amber-200 text-xl flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                      {disc.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-950 font-serif group-hover:text-[#b8860b] transition-colors">
                      {disc.name}
                    </h3>
                    <span className="text-[11px] font-bold text-[#b8860b] uppercase tracking-wider block">
                      {disc.tagline}
                    </span>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {disc.details}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3 border-t border-amber-100/80 flex items-center justify-between text-xs font-bold text-[#b8860b]">
                    <span>Explore Course</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            5. ADMISSION CONSULTATION & CTA
        ======================================================== */}
        <div id="enquire">
          <ConsultationCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
