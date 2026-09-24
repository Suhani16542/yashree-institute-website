import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Sparkles } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export default function Footer() {
  const coursesList = [
    "Non-Doctor Aesthetic Course",
    "Professional Makeup Masterclass",
    "Hair Styling (Basic to Advanced)",
    "Hair Master Class & Chemical Treatments",
    "Nail Extensions & Nail Art Class",
    "Permanent Professional Makeup (PMU)",
    "Comprehensive Skin Care & Spa Course",
  ];

  const quickLinks = [
    { name: "About Yashree Institute", href: "#about" },
    { name: "Certified Courses", href: "#courses" },
    { name: "Salon & Bridal Bookings", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Practical Training & Kits", href: "#training" },
    { name: "Awards & Gallery", href: "#gallery" },
    { name: "Campus & Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 relative">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-56 h-14">
                <Image
                  src="/images/logo.png"
                  alt="Yashree Institute Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Yashree Institute is Indore&apos;s premier Cosmetology &amp; Aesthetic Academy mentored by Celebrity Makeup Artist <strong>Deepika Patidar</strong>. We empower women and aspiring artists through 100% practical training, live model practice, and guaranteed placement support.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/yashreeinstituteindore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-[#f2c301] hover:text-zinc-950 text-zinc-300 flex items-center justify-center transition-colors border border-zinc-800"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/yashreeinstituteindore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-[#f2c301] hover:text-zinc-950 text-zinc-300 flex items-center justify-center transition-colors border border-zinc-800"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#f2c301] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses List */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Certified Courses
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/courses/skin" className="hover:text-[#f2c301] transition-colors">
                  Skin Care &amp; Clinical Aesthetics
                </Link>
              </li>
              <li>
                <Link href="/courses/professional-makeup" className="hover:text-[#f2c301] transition-colors">
                  Professional Makeup Masterclass
                </Link>
              </li>
              <li>
                <Link href="/courses/hair-chemical" className="hover:text-[#f2c301] transition-colors">
                  Hair Chemical &amp; Color Science
                </Link>
              </li>
              <li>
                <Link href="/courses/hair-styling" className="hover:text-[#f2c301] transition-colors">
                  Hair Styling (Basic to Advanced)
                </Link>
              </li>
              <li>
                <Link href="/courses/hydra-facial" className="hover:text-[#f2c301] transition-colors">
                  Hydra Facial &amp; Medi-Facials
                </Link>
              </li>
              <li>
                <Link href="/courses/semi-permanent-makeup" className="hover:text-[#f2c301] transition-colors">
                  Semi-Permanent Makeup (SPMU)
                </Link>
              </li>
              <li>
                <Link href="/courses/microblading" className="hover:text-[#f2c301] transition-colors">
                  Eyebrow Microblading
                </Link>
              </li>
              <li>
                <Link href="/courses/nail-extensions" className="hover:text-[#f2c301] transition-colors">
                  Nail Extensions &amp; Sculpting
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/#courses" className="text-xs font-bold text-[#f2c301] hover:underline">
                  View All 18 Academy Courses &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Indore Campus
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f2c301] flex-shrink-0 mt-0.5" />
                <span className="leading-snug text-zinc-300">
                  Ek 49, Sch no. 54, Near Meghdoot Garden, Front Of KK Science Collage, Indore (M.P.)
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#f2c301] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-zinc-300">
                  <a href="tel:+919589871662" className="hover:text-[#f2c301]">
                    +91 95898 71662
                  </a>
                  <a href="tel:+919244095594" className="hover:text-[#f2c301]">
                    +91 92440 95594
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-amber-300">
                  <Sparkles className="w-3 h-3" /> Online &amp; Offline Batches
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 bg-black/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Yashree Institute of Cosmetology &amp; Aesthetic Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Mentored by Deepika Patidar</span>
            <span>•</span>
            <span>Indore, Madhya Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
