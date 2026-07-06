// ---------------------------------------------------------------------------
// Ortak (paylaşılan) özellik grupları — yenileme paketleri
// ---------------------------------------------------------------------------

const commonRedesignItems = [
  "Mobil, Tablet ve Masaüstü Uyumlu Arayüz",
  "SSL, HTTPS ve Güvenlik Yapılandırması",
  "Hızlı Yükleme Süreleri ve SEO Dostu Performans Optimizasyonu",
] as const;

const standartDesignExtras = [
  "Dark / Light Mod Desteği",
  "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
] as const;

const commonDeliveryTemel = [
  "Canlıya Alma ve DNS Geçiş Desteği",
  "15 Gün Teknik Destek",
] as const;

const commonDeliveryStandart = [
  "Kaynak Kodu ve Proje Dosyalarının Teslimi",
  "Canlıya Alma ve Geçiş Desteği",
  "30 Gün Teknik Destek",
] as const;

const commonDeliveryPro = [
  "Kaynak Kodu ve Proje Dosyalarının Teslimi",
  "Canlıya Alma ve Geçiş Desteği",
  "45 Gün Teknik Destek",
] as const;

const seoMigrationStandartItems = [
  "Meta, Open Graph ve Schema Verilerinin Korunması",
  "Gelişmiş Yönlendirme Haritası",
  "Google Search Console Geçiş Takibi",
  "Sitemap ve robots.txt Güncellemesi",
] as const;

const seoMigrationProItems = [
  ...seoMigrationStandartItems,
  "Kapsamlı Teknik SEO ve İndeksleme Optimizasyonu",
  "Google Analytics 4 ve Dönüşüm Takibi",
] as const;

