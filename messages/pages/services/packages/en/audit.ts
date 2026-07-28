// ---------------------------------------------------------------------------
// Website Audit
// ---------------------------------------------------------------------------

const webAuditTechnicalTemel = [
  "Lighthouse and PageSpeed analysis",
  "Core Web Vitals assessment",
  "Basic SEO and meta structure check",
  "Mobile compatibility test",
] as const;

const webAuditTechnicalStandart = [
  "Detailed performance profile and bottleneck detection",
  "Security and HTTPS configuration",
  "Accessibility (WCAG) check",
  "Structured data audit",
  "Crawl errors and indexing analysis",
] as const;

const webAuditTechnicalPro = [
  "Source code and architecture analysis",
  "Dependency and vulnerability scan",
  "CDN, cache and server configuration",
  "Log analysis and error monitoring",
  "Competitor performance comparison",
] as const;

const webAuditReportingTemel = [
  "Prioritized findings list",
  "Quick-win improvement recommendations",
  "PDF audit report summary",
] as const;

const webAuditReportingStandart = [
  "Priority matrix with impact analysis",
  "Actionable improvement plan",
  "Detailed PDF report and presentation",
] as const;

const webAuditReportingPro = [
  "Roadmap and sprint plan",
  "1-hour results review call",
  "Implementation quote preparation",
] as const;

// ---------------------------------------------------------------------------
// Mobile App Audit
// ---------------------------------------------------------------------------

const appAuditTechnicalTemel = [
  "Launch time and performance test",
  "Basic UX and navigation assessment",
  "Store compliance check",
  "Crash and error log review",
] as const;

const appAuditTechnicalStandart = [
  "Memory and CPU usage profile",
  "API security and authentication",
  "Offline behavior and data sync",
  "Push notification infrastructure check",
  "Accessibility assessment",
] as const;

const appAuditTechnicalPro = [
  "Source code and architecture analysis",
  "Dependency security scan",
  "Store review risk assessment",
  "CI/CD and build process analysis",
  "Backend API integration audit",
] as const;

const appAuditReportingTemel = [
  "Prioritized findings list",
  "Quick-win improvement recommendations",
  "PDF audit report summary",
] as const;

const appAuditReportingStandart = [
  "Platform-specific (iOS/Android) findings",
  "Actionable improvement plan",
  "Detailed PDF report",
] as const;

const appAuditReportingPro = [
  "Restructuring roadmap",
  "1-hour results review call",
  "Implementation quote preparation",
] as const;

// ---------------------------------------------------------------------------
// Infrastructure & Security Audit
// ---------------------------------------------------------------------------

const infraAuditTechnicalTemel = [
  "Server resource usage analysis",
  "SSL and domain configuration",
  "Backup status check",
  "Basic security configuration",
] as const;

const infraAuditTechnicalStandart = [
  "Database performance and configuration",
  "CI/CD pipeline security check",
  "Access control and identity management",
  "DDoS and firewall configuration",
  "Log and monitoring infrastructure assessment",
] as const;

const infraAuditTechnicalPro = [
  "Cloud infrastructure (AWS/GCP/Azure) optimization",
  "Kubernetes and container security",
  "Penetration test readiness assessment",
  "Disaster recovery and SLA analysis",
  "Cost optimization recommendations",
] as const;

const infraAuditReportingTemel = [
  "Prioritized risk list",
  "Critical items requiring immediate action",
  "PDF audit report summary",
] as const;

const infraAuditReportingStandart = [
  "Risk matrix and impact analysis",
  "Actionable security improvement plan",
  "Detailed PDF report",
] as const;

const infraAuditReportingPro = [
  "Infrastructure modernization roadmap",
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
  infrastructureAudit: {
    title: "Infrastructure & Security Audit",
    description:
      "Comprehensive analysis of your server, database, CI/CD and security infrastructure.",
    introP2:
      "Startup, Professional and Premium tiers deliver analysis and reporting at the depth your infrastructure requires. Risks are prioritized into concrete security actions.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...infraAuditTechnicalTemel],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...infraAuditReportingTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...infraAuditTechnicalStandart],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...infraAuditReportingStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...infraAuditTechnicalPro],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...infraAuditReportingPro],
          },
        ],
      },
    },
  },
} as const;
