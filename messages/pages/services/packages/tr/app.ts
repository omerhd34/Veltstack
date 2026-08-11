const commonDesignTemelItems = [
  "iOS ve Android uyumlu yapım",
  "Marka renklerine uyumlu UI/UX",
  "Splash screen ve uygulama ikonu",
  "Temel sayfa geçişleri ve navigasyon",
  "Hızlı açılış ve performans optimizasyonu",
] as const;

const commonDeliveryBase = [
  "Kaynak kodu ve proje dosyalarının teslimi",
  "App Store ve Play Store yayın desteği",
  "Mağaza listeleme görselleri ve açıklama metinleri",
  "Teknik Destek",
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
] as const;

const ecommerceStorePro = [
  ...ecommerceStoreTemel,
  "Favoriler ve sipariş geçmişi",
  "Kayıtlı adres yönetimi",
  "Çoklu ödeme (kart, havale)",
  "Gelişmiş stok ve dinamik varyasyon yönetimi",
  "Ürün yorumu ve yıldızlı değerlendirme",
  "Çoklu para birimi desteği",
] as const;

export const appPackagesTr = {
  portfolio: {
    title: "Portföy / Tanıtım",
    description:
      "Markanızı tek dokunuşla tanıtan, güven veren iOS ve Android uygulaması. Portföyünüzü, hizmetlerinizi ve iletişim kanallarınızı kullanıcıların cebine taşıyın.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı paketleri farklı ölçeklerdeki tanıtım uygulamalarına uyum sağlar. iOS ve Android için tek bir projede ilerliyoruz; mağaza yayınından entegrasyonlara kadar yanınızdayım.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: "Geliştirme & Altyapı",
            items: [...commonDesignTemelItems],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...portfolioFeaturesTemel],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "REST API bağlantısı",
              "Harita ve konum gösterimi",
              "Firebase Analytics kurulumu",
              ...commonSecurityTemelItems,
            ],
          },
          {
            label: "Destek",
            items: [...commonDeliveryBase, "Temel kullanım kılavuzu"],
          },
        ],
      },
      standart: {
        deliveryDays: "30-45",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: "Geliştirme & Altyapı",
            items: [
              ...commonDesignTemelItems,
              "Premium UI bileşenleri",
              "Koyu / açık tema seçeneği",
              "Gelişmiş cihaz ve ekran uyumluluk testleri",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...portfolioFeaturesStandart],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "Gelişmiş REST API entegrasyonu",
              "Sosyal medya paylaşım entegrasyonu",
              "Harita ve konum gösterimi",
              "Firebase Analytics kurulumu",
              ...commonSecurityTemelItems,
            ],
          },
          {
            label: "Destek",
            items: [
              ...commonDeliveryBase,
              "Kullanım kılavuzu ve kısa yönetim eğitimi",
            ],
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
            label: "Geliştirme & Altyapı",
            items: [
              ...commonDesignTemelItems,
              "Koyu / açık tema seçeneği",
              "Figma’dan piksel uyumlu arayüz",
              "Gelişmiş animasyonlar ve mikro etkileşimler",
              "Ölçeklenebilir yüksek hızlı altyapı",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...portfolioFeaturesPro],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "Özel API ve üçüncü parti entegrasyonlar",
              "Firebase ve GA4 analitik kurulumu",
              "KVKK / GDPR uyumlu güvenlik altyapısı",
            ],
          },
          {
            label: "Destek",
            items: [...commonDeliveryBase, "Kapsamlı eğitim ve dokümantasyon"],
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
      "Girişim, Profesyonel ve Kapsamlı paketleri kurumsal mobil projelerin farklı ölçeklerine uyum sağlar. iOS ve Android için tek bir projede ilerliyoruz.",
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: "Geliştirme & Altyapı",
            items: [
              "Kurumsal kimliğe uygun iOS / Android arayüz",
              "Marka renklerine uyumlu UI/UX",
              "Splash screen ve uygulama ikonu",
              "Performans ve cihaz optimizasyonu",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...corporateFeaturesTemel],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "Firebase Analytics kurulumu",
              "Veri şifreleme",
              ...commonSecurityTemelItems,
            ],
          },
          {
            label: "Destek",
            items: [...commonDeliveryBase, "Temel kullanım kılavuzu"],
          },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: "Geliştirme & Altyapı",
            items: [
              "Kurumsal özel iOS / Android arayüz",
              "Premium bileşenler ve modern arayüz",
              "Koyu / açık tema seçeneği",
              "Gelişmiş performans ve pil optimizasyonu",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...corporateFeaturesStandart],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "Analitik ve hata takibi (Crashlytics)",
              "Mevcut şirket sistemleri ile API entegrasyonu",
              "KVKK uyumlu veri işleme",
            ],
          },
          {
            label: "Destek",
            items: [
              ...commonDeliveryBase.slice(0, 2),
              "App Store ve Play Store şirket hesabı kurulumu",
              ...commonDeliveryBase.slice(2),
              "Kullanım kılavuzu ve kısa yönetim eğitimi",
            ],
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
            label: "Geliştirme & Altyapı",
            items: [
              "Yüksek hızlı kurumsal özel altyapı",
              "Figma’dan piksel uyumlu kurumsal arayüz",
              "Tablet optimizasyonu",
              "Koyu / açık tema seçeneği",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...corporateFeaturesPro],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "CRM / ERP entegrasyonu",
              "Biyometrik giriş (Face ID, parmak izi)",
              "KVKK / GDPR uyumlu güvenlik altyapısı",
            ],
          },
          {
            label: "Destek",
            items: [
              ...commonDeliveryBase,
              "Kurumsal kullanım kılavuzu ve kapsamlı eğitim",
            ],
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
      "Girişim, Profesyonel ve Kapsamlı seviyeleriyle farklı katalog ve sipariş hacimlerine göre şekillenen e-ticaret uygulamaları sunuyorum. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "42-56",
        revisions: "3",
        supportDays: "15",
        languages: "1",
        featureGroups: [
          {
            label: "Geliştirme & Altyapı",
            items: [
              "E-ticaret odaklı iOS / Android arayüz",
              "Marka renklerine uyumlu UI/UX",
              "Splash screen ve uygulama ikonu",
              "Hızlı ürün görseli yükleme optimizasyonu",
            ],
          },
          {
            label: "Mağaza & Fonksiyonlar",
            items: [...ecommerceStoreTemel],
          },
          {
            label: "Pazarlama & Güvenlik",
            items: [
              "Tekil sanal POS entegrasyonu",
              "SSL veri güvenliği ve API iletişimi",
              "Mesafeli satış sözleşmesi ve KVKK modülü",
              "Firebase Analytics kurulumu",
            ],
          },
          {
            label: "Destek",
            items: [...commonDeliveryBase, "Temel mağaza kullanım kılavuzu"],
          },
        ],
      },
      standart: {
        deliveryDays: "56-77",
        revisions: "5",
        supportDays: "30",
        languages: "1-5",
        featureGroups: [
          {
            label: "Geliştirme & Altyapı",
            items: [
              "Premium e-ticaret iOS / Android arayüz",
              "Gelişmiş filtreleme ve infinite scroll",
              "Koyu / açık tema seçeneği",
              "Akıcı kategori geçişleri ve animasyonlar",
            ],
          },
          {
            label: "Mağaza & Fonksiyonlar",
            items: [...ecommerceStoreStandart],
          },
          {
            label: "Pazarlama & Güvenlik",
            items: [
              "Sipariş ve kampanya push bildirimleri",
              "Kupon ve sepet indirimi desteği",
              "KVKK ve yasal sözleşme onam altyapısı",
            ],
          },
          {
            label: "Destek",
            items: [
              ...commonDeliveryBase,
              "Kullanım kılavuzu ve kısa yönetim eğitimi",
            ],
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
            label: "Geliştirme & Altyapı",
            items: [
              "Native hisli yüksek hızlı özel altyapı",
              "Figma’dan piksel uyumlu e-ticaret arayüzü",
              "Özel sepet ve ödeme animasyonları",
              "Koyu / açık tema seçeneği",
            ],
          },
          {
            label: "Mağaza & Fonksiyonlar",
            items: [...ecommerceStorePro],
          },
          {
            label: "Pazarlama & Güvenlik",
            items: [
              "Terk edilen sepet ve kişiselleştirilmiş bildirimler",
              "GA4 / Firebase e-ticaret dönüşüm analitiği",
              "Kargo, lojistik ve Apple / Google Pay entegrasyonu",
            ],
          },
          {
            label: "Destek",
            items: [...commonDeliveryBase, "Kapsamlı mağaza yönetimi eğitimi"],
          },
        ],
      },
    },
  },
} as const;
