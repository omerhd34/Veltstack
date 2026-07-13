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
    <div
      className={`flex w-full flex-col gap-3 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:gap-4 ${className ?? ""}`}
    >
      <PrimaryCtaLink
        href="/iletisim"
        variant="accent"
        size="md"
        showArrow={false}
        wrapperClassName="w-full min-[480px]:w-auto"
        className="w-full justify-center min-[480px]:w-auto"
        leadingIcon={<LuRocket className="size-5" aria-hidden />}
      >
        {primary}
      </PrimaryCtaLink>
      <PrimaryCtaLink
        href="/projeler#projects-showcase"
        variant="glass"
        size="md"
        showArrow={false}
        wrapperClassName="w-full min-[480px]:w-auto"
        className="w-full justify-center min-[480px]:w-auto"
        leadingIcon={<LuEye className="size-5" aria-hidden />}
      >
        {secondary}
      </PrimaryCtaLink>
    </div>
  );
}
