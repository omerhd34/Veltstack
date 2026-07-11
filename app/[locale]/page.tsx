import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ServicesMarqueeSection } from "@/components/sections/services-marquee";
import { WhoWeAreSection } from "@/components/sections/who-we-are";
import { WhyMeSection } from "@/components/sections/why-me";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BlogPreviewSection } from "@/components/sections/blog-preview";
import { ApproachSection } from "@/components/sections/approach";
import { ServicesConsultationCTA } from "@/components/pages/services/ServicesConsultationCTA";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export const revalidate = 3600;

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ServicesMarqueeSection />
      <WhoWeAreSection />
      <ServicesSection />
      <WhyMeSection />
      <ApproachSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <ServicesConsultationCTA />
    </>
  );
}
