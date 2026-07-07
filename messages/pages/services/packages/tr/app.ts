// ---------------------------------------------------------------------------
// Ortak (paylaşılan) özellik grupları
// ---------------------------------------------------------------------------

const commonDesignTemelItems = [
  "iOS ve Android Uyumlu Geliştirme",
  "Temel UI/UX ve Marka Renklerine Uyarlama",
  "Splash Screen ve Uygulama İkonu Tasarımı",
  "Temel Sayfa Geçişleri ve Navigasyon",
  "Hızlı Açılış ve Performans Optimizasyonu",
] as const;

const commonDeliveryTemelItems = [
  "Kaynak Kodu ve Proje Dosyalarının Teslimi",
  "App Store ve Play Store Temel Yayın Desteği",
  "Mağaza Listeleme Görselleri ve Açıklama Metinleri Desteği",
  "Temel Kullanım Kılavuzu",
  "15 Gün Teknik Destek",
] as const;

const commonDeliveryStandartItems = [
  "Kaynak Kodu ve Proje Dosyalarının Teslimi",
  "App Store ve Play Store Temel Yayın Desteği",
  "Mağaza Listeleme Görselleri ve Açıklama Metinleri Desteği",
  "Kullanım Kılavuzu ve Kısa Yönetim Eğitimi",
  "30 Gün Teknik Destek",
] as const;

const commonDeliveryProItems = [
  "Kaynak Kodu ve Proje Dosyalarının Teslimi",
  "App Store ve Play Store Temel Yayın Desteği",
  "Mağaza Listeleme Görselleri ve Açıklama Metinleri Desteği",
  "Kapsamlı Eğitim ve Dökümantasyon",
  "45 Gün Teknik Destek",
] as const;

const commonSecurityTemelItems = [
  "SSL İletişim ve Standart Veri Güvenliği",
  "KVKK ve Gizlilik Politikası Onay Ekranı",
] as const;

// ---------------------------------------------------------------------------
// Portföy / tanıtım paketi — kademe bazlı özellikler
// ---------------------------------------------------------------------------

const portfolioFeaturesTemelItems = [
  "Hakkında, Hizmetler ve Portföy Galerisi Ekranları",
  "İletişim Formu ve Hızlı Ulaşım Butonları",
  "Galeri ve Video İçerik Desteği",
  "Sosyal Medya Profil Bağlantıları",
  "Referans ve Müşteri Yorumu Alanı",
] as const;

const portfolioFeaturesStandartItems = [
  ...portfolioFeaturesTemelItems,
  "Push Bildirim Altyapısı",
  "Temel Offline Kullanım ve Önbellekleme",
  "En Fazla 2 Dil Desteği",
] as const;

const portfolioFeaturesProItems = [
  ...portfolioFeaturesTemelItems,
  "Push Bildirim Altyapısı",
  "Temel Offline Kullanım ve Önbellekleme",
  "En Fazla 5 Dil Desteği",
  "Gelişmiş Push Bildirim ve Duyuru Yönetimi",
  "Dinamik İçerikler İçin CMS Panel Bağlantısı",
  "Deep Link ve İçerik Paylaşım Desteği",
] as const;

const portfolioIntegrationTemelItems = [
  "Temel REST API Bağlantısı",
  "Harita ve Konum Gösterimi",
  "Temel Firebase Analitik Kurulumu",
  ...commonSecurityTemelItems,
] as const;

const portfolioIntegrationStandartItems = [
  "Gelişmiş REST API Entegrasyonu",
  "Sosyal Medya Paylaşım Entegrasyonu",
  "Harita ve Konum Gösterimi",
  "Temel Firebase Analitik Kurulumu",
  ...commonSecurityTemelItems,
] as const;

// ---------------------------------------------------------------------------
// Kurumsal paket — kademe bazlı özellikler
// ---------------------------------------------------------------------------

const corporateFeaturesTemelItems = [
  "Duyuru, Haber ve Statik İçerik Ekranları",
  "Hizmetler, Kurumsal Bilgi ve İletişim Sayfaları",
  "Temel Kullanıcı Girişi ve İletişim Formları",
  "Kurumsal İletişim ve Destek Kanalları (Telefon, E-posta, Canlı Destek)",
  "Galeri ve Video İçerik Desteği",
  "PDF ve Doküman Görüntüleme Modülü",
] as const;

const corporateFeaturesStandartItems = [
  ...corporateFeaturesTemelItems,
  "Gruplanmış Push Bildirim Sistemi",
  "Kullanıcı Rolleri ve Yetkilendirme",
  "Offline İçerik Görüntüleme ve Senkronizasyon",
  "En Fazla 2 Dil Desteği",
] as const;

