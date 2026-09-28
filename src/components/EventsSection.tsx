"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Ticket,
  Flame,
  CheckCircle2,
} from "lucide-react";
import AnimatedReveal from "@/components/AnimatedReveal";
import { AcademyEvent } from "@/data/eventsSeed";
import { eventsApi } from "@/lib/api";
import { resolveAssetUrl } from "@/lib/api/config";
import { EventItem } from "@/lib/api/types";

function formatEventFromApi(e: EventItem, idx: number): AcademyEvent {
  const d = e.eventDate ? new Date(e.eventDate) : new Date();
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = isNaN(d.getTime()) ? "MAR" : months[d.getMonth()];
  const day = isNaN(d.getTime()) ? "15" : String(d.getDate()).padStart(2, "0");
  const year = isNaN(d.getTime()) ? "2026" : String(d.getFullYear());

  return {
    id: e.id || e._id || `event-${idx}`,
    title: e.title || "Academy Masterclass",
    category: (e.category as AcademyEvent["category"]) || "Masterclass",
    date: isNaN(d.getTime()) ? (e.eventDate || "Upcoming") : `${month} ${day}, ${year}`,
    day,
    month,
    year,
    time: e.time || "10:00 AM - 5:00 PM IST",
    venue: e.location || "Yashree Institute Campus, Indore",
    instructor: e.instructor || "Deepika Patidar (Founder & Celebrity Artist)",
    image: resolveAssetUrl(e.bannerImage || e.bannerImageUrl, "/images/seminar_awards_grid.jpg"),
    description: e.description || "Join live hands-on clinical and bridal workshops in Indore.",
    seatsStatus: e.seatsStatus || "Registrations Open",
    highlights: Array.isArray(e.highlights) && e.highlights.length > 0
      ? e.highlights
      : [
          "Authorized Certificate",
          "Live Model Hands-on Practice",
          "Free Practice Cosmetics Kit",
          "Personal Mentorship",
        ],
    isFeatured: Boolean(e.featured ?? e.isFeatured),
  };
}

export default function EventsSection() {
  const [events, setEvents] = useState<AcademyEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLiveEvents() {
      setLoading(true);
      try {
        const res = await eventsApi.getPublic({ limit: 6 });
        if (Array.isArray(res.events) && res.events.length > 0) {
          setEvents(res.events.map(formatEventFromApi));
        } else {
          setEvents([]);
        }
      } catch (err) {
        console.error("Failed to load events on home teaser:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }
    loadLiveEvents();
  }, []);


  // Show top 3 highlight events as a concise teaser on Home Page
  const teaserEvents = events.slice(0, 3);

  return (
    <section id="events" className="py-10 md:py-14 lg:py-16 bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-800">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Concise Header */}
        <AnimatedReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-widest shadow-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>Upcoming Seminars &amp; Masterclasses</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white tracking-tight leading-tight">
              Live Masterclasses &amp; Convocation Events in Indore
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto">
              Upgrade your career with live clinical seminars, bridal masterclasses, and annual convocation ceremonies mentored by Deepika Patidar.
            </p>
          </div>
        </AnimatedReveal>

        {/* Compact Teaser Event Cards */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-zinc-900/80 rounded-3xl p-4 border border-zinc-800 animate-pulse h-64 flex flex-col justify-between">
                <div className="aspect-[16/10] bg-zinc-800 rounded-2xl w-full" />
                <div className="space-y-2 mt-3">
                  <div className="h-4 bg-zinc-800 rounded w-3/4" />
                  <div className="h-3 bg-zinc-800 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : teaserEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-10">
            {teaserEvents.map((evt, idx) => (
              <AnimatedReveal key={evt.id} animation="fade-up" delay={idx * 100} className="h-full">
                <Link href="/events" className="block h-full">
                  <div className="bg-zinc-900/90 rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#f2c301]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                    <div>
                      {/* Image with Date Box */}
                      <div className="relative aspect-[16/10] bg-black overflow-hidden">
                        <img
                          src={evt.image}
                          alt={evt.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent opacity-90" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                          <span className="px-2.5 py-0.5 rounded-full bg-zinc-950/80 text-[#f2c301] text-[10px] font-bold uppercase tracking-wider border border-amber-400/40">
                            {evt.category}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                            <Flame className="w-3 h-3 text-amber-200 fill-amber-200" />
                            <span>{evt.seatsStatus}</span>
                          </span>
                        </div>

                        {/* Date Badge */}
                        <div className="absolute bottom-3 left-3 bg-zinc-950/90 backdrop-blur-md border border-[#f2c301]/60 rounded-xl p-2 text-center min-w-[55px] shadow-lg">
                          <span className="block text-[9px] font-black uppercase tracking-wider text-[#f2c301]">
                            {evt.month}
                          </span>
                          <span className="block text-lg font-serif font-black text-white leading-none">
                            {evt.day}
                          </span>
                        </div>
                      </div>

                      {/* Body Content */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-base font-serif font-bold text-white group-hover:text-[#f2c301] transition-colors line-clamp-2 leading-snug">
                          {evt.title}
                        </h3>

                        <div className="space-y-1.5 text-xs text-zinc-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#f2c301] flex-shrink-0" />
                            <span className="line-clamp-1">{evt.venue.split(",")[0]}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-[#f2c301] flex-shrink-0" />
                            <span>{evt.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-5 pt-0">
                      <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-bold text-[#f2c301] group-hover:underline">
                        <span>View Event Schedule</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        ) : null}

        {/* Center CTA linking to dedicated internal /events page */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all duration-200"
          >
            <Ticket className="w-4 h-4" />
            <span>Explore All Upcoming Events &amp; Masterclasses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/919589871662?text=Hi%20Yashree%20Institute,%20I%20want%20to%20enquire%20about%20upcoming%20masterclasses%20and%20events."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/50 transition-all"
          >
            <span>WhatsApp Event Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
