import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import AnimatedReveal from "@/components/AnimatedReveal";
import {
  Sparkles,
  PackageCheck,
  CheckCircle2,
  Camera,
  Scissors,
  Paintbrush,
  Sparkle,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Video,
  Award,
  Layers,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "100% Hands-on Practical Training & Practice Kits | Yashree Institute Indore",
  description:
    "Explore practical beauty training at Yashree Institute Indore. 100% live model practice, comprehensive practice kits for Hair, Makeup, Skin & Nails provided with studio camera portfolio training.",
  keywords: [
    "Practical Beauty Training Indore",
    "Hands on Cosmetology Course Indore",
    "Makeup Practice Kit Indore",
    "Hair Styling Mannequin Training",
    "Yashree Institute Practical Training",
  ],
  alternates: {
    canonical: "https://yashreeinstitute.com/practical-training",
  },
  openGraph: {
    title: "100% Practical Beauty Training & Professional Kits | Yashree Institute Indore",
    description:
      "Learn by doing from day one with live models, dedicated practice kits, and personal mentorship under Deepika Patidar.",
    url: "https://yashreeinstitute.com/practical-training",
    siteName: "Yashree Institute of Cosmetology & Aesthetic Academy",
    images: [
      {
        url: "/images/students_convocation.jpg",
        width: 1200,
        height: 630,
        alt: "Practical Training at Yashree Institute Indore",
      },
    ],
  },
};

