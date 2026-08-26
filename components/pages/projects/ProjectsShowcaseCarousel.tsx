"use client";

import {
  ScrollCarousel,
  type FeatureItem,
} from "@/components/lightswind/scroll-carousel";
import {
  projectItems,
  type ProjectSlug,
} from "@/components/sections/projects/project-items";
import { ProjectShowcaseCard } from "./ProjectShowcaseCard";

export interface ProjectShowcaseSlide {
  slug: ProjectSlug;
  href?: string;
  title: string;
  description: string;
  imageUrl?: string;
  coverGradient: string;
  showFeaturedBadge: boolean;
  index: number;
}

interface ProjectsShowcaseCarouselProps {
  projects: ProjectShowcaseSlide[];
  featuredLabel: string;
  navLabels: {
    prev: string;
    next: string;
  };
  className?: string;
}

export function ProjectsShowcaseCarousel({
  projects,
  featuredLabel,
  navLabels,
  className,
}: ProjectsShowcaseCarouselProps) {
  const projectBySlug = Object.fromEntries(
    projectItems.map((project) => [project.slug, project]),
  );
  const slideBySlug = Object.fromEntries(
    projects.map((project) => [project.slug, project]),
  );

  const features: FeatureItem[] = projects.map((project) => ({
    id: project.slug,
    title: project.title,
    description: project.description,
    image: project.imageUrl,
    href: project.href,
    coverGradient: project.coverGradient,
    index: project.index,
  }));

  return (
    <ScrollCarousel
      className={className}
      features={features}
      alignStart
      columnsPerView={3}
      cardClassName="h-auto self-start"
      loop
      navLabels={navLabels}
      containerClassName="pb-0 md:pb-6"
      navPlacement="bottom"
      progressStyle="pagination"
      paginationTheme="light"
      navButtonTone="light"
      renderFeature={(feature) => {
        const slug = feature.id as ProjectSlug;
        const slide = slideBySlug[slug];
        const project = projectBySlug[slug];
        if (!slide || !project) return null;

        return (
          <ProjectShowcaseCard
            index={slide.index}
            href={slide.href}
            title={slide.title}
            description={slide.description}
            icon={project.icon}
            imageUrl={slide.imageUrl}
            coverGradient={slide.coverGradient}
            featuredLabel={featuredLabel}
            showFeaturedBadge={slide.showFeaturedBadge}
          />
        );
      }}
    />
  );
}
