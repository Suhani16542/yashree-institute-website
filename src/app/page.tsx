import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStats from "@/components/TrustStats";
import EventsSection from "@/components/EventsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection";
import PracticalExperience from "@/components/PracticalExperience";
import EnrollmentJourney from "@/components/EnrollmentJourney";
import ServicesSection from "@/components/ServicesSection";
import GalleryShowcase from "@/components/GalleryShowcase";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-[#f2c301]/30">
      <Navbar />
      <main className="flex-1">
        {/* Approved Hero Section — Untouched & Preserved */}
        <HeroSection />

        {/* 1. Intro & Trust Positioning */}
        <TrustStats />

        {/* 2. Upcoming Academy Events, Seminars & Masterclasses */}
        <EventsSection />

        {/* 3. Why Choose Yashree Academy */}
        <WhyChooseUs />

        {/* 3. Flagship Masterclass & Courses Explorer */}
        <CoursesSection />

        {/* 4. Practical Hands-on Training & Starter Kits */}
        <PracticalExperience />

        {/* 6. 4-Step Student Career Roadmap */}
        <EnrollmentJourney />

        {/* 7. Salon & Bridal Transformation Services */}
        <ServicesSection />

        {/* 8. Asymmetrical Editorial Gallery */}
        <GalleryShowcase />

        {/* 14. Frequently Asked Questions */}
        <FaqSection />
      </main>
      {/* 16. Luxury Footer */}
      <Footer />
    </div>
  );
}
