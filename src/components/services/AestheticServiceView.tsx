import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Calendar,
  Users,
  Award,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import type { ServiceDetail } from "@/data/servicesData";
import ServiceGallerySection from "@/components/ServiceGallerySection";
import AnimatedReveal from "@/components/AnimatedReveal";

interface ServiceViewProps {
  service: ServiceDetail;
}

export default function AestheticServiceView({ service }: ServiceViewProps) {
  return (
    <div className="space-y-0">
      {/* =========================================================================
          1. BREADCRUMBS
         ========================================================================= */}
      <div className="bg-[#faf8f5] border-b border-amber-100/80 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-zinc-500 overflow-x-auto">
          <Link href="/" className="hover:text-[#b8860b] transition-colors flex items-center gap-1">
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
          <Link href="/#courses" className="hover:text-[#b8860b] transition-colors">
            Academy Programs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
          <span className="text-zinc-900 font-bold truncate">{service.title}</span>
        </div>
      </div>

      {/* =========================================================================
          2. EDITORIAL HERO SECTION
         ========================================================================= */}
      <section className="relative bg-white py-10 lg:py-14 border-b border-zinc-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/40 to-yellow-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f2c301]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <AnimatedReveal animation="fade-up" delay={0}>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider shadow-sm">
                    {service.category}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-zinc-950 text-[#f2c301] text-xs font-bold uppercase tracking-wider shadow-sm">
                    {service.durationBadge}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Govt. &amp; Dual Accredited</span>
                  </span>
                </div>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-up" delay={100}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-serif font-bold text-zinc-950 tracking-tight leading-[1.15]">
                  {service.title}
                </h1>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-up" delay={200}>
                <p className="text-base sm:text-lg text-amber-900 font-semibold leading-relaxed">
                  {service.heroTagline}
                </p>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-up" delay={300}>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
                  {service.overview}
                </p>
              </AnimatedReveal>

              {/* Quick Highlights Bar */}
              <AnimatedReveal animation="fade-up" delay={400}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#faf8f5] border border-amber-100 hover:border-amber-300 transition-colors">
                    <span className="text-[11px] text-zinc-500 font-medium block">Batch Strength</span>
                    <strong className="text-xs sm:text-sm text-zinc-900 font-bold block mt-0.5">25 Students Max</strong>
                    <span className="text-[10px] text-[#b8860b] font-medium">1-on-1 Focus</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#faf8f5] border border-amber-100 hover:border-amber-300 transition-colors">
                    <span className="text-[11px] text-zinc-500 font-medium block">Training Pedagogy</span>
                    <strong className="text-xs sm:text-sm text-zinc-900 font-bold block mt-0.5">100% Practical</strong>
                    <span className="text-[10px] text-emerald-700 font-medium">Live Models</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#faf8f5] border border-amber-100 hover:border-amber-300 transition-colors col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-zinc-500 font-medium block">Practice Starter Kit</span>
                    <strong className="text-xs sm:text-sm text-zinc-900 font-bold block mt-0.5">Included Free</strong>
                    <span className="text-[10px] text-[#b8860b] font-medium">By Yashree</span>
                  </div>
                </div>
              </AnimatedReveal>

              {/* Action CTAs */}
              <AnimatedReveal animation="fade-up" delay={500}>
                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <a
                    href={`https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20am%20interested%20in%20enquiring%20about%20fees,%20timings%20and%20batch%20dates%20for%20the%20${encodeURIComponent(
                      service.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn shadow-xl hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire Fees on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919589871662"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-zinc-900 bg-white border border-zinc-300 hover:border-amber-300 hover:bg-amber-50/50 transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#b8860b]" />
                    <span>Call Admission Desk</span>
                  </a>
                </div>
              </AnimatedReveal>
            </div>

            {/* Right Hero Poster */}
            <div className="lg:col-span-5 relative">
              <AnimatedReveal animation="scale" delay={200}>
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-2xl aspect-[3/4] bg-zinc-950 group">
                  <Image
                    src={service.posterImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold text-[#f2c301] border border-amber-300/40 shadow-lg">
                    Official Prospectus Flyer
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SCHEDULE & FEE TRANSPARENCY MATRIX
         ========================================================================= */}
      <section className="py-10 md:py-12 bg-[#faf8f5] border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-3xl bg-white border border-amber-100 shadow-sm">
              <Clock className="w-5 h-5 text-[#b8860b] mb-2" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Daily Timings</span>
              <h3 className="text-sm font-bold text-zinc-900 mt-1">{service.schedule.timings}</h3>
              <p className="text-xs text-zinc-500 mt-1">{service.schedule.days}</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-amber-100 shadow-sm">
              <Calendar className="w-5 h-5 text-[#b8860b] mb-2" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Duration</span>
              <h3 className="text-sm font-bold text-zinc-900 mt-1">{service.schedule.duration}</h3>
              <p className="text-xs text-zinc-500 mt-1">Intensive Hands-On</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-amber-100 shadow-sm">
              <Users className="w-5 h-5 text-[#b8860b] mb-2" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Batch Strength</span>
              <h3 className="text-sm font-bold text-zinc-900 mt-1">{service.schedule.batchSize}</h3>
              <p className="text-xs text-zinc-500 mt-1">Dedicated Device Station</p>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-amber-100 shadow-sm">
              <Award className="w-5 h-5 text-[#b8860b] mb-2" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Starter Kit</span>
              <h3 className="text-sm font-bold text-zinc-900 mt-1">{service.pricingInfo.kitInclusionValue}</h3>
              <p className="text-xs text-zinc-500 mt-1">Free Practice Materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. 4-PHASE PROGRESSIVE LEARNING BLUEPRINT
         ========================================================================= */}
      <section className="py-10 md:py-14 lg:py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                Structured Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 mt-2">
                4-Phase Progressive Learning Blueprint
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-1.5">
                From skin diagnosis and sterilization to electro-aesthetic machine calibration and post-care barrier soothing.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-3xl bg-[#faf8f5] border border-amber-100 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-serif font-extrabold text-[#b8860b] mb-2 block">Phase 1</span>
                <h3 className="text-base font-bold text-zinc-900 mb-1">Dermal Science &amp; Diagnostics</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{service.trainingBehavior.step1}</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-[#faf8f5] border border-amber-100 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-serif font-extrabold text-[#b8860b] mb-2 block">Phase 2</span>
                <h3 className="text-base font-bold text-zinc-900 mb-1">Device Hands-On &amp; Peels</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{service.trainingBehavior.step2}</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-[#faf8f5] border border-amber-100 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-serif font-extrabold text-[#b8860b] mb-2 block">Phase 3</span>
                <h3 className="text-base font-bold text-zinc-900 mb-1">Clinical Medi-Facials</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{service.trainingBehavior.step3}</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-[#faf8f5] border border-amber-100 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-serif font-extrabold text-[#b8860b] mb-2 block">Phase 4</span>
                <h3 className="text-base font-bold text-zinc-900 mb-1">Consultation &amp; Setup</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{service.trainingBehavior.step4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. INTERACTIVE CLINICAL GALLERY LIGHTBOX
         ========================================================================= */}
      <ServiceGallerySection
        serviceTitle={service.title}
        heading={service.galleryHeading}
        subtitle={service.gallerySubtitle}
        images={service.galleryImages}
        themeBadgeBg="bg-amber-50"
        themeBadgeText="text-[#b8860b]"
        themeBorderAccent="border-amber-200"
      />

      {/* =========================================================================
          6. CURRICULUM SYLLABUS & MODULES
         ========================================================================= */}
      <section className="py-10 md:py-14 lg:py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
              <AnimatedReveal animation="fade-up">
                <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Curriculum Checklist
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 mt-2">
                  Comprehensive Syllabus Breakdown
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  Every clinical topic covered with 100% hands-on device training, sterilisation protocols, and client assessment.
                </p>
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-amber-200/70 space-y-1.5 mt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                    <Award className="w-4 h-4 text-[#b8860b]" />
                    <span>Official Yashree Institute PDF Curriculum</span>
                  </div>
                  <p className="text-xs text-zinc-600">
                    Verified curriculum from official institute brochure.
                  </p>
                </div>
              </AnimatedReveal>
            </div>

            <div className="lg:col-span-7">
              <AnimatedReveal animation="fade-up" delay={100}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-amber-300 hover:bg-white hover:shadow-md transition-all flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                        {mod}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FAQS & CONVERSION CTA
         ========================================================================= */}
      <section className="py-10 md:py-14 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <AnimatedReveal animation="fade-up">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">Clear Answers</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mt-1">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedReveal>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 open:bg-zinc-50 transition-all cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-zinc-900 list-none">
                  <span>{faq.q}</span>
                  <span className="text-[#b8860b] group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed pt-2 border-t border-zinc-100">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* Final CTA Banner */}
          <AnimatedReveal animation="scale">
            <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950 p-6 sm:p-8 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="px-4 py-1.5 rounded-full bg-[#f2c301] text-zinc-950 text-xs font-bold uppercase tracking-wider inline-block">
                  Admissions Open
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Begin Your Professional Aesthetic Career
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Book your aesthetic device seat and get hands-on training on live models.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
                  <a
                    href={`https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20want%20to%20reserve%20a%20seat%20for%20the%20${encodeURIComponent(
                      service.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Seat Booking</span>
                  </a>
                  <a
                    href="tel:+919589871662"
                    className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#f2c301]" />
                    <span>+91 95898 71662</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
