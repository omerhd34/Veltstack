import { LuClock } from "react-icons/lu";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";

interface WorkflowFullProcessLinkProps {
  label: string;
}

export function WorkflowFullProcessLink({ label }: WorkflowFullProcessLinkProps) {
  return (
    <PrimaryCtaLink
      href="/#approach"
      showArrow={false}
      leadingIcon={<LuClock className="size-5" aria-hidden />}
    >
      {label}
    </PrimaryCtaLink>
  );
}
