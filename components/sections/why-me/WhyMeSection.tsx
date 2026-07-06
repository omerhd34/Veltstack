import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";
import { WhyMeGrid } from "./WhyMeGrid";
import { WhyMeIntro } from "./WhyMeIntro";

interface WhyMeSectionProps {
  className?: string;
}

export function WhyMeSection({ className }: WhyMeSectionProps) {
  return (
    <section
      className={cn("bg-background py-20 md:py-28", className)}
      aria-labelledby="why-me-section-title"
    >
      <SiteContainer>
        <div className="mx-auto max-w-4xl text-center">
          <WhyMeIntro />
        </div>
        <WhyMeGrid className="mt-14" />
      </SiteContainer>
    </section>
  );
}
