// ---------------------------------------------------------------------------
// SEO Services — tier-based features
// ---------------------------------------------------------------------------

const seoOptimizationTemelAudit = [
  "Site speed, Core Web Vitals and performance analysis",
  "Title, meta description and heading tag audit",
  "Mobile compatibility and usability check",
  "Crawl errors and indexability report",
] as const;

const seoOptimizationTemelSetup = [
  "On-page SEO optimization for included pages",
  "Google Search Console and Google Analytics 4 setup",
  "Google Business Profile and local search visibility",
  "Keyword position tracking",
  "Monthly performance and visibility summary",
] as const;

const seoOptimizationStandart = [
  "Technical SEO, site architecture and indexing audit",
  "Schema and structured data implementation",
  "Competitor visibility and content gap analysis",
  "Backlink opportunity and authority assessment",
  "Monthly content calendar and on-page optimization",
] as const;

const seoOptimizationPro = [
  "Unlimited page SEO scope",
  "Multilingual (hreflang) and multi-domain SEO management",
  "Log analysis and crawl budget optimization",
  "Ecommerce product, category and filter page SEO",
  "Advanced schema and rich result optimization",
] as const;

const seoAdsStandart = [
  "Google Ads (Search Network) campaign setup and configuration",
  "Meta Pixel and basic conversion tracking setup",
  "Detailed monthly SEO and ad performance report",
  "Prioritized improvement recommendations and action tracking",
] as const;

const seoAdsPro = [
  "100+ keyword position and trend tracking",
  "Google Ads and Meta Ads campaign management",
  "Conversion API and advanced conversion tracking setup",
  "Custom Looker Studio dashboard and reporting",
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
      "End-to-end SEO and digital marketing support for sustainable search growth, from technical audits and monthly optimization to local visibility and ad campaigns.",
    tiers: {
      temel: {
        deliveryDays: "7-10",
        pages: "10",
        scope: "10-25",
        featureGroups: [
          {
            label: SEO_GROUP_OPTIMIZATION,
            items: [
              ...seoOptimizationTemelAudit,
              ...seoOptimizationTemelSetup,
            ],
          },
          {
            label: SEO_GROUP_ADS,
            items: [],
          },
        ],
      },
      standart: {
        deliveryDays: "10-14",
        pages: "25",
        scope: "25-75",
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
        scope: "100+",
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
