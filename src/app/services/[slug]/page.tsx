import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  SERVICES_DATA,
  getServiceBySlug,
} from "@/data/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  CheckCircle2,
  PackageCheck,
  ChevronRight,
  Phone,
  MessageCircle,
  HelpCircle,
  Award,
  Layers,
  Clock,
  Calendar,
  CreditCard,
  Check,
  ShieldCheck,
  GraduationCap,
  Users,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Yashree Institute",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://yashreeinstitute.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://yashreeinstitute.com/services/${service.slug}`,
      siteName: "Yashree Institute of Cosmetology & Aesthetic Academy",
      type: "article",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-[#f2c301]/30">
      <Navbar />

      <main className="flex-1">
        {/* =========================================================================
            BREADCRUMBS BAR
           ========================================================================= */}
        <div className="bg-[#faf8f5] border-b border-amber-100 py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-zinc-500 overflow-x-auto">
            <Link href="/" className="hover:text-[#b8860b] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
            <Link href="/#courses" className="hover:text-[#b8860b] transition-colors">
              Services &amp; Programs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
            <span className="text-zinc-900 font-bold truncate">
              {service.title}
            </span>
          </div>
        </div>

        {/* =========================================================================
            1. SERVICE HERO SECTION
           ========================================================================= */}
        <section className="relative bg-white py-14 lg:py-20 border-b border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Hero Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider">
                    {service.category}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-zinc-950 text-[#f2c301] text-xs font-bold uppercase tracking-wider shadow-sm">
                    {service.durationBadge}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight leading-tight">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-amber-900 font-medium leading-relaxed">
                  {service.heroTagline}
                </p>

                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {service.overview}
                </p>

                {/* Quick Info Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-amber-100">
                    <span className="text-[11px] text-zinc-500 font-medium block">Batch Size</span>
                    <strong className="text-xs sm:text-sm text-zinc-900 font-bold">25 Students Max</strong>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-amber-100">
                    <span className="text-[11px] text-zinc-500 font-medium block">Training Method</span>
                    <strong className="text-xs sm:text-sm text-zinc-900 font-bold">100% Practical Exposure</strong>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-amber-100">
                    <span className="text-[11px] text-zinc-500 font-medium block">Practice Starter Kit</span>
                    <strong className="text-xs sm:text-sm text-zinc-900 font-bold">Included Free</strong>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20am%20interested%20in%20enquiring%20about%20fees,%20timings%20and%20batch%20dates%20for%20the%20${encodeURIComponent(
                      service.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn shadow-md hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire Fees on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919589871662"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-bold text-zinc-900 bg-white border border-zinc-300 hover:border-amber-300 hover:bg-amber-50/50 transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#b8860b]" />
                    <span>Call Admission Desk</span>
                  </a>
                </div>
              </div>

              {/* Right Hero Poster & Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-2xl aspect-[3/4] bg-zinc-950 group">
                  <Image
                    src={service.posterImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#f2c301] border border-amber-300/40">
                    Official Flyer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. SCHEDULE, TIMINGS & FEE TRANSPARENCY MATRIX
           ========================================================================= */}
        <section className="py-14 bg-[#faf8f5] border-b border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Operational Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mt-1">
                Schedule, Batches &amp; Pricing Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Batch Timings */}
              <div className="p-6 rounded-3xl bg-white border border-amber-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#b8860b] flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    Daily Timings
                  </span>
                  <h3 className="text-sm font-bold text-zinc-900 mt-1">
                    Morning &amp; Afternoon Batches
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    {service.schedule.timings}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] font-semibold text-[#b8860b]">
                  {service.schedule.days}
                </div>
              </div>

              {/* Duration & Mode */}
              <div className="p-6 rounded-3xl bg-white border border-amber-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#b8860b] flex items-center justify-center mb-3">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    Program Duration
                  </span>
                  <h3 className="text-sm font-bold text-zinc-900 mt-1">
                    {service.durationBadge}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    {service.schedule.duration}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] font-semibold text-[#b8860b]">
                  {service.schedule.mode}
                </div>
              </div>

              {/* Batch Limit */}
              <div className="p-6 rounded-3xl bg-white border border-amber-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#b8860b] flex items-center justify-center mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    Classroom Attention
                  </span>
                  <h3 className="text-sm font-bold text-zinc-900 mt-1">
                    25 Students Only / Batch
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    {service.schedule.batchSize}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] font-semibold text-[#b8860b]">
                  1-on-1 Personal Attention Guaranteed
                </div>
              </div>

              {/* Fees & Installment Plan */}
              <div className="p-6 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#f2c301] text-zinc-950 flex items-center justify-center mb-3">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#f2c301]">
                    Pricing &amp; EMI
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1">
                    Flexible Installments
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {service.pricingInfo.feeStructure}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-bold text-[#f2c301]">
                  Easy Installment Plans Available
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. STEP-BY-STEP TRAINING METHODOLOGY & BEHAVIOR
           ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Training Progression</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 tracking-tight">
                How We Train You — Step-by-Step Methodology
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600">
                A structured four-phase pedagogical approach ensuring complete mastery from fundamentals to real client execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-[#faf8f5] border border-amber-100 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#b8860b] bg-amber-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Phase 01
                  </span>
                  <h3 className="text-base font-serif font-bold text-zinc-900 mt-3 mb-2">
                    Theory &amp; Science
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {service.trainingBehavior.step1}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#faf8f5] border border-amber-100 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#b8860b] bg-amber-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Phase 02
                  </span>
                  <h3 className="text-base font-serif font-bold text-zinc-900 mt-3 mb-2">
                    Dummy &amp; Tool Practice
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {service.trainingBehavior.step2}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#faf8f5] border border-amber-100 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#b8860b] bg-amber-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Phase 03
                  </span>
                  <h3 className="text-base font-serif font-bold text-zinc-900 mt-3 mb-2">
                    Live Model Practice
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {service.trainingBehavior.step3}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-950 text-white border border-zinc-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#f2c301] bg-zinc-900 px-2.5 py-1 rounded-full uppercase tracking-wider border border-zinc-800">
                    Phase 04
                  </span>
                  <h3 className="text-base font-serif font-bold text-white mt-3 mb-2">
                    Portfolio &amp; Placement
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {service.trainingBehavior.step4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SYLLABUS & MODULES COVERED
           ========================================================================= */}
        <section className="py-16 lg:py-24 bg-[#faf8f5] border-b border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>Documented Modules</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 tracking-tight">
                Complete Curriculum &amp; What You Will Learn
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600">
                {service.pdfReference}
              </p>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {service.modules.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-amber-100/80 shadow-sm hover:border-amber-300 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-400 block mb-0.5">
                      Module {idx + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-zinc-900 leading-snug">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Student Practice Kit Included Callout */}
            <div className="max-w-5xl mx-auto mt-10 p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#f2c301] uppercase tracking-wider">
                  <PackageCheck className="w-4 h-4" />
                  <span>Practice Kit &amp; Materials Provided Free:</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {service.kitProvided.join(" • ")}
                </p>
              </div>

              <span className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold tracking-wider self-start md:self-center flex-shrink-0">
                100% Provided by Academy
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. UNIQUE PRACTICAL TRAINING HERO MOMENT
           ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Unique Visual Hero */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-2xl aspect-[4/3] bg-zinc-950">
                  <Image
                    src={service.heroImage}
                    alt={service.practicalTraining.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 rounded-full bg-[#f2c301] text-zinc-950 text-[10px] font-bold uppercase tracking-wider">
                      Hands-on Environment
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mt-2">
                      {service.practicalTraining.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Training Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Practical Exposure</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 tracking-tight leading-tight">
                  {service.practicalTraining.title}
                </h2>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {service.practicalTraining.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {service.practicalTraining.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-zinc-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For Box */}
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-amber-200 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  <strong className="text-zinc-900 font-bold block mb-1">
                    Who Should Enroll:
                  </strong>
                  {service.idealFor}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. KEY BENEFITS & CAREER ADVANTAGES
           ========================================================================= */}
        <section className="py-16 lg:py-20 bg-[#faf8f5] border-b border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>Career Advantages</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 tracking-tight">
                Why Master {service.shortTitle} with Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-amber-100 shadow-sm hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#b8860b] flex items-center justify-center font-bold text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center text-[11px] font-bold text-[#b8860b]">
                    <span>Yashree Certified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. SERVICE SPECIFIC FAQS
           ========================================================================= */}
        <section className="py-16 lg:py-20 bg-white border-b border-zinc-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 tracking-tight">
                Common Questions about {service.shortTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#faf8f5] border border-amber-200/80 shadow-sm space-y-2"
                >
                  <h3 className="text-sm sm:text-base font-serif font-bold text-zinc-950 flex items-center gap-2.5">
                    <span className="text-xs font-bold text-[#b8860b] bg-amber-100 px-2 py-0.5 rounded-full">
                      Q{idx + 1}
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. ADMISSION & ENQUIRY DESK CTA
           ========================================================================= */}
        <section className="py-16 lg:py-24 bg-zinc-950 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-[#f2c301]/20 text-[#f2c301] text-xs font-bold uppercase tracking-wider">
              Admissions Open • Indore Campus
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Begin Your Journey in {service.title}
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Book your seat for the upcoming batch with dedicated 1-on-1 mentorship, student practice kits included, and guaranteed placement assistance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={`https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20want%20to%20apply%20for%20the%20${encodeURIComponent(
                  service.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href="tel:+919589871662"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-zinc-900 border border-zinc-700 hover:border-amber-300 transition-all"
              >
                <Phone className="w-4 h-4 text-[#f2c301]" />
                <span>Call +91 95898 71662</span>
              </a>
            </div>

            <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500">
              <span>📍 Meghdoot Garden, Indore</span>
              <span>•</span>
              <span>👥 Max 25 Students per Batch</span>
              <span>•</span>
              <span>🎓 Globally Certified</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
