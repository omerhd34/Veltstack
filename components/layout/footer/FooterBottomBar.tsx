"use client";

import { Logo } from "@/components/layout/Logo";
import { FooterCopyright } from "./FooterCopyright";

interface FooterBottomBarProps {
  className?: string;
}

export function FooterBottomBar({ className }: FooterBottomBarProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 py-8 sm:flex-row sm:gap-8 ${className ?? ""}`}
    >
      <Logo variant="footer" />
      <FooterCopyright className="text-center" />
    </div>
  );
}
