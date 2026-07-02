export const seoPackagesEn = {
  seoServices: {
    title: "Digital Marketing & SEO",
    description:
      "Comprehensive search engine optimization and growth strategies, from technical audits to monthly ad campaigns, for individual sites and enterprise platforms alike.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
        pages: "5",
        scope: "1-20",
        featureGroups: [
          {
            label: "Audit & Analysis",
            items: [
              "Site speed and performance analysis",
              "Meta tag and heading audit",
              "Mobile compatibility check",
              "Crawl error report",
            ],
          },
          {
            label: "Optimization & Digital Infrastructure",
            items: [
              "Search Console & Google Analytics 4 setup",
              "Google My Business (Maps) optimization",
              "Monthly performance report",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "14-21",
        pages: "15",
        scope: "1-50",
        featureGroups: [
          {
            label: "Comprehensive Audit & Strategy",
            items: [
              "Comprehensive technical SEO audit",
              "Core Web Vitals analysis",
              "Structured data audit",
              "Competitor comparison analysis",
              "Backlink opportunity analysis",
            ],
          },
          {
            label: "Marketing & Optimization",
            items: [
              "Content calendar suggestions",
              "Google Ads (Search Network) campaign setup",
              "Meta (Facebook/Instagram) Pixel integration",
              "Detailed monthly performance and ad report",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "21-30",
        pages: "∞",
        scope: "∞",
        featureGroups: [
          {
            label: "Corporate SEO Program",
            items: [
              "Unlimited page SEO scope",
              "Custom-built, high-speed infrastructure",
              "Multilingual and multi-domain support",
              "Log analysis and crawl budget",
              "Ecommerce SEO module",
              "Schema and structured data",
            ],
          },
          {
            label: "Growth & Ad Management",
            items: [
              "100+ keyword tracking",
              "Comprehensive Google Ads & Meta Ads campaign management",
              "Advanced conversion and Conversion API setups",
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
