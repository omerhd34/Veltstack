const seoOptimizationTemel = [
  "Site hızı ve Core Web Vitals analizi",
  "Başlık, meta ve H etiketi denetimi",
  "Mobil uyumluluk kontrolü",
  "Tarama hataları ve indeksleme raporu",
  "Dahil sayfalarda on-page SEO",
  "Google Search Console ve Analytics 4 kurulumu",
  "Google Business Profile ve yerel görünürlük",
  "Anahtar kelime pozisyon takibi",
] as const;

const seoOptimizationStandart = [
  ...seoOptimizationTemel,
  "Teknik SEO, site mimarisi ve indeksleme denetimi",
  "Schema ve yapılandırılmış veri uygulaması",
  "Rakip görünürlük ve içerik boşluk analizi",
  "Backlink fırsat ve otorite değerlendirmesi",
  "Aylık içerik takvimi ve on-page optimizasyon",
] as const;

const seoOptimizationPro = [
  ...seoOptimizationStandart,
  "Sınırsız sayfa SEO kapsamı",
  "Çoklu dil (hreflang) ve domain SEO yönetimi",
  "Log analizi ve crawl budget optimizasyonu",
  "E-ticaret ürün, kategori ve filtre SEO",
  "Gelişmiş schema ve zengin sonuç optimizasyonu",
] as const;

const seoAdsTemel = ["Aylık performans ve görünürlük özeti"] as const;

const seoAdsStandart = [
  ...seoAdsTemel,
  "Google Ads (Arama Ağı) kampanya kurulumu",
  "Meta Pixel ve temel dönüşüm ölçümü",
  "Aylık SEO ve reklam performans raporu",
  "Öncelikli iyileştirme önerileri ve aksiyon takibi",
] as const;

const seoAdsPro = [
  ...seoAdsStandart,
  "100+ anahtar kelime konum ve trend takibi",
  "Google Ads ve Meta Ads kampanya yönetimi",
  "Conversion API ve gelişmiş dönüşüm izleme",
  "Özel Looker Studio paneli",
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
        featureGroups: [
          {
            label: SEO_GROUP_OPTIMIZATION,
            items: [...seoOptimizationTemel],
          },
          {
            label: SEO_GROUP_ADS,
            items: [...seoAdsTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "10-14",
        pages: "25",
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
