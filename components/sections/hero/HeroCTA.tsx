"use client";

import { LuEye, LuRocket } from "react-icons/lu";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";

interface HeroCTAProps {
  primary: string;
  secondary: string;
  className?: string;
}

export function HeroCTA({ primary, secondary, className }: HeroCTAProps) {
  return (
    <div className={`flex flex-wrap justify-start gap-4 ${className ?? ""}`}>
      <PrimaryCtaLink
        href="/iletisim"
        variant="accent"
        size="md"
        showArrow={false}
        leadingIcon={<LuRocket className="size-5" aria-hidden />}
      >
        {primary}
      </PrimaryCtaLink>
      <PrimaryCtaLink
        href="/projelerimiz"
        variant="glass"
        size="md"
        showArrow={false}
        leadingIcon={<LuEye className="size-5" aria-hidden />}
      >
        {secondary}
      </PrimaryCtaLink>
    </div>
  );
}
