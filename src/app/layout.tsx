import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Yashree Institute | Cosmetology & Aesthetic Academy Indore",
  description:
    "Yashree Institute is Indore's premier Cosmetology, Aesthetic & Beauty Academy mentored by Celebrity Makeup Artist Deepika Patidar. 100% practical training, certified courses, and live model practice.",
  keywords: [
    "Yashree Institute",
    "Cosmetology Academy Indore",
    "Aesthetic Academy Indore",
    "Deepika Patidar Makeup Artist",
    "Makeup Course Indore",
    "Permanent Makeup PMU Course",
    "Hair Styling Academy",
    "Skin Care Course Indore",
    "Non-Doctor Aesthetic Course",
  ],
  authors: [{ name: "Deepika Patidar - Yashree Institute" }],
  openGraph: {
    title: "Yashree Institute | Cosmetology & Aesthetic Academy Indore",
    description:
      "Transforming passionate learners into certified beauty experts with 100% practical exposure, live model practice, and international certifications in Indore.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${playfair.variable} font-sans antialiased bg-white text-zinc-900 selection:bg-[#F2C301]/30 selection:text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}


