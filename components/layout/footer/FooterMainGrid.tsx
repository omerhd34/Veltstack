"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  footerCorporateItems,
  footerLegalItems,
  footerServiceItems,
} from "./footer-config";
import { FooterColumn } from "./FooterColumn";

interface FooterMainGridProps {
  className?: string;
}

export function FooterMainGrid({ className }: FooterMainGridProps) {
  const t = useTranslations("footer");
  const serviceLabels = t.raw("serviceLabels") as Record<string, string>;
  const corporateLabels = t.raw("corporateLabels") as Record<string, string>;
  const legalLabels = t.raw("legalLabels") as Record<string, string>;

  const footerLinkClassName =
    "inline-flex items-center gap-2.5 text-sm text-background/60 transition-colors hover:text-background";

  const footerColumnClassName = "w-full min-w-[220px] sm:w-auto";

  const footerListClassName = "space-y-3";

  return (
    <div
      className={`flex flex-wrap justify-center gap-x-16 gap-y-10 lg:gap-x-32 ${className ?? ""}`}
    >
      <FooterColumn title={t("servicesTitle")} className={footerColumnClassName}>
        <ul className={footerListClassName}>
          {footerServiceItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link href={item.href} className={footerLinkClassName}>
                  <span className="inline-flex size-4 shrink-0 items-center justify-center">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {serviceLabels[item.navKey]}
                </Link>
              </li>
            );
          })}
        </ul>
      </FooterColumn>

      <FooterColumn title={t("corporateTitle")} className={footerColumnClassName}>
        <ul className={footerListClassName}>
          {footerCorporateItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link href={item.href} className={footerLinkClassName}>
                  <span className="inline-flex size-4 shrink-0 items-center justify-center">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {corporateLabels[item.labelKey]}
                </Link>
              </li>
            );
          })}
        </ul>
      </FooterColumn>

      <FooterColumn title={t("legalTitle")} className={footerColumnClassName}>
        <ul className={footerListClassName}>
          {footerLegalItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link href={item.href} className={footerLinkClassName}>
                  <span className="inline-flex size-4 shrink-0 items-center justify-center">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {legalLabels[item.labelKey]}
                </Link>
              </li>
            );
          })}
        </ul>
      </FooterColumn>
    </div>
  );
}
