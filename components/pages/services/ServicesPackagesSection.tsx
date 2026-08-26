import { getLocale, getTranslations } from "next-intl/server";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { toLatinUppercase } from "@/lib/utils";
import { ServicesPackagesPanel } from "./ServicesPackagesPanel";
import type { PackageCardData } from "./ServicePackageCard";
import type { PackageCategory } from "./packages-config";

interface ServicesPackagesSectionProps {
  className?: string;
  lockedCategory?: PackageCategory;
}

export async function ServicesPackagesSection({
  className,
  lockedCategory,
}: ServicesPackagesSectionProps) {
  const t = await getTranslations("servicesPage");
  const locale = (await getLocale()) as "tr" | "en";

  const packages = {
    web: t.raw("webPackages") as Record<string, PackageCardData>,
    refresh: t.raw("refreshPackages") as Record<string, PackageCardData>,
    app: t.raw("appPackages") as Record<string, PackageCardData>,
    seo: t.raw("seoPackages") as Record<string, PackageCardData>,
    audit: t.raw("auditPackages") as Record<string, PackageCardData>,
    maintenance: t.raw("maintenancePackages") as Record<
      string,
      PackageCardData
    >,
  };

  const tabs: { id: PackageCategory; label: string }[] = [
    { id: "web", label: t("tabWeb") },
    { id: "app", label: t("tabApp") },
    { id: "refresh", label: t("tabRefresh") },
    { id: "seo", label: t("tabSeo") },
    { id: "audit", label: t("tabAudit") },
    { id: "maintenance", label: t("tabMaintenance") },
  ];

  const activeCategory = lockedCategory ?? "web";
  const activeIntro = {
    web: {
      title: t("webIntroTitle"),
      p1: t("webIntroP1"),
      p2: t("webIntroP2"),
    },
    refresh: {
      title: t("refreshIntroTitle"),
      p1: t("refreshIntroP1"),
      p2: t("refreshIntroP2"),
    },
    app: {
      title: t("appIntroTitle"),
      p1: t("appIntroP1"),
      p2: t("appIntroP2"),
    },
    seo: {
      title: t("seoIntroTitle"),
      p1: t("seoIntroP1"),
      p2: t("seoIntroP2"),
    },
    audit: {
      title: t("auditIntroTitle"),
      p1: t("auditIntroP1"),
      p2: t("auditIntroP2"),
    },
    maintenance: {
      title: t("maintenanceIntroTitle"),
      p1: t("maintenanceIntroP1"),
      p2: t("maintenanceIntroP2"),
    },
  }[activeCategory];

  const lockedTitles: Partial<Record<PackageCategory, string>> = {
    web: t("packagesTitleWeb"),
    app: t("packagesTitleApp"),
    seo: t("tabSeo"),
    audit: t("tabAudit"),
    maintenance: t("tabMaintenance"),
  };
  const sectionTitle = lockedCategory
    ? (lockedTitles[lockedCategory] ??
      `${tabs.find((tab) => tab.id === lockedCategory)?.label ?? ""} ${t("packagesTitleSuffix")}`)
    : t("packagesTitle");
  const sectionSubtitle = lockedCategory
    ? activeIntro.p1
    : t("packagesSubtitle");

  return (
    <section
      className={`relative overflow-hidden bg-background py-20 md:py-28 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgb(58_107_82/0.06),transparent)]"
      />

      <SiteContainer className="relative min-w-0">
        <div className="mx-auto max-w-3xl text-center">
          {!lockedCategory ? (
            <SectionBadge variant="accent-glass">
              {toLatinUppercase(t("packagesBadge"), locale)}
            </SectionBadge>
          ) : null}
          <h2
            className={`font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight ${lockedCategory ? "" : "mt-5"}`}
          >
            {lockedCategory ? (
              <span className="text-brand-accent">{sectionTitle}</span>
            ) : (
              <>
                <span className="text-foreground">
                  {t("packagesTitleLead")}{" "}
                </span>
                <span className="bg-linear-to-r from-brand-accent via-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                  {t("packagesTitleAccent")}
                </span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.8] text-muted-foreground md:max-w-3xl md:text-base lg:max-w-4xl">
            {sectionSubtitle}
          </p>
        </div>

        <ServicesPackagesPanel
          className={lockedCategory ? "mt-3 md:mt-6" : "mt-12 md:mt-16"}
          lockedCategory={lockedCategory}
          labels={{
            tabs,
            tierTemel: t("tierTemel"),
            tierStandart: t("tierStandart"),
            tierPro: t("tierPro"),
            statDelivery: t("statDelivery"),
            statDeliverySetup: t("statDeliverySetup"),
            statDeliveryStart: t("statDeliveryStart"),
            statDeliveryAudit: t("statDeliveryAudit"),
            statDeliveryUnit: t("statDeliveryUnit"),
            statRevision: t("statRevision"),
            statMonthlyRequests: t("statMonthlyRequests"),
            statPages: t("statPages"),
            statSupport: t("statSupport"),
            statLanguages: t("statLanguages"),
            getQuote: t("getQuote"),
            featureIncluded: t("featureIncluded"),
            featureNotIncluded: t("featureNotIncluded"),
            deliveryGroupLabel: t("deliveryGroupLabel"),
          }}
          intros={{
            web: {
              title: t("webIntroTitle"),
              p1: t("webIntroP1"),
              p2: t("webIntroP2"),
            },
            refresh: {
              title: t("refreshIntroTitle"),
              p1: t("refreshIntroP1"),
              p2: t("refreshIntroP2"),
            },
            app: {
              title: t("appIntroTitle"),
              p1: t("appIntroP1"),
              p2: t("appIntroP2"),
            },
            seo: {
              title: t("seoIntroTitle"),
              p1: t("seoIntroP1"),
              p2: t("seoIntroP2"),
            },
            audit: {
              title: t("auditIntroTitle"),
              p1: t("auditIntroP1"),
              p2: t("auditIntroP2"),
            },
            maintenance: {
              title: t("maintenanceIntroTitle"),
              p1: t("maintenanceIntroP1"),
              p2: t("maintenanceIntroP2"),
            },
          }}
          packages={packages}
        />
      </SiteContainer>
    </section>
  );
}
