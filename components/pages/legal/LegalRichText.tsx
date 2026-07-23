import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

const TOKEN_RE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
const BOLD_RE = /^\*\*([^*]+)\*\*$/;
const LINK_RE = /^\[([^\]]+)\]\(([^)]+)\)$/;

export function LegalRichText({ text }: { text: string }): ReactNode {
  const parts = text.split(TOKEN_RE);

  return parts.map((part, index) => {
    const bold = part.match(BOLD_RE);
    if (bold) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {bold[1]}
        </strong>
      );
    }

    const link = part.match(LINK_RE);
    if (link) {
      const [, label, href] = link;
      const className =
        "font-medium text-foreground underline decoration-brand-accent/40 underline-offset-[3px] transition-colors hover:decoration-brand-accent";

      return (
        <Link
          key={index}
          href={href}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={className}
        >
          {label}
        </Link>
      );
    }

    return part;
  });
}
