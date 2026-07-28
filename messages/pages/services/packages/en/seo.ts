const seoOptimizationTemel = [
  "Site speed and Core Web Vitals analysis",
  "Title, meta and heading tag audit",
  "Mobile compatibility check",
  "Crawl errors and indexing report",
  "On-page SEO for included pages",
  "Google Search Console and Analytics 4 setup",
  "Google Business Profile and local visibility",
  "Keyword position tracking",
] as const;

const seoOptimizationStandart = [
  ...seoOptimizationTemel,
  "Technical SEO, architecture and indexing audit",
  "Schema and structured data implementation",
  "Competitor visibility and content gap analysis",
  "Backlink opportunity and authority assessment",
  "Monthly content calendar and on-page optimization",
] as const;

const seoOptimizationPro = [
  ...seoOptimizationStandart,
  "Unlimited page SEO scope",
  "Multilingual (hreflang) and multi-domain SEO",
  "Log analysis and crawl budget optimization",
  "Ecommerce product, category and filter SEO",
  "Advanced schema and rich-result optimization",
] as const;

const seoAdsTemel = ["Monthly performance and visibility summary"] as const;

const seoAdsStandart = [
  ...seoAdsTemel,
  "Google Ads (Search) campaign setup",
  "Meta Pixel and basic conversion tracking",
  "Monthly SEO and ads performance report",
  "Prioritized recommendations and action tracking",
] as const;

const seoAdsPro = [
  ...seoAdsStandart,
  "100+ keyword position and trend tracking",
  "Google Ads and Meta Ads campaign management",
  "Conversion API and advanced conversion tracking",
  "Custom Looker Studio dashboard",
  "Weekly performance report",
  "Monthly strategy call",
  "Priority technical support",
] as const;

const SEO_GROUP_OPTIMIZATION = "SEO & Optimization";
const SEO_GROUP_ADS = "Ads & Reporting";

export const seoPackagesEn = {
  seoServices: {
    title: "Digital Marketing & SEO",
    description:
      "End-to-end SEO and digital marketing support for sustainable search growth—from technical audits and monthly optimization to local visibility and ad campaigns.",
    tiers: {
      temel: {
        deliveryDays: "7-10",
        pages: "10",
        featureGroups: [
          {
            label: SEO_GROUP_OPTIMIZATION,
            items: [...seoOptimizationTemel],
          },
          {
            label: SEO_GROUP_ADS,
            items: [...seoAdsTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "10-14",
        pages: "25",
        featureGroups: [
          {
            label: SEO_GROUP_OPTIMIZATION,
            items: [...seoOptimizationStandart],
          },
          {
            label: SEO_GROUP_ADS,
            items: [...seoAdsStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "14-21",
        pages: "∞",
        featureGroups: [
          {
            label: SEO_GROUP_OPTIMIZATION,
            items: [...seoOptimizationPro],
          },
          {
            label: SEO_GROUP_ADS,
            items: [...seoAdsPro],
          },
        ],
      },
    },
  },
} as const;
