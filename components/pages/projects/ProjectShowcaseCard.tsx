import type { IconType } from "react-icons";
import Image from "next/image";
import { SoftPrefetchLink } from "@/components/ui/SoftPrefetchLink";
import { cn, isExternalHref } from "@/lib/utils";

interface ProjectShowcaseCardProps {
  index: number;
  title: string;
  description: string;
  href: string;
  icon: IconType;
  imageUrl?: string;
  coverGradient: string;
  featuredLabel?: string;
  showFeaturedBadge?: boolean;
  className?: string;
}

export function ProjectShowcaseCard({
  index,
  title,
  description,
  href,
  icon: Icon,
  imageUrl,
  coverGradient,
  featuredLabel,
  showFeaturedBadge = false,
  className,
}: ProjectShowcaseCardProps) {
  const cardClassName = cn(
    "group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_2px_12px_rgb(0_0_0/0.04)] transition-all duration-300 hover:border-brand-accent/35 hover:shadow-[0_24px_56px_rgb(58_107_82/0.14)]",
    className,
  );

  const content = (
    <>
      <div
        className={cn(
          "relative aspect-21/10 overflow-hidden bg-muted",
          !imageUrl && cn("bg-linear-to-br", coverGradient),
        )}
      >
        {!imageUrl ? (
          <>
            <div
              aria-hidden
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="flex h-full min-h-48 items-center justify-center">
              <Icon
                className="size-16 text-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:text-white/35"
                strokeWidth={1.25}
                aria-hidden
              />
            </div>
          </>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {showFeaturedBadge && featuredLabel ? (
          <span className="absolute right-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-[0.6875rem] font-semibold text-white">
            {featuredLabel}
          </span>
        ) : null}

        <span
          aria-hidden
          className="pointer-events-none absolute bottom-3 right-4 font-(family-name:--font-heading) text-6xl font-bold leading-none text-white/10 transition-colors duration-300 group-hover:text-white/15"
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col justify-center p-5 sm:p-6" data-nosnippet>
        <h3 className="font-(family-name:--font-heading) text-xl font-bold leading-tight tracking-tight transition-colors group-hover:text-brand-accent">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-foreground/60">
          {description}
        </p>
      </div>
    </>
  );

  return (
    <SoftPrefetchLink
      href={href}
      {...(isExternalHref(href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cardClassName}
    >
      {content}
    </SoftPrefetchLink>
  );
}
