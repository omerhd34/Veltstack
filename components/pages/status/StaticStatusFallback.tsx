import Link from "next/link";
import { LuArrowUpRight, LuHouse, LuMessageCircle, LuRefreshCw } from "react-icons/lu";
import { statusTr } from "@/messages/pages/status/tr";
import { cn } from "@/lib/utils";
import { StatusPage } from "./StatusPage";

const secondaryClassName = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border/70 bg-white/80 px-6 text-base font-medium text-foreground backdrop-blur-sm",
  "shadow-[0_2px_12px_rgb(0_0_0/0.04)] transition-all duration-300",
  "hover:-translate-y-0.5 hover:border-brand-accent/35 hover:text-brand-accent",
);

const primaryClassName = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-accent px-8 text-base font-semibold text-white",
  "shadow-[0_8px_24px_rgb(58_107_82/0.24)] transition-all duration-300",
  "hover:-translate-y-0.5 hover:bg-brand-accent/92 hover:shadow-[0_12px_32px_rgb(58_107_82/0.3)]",
);

export function StaticNotFoundFallback() {
  const t = statusTr.notFound;

  return (
    <StatusPage
      code={t.code}
      badge={t.badge}
      title={t.title}
      description={t.description}
      actions={
        <>
          <Link href="/" className={primaryClassName}>
            <LuHouse className="size-4" aria-hidden />
            {t.homeCta}
            <LuArrowUpRight className="size-4" aria-hidden />
          </Link>
          <Link href="/iletisim" className={secondaryClassName}>
            <LuMessageCircle className="size-4" aria-hidden />
            {t.contactCta}
          </Link>
        </>
      }
    />
  );
}

interface StaticErrorFallbackProps {
  reset?: () => void;
}

export function StaticErrorFallback({ reset }: StaticErrorFallbackProps) {
  const t = statusTr.error;

  return (
    <StatusPage
      code={t.code}
      badge={t.badge}
      title={t.title}
      description={t.description}
      actions={
        <>
          {reset ? (
            <button type="button" onClick={reset} className={secondaryClassName}>
              <LuRefreshCw className="size-4" aria-hidden />
              {t.retryCta}
            </button>
          ) : null}
          <Link href="/" className={primaryClassName}>
            <LuHouse className="size-4" aria-hidden />
            {t.homeCta}
            <LuArrowUpRight className="size-4" aria-hidden />
          </Link>
        </>
      }
    />
  );
}
