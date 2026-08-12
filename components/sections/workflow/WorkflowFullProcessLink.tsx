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
    <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
      <PrimaryCtaLink
        href={`/hizmetler${pageAnchorHref("approach")}`}
        showArrow={false}
        size="md"
        wrapperClassName="w-full sm:w-auto"
        className="h-11 w-full justify-center px-5 text-sm sm:h-12 sm:w-auto sm:px-8 sm:text-base"
        leadingIcon={<LuClock className="size-4 sm:size-5" aria-hidden />}
      >
        {label}
      </PrimaryCtaLink>
      <PrimaryCtaLink
        href="/iletisim"
        variant="accent"
        showArrow={false}
        size="md"
        wrapperClassName="w-full sm:w-auto"
        className="h-11 w-full justify-center px-5 text-sm sm:h-12 sm:w-auto sm:px-8 sm:text-base"
        leadingIcon={
          <LuMessageCircle className="size-4 sm:size-5" aria-hidden />
        }
      >
        {contactLabel}
      </PrimaryCtaLink>
    </div>
  );
}
