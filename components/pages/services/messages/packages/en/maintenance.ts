export const maintenancePackagesEn = {
  maintenanceServices: {
    title: "Maintenance & Support Services",
    description:
      "Regular maintenance, monitoring and technical support to keep your website, mobile app and backend infrastructure secure, up to date and always running.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        revisions: "2",
        scope: "1",
        featureGroups: [
          {
            label: "Monitoring & Backup",
            items: [
              "Uptime monitoring and outage alerts",
              "Monthly full backup (files + database)",
              "Basic error log tracking and critical alerts",
            ],
          },
          {
            label: "Support & Content",
            items: [
              "Email technical support channel",
              "48-hour response target on business days",
              "Up to 2 content and text update requests per month",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        revisions: "5",
        scope: "1-2",
        featureGroups: [
          {
            label: "Maintenance & Updates",
            items: [
              "Weekly automated backups and monthly restore testing",
              "Framework, package and security patch updates",
              "SSL certificate tracking and renewal",
              "Monthly content, image and minor page updates",
            ],
          },
          {
            label: "Performance & Security",
            items: [
              "Core Web Vitals and page speed monitoring",
              "Server resource tracking (CPU, RAM, disk)",
              "Dependency and basic security scanning",
            ],
          },
          {
            label: "Support & SLA",
            items: [
              "Support via email and WhatsApp",
              "24-hour response target on business days",
              "Monthly status summary report",
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
            label: "Proactive Maintenance",
            items: [
              "Daily automated backups and disaster recovery planning",
              "CI/CD pipeline maintenance and deploy process management",
              "Cloud infrastructure monitoring and cost/performance optimization",
              "Extended content and design update support",
            ],
          },
          {
            label: "Security & Monitoring",
            items: [
              "24/7 uptime monitoring and instant alert notifications",
              "Advanced security scanning and patch management",
              "Critical incident response targeted within 4 hours",
              "Server and access security configuration support",
            ],
          },
          {
            label: "Priority Support",
            items: [
              "Priority technical support and proactive maintenance",
              "Monthly strategy and status review call",
              "Custom status dashboard and detailed monthly reporting",
            ],
          },
        ],
      },
    },
  },
} as const;
