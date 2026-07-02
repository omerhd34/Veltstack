export const maintenancePackagesTr = {
  maintenanceServices: {
    title: "Bakım & Destek Hizmetleri",
    description:
      "Web sitesi, mobil uygulama ve backend altyapınızın güvenli, güncel ve kesintisiz çalışması için kapsamlı sürekli destek.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
        revisions: "2",
        scope: "1",
        featureGroups: [
          {
            label: "İzleme & Yedekleme",
            items: [
              "Aylık dosya ve veritabanı yedeklemesi",
              "Uptime izleme ve kesinti bildirimleri",
              "Temel hata logları ve kritik uyarı takibi",
              "Temel içerik ve metin güncellemeleri",
            ],
          },
          {
            label: "Destek & Müdahale",
            items: [
              "E-posta ile teknik destek kanalı",
              "48 saat içinde hata giderme",
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
            label: "Bakım & Güncelleme",
            items: [
              "Haftalık yedekleme ve geri yükleme testleri",
              "Paket, kütüphane ve modül güncellemeleri",
              "Aylık içerik, görsel ve sayfa revizyonları",
              "SSL sertifikası takibi ve yenileme",
            ],
          },
          {
            label: "Performans & Güvenlik",
            items: [
              "Core Web Vitals ve sayfa hızı izleme",
              "CPU, RAM, disk ve trafik kaynak takibi",
              "Temel güvenlik taramaları ve açık kontrolü",
            ],
          },
          {
            label: "Destek & SLA",
            items: [
              "E-posta ve öncelikli destek kanalı",
              "24 saat içinde hata giderme hedefi",
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
            label: "Proaktif & Kurumsal Bakım",
            items: [
              "Anlık kaynak kodu ve veritabanı yedekleme",
              "CI/CD süreç bakımı ve güncellemesi",
              "AWS, Google Cloud veya Azure altyapı optimizasyonu",
              "Konteyner ve cluster altyapı bakım desteği",
              "Genişletilmiş içerik ve tasarım güncelleme desteği",
            ],
          },
          {
            label: "Güvenlik & SLA",
            items: [
              "7/24 uyarı ve izleme sistemi kurulumu",
              "Yüksek erişilebilirlik hedefli uptime takibi ve öncelikli SLA",
              "1 saat içinde kritik olaylara müdahale hedefi",
              "Güvenlik duvarı ve saldırı izleme yapılandırma desteği",
            ],
          },
          {
            label: "Öncelikli Destek",
            items: [
              "Öncelikli teknik destek ve proaktif bakım",
              "Haftalık durum değerlendirme toplantıları",
              "Şirkete özel canlı sistem izleme paneli",
            ],
          },
        ],
      },
    },
  },
} as const;
