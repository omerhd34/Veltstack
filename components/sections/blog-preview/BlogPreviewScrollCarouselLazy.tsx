"use client";

import dynamic from "next/dynamic";
import { DeferredMount } from "@/components/ui/DeferredMount";
import type { BlogPreviewScrollItem } from "./BlogPreviewScrollCarousel";

const BlogPreviewScrollCarousel = dynamic(
  () =>
    import("./BlogPreviewScrollCarousel").then((mod) => ({
      default: mod.BlogPreviewScrollCarousel,
    })),
  { ssr: false },
);

interface BlogPreviewScrollCarouselLazyProps {
  posts: BlogPreviewScrollItem[];
  className?: string;
}

export function BlogPreviewScrollCarouselLazy({
  posts,
  className,
}: BlogPreviewScrollCarouselLazyProps) {
  return (
    <DeferredMount
      className={className}
      fallback={
        <div className="min-h-88 rounded-2xl bg-white/5" aria-hidden />
      }
    >
      <BlogPreviewScrollCarousel posts={posts} />
    </DeferredMount>
  );
}
