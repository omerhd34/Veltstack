import { getTranslations } from "next-intl/server";
import { LuClock } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { cn } from "@/lib/utils";
import { ApproachScrollTimeline } from "./ApproachScrollTimeline";
import type { ApproachTimelineStep } from "./ApproachScrollTimeline";

interface ApproachSectionProps {
  className?: string;
}

export async function ApproachSection({ className }: ApproachSectionProps) {
  const t = await getTranslations("approach");
  const steps = t.raw("steps") as ApproachTimelineStep[];

  return (
    <section
      id="approach"
      className={cn(
        "relative scroll-mt-16 overflow-hidden bg-[#E4F0EA] py-24 md:py-32",
        className,
      )}
      aria-labelledby="approach-section-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_100%_0%,rgb(58_107_82/0.11),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_0%_100%,rgb(58_107_82/0.09),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 size-80 rounded-full bg-brand-accent/6 blur-3xl"
      />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge variant="accent" className="justify-self-center">
            <LuClock className="size-3.5 shrink-0" aria-hidden />
            {t("badge")}
          </SectionBadge>

          <h2
            id="approach-section-title"
            className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-[#0A0A0F] md:text-4xl lg:text-5xl"
          >
            {t("titleLead")}
            <br />
            <span className="font-serif font-normal italic text-brand-accent">
              {t("titleAccent")}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/62 md:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <ApproachScrollTimeline
          steps={steps}
          className="mt-10 md:mt-14"
        />
      </SiteContainer>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-accent/20 to-transparent"
      />
    </section>
  );
}
