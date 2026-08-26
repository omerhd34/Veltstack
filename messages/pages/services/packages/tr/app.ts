const commonDesignItems = [
  "iOS ve Android için çapraz platform geliştirme",
  "Marka kimliğine uyumlu UI/UX",
  "Açılış ekranı ve uygulama ikonu",
  "Temel sayfa geçişleri ve navigasyon",
  "Hızlı açılış ve performans optimizasyonu",
] as const;

const standartDesignExtras = [
  "Koyu / açık tema seçeneği",
  "Premium UI bileşenleri",
  "Farklı ekran boyutlarına uyum (telefon ve tablet)",
] as const;

const proDesignExtrasPortfolio = [
  "Tasarıma birebir uyumlu arayüz",
  "Gelişmiş animasyonlar ve mikro etkileşimler",
  "Yüksek performanslı, büyümeye hazır altyapı",
] as const;

const proDesignExtrasCorporate = [
  "Tasarıma birebir uyumlu kurumsal arayüz",
  "Tablet optimizasyonu",
  "Yüksek performanslı, büyümeye hazır altyapı",
] as const;

const proDesignExtrasEcommerce = [
  "Tasarıma birebir uyumlu e-ticaret arayüzü",
  "Özel sepet ve ödeme animasyonları",
  "Yüksek performanslı, büyümeye hazır altyapı",
] as const;

const standartDevExtrasEcommerce = [
  "Gelişmiş filtreleme ve kaydırarak yükleme",
] as const;

const commonDeliveryItems = [
  "Kaynak kodu ve proje dosyalarının teslimi",
] as const;

const standartDeliveryItems = [
  ...commonDeliveryItems,
  "iOS veya Android yayın desteği",
] as const;

const proDeliveryExtras = [
  "Mağaza listeleme materyalleri desteği (açıklama, ekran görüntüsü)",
  "TestFlight / kapalı beta dağıtım desteği",
] as const;

const proDeliveryItems = [
  ...commonDeliveryItems,
  "iOS ve Android mağaza yayın desteği",
  ...proDeliveryExtras,
] as const;

const commonSupportStandartItems = [
  "Kullanım kılavuzu ve kısa yönetim eğitimi",
] as const;

const proSupportExtras = ["Öncelikli teknik destek"] as const;

const GROUP_DEV = "Tasarım & Altyapı";
const GROUP_FEATURES = "İçerik & Özellikler";
const GROUP_INTEGRATION = "Entegrasyon & Güvenlik";
const GROUP_LAUNCH = "Yayın & Teslimat";
const GROUP_SUPPORT = "Teknik Destek";
const GROUP_STORE = "Mağaza & Ödeme";

const commonSecurityItems = ["KVKK’ya uygun gizlilik onay ekranı"] as const;

const tierIntegrationTemelItems = [
  "Temel kullanım analitiği",
  ...commonSecurityItems,
] as const;

const tierIntegrationStandartItems = [
  ...tierIntegrationTemelItems,
  "Sosyal medya paylaşım entegrasyonu",
] as const;

const tierIntegrationProItems = [
  ...tierIntegrationStandartItems,
  "Özel API ve üçüncü parti entegrasyonlar",
  "Gelişmiş analitik ve dönüşüm takibi",
  "KVKK / GDPR uyumlu güvenlik altyapısı",
] as const;

const portfolioFeaturesCommon = [
  "Hakkında, hizmetler ve portföy galerisi",
  "Hizmet ve yetenek vitrin ekranları",
  "İletişim formu ve hızlı ulaşım butonları",
  "Referans ve müşteri yorumu alanı",
] as const;

const portfolioFeaturesStandartExtras = [
  "Push bildirim altyapısı",
  "Offline kullanım ve önbellekleme",
] as const;

const portfolioFeaturesProExtras = [
  "Gelişmiş push ve duyuru yönetimi",
  "Dinamik içerik için CMS entegrasyonu",
  "Derin bağlantı (deep link) ve içerik paylaşımı",
] as const;

