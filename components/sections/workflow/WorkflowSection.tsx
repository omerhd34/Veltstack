import { getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { cn } from "@/lib/utils";
import { WorkflowFullProcessLink } from "./WorkflowFullProcessLink";
import { WorkflowTimeline, type WorkflowStep } from "./WorkflowTimeline";

interface WorkflowSectionProps {
  className?: string;
  contentOnly?: boolean;
}

export async function WorkflowSection({
  className,
  contentOnly = false,
}: WorkflowSectionProps) {
  const t = await getTranslations("workflow");
  const steps = t.raw("steps") as WorkflowStep[];

  const timeline = (
    <WorkflowTimeline
      badge={t("badge")}
      titleLead={t("titleLead")}
      titleAccent={t("titleAccent")}
      subtitle={t("subtitle")}
      steps={steps}
    />
  );

  if (contentOnly) {
    return (
      <div className={className}>
        {timeline}
        <div className="mt-10 flex justify-center md:mt-12">
          <WorkflowFullProcessLink
            label={t("fullProcess")}
            contactLabel={t("contactCta")}
          />
        </div>
      </div>
    );
  }

  return (
    <section
      className={cn("py-20 md:py-28", className)}
      aria-labelledby="workflow-section-title"
    >
      <SiteContainer>
        <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-[0_2px_16px_rgb(0_0_0/0.04)] md:p-12">
          {timeline}
          <div className="mt-10 flex justify-center md:mt-12">
            <WorkflowFullProcessLink
              label={t("fullProcess")}
              contactLabel={t("contactCta")}
            />
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
