"use client";

import { LuHouse, LuRefreshCw } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { cn } from "@/lib/utils";
import { StatusPage } from "./StatusPage";

interface ErrorViewProps {
  reset: () => void;
}

const retryButtonClassName = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border/70 bg-white/80 px-6 text-base font-medium text-foreground backdrop-blur-sm",
  "shadow-[0_2px_12px_rgb(0_0_0/0.04)] transition-all duration-300",
  "hover:-translate-y-0.5 hover:border-brand-accent/35 hover:text-brand-accent",
);

export function ErrorView({ reset }: ErrorViewProps) {
  const t = useTranslations("status.error");

  return (
    <StatusPage
      code={t("code")}
      badge={t("badge")}
      title={t("title")}
      description={t("description")}
      actions={
        <>
          <button type="button" onClick={reset} className={retryButtonClassName}>
            <LuRefreshCw className="size-4" aria-hidden />
            {t("retryCta")}
          </button>
          <PrimaryCtaLink
            href="/"
            size="lg"
            variant="accent"
            leadingIcon={<LuHouse className="size-4" aria-hidden />}
          >
            {t("homeCta")}
          </PrimaryCtaLink>
        </>
      }
    />
  );
}
