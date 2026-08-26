"use client";

import dynamic from "next/dynamic";
import { DeferredMount } from "@/components/ui/DeferredMount";
import type { ProjectShowcaseSlide } from "./ProjectsShowcaseCarousel";

const ProjectsShowcaseCarousel = dynamic(
  () =>
    import("./ProjectsShowcaseCarousel").then((mod) => ({
      default: mod.ProjectsShowcaseCarousel,
    })),
  { ssr: false },
);

interface ProjectsShowcaseCarouselLazyProps {
  projects: ProjectShowcaseSlide[];
  featuredLabel: string;
  navLabels: {
    prev: string;
    next: string;
  };
  className?: string;
}

export function ProjectsShowcaseCarouselLazy({
  projects,
  featuredLabel,
  navLabels,
  className,
}: ProjectsShowcaseCarouselLazyProps) {
  return (
    <DeferredMount
      className={className}
      fallback={
        <div className="min-h-88 rounded-3xl bg-black/4" aria-hidden />
      }
    >
      <ProjectsShowcaseCarousel
        projects={projects}
        featuredLabel={featuredLabel}
        navLabels={navLabels}
      />
    </DeferredMount>
  );
}
