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

const REFRESH_GROUP_ANALYSIS = "Analiz & Planlama";
const REFRESH_GROUP_DESIGN = "Tasarım & Yenileme";
const REFRESH_GROUP_SEO = "SEO & Geçiş Koruması";
const REFRESH_GROUP_DELIVERY = "Teslim & Destek";

// ---------------------------------------------------------------------------
// Portföy / Tanıtım
// ---------------------------------------------------------------------------

const portfolioAnalysisTemel = [
  "Mevcut sitenin performans, SEO ve içerik durumu analizi",
  "İçerik envanteri ve migrasyon planı",
  "URL yapısı ve 301 yönlendirme stratejisi",
] as const;

const portfolioDesignTemel = [
  ...commonRedesignItems,
  "Mevcut içeriklerin güvenli aktarımı",
  "Görsel sıkıştırma ve önbellek optimizasyonu",
] as const;

const portfolioDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Marka kimliğine uygun arayüz yenileme",
  "Kapsamlı UX ve performans denetimi",
  "Core Web Vitals iyileştirmesi",
] as const;

const portfolioDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Next.js Tabanlı Modern Altyapıya Geçiş",
  "Özel Tasarım ve Animasyonlar",
  "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
] as const;

const portfolioSeoTemel = ["301 yönlendirme kurulumu"] as const;

const portfolioSeoProExtras = [
  "Dinamik İçerik Yönetim Paneli",
  "En Fazla 5 Dil Desteği",
] as const;

const portfolioDeliveryProExtras = [
  "Kullanım Kılavuzu ve Kısa Yönetim Eğitimi",
] as const;

// ---------------------------------------------------------------------------
// Kurumsal
// ---------------------------------------------------------------------------

const corporateAnalysisTemel = [
  "Mevcut sitenin teknik, SEO ve güvenlik denetimi",
  "İçerik ve sayfa yapısı analizi",
  "Geçiş takvimi ve risk planı",
] as const;

const corporateDesignTemel = [
  ...commonRedesignItems,
  "Kurumsal kimliğe uygun arayüz yenileme",
  "İçerik migrasyonu",
  "Temel performans ve güvenlik güncellemesi",
] as const;

const corporateDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Bilgi mimarisi yeniden yapılandırma",
  "Premium UI bileşenleri",
  "Erişilebilirlik (WCAG) iyileştirmeleri",
  "Mobil navigasyon ve içerik deneyimi optimizasyonu",
] as const;

const corporateDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
  "Gelişmiş CMS ve İçerik Yönetimi",
  "En Fazla 5 Dil Desteği ve Çoklu Departman Yapısı",
  "API ve Üçüncü Taraf Entegrasyonları",
] as const;

const corporateSeoStandart = [
  "Modern framework geçişi",
  ...seoMigrationStandartItems,
  "Form ve entegrasyon güncellemesi",
] as const;

const corporateSeoPro = [
  "Kapsamlı güvenlik denetimi ve iyileştirme",
  "CDN ve önbellek optimizasyonu",
  "KVKK Uyumlu Çerez Bildirimi",
  "Yedekleme ve geri yükleme planı",
] as const;

const corporateDeliveryProExtras = ["Ekip Eğitimi ve Dokümantasyon"] as const;

// ---------------------------------------------------------------------------
// E-Ticaret
// ---------------------------------------------------------------------------

const ecommerceAnalysisTemel = [
  "Mevcut mağazanın performans ve dönüşüm analizi",
  "Ürün ve kategori migrasyon planı",
  "Ödeme, sipariş ve kargo akışı denetimi",
] as const;

const ecommerceDesignTemel = [
  ...commonRedesignItems,
  "Modern e-ticaret arayüzü",
  "Ürün ve kategori aktarımı",
  "Temel ödeme entegrasyonu güncellemesi",
  "Mobil alışveriş deneyimi iyileştirmesi",
] as const;

const ecommerceDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Gelişmiş ürün filtreleme ve arama",
  "Sepet ve ödeme akışı optimizasyonu",
  "Stok ve varyasyon yönetimi güncellemesi",
  "Kargo entegrasyonu ve teslimat seçenekleri güncellemesi",
] as const;

const ecommerceDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Ölçeklenebilir Modern Altyapıya Geçiş",
  "En Fazla 5 Dil ve Çoklu Para Birimi Desteği",
  "Gelişmiş Kampanya ve Promosyon Modülü",
  "ERP, Muhasebe ve Fatura Entegrasyon Hazırlığı",
] as const;

const ecommerceSeoStandart = [
  "Ürün URL ve meta koruma planı",
  "Product, Offer ve Breadcrumb Schema Yapılandırması",
  "Google Analytics 4 ve dönüşüm takibi yeniden kurulumu",
  "Terk Edilen Sepet Altyapısı",
] as const;

const ecommerceSeoPro = [
  "Yüksek trafik ve kampanya dönemi optimizasyonu",
  "PCI-DSS Uyumlu Sanal POS Entegrasyon Altyapısı",
  "Gelişmiş güvenlik ve fraud koruması",
  "Anlık stok senkronizasyonu",
] as const;

const ecommerceDeliveryTemel = [
  "Canlıya Alma ve Test Siparişi Doğrulaması",
  "15 Gün Teknik Destek",
] as const;

const ecommerceDeliveryProExtras = [
  "Mağaza Yönetimi Eğitimi ve Dokümantasyon",
] as const;

export const refreshPackagesTr = {
  portfolio: {
    title: "Portföy / Tanıtım",
    description:
      "Mevcut tanıtım sitenizi modern tasarım, hızlı altyapı ve SEO korumasıyla yenileyin; içeriklerinizi kaybetmeden güçlü bir dijital vitrin oluşturun.",
    introP2:
      "Girişim, Profesyonel ve Premium seviyeleriyle tanıtım sitenizin yenileme kapsamını netleştiririz. SEO sıralamanızı koruyarak performans ve dönüşüm odaklı bir yapıya geçiş planlıyoruz.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
        revisions: "2",
        scope: "1-8",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...portfolioAnalysisTemel],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...portfolioDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...portfolioSeoTemel],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
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
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...portfolioDesignStandart],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...seoMigrationStandartItems],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
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
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...portfolioDesignPro],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...seoMigrationProItems, ...portfolioSeoProExtras],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryPro, ...portfolioDeliveryProExtras],
          },
        ],
      },
    },
  },

  corporate: {
    title: "Kurumsal",
    description:
      "Kurumsal web sitenizi güncel tasarım, güvenli altyapı ve planlı geçişle yenileyin; marka güveninizi ve organik görünürlüğünüzü koruyun.",
    introP2:
      "Girişim, Profesyonel ve Premium seviyeleriyle kurumsal sitenizin yenileme kapsamını netleştiririz. Mevcut içerik ve entegrasyonlarınızı koruyarak kesintisiz geçiş sağlıyoruz.",
    tiers: {
      temel: {
        deliveryDays: "10-18",
        revisions: "2",
        scope: "1-15",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...corporateAnalysisTemel],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...corporateDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
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
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...corporateDesignStandart],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...corporateSeoStandart],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
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
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...corporateDesignPro],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...corporateSeoPro],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryPro, ...corporateDeliveryProExtras],
          },
        ],
      },
    },
  },

  ecommerce: {
    title: "E-Ticaret",
    description:
      "E-ticaret sitenizi modern altyapı, akıcı ödeme deneyimi ve SEO korumasıyla yenileyin; ürün verilerinizi ve sıralamanızı riske atmadan dönüşüm odaklı bir mağazaya geçin.",
    introP2:
      "Girişim, Profesyonel ve Premium seviyeleriyle e-ticaret mağazanızın yenileme kapsamını netleştiririz. Ürün verilerinizi ve organik görünürlüğünüzü koruyarak dönüşüm odaklı bir mağazaya geçiyoruz.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "2",
        scope: "1-20",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...ecommerceAnalysisTemel],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...ecommerceDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...ecommerceDeliveryTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "21-35",
        revisions: "4",
        scope: "1-40",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...ecommerceDesignStandart],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...ecommerceSeoStandart],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
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
            label: REFRESH_GROUP_ANALYSIS,
            items: [],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...ecommerceDesignPro],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...ecommerceSeoPro],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryPro, ...ecommerceDeliveryProExtras],
          },
        ],
      },
    },
  },
} as const;
