import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStats from "@/components/TrustStats";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection";
import CosmetologySection from "@/components/CosmetologySection";
import MakeupMasterySection from "@/components/MakeupMasterySection";
import HairArtistrySection from "@/components/HairArtistrySection";
import NailStudioSection from "@/components/NailStudioSection";
import PracticalExperience from "@/components/PracticalExperience";
import EnrollmentJourney from "@/components/EnrollmentJourney";
import ServicesSection from "@/components/ServicesSection";
import StudentConvocation from "@/components/StudentConvocation";
import GalleryShowcase from "@/components/GalleryShowcase";
import FaqSection from "@/components/FaqSection";
import ConsultationCTA from "@/components/ConsultationCTA";
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

        {/* 2. Editorial About Yashree & Deepika Patidar */}
        <AboutSection />

        {/* 3. Why Choose Yashree Academy */}
        <WhyChooseUs />

        {/* 4. Flagship Masterclass & Courses Explorer */}
        <CoursesSection />

        {/* 5. Dedicated Cosmetology & Aesthetic Science */}
        <CosmetologySection />

        {/* 6. Dedicated Professional Makeup Training */}
        <MakeupMasterySection />

        {/* 7. Dedicated Hair Science & Chemical Treatments */}
        <HairArtistrySection />

        {/* 8. Dedicated Nail Extensions & Studio Art */}
        <NailStudioSection />

        {/* 9. Practical Hands-on Training & Starter Kits */}
        <PracticalExperience />

        {/* 10. 4-Step Student Career Roadmap */}
        <EnrollmentJourney />

        {/* 11. Salon & Bridal Transformation Services */}
        <ServicesSection />

        {/* 12. Student Convocation & Placement Guarantee */}
        <StudentConvocation />

        {/* 13. Asymmetrical Editorial Gallery */}
        <GalleryShowcase />

        {/* 14. Frequently Asked Questions */}
        <FaqSection />

        {/* 15. Final Consultation & Campus Admission Desk */}
        <ConsultationCTA />
      </main>
      {/* 16. Luxury Footer */}
      <Footer />
    </div>
  );
}
