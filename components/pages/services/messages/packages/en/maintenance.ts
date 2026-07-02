export const maintenancePackagesEn = {
  maintenanceServices: {
    title: "Maintenance & Support Services",
    description:
      "Comprehensive ongoing support to keep your website, mobile app and backend infrastructure secure, up to date and always running.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
        revisions: "2",
        scope: "1",
        featureGroups: [
          {
            label: "Monitoring & Backup",
            items: [
              "Monthly file and database backups",
              "Uptime monitoring and outage alerts",
              "Basic error log monitoring",
              "Basic content and text updates",
            ],
          },
          {
            label: "Support & Response",
            items: [
              "Email technical support channel",
              "Bug fixes within 48 hours",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "7-14",
        revisions: "5",
        scope: "2-3",
        featureGroups: [
          {
            label: "Maintenance & Updates",
            items: [
              "Weekly backups and restore testing",
              "Package, library and module updates",
              "Monthly content, image and page revisions",
              "SSL certificate tracking and renewal",
            ],
          },
          {
            label: "Performance & Security",
            items: [
              "Core Web Vitals monitoring",
              "Server resource tracking (CPU, RAM, disk)",
              "Basic security scans and vulnerability checks",
            ],
          },
          {
            label: "Support & SLA",
            items: [
              "Priority support via WhatsApp and email",
              "Bug fixes targeted within 24 hours",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "7-14",
        revisions: "10",
        scope: "∞",
        featureGroups: [
          {
            label: "Proactive & Enterprise Maintenance",
            items: [
              "Real-time source code and database backup infrastructure",
              "CI/CD process maintenance and updates",
              "AWS, Google Cloud or Azure infrastructure optimization",
              "Container and cluster infrastructure maintenance support",
              "Extended content and design update support",
            ],
          },
          {
            label: "Security & SLA",
            items: [
              "24/7 alerting and monitoring system setup",
              "High-availability uptime tracking and priority SLA",
              "Critical incident response targeted within 1 hour",
              "Firewall and attack monitoring configuration support",
            ],
          },
          {
            label: "Priority Support",
            items: [
              "Priority technical support and proactive maintenance",
              "Weekly status review meetings",
              "Custom live system monitoring dashboard",
            ],
          },
        ],
      },
    },
  },
} as const;
