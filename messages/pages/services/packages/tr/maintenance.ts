// ---------------------------------------------------------------------------
// Bakım & Destek — kademe bazlı özellikler
// ---------------------------------------------------------------------------

const maintenanceMonitoringTemel = [
  "Uptime izleme ve kesinti bildirimleri",
  "Aylık tam yedekleme (dosya + veritabanı)",
  "Temel hata log takibi ve kritik uyarılar",
] as const;

const maintenanceMonitoringStandart = [
  "Uptime izleme ve kesinti bildirimleri",
  "Aylık tam yedekleme (dosya + veritabanı)",
  "Temel hata log takibi ve kritik uyarılar",
  "Haftalık otomatik yedekleme ve aylık geri yükleme testi",
  "Framework ve güvenlik yamaları",
  "SSL sertifikası takibi ve yenileme",
  "Aylık içerik ve küçük sayfa güncellemeleri",
] as const;

const maintenanceMonitoringPro = [
  "Uptime izleme ve kesinti bildirimleri",
  "Aylık tam yedekleme (dosya + veritabanı)",
  "Temel hata log takibi ve kritik uyarılar",
  "Haftalık otomatik yedekleme ve aylık geri yükleme testi",
  "Framework ve güvenlik yamaları",
  "SSL sertifikası takibi ve yenileme",
  "Aylık içerik ve küçük sayfa güncellemeleri",
  "Günlük otomatik yedekleme ve felaket kurtarma planı",
  "CI/CD pipeline bakımı ve deploy yönetimi",
  "Bulut altyapı izleme ve maliyet optimizasyonu",
  "Genişletilmiş içerik ve tasarım güncellemeleri",
] as const;

const maintenanceSecurityTemel = [
  "SSL sertifikası geçerlilik kontrolü",
  "Temel güvenlik taraması",
] as const;

const maintenanceSecurityStandart = [
  "SSL sertifikası geçerlilik kontrolü",
  "Temel güvenlik taraması",
  "Core Web Vitals ve sayfa hızı izleme",
  "Sunucu kaynak kullanımı takibi (CPU, RAM, disk)",
  "Bağımlılık güvenlik taraması",
] as const;

const maintenanceSecurityPro = [
  "SSL sertifikası geçerlilik kontrolü",
  "Temel güvenlik taraması",
  "Core Web Vitals ve sayfa hızı izleme",
  "Sunucu kaynak kullanımı takibi (CPU, RAM, disk)",
  "Bağımlılık güvenlik taraması",
  "7/24 uptime izleme ve anlık uyarı",
  "Gelişmiş güvenlik taraması ve yama yönetimi",
  "Kritik olaylarda 4 saat içi müdahale",
  "Sunucu ve erişim güvenliği yapılandırma desteği",
] as const;

const maintenanceSupportTemel = [
  "E-posta ile teknik destek",
  "İş günü içi 48 saat yanıt hedefi",
  "Aylık 2 içerik güncelleme talebi",
] as const;

const maintenanceSupportStandart = [
  "E-posta ve WhatsApp destek",
  "İş günü içi 24 saat yanıt hedefi",
  "Aylık durum özeti raporu",
] as const;

const maintenanceSupportPro = [
  "Öncelikli teknik destek ve proaktif bakım",
  "Aylık strateji ve durum değerlendirme görüşmesi",
  "Özel durum paneli ve detaylı aylık raporlama",
] as const;

const MAINTENANCE_GROUP_MONITORING = "İzleme & Bakım";
const MAINTENANCE_GROUP_SECURITY = "Güvenlik & Performans";
const MAINTENANCE_GROUP_SUPPORT = "Destek & SLA";

export const maintenancePackagesTr = {
  maintenanceServices: {
    title: "Bakım & Destek Hizmetleri",
    description:
      "Web sitesi, mobil uygulama ve backend altyapınızın güvenli, güncel ve kesintisiz çalışması için düzenli bakım, izleme ve teknik destek.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        price: "4.000 ₺/ay",
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
        price: "6.000 ₺/ay",
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
        price: "10.000 ₺/ay",
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
