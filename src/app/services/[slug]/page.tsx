import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  SERVICES_DATA,
  getServiceBySlug,
} from "@/data/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dedicated Service Views
import AestheticServiceView from "@/components/services/AestheticServiceView";
import MakeupServiceView from "@/components/services/MakeupServiceView";
import HairStylingServiceView from "@/components/services/HairStylingServiceView";
import HairMasterclassServiceView from "@/components/services/HairMasterclassServiceView";
import NailServiceView from "@/components/services/NailServiceView";
import PmuServiceView from "@/components/services/PmuServiceView";
import SkincareServiceView from "@/components/services/SkincareServiceView";
import CosmetologyServiceView from "@/components/services/CosmetologyServiceView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Yashree Institute",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://yashreeinstitute.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://yashreeinstitute.com/services/${service.slug}`,
      siteName: "Yashree Institute of Cosmetology & Aesthetic Academy",
      type: "article",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const renderServiceView = () => {
    switch (service.slug) {
      case "aesthetic":
        return <AestheticServiceView service={service} />;
      case "makeup":
        return <MakeupServiceView service={service} />;
      case "hair-styling":
        return <HairStylingServiceView service={service} />;
      case "hair-masterclass":
        return <HairMasterclassServiceView service={service} />;
      case "nail-extension":
        return <NailServiceView service={service} />;
      case "pmu":
        return <PmuServiceView service={service} />;
      case "skincare":
        return <SkincareServiceView service={service} />;
      case "cosmetology":
        return <CosmetologyServiceView service={service} />;
      default:
        return <NailServiceView service={service} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-[#f2c301]/30">
      <Navbar />
      <main className="flex-1">
        {renderServiceView()}
      </main>
      <Footer />
    </div>
  );
}
