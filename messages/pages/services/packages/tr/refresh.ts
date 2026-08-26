// ---------------------------------------------------------------------------
// Ortak (paylaşılan) özellik grupları — yenileme paketleri
// ---------------------------------------------------------------------------

const commonRedesignItems = [
  "Mobil, tablet ve masaüstünde akıcı responsive tasarım",
  "SSL / HTTPS ve güvenlik yapılandırması",
  "Hızlı yükleme ve Core Web Vitals optimizasyonu",
] as const;

const standartDesignExtras = [
  "Koyu / açık tema seçeneği",
  "Akıcı sayfa geçişleri ve mikro etkileşimler",
] as const;

const commonDeliveryTemel = ["Canlıya alma ve DNS geçiş desteği"] as const;

const commonDeliveryStandart = [
  "Kaynak kodu ve proje dosyalarının teslimi",
  "Canlıya alma ve geçiş desteği",
] as const;

const proDeliveryExtras = [
  "Ön izleme ortamında test ve planlı canlıya geçiş",
] as const;

const commonDeliveryPro = [
  ...commonDeliveryStandart,
  ...proDeliveryExtras,
] as const;

const commonSupportStandartItems = [
  "Geçiş sonrası teknik destek",
] as const;

const proSupportExtras = [
  "Kullanım kılavuzu ve kısa yönetim eğitimi",
  "Öncelikli teknik destek",
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
  "Google Ads dönüşüm takibi ve etiket kurulumu",
  "Meta Pixel ve dönüşüm olayları (Facebook / Instagram)",
] as const;

const REFRESH_GROUP_ANALYSIS = "Analiz & Planlama";
const REFRESH_GROUP_DESIGN = "Tasarım & Yenileme";
const REFRESH_GROUP_SEO = "SEO & Geçiş Koruması";
const REFRESH_GROUP_DELIVERY = "Yayın & Teslimat";
const REFRESH_GROUP_SUPPORT = "Teknik Destek";

// ---------------------------------------------------------------------------
// Portfolyo / Kişisel
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

const portfolioSeoTemel = [
  "301 yönlendirme kurulumu",
  "Mevcut meta başlık ve açıklama koruma planı",
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
  "Çoklu dil ve departman yapısı",
  "API ve üçüncü taraf entegrasyonları",
  "CDN ve önbellek optimizasyonu",
  "Kapsamlı güvenlik denetimi ve iyileştirme",
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
  "Çoklu dil ve para birimi desteği",
  "Gelişmiş kampanya ve promosyon modülü",
  "ERP, muhasebe ve fatura entegrasyon hazırlığı",
  "PCI-DSS uyumlu sanal POS entegrasyon altyapısı",
  "Gelişmiş güvenlik ve dolandırıcılık koruması",
  "Anlık stok senkronizasyonu",
] as const;

const ecommerceSeoTemel = [
  "Ürün URL ve meta koruma planı",
  "301 yönlendirme kurulumu",
] as const;

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

// ---------------------------------------------------------------------------
// Tek Sayfalık
// ---------------------------------------------------------------------------

const onePageAnalysis = [
  "Mevcut landing page performans ve dönüşüm analizi",
  "Bölüm / CTA envanteri ve migrasyon planı",
  "URL ve 301 yönlendirme stratejisi",
] as const;

const onePageDesignTemel = [
  ...commonRedesignItems,
  "Tek sayfa içeriğinin güvenli aktarımı",
  "Görsel sıkıştırma ve önbellek optimizasyonu",
] as const;

const onePageDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Dönüşüm odaklı bölüm ve CTA yenileme",
  "Video arka plan / gömülü demo desteği",
  "Core Web Vitals iyileştirmesi",
] as const;

const onePageDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Next.js tabanlı modern altyapıya geçiş",
  "Özel tasarım ve animasyonlar",
  "Canlı chat entegrasyonu",
  "İstenilen hosting kullanımı (Vercel, Ixirhost, AWS vb.)",
] as const;

// ---------------------------------------------------------------------------
// Katalog / B2B
// ---------------------------------------------------------------------------

const catalogAnalysis = [
  "Mevcut katalog yapısı ve teklif akışı analizi",
  "Ürün / hizmet ve kategori migrasyon planı",
  "Bayi / B2B erişim ve fiyat görünürlüğü denetimi",
] as const;

