const GROUP_DEV = "Geliştirme & Altyapı";
const GROUP_FEATURES = "Özellikler & Fonksiyonlar";
const GROUP_STORE = "Mağaza & Ödeme";
const GROUP_INTEGRATION = "Entegrasyonlar";
const GROUP_SECURITY = "Güvenlik & Analitik";
const GROUP_LAUNCH = "Yayın & Teslimat";
const GROUP_SUPPORT = "Teknik Destek";

const commonDesignTemelItems = [
  "iOS ve Android uyumlu yapım",
  "Marka renklerine uyumlu UI/UX",
  "Splash screen ve uygulama ikonu",
  "Temel sayfa geçişleri ve navigasyon",
  "Hızlı açılış ve performans optimizasyonu",
] as const;

const commonLaunchItems = [
  "Kaynak kodu ve proje dosyalarının teslimi",
  "App Store ve Play Store yayın desteği",
  "Mağaza listeleme görselleri ve açıklama metinleri",
] as const;

const commonSecurityTemelItems = [
  "SSL iletişim ve veri şifreleme",
  "KVKK uyumlu gizlilik onay ekranı",
] as const;

const portfolioFeaturesTemel = [
  "Hakkında, hizmetler ve portföy galerisi",
  "İletişim formu ve hızlı ulaşım butonları",
  "Galeri ve video içerik desteği",
  "Referans ve müşteri yorumu alanı",
] as const;

const portfolioFeaturesStandart = [
  ...portfolioFeaturesTemel,
  "Push bildirim altyapısı",
  "Offline kullanım ve önbellekleme",
] as const;

const portfolioFeaturesPro = [
  ...portfolioFeaturesTemel,
  "Push bildirim altyapısı",
  "Offline kullanım ve önbellekleme",
  "Gelişmiş push ve duyuru yönetimi",
  "Dinamik içerik için CMS bağlantısı",
  "Deep link ve içerik paylaşımı",
] as const;

const corporateFeaturesTemel = [
  "Duyuru, haber ve içerik ekranları",
  "Hizmetler, kurumsal bilgi ve iletişim sayfaları",
  "Kullanıcı girişi ve iletişim formları",
  "Kurumsal destek kanalları (telefon, e-posta, canlı destek)",
  "Galeri ve video içerik desteği",
  "PDF ve doküman görüntüleme",
] as const;

const corporateFeaturesStandart = [
  ...corporateFeaturesTemel,
  "Gruplanmış push bildirim sistemi",
  "Kullanıcı rolleri ve yetkilendirme",
  "Offline içerik görüntüleme ve senkronizasyon",
] as const;

const corporateFeaturesPro = [
  ...corporateFeaturesTemel,
  "Gruplanmış push bildirim sistemi",
  "Kullanıcı rolleri ve yetkilendirme",
  "Offline içerik görüntüleme ve senkronizasyon",
  "Zengin medya destekli duyurular",
  "Gelişmiş rol tabanlı yetkilendirme",
  "Anket ve geri bildirim modülü",
] as const;

const ecommerceStoreTemel = [
  "Kategori ve ürün listeleme",
  "Ürün detay, galeri ve yakınlaştırma",
  "Ürün arama ve temel filtreleme",
  "Stok durumu ve fiyat gösterimi",
  "Sepet, ödeme ve sipariş takip akışı",
  "Misafir sipariş ve üye kayıt / giriş",
  "Sipariş durumu bildirimleri",
  "Teslimat ve kargo ücreti gösterimi",
] as const;

const ecommerceStoreStandart = [
  ...ecommerceStoreTemel,
  "Favoriler ve sipariş geçmişi",
  "Kayıtlı adres yönetimi",
  "Çoklu ödeme (kart, havale)",
  "Kupon ve sepet indirimi desteği",
  "Sipariş ve kampanya push bildirimleri",
] as const;

