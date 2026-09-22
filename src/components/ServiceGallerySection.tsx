"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Eye,
  Camera,
  CheckCircle2,
  Wrench,
  TrendingUp,
  Layers,
  ZoomIn,
} from "lucide-react";
import type { ServiceGalleryItem } from "@/data/servicesData";

interface ServiceGallerySectionProps {
  serviceTitle: string;
  heading: string;
  subtitle: string;
  images: ServiceGalleryItem[];
  themeBadgeBg?: string;
  themeBadgeText?: string;
  themeBorderAccent?: string;
}

export default function ServiceGallerySection({
  serviceTitle,
  heading,
  subtitle,
  images,
  themeBadgeBg = "bg-amber-50",
  themeBadgeText = "text-[#b8860b]",
  themeBorderAccent = "border-amber-200",
}: ServiceGallerySectionProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [filterTag, setFilterTag] = useState<string>("All");

  // Extract unique filter tags
  const tags = ["All", ...Array.from(new Set(images.map((img) => img.tag).filter(Boolean))) as string[]];

  const filteredImages =
    filterTag === "All"
      ? images
      : images.filter((img) => img.tag === filterTag);

  const handleOpenLightbox = (index: number) => {
    setSelectedIdx(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIdx(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  }, [selectedIdx, images.length]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  }, [selectedIdx, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handlePrev, handleNext]);

  // Body scroll lock
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIdx]);

  const currentItem = selectedIdx !== null ? images[selectedIdx] : null;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-zinc-100 overflow-hidden relative">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f2c301]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Camera className="w-3.5 h-3.5" />
              <span>Dedicated Visual Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="mt-3 text-xs sm:text-sm lg:text-base text-zinc-600 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-zinc-950 text-[#f2c301] text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 flex-shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{images.length} Service Techniques</span>
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        {tags.length > 2 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  filterTag === tag
                    ? "bg-zinc-950 text-[#f2c301] shadow-md scale-105"
                    : "bg-[#faf8f5] text-zinc-600 hover:bg-amber-50 hover:text-zinc-950 border border-zinc-200/80"
                }`}
              >
                {tag === "All" ? "All Visuals & Techniques" : tag}
              </button>
            ))}
          </div>
        )}

        {/* Editorial Layout Grid */}
        <div className="space-y-6">
          {/* Top Row: Hero Featured Large Card + 2 Supporting Highlights */}
          {filterTag === "All" ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Featured Image (Large 7 Cols) */}
                <div
                  onClick={() => handleOpenLightbox(0)}
                  className="lg:col-span-7 relative group rounded-3xl overflow-hidden bg-zinc-950 border-2 border-amber-200/80 shadow-xl cursor-pointer aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[460px] transform transition-all hover:border-amber-400"
                >
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3.5 py-1 rounded-full bg-[#f2c301] text-zinc-950 text-[11px] font-bold uppercase tracking-wider shadow-md">
                      {images[0].tag || "Signature Masterclass"}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 border border-white/20 group-hover:bg-[#f2c301] group-hover:text-zinc-950 transition-all">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click for Details &amp; Benefits</span>
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="text-xs font-bold text-[#f2c301] uppercase tracking-wider block mb-1">
                      {serviceTitle} Highlight
                    </span>
                    <h3 className="text-lg sm:text-2xl font-serif font-bold text-white group-hover:text-[#f2c301] transition-colors">
                      {images[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-1 line-clamp-2 max-w-xl">
                      {images[0].subtitle}
                    </p>
                  </div>
                </div>

                {/* Supporting 2 Highlight Cards (5 Cols) */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {images.slice(1, 3).map((img, idx) => {
                    const actualIdx = idx + 1;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleOpenLightbox(actualIdx)}
                        className="relative group rounded-3xl overflow-hidden bg-zinc-950 border border-amber-100 shadow-md cursor-pointer aspect-[16/10] sm:aspect-auto sm:h-[218px] hover:border-amber-300 transition-all"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                          {img.tag && (
                            <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#f2c301] text-[10px] font-bold border border-amber-300/30">
                              {img.tag}
                            </span>
                          )}
                          <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Eye className="w-3.5 h-3.5 text-[#f2c301]" />
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                          <h4 className="text-sm font-serif font-bold text-white group-hover:text-[#f2c301] transition-colors line-clamp-1">
                            {img.title}
                          </h4>
                          <p className="text-[11px] text-zinc-300 mt-0.5 line-clamp-1">
                            {img.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Grid: Remaining Supporting Images */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {images.slice(3).map((img, idx) => {
                  const actualIdx = idx + 3;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleOpenLightbox(actualIdx)}
                      className="relative group rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-amber-100/90 shadow-sm hover:shadow-xl hover:border-amber-300 cursor-pointer aspect-[4/3] sm:aspect-[1/1] transition-all duration-300"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                      {/* Tag */}
                      {img.tag && (
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[#f2c301] text-[9px] sm:text-[10px] font-bold border border-amber-300/30">
                            {img.tag}
                          </span>
                        </div>
                      )}

                      {/* Floating Action */}
                      <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Maximize2 className="w-3 h-3 text-[#f2c301]" />
                      </div>

                      {/* Caption */}
                      <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#f2c301] transition-colors line-clamp-1">
                          {img.title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-zinc-300 mt-0.5 line-clamp-1 hidden sm:block">
                          {img.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            /* Filtered View Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((img, idx) => {
                const actualIdx = images.indexOf(img);
                return (
                  <div
                    key={idx}
                    onClick={() => handleOpenLightbox(actualIdx)}
                    className="relative group rounded-3xl overflow-hidden bg-zinc-950 border border-amber-100 shadow-md hover:shadow-xl hover:border-amber-300 cursor-pointer aspect-[16/11] transition-all duration-300"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      {img.tag && (
                        <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[#f2c301] text-[10px] font-bold border border-amber-300/30">
                          {img.tag}
                        </span>
                      )}
                      <span className="w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5 text-[#f2c301]" />
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <h4 className="text-sm sm:text-base font-serif font-bold text-white group-hover:text-[#f2c301] transition-colors line-clamp-1">
                        {img.title}
                      </h4>
                      <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                        {img.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Gallery Trust Note */}
        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Relevant {serviceTitle} Photography &amp; Technique Demos</span>
          </div>
          <p className="text-[11px] text-zinc-400">
            Click any visual to inspect technique details, training benefits &amp; tools.
          </p>
        </div>
      </div>

      {/* =========================================================================
          RICH INTERACTIVE POP-UP MODAL (LIGHTBOX WITH FAYDE / BENEFITS)
         ========================================================================= */}
      {selectedIdx !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn overflow-y-auto"
          onClick={handleCloseLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh] z-30 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Top-Right */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900/95 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:scale-105 flex items-center justify-center transition-all shadow-xl cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Left Side: High-Definition Image & Navigation */}
            <div className="lg:w-7/12 relative bg-black flex items-center justify-center min-h-[260px] sm:min-h-[380px] lg:min-h-[540px] p-2 flex-shrink-0">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-2"
                priority
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-3 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900/80 hover:bg-[#f2c301] hover:text-zinc-950 text-white border border-zinc-700 flex items-center justify-center transition-all shadow-xl cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-3 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900/80 hover:bg-[#f2c301] hover:text-zinc-950 text-white border border-zinc-700 flex items-center justify-center transition-all shadow-xl cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Image Counter Badge */}
              <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 bg-black/75 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-zinc-300 border border-zinc-800">
                Visual {selectedIdx + 1} of {images.length}
              </div>
            </div>

            {/* Right Side: Detailed Technique Breakdown & Benefits (Fayde) */}
            <div className="lg:w-5/12 p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-y-auto bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-800 space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#f2c301] text-zinc-950 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                    {currentItem.tag || serviceTitle}
                  </span>
                  {currentItem.clientDemand && (
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{currentItem.clientDemand}</span>
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-white tracking-tight">
                    {currentItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                    {currentItem.subtitle}
                  </p>
                </div>

                {/* Key Technical Specs Grid (Price, Color, Shape, Duration) */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {currentItem.priceRange && (
                    <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-amber-400/30">
                      <span className="text-[9px] sm:text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                        Estimated Salon Price
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">
                        {currentItem.priceRange}
                      </span>
                    </div>
                  )}

                  {currentItem.duration && (
                    <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                      <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                        Technique Duration
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">
                        {currentItem.duration}
                      </span>
                    </div>
                  )}

                  {currentItem.colorOrShade && (
                    <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                      <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                        Color / Tone / Pigment
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5 block line-clamp-1">
                        {currentItem.colorOrShade}
                      </span>
                    </div>
                  )}

                  {currentItem.shapeOrType && (
                    <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                      <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                        Shape / Form / Method
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5 block line-clamp-1">
                        {currentItem.shapeOrType}
                      </span>
                    </div>
                  )}
                </div>

                {/* Fayde / Key Benefits Section */}
                {currentItem.benefits && currentItem.benefits.length > 0 && (
                  <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#f2c301] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Is Technique Ke Fayde (Key Benefits):</span>
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-300 leading-relaxed">
                      {currentItem.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tools & Kit Used */}
                {currentItem.keyTools && currentItem.keyTools.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      <Wrench className="w-3 h-3 text-[#b8860b]" />
                      <span>Tools &amp; Products Taught:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentItem.keyTools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Visuals Thumbnail Strip */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#f2c301]" />
                      <span>More {serviceTitle} Techniques:</span>
                    </span>
                    <span className="text-[10px] text-zinc-500">Click to switch</span>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {images.map((img, thumbIdx) => (
                      <button
                        key={thumbIdx}
                        onClick={() => setSelectedIdx(thumbIdx)}
                        className={`relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                          selectedIdx === thumbIdx
                            ? "border-[#f2c301] scale-105 shadow-md"
                            : "border-zinc-800 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/919589871662?text=Hello%20Yashree%20Institute,%20I%20am%20interested%20in%20learning%20more%20about%20the%20${encodeURIComponent(
                    currentItem.title
                  )}%20module%20in%20the%20${encodeURIComponent(serviceTitle)}%20course.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-950 bg-[#f2c301] hover:bg-[#ffe566] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href="tel:+919589871662"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-bold text-white bg-zinc-900 border border-zinc-700 hover:border-amber-300 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f2c301]" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
