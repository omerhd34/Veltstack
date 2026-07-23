import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
import { PageHeroImage } from "./PageHeroImage";
import { cn } from "@/lib/utils";

interface PageHeroMediaProps {
  imageSrc: string;
  imageAlt: string;
  imageAlwaysVisible?: boolean;
  frameClassName?: string;
  className?: string;
}

export function PageHeroMedia({
  imageSrc,
  imageAlt,
  imageAlwaysVisible = false,
  frameClassName,
  className,
}: PageHeroMediaProps) {
  return (
    <SectionScrollReveal
      direction="right"
      when="mount"
      delay={0.14}
      className={cn("min-h-0 min-w-0", className)}
    >
      <PageHeroImage
        src={imageSrc}
        alt={imageAlt}
        frameClassName={frameClassName}
        className={cn(!imageAlwaysVisible && "hidden lg:block")}
      />
    </SectionScrollReveal>
  );
}
