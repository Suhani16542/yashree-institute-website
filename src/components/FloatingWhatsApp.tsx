"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/919589871662?text=Hi%20Yashree%20Institute,%20I%20would%20like%20to%20enquire%20about%20your%20courses.";

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Yashree Institute on WhatsApp"
        className="fixed bottom-16 sm:bottom-5 right-4 sm:right-5 z-40 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* WhatsApp Icon */}
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-current text-white" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </span>

        {/* Text Label on desktop/tablet hover or default */}
        <span className="hidden sm:inline font-semibold text-xs tracking-wide pr-1">
          Chat with Us
        </span>
      </a>
    </aside>
  );
}
