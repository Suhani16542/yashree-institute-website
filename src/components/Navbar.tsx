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
  MessageCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <div className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
        <header
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-xl border border-amber-200/70 py-2.5 px-4 sm:px-6"
              : "bg-white/90 backdrop-blur-sm border border-zinc-200/80 shadow-sm py-3 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Yashree Institute Official Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-44 sm:w-52 h-11">
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
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              <Link
                href="/"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                About
              </Link>

              <Link
                href="/#courses"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Courses
              </Link>

              {/* SERVICES DROPDOWN (DESKTOP) */}
              <div
                ref={dropdownRef}
                className="relative py-1"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="flex items-center gap-1 text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide cursor-pointer focus:outline-none"
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
                href="/#training"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Practical Training
              </Link>

              <Link
                href="/#gallery"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Gallery
              </Link>

              <Link
                href="/#contact"
                className="text-[13.5px] font-semibold text-zinc-700 hover:text-[#b8860b] transition-colors tracking-wide py-1"
              >
                Contact
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/919589871662?text=Hi%20Yashree%20Institute,%20I%20would%20like%20to%20enquire%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-800 bg-amber-50 hover:bg-amber-100/70 rounded-full border border-amber-200 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-105 transition-all duration-200"
              >
                Enquire Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="/#contact"
                className="sm:hidden px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-zinc-950 bg-[#f2c301] shadow-sm"
              >
                Enquire
              </a>
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

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-zinc-100 flex flex-col space-y-1 animate-in slide-in-from-top-2 duration-200">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                About
              </Link>
              <Link
                href="/#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Courses
              </Link>

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
                href="/#training"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Practical Training
              </Link>
              <Link
                href="/#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-amber-50 hover:text-[#b8860b] rounded-xl transition-colors"
              >
                Contact
              </Link>

              <div className="pt-2 flex flex-col gap-2">
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
    </>
  );
}
