// ---------------------------------------------------------------------------
// SEO Hizmetleri — kademe bazlı özellikler
// ---------------------------------------------------------------------------

const seoOptimizationTemelAudit = [
  "Site hızı, Core Web Vitals ve performans analizi",
  "Başlık, meta açıklama ve H etiketi denetimi",
  "Mobil uyumluluk ve kullanılabilirlik kontrolü",
  "Tarama hataları ve indekslenebilirlik raporu",
] as const;

const seoOptimizationTemelSetup = [
  "Dahil sayfalarda on-page SEO optimizasyonu",
  "Google Search Console ve Google Analytics 4 kurulumu",
  "Google Business Profile ve yerel arama görünürlüğü",
  "Anahtar kelime pozisyon takibi",
  "Aylık performans ve görünürlük özeti",
] as const;

const seoOptimizationStandart = [
  "Teknik SEO, site mimarisi ve indeksleme denetimi",
  "Schema ve yapılandırılmış veri uygulaması",
  "Rakip görünürlük ve içerik boşluk analizi",
  "Backlink fırsat ve otorite değerlendirmesi",
  "Aylık içerik takvimi ve on-page optimizasyon",
] as const;

const seoOptimizationPro = [
  "Sınırsız sayfa SEO kapsamı",
  "Çoklu dil (hreflang) ve domain SEO yönetimi",
  "Log analizi ve crawl budget optimizasyonu",
  "E-ticaret ürün, kategori ve filtre sayfası SEO",
  "Gelişmiş schema ve zengin sonuç optimizasyonu",
] as const;

const seoAdsStandart = [
  "Google Ads (Arama Ağı) kampanya kurulumu ve yapılandırması",
  "Meta Pixel ve temel dönüşüm ölçümleme kurulumu",
  "Aylık detaylı SEO ve reklam performans raporu",
  "Öncelikli iyileştirme önerileri ve aksiyon takibi",
] as const;

const seoAdsPro = [
  "100+ anahtar kelime konum ve trend takibi",
  "Google Ads ve Meta Ads kampanya yönetimi",
  "Conversion API ve gelişmiş dönüşüm izleme kurulumu",
  "Özel Looker Studio paneli ve raporlama",
  "Haftalık performans raporu",
  "Aylık strateji görüşmesi",
  "Öncelikli teknik destek",
] as const;

const SEO_GROUP_OPTIMIZATION = "SEO & Optimizasyon";
const SEO_GROUP_ADS = "Reklam & Raporlama";

export const seoPackagesTr = {
  seoServices: {
    title: "Dijital Pazarlama & SEO",
    description:
      "Teknik denetimden aylık optimizasyona, yerel görünürlükten reklam kampanyalarına kadar arama motorlarında sürdürülebilir büyüme için uçtan uca SEO ve dijital pazarlama desteği.",
    tiers: {
      temel: {
        deliveryDays: "7-10",
        pages: "10",
        scope: "10-25",
        featureGroups: [
          {
            label: SEO_GROUP_OPTIMIZATION,
            items: [
              ...seoOptimizationTemelAudit,
              ...seoOptimizationTemelSetup,
            ],
          },
          {
            label: SEO_GROUP_ADS,
            items: [],
          },
        ],
      },
      standart: {
        deliveryDays: "10-14",
        pages: "25",
        scope: "25-75",
        featureGroups: [
          {
            label: SEO_GROUP_OPTIMIZATION,
            items: [...seoOptimizationStandart],
          },
          {
            label: SEO_GROUP_ADS,
            items: [...seoAdsStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "14-21",
        pages: "∞",
        scope: "100+",
        featureGroups: [
          {
            label: SEO_GROUP_OPTIMIZATION,
            items: [...seoOptimizationPro],
          },
          {
            label: SEO_GROUP_ADS,
            items: [...seoAdsPro],
          },
        ],
      },
    },
  },
} as const;
