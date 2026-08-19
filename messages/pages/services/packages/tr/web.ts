// ---------------------------------------------------------------------------
// Ortak (paylaşılan) özellik grupları
// ---------------------------------------------------------------------------
const commonDesignItems = [
  "Telefon, tablet ve bilgisayarda uyumlu (responsive) tasarım",
  "Güvenli bağlantı (HTTPS) ve temel güvenlik yapılandırması",
  "Hızlı açılış ve Core Web Vitals optimizasyonu",
  "Erişilebilir, modern ve okunaklı arayüz",
] as const;

const standartDesignExtras = [
  "Akıcı sayfa geçişleri ve mikro animasyonlar",
] as const;

const proDesignExtras = [
  "Özel tasarım detayları ve gelişmiş animasyonlar",
  "Yüksek trafiğe hazır ölçeklenebilir altyapı",
] as const;

const standartPanelExtras = ["Koyu / açık tema seçeneği"] as const;

const portfolioPanelExtras = [
  "Proje ve portföy galerisi yönetimi",
  "Hizmet ve yetenek vitrin yönetimi",
  "Müşteri yorumu ve referans yönetimi",
  "Blog yazısı ekleme ve düzenleme",
  "Görsel yükleme ve medya kütüphanesi",
  "Kod bilmeden metin düzenleme (zengin editör)",
  "Taslak kaydetme ve yayınlama",
  "Panelden sayfa başlığı ve açıklama düzenleme",
] as const;

const corporatePanelExtras = [
  "Referans ve proje galerisi yönetimi",
  "Ekip ve departman sayfası yönetimi",
  "SSS (sık sorulan sorular) yönetimi",
  "Blog yazısı ekleme ve düzenleme",
  "Görsel yükleme ve medya kütüphanesi",
  "Kod bilmeden metin düzenleme (zengin editör)",
  "Taslak kaydetme ve yayınlama",
  "Panelden sayfa başlığı ve açıklama düzenleme",
] as const;

const commonDeliveryItems = [
  "Kaynak kodu ve proje dosyalarının teslimi",
  "Canlıya alma ve yayına geçiş desteği",
  "Alan adı (domain), www ve yönlendirme ayarları",
  "Hosting kurulumu ve yayın rehberi",
  "Performans hedefi doğrulaması (Google PageSpeed)",
] as const;

const freeDomainHosting = ["1 yıl ücretsiz alan adı ve hosting"] as const;

const standartDeliveryItems = [
  ...freeDomainHosting,
  ...commonDeliveryItems,
] as const;

const proDeliveryExtras = [
  "Staging ortamı kurulumu ve kontrollü canlıya geçiş",
] as const;

const proDeliveryItems = [
  ...freeDomainHosting,
  ...commonDeliveryItems,
  ...proDeliveryExtras,
] as const;

const commonSupportStandartItems = [
  "Kullanım kılavuzu ve kısa yönetim eğitimi",
] as const;

const proSupportExtras = ["Öncelikli teknik destek"] as const;

const GROUP_DEV = "Tasarım & Altyapı";
const GROUP_PANEL = "İçerik & Yönetim";
const GROUP_LAUNCH = "Yayın & Teslimat";
const GROUP_SUPPORT = "Teknik Destek";
const GROUP_STORE = "Mağaza & Ödeme";

const commonSeoItems = [
  "Site haritası (sitemap) ve robots.txt ayarları",
] as const;

const commonIntegrationItems = [
  "KVKK’ya uygun çerez uyarısı ve gizlilik sayfası",
  "İletişim formu, harita ve telefon / e-posta gibi hızlı iletişim bağlantıları",
] as const;

const tierSeoTemelItems = [
  ...commonSeoItems,
  ...commonIntegrationItems,
] as const;

const tierSeoStandartItems = [
  ...commonSeoItems,
  ...commonIntegrationItems,
  "Meta, Open Graph ve sosyal medya önizleme optimizasyonu",
  "Aramada görünürlük takibi (Google Search Console)",
  "Ziyaretçi ve trafik ölçümü (Google Analytics 4)",
] as const;

const tierSeoProItems = [
  ...tierSeoStandartItems,
  "Arama sonuçlarında daha iyi yer almak için teknik SEO iyileştirmesi",
  "Kurumsal bilgi, breadcrumb ve zengin sonuç (schema) yapılandırması",
  "Dönüşüm takibi (form, tıklama, CTA)",
  "Canlı destek veya WhatsApp entegrasyonu",
  "CRM / e-posta pazarlama araçları entegrasyonu",
] as const;

const ecommerceStoreCommonItems = [
  "Ürün listesi ve ürün detay sayfaları",
  "Sepet ve ödeme adımları",
  "Kargo firması entegrasyonu",
  "Otomatik sipariş e-posta bildirimleri",
  "Mesafeli satış sözleşmesi ve yasal sayfalar",
  "Sipariş takip ekranı",
  "Havale / EFT ödeme seçeneği",
] as const;

const ecommerceStoreStandartExtras = [
  "iyzico, PayTR gibi sanal POS entegrasyonu",
  "Üyelik, giriş ve profil sayfaları",
  "Favoriler / istek listesi",
  "Ürün yorumu, puanlama ve fotoğraflı değerlendirme",
] as const;

