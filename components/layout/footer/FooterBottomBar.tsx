"use client";

import { Logo } from "@/components/layout/Logo";
import { FooterCopyright } from "./FooterCopyright";

interface FooterBottomBarProps {
  className?: string;
}

export function FooterBottomBar({ className }: FooterBottomBarProps) {
  return (
    <div
      className={`flex flex-col items-center gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${className ?? ""}`}
    >
      <Logo variant="footer" className="sm:justify-self-start" />
      <FooterCopyright className="text-center sm:text-right" />
    </div>
  );
}