export const refreshPackagesTr = {
  // =========================================================================
  // PORTFÖY / TANITIM SİTESİ YENİLEME
  // =========================================================================
  portfolio: {
    title: "Portföy / Tanıtım",
    description:
      "Mevcut tanıtım sitenizi modern tasarım, hızlı altyapı ve SEO korumasıyla yenileyin; içeriklerinizi kaybetmeden güçlü bir dijital vitrin oluşturun.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
        revisions: "2",
        scope: "1-8",
        featureGroups: [
          {
            label: "Analiz & Planlama",
            items: [
              "Mevcut sitenin performans, SEO ve içerik durumu analizi",
              "İçerik envanteri ve migrasyon planı",
              "URL yapısı ve 301 yönlendirme stratejisi",
            ],
          },
          {
            label: "Yenileme & Migrasyon",
            items: [
              ...commonRedesignItems,
              "Mevcut içeriklerin güvenli aktarımı",
              "Görsel sıkıştırma ve önbellek optimizasyonu",
              "301 yönlendirme kurulumu",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "14-21",
        revisions: "4",
        scope: "1-15",
        featureGroups: [
          {
            label: "Tasarım & UX",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Marka kimliğine uygun arayüz yenileme",
              "Kapsamlı UX ve performans denetimi",
              "Core Web Vitals iyileştirmesi",
            ],
          },
          {
            label: "SEO & Geçiş Koruması",
            items: [...seoMigrationStandartItems],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "21-30",
        revisions: "6",
        scope: "∞",
        featureGroups: [
          {
            label: "Kapsamlı Yenileme",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Next.js Tabanlı Modern Altyapıya Geçiş",
              "Özel Tasarım ve Animasyonlar",
              "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
            ],
          },
          {
            label: "SEO & İçerik Yönetimi",
            items: [
              ...seoMigrationProItems,
              "Dinamik İçerik Yönetim Paneli",
              "En Fazla 5 Dil Desteği",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryPro,
              "Kullanım Kılavuzu ve Kısa Yönetim Eğitimi",
            ],
          },
        ],
      },
    },
  },

  // =========================================================================
  // KURUMSAL SİTE YENİLEME
  // =========================================================================
  corporate: {
    title: "Kurumsal",
    description:
      "Kurumsal web sitenizi güncel tasarım, güvenli altyapı ve planlı geçişle yenileyin; marka güveninizi ve organik görünürlüğünüzü koruyun.",
    tiers: {
      temel: {
        deliveryDays: "10-18",
        revisions: "2",
        scope: "1-15",
        featureGroups: [
          {
            label: "Analiz & Planlama",
            items: [
              "Mevcut sitenin teknik, SEO ve güvenlik denetimi",
              "İçerik ve sayfa yapısı analizi",
              "Geçiş takvimi ve risk planı",
            ],
          },
          {
            label: "Yenileme & Geçiş",
            items: [
              ...commonRedesignItems,
              "Kurumsal kimliğe uygun arayüz yenileme",
              "İçerik migrasyonu",
              "Temel performans ve güvenlik güncellemesi",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "18-28",
        revisions: "4",
        scope: "1-30",
        featureGroups: [
          {
            label: "Tasarım & UX",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Bilgi mimarisi yeniden yapılandırma",
              "Premium UI bileşenleri",
              "Erişilebilirlik (WCAG) iyileştirmeleri",
              "Mobil navigasyon ve içerik deneyimi optimizasyonu",
            ],
          },
          {
            label: "Altyapı & SEO",
            items: [
              "Modern framework geçişi",
              ...seoMigrationStandartItems,
              "Form ve entegrasyon güncellemesi",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "28-42",
        revisions: "6",
        scope: "∞",
        featureGroups: [
          {
            label: "Kurumsal Altyapı Yenileme",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
              "Gelişmiş CMS ve İçerik Yönetimi",
              "En Fazla 5 Dil Desteği ve Çoklu Departman Yapısı",
              "API ve Üçüncü Taraf Entegrasyonları",
            ],
          },
          {
            label: "Güvenlik & Performans",
            items: [
              "Kapsamlı güvenlik denetimi ve iyileştirme",
              "CDN ve önbellek optimizasyonu",
              "KVKK Uyumlu Çerez Bildirimi",
              "Yedekleme ve geri yükleme planı",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryPro, "Ekip Eğitimi ve Dokümantasyon"],
          },
        ],
      },
    },
  },

  // =========================================================================
  // E-TİCARET SİTESİ YENİLEME
  // =========================================================================
  ecommerce: {
    title: "E-Ticaret",
    description:
      "E-ticaret sitenizi modern altyapı, akıcı ödeme deneyimi ve SEO korumasıyla yenileyin; ürün verilerinizi ve sıralamanızı riske atmadan dönüşüm odaklı bir mağazaya geçin.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "2",
        scope: "1-20",
        featureGroups: [
          {
            label: "Analiz & Planlama",
            items: [
              "Mevcut mağazanın performans ve dönüşüm analizi",
              "Ürün ve kategori migrasyon planı",
              "Ödeme, sipariş ve kargo akışı denetimi",
            ],
          },
          {
            label: "Yenileme & Geçiş",
            items: [
              ...commonRedesignItems,
              "Modern e-ticaret arayüzü",
              "Ürün ve kategori aktarımı",
              "Temel ödeme entegrasyonu güncellemesi",
              "Mobil alışveriş deneyimi iyileştirmesi",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              "Canlıya Alma ve Test Siparişi Doğrulaması",
              ...commonDeliveryTemel.slice(1),
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "21-35",
        revisions: "4",
        scope: "1-40",
        featureGroups: [
          {
            label: "Mağaza Yenileme",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Gelişmiş ürün filtreleme ve arama",
              "Sepet ve ödeme akışı optimizasyonu",
              "Stok ve varyasyon yönetimi güncellemesi",
              "Kargo entegrasyonu ve teslimat seçenekleri güncellemesi",
            ],
          },
          {
            label: "SEO & Pazarlama",
            items: [
              "Ürün URL ve meta koruma planı",
              "Product, Offer ve Breadcrumb Schema Yapılandırması",
              "Google Analytics 4 ve dönüşüm takibi yeniden kurulumu",
              "Terk Edilen Sepet Altyapısı",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "35-49",
        revisions: "6",
        scope: "∞",
        featureGroups: [
          {
            label: "Kurumsal Mağaza Altyapısı",
            items: [
              ...commonRedesignItems,
              ...standartDesignExtras,
              "Ölçeklenebilir Modern Altyapıya Geçiş",
              "En Fazla 5 Dil ve Çoklu Para Birimi Desteği",
              "Gelişmiş Kampanya ve Promosyon Modülü",
              "ERP, Muhasebe ve Fatura Entegrasyon Hazırlığı",
            ],
          },
          {
            label: "Performans & Güvenlik",
            items: [
              "Yüksek trafik ve kampanya dönemi optimizasyonu",
              "PCI-DSS Uyumlu Sanal POS Entegrasyon Altyapısı",
              "Gelişmiş güvenlik ve fraud koruması",
              "Anlık stok senkronizasyonu",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryPro,
              "Mağaza Yönetimi Eğitimi ve Dokümantasyon",
            ],
          },
        ],
      },
    },
  },
} as const;
