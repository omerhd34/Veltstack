const commonDesignItems = [
  "Telefon, tablet ve bilgisayarda uyumlu (responsive) tasarım",
  "Güvenli bağlantı (HTTPS) ve temel güvenlik yapılandırması",
  "Hızlı açılış ve Core Web Vitals optimizasyonu",
  "Erişilebilir, modern ve okunaklı arayüz",
] as const;

const standartDesignExtras = [
  "Akıcı sayfa geçişleri ve mikro animasyonlar",
  "İstenilen veritabanı kullanımı",
  "Video arka plan / gömülü demo",
] as const;

const preferredPaymentExtras = [
  "İstenilen ödeme altyapısı kullanımı (iyzico, PayTR…)",
] as const;

const proDesignExtras = [
  "Özel tasarım detayları ve gelişmiş animasyonlar",
  "Yüksek trafiğe hazır ölçeklenebilir altyapı",
  "İstenilen hosting kullanımı (Vercel, AWS vb.)",
  "Canlı chat",
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
  "Open Graph ve sosyal medya önizleme optimizasyonu",
  "Aramada görünürlük takibi (Google Search Console)",
  "Ziyaretçi ve trafik ölçümü (Google Analytics 4)",
] as const;

const tierSeoProItems = [
  ...tierSeoStandartItems,
  "Arama sonuçlarında daha iyi yer almak için teknik SEO iyileştirmesi",
  "Kurumsal bilgi, breadcrumb ve zengin sonuç (schema) yapılandırması",
  "Dönüşüm takibi (form, tıklama, CTA)",
  "Google Ads dönüşüm takibi ve etiket kurulumu",
  "Meta Pixel ve dönüşüm olayları (Facebook / Instagram)",
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
  ...preferredPaymentExtras,
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

const GROUP_CATALOG = "Katalog & Teklif";
const GROUP_LISTING = "İlan & Arama";
const GROUP_BOOKING = "Rezervasyon & Takvim";
const GROUP_COURSE = "Kurs & Eğitim";

const onePagePanelExtras = [
  "Bölüm içeriklerini panelden düzenleme",
  "CTA ve iletişim formu yönetimi",
  "Görsel yükleme ve medya kütüphanesi",
  "Kod bilmeden metin düzenleme (zengin editör)",
  "Panelden sayfa başlığı ve açıklama düzenleme",
] as const;

const catalogCommonItems = [
  "Ürün / hizmet katalog listesi ve detay sayfaları",
  "Kategori ve filtreleme yapısı",
  "Teklif / bilgi talep formu",
  "PDF veya katalog indirme alanı",
] as const;

const catalogStandartExtras = [
  ...preferredPaymentExtras,
  "Gelişmiş arama ve çoklu filtre",
  "Teklif taleplerini panelden takip",
  "Fiyat listesi veya B2B fiyat gösterimi",
  "Üye / bayi girişi (basit yetkilendirme)",
] as const;

const catalogProExtras = [
  "Bayi özel fiyat ve stok görünümü",
  "Excel ile toplu katalog yükleme / indirme",
  "Tekliften siparişe geçiş altyapısı",
  "CRM entegrasyonuna hazır teklif akışı",
] as const;

const catalogPanelExtras = [
  "Ürün / hizmet ve kategori yönetimi",
  "Teklif talebi yönetimi",
  "Görsel yükleme ve medya kütüphanesi",
  "Kod bilmeden metin düzenleme (zengin editör)",
  "Taslak kaydetme ve yayınlama",
  "Panelden sayfa başlığı ve açıklama düzenleme",
] as const;

const listingCommonItems = [
  "İlan listesi ve detay sayfaları",
  "Konum, fiyat ve özellik filtreleri",
  "İlan fotoğraf galerisi",
  "İletişim / randevu talep formu",
] as const;

const listingStandartExtras = [
  "Harita üzerinden ilan gösterimi",
  "Favori ilanlar ve karşılaştırma",
  "Gelişmiş arama (alan, oda, fiyat aralığı vb.)",
  "İlan sahibi / danışman profil sayfaları",
] as const;

const listingProExtras = [
  "Üye paneli ile ilan ekleme ve düzenleme",
  "Öne çıkan / vitrin ilan yönetimi",
  "Emlak ofisi çoklu danışman yetkilendirmesi",
  "İlan süresi ve yenileme otomasyonu",
] as const;

const listingPanelExtras = [
  "İlan, kategori ve özellik yönetimi",
  "Danışman / ofis bilgisi yönetimi",
  "Görsel yükleme ve medya kütüphanesi",
  "Kod bilmeden metin düzenleme (zengin editör)",
  "Taslak kaydetme ve yayınlama",
  "Panelden sayfa başlığı ve açıklama düzenleme",
] as const;

const bookingCommonItems = [
  "Hizmet / oda / masa rezervasyon sayfaları",
  "Uygunluk takvimi ve saat seçimi",
  "Rezervasyon talep formu",
  "E-posta ile rezervasyon bildirimi",
] as const;

const bookingStandartExtras = [
  ...preferredPaymentExtras,
  "Online ödeme ile rezervasyon onayı",
  "Kapasite ve müsaitlik yönetimi",
  "İptal / değişiklik kuralları",
  "Takvim senkronizasyonu (Google Calendar)",
] as const;

const bookingProExtras = [
  "Çoklu şube / mekan yönetimi",
  "Personel veya kaynak bazlı takvim",
  "Otomatik hatırlatma SMS / e-posta",
  "Ön ödeme, depozito ve iade akışı",
] as const;

const bookingPanelExtras = [
  "Rezervasyon ve takvim yönetimi",
  "Hizmet / kaynak tanımları",
  "Görsel yükleme ve medya kütüphanesi",
  "Kod bilmeden metin düzenleme (zengin editör)",
  "Taslak kaydetme ve yayınlama",
  "Panelden sayfa başlığı ve açıklama düzenleme",
] as const;

const educationCommonItems = [
  "Kurs / eğitim listesi ve detay sayfaları",
  "Müfredat ve ders içeriği vitrini",
  "Kayıt / başvuru formu",
  "Eğitmen ve program tanıtım alanları",
] as const;

const educationStandartExtras = [
  ...preferredPaymentExtras,
  "Öğrenci üyelik ve giriş sistemi",
  "Online ödeme ile kurs kaydı",
  "Ders materyali / dosya indirme alanı",
  "Basit ilerleme takibi",
] as const;

const educationProExtras = [
  "Video ders oynatıcı ve içerik koruması",
  "Sertifika oluşturma altyapısı",
  "Quiz / ödev modülü",
  "Eğitmen paneli ve öğrenci yönetimi",
] as const;

const educationPanelExtras = [
  "Kurs, ders ve kayıt yönetimi",
  "Eğitmen ve program yönetimi",
  "Görsel yükleme ve medya kütüphanesi",
  "Kod bilmeden metin düzenleme (zengin editör)",
  "Taslak kaydetme ve yayınlama",
  "Panelden sayfa başlığı ve açıklama düzenleme",
] as const;

export const webPackagesTr = {
  onePage: {
    title: "Tek Sayfalık",
    description:
      "Tek ekranda markanızı, teklifinizi ve iletişiminizi net gösteren hızlı landing page. Kampanya, ürün lansmanı veya kişisel vitrin için odaklı ve dönüşüm odaklı bir sayfa kurun.",
    introP2:
      "Tek sayfada kaydırarak markanızı ve teklifinizi gösterir, ziyaretçiyi form, WhatsApp veya randevu gibi tek bir aksiyona götürürüz. Girişim hızlı ve sade bir vitrin; Profesyonel panelden düzenlenebilir içerik ve ölçüm; Kapsamlı ise animasyon, çoklu dil ve reklam dönüşüm takibi sunar. Hangisinin size uyduğundan emin değilseniz bizimle iletişime geçin.",
    tiers: {
      temel: {
        deliveryDays: "7-10",
        revisions: "2",
        supportDays: "15",
        pages: "1",
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
        deliveryDays: "10-14",
        revisions: "4",
        supportDays: "30",
        pages: "1",
        languages: "1-2",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoStandartItems] },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...onePagePanelExtras],
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
        deliveryDays: "14-21",
        revisions: "6",
        supportDays: "45",
        pages: "1",
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
            items: [...standartPanelExtras, ...onePagePanelExtras],
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

  portfolio: {
    title: "Portfolyo / Kişisel",
    description:
      "Kişisel markanızı veya işletmenizi güven veren modern bir web sitesiyle öne çıkarın. Portföyünüzü, hizmetlerinizi ve hikâyenizi ziyaretçilere net ve etkileyici bir vitrinde sunun.",
    introP2:
      "İşlerinizi, hizmetlerinizi ve hikâyenizi güven veren bir vitrinde sunar, ziyaretçiyi iletişime yönlendiririz. Girişim sade bir portföy sitesi; Profesyonel proje galerisi, blog ve yönetim paneli; Kapsamlı ise sınırsız sayfa, çoklu dil ve dönüşüm takibi sunar. Hangisinin size uyduğundan emin değilseniz bizimle iletişime geçin.",
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
      "Hizmetlerinizi, ekibinizi ve iletişim kanallarınızı kurumsal bir yapıda sunar; güven ve teklif talebine odaklanırız. Girişim temel kurumsal vitrin; Profesyonel ekip, SSS, blog ve yönetim paneli; Kapsamlı ise sınırsız sayfa, çoklu dil ve reklam dönüşüm takibi sunar. Hangisinin size uyduğundan emin değilseniz bizimle iletişime geçin.",
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
      "Ürün, sepet ve ödemeyi tek akışta kurar; siparişi panelden yönetilebilir hale getiririz. Girişim temel mağaza ve havale; Profesyonel üyelik, kupon ve iyzico / PayTR; Kapsamlı ise misafir ödeme, çoklu para birimi ve sepet hatırlatma sunar. Hangisinin size uyduğundan emin değilseniz bizimle iletişime geçin.",
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

  catalog: {
    title: "Katalog / B2B",
    description:
      "Ürün ve hizmetlerinizi toptan / B2B satışa uygun sunan dijital katalog. Teklif talebi, filtreleme ve bayi odaklı bir vitrinle müşterilerinizin karar sürecini hızlandırın.",
    introP2:
      "Ürün ve hizmetlerinizi teklif odaklı bir katalogda sunar, müşterinin kararını hızlandırırız. Girişim liste, filtre ve teklif formu; Profesyonel B2B fiyat ve bayi girişi; Kapsamlı ise özel fiyat, toplu yükleme ve tekliften siparişe geçiş sunar. Hangisinin size uyduğundan emin değilseniz bizimle iletişime geçin.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: "SEO & Entegrasyon", items: [...tierSeoTemelItems] },
          { label: GROUP_CATALOG, items: [...catalogCommonItems] },
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
            label: GROUP_CATALOG,
            items: [...catalogCommonItems, ...catalogStandartExtras],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...catalogPanelExtras],
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
            label: GROUP_CATALOG,
            items: [
              ...catalogCommonItems,
              ...catalogStandartExtras,
              ...catalogProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...catalogPanelExtras],
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

  listing: {
    title: "İlan / Emlak",
    description:
      "Emlak, araç veya hizmet ilanlarınızı aranabilir ve filtreli bir yapıda sunun. Detay sayfaları, galeri ve talep formlarıyla potansiyel müşteriyi hızlıca iletişime yönlendirin.",
    introP2:
      "İlanlarınızı aranabilir ve filtreli bir yapıda sunar, potansiyel müşteriyi hızlıca iletişime alırız. Girişim liste, galeri ve talep formu; Profesyonel harita, favori ve karşılaştırma; Kapsamlı ise üye paneli ve çoklu danışman yönetimi sunar. Hangisinin size uyduğundan emin değilseniz bizimle iletişime geçin.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-20",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: "SEO & Entegrasyon", items: [...tierSeoTemelItems] },
          { label: GROUP_LISTING, items: [...listingCommonItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        supportDays: "30",
        pages: "1-80",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoStandartItems] },
          {
            label: GROUP_LISTING,
            items: [...listingCommonItems, ...listingStandartExtras],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...listingPanelExtras],
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
        deliveryDays: "42-70",
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
            label: GROUP_LISTING,
            items: [
              ...listingCommonItems,
              ...listingStandartExtras,
              ...listingProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...listingPanelExtras],
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

  booking: {
    title: "Rezervasyon",
    description:
      "Randevu, oda, masa veya hizmet rezervasyonlarını online alın. Takvim, müsaitlik ve bildirimlerle operasyonunuzu düzenli ve müşteri dostu bir akışa taşıyın.",
    introP2:
      "Randevu, oda, masa veya hizmet rezervasyonunu takvime bağlar; bildirimi otomatikleştiririz. Girişim talep formu ve e-posta bildirimi; Profesyonel online ödeme ve müsaitlik; Kapsamlı ise çoklu şube, hatırlatma ve depozito akışı sunar. Hangisinin size uyduğundan emin değilseniz bizimle iletişime geçin.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: "SEO & Entegrasyon", items: [...tierSeoTemelItems] },
          { label: GROUP_BOOKING, items: [...bookingCommonItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        supportDays: "30",
        pages: "1-40",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoStandartItems] },
          {
            label: GROUP_BOOKING,
            items: [...bookingCommonItems, ...bookingStandartExtras],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...bookingPanelExtras],
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
        deliveryDays: "42-70",
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
            label: GROUP_BOOKING,
            items: [
              ...bookingCommonItems,
              ...bookingStandartExtras,
              ...bookingProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...bookingPanelExtras],
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

  education: {
    title: "Eğitim / Kurs",
    description:
      "Kurs ve eğitim programlarınızı dijitalde satılabilir veya başvurulabilir hale getirin. Müfredat vitrini, kayıt akışı ve öğrenci deneyimini tek çatı altında toplayın.",
    introP2:
      "Kurslarınızı vitrine çıkarır; kaydı ve öğrenci deneyimini tek çatıda toplarız. Girişim liste, müfredat ve başvuru formu; Profesyonel üyelik, ödeme ve ilerleme takibi; Kapsamlı ise video ders, sertifika ve eğitmen paneli sunar. Hangisinin size uyduğundan emin değilseniz bizimle iletişime geçin.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "1-15",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: "SEO & Entegrasyon", items: [...tierSeoTemelItems] },
          { label: GROUP_COURSE, items: [...educationCommonItems] },
          { label: GROUP_PANEL, items: [] },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-45",
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
            label: GROUP_COURSE,
            items: [...educationCommonItems, ...educationStandartExtras],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...educationPanelExtras],
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
        deliveryDays: "45-75",
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
            label: GROUP_COURSE,
            items: [
              ...educationCommonItems,
              ...educationStandartExtras,
              ...educationProExtras,
            ],
          },
          {
            label: GROUP_PANEL,
            items: [...standartPanelExtras, ...educationPanelExtras],
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
