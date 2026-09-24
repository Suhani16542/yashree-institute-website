"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Award,
  Ticket,
  Flame,
  ShieldCheck,
  Star,
  ChevronRight,
  Check,
  Gift,
  Phone,
} from "lucide-react";
import { INITIAL_EVENTS, AcademyEvent } from "@/data/eventsSeed";

const TABS = ["All Masterclasses", "Masterclass", "Live Seminar", "Upcoming Workshop", "Annual Convocation"] as const;

export default function EventsPage() {
  const [events, setEvents] = useState<AcademyEvent[]>(INITIAL_EVENTS);
  const [activeTab, setActiveTab] = useState<string>("All Masterclasses");
  const [selectedEventId, setSelectedEventId] = useState<string>(INITIAL_EVENTS[0].id);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        if (data.success && Array.isArray(data.items) && data.items.length > 0) {
          setEvents(data.items);
        }
      } catch (err) {
        console.warn("Using default events seed:", err);
      }
    }
    loadEvents();
  }, []);

  const filteredEvents =
    activeTab === "All Masterclasses"
      ? events
      : events.filter((e) => e.category === activeTab);

  const activeEvent =
    events.find((e) => e.id === selectedEventId) || events[0];

  const featuredWhatsappMsg = `Hello Yashree Institute, I would like to reserve a VIP Seat for "${activeEvent.title}" on ${activeEvent.date}. Please share the registration schedule & fee details.`;
  const featuredWhatsappUrl = `https://wa.me/919589871662?text=${encodeURIComponent(featuredWhatsappMsg)}`;

  return (
    <div className="flex min-h-screen flex-col bg-[#faf8f5] text-zinc-900 selection:bg-[#f2c301]/30">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO HEADER SECTION
        ======================================================== */}
        <section className="bg-zinc-950 text-white py-10 md:py-14 lg:py-16 relative overflow-hidden border-b border-zinc-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-3.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-widest shadow-xs">
                <Ticket className="w-3.5 h-3.5" />
                <span>Yashree Institute • Official Events &amp; Masterclass Calendar</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.1]">
                Masterclasses, Seminars &amp; <span className="text-gold-gradient">Convocation 2026</span>
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Join live hands-on clinical aesthetic workshops, celebrity bridal masterclasses, and prestigious convocation ceremonies mentored by Deepika Patidar in Indore.
              </p>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                  <ShieldCheck className="w-4 h-4 text-[#f2c301]" />
                  <span>Authorized Certification</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                  <Users className="w-4 h-4 text-[#f2c301]" />
                  <span>Live Model Hands-on Practice</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                  <Gift className="w-4 h-4 text-[#f2c301]" />
                  <span>Free Practice Cosmetics Included</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. CATEGORY FILTER TABS
        ======================================================== */}
        <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 min-w-max mx-auto">
              {TABS.map((tab) => {
                const isSelected = activeTab === tab;
                const count =
                  tab === "All Masterclasses"
                    ? events.length
                    : events.filter((e) => e.category === tab).length;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? "bg-zinc-950 text-[#f2c301] shadow-md scale-105"
                        : "bg-amber-50/70 text-zinc-700 hover:bg-amber-100 hover:text-zinc-950 border border-amber-200/60"
                    }`}
                  >
                    <span>{tab}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isSelected
                          ? "bg-[#f2c301] text-zinc-950"
                          : "bg-white text-zinc-600 border border-amber-200"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. INTERACTIVE SPOTLIGHT MASTERCLASS + SCHEDULE DIRECTORY
        ======================================================== */}
        <section className="py-8 md:py-10 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left: Featured Event Interactive Screen */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-zinc-950 text-white rounded-3xl overflow-hidden border-2 border-amber-300/50 shadow-2xl flex flex-col justify-between h-full relative group">
                <div>
                  {/* Visual Screen */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black overflow-hidden">
                    <Image
                      src={activeEvent.image}
                      alt={activeEvent.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-95" />

                    {/* Top Status Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md border border-amber-400/40 text-[#f2c301] text-[11px] font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#f2c301] animate-ping" />
                        <span>{activeEvent.category}</span>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Flame className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
                        <span>{activeEvent.seatsStatus}</span>
                      </span>
                    </div>

                    {/* Large Date Emblem */}
                    <div className="absolute bottom-4 left-5 flex items-center gap-3.5 z-10">
                      <div className="bg-zinc-950/95 backdrop-blur-md border-2 border-[#f2c301] rounded-2xl p-2.5 text-center min-w-[75px] shadow-2xl">
                        <span className="block text-[10px] font-black uppercase tracking-widest text-[#f2c301]">
                          {activeEvent.month}
                        </span>
                        <span className="block text-2xl sm:text-3xl font-serif font-black text-white leading-none">
                          {activeEvent.day}
                        </span>
                        <span className="block text-[10px] text-zinc-400 font-mono mt-0.5">
                          {activeEvent.year}
                        </span>
                      </div>

                      <div className="text-white drop-shadow-md">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301] block">
                          Spotlight Masterclass
                        </span>
                        <span className="text-xs font-medium text-zinc-300">
                          {activeEvent.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[#f2c301] transition-colors leading-tight">
                        {activeEvent.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                        {activeEvent.description}
                      </p>
                    </div>

                    {/* Venue & Mentor Details */}
                    <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2 text-xs text-zinc-300">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-[#f2c301] flex-shrink-0" />
                        <span className="leading-snug">{activeEvent.venue}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-[#f2c301] flex-shrink-0" />
                        <span className="text-[#f2c301] font-bold">{activeEvent.instructor}</span>
                      </div>
                    </div>

                    {/* Inclusions */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                        Masterclass Benefits &amp; Inclusions:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeEvent.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={featuredWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-102 transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Reserve VIP Seat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Event Schedule Directory List */}
            <div className="lg:col-span-5 flex flex-col space-y-3">
              <div className="pb-1 text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center justify-between">
                <span>Select Event to Inspect:</span>
                <span className="text-[11px] text-[#b8860b] font-mono font-bold">
                  {filteredEvents.length} Active Events
                </span>
              </div>

              {filteredEvents.map((evt) => {
                const isSelected = evt.id === activeEvent.id;
                return (
                  <div
                    key={evt.id}
                    onClick={() => setSelectedEventId(evt.id)}
                    className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3.5 ${
                      isSelected
                        ? "bg-zinc-950 text-white border-zinc-950 shadow-xl scale-[1.02] ring-2 ring-[#f2c301]"
                        : "bg-white text-zinc-800 border-amber-200/80 hover:border-amber-300 hover:bg-amber-50/50"
                    }`}
                  >
                    {/* Date Stamp */}
                    <div
                      className={`rounded-xl p-2 text-center min-w-[50px] border flex-shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#f2c301] text-zinc-950 border-[#f2c301]"
                          : "bg-amber-100/70 text-zinc-900 border-amber-200"
                      }`}
                    >
                      <span className="block text-[9px] font-black uppercase tracking-wider">
                        {evt.month}
                      </span>
                      <span className="block text-lg sm:text-xl font-serif font-black leading-none">
                        {evt.day}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block ${
                          isSelected
                            ? "bg-[#f2c301] text-zinc-950"
                            : "bg-amber-100 text-[#b8860b]"
                        }`}
                      >
                        {evt.category}
                      </span>

                      <h3
                        className={`text-xs sm:text-sm font-serif font-bold leading-snug line-clamp-1 ${
                          isSelected ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        {evt.title}
                      </h3>

                      <div className="flex items-center gap-2 text-[10.5px] text-zinc-400">
                        <span className="line-clamp-1">{evt.venue.split(",")[0]}</span>
                        <span>&bull;</span>
                        <span className="text-emerald-500 font-semibold">{evt.seatsStatus}</span>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        isSelected ? "text-[#f2c301] translate-x-1" : "text-zinc-400"
                      }`}
                    />
                  </div>
                );
              })}

              {/* Custom Workshop Box */}
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-1.5 mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b8860b] block">
                  Custom Salon Workshops
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 font-serif">
                  Book a Private Masterclass in Indore
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Deepika Patidar conducts tailored bridal and hair chemical workshops for salons and makeup academies.
                </p>
                <a
                  href="https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20want%20to%20inquire%20about%20booking%20a%20private%20masterclass."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b8860b] hover:underline pt-0.5"
                >
                  <span>Chat with Event Coordinator &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. EVENT ATTENDEE BENEFITS GRID
        ======================================================== */}
        <section className="py-8 md:py-10 lg:py-12 bg-white border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                What Every Attendee Receives
              </span>
              <h3 className="text-2xl font-serif font-bold text-zinc-950">
                Exclusive Yashree Academy Event Kit &amp; Perks
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-amber-200 space-y-1.5">
                <Award className="w-7 h-7 text-[#b8860b]" />
                <h4 className="text-sm sm:text-base font-serif font-bold text-zinc-950">
                  Authorized Certificate
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Official participation certificate signed by celebrity makeup artist Deepika Patidar.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-amber-200 space-y-1.5">
                <Gift className="w-7 h-7 text-[#b8860b]" />
                <h4 className="text-sm sm:text-base font-serif font-bold text-zinc-950">
                  Free Practice Vanity Kit
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Essential brushes, color wheel guide, and formulation sheets provided at no extra cost.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-amber-200 space-y-1.5">
                <Users className="w-7 h-7 text-[#b8860b]" />
                <h4 className="text-sm sm:text-base font-serif font-bold text-zinc-950">
                  Live Model Demos
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Step-by-step real model transformation with studio lighting &amp; Instagram reel guidance.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-amber-200 space-y-1.5">
                <Sparkles className="w-7 h-7 text-[#b8860b]" />
                <h4 className="text-sm sm:text-base font-serif font-bold text-zinc-950">
                  Lifetime Consultation
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Direct technical guidance and salon setup mentorship from Yashree senior educators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. BOTTOM ADMISSION CTA
        ======================================================== */}
        <section className="bg-zinc-950 text-white py-10 md:py-14 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Reserve Your Masterclass Seat Today
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Seats are strictly limited to ensure personal 1-on-1 interaction. Connect with our event desk on WhatsApp now.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20want%20to%20reserve%20a%20seat%20for%20the%20upcoming%20masterclass."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all"
              >
                <Ticket className="w-4 h-4" />
                <span>Book Event Pass on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
