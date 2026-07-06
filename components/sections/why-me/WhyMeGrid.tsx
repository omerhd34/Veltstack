import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { whyMeItems } from "./why-me-items";

interface WhyMeGridProps {
  className?: string;
}

export async function WhyMeGrid({ className }: WhyMeGridProps) {
  const t = await getTranslations("home");

  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {whyMeItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <article
            key={item.titleKey}
            className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-[0_16px_40px_rgb(58_107_82/0.08)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-brand-accent/5 transition-transform duration-500 group-hover:scale-150"
            />

            <div className="relative flex size-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
              <Icon className="size-5" strokeWidth={1.75} aria-hidden />
            </div>

            <h3 className="relative mt-5 font-(family-name:--font-heading) text-lg font-bold tracking-tight">
              {t(item.titleKey)}
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
              {t(item.descKey)}
            </p>

            <span
              aria-hidden
              className="absolute bottom-4 right-5 font-(family-name:--font-heading) text-4xl font-bold text-brand-accent/8"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </article>
        );
      })}
    </div>
  );
}
