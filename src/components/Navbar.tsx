"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Menu,
  X,
  Sparkles,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Scissors,
  Paintbrush,
  Sparkle,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";
import { COURSES_LIST } from "@/data/coursesData";
import EnquiryModal from "@/components/EnquiryModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const coursesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenEnquiry = () => setIsEnquiryModalOpen(true);
    window.addEventListener("open-enquiry-modal", handleOpenEnquiry);
    return () => window.removeEventListener("open-enquiry-modal", handleOpenEnquiry);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        coursesDropdownRef.current &&
        !coursesDropdownRef.current.contains(event.target as Node)
      ) {
        setCoursesDropdownOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Categorized 18 Courses for the Mega-Menu
  const skinCourses = COURSES_LIST.filter((c) => c.category === "Beauty & Skin");
  const hairCourses = COURSES_LIST.filter((c) => c.category === "Hair");
  const makeupCourses = COURSES_LIST.filter((c) => c.category === "Makeup");
  const nailCourses = COURSES_LIST.filter((c) => c.category === "Nails");

  return (
    <>
      {/* Top Notification Strip */}
      <div className="bg-zinc-950 text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f2c301]/20 text-[#f2c301] text-[11px] font-bold tracking-wide">
              <Sparkles className="w-3 h-3" /> ADMISSIONS OPEN
            </span>
            <span className="hidden md:inline text-zinc-400 text-[12px]">
              New Cosmetology &amp; Aesthetic Batches in Indore • 100% Practical Exposure
            </span>
          </div>

          <div className="flex items-center gap-4 text-[12px]">
            <a
              href="tel:+919589871662"
              className="flex items-center gap-1.5 hover:text-[#f2c301] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f2c301]" />
              <span className="font-semibold">+91 95898 71662</span>
            </a>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <a
              href="tel:+919244095594"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#f2c301] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f2c301]" />
              <span className="font-semibold">+91 92440 95594</span>
            </a>
            <span className="text-zinc-600 hidden lg:inline">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#f2c301]" />
              <span>Near Meghdoot Garden, Indore</span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Sticky Navbar Container */}
      <div
        suppressHydrationWarning
        className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300"
      >
        <header
          suppressHydrationWarning
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-xl border border-amber-200/70 py-2.5 px-4 sm:px-6"
              : "bg-white/90 backdrop-blur-sm border border-zinc-200/80 shadow-sm py-3 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Yashree Institute Official Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="relative w-36 xs:w-44 sm:w-52 h-9 sm:h-11">
                <Image
                  src="/images/logo_dark_text.png"
                  alt="Yashree Institute Cosmetology & Aesthetic Academy"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              <Link
                href="/"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                About
              </Link>

              <Link
                href="/academy"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Academy
              </Link>

              {/* ========================================================
                  1. COURSES MEGA-MENU DROPDOWN (DESKTOP)
              ======================================================== */}
              <div ref={coursesDropdownRef} className="relative py-1">
                <button
                  type="button"
                  onClick={() => {
                    setCoursesDropdownOpen(!coursesDropdownOpen);
                    setServicesDropdownOpen(false);
                  }}
                  className="flex items-center gap-1.5 text-[13.5px] font-bold text-zinc-800 hover:text-[#b8860b] transition-colors tracking-wide cursor-pointer focus:outline-none select-none py-1"
                  aria-expanded={coursesDropdownOpen}
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      coursesDropdownOpen ? "rotate-180 text-[#b8860b]" : "text-zinc-400"
                    }`}
                  />
                </button>

                {/* 18-Course Mega Menu Panel */}
                {coursesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[920px] max-w-[95vw] p-5 bg-white rounded-3xl shadow-2xl border-2 border-amber-200/90 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-zinc-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#f2c301]" />
                        <span className="text-xs font-black uppercase tracking-widest text-[#b8860b]">
                          Official 18 Certified Academy Courses
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-500 font-medium bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        100% Practical Exposure in Indore
                      </span>
                    </div>

                    {/* 4-Column Mega-Menu Layout */}
                    <div className="grid grid-cols-4 gap-4">
                      {/* Column 1: BEAUTY & SKIN (5 Courses) */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-zinc-900 pb-1 border-b border-amber-200/60">
                          <Sparkle className="w-3.5 h-3.5 text-[#b8860b]" />
                          <span>Beauty &amp; Skin ({skinCourses.length})</span>
                        </div>
                        <div className="space-y-1 pt-1">
                          {skinCourses.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/courses/${c.slug}`}
                              onClick={() => setCoursesDropdownOpen(false)}
                              className="group block p-1.5 rounded-lg hover:bg-amber-50/80 transition-colors"
                            >
                              <div className="text-xs font-bold text-zinc-800 group-hover:text-[#b8860b] flex items-center justify-between">
                                <span>{c.shortTitle}</span>
                                <ArrowRight className="w-3 h-3 text-zinc-300 group-hover:text-[#b8860b] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                              </div>
                              <p className="text-[10.5px] text-zinc-500 line-clamp-1">
                                {c.badge}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: HAIR (4 Courses) */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-zinc-900 pb-1 border-b border-amber-200/60">
                          <Scissors className="w-3.5 h-3.5 text-[#b8860b]" />
                          <span>Hair ({hairCourses.length})</span>
                        </div>
                        <div className="space-y-1 pt-1">
                          {hairCourses.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/courses/${c.slug}`}
                              onClick={() => setCoursesDropdownOpen(false)}
                              className="group block p-1.5 rounded-lg hover:bg-amber-50/80 transition-colors"
                            >
                              <div className="text-xs font-bold text-zinc-800 group-hover:text-[#b8860b] flex items-center justify-between">
                                <span>{c.shortTitle}</span>
                                <ArrowRight className="w-3 h-3 text-zinc-300 group-hover:text-[#b8860b] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                              </div>
                              <p className="text-[10.5px] text-zinc-500 line-clamp-1">
                                {c.badge}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: MAKEUP & PMU (7 Courses) */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-zinc-900 pb-1 border-b border-amber-200/60">
                          <Paintbrush className="w-3.5 h-3.5 text-[#b8860b]" />
                          <span>Makeup &amp; PMU ({makeupCourses.length})</span>
                        </div>
                        <div className="space-y-1 pt-1 max-h-[220px] overflow-y-auto pr-1">
                          {makeupCourses.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/courses/${c.slug}`}
                              onClick={() => setCoursesDropdownOpen(false)}
                              className="group block p-1.5 rounded-lg hover:bg-amber-50/80 transition-colors"
                            >
                              <div className="text-xs font-bold text-zinc-800 group-hover:text-[#b8860b] flex items-center justify-between">
                                <span className="line-clamp-1">{c.shortTitle}</span>
                                <ArrowRight className="w-3 h-3 text-zinc-300 group-hover:text-[#b8860b] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 flex-shrink-0" />
                              </div>
                              <p className="text-[10.5px] text-zinc-500 line-clamp-1">
                                {c.badge}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 4: NAILS (2 Courses) + Quick Info Card */}
                      <div className="space-y-3 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-zinc-900 pb-1 border-b border-amber-200/60">
                            <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
                            <span>Nails ({nailCourses.length})</span>
                          </div>
                          <div className="space-y-1 pt-1">
                            {nailCourses.map((c) => (
                              <Link
                                key={c.slug}
                                href={`/courses/${c.slug}`}
                                onClick={() => setCoursesDropdownOpen(false)}
                                className="group block p-1.5 rounded-lg hover:bg-amber-50/80 transition-colors"
                              >
                                <div className="text-xs font-bold text-zinc-800 group-hover:text-[#b8860b] flex items-center justify-between">
                                  <span>{c.shortTitle}</span>
                                  <ArrowRight className="w-3 h-3 text-zinc-300 group-hover:text-[#b8860b] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                                </div>
                                <p className="text-[10.5px] text-zinc-500 line-clamp-1">
                                  {c.badge}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Quick Action Card inside Mega-Menu */}
                        <div className="bg-[#faf8f5] p-3 rounded-xl border border-amber-200 space-y-1.5 text-center">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#b8860b] block">
                            Admissions Open
                          </span>
                          <p className="text-[11px] text-zinc-600 leading-tight">
                            Personal 1-on-1 Guidance by Deepika Patidar
                          </p>
                          <Link
                            href="/#courses"
                            onClick={() => setCoursesDropdownOpen(false)}
                            className="inline-block w-full py-1.5 rounded-lg bg-zinc-950 text-[#f2c301] text-[11px] font-bold hover:bg-[#b8860b] hover:text-white transition-colors"
                          >
                            Explore All Courses &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Footer bar */}
                    <div className="mt-3.5 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                      <span>
                        📍 Indore Campus: Near Meghdoot Garden, Vijay Nagar
                      </span>
                      <a
                        href="tel:+919589871662"
                        className="font-bold text-[#b8860b] hover:underline"
                      >
                        Call +91 95898 71662 For Batch Inquiries
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* SERVICES DROPDOWN (DESKTOP) */}
              <div ref={servicesDropdownRef} className="relative py-1">
                <button
                  type="button"
                  onClick={() => {
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    setCoursesDropdownOpen(false);
                  }}
                  className="flex items-center gap-1.5 text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide cursor-pointer focus:outline-none select-none py-1"
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-[#b8860b]" : "text-zinc-400"
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] p-4 bg-white rounded-2xl shadow-2xl border-2 border-amber-200/90 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-100">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                        Official Academy Services &amp; Programs
                      </span>
                      <span className="text-[11px] text-zinc-500 font-medium">
                        Mentored by Deepika Patidar
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="p-2.5 rounded-xl hover:bg-[#faf8f5] border border-transparent hover:border-amber-200 transition-all flex items-start justify-between group"
                        >
                          <div className="space-y-0.5 pr-2">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-bold text-[#b8860b] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                                {service.category}
                              </span>
                            </div>
                            <h4 className="text-xs font-bold text-zinc-900 group-hover:text-[#b8860b] transition-colors line-clamp-1">
                              {service.shortTitle}
                            </h4>
                            <p className="text-[11px] text-zinc-500 line-clamp-1">
                              {service.durationBadge}
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-[#b8860b] group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                        </Link>
                      ))}
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-xs">
                      <span className="text-zinc-500">
                        📍 Offline in Indore &bull; Online Available
                      </span>
                      <Link
                        href="/#courses"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="font-bold text-[#b8860b] hover:underline"
                      >
                        Explore All Curriculum &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Gallery
              </Link>

              <Link
                href="/events"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Events
              </Link>

              <Link
                href="/internship"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Internship
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsEnquiryModalOpen(true)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsEnquiryModalOpen(true)}
                className="sm:hidden px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-zinc-950 bg-[#f2c301] shadow-sm cursor-pointer"
              >
                Enquire
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-zinc-800 hover:bg-amber-50 focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* ========================================================
              MOBILE NAVIGATION DRAWER
          ======================================================== */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-zinc-100 flex flex-col space-y-1 animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto pr-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                About
              </Link>
              <Link
                href="/academy"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors flex items-center justify-between"
              >
                <span>Academy (Videos &amp; Reels)</span>
                <span className="text-[10px] bg-[#f2c301] text-zinc-950 font-bold px-2 py-0.5 rounded-full">
                  NEW
                </span>
              </Link>

              {/* Mobile Courses Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="w-full px-3 py-2 text-sm font-bold text-zinc-900 bg-amber-50/70 hover:bg-amber-100/70 rounded-xl transition-colors flex items-center justify-between border border-amber-200/80"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#b8860b]" />
                    <span>Courses (All 18 Available)</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#b8860b] transition-transform ${
                      mobileCoursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileCoursesOpen && (
                  <div className="p-2 bg-[#faf8f5] rounded-xl my-1 border border-amber-200 space-y-3">
                    {/* Beauty & Skin */}
                    <div>
                      <span className="text-[10.5px] font-black uppercase tracking-wider text-[#b8860b] px-2 block">
                        Beauty &amp; Skin
                      </span>
                      <div className="grid grid-cols-1 gap-0.5 mt-1">
                        {skinCourses.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/courses/${c.slug}`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileCoursesOpen(false);
                            }}
                            className="px-2.5 py-1.5 text-xs font-semibold text-zinc-700 hover:text-[#b8860b] hover:bg-amber-100/50 rounded-lg transition-colors flex items-center justify-between"
                          >
                            <span>{c.shortTitle}</span>
                            <ArrowRight className="w-3 h-3 text-zinc-400" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Hair */}
                    <div className="pt-2 border-t border-zinc-200/60">
                      <span className="text-[10.5px] font-black uppercase tracking-wider text-[#b8860b] px-2 block">
                        Hair Artistry
                      </span>
                      <div className="grid grid-cols-1 gap-0.5 mt-1">
                        {hairCourses.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/courses/${c.slug}`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileCoursesOpen(false);
                            }}
                            className="px-2.5 py-1.5 text-xs font-semibold text-zinc-700 hover:text-[#b8860b] hover:bg-amber-100/50 rounded-lg transition-colors flex items-center justify-between"
                          >
                            <span>{c.shortTitle}</span>
                            <ArrowRight className="w-3 h-3 text-zinc-400" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Makeup & PMU */}
                    <div className="pt-2 border-t border-zinc-200/60">
                      <span className="text-[10.5px] font-black uppercase tracking-wider text-[#b8860b] px-2 block">
                        Makeup &amp; PMU
                      </span>
                      <div className="grid grid-cols-1 gap-0.5 mt-1">
                        {makeupCourses.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/courses/${c.slug}`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileCoursesOpen(false);
                            }}
                            className="px-2.5 py-1.5 text-xs font-semibold text-zinc-700 hover:text-[#b8860b] hover:bg-amber-100/50 rounded-lg transition-colors flex items-center justify-between"
                          >
                            <span>{c.shortTitle}</span>
                            <ArrowRight className="w-3 h-3 text-zinc-400" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Nails */}
                    <div className="pt-2 border-t border-zinc-200/60">
                      <span className="text-[10.5px] font-black uppercase tracking-wider text-[#b8860b] px-2 block">
                        Nails Studio
                      </span>
                      <div className="grid grid-cols-1 gap-0.5 mt-1">
                        {nailCourses.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/courses/${c.slug}`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileCoursesOpen(false);
                            }}
                            className="px-2.5 py-1.5 text-xs font-semibold text-zinc-700 hover:text-[#b8860b] hover:bg-amber-100/50 rounded-lg transition-colors flex items-center justify-between"
                          >
                            <span>{c.shortTitle}</span>
                            <ArrowRight className="w-3 h-3 text-zinc-400" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-amber-200 text-center">
                      <Link
                        href="/#courses"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileCoursesOpen(false);
                        }}
                        className="text-xs font-bold text-[#b8860b] hover:underline"
                      >
                        Explore Full Course Grid &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>Services &amp; Programs</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180 text-[#b8860b]" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-[#faf8f5] rounded-xl my-1 border border-amber-100">
                    {SERVICES_DATA.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="block px-3 py-2 text-xs font-semibold text-zinc-700 hover:text-[#b8860b] hover:bg-amber-100/50 rounded-lg transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/practical-training"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Practical Training
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/events"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Events
              </Link>
              <Link
                href="/internship"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Internship
              </Link>

              <div className="pt-3 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsEnquiryModalOpen(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-950 bg-[#f2c301] text-center shadow-xs cursor-pointer"
                >
                  Enquire Now
                </button>
                <a
                  href="tel:+919589871662"
                  className="flex items-center justify-center gap-2 py-2.5 bg-zinc-950 text-white text-xs font-bold rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f2c301]" /> Call +91 95898 71662
                </a>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Enquiry Form Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </>
  );
}
