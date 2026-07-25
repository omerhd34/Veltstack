"use client";

import { useLocale, useTranslations } from "next-intl";
import { SoftPrefetchLink } from "@/components/ui/SoftPrefetchLink";
import { getFooterBlogPosts } from "@/components/pages/blog/blog-data";
import {
  footerCorporateItems,
  footerLegalItems,
  footerServiceItems,
  getFooterBlogCategoryIcon,
} from "./footer-config";
import { FooterColumn } from "./FooterColumn";

interface FooterMainGridProps {
  className?: string;
}

export function FooterMainGrid({ className }: FooterMainGridProps) {
  const t = useTranslations("footer");
  const locale = useLocale() as "tr" | "en";
  const serviceLabels = t.raw("serviceLabels") as Record<string, string>;
  const corporateLabels = t.raw("corporateLabels") as Record<string, string>;
  const legalLabels = t.raw("legalLabels") as Record<string, string>;
  const blogPosts = getFooterBlogPosts(locale);

  const footerLinkClassName =
    "inline-flex items-center gap-2.5 text-sm text-background/60 transition-colors hover:text-background";

  const footerColumnClassName = "w-full sm:w-fit";

  const footerListClassName = "space-y-3";

  return (
    <div
      className={`grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-16 ${className ?? ""}`}
    >
      <FooterColumn
        title={t("servicesTitle")}
        className={`${footerColumnClassName} sm:justify-self-start`}
      >
        <ul className={footerListClassName}>
          {footerServiceItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <SoftPrefetchLink href={item.href} className={footerLinkClassName}>
                  <span className="inline-flex size-4 shrink-0 items-center justify-center">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {serviceLabels[item.navKey]}
                </SoftPrefetchLink>
              </li>
            );
          })}
        </ul>
      </FooterColumn>

      <FooterColumn
        title={t("corporateTitle")}
        className={`${footerColumnClassName} lg:justify-self-center`}
      >
        <ul className={footerListClassName}>
          {footerCorporateItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <SoftPrefetchLink href={item.href} className={footerLinkClassName}>
                  <span className="inline-flex size-4 shrink-0 items-center justify-center">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {corporateLabels[item.labelKey]}
                </SoftPrefetchLink>
              </li>
            );
          })}
        </ul>
      </FooterColumn>

      <FooterColumn
        title={t("blogTitle")}
        className={`${footerColumnClassName} lg:justify-self-center`}
      >
        <ul className={footerListClassName}>
          {blogPosts.map((post) => {
            const Icon = getFooterBlogCategoryIcon(post.category);

            return (
              <li key={post.slug}>
                <SoftPrefetchLink
                  href={`/blog/${post.slug}`}
                  className={footerLinkClassName}
                >
                  <span className="inline-flex size-4 shrink-0 items-center justify-center">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {post.title}
                </SoftPrefetchLink>
              </li>
            );
          })}
        </ul>
      </FooterColumn>

      <FooterColumn
        title={t("legalTitle")}
        className={`${footerColumnClassName} sm:justify-self-end lg:justify-self-end`}
      >
        <ul className={footerListClassName}>
          {footerLegalItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <SoftPrefetchLink href={item.href} className={footerLinkClassName}>
                  <span className="inline-flex size-4 shrink-0 items-center justify-center">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {legalLabels[item.labelKey]}
                </SoftPrefetchLink>
              </li>
            );
          })}
        </ul>
      </FooterColumn>
    </div>
  );
}
