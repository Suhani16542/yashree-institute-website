import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COURSES_LIST, getCourseBySlug } from "@/data/coursesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseDetailView from "@/components/courses/CourseDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return COURSES_LIST.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Yashree Institute",
    };
  }

  const pageUrl = `https://yashreeinstitute.com/courses/${course.slug}`;

  return {
    title: course.metaTitle,
    description: course.metaDescription,
    keywords: course.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      url: pageUrl,
      siteName: "Yashree Institute of Cosmetology & Aesthetic Academy",
      type: "article",
      images: [
        {
          url: course.heroImage,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.metaTitle,
      description: course.metaDescription,
      images: [course.heroImage],
    },
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // JSON-LD Course Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.metaDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: "Yashree Institute of Cosmetology & Aesthetic Academy",
      sameAs: "https://yashreeinstitute.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Meghdoot Garden, Vijay Nagar",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452010",
        addressCountry: "IN",
      },
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      courseWorkload: "100% Hands-on Practical Training",
      location: "Yashree Institute Campus Indore",
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-[#f2c301]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <CourseDetailView course={course} />
      </main>
      <Footer />
    </div>
  );
}
