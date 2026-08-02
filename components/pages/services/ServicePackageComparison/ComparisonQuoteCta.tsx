import { LuMessageCircle } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { StardustShell } from "@/components/lightswind/stardust-button";
import {
  stardustContent,
  stardustFace,
  stardustFocus,
  stardustIcon,
} from "@/components/ui/interactive-hover";
import { cn } from "@/lib/utils";

export function ComparisonQuoteCta({ label }: { label: string }) {
  return (
    <div className="flex justify-center border-t border-emerald-900/40 p-5 sm:p-6">
      <StardustShell
        className="w-full max-w-md"
        faceClassName="bg-brand-accent/88"
      >
        <Link
          href="/iletisim"
          className={cn(
            stardustFace,
            stardustFocus,
            "h-12 w-full bg-transparent text-sm font-semibold text-white",
          )}
        >
          <span className={cn(stardustContent, "gap-2")}>
            <span className={stardustIcon}>
              <LuMessageCircle className="size-4" aria-hidden />
            </span>
            {label}
          </span>
        </Link>
      </StardustShell>
    </div>
  );
}