const corporateFeaturesCommon = [
  "Duyuru, haber ve içerik ekranları",
  "Hizmetler, kurumsal bilgi ve iletişim sayfaları",
  "Ekip ve departman bilgi ekranları",
  "SSS (sık sorulan sorular) bölümü",
  "Kullanıcı girişi ve iletişim formları",
  "Kurumsal destek kanalları (telefon, e-posta, canlı destek)",
  "Galeri ve video içerik desteği",
  "PDF ve doküman görüntüleme",
] as const;

const corporateFeaturesStandartExtras = [
  "Gruplanmış push bildirim sistemi",
  "Kullanıcı rolleri ve yetkilendirme",
  "Offline içerik görüntüleme ve senkronizasyon",
] as const;

const corporateFeaturesProExtras = [
  "Zengin medya destekli duyurular",
  "Gelişmiş rol tabanlı yetkilendirme",
  "Anket ve geri bildirim modülü",
] as const;

const corporateIntegrationTemelItems = [...tierIntegrationTemelItems] as const;

const corporateIntegrationStandartItems = [
  ...corporateIntegrationTemelItems,
  "Uygulama çökme ve hata takibi",
  "Mevcut şirket sistemleri ile API entegrasyonu",
] as const;

const corporateIntegrationProItems = [
  ...corporateIntegrationStandartItems,
  "CRM / ERP entegrasyonu",
  "Biyometrik giriş (Face ID, parmak izi)",
  "KVKK / GDPR uyumlu güvenlik altyapısı",
] as const;

const ecommerceStoreCommonItems = [
  "Kategori ve ürün listeleme",
  "Ürün detay, galeri ve yakınlaştırma",
  "Ürün arama ve temel filtreleme",
  "Stok durumu ve fiyat gösterimi",
  "Sepet, ödeme ve sipariş takip akışı",
  "Misafir sipariş ve üye kayıt / giriş",
  "Sipariş durumu bildirimleri",
  "Teslimat ve kargo ücreti gösterimi",
] as const;

const ecommerceStoreStandartExtras = [
  "Favoriler ve sipariş geçmişi",
  "Kayıtlı adres yönetimi",
  "Çoklu ödeme (kart, havale)",
] as const;

const ecommerceStoreProExtras = [
  "Gelişmiş stok ve dinamik varyasyon yönetimi",
  "Ürün yorumu ve yıldızlı değerlendirme",
  "Çoklu para birimi desteği",
] as const;

const ecommerceIntegrationTemelItems = [
  "Tekil sanal POS entegrasyonu",
  "Temel kullanım analitiği",
  "Mesafeli satış sözleşmesi modülü",
  ...commonSecurityItems,
] as const;

const ecommerceIntegrationStandartItems = [
  ...ecommerceIntegrationTemelItems,
  "Sipariş ve kampanya push bildirimleri",
  "Kupon ve sepet indirimi desteği",
] as const;

const ecommerceIntegrationProItems = [
  ...ecommerceIntegrationStandartItems,
  "Terk edilen sepet ve kişiselleştirilmiş bildirimler",
  "Gelişmiş e-ticaret dönüşüm analitiği",
  "Kargo, lojistik ve Apple / Google Pay entegrasyonu",
] as const;