export default function PracticalTrainingPage() {
  const kitItems = [
    {
      title: "Hair Styling & Thermal Tools Kit",
      category: "Hair Artistry",
      desc: "Professional sectioning combs, carbon clips, ceramic curling tongs, crimpers, hair padding, and adjustable mannequin dummy with stand.",
      icon: <Scissors className="w-5 h-5 text-[#b8860b]" />,
    },
    {
      title: "Nail Extensions & Art Professional Kit",
      category: "Nails Studio",
      desc: "Full nail art brush set, extension tips, acrylic powders, polygel tubes, dual 48W UV/LED curing machine, and buffer files.",
      icon: <Sparkle className="w-5 h-5 text-[#b8860b]" />,
    },
    {
      title: "Make-up Brush & Vanity Vanity Set",
      category: "Makeup Track",
      desc: "High-grade natural & synthetic blending brushes, beauty sponges, stainless steel mixing palettes, and branded academy apron.",
      icon: <Paintbrush className="w-5 h-5 text-[#b8860b]" />,
    },
    {
      title: "Chemical Practice & Bond Products",
      category: "Chemical Science",
      desc: "All salon creams, keratin gloss formulas, botox deep conditioning, developers, mixing scales, and foiling boards provided for free.",
      icon: <Wrench className="w-5 h-5 text-[#b8860b]" />,
    },
    {
      title: "Clinical Medi-Facial & Aesthetic Devices",
      category: "Skin & Aesthetics",
      desc: "Supervised access to hydro-dermabrasion machines, high-frequency ozone sparkers, ultrasonic scrubbers, and Woods diagnostic lamps.",
      icon: <Sparkles className="w-5 h-5 text-[#b8860b]" />,
    },
    {
      title: "Theory Manuals & Printable Study Guides",
      category: "Lifetime Reference",
      desc: "Step-by-step printed protocol manuals, colorimetry charts, client intake forms, and digital PDF lifetime reference notes.",
      icon: <Layers className="w-5 h-5 text-[#b8860b]" />,
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Scientific Theory & Formulation",
      desc: "Master facial anatomy, skin types, trichology pH science, or color wheel mixing before touching tools.",
    },
    {
      step: "02",
      title: "Mannequin & Dummy Simulation",
      desc: "Build muscle memory, holding angles, and speed control on high-grade practice mannequins and synthetic latex.",
    },
    {
      step: "03",
      title: "Supervised Live Model Practice",
      desc: "Perform complete client treatments under 1-on-1 personal supervision of Deepika Patidar and senior trainers.",
    },
    {
      step: "04",
      title: "Studio Camera Shoot & Portfolio",
      desc: "Learn lighting, angles, video reel creation, and build an authentic portfolio ready for client bookings.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-[#f2c301]/30">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO SECTION
        ======================================================== */}
        <section className="relative overflow-hidden pt-6 pb-10 lg:pt-10 lg:pb-14 bg-gradient-to-b from-[#faf8f5] via-white to-white border-b border-zinc-100">
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-2xl pointer-events-none -ml-20" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-3.5 font-medium">
              <Link href="/" className="hover:text-[#b8860b] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#b8860b] font-bold">Practical Training</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>100% Practical Learning Methodology</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 font-serif leading-[1.15]">
                Learn By Doing — Supervised Hands-on Practice From Day One
              </h1>

              <p className="text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                At Yashree Institute, theory is immediately applied in our sanitized salon and aesthetic clinic setup. Students never have to worry about sourcing expensive practice materials — <strong>all cosmetics, brush sets, hair mannequins, and clinical equipment are provided directly by us</strong>.
              </p>
            </div>

            {/* Visual Learning Facility Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mt-8 sm:mt-10">
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/90 shadow-2xl bg-zinc-950 aspect-[16/10] group">
                  <Image
                    src="/images/students_convocation.jpg"
                    alt="Practical Training and Live Demos at Yashree Institute Indore"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="px-3 py-1 rounded-full bg-[#f2c301] text-zinc-950 text-xs font-bold uppercase tracking-wider">
                      Real Academy Environment
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-2">
                      Hands-on Sessions on Dummy Mannequins &amp; Live Models
                    </h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-amber-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b8860b]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Zero Material Extra Cost</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-zinc-950 font-serif">
                    All Practice Kits Provided Free
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    No hidden material charges. Practice on high-grade professional salon formulas, brushes, tools, and dummy stands included with your enrollment.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-amber-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b8860b]">
                    <Award className="w-4 h-4" />
                    <span>Supervised Live Model Client Hours</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-zinc-950 font-serif">
                    Real Salon Client Experience
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Overcome client anxiety with step-by-step guidance from celebrity artist Deepika Patidar before entering the professional industry.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-amber-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b8860b]">
                    <Video className="w-4 h-4" />
                    <span>Camera Portfolio &amp; Reel Mastery</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-zinc-950 font-serif">
                    Studio Lighting &amp; Content Creation
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Learn professional camera angles, lighting, video editing, and Instagram reel strategies to market your salon services effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. COMPLETE PRACTICE KITS & TOOLS BREAKDOWN
        ======================================================== */}
        <section className="py-10 md:py-14 lg:py-16 bg-[#faf8f5] border-b border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-100 text-[#b8860b] border border-amber-300">
                <PackageCheck className="w-3.5 h-3.5" /> Academy Practice Resources
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-zinc-950">
                Professional Equipment &amp; Kits Mastered
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600">
                Detailed inventory of student practice kits and clinical equipment provided during training at Yashree Institute Indore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {kitItems.map((kit, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-amber-200/80 shadow-xs hover:shadow-xl transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                      {kit.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8860b] block">
                        {kit.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-950 font-serif mt-0.5">
                        {kit.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {kit.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-zinc-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Supplied for Training</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. 4-STAGE PRACTICAL TRAINING WORKFLOW
        ======================================================== */}
        <section className="py-10 md:py-14 lg:py-16 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-100 text-[#b8860b] border border-amber-300">
                <GraduationCap className="w-3.5 h-3.5" /> Structured Learning
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-zinc-950">
                Our 4-Stage Hands-on Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600">
                Designed to take absolute beginners to master-level confidence with 100% practical retention.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {workflowSteps.map((ws, idx) => (
                <div
                  key={idx}
                  className="bg-[#faf8f5] p-4 sm:p-5 rounded-2xl border-2 border-amber-200/80 shadow-xs hover:shadow-md transition-all space-y-2.5 relative overflow-hidden"
                >
                  <div className="w-9 h-9 rounded-xl bg-zinc-950 text-[#f2c301] font-serif font-extrabold text-sm flex items-center justify-center">
                    {ws.step}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-950 font-serif">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            4. CAMERA SHOOTS & SOCIAL MEDIA REEL TRAINING
        ======================================================== */}
        <section className="py-10 md:py-14 bg-zinc-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7 space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2c301]/20 border border-amber-400/40 text-[#f2c301] text-xs font-bold uppercase tracking-widest">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Media &amp; Portfolio Excellence</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                  Studio Camera Portfolio Shoots &amp; Viral Reel Mastery
                </h2>
                <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  Being a great beauty artist is only half the battle — knowing how to showcase your work attractively on Instagram and social media gets you high-paying clients. At Yashree Institute, every student learns professional lighting, framing, video editing, and reel presentation.
                </p>
                <div className="pt-2 flex flex-wrap gap-2.5">
                  <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-amber-200">
                    ✨ Ring Lights &amp; Softboxes Setup
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-amber-200">
                    📸 High-Res Client Portfolio Shoots
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-amber-200">
                    🎬 Reel Editing &amp; Audio Selection
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 text-center lg:text-right">
                <Link
                  href="/#courses"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all duration-200"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Explore All Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. ADMISSION CONSULTATION & CTA
        ======================================================== */}
        <ConsultationCTA />
      </main>

      <Footer />
    </div>
  );
}
