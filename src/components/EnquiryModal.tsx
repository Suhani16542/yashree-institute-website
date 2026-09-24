"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, MessageCircle, Sparkles } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultCourse = "Non-Doctor Aesthetic Course",
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: defaultCourse,
    mode: "Offline Classroom (Indore)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      course: defaultCourse || "Non-Doctor Aesthetic Course",
      mode: "Offline Classroom (Indore)",
      message: "",
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl z-10 overflow-hidden my-auto animate-in fade-in-0 zoom-in-95 duration-200">
        {/* Subtle Decorative Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          <div className="mb-5 pr-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#f2c301]">
              <Sparkles className="w-3.5 h-3.5" />
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
            <div className="p-6 rounded-2xl bg-[#f2c301]/10 border border-[#f2c301]/40 text-center space-y-3 my-4">
              <CheckCircle className="w-12 h-12 text-[#f2c301] mx-auto" />
              <h4 className="text-lg font-bold text-white">Thank You for Reaching Out!</h4>
              <p className="text-xs text-zinc-300">
                Your inquiry details have been forwarded to our admissions desk via WhatsApp. Our team will contact you shortly.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
                >
                  Send Another Inquiry
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-[#f2c301] text-xs font-bold text-zinc-950 hover:bg-[#d4af37] transition-colors"
                >
                  Close
                </button>
              </div>
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
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#f2c301] transition-colors"
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
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#f2c301] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Program or Service of Interest *
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#f2c301] transition-colors"
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
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
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
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
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
                  rows={2}
                  placeholder="Ask about batch timings, fees, or course kit details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#f2c301] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#f2c301] via-[#d4af37] to-[#e6b800] hover:brightness-105 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
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
      </div>
    </div>
  );
}
