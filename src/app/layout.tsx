import type { Metadata, Viewport } from "next";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yashreeinstitute.com"),
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-zinc-900 selection:bg-[#F2C301]/30 selection:text-zinc-900">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}


