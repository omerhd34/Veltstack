"use client";

import { Logo } from "@/components/layout/Logo";
import { FooterBackToTop } from "./FooterBackToTop";
import { FooterCopyright } from "./FooterCopyright";

interface FooterBottomBarProps {
  className?: string;
}

export function FooterBottomBar({ className }: FooterBottomBarProps) {
  return (
    <div
      className={`flex flex-col items-center gap-6 py-8 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4 ${className ?? ""}`}
    >
      <Logo variant="footer" className="sm:justify-self-start" />
      <FooterBackToTop className="order-first sm:order-0" />
      <FooterCopyright className="text-center sm:justify-self-end sm:text-right" />
    </div>
  );
}
