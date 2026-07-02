export const auditPackagesEn = {
  webAudit: {
    title: "Website Technical Audit",
    description:
      "Comprehensive analysis of your website's performance, security, SEO and code quality.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        scope: "1",
        featureGroups: [
          {
            label: "Performance & SEO",
            items: [
              "Lighthouse and PageSpeed analysis",
              "Core Web Vitals assessment",
              "Basic SEO and meta structure check",
              "Mobile compatibility test",
            ],
          },
          {
            label: "Reporting",
            items: [
              "Prioritized findings list",
              "Basic improvement recommendations",
              "PDF audit report",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        scope: "1",
        featureGroups: [
          {
            label: "Comprehensive Analysis",
            items: [
              "Detailed performance profile",
              "Security and HTTPS configuration",
              "Accessibility (WCAG) check",
              "Structured data audit",
              "Crawl errors and indexing analysis",
            ],
          },
          {
            label: "Reporting & Plan",
            items: [
              "Priority matrix with impact analysis",
              "Actionable improvement plan",
              "Detailed PDF report and presentation",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        scope: "1",
        featureGroups: [
          {
            label: "In-Depth Review",
            items: [
              "Source code and architecture analysis",
              "Dependency and vulnerability scan",
              "CDN, cache and server configuration",
              "Log analysis and error monitoring",
              "Competitor performance comparison",
            ],
          },
          {
            label: "Strategy & Support",
            items: [
              "Roadmap and sprint plan",
              "1-hour results review call",
              "Implementation quote preparation",
            ],
          },
        ],
      },
    },
  },
  appAudit: {
    title: "Mobile App Technical Audit",
    description:
      "Analyze your iOS and Android app's performance, security and user experience.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        scope: "1",
        featureGroups: [
          {
            label: "App Analysis",
            items: [
              "Launch time and performance test",
              "Basic UX and navigation assessment",
              "Store compliance check",
              "Crash and error log review",
            ],
          },
          {
            label: "Reporting",
            items: [
              "Prioritized findings list",
              "Basic improvement recommendations",
              "PDF audit report",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        scope: "1",
        featureGroups: [
          {
            label: "Comprehensive Analysis",
            items: [
              "Memory and CPU usage profile",
              "API security and authentication",
              "Offline behavior and data sync",
              "Push notification infrastructure check",
              "Accessibility assessment",
            ],
          },
          {
            label: "Reporting & Plan",
            items: [
              "Platform-specific (iOS/Android) findings",
              "Actionable improvement plan",
              "Detailed PDF report",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        scope: "1",
        featureGroups: [
          {
            label: "In-Depth Review",
            items: [
              "Source code and architecture analysis",
              "Dependency security scan",
              "Store review risk assessment",
              "CI/CD and build process analysis",
              "Backend API integration audit",
            ],
          },
          {
            label: "Strategy & Support",
            items: [
              "Restructuring roadmap",
              "1-hour results review call",
              "Implementation quote preparation",
            ],
          },
        ],
      },
    },
  },
  infrastructureAudit: {
    title: "Infrastructure & Security Audit",
    description:
      "Comprehensive analysis of your server, database, CI/CD and security infrastructure.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        scope: "1",
        featureGroups: [
          {
            label: "Infrastructure Check",
            items: [
              "Server resource usage analysis",
              "SSL and domain configuration",
              "Backup status check",
              "Basic security configuration",
            ],
          },
          {
            label: "Reporting",
            items: [
              "Prioritized risk list",
              "Basic improvement recommendations",
              "PDF audit report",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        scope: "1-2",
        featureGroups: [
          {
            label: "Comprehensive Analysis",
            items: [
              "Database performance and configuration",
              "CI/CD pipeline security check",
              "Access control and identity management",
              "DDoS and firewall configuration",
              "Log and monitoring infrastructure assessment",
            ],
          },
          {
            label: "Reporting & Plan",
            items: [
              "Risk matrix and impact analysis",
              "Actionable security improvement plan",
              "Detailed PDF report",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        scope: "2-3",
        featureGroups: [
          {
            label: "Enterprise Audit",
            items: [
              "Cloud infrastructure (AWS/GCP/Azure) optimization",
              "Kubernetes and container security",
              "Penetration test readiness assessment",
              "Disaster recovery and SLA analysis",
              "Cost optimization recommendations",
            ],
          },
          {
            label: "Strategy & Support",
            items: [
              "Infrastructure modernization roadmap",
              "1-hour results review call",
              "Implementation quote preparation",
            ],
          },
        ],
      },
    },
  },
} as const;
