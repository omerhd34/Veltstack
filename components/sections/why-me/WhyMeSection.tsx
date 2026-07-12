import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionScrollReveal } from "@/components/ui/SectionScrollReveal";
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
        <SectionScrollReveal direction="up">
          <div className="mx-auto max-w-4xl text-center">
            <WhyMeIntro />
          </div>
        </SectionScrollReveal>
        <SectionScrollReveal direction="right" delay={0.14} trigger="wide">
          <WhyMeGrid className="mt-14" />
        </SectionScrollReveal>
      </SiteContainer>
    </section>
  );
}
