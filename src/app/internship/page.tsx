import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipDisciplines from "@/components/InternshipDisciplines";
import InternshipForm from "@/components/InternshipForm";
import AnimatedReveal from "@/components/AnimatedReveal";
import { GraduationCap, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply for Internship | Yashree Institute Indore",
  description:
    "Submit your details and resume for internship consideration at Yashree Institute of Cosmetology & Aesthetic Academy in Indore. Learn in a professional beauty and academy environment.",
  keywords: [
    "Internship Yashree Institute",
    "Beauty Academy Internship Indore",
    "Cosmetology Internship Indore",
    "Makeup Artist Internship",
    "Aesthetic Clinic Internship Indore",
  ],
  alternates: {
    canonical: "https://yashreeinstitute.com/internship",
  },
  openGraph: {
    title: "Apply for Internship | Yashree Institute Indore",
    description:
      "Submit your resume for internship consideration at Indore's premier Cosmetology & Aesthetic Academy mentored by Deepika Patidar.",
    url: "https://yashreeinstitute.com/internship",
    siteName: "Yashree Institute of Cosmetology & Aesthetic Academy",
  },
};

export default function InternshipPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-[#f2c301]/30">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO SECTION: APPLY FOR INTERNSHIP
        ======================================================== */}
        <section className="relative overflow-hidden pt-6 pb-10 lg:pt-10 lg:pb-14 bg-gradient-to-b from-[#faf8f5] via-white to-white border-b border-zinc-100">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none -mr-32 -mt-20" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-2xl pointer-events-none -ml-20" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-3.5 font-medium">
              <Link href="/" className="hover:text-[#b8860b] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#b8860b] font-bold">Apply for Internship</span>
            </nav>

            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>Yashree Institute Learning Opportunities</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 font-serif leading-[1.15]">
                Apply for Internship
              </h1>

              <p className="text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Interested candidates, cosmetology students, and aspiring beauty professionals can submit their details and resume below for internship consideration at Yashree Institute in Indore.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. EXPLORE INTERNSHIP DISCIPLINES (ZERO IMAGES, ALL 18 COURSES)
        ======================================================== */}
        <InternshipDisciplines />

        {/* ========================================================
            3. APPLICATION FORM SECTION
        ======================================================== */}
        <section className="py-10 md:py-14 lg:py-16 bg-[#faf8f5] relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedReveal animation="fade-up">
              <InternshipForm />
            </AnimatedReveal>
          </div>
        </section>

        {/* ========================================================
            4. CAMPUS COORDINATION & CONTACT INFO
        ======================================================== */}
        <section className="py-8 md:py-10 bg-white border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301]">
                  Indore Campus
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  Yashree Institute of Cosmetology &amp; Aesthetic Academy
                </h3>
                <p className="text-xs text-zinc-400">
                  Ek 49, Sch no. 54, Near Meghdoot Garden, Front Of KK Science Collage, Indore (M.P.)
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 justify-center">
                <a
                  href="tel:+919589871662"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f2c301]" />
                  <span>+91 95898 71662</span>
                </a>
                <span className="text-xs text-zinc-400 hidden sm:inline">
                  Helpline (9 AM – 7 PM)
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
