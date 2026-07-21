import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { whyMeItems } from "./why-me-items";
import { WhyMeGridCard } from "./WhyMeGridCard";

interface WhyMeGridProps {
  className?: string;
}

export async function WhyMeGrid({ className }: WhyMeGridProps) {
  const t = await getTranslations("home");

  return (
    <div className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {whyMeItems.map((item, index) => (
        <WhyMeGridCard
          key={item.titleKey}
          title={t(item.titleKey)}
          description={t(item.descKey)}
          iconKey={item.iconKey}
          index={index}
        />
      ))}
    </div>
  );
}
