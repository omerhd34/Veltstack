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
            label: "Technical Audit & Analysis",
            items: [
              "Site speed, Core Web Vitals and performance analysis",
              "Title, meta description and heading tag audit",
              "Mobile compatibility and usability check",
              "Crawl errors and indexability report",
            ],
          },
          {
            label: "Setup & Core Optimization",
            items: [
              "On-page SEO optimization for included pages",
              "Google Search Console and Google Analytics 4 setup",
              "Google Business Profile and local search visibility",
              "Keyword position tracking",
              "Monthly performance and visibility summary",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "10-14",
        pages: "25",
        scope: "25-75",
        featureGroups: [
          {
            label: "Comprehensive SEO & Content",
            items: [
              "Technical SEO, site architecture and indexing audit",
              "Schema and structured data implementation",
              "Competitor visibility and content gap analysis",
              "Backlink opportunity and authority assessment",
              "Monthly content calendar and on-page optimization",
            ],
          },
          {
            label: "Ad Infrastructure & Reporting",
            items: [
              "Google Ads (Search Network) campaign setup and configuration",
              "Meta Pixel and basic conversion tracking setup",
              "Detailed monthly SEO and ad performance report",
              "Prioritized improvement recommendations and action tracking",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "14-21",
        pages: "∞",
        scope: "100+",
        featureGroups: [
          {
            label: "Enterprise SEO & Scale",
            items: [
              "Unlimited page SEO scope",
              "Multilingual (hreflang) and multi-domain SEO management",
              "Log analysis and crawl budget optimization",
              "Ecommerce product, category and filter page SEO",
              "Advanced schema and rich result optimization",
            ],
          },
          {
            label: "Ad Management & Growth",
            items: [
              "100+ keyword position and trend tracking",
              "Google Ads and Meta Ads campaign management",
              "Conversion API and advanced conversion tracking setup",
              "Custom Looker Studio dashboard and reporting",
              "Weekly performance report",
              "Monthly strategy call",
              "Priority technical support",
            ],
          },
        ],
      },
    },
  },
} as const;
