"use client";

import { LuCircleCheck } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { cn, truncateToSentences } from "@/lib/utils";
import { ServiceFeatureCard } from "./ServiceFeatureCard";
import { ServiceFeaturesCarousel } from "./ServiceFeaturesCarousel";

interface ServiceFeaturesCarouselLabels {
  prev: string;
  next: string;
}

interface ServiceFeaturesProps {
  badge: string;
  title: string;
  subtitle: string;
  detailLabel: string;
  carouselLabels: ServiceFeaturesCarouselLabels;
  features: { title: string; description: string }[];
  className?: string;
}

export function ServiceFeatures({
  badge,
  title,
  subtitle,
  detailLabel,
  carouselLabels,
  features,
  className,
}: ServiceFeaturesProps) {
  return (
    <section
      id="service-features"
      className={cn(
        "relative scroll-mt-20 bg-[#FAFBFA] py-24 md:py-32",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgb(58_107_82/0.06),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(58 107 82 / 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <SiteContainer className="relative px-4 sm:px-6">
        <header>
          <SectionBadge variant="accent-card">
            <LuCircleCheck className="size-3.5" aria-hidden />
            {badge}
          </SectionBadge>

          <h2 className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl lg:text-[2.625rem] lg:leading-[1.12]">
            {title}
          </h2>
          <p className="mt-5 max-w-7xl text-base leading-[1.85] text-muted-foreground">
            {subtitle}
          </p>
        </header>

        <ServiceFeaturesCarousel
          className="mt-10 hidden lg:block"
          features={features}
          detailLabel={detailLabel}
          labels={carouselLabels}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          {features.map((feature, index) => (
            <ServiceFeatureCard
              key={feature.title}
              title={feature.title}
              description={truncateToSentences(feature.description, 2)}
              index={index}
              detailLabel={detailLabel}
            />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