const catalogDesignTemel = [
  ...commonRedesignItems,
  "Katalog listesi ve detay sayfalarının yenilenmesi",
  "Ürün / hizmet verilerinin aktarımı",
  "Teklif formu güncellemesi",
] as const;

const catalogDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Gelişmiş filtre ve arama yenileme",
  "İstenilen ödeme altyapısı kullanımı (iyzico, PayTR…)",
  "Teklif takip ve B2B fiyat görünümü iyileştirmesi",
] as const;

const catalogDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Ölçeklenebilir modern altyapıya geçiş",
  "Bayi özel fiyat / stok görünümü",
  "İstenilen hosting kullanımı (Vercel, Ixirhost, AWS vb.)",
  "CRM entegrasyonuna hazır teklif akışı",
] as const;

// ---------------------------------------------------------------------------
// İlan / Emlak
// ---------------------------------------------------------------------------

const listingAnalysis = [
  "Mevcut ilan yapısı ve arama deneyimi analizi",
  "İlan, fotoğraf ve özellik migrasyon planı",
  "Danışman / ofis yapısı ve yetkilendirme denetimi",
] as const;

const listingDesignTemel = [
  ...commonRedesignItems,
  "İlan listesi ve detay sayfalarının yenilenmesi",
  "İlan verilerinin güvenli aktarımı",
  "Talep / iletişim formu güncellemesi",
] as const;

const listingDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Harita ve gelişmiş filtre yenileme",
  "Favori / karşılaştırma deneyimi iyileştirmesi",
  "Danışman profil sayfalarının güncellenmesi",
] as const;

const listingDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Ölçeklenebilir modern altyapıya geçiş",
  "Üye paneli ile ilan yönetimi yenileme",
  "İstenilen hosting kullanımı (Vercel, Ixirhost, AWS vb.)",
  "Öne çıkan ilan ve çoklu danışman yetkilendirmesi",
] as const;

// ---------------------------------------------------------------------------
// Rezervasyon
// ---------------------------------------------------------------------------

const bookingAnalysis = [
  "Mevcut rezervasyon ve takvim akışı analizi",
  "Hizmet / kaynak ve müsaitlik migrasyon planı",
  "Ödeme ve bildirim süreçlerinin denetimi",
] as const;

const bookingDesignTemel = [
  ...commonRedesignItems,
  "Rezervasyon sayfalarının yenilenmesi",
  "Takvim ve müsaitlik aktarımı",
  "Rezervasyon bildirimlerinin güncellenmesi",
] as const;

const bookingDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Online ödeme ile rezervasyon onay akışı yenileme",
  "İstenilen ödeme altyapısı kullanımı (iyzico, PayTR…)",
  "Kapasite ve iptal kurallarının güncellenmesi",
] as const;

const bookingDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Ölçeklenebilir modern altyapıya geçiş",
  "Çoklu şube / kaynak takvimi yenileme",
  "İstenilen hosting kullanımı (Vercel, Ixirhost, AWS vb.)",
  "Otomatik hatırlatma ve depozito / iade akışı",
] as const;

// ---------------------------------------------------------------------------
// Eğitim / Kurs
// ---------------------------------------------------------------------------

const educationAnalysis = [
  "Mevcut kurs / eğitim yapısı ve kayıt akışı analizi",
  "Kurs, müfredat ve öğrenci verisi migrasyon planı",
  "Ödeme ve içerik erişim süreçlerinin denetimi",
] as const;

const educationDesignTemel = [
  ...commonRedesignItems,
  "Kurs listesi ve detay sayfalarının yenilenmesi",
  "Kurs / program verilerinin aktarımı",
  "Kayıt / başvuru formu güncellemesi",
] as const;

const educationDesignStandart = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Öğrenci üyelik ve kayıt akışı yenileme",
  "İstenilen ödeme altyapısı kullanımı (iyzico, PayTR…)",
  "Ders materyali erişiminin güncellenmesi",
] as const;

const educationDesignPro = [
  ...commonRedesignItems,
  ...standartDesignExtras,
  "Ölçeklenebilir modern altyapıya geçiş",
  "Video ders ve içerik koruması yenileme",
  "İstenilen hosting kullanımı (Vercel, Ixirhost, AWS vb.)",
  "Sertifika / quiz ve eğitmen paneli iyileştirmesi",
] as const;

