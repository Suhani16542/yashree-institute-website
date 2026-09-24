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
  ArrowRight,
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

  // Display all 6 curated masterclass images
  const showcaseImages = images.slice(0, 6);

  const handleOpenLightbox = (index: number) => {
    setSelectedIdx(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIdx(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! > 0 ? prev! - 1 : showcaseImages.length - 1));
  }, [selectedIdx, showcaseImages.length]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! < showcaseImages.length - 1 ? prev! + 1 : 0));
  }, [selectedIdx, showcaseImages.length]);

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

  const currentItem = selectedIdx !== null ? showcaseImages[selectedIdx] : null;

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-white border-b border-zinc-100 overflow-hidden relative">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f2c301]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b8860b] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Camera className="w-3.5 h-3.5" />
            <span>6-Stage Visual Masterclass</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 6-Image Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {showcaseImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-white border-2 border-amber-200/90 hover:border-[#b8860b] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Step / Stage Badge */}
                <div className="absolute top-3.5 left-3.5 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-300/60 text-[11px] font-bold text-[#f2c301] shadow-md">
                  {img.tag || `Stage 0${idx + 1}`}
                </div>

                {/* Click Zoom Button Indicator */}
                <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#f2c301]" />
                </div>

                {/* Demand pill at bottom of image */}
                {img.clientDemand && (
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold text-zinc-200 border border-white/20">
                    {img.clientDemand}
                  </div>
                )}
              </div>

              {/* Text Card Content */}
              <div className="p-5 sm:p-6 bg-white space-y-2 border-t border-amber-100 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-zinc-950 group-hover:text-[#b8860b] transition-colors leading-snug">
                    {img.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-1 line-clamp-2">
                    {img.subtitle}
                  </p>

                  {/* Highlights/Benefits Bullet List */}
                  {img.benefits && img.benefits.length > 0 && (
                    <div className="mt-3 space-y-1 pt-2 border-t border-zinc-100">
                      {img.benefits.slice(0, 2).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1.5 text-xs text-zinc-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-[#b8860b]">
                  <span className="flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View High-Res Masterclass</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL
         ========================================================================= */}
      {currentItem && selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in-0 duration-200"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] w-full rounded-3xl overflow-hidden border-2 border-amber-300 shadow-2xl bg-zinc-950 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={handleCloseLightbox}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#f2c301] hover:text-zinc-950 text-white p-2.5 rounded-full transition-colors backdrop-blur-md cursor-pointer border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            {showcaseImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#f2c301] hover:text-zinc-950 text-white p-2.5 rounded-full transition-colors backdrop-blur-md cursor-pointer border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#f2c301] hover:text-zinc-950 text-white p-2.5 rounded-full transition-colors backdrop-blur-md cursor-pointer border border-white/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Main Image Display */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Info Overlay Footer */}
            <div className="p-5 sm:p-6 bg-zinc-950 text-white border-t border-zinc-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold text-[#f2c301] uppercase tracking-wider block">
                    {currentItem.tag || "Signature Technique"} &bull; Stage 0{selectedIdx + 1} of 0{showcaseImages.length}
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                    {currentItem.title}
                  </h4>
                </div>

                {currentItem.priceRange && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-[#f2c301] text-xs font-bold border border-amber-400/30 self-start sm:self-auto">
                    {currentItem.priceRange}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
                {currentItem.subtitle}
              </p>

              {/* Tools & Key Benefits in Modal */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
                {currentItem.keyTools && currentItem.keyTools.map((tool, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-[11px] flex items-center gap-1.5 font-medium">
                    <Wrench className="w-3 h-3 text-[#f2c301]" />
                    <span>{tool}</span>
                  </span>
                ))}
                {currentItem.benefits && currentItem.benefits.map((b, bIdx) => (
                  <span key={bIdx} className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-[11px] flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{b}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
