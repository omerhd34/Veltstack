import { LuClock, LuMessageCircle } from "react-icons/lu";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";
import { pageAnchorHref } from "@/lib/page-anchors";

interface WorkflowFullProcessLinkProps {
  label: string;
  contactLabel: string;
}

export function WorkflowFullProcessLink({
  label,
  contactLabel,
}: WorkflowFullProcessLinkProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      <PrimaryCtaLink
        href={`/hizmetler${pageAnchorHref("approach")}`}
        showArrow={false}
        leadingIcon={<LuClock className="size-5" aria-hidden />}
      >
        {label}
      </PrimaryCtaLink>
      <PrimaryCtaLink
        href="/iletisim"
        variant="accent"
        showArrow={false}
        leadingIcon={<LuMessageCircle className="size-5" aria-hidden />}
      >
        {contactLabel}
      </PrimaryCtaLink>
    </div>
  );
}