const makeRefreshTiers = ({
  analysis,
  designTemel,
  designStandart,
  designPro,
  seoTemel,
  deliveryTemel = commonDeliveryTemel,
  deliveryStandart = commonDeliveryStandart,
  deliveryPro = commonDeliveryPro,
  deliveryDays,
}: {
  analysis: readonly string[];
  designTemel: readonly string[];
  designStandart: readonly string[];
  designPro: readonly string[];
  seoTemel: readonly string[];
  deliveryTemel?: readonly string[];
  deliveryStandart?: readonly string[];
  deliveryPro?: readonly string[];
  deliveryDays: { temel: string; standart: string; pro: string };
}) =>
  ({
    temel: {
      deliveryDays: deliveryDays.temel,
      revisions: "2",
      supportDays: "15",
      languages: "1",
      featureGroups: [
        { label: REFRESH_GROUP_ANALYSIS, items: [...analysis] },
        { label: REFRESH_GROUP_DESIGN, items: [...designTemel] },
        { label: REFRESH_GROUP_SEO, items: [...seoTemel] },
        { label: REFRESH_GROUP_DELIVERY, items: [...deliveryTemel] },
        { label: REFRESH_GROUP_SUPPORT, items: [] },
      ],
    },
    standart: {
      deliveryDays: deliveryDays.standart,
      revisions: "4",
      supportDays: "30",
      languages: "1-5",
      featureGroups: [
        { label: REFRESH_GROUP_ANALYSIS, items: [...analysis] },
        { label: REFRESH_GROUP_DESIGN, items: [...designStandart] },
        { label: REFRESH_GROUP_SEO, items: [...seoMigrationStandartItems] },
        { label: REFRESH_GROUP_DELIVERY, items: [...deliveryStandart] },
        {
          label: REFRESH_GROUP_SUPPORT,
          items: [...commonSupportStandartItems],
        },
      ],
    },
    pro: {
      deliveryDays: deliveryDays.pro,
      revisions: "6",
      supportDays: "45",
      languages: "Sınırsız",
      featureGroups: [
        { label: REFRESH_GROUP_ANALYSIS, items: [...analysis] },
        { label: REFRESH_GROUP_DESIGN, items: [...designPro] },
        { label: REFRESH_GROUP_SEO, items: [...seoMigrationProItems] },
        { label: REFRESH_GROUP_DELIVERY, items: [...deliveryPro] },
        {
          label: REFRESH_GROUP_SUPPORT,
          items: [...commonSupportStandartItems, ...proSupportExtras],
        },
      ],
    },
  }) as const;

