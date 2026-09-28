"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  MessageCircle,
  Sparkles,
  CheckCircle,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";
import AnimatedReveal from "@/components/AnimatedReveal";
import { inquiriesApi } from "@/lib/api";

export default function ConsultationCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Non-Doctor Aesthetic Course",
    mode: "Offline Classroom",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setErrorMessage(null);

    // Save Lead Details to Backend Database (triggers Brevo email notification)
    try {
      await inquiriesApi.submit({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        course: formData.course.trim(),
        mode: formData.mode.trim(),
        message: formData.message.trim() || undefined,
      });
      setSubmitted(true);
    } catch (err: any) {
      console.error("Enquiry submission failed:", err);
      setErrorMessage(
        err?.message || "Failed to submit enquiry. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
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
              <div className="bg-zinc-900/95 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#f2c301]">
                    Quick Admission &amp; Booking
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    Enquire for Next Batch or Service
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                    Fill details below to get instant course fees, kit information &amp; batch schedule.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-[#f2c301]/10 border border-[#f2c301]/40 text-center space-y-3">
                    <CheckCircle className="w-12 h-12 text-[#f2c301] mx-auto" />
                    <h4 className="text-lg font-bold text-white">Thank You for Reaching Out!</h4>
                    <p className="text-xs text-zinc-300">
                      Your enquiry details have been submitted successfully. Our admissions team will get in touch with you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-200 hover:text-white transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium leading-relaxed">
                        {errorMessage}
                      </div>
                    )}

                    {/* Row 1: Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                          Full Name <span className="text-[#f2c301] font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-11 px-4 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white placeholder:text-zinc-500 text-sm focus:outline-hidden focus:border-[#f2c301] focus:ring-1 focus:ring-[#f2c301]/40 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                          Phone Number <span className="text-[#f2c301] font-bold">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-11 px-4 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white placeholder:text-zinc-500 text-sm focus:outline-hidden focus:border-[#f2c301] focus:ring-1 focus:ring-[#f2c301]/40 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Program of Interest & Preferred Mode */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                          Program or Service of Interest <span className="text-[#f2c301] font-bold">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={formData.course}
                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                            className="w-full h-11 pl-3.5 pr-9 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs sm:text-sm appearance-none focus:outline-hidden focus:border-[#f2c301] focus:ring-1 focus:ring-[#f2c301]/40 transition-colors cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap"
                          >
                            <option value="Non-Doctor Aesthetic Course" className="bg-zinc-900 text-white py-1">Non-Doctor Aesthetic Course</option>
                            <option value="Professional Make-up Master Class" className="bg-zinc-900 text-white py-1">Professional Make-up Master Class</option>
                            <option value="Hair Styling Course (Basic to Advanced)" className="bg-zinc-900 text-white py-1">Hair Styling Course (Basic to Advanced)</option>
                            <option value="Hair Master Class & Chemical Treatments" className="bg-zinc-900 text-white py-1">Hair Master Class & Chemical Treatments</option>
                            <option value="Nail Extensions & Nail Art Class" className="bg-zinc-900 text-white py-1">Nail Extensions & Nail Art Class</option>
                            <option value="Permanent Professional Makeup (PMU)" className="bg-zinc-900 text-white py-1">Permanent Professional Makeup (PMU)</option>
                            <option value="Comprehensive Skin Care Course" className="bg-zinc-900 text-white py-1">Comprehensive Skin Care Course</option>
                            <option value="Bridal / Salon Makeup Booking" className="bg-zinc-900 text-white py-1">Bridal / Salon Makeup Booking</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                          Preferred Mode
                        </label>
                        <div className="relative">
                          <select
                            value={formData.mode}
                            onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                            className="w-full h-11 pl-3.5 pr-9 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs sm:text-sm appearance-none focus:outline-hidden focus:border-[#f2c301] focus:ring-1 focus:ring-[#f2c301]/40 transition-colors cursor-pointer"
                          >
                            <option value="Offline Classroom" className="bg-zinc-900 text-white py-1">Offline Classroom</option>
                            <option value="Online Classes" className="bg-zinc-900 text-white py-1">Online Classes</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Message / Questions (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Message / Questions <span className="text-zinc-500 font-normal lowercase tracking-normal text-[11px]">(optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Ask about batch timings, fees, or course kit details..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white placeholder:text-zinc-500 text-sm focus:outline-hidden focus:border-[#f2c301] focus:ring-1 focus:ring-[#f2c301]/40 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-12 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#f2c301] via-[#d4af37] to-[#e6b800] hover:brightness-105 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-sans disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>

                    {/* Security Trust Note */}
                    <p className="text-[11px] sm:text-xs text-zinc-400 text-center pt-1 font-normal">
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
