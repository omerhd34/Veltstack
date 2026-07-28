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

// ---------------------------------------------------------------------------
// Infrastructure & Security Audit
// ---------------------------------------------------------------------------

const infraAuditTechnicalTemel = [
  "Server resource usage analysis (CPU, RAM, disk)",
  "SSL/TLS and domain configuration check",
  "Backup frequency and restore status",
  "Firewall and basic access security review",
] as const;

const infraAuditTechnicalStandart = [
  "Server resource usage analysis (CPU, RAM, disk)",
  "SSL/TLS and domain configuration check",
  "Backup frequency and restore status",
  "Firewall and basic access security review",
  "Database performance and indexing check",
  "CI/CD pipeline security and secret management",
  "Access control and identity management (IAM)",
  "DDoS protection and firewall rules",
  "Log collection and monitoring infrastructure review",
] as const;

const infraAuditTechnicalPro = [
  "Server resource usage analysis (CPU, RAM, disk)",
  "SSL/TLS and domain configuration check",
  "Backup frequency and restore status",
  "Firewall and basic access security review",
  "Database performance and indexing check",
  "CI/CD pipeline security and secret management",
  "Access control and identity management (IAM)",
  "DDoS protection and firewall rules",
  "Log collection and monitoring infrastructure review",
  "Cloud infrastructure (AWS/GCP/Azure) architecture and cost review",
  "Kubernetes and container security configuration",
  "Penetration test readiness assessment",
  "Disaster recovery and SLA analysis",
  "Resource usage and cost optimization",
] as const;

const infraAuditReportingTemel = [
  "Prioritized risk list",
  "Critical items requiring immediate action",
  "PDF summary report",
] as const;

const infraAuditReportingStandart = [
  "Prioritized risk list",
  "Critical items requiring immediate action",
  "PDF summary report",
  "Risk matrix with business impact",
  "Actionable security improvement plan",
  "Detailed PDF report",
] as const;

const infraAuditReportingPro = [
  "Prioritized risk list",
  "Critical items requiring immediate action",
  "PDF summary report",
  "Risk matrix with business impact",
  "Actionable security improvement plan",
  "Detailed PDF report",
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