const corporateFeaturesProItems = [
  ...corporateFeaturesTemelItems,
  "Gruplanmış Push Bildirim Sistemi",
  "Kullanıcı Rolleri ve Yetkilendirme",
  "Offline İçerik Görüntüleme ve Senkronizasyon",
  "Zengin Medya Destekli İnteraktif Duyurular",
  "Gelişmiş Rol Tabanlı Yetkilendirme ve İntranet Senkronu",
  "Anket, Geri Bildirim ve Memnuniyet Modülü",
  "En Fazla 5 Dil Desteği",
] as const;

// ---------------------------------------------------------------------------
// E-ticaret paketi — kademe bazlı özellikler
// ---------------------------------------------------------------------------

const ecommerceStoreTemelItems = [
  "Kategori ve Ürün Listeleme Ekranları",
  "Ürün Detay, Görsel Galeri ve Yakınlaştırma",
  "Ürün Arama ve Temel Filtreleme",
  "Stok Durumu ve Fiyat Gösterimi",
  "Sepet, Temel Ödeme ve Sipariş Takip Akışı",
  "Misafir Sipariş ve Temel Üye Kayıt / Giriş",
  "Sipariş Durumu Bildirim Ekranı",
  "Teslimat ve Kargo Ücreti Gösterimi",
] as const;

const ecommerceStoreStandartItems = [
  ...ecommerceStoreTemelItems,
  "Favoriler ve Detaylı Sipariş Geçmişi",
  "Kayıtlı Adres ve Teslimat Bilgisi Yönetimi",
  "Güvenli Çoklu Ödeme Akışı (Kredi Kartı, Havale)",
  "En Fazla 2 Dil Desteği",
] as const;

const ecommerceStoreProItems = [
  ...ecommerceStoreTemelItems,
  "Favoriler ve Detaylı Sipariş Geçmişi",
  "Kayıtlı Adres ve Teslimat Bilgisi Yönetimi",
  "Güvenli Çoklu Ödeme Akışı (Kredi Kartı, Havale)",
  "Gelişmiş Stok ve Dinamik Varyasyon Yönetimi",
  "Ürün Yorumu ve Yıldızlı Değerlendirme Sistemi",
  "Sınırsız Dil ve Çoklu Para Birimi Desteği",
] as const;

