// ---------------------------------------------------------------------------
// Website Audit
// ---------------------------------------------------------------------------

const webAuditTechnicalTemel = [
  "Lighthouse and PageSpeed Insights analysis",
  "Core Web Vitals measurement (LCP, INP, CLS)",
  "Meta structure and heading hierarchy check",
  "Mobile compatibility and responsive testing",
] as const;

const webAuditTechnicalStandart = [
  "Lighthouse and PageSpeed Insights analysis",
  "Core Web Vitals measurement (LCP, INP, CLS)",
  "Meta structure and heading hierarchy check",
  "Mobile compatibility and responsive testing",
  "Page-level performance profile and bottleneck detection",
  "HTTPS and security headers check",
  "Accessibility (WCAG 2.1) audit",
  "Schema and structured data check",
  "Crawl errors and indexing analysis",
] as const;

const webAuditTechnicalPro = [
  "Lighthouse and PageSpeed Insights analysis",
  "Core Web Vitals measurement (LCP, INP, CLS)",
  "Meta structure and heading hierarchy check",
  "Mobile compatibility and responsive testing",
  "Page-level performance profile and bottleneck detection",
  "HTTPS and security headers check",
  "Accessibility (WCAG 2.1) audit",
  "Schema and structured data check",
  "Crawl errors and indexing analysis",
  "Source code and architecture assessment",
  "Dependency and vulnerability scan",
  "CDN and cache configuration review",
  "Error logs and critical user flows",
  "Industry benchmark comparison",
] as const;

const webAuditReportingTemel = [
  "Prioritized findings list",
  "Quick-win recommendations",
  "PDF summary report",
] as const;

const webAuditReportingStandart = [
  "Prioritized findings list",
  "Quick-win recommendations",
  "PDF summary report",
  "Impact-effort matrix prioritization",
  "Step-by-step actionable plan",
  "Detailed PDF report and presentation",
] as const;

const webAuditReportingPro = [
  "Prioritized findings list",
  "Quick-win recommendations",
  "PDF summary report",
  "Impact-effort matrix prioritization",
  "Step-by-step actionable plan",
  "Detailed PDF report and presentation",
  "Improvement roadmap and sprint plan",
  "1-hour results review call",
  "Implementation quote preparation",
] as const;

// ---------------------------------------------------------------------------
// Mobile App Audit
// ---------------------------------------------------------------------------

const appAuditTechnicalTemel = [
  "Launch time and performance testing",
  "Navigation and usability assessment",
  "App Store and Google Play compliance check",
  "Crash logs and error review",
] as const;

const appAuditTechnicalStandart = [
  "Launch time and performance testing",
  "Navigation and usability assessment",
  "App Store and Google Play compliance check",
  "Crash logs and error review",
  "Memory, CPU and network usage profile",
  "API security and authentication check",
  "Offline behavior and data sync",
  "Push notification infrastructure check",
  "Accessibility (VoiceOver/TalkBack) assessment",
] as const;

const appAuditTechnicalPro = [
  "Launch time and performance testing",
  "Navigation and usability assessment",
  "App Store and Google Play compliance check",
  "Crash logs and error review",
  "Memory, CPU and network usage profile",
  "API security and authentication check",
  "Offline behavior and data sync",
  "Push notification infrastructure check",
  "Accessibility (VoiceOver/TalkBack) assessment",
  "Source code and architecture assessment",
  "Dependency and vulnerability scan",
  "Store review risk assessment",
  "CI/CD and build process analysis",
  "Backend API integration audit",
] as const;

const appAuditReportingTemel = [
  "Prioritized findings list",
  "Quick-win recommendations",
  "PDF summary report",
] as const;

const appAuditReportingStandart = [
  "Prioritized findings list",
  "Quick-win recommendations",
  "PDF summary report",
  "Platform-specific (iOS/Android) findings",
  "Step-by-step actionable plan",
  "Detailed PDF report",
] as const;

const appAuditReportingPro = [
  "Prioritized findings list",
  "Quick-win recommendations",
  "PDF summary report",
  "Platform-specific (iOS/Android) findings",
  "Step-by-step actionable plan",
  "Detailed PDF report",
  "Restructuring roadmap",
  "1-hour results review call",
  "Implementation quote preparation",
] as const;

const AUDIT_GROUP_TECHNICAL = "Technical Audit";
const AUDIT_GROUP_REPORTING = "Reporting & Support";

export const auditPackagesEn = {
  webAudit: {
    title: "Website Technical Audit",
    description:
      "Comprehensive analysis of your website's performance, security, SEO and code quality.",
    introP2:
      "Startup, Professional and Premium tiers deliver analysis and reporting at the depth your website requires. Findings are delivered as a prioritized action plan.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...webAuditTechnicalTemel],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...webAuditReportingTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...webAuditTechnicalStandart],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...webAuditReportingStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...webAuditTechnicalPro],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...webAuditReportingPro],
          },
        ],
      },
    },
  },
  appAudit: {
    title: "Mobile App Technical Audit",
    description:
      "Analyze your iOS and Android app's performance, security and user experience.",
    introP2:
      "Startup, Professional and Premium tiers deliver analysis and reporting at the depth your mobile app requires. Platform-specific findings become an actionable plan.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...appAuditTechnicalTemel],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...appAuditReportingTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...appAuditTechnicalStandart],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...appAuditReportingStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...appAuditTechnicalPro],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...appAuditReportingPro],
          },
        ],
      },
    },
  },
} as const;
