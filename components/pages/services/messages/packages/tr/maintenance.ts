export const maintenancePackagesTr = {
  maintenanceServices: {
    title: "Bakım & Destek Hizmetleri",
    description:
      "Web sitesi, mobil uygulama ve backend altyapınızın güvenli, güncel ve kesintisiz çalışması için düzenli bakım, izleme ve teknik destek.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        revisions: "2",
        scope: "1",
        featureGroups: [
          {
            label: "İzleme & Yedekleme",
            items: [
              "Uptime izleme ve kesinti bildirimleri",
              "Aylık tam yedekleme (dosya + veritabanı)",
              "Temel hata log takibi ve kritik uyarılar",
            ],
          },
          {
            label: "Destek & İçerik",
            items: [
              "E-posta ile teknik destek kanalı",
              "İş günü içi 48 saat yanıt hedefi",
              "Aylık 2 içerik ve metin güncelleme talebi",
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
            label: "Bakım & Güncelleme",
            items: [
              "Haftalık otomatik yedekleme ve aylık geri yükleme testi",
              "Framework, paket ve güvenlik yamaları",
              "SSL sertifikası takibi ve yenileme",
              "Aylık içerik, görsel ve küçük sayfa güncellemeleri",
            ],
          },
          {
            label: "Performans & Güvenlik",
            items: [
              "Core Web Vitals ve sayfa hızı izleme",
              "Sunucu kaynak kullanımı takibi (CPU, RAM, disk)",
              "Bağımlılık ve temel güvenlik taraması",
            ],
          },
          {
            label: "Destek & SLA",
            items: [
              "E-posta ve WhatsApp destek kanalı",
              "İş günü içi 24 saat yanıt hedefi",
              "Aylık durum özeti raporu",
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
            label: "Proaktif Bakım",
            items: [
              "Günlük otomatik yedekleme ve felaket kurtarma planı",
              "CI/CD pipeline bakımı ve deploy süreç yönetimi",
              "Bulut altyapı izleme ve maliyet/performans optimizasyonu",
              "Genişletilmiş içerik ve tasarım güncelleme desteği",
            ],
          },
          {
            label: "Güvenlik & İzleme",
            items: [
              "7/24 uptime izleme ve anlık uyarı bildirimleri",
              "Gelişmiş güvenlik taraması ve yama yönetimi",
              "Kritik olaylarda 4 saat içi müdahale hedefi",
              "Sunucu ve erişim güvenliği yapılandırma desteği",
            ],
          },
          {
            label: "Öncelikli Destek",
            items: [
              "Öncelikli teknik destek ve proaktif bakım",
              "Aylık strateji ve durum değerlendirme görüşmesi",
              "Özel durum paneli ve detaylı aylık raporlama",
            ],
          },
        ],
      },
    },
  },
} as const;