export const appPackagesTr = {
  portfolio: {
    title: "Portföy / Tanıtım",
    description:
      "Markanızı tek dokunuşla tanıtan, güven veren iOS ve Android uygulaması. Portföyünüzü, hizmetlerinizi ve iletişim kanallarınızı kullanıcıların cebine taşıyın.",
    introP2:
      "Girişim, Profesyonel ve Premium paketleri farklı ölçeklerdeki tanıtım uygulamalarına uyum sağlar. iOS ve Android için tek bir projede ilerliyoruz; mağaza yayınından entegrasyonlara kadar yanınızdayım.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        scope: "1-5",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [...commonDesignTemelItems],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...portfolioFeaturesTemelItems],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [...portfolioIntegrationTemelItems],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryTemelItems],
          },
        ],
      },
      standart: {
        deliveryDays: "30-45",
        revisions: "5",
        scope: "1-10",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              ...commonDesignTemelItems,
              "Premium UI Bileşenleri ve Modern Arayüz",
              "Dark / Light Mod Desteği",
              "Farklı Ekran Boyutları İçin Gelişmiş Uyumluluk ve Cihaz Testleri",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...portfolioFeaturesStandartItems],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [...portfolioIntegrationStandartItems],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "45-60",
        revisions: "7",
        scope: "∞",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              "Ölçeklenebilir Yüksek Hızlı Özel Altyapı",
              "Figma'dan Piksel Uyumlu Arayüz Kodlama",
              "Gelişmiş Animasyonlar ve Mikro Etkileşimler",
              "Dark / Light Mod Desteği",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...portfolioFeaturesProItems],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "Özel API ve Üçüncü Parti Entegrasyonları",
              "Firebase ve GA4 Analitik Kurulumu",
              "KVKK ve GDPR Uyumlu Tam Güvenlik Altyapısı",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryProItems],
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
      "Girişim, Profesyonel ve Premium paketleri kurumsal mobil projelerin farklı ölçeklerine uyum sağlar. iOS ve Android için tek bir projede ilerliyoruz.",
    tiers: {
      temel: {
        deliveryDays: "28-42",
        revisions: "3",
        scope: "1-8",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              "Kurumsal Kimliğe Uygun iOS / Android Arayüz",
              "Temel UI/UX ve Marka Renklerine Uyarlama",
              "Splash Screen ve Uygulama İkonu Tasarımı",
              "Standart Performans ve Cihaz Optimizasyonu",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...corporateFeaturesTemelItems],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "Temel Firebase Analitik Kurulumu",
              "Standart Veri Şifreleme",
              ...commonSecurityTemelItems,
            ],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryTemelItems],
          },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        scope: "1-15",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              "Kurumsal Özel iOS / Android Arayüz Tasarımı",
              "Premium Bileşenler ve Modern Arayüz",
              "Dark / Light Mod Desteği",
              "Gelişmiş Performans ve Pil Optimizasyonu",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...corporateFeaturesStandartItems],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "Gelişmiş Analitik ve Hata Takibi (Crashlytics)",
              "Mevcut Şirket Sistemleri ile API Entegrasyonu",
              "KVKK Uyumlu Veri İşleme Modülü",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryStandartItems.slice(0, 2),
              "App Store ve Play Store Şirket Hesabı Kurulumu",
              ...commonDeliveryStandartItems.slice(2),
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "56-84",
        revisions: "8",
        scope: "∞",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              "Yüksek Hızlı Kurumsal Özel Altyapı",
              "Figma'dan Piksel Uyumlu Kurumsal Arayüz",
              "Tabletler İçin Özel Optimizasyon",
              "Dark / Light Mod Desteği",
            ],
          },
          {
            label: "Özellikler & Fonksiyonlar",
            items: [...corporateFeaturesProItems],
          },
          {
            label: "Entegrasyon & Güvenlik",
            items: [
              "Üçüncü Parti Sistemler (CRM, ERP) Entegrasyonu",
              "Biyometrik Giriş (Face ID, Parmak İzi)",
              "KVKK ve GDPR Uyumlu Tam Güvenlik Altyapısı",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryProItems.slice(0, 3),
              "45 Gün Teknik Destek",
              "Kurumsal Kullanım Kılavuzu ve Kapsamlı Eğitim",
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
      "Girişim, Profesyonel ve Premium seviyeleriyle farklı katalog ve sipariş hacimlerine göre şekillenen e-ticaret uygulamaları sunuyorum. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "42-56",
        revisions: "3",
        scope: "1-12",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              "E-Ticaret Odaklı iOS / Android Arayüzü",
              "Temel UI/UX ve Marka Renklerine Uyarlama",
              "Splash Screen ve Uygulama İkonu Tasarımı",
              "Hızlı Ürün Görselleri Yükleme Optimizasyonu",
            ],
          },
          {
            label: "Mağaza & Fonksiyonlar",
            items: [...ecommerceStoreTemelItems],
          },
          {
            label: "Pazarlama & Güvenlik",
            items: [
              "Tekil Sanal POS / Ödeme Geçidi Entegrasyonu",
              "SSL Veri Güvenliği ve Standart API İletişimi",
              "Mesafeli Satış Sözleşmesi ve KVKK Modülü",
              "Temel Firebase Analitik Kurulumu",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryTemelItems.slice(0, 3),
              "Temel Mağaza Kullanım Kılavuzu",
              "15 Gün Teknik Destek",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "56-77",
        revisions: "5",
        scope: "1-20",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              "Premium E-Ticaret iOS / Android Arayüzü",
              "Gelişmiş Filtreleme ve Kaydırma (Infinite Scroll)",
              "Dark / Light Mod Desteği",
              "Akıcı Kategori Geçişleri ve Animasyonlar",
            ],
          },
          {
            label: "Mağaza & Fonksiyonlar",
            items: [...ecommerceStoreStandartItems],
          },
          {
            label: "Pazarlama & Güvenlik",
            items: [
              "Sipariş ve Kampanya İçin Push Bildirimleri",
              "Kupon, Sepet İndirimi ve Kampanya Desteği",
              "KVKK ve Yasal Sözleşme Gelişmiş Onam Altyapısı",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryStandartItems],
          },
        ],
      },
      pro: {
        deliveryDays: "84-120",
        revisions: "8",
        scope: "∞",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              "Native Hisli Yüksek Hızlı Özel Altyapı",
              "Figma'dan Piksel Uyumlu E-Ticaret Arayüzü",
              "Özel Sepet ve Ödeme Sayfası Animasyonları",
              "Dark / Light Mod Desteği",
            ],
          },
          {
            label: "Mağaza & Fonksiyonlar",
            items: [...ecommerceStoreProItems],
          },
          {
            label: "Pazarlama & Güvenlik",
            items: [
              "Terk Edilen Sepet ve Kişiselleştirilmiş Bildirimler",
              "GA4 / Firebase E-Ticaret Dönüşüm Analitiği",
              "Kargo, Lojistik ve Apple / Google Pay Entegrasyonu",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryProItems.slice(0, 3),
              "45 Gün Teknik Destek",
              "Kapsamlı Mağaza Yönetimi Eğitimi",
            ],
          },
        ],
      },
    },
  },
} as const;
