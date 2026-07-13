import { getTranslations } from "next-intl/server";

interface ProcessIntroProps {
  className?: string;
}

export async function ProcessIntro({ className }: ProcessIntroProps) {
  const t = await getTranslations("home");
  const steps = t.raw("processItems") as { title: string }[];
  const lastStep = String(steps.length).padStart(2, "0");

  return (
    <div className={`mx-auto w-full max-w-3xl text-center ${className ?? ""}`}>
      <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
        {t("processBadge")}
      </span>

      <h2
        id="process-section-title"
        className="mt-6 font-(family-name:--font-heading) text-3xl font-bold leading-[1.1] tracking-tight text-white sm:mt-8 sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-[2.85rem] 2xl:text-[3rem] 2xl:leading-[1.08]"
      >
        {t("processTitleLead")}{" "}
        <span className="text-emerald-400">{t("processTitleAccent")}</span>
      </h2>

      <p className="mt-4 text-lg font-semibold leading-snug text-emerald-300/80 sm:mt-5 sm:text-xl md:text-2xl">
        {t("processSubtitle")}
      </p>

      <p className="mt-4 text-sm leading-[1.9] text-emerald-50/55 sm:mt-5 sm:text-base md:text-lg">
        {t("processIntro")}
      </p>

      <div className="mt-10 flex items-center justify-center gap-3">
        <span className="font-mono text-sm font-bold text-emerald-400/60">
          01
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-emerald-800/60" />
        <span className="rounded-full border border-emerald-700/40 bg-emerald-900/50 px-3 py-1 font-mono text-xs text-emerald-400/70">
          {lastStep} adım
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-emerald-800/60" />
        <span className="font-mono text-sm font-bold text-emerald-400/60">
          {lastStep}
        </span>
      </div>
    </div>
  );
}