const ecommerceStoreProExtras = [
  "Üye olmadan alışveriş (misafir ödeme)",
  "Birden fazla kargo firması entegrasyonu",
  "Yarım bırakılan sepet hatırlatma e-postaları",
  "“Bunu da beğenebilirsiniz” ürün önerileri",
  "Fatura ve e-arşiv entegrasyonuna hazır altyapı",
] as const;

const ecommercePanelCommonItems = [
  "Ürün, kategori ve sipariş yönetimi",
  "Temel stok takibi",
] as const;

const ecommercePanelStandartExtras = [
  "Mağaza yönetim paneli",
  "Müşteri ve stok yönetimi",
  "Renk, beden gibi ürün seçenekleri ve etiketler",
  "Düşük stok uyarıları",
  "Kupon ve kampanya yönetimi",
] as const;

const ecommercePanelProExtras = [
  "Ürün seçeneklerine göre değişen fiyat yönetimi",
  "Excel ile toplu ürün yükleme / indirme",
  "Birden fazla para birimi desteği (₺, $, € ...)",
  "Blog ve içerik yayınlama",
  "SMS ve pazarlama araçları entegrasyonu",
] as const;

export const webPackagesTr = {
  portfolio: {
    title: "Portföy / Tanıtım",
    description:
      "Kişisel markanızı veya işletmenizi güven veren modern bir web sitesiyle öne çıkarın. Portföyünüzü, hizmetlerinizi ve hikâyenizi ziyaretçilere net ve etkileyici bir vitrinde sunun.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleri farklı ölçeklerdeki tanıtım projelerine uyum sağlar. Kapsamı ihtiyaçlarınıza göre netleştirip, büyüdükçe genişleyebilecek bir yapı kuruyoruz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "10-14",
        revisions: "3",
        supportDays: "15",
        pages: "1-10",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: "SEO & Entegrasyon", items: [...tierSeoTemelItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "21-30",
        revisions: "5",
        supportDays: "30",
        pages: "1-50",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoStandartItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...portfolioPanelExtras],
          },
          {
            label: GROUP_LAUNCH,
            items: [...standartDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "30-45",
        revisions: "7",
        supportDays: "45",
        pages: "Sınırsız",
        languages: "Sınırsız",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...proDesignExtras,
            ],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoProItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...portfolioPanelExtras],
          },
          {
            label: GROUP_LAUNCH,
            items: [...proDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
          },
        ],
      },
    },
  },

  corporate: {
    title: "Kurumsal",
    description:
      "Kurumsal kimliğinizi yansıtan, güven oluşturan ve müşteri kazandırmaya odaklı web sitesi. Hizmetlerinizi, ekibinizi ve iletişim kanallarınızı profesyonel bir yapıda ziyaretçilerinize sunun.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleri kurumsal web projelerinin farklı ölçeklerine uyum sağlar. Kapsamlı pakette sayfa sınırı olmadan büyüyebilirsiniz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-10",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: "SEO & Entegrasyon", items: [...tierSeoTemelItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        supportDays: "30",
        pages: "1-50",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoStandartItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...corporatePanelExtras],
          },
          {
            label: GROUP_LAUNCH,
            items: [...standartDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "42-60",
        revisions: "8",
        supportDays: "45",
        pages: "Sınırsız",
        languages: "Sınırsız",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...proDesignExtras,
            ],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoProItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...corporatePanelExtras],
          },
          {
            label: GROUP_LAUNCH,
            items: [...proDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
          },
        ],
      },
    },
  },

  ecommerce: {
    title: "E-Ticaret",
    description:
      "Online satışa hızlı başlamanız için güvenli ödeme altyapısına sahip modern e-ticaret çözümü. Ürünlerinizi, siparişlerinizi ve müşteri deneyiminizi tek panelden yönetebileceğiniz ölçeklenebilir bir mağaza kurun.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleri farklı ürün katalogları ve sipariş hacimlerine göre şekillenir. Kapsamlı pakette ürün ve kategori sınırı olmadan ölçeklenebilirsiniz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        pages: "1-10",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: "SEO & Entegrasyon", items: [...tierSeoTemelItems] },
          {
            label: GROUP_STORE,
            items: [...ecommerceStoreCommonItems],
          },
          {
            label: GROUP_PANEL,
            items: [...ecommercePanelCommonItems],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        supportDays: "30",
        pages: "1-50",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoStandartItems] },
          {
            label: GROUP_STORE,
            items: [
              ...ecommerceStoreCommonItems,
              ...ecommerceStoreStandartExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [
              ...standartPanelExtras,
              ...ecommercePanelCommonItems,
              ...ecommercePanelStandartExtras,
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...standartDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "56-84",
        revisions: "10",
        supportDays: "45",
        pages: "Sınırsız",
        languages: "Sınırsız",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...proDesignExtras,
            ],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoProItems] },
          {
            label: GROUP_STORE,
            items: [
              ...ecommerceStoreCommonItems,
              ...ecommerceStoreStandartExtras,
              ...ecommerceStoreProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [
              ...standartPanelExtras,
              ...ecommercePanelCommonItems,
              ...ecommercePanelStandartExtras,
              ...ecommercePanelProExtras,
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...proDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
          },
        ],
      },
    },
  },
} as const;
