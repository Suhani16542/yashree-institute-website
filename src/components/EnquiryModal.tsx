"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, Sparkles, ChevronDown, Loader2 } from "lucide-react";
import { inquiriesApi } from "@/lib/api";

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
    mode: "Offline Classroom",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: "",
      phone: "",
      course: defaultCourse || "Non-Doctor Aesthetic Course",
      mode: "Offline Classroom",
      message: "",
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl z-10 overflow-hidden my-auto animate-in fade-in-0 zoom-in-95 duration-200">
        {/* Subtle Decorative Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          <div className="mb-6 pr-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#f2c301]">
              <Sparkles className="w-3.5 h-3.5" />
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
            <div className="p-6 rounded-2xl bg-[#f2c301]/10 border border-[#f2c301]/40 text-center space-y-3 my-4">
              <CheckCircle className="w-12 h-12 text-[#f2c301] mx-auto" />
              <h4 className="text-lg font-bold text-white">Thank You for Reaching Out!</h4>
              <p className="text-xs text-zinc-300">
                Your enquiry details have been submitted successfully. Our admissions team will get in touch with you shortly.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-200 hover:text-white transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-[#f2c301] text-xs font-bold text-zinc-950 hover:bg-[#d4af37] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
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
                  rows={2}
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
      </div>
    </div>
  );
}
