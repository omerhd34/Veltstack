"use client";

import { useState, useMemo } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";
import type { BlogPost } from "./blog-data";
import { BlogCard } from "./BlogCard";

type BlogPostWithReadingTime = BlogPost & { readingTimeLabel: string };

interface BlogGridProps {
  posts: BlogPostWithReadingTime[];
  locale: "tr" | "en";
  labels: {
    searchPlaceholder: string;
    clearSearch: string;
    allCategories: string;
    readMore: string;
    noResults: string;
    noResultsSub: string;
    categories: string[];
  };
}

export function BlogGrid({ posts, locale, labels }: BlogGridProps) {
  const [search, setSearch] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState(labels.allCategories);

  const categoryKey = locale === "tr" ? "category" : "categoryEn";
  const titleKey = locale === "tr" ? "titleTr" : "titleEn";
  const excerptKey = locale === "tr" ? "excerptTr" : "excerptEn";

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === labels.allCategories ||
        post[categoryKey] === activeCategory;

      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        post[titleKey].toLowerCase().includes(q) ||
        post[excerptKey].toLowerCase().includes(q) ||
        post[categoryKey].toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [
    posts,
    search,
    activeCategory,
    labels.allCategories,
    categoryKey,
    titleKey,
    excerptKey,
  ]);

  const uniqueCategories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p[categoryKey])));
    return [labels.allCategories, ...cats];
  }, [posts, categoryKey, labels.allCategories]);

  return (
    <div>
      <div className="sticky top-18 z-30 overflow-x-clip border-b border-border/60 bg-background/95 py-4 backdrop-blur-md">
        <SiteContainer>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <LuSearch
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder={labels.searchPlaceholder}
                className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-accent/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
              />
              {search && (
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setSearch("")}
                  className={cn(
                    "absolute right-3 top-1/2 -translate-y-1/2 transition-colors",
                    isSearchFocused
                      ? "text-brand-accent"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-label={labels.clearSearch}
                >
                  <LuX className="size-4" />
                </button>
              )}
            </div>

            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden sm:mx-0 sm:min-w-0 sm:flex-1 sm:px-0 lg:flex-none lg:flex-wrap lg:overflow-visible lg:pb-0">
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200",
                    activeCategory === cat
                      ? "bg-brand-accent text-white shadow-sm shadow-brand-accent/30"
                      : "border border-border bg-card text-muted-foreground hover:border-brand-accent/40 hover:text-foreground",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </SiteContainer>
      </div>

      <SiteContainer className="py-6 sm:py-12 md:py-20">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-muted/60">
              <LuSearch className="size-8 text-muted-foreground/50" />
            </div>
            <p className="mt-6 font-(family-name:--font-heading) text-xl font-bold text-foreground">
              {labels.noResults}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {labels.noResultsSub}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
                locale={locale}
                readMoreLabel={labels.readMore}
                readingTimeLabel={post.readingTimeLabel}
              />
            ))}
          </div>
        )}
      </SiteContainer>
    </div>
  );
}
