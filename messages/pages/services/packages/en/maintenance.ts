// ---------------------------------------------------------------------------
// Maintenance & Support — tier-based features
// ---------------------------------------------------------------------------

const maintenanceMonitoringTemel = [
  "Uptime monitoring and outage alerts",
  "Monthly full backup (files + database)",
  "Basic error log tracking and critical alerts",
] as const;

const maintenanceMonitoringStandart = [
  "Uptime monitoring and outage alerts",
  "Monthly full backup (files + database)",
  "Basic error log tracking and critical alerts",
  "Weekly automated backups and monthly restore testing",
  "Framework and security patch updates",
  "SSL certificate tracking and renewal",
  "Monthly content and minor page updates",
] as const;

const maintenanceMonitoringPro = [
  "Uptime monitoring and outage alerts",
  "Monthly full backup (files + database)",
  "Basic error log tracking and critical alerts",
  "Weekly automated backups and monthly restore testing",
  "Framework and security patch updates",
  "SSL certificate tracking and renewal",
  "Monthly content and minor page updates",
  "Daily automated backups and disaster recovery planning",
  "CI/CD pipeline maintenance and deploy management",
  "Cloud infrastructure monitoring and cost optimization",
  "Extended content and design updates",
] as const;

const maintenanceSecurityTemel = [
  "SSL certificate validity check",
  "Basic security scanning",
] as const;

const maintenanceSecurityStandart = [
  "SSL certificate validity check",
  "Basic security scanning",
  "Core Web Vitals and page speed monitoring",
  "Server resource tracking (CPU, RAM, disk)",
  "Dependency security scanning",
] as const;

const maintenanceSecurityPro = [
  "SSL certificate validity check",
  "Basic security scanning",
  "Core Web Vitals and page speed monitoring",
  "Server resource tracking (CPU, RAM, disk)",
  "Dependency security scanning",
  "24/7 uptime monitoring and instant alerts",
  "Advanced security scanning and patch management",
  "Critical incident response within 4 hours",
  "Server and access security configuration support",
] as const;

const maintenanceSupportTemel = [
  "Email technical support",
  "48-hour response target on business days",
  "Up to 2 content update requests per month",
] as const;

const maintenanceSupportStandart = [
  "Support via email and WhatsApp",
  "24-hour response target on business days",
  "Monthly status summary report",
] as const;

const maintenanceSupportPro = [
  "Priority technical support and proactive maintenance",
  "Monthly strategy and status review call",
  "Custom status dashboard and detailed monthly reporting",
] as const;

const MAINTENANCE_GROUP_MONITORING = "Monitoring & Maintenance";
const MAINTENANCE_GROUP_SECURITY = "Security & Performance";
const MAINTENANCE_GROUP_SUPPORT = "Support & SLA";

export const maintenancePackagesEn = {
  maintenanceServices: {
    title: "Maintenance & Support Services",
    description:
      "Regular maintenance, monitoring and technical support to keep your website, mobile app and backend infrastructure secure, up to date and always running.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        price: "₺4,000/mo",
        revisions: "2",
        featureGroups: [
          {
            label: MAINTENANCE_GROUP_MONITORING,
            items: [...maintenanceMonitoringTemel],
          },
          {
            label: MAINTENANCE_GROUP_SECURITY,
            items: [...maintenanceSecurityTemel],
          },
          {
            label: MAINTENANCE_GROUP_SUPPORT,
            items: [...maintenanceSupportTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        price: "₺6,000/mo",
        revisions: "5",
        featureGroups: [
          {
            label: MAINTENANCE_GROUP_MONITORING,
            items: [...maintenanceMonitoringStandart],
          },
          {
            label: MAINTENANCE_GROUP_SECURITY,
            items: [...maintenanceSecurityStandart],
          },
          {
            label: MAINTENANCE_GROUP_SUPPORT,
            items: [...maintenanceSupportStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "7-14",
        price: "₺10,000/mo",
        revisions: "10",
        featureGroups: [
          {
            label: MAINTENANCE_GROUP_MONITORING,
            items: [...maintenanceMonitoringPro],
          },
          {
            label: MAINTENANCE_GROUP_SECURITY,
            items: [...maintenanceSecurityPro],
          },
          {
            label: MAINTENANCE_GROUP_SUPPORT,
            items: [...maintenanceSupportPro],
          },
        ],
      },
    },
  },
} as const;
