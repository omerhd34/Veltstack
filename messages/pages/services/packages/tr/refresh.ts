// ---------------------------------------------------------------------------
// Ortak (paylaşılan) özellik grupları — yenileme paketleri
// ---------------------------------------------------------------------------

const commonRedesignItems = [
  "Mobil, tablet ve masaüstünde akıcı responsive tasarım",
  "SSL / HTTPS ve güvenlik yapılandırması",
  "Hızlı yükleme ve Core Web Vitals optimizasyonu",
] as const;

const standartDesignExtras = [
  "Koyu / açık mod desteği",
  "Akıcı sayfa geçişleri ve mikro etkileşimler",
] as const;

const commonDeliveryTemel = [
  "Canlıya alma ve DNS geçiş desteği",
] as const;

const commonDeliveryStandart = [
  "Kaynak kodu ve proje dosyalarının teslimi",
  "Canlıya alma ve geçiş desteği",
] as const;

const commonDeliveryPro = [
  "Kaynak kodu ve proje dosyalarının teslimi",
  "Canlıya alma ve geçiş desteği",
] as const;

const seoMigrationStandartItems = [
  "Meta, Open Graph ve schema verilerinin korunması",
  "Gelişmiş 301 yönlendirme haritası",
  "Google Search Console geçiş takibi",
  "Sitemap ve robots.txt güncellemesi",
] as const;

const seoMigrationProItems = [
  ...seoMigrationStandartItems,
  "Kapsamlı teknik SEO ve indeksleme optimizasyonu",
  "Google Analytics 4 ve dönüşüm takibi",
] as const;

const REFRESH_GROUP_ANALYSIS = "Analiz & Planlama";
const REFRESH_GROUP_DESIGN = "Tasarım & Yenileme";
const REFRESH_GROUP_SEO = "SEO & Geçiş Koruması";
const REFRESH_GROUP_DELIVERY = "Yayın & Teslimat";

// ---------------------------------------------------------------------------
// Portföy / Tanıtım
// ---------------------------------------------------------------------------

const portfolioAnalysis = [
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
  "Next.js tabanlı modern altyapıya geçiş",
  "Özel tasarım ve animasyonlar",
  "Yüksek trafiğe hazır ölçeklenebilir altyapı",
  "Dinamik içerik yönetim paneli",
] as const;

const portfolioSeoTemel = ["301 yönlendirme kurulumu"] as const;

const portfolioDeliveryProExtras = [
  "Kullanım kılavuzu ve kısa yönetim eğitimi",
] as const;

// ---------------------------------------------------------------------------
// Kurumsal
// ---------------------------------------------------------------------------

const corporateAnalysis = [
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
  "Form ve entegrasyon güncellemesi",
  "KVKK uyumlu çerez bildirimi",
] as const;

const corporateDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Yüksek trafiğe hazır ölçeklenebilir altyapı",
  "Gelişmiş CMS ve içerik yönetimi",
  "En Fazla 5 Dil Desteği ve çoklu departman yapısı",
  "API ve üçüncü taraf entegrasyonları",
  "CDN ve önbellek optimizasyonu",
  "Kapsamlı güvenlik denetimi ve iyileştirme",
  "Form ve entegrasyon güncellemesi",
  "KVKK uyumlu çerez bildirimi",
] as const;

const corporateSeoTemel = ["301 yönlendirme kurulumu"] as const;

const corporateSeoStandart = [...seoMigrationStandartItems] as const;

const corporateSeoPro = [...seoMigrationProItems] as const;

const corporateDeliveryProExtras = [
  "Yedekleme ve geri yükleme planı",
  "Ekip eğitimi ve dokümantasyon",
] as const;

// ---------------------------------------------------------------------------
// E-Ticaret
// ---------------------------------------------------------------------------

const ecommerceAnalysis = [
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
  "Terk edilen sepet hatırlatma altyapısı",
] as const;

const ecommerceDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Ölçeklenebilir modern altyapıya geçiş",
  "En Fazla 5 Dil ve çoklu para birimi desteği",
  "Gelişmiş kampanya ve promosyon modülü",
  "ERP, muhasebe ve fatura entegrasyon hazırlığı",
  "PCI-DSS uyumlu sanal POS entegrasyon altyapısı",
  "Gelişmiş güvenlik ve fraud koruması",
  "Anlık stok senkronizasyonu",
  "Terk edilen sepet hatırlatma altyapısı",
] as const;

const ecommerceSeoTemel = ["Ürün URL ve meta koruma planı"] as const;

const ecommerceSeoStandart = [
  "Ürün URL ve meta koruma planı",
  "Product, Offer ve Breadcrumb schema yapılandırması",
  "Google Analytics 4 ve dönüşüm takibi yeniden kurulumu",
] as const;

const ecommerceSeoPro = [
  ...ecommerceSeoStandart,
  "Yüksek trafik ve kampanya dönemi SEO optimizasyonu",
] as const;

const ecommerceDeliveryTemel = [
  "Canlıya alma ve test siparişi doğrulaması",
] as const;

const ecommerceDeliveryProExtras = [
  "Mağaza yönetimi eğitimi ve dokümantasyon",
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
        price: "15.000 ₺",
        revisions: "2",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...portfolioAnalysis],
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
        price: "30.000 ₺",
        revisions: "4",
        supportDays: "30",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...portfolioAnalysis],
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
        price: "40.000 ₺",
        revisions: "6",
        supportDays: "45",
        languages: "Sınırsız",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...portfolioAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...portfolioDesignPro],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...seoMigrationProItems],
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
        price: "25.000 ₺",
        revisions: "2",
        supportDays: "15",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...corporateAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...corporateDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...corporateSeoTemel],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...commonDeliveryTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "18-28",
        price: "40.000 ₺",
        revisions: "4",
        supportDays: "30",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...corporateAnalysis],
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
        price: "65.000 ₺",
        revisions: "6",
        supportDays: "45",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...corporateAnalysis],
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
        price: "35.000 ₺",
        revisions: "2",
        supportDays: "15",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...ecommerceAnalysis],
          },
          {
            label: REFRESH_GROUP_DESIGN,
            items: [...ecommerceDesignTemel],
          },
          {
            label: REFRESH_GROUP_SEO,
            items: [...ecommerceSeoTemel],
          },
          {
            label: REFRESH_GROUP_DELIVERY,
            items: [...ecommerceDeliveryTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "21-35",
        price: "55.000 ₺",
        revisions: "4",
        supportDays: "30",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...ecommerceAnalysis],
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
        price: "80.000 ₺",
        revisions: "6",
        supportDays: "45",
        featureGroups: [
          {
            label: REFRESH_GROUP_ANALYSIS,
            items: [...ecommerceAnalysis],
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
