"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  MessageCircle,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";
import AnimatedReveal from "@/components/AnimatedReveal";

export default function ConsultationCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Non-Doctor Aesthetic Course",
    mode: "Offline Classroom (Indore)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Save Lead Details to Backend Database
    try {
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.warn("Could not save inquiry to database:", err);
    }

    // 2. Open WhatsApp Direct Chat
    const text = `*New Admission / Service Inquiry - Yashree Institute*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Interested Program:* ${encodeURIComponent(
      formData.course
    )}%0A*Preferred Mode:* ${encodeURIComponent(formData.mode)}%0A*Message:* ${encodeURIComponent(
      formData.message || "I would like more information on batch timings and fees."
    )}`;

    window.open(`https://wa.me/919589871662?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 md:py-14 lg:py-16 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Campus Info & Direct Contact */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedReveal animation="fade-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#f2c301] text-xs font-bold uppercase tracking-wider mb-2.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                  Your Future in Beauty Starts Here!
                </h2>
                <p className="mt-2 text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Connect with our academic counselors, schedule a personal visit to our Indore campus, or book a salon appointment with Deepika Patidar.
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-4 mt-6">
                {/* Phone Contacts */}
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f2c301] text-zinc-950 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Admission Helpline Numbers
                    </h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                      <a
                        href="tel:+919589871662"
                        className="text-lg font-bold text-white hover:text-[#f2c301] transition-colors"
                      >
                        +91 95898 71662
                      </a>
                      <span className="text-zinc-600 hidden sm:inline">•</span>
                      <a
                        href="tel:+919244095594"
                        className="text-lg font-bold text-white hover:text-[#f2c301] transition-colors"
                      >
                        +91 92440 95594
                      </a>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      Available Monday to Sunday (9:00 AM – 7:00 PM)
                    </p>
                  </div>
                </div>

                {/* Campus Address */}
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 text-[#f2c301] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Campus &amp; Academy Location
                    </h4>
                    <p className="text-base font-medium text-white mt-1">
                      Ek 49, Sch no. 54, Near Meghdoot Garden,
                    </p>
                    <p className="text-sm text-zinc-300">
                      Front Of KK Science Collage, Indore (M.P.)
                    </p>
                    <p className="text-xs text-[#f2c301] mt-2 font-medium">
                      Central Indore location with easy transit access
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Follow Our Work
                    </h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      @yashreeinstituteindore
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com/yashreeinstituteindore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-rose-500 flex items-center justify-center text-white transition-all"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com/yashreeinstituteindore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-blue-600 flex items-center justify-center text-white transition-all"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Interactive Consultation & Admission Form */}
          <div className="lg:col-span-6">
            <AnimatedReveal animation="fade-right">
              <div className="bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301]">
                    Quick Admission &amp; Booking
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    Enquire for Next Batch or Service
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Fill details below to get instant course fees, kit information &amp; batch schedule.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-[#f2c301]/10 border border-[#f2c301]/40 text-center space-y-3">
                    <CheckCircle className="w-12 h-12 text-[#f2c301] mx-auto" />
                    <h4 className="text-lg font-bold text-white">Thank You for Reaching Out!</h4>
                    <p className="text-xs text-zinc-300">
                      Your inquiry details have been forwarded to our admissions desk via WhatsApp. Our team will contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-200 hover:text-white"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#f2c301] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#f2c301] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Program or Service of Interest *
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#f2c301] transition-colors"
                      >
                        <option value="Non-Doctor Aesthetic Course">Non-Doctor Aesthetic Course</option>
                        <option value="Professional Make-up Master Class">Professional Make-up Master Class</option>
                        <option value="Hair Styling Course (Basic to Advanced)">Hair Styling Course (Basic to Advanced)</option>
                        <option value="Hair Master Class & Chemical Treatments">Hair Master Class & Chemical Treatments</option>
                        <option value="Nail Extensions & Nail Art Class">Nail Extensions & Nail Art Class</option>
                        <option value="Permanent Professional Makeup (PMU)">Permanent Professional Makeup (PMU)</option>
                        <option value="Comprehensive Skin Care Course">Comprehensive Skin Care Course</option>
                        <option value="Bridal / Salon Makeup Booking">Bridal / Salon Makeup Booking</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Preferred Mode
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, mode: "Offline Classroom (Indore)" })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            formData.mode.includes("Offline")
                              ? "bg-[#f2c301] text-zinc-950 border-[#f2c301]"
                              : "bg-zinc-800 text-zinc-400 border-zinc-700"
                          }`}
                        >
                          Offline Classroom
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, mode: "Online Classes Available" })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            formData.mode.includes("Online")
                              ? "bg-[#f2c301] text-zinc-950 border-[#f2c301]"
                              : "bg-zinc-800 text-zinc-400 border-zinc-700"
                          }`}
                        >
                          Online Classes
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Message / Questions (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Ask about batch timings, fees, or course kit details..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#f2c301] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#f2c301] via-[#d4af37] to-[#e6b800] hover:brightness-105 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Submit via WhatsApp &amp; Inquire</span>
                    </button>

                    <p className="text-[11px] text-zinc-500 text-center">
                      🔒 Direct connection with Yashree Institute admissions team. No spam guaranteed.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