export const refreshPackagesTr = {
  onePage: {
    title: "Tek Sayfalık",
    description:
      "Mevcut landing page’inizi modern tasarım, hızlı altyapı ve SEO korumasıyla yenileyin; dönüşüm odaklı tek sayfalık bir vitrine geçin.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleriyle tek sayfalık sitenizin yenileme kapsamını netleştiririz. Kısa sürede yayına alınabilir, SEO sıralamanızı koruyan bir geçiş planlıyoruz.",
    tiers: makeRefreshTiers({
      analysis: onePageAnalysis,
      designTemel: onePageDesignTemel,
      designStandart: onePageDesignStandart,
      designPro: onePageDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "5-10", standart: "10-14", pro: "14-21" },
    }),
  },

  portfolio: {
    title: "Portfolyo / Kişisel",
    description:
      "Mevcut tanıtım sitenizi modern tasarım, hızlı altyapı ve SEO korumasıyla yenileyin; içeriklerinizi kaybetmeden güçlü bir dijital vitrin oluşturun.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleriyle tanıtım sitenizin yenileme kapsamını netleştiririz. Kapsamlı pakette dil sınırı olmadan ölçeklenebilirsiniz. SEO sıralamanızı koruyarak performans ve dönüşüm odaklı bir yapıya geçiş planlıyoruz.",
    tiers: {
      temel: {
        deliveryDays: "7-14",
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
          { label: REFRESH_GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "14-21",
        revisions: "4",
        supportDays: "30",
        languages: "1-5",
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
          {
            label: REFRESH_GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "21-30",
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
            items: [...commonDeliveryPro],
          },
          {
            label: REFRESH_GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
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
      "Girişim, Profesyonel ve Kapsamlı paketleriyle kurumsal sitenizin yenileme kapsamını netleştiririz. Kapsamlı pakette dil sınırı olmadan ölçeklenebilirsiniz. Mevcut içerik ve entegrasyonlarınızı koruyarak kesintisiz geçiş sağlıyoruz.",
    tiers: {
      temel: {
        deliveryDays: "10-18",
        revisions: "2",
        supportDays: "15",
        languages: "1",
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
          { label: REFRESH_GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "18-28",
        revisions: "4",
        supportDays: "30",
        languages: "1-5",
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
          {
            label: REFRESH_GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "28-42",
        revisions: "6",
        supportDays: "45",
        languages: "Sınırsız",
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
          {
            label: REFRESH_GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
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
      "Girişim, Profesyonel ve Kapsamlı paketleriyle e-ticaret mağazanızın yenileme kapsamını netleştiririz. Kapsamlı pakette dil sınırı olmadan ölçeklenebilirsiniz. Ürün verilerinizi ve organik görünürlüğünüzü koruyarak dönüşüm odaklı bir mağazaya geçiyoruz.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "2",
        supportDays: "15",
        languages: "1",
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
          { label: REFRESH_GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "21-35",
        revisions: "4",
        supportDays: "30",
        languages: "1-5",
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
          {
            label: REFRESH_GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "35-49",
        revisions: "6",
        supportDays: "45",
        languages: "Sınırsız",
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
          {
            label: REFRESH_GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
          },
        ],
      },
    },
  },

  catalog: {
    title: "Katalog / B2B",
    description:
      "Mevcut katalog veya B2B vitrininizi modern arayüz, teklif akışı ve SEO korumasıyla yenileyin; ürün verilerinizi kaybetmeden büyümeye hazır hale getirin.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleriyle katalog yenileme kapsamını netleştiririz. Kapsamlı pakette bayi fiyatı ve CRM hazırlığıyla ölçeklenebilirsiniz.",
    tiers: makeRefreshTiers({
      analysis: catalogAnalysis,
      designTemel: catalogDesignTemel,
      designStandart: catalogDesignStandart,
      designPro: catalogDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "10-18", standart: "18-28", pro: "28-42" },
    }),
  },

  listing: {
    title: "İlan / Emlak",
    description:
      "İlan veya emlak sitenizi modern arama, galeri ve talep akışıyla yenileyin; mevcut ilanlarınızı ve organik görünürlüğünüzü koruyun.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleriyle ilan sitenizin yenileme kapsamını netleştiririz. Kapsamlı pakette üye paneli ve çoklu danışman yönetimiyle büyüyebilirsiniz.",
    tiers: makeRefreshTiers({
      analysis: listingAnalysis,
      designTemel: listingDesignTemel,
      designStandart: listingDesignStandart,
      designPro: listingDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "10-18", standart: "18-28", pro: "28-42" },
    }),
  },

  booking: {
    title: "Rezervasyon",
    description:
      "Rezervasyon sisteminizi modern takvim, ödeme ve bildirim akışıyla yenileyin; mevcut randevu verilerinizi kaybetmeden geçiş yapın.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleriyle rezervasyon yenileme kapsamını netleştiririz. Kapsamlı pakette çoklu şube ve otomatik hatırlatmalarla ölçeklenebilirsiniz.",
    tiers: makeRefreshTiers({
      analysis: bookingAnalysis,
      designTemel: bookingDesignTemel,
      designStandart: bookingDesignStandart,
      designPro: bookingDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "10-18", standart: "18-28", pro: "28-42" },
    }),
  },

  education: {
    title: "Eğitim / Kurs",
    description:
      "Kurs veya eğitim platformunuzu modern kayıt, içerik ve ödeme deneyimiyle yenileyin; öğrenci ve kurs verilerinizi koruyarak geçiş yapın.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleriyle eğitim sitenizin yenileme kapsamını netleştiririz. Kapsamlı pakette video ders ve eğitmen paneliyle büyüyebilirsiniz.",
    tiers: makeRefreshTiers({
      analysis: educationAnalysis,
      designTemel: educationDesignTemel,
      designStandart: educationDesignStandart,
      designPro: educationDesignPro,
      seoTemel: portfolioSeoTemel,
      deliveryDays: { temel: "10-18", standart: "18-28", pro: "28-42" },
    }),
  },
} as const;
