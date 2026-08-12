// ---------------------------------------------------------------------------
// Ortak (paylaşılan) özellik grupları
// ---------------------------------------------------------------------------

const commonDesignItems = [
  "Tüm cihazlara (telefon, tablet, bilgisayar) uyumlu tasarım",
  "Güvenli bağlantı (HTTPS) ve temel güvenlik",
  "Hızlı açılış ve Core Web Vitals optimizasyonu",
  "Erişilebilir, modern ve okunaklı arayüz",
] as const;

const standartDesignExtras = [
  "Koyu / açık tema seçeneği",
  "Akıcı sayfa geçişleri ve ince animasyonlar",
] as const;

const commonDeliveryItems = [
  "Sitenin tüm dosyalarının size teslimi",
  "Sitenin yayına alınması",
  "Alan adı (domain) ve www yönlendirme ayarları",
  "Sunucu / hosting kurulum ve yayın rehberi",
  "Performans hedefi doğrulaması (Google PageSpeed)",
] as const;

const freeDomainHosting = ["1 yıllık alan adı ve hosting ücretsiz"] as const;

const standartDeliveryItems = [
  ...freeDomainHosting,
  ...commonDeliveryItems,
] as const;

const proDeliveryItems = [
  ...freeDomainHosting,
  ...commonDeliveryItems,
] as const;

const commonSupportStandartItems = [
  "Kullanım kılavuzu ve kısa yönetim eğitimi",
] as const;

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
  "Arama ve sosyal medyada düzgün görünen başlık, açıklama ve önizleme",
  "Aramada görünürlük takibi (Google Search Console)",
  "Ziyaretçi ve trafik ölçümü (Google Analytics 4)",
] as const;

const tierSeoProItems = [
  ...tierSeoStandartItems,
  "Arama sonuçlarında daha iyi yer almak için teknik SEO iyileştirmesi",
  "Firma bilgisi, yol haritası gibi zengin sonuç (schema) görünümü",
  "Form doldurma ve buton tıklamalarını ölçme",
  "Canlı destek veya WhatsApp bağlantısı",
  "CRM / e-posta pazarlama araçlarına bağlantı",
] as const;

const ecommerceStoreCommonItems = [
  "Ürün listesi ve ürün detay sayfaları",
  "Sepet ve ödeme adımları",
  "Kargo firması bağlantısı",
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
  "Birden fazla kargo firması bağlantısı",
  "Yarım bırakılan sepet hatırlatma e-postaları",
  "“Bunu da beğenebilirsiniz” ürün önerileri",
  "Fatura ve e-arşiv bağlantısına hazır yapı",
] as const;

const ecommercePanelCommonItems = [
  "Ürün, kategori ve sipariş yönetimi",
  "Kategori düzenleme",
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
  "SMS ve pazarlama araçlarına bağlantı",
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
          {
            label: GROUP_PANEL,
            items: [
              "Hizmet, proje ve hakkımda tanıtım bölümleri",
              "İletişim ve “hemen ara / yaz” yönlendirme alanları",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "21-30",
        revisions: "5",
        supportDays: "30",
        pages: "10-50",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoStandartItems] },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmet, proje ve hakkımda tanıtım bölümleri",
              "İletişim ve “hemen ara / yaz” yönlendirme alanları",
              "Kendiniz güncelleyebileceğiniz portföy / proje galerisi",
              "Referans ve müşteri yorumu alanları",
              "İçerikleri kendiniz düzenleyebileceğiniz yönetim paneli",
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
              "Sağladığınız tasarım dosyasıyla birebir arayüz",
              "Yoğun ziyaretçiye dayanıklı, büyümeye hazır altyapı",
            ],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoProItems] },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmet, proje ve hakkımda tanıtım bölümleri",
              "İletişim ve “hemen ara / yaz” yönlendirme alanları",
              "Kendiniz güncelleyebileceğiniz portföy / proje galerisi",
              "Referans ve müşteri yorumu alanları",
              "İçerikleri kendiniz düzenleyebileceğiniz yönetim paneli",
              "Blog ve makale yayınlama",
              "Proje filtreleme ve kategori düzenleme",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...proDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
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
      "Girişim, Profesyonel ve Kapsamlı paketleri kurumsal web projelerinin farklı ölçeklerine uyum sağlar. Kapsamlı seviyede sayfa sınırı olmadan büyüyebilirsiniz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
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
          {
            label: GROUP_PANEL,
            items: [
              "Hizmetler, hakkımızda ve iletişim sayfaları",
              "Kurumsal e-postanıza düşen iletişim formları",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          { label: GROUP_SUPPORT, items: [] },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        supportDays: "30",
        pages: "10-50",
        languages: "1-5",
        featureGroups: [
          {
            label: GROUP_DEV,
            items: [...commonDesignItems, ...standartDesignExtras],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoStandartItems] },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmetler, hakkımızda ve iletişim sayfaları",
              "Kurumsal e-postanıza düşen iletişim formları",
              "İçerikleri kendiniz düzenleyebileceğiniz yönetim paneli",
              "Blog, haber ve duyuru yayınlama",
              "Ekip ve kadro tanıtım sayfaları",
              "Referanslar ve başarı hikâyeleri",
              "Basın / medya doküman alanı",
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
              "Sağladığınız tasarım dosyasıyla birebir kurumsal arayüz",
              "Yoğun ziyaretçiye dayanıklı, büyümeye hazır altyapı",
            ],
          },
          { label: "SEO & Entegrasyon", items: [...tierSeoProItems] },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmetler, hakkımızda ve iletişim sayfaları",
              "Kurumsal e-postanıza düşen iletişim formları",
              "İçerikleri kendiniz düzenleyebileceğiniz yönetim paneli",
              "Blog, haber ve duyuru yayınlama",
              "Ekip ve kadro tanıtım sayfaları",
              "Referanslar ve başarı hikâyeleri",
              "Basın / medya doküman alanı",
              "İş ilanı ve başvuru formu",
              "Etkinlik ve duyuru takvimi",
              "Video galeri ve medya yönetimi",
            ],
          },
          {
            label: GROUP_LAUNCH,
            items: [...proDeliveryItems],
          },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
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
      "Girişim, Profesyonel ve Kapsamlı paketleri farklı ürün katalogları ve sipariş hacimlerine göre şekillenir. Kapsamlı'da ürün ve kategori sınırı olmadan ölçeklenebilirsiniz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
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
        pages: "10-50",
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
              "Sağladığınız tasarım dosyasıyla birebir mağaza arayüzü",
              "Yoğun ziyaretçiye dayanıklı, büyümeye hazır altyapı",
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
            items: [...commonSupportStandartItems],
          },
        ],
      },
    },
  },
} as const;