const ecommerceStorePro = [
  ...ecommerceStoreTemel,
  "Favoriler ve sipariş geçmişi",
  "Kayıtlı adres yönetimi",
  "Çoklu ödeme (kart, havale)",
  "Kupon ve sepet indirimi desteği",
  "Sipariş ve kampanya push bildirimleri",
  "Gelişmiş stok ve dinamik varyasyon yönetimi",
  "Ürün yorumu ve yıldızlı değerlendirme",
  "Çoklu para birimi desteği",
  "Terk edilen sepet ve kişiselleştirilmiş bildirimler",
] as const;

export const appPackagesTr = {
  portfolio: {
    title: "Portföy / Tanıtım",
    description:
      "Markanızı tek dokunuşla tanıtan, güven veren iOS ve Android uygulaması. Portföyünüzü, hizmetlerinizi ve iletişim kanallarınızı kullanıcıların cebine taşıyın.",
    introP2:
      "Girişim, Profesyonel ve Gelişmiş paketleri farklı ölçeklerdeki tanıtım uygulamalarına uyum sağlar. iOS ve Android için tek bir projede ilerliyoruz; mağaza yayınından entegrasyonlara kadar yanınızdayım.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignTemelItems] },
          { label: GROUP_FEATURES, items: [...portfolioFeaturesTemel] },
          {
            label: GROUP_INTEGRATION,
            items: ["REST API bağlantısı", "Harita ve konum gösterimi"],
          },
          {
            label: GROUP_SECURITY,
            items: ["Firebase Analytics kurulumu", ...commonSecurityTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          { label: GROUP_SUPPORT, items: ["Temel kullanım kılavuzu"] },
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
            items: [
              ...commonDesignTemelItems,
              "Premium UI bileşenleri",
              "Koyu / açık mod desteği",
              "Gelişmiş cihaz ve ekran uyumluluk testleri",
            ],
          },
          { label: GROUP_FEATURES, items: [...portfolioFeaturesStandart] },
          {
            label: GROUP_INTEGRATION,
            items: [
              "Gelişmiş REST API entegrasyonu",
              "Sosyal medya paylaşım entegrasyonu",
              "Harita ve konum gösterimi",
            ],
          },
          {
            label: GROUP_SECURITY,
            items: ["Firebase Analytics kurulumu", ...commonSecurityTemelItems],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["Kullanım kılavuzu ve kısa yönetim eğitimi"],
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
              ...commonDesignTemelItems,
              "Koyu / açık mod desteği",
              "Figma’dan piksel uyumlu arayüz",
              "Gelişmiş animasyonlar ve mikro etkileşimler",
              "Ölçeklenebilir yüksek hızlı altyapı",
            ],
          },
          { label: GROUP_FEATURES, items: [...portfolioFeaturesPro] },
          {
            label: GROUP_INTEGRATION,
            items: ["Özel API ve üçüncü parti entegrasyonlar"],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "Firebase ve GA4 analitik kurulumu",
              "KVKK / GDPR uyumlu güvenlik altyapısı",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["Kapsamlı eğitim ve dokümantasyon"],
          },
        ],
      },
    },
  },
  corporate: {
    title: "Kurumsal",
    description:
      "Çalışanlarınız veya müşterileriniz için güvenilir kurumsal mobil deneyim. İçerik, iletişim ve iş süreçlerinizi iOS ve Android'de tutarlı ve erişilebilir bir arayüzle sunun.",
    introP2:
      "Girişim, Profesyonel ve Gelişmiş paketleri kurumsal mobil projelerin farklı ölçeklerine uyum sağlar. iOS ve Android için tek bir projede ilerliyoruz.",
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              "Kurumsal kimliğe uygun iOS / Android arayüz",
              "Marka renklerine uyumlu UI/UX",
              "Splash screen ve uygulama ikonu",
              "Performans ve cihaz optimizasyonu",
            ],
          },
          { label: GROUP_FEATURES, items: [...corporateFeaturesTemel] },
          {
            label: GROUP_SECURITY,
            items: [
              "Firebase Analytics kurulumu",
              "Veri şifreleme",
              ...commonSecurityTemelItems,
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          { label: GROUP_SUPPORT, items: ["Temel kullanım kılavuzu"] },
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
            items: [
              "Kurumsal özel iOS / Android arayüz",
              "Premium bileşenler ve modern arayüz",
              "Koyu / açık mod desteği",
              "Gelişmiş performans ve pil optimizasyonu",
            ],
          },
          { label: GROUP_FEATURES, items: [...corporateFeaturesStandart] },
          {
            label: GROUP_INTEGRATION,
            items: ["Mevcut şirket sistemleri ile API entegrasyonu"],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "Analitik ve hata takibi (Crashlytics)",
              "KVKK uyumlu veri işleme",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [
              ...commonLaunchItems.slice(0, 2),
              "App Store ve Play Store şirket hesabı kurulumu",
              ...commonLaunchItems.slice(2),
            ],
          },
          {
            label: GROUP_SUPPORT,
            items: ["Kullanım kılavuzu ve kısa yönetim eğitimi"],
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
              "Yüksek hızlı kurumsal özel altyapı",
              "Figma’dan piksel uyumlu kurumsal arayüz",
              "Tablet optimizasyonu",
              "Koyu / açık mod desteği",
            ],
          },
          { label: GROUP_FEATURES, items: [...corporateFeaturesPro] },
          { label: GROUP_INTEGRATION, items: ["CRM / ERP entegrasyonu"] },
          {
            label: GROUP_SECURITY,
            items: [
              "Biyometrik giriş (Face ID, parmak izi)",
              "KVKK / GDPR uyumlu güvenlik altyapısı",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["Kurumsal kullanım kılavuzu ve kapsamlı eğitim"],
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
      "Girişim, Profesyonel ve Gelişmiş seviyeleriyle farklı katalog ve sipariş hacimlerine göre şekillenen e-ticaret uygulamaları sunuyorum. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "42-56",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [
              "E-ticaret odaklı iOS / Android arayüz",
              "Marka renklerine uyumlu UI/UX",
              "Splash screen ve uygulama ikonu",
              "Hızlı ürün görseli yükleme optimizasyonu",
            ],
          },
          { label: GROUP_STORE, items: [...ecommerceStoreTemel] },
          {
            label: GROUP_INTEGRATION,
            items: ["Tekil sanal POS entegrasyonu"],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "SSL veri güvenliği ve API iletişimi",
              "Mesafeli satış sözleşmesi ve KVKK modülü",
              "Firebase Analytics kurulumu",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          { label: GROUP_SUPPORT, items: ["Temel mağaza kullanım kılavuzu"] },
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
              "Premium e-ticaret iOS / Android arayüz",
              "Gelişmiş filtreleme ve infinite scroll",
              "Koyu / açık mod desteği",
              "Akıcı kategori geçişleri ve animasyonlar",
            ],
          },
          { label: GROUP_STORE, items: [...ecommerceStoreStandart] },
          {
            label: GROUP_INTEGRATION,
            items: ["Tekil sanal POS entegrasyonu"],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "SSL veri güvenliği ve API iletişimi",
              "KVKK ve yasal sözleşme onam altyapısı",
              "Firebase Analytics kurulumu",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["Kullanım kılavuzu ve kısa yönetim eğitimi"],
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
              "Native hisli yüksek hızlı özel altyapı",
              "Figma’dan piksel uyumlu e-ticaret arayüzü",
              "Özel sepet ve ödeme animasyonları",
              "Koyu / açık mod desteği",
            ],
          },
          { label: GROUP_STORE, items: [...ecommerceStorePro] },
          {
            label: GROUP_INTEGRATION,
            items: [
              "Tekil sanal POS entegrasyonu",
              "Kargo, lojistik ve Apple / Google Pay entegrasyonu",
            ],
          },
          {
            label: GROUP_SECURITY,
            items: [
              "SSL veri güvenliği ve API iletişimi",
              "KVKK ve yasal sözleşme onam altyapısı",
              "GA4 / Firebase e-ticaret dönüşüm analitiği",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonLaunchItems] },
          {
            label: GROUP_SUPPORT,
            items: ["Kapsamlı mağaza yönetimi eğitimi"],
          },
        ],
      },
    },
  },
} as const;