export const appPackagesTr = {
  portfolio: {
    title: "Portfolyo / Kişisel",
    description:
      "Markanızı tek dokunuşla tanıtan, güven veren iOS ve Android uygulaması. Portföyünüzü, hizmetlerinizi ve iletişim kanallarınızı kullanıcıların cebine taşıyın.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleri farklı ölçeklerdeki tanıtım uygulamalarına uyum sağlar. iOS ve Android için tek bir projede ilerliyoruz; mağaza yayınından entegrasyonlara kadar yanınızdayız. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: GROUP_FEATURES, items: [...portfolioFeaturesCommon] },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "30-45",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          {
            label: GROUP_FEATURES,
            items: [
              ...portfolioFeaturesCommon,
              ...portfolioFeaturesStandartExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationStandartItems],
          },
          { label: GROUP_LAUNCH, items: [...standartDeliveryItems] },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "45-60",
        revisions: "7",
        supportDays: "45",
        languages: "Sınırsız",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...proDesignExtrasPortfolio,
            ],
          },
          {
            label: GROUP_FEATURES,
            items: [
              ...portfolioFeaturesCommon,
              ...portfolioFeaturesStandartExtras,
              ...portfolioFeaturesProExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationProItems],
          },
          { label: GROUP_LAUNCH, items: [...proDeliveryItems] },
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
      "Çalışanlarınız veya müşterileriniz için güvenilir kurumsal mobil deneyim. İçerik, iletişim ve iş süreçlerinizi iOS ve Android’de tutarlı ve erişilebilir bir arayüzle sunun.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleri kurumsal mobil projelerin farklı ölçeklerine uyum sağlar. Kapsamlı pakette dil sınırı olmadan ölçeklenebilirsiniz. iOS ve Android için tek bir projede ilerliyoruz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: GROUP_FEATURES, items: [...corporateFeaturesCommon] },
          {
            label: GROUP_INTEGRATION,
            items: [...corporateIntegrationTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          {
            label: GROUP_FEATURES,
            items: [
              ...corporateFeaturesCommon,
              ...corporateFeaturesStandartExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...corporateIntegrationStandartItems],
          },
          { label: GROUP_LAUNCH, items: [...standartDeliveryItems] },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "56-84",
        revisions: "8",
        supportDays: "45",
        languages: "Sınırsız",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...proDesignExtrasCorporate,
            ],
          },
          {
            label: GROUP_FEATURES,
            items: [
              ...corporateFeaturesCommon,
              ...corporateFeaturesStandartExtras,
              ...corporateFeaturesProExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...corporateIntegrationProItems],
          },
          { label: GROUP_LAUNCH, items: [...proDeliveryItems] },
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
      "Ödeme, ürün ve sipariş yönetimi sunan mağazaya hazır e-ticaret uygulaması. Katalogunuzu, sepet akışınızı ve müşteri yolculuğunu mobilde akıcı ve güven veren bir deneyimle hayata geçirin.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleri farklı katalog ve sipariş hacimlerine göre şekillenir. Kapsamlı pakette dil sınırı olmadan ölçeklenebilirsiniz. iOS ve Android için tek bir projede ilerliyoruz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "42-56",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: GROUP_STORE, items: [...ecommerceStoreCommonItems] },
          {
            label: GROUP_INTEGRATION,
            items: [...ecommerceIntegrationTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "56-77",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...standartDevExtrasEcommerce,
            ],
          },
          {
            label: GROUP_STORE,
            items: [
              ...ecommerceStoreCommonItems,
              ...ecommerceStoreStandartExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...ecommerceIntegrationStandartItems],
          },
          { label: GROUP_LAUNCH, items: [...standartDeliveryItems] },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "84-120",
        revisions: "8",
        supportDays: "45",
        languages: "Sınırsız",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              ...commonDesignItems,
              ...standartDesignExtras,
              ...standartDevExtrasEcommerce,
              ...proDesignExtrasEcommerce,
            ],
          },
          {
            label: GROUP_STORE,
            items: [
              ...ecommerceStoreCommonItems,
              ...ecommerceStoreStandartExtras,
              ...ecommerceStoreProExtras,
            ],
          },
          {
            label: GROUP_INTEGRATION,
            items: [...ecommerceIntegrationProItems],
          },
          { label: GROUP_LAUNCH, items: [...proDeliveryItems] },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems, ...proSupportExtras],
          },
        ],
      },
    },
  },
} as const;
