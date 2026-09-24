"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: "Who is eligible to join Yashree Institute courses?",
    a: "Our courses are designed for all levels — absolute beginners, school/college passouts, homemakers looking for financial independence, and existing salon professionals seeking advanced certifications in Medi-Aesthetics, PMU, and Bridal Makeup.",
  },
  {
    q: "Are student practice kits and dummy heads provided by the academy?",
    a: "Yes! All essential practice tools, mannequin dummy heads with stands, makeup brush sets, nail kits, and salon chemicals/creams are supplied directly by Yashree Institute during your training period at no extra material cost.",
  },
  {
    q: "What is the batch size at Yashree Institute?",
    a: "We strictly cap each batch at a maximum of 25 students. This ensures that every individual student receives 1-on-1 personal mentorship and step-by-step guidance from Celebrity Makeup Artist Deepika Patidar and senior trainers.",
  },
  {
    q: "Are the certifications globally recognized?",
    a: "Yes, Yashree Institute issues authorized professional diplomas and certificates upon successful course completion. These credentials are valid for employment in top salon chains, international work, and setting up independent licensed beauty businesses.",
  },
  {
    q: "Are online classes and flexible timing options available?",
    a: "Yes, we offer both offline classroom training at our Indore campus and flexible online modules. We also offer morning and evening batch timings to accommodate working professionals and students.",
  },
  {
    q: "Does Yashree Institute offer placement and career support?",
    a: "Yes, we provide 100% placement assistance, studio portfolio photo shoots with professional lighting, Instagram reel training, and Lifetime Free Technical Consultation for all alumni.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-[#faf8f5] relative border-b border-amber-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-zinc-900 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-[#b8860b]" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-zinc-600 text-sm sm:text-base">
              Everything you need to know about admissions, batch sizes, practice kits, and certifications.
            </p>
          </div>
        </AnimatedReveal>

        {/* FAQ Accordion List */}
        <AnimatedReveal animation="scale">
          <div className="space-y-4">
            {FAQS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-amber-200/80 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-zinc-900 hover:text-[#b8860b] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#b8860b] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 flex-shrink-0">
                        Q{idx + 1}
                      </span>
                      <span>{item.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 text-[#b8860b]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 animate-fadeIn">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedReveal>

        {/* Contact Helpline Callout */}
        <AnimatedReveal animation="fade-up" delay={200}>
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-amber-200 shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-zinc-900">Have more questions about admissions or fees?</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Our counselors are available Monday to Sunday from 9 AM – 7 PM.</p>
            </div>
            <a
              href="https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20have%20some%20questions%20regarding%20course%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-950 text-[#f2c301] text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors flex-shrink-0 hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chat with Counselors</span>
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
