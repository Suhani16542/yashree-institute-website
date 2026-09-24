"use client";

import { useState, useRef, ChangeEvent } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  X,
  Loader2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function InternshipForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    education: "",
    areaOfInterest: "Professional Makeup Artistry",
    preferredArea: "Practical Studio Training",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedApplicationId, setSubmittedApplicationId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedExtensions = [".pdf", ".doc", ".docx"];
  const maxSizeBytes = 10 * 1024 * 1024; // 10MB

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    const ext = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      setFileError("Invalid format. Please upload a PDF, DOC, or DOCX document.");
      setResumeFile(null);
      return;
    }

    if (file.size > maxSizeBytes) {
      setFileError("File is too large (max 10MB allowed). Please select a smaller file.");
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate phone
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (cleanedPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Validate resume
    if (!resumeFile) {
      setFileError("Please upload your resume to complete your application.");
      return;
    }

    try {
      setStatus("loading");

      const data = new FormData();
      data.append("fullName", formData.fullName.trim());
      data.append("phone", formData.phone.trim());
      data.append("email", formData.email.trim());
      data.append("city", formData.city.trim());
      data.append("education", formData.education.trim());
      data.append("areaOfInterest", formData.areaOfInterest);
      data.append("preferredArea", formData.preferredArea);
      data.append("message", formData.message.trim());
      data.append("resume", resumeFile);

      const res = await fetch("/api/internship", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit application.");
      }

      setSubmittedApplicationId(json.applicationId);
      setStatus("success");
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please check your network and try again.");
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      city: "",
      education: "",
      areaOfInterest: "Professional Makeup Artistry",
      preferredArea: "Practical Studio Training",
      message: "",
    });
    setResumeFile(null);
    setFileError(null);
    setStatus("idle");
    setErrorMessage(null);
    setSubmittedApplicationId(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-amber-200 shadow-xl text-center max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-[#f2c301] text-zinc-950 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9 text-[#b8860b]" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
          Application Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">
          Thank You, {formData.fullName}!
        </h3>

        <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
          Your internship application has been submitted successfully to the Yashree Institute academic desk. Our faculty and admissions team will review your profile and contact you via phone or email for any upcoming evaluation rounds.
        </p>

        {submittedApplicationId && (
          <div className="mt-5 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 inline-block text-xs font-semibold text-zinc-800">
            Reference ID: <span className="font-mono font-bold text-[#b8860b]">{submittedApplicationId}</span>
          </div>
        )}

        <div className="pt-6">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-950 bg-[#f2c301] hover:bg-[#d4af37] transition-all cursor-pointer shadow-xs"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-zinc-200/90 shadow-xl relative">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Application Form</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">
          Internship Candidate Registration
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Complete the fields below and attach your resume. All details are kept strictly confidential for evaluation purposes.
        </p>
      </div>

      {status === "error" && errorMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Submission Error</p>
            <p className="mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Priya Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
              Mobile Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Email & City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
              Current City
            </label>
            <input
              type="text"
              placeholder="e.g. Indore, Bhopal, Ujjain"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Course / Education */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
            Course / Educational Background
          </label>
          <input
            type="text"
            placeholder="e.g. 12th / Graduate / Cosmetology Diploma / Salon Experience"
            value={formData.education}
            onChange={(e) => setFormData({ ...formData, education: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all"
          />
        </div>

        {/* Area of Interest & Preferred Internship Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
              Primary Area of Interest
            </label>
            <select
              value={formData.areaOfInterest}
              onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all"
            >
              <option value="Professional Makeup Artistry">Professional Makeup Artistry</option>
              <option value="Clinical Aesthetics & Skin Therapy">Clinical Aesthetics &amp; Skin Therapy</option>
              <option value="Hair Science, Chemical & Color">Hair Science, Chemical &amp; Color</option>
              <option value="Hair Styling & Bridal Updos">Hair Styling &amp; Bridal Updos</option>
              <option value="Nail Art & Nail Extensions">Nail Art &amp; Nail Extensions</option>
              <option value="Permanent Makeup (PMU) & Microblading">Permanent Makeup (PMU) &amp; Microblading</option>
              <option value="Salon Operations & Front Desk Support">Salon Operations &amp; Front Desk Support</option>
              <option value="General Beauty & Cosmetology">General Beauty &amp; Cosmetology</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
              Preferred Internship Area
            </label>
            <select
              value={formData.preferredArea}
              onChange={(e) => setFormData({ ...formData, preferredArea: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all"
            >
              <option value="Practical Studio Training">Practical Studio Training</option>
              <option value="Salon Client Shadowing">Salon Client Shadowing</option>
              <option value="Live Event & Bridal Preparation">Live Event &amp; Bridal Preparation</option>
              <option value="Faculty Demonstration Assistance">Faculty Demonstration Assistance</option>
              <option value="Flexible / As Assigned">Flexible / As Assigned</option>
            </select>
          </div>
        </div>

        {/* Short Message / About Yourself */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
            Short Message / About Yourself (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us briefly about your aspirations, any previous experience, or what you hope to learn during your internship..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-[#b8860b] focus:bg-white transition-all resize-none"
          />
        </div>

        {/* Resume Upload Area */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
            Resume / CV Upload *
          </label>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
            className="hidden"
            id="resume-upload-input"
          />

          {!resumeFile ? (
            <label
              htmlFor="resume-upload-input"
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-amber-300 hover:border-[#b8860b] bg-amber-50/40 hover:bg-amber-50/80 rounded-2xl cursor-pointer transition-colors text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#b8860b] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-zinc-800">
                Click to browse and upload your resume
              </p>
              <p className="text-[11px] text-zinc-500 mt-1">
                Accepted formats: PDF, DOC, DOCX (Max size: 10MB)
              </p>
            </label>
          ) : (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-amber-200 text-[#b8860b] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900 line-clamp-1">
                    {resumeFile.name}
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to submit
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="resume-upload-input"
                  className="px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-zinc-800 text-xs font-semibold hover:bg-amber-100/70 transition-colors cursor-pointer"
                >
                  Replace
                </label>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                  aria-label="Remove selected resume"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {fileError && (
            <p className="text-xs text-rose-600 font-semibold mt-2 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{fileError}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#f2c301] via-[#d4af37] to-[#e6b800] hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Application...</span>
              </>
            ) : (
              <>
                <span>Apply for Internship</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-zinc-400 text-center mt-3 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            <span>Yashree Institute Indore • Academic Candidate Consideration</span>
          </p>
        </div>
      </form>
    </div>
  );
}
