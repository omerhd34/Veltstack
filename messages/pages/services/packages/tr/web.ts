// ---------------------------------------------------------------------------
// Ortak (paylaşılan) özellik grupları
// ---------------------------------------------------------------------------

const commonDesignItems = [
  "Mobil, tablet ve masaüstünde akıcı responsive tasarım",
  "SSL / HTTPS ve temel güvenlik yapılandırması",
  "Hızlı açılan sayfalar (Google hız skorları)",
  "Erişilebilir, modern arayüz ve tipografi",
] as const;

const commonSeoItems = ["Sitemap ve robots.txt yapılandırması"] as const;

const commonIntegrationItems = [
  "KVKK uyumlu çerez bildirimi ve gizlilik sayfası",
  "İletişim formu, harita ve hızlı ulaşım bağlantıları",
] as const;

const commonDeliveryItems = [
  "Kaynak kodu ve proje dosyalarının teslimi",
  "Canlı yayına alma desteği",
  "Domain, www ve yönlendirme ayarları",
  "Hosting kurulum ve yayın rehberi",
  "Performans Garantisi (PageSpeed)",
] as const;

const commonSupportStandartItems = [
  "Kullanım kılavuzu ve kısa yönetim eğitimi",
] as const;

const GROUP_DEV = "Geliştirme & Altyapı";
const GROUP_SEO = "SEO & Analitik";
const GROUP_INTEGRATION = "Entegrasyonlar";
const GROUP_PANEL = "İçerik & Yönetim";
const GROUP_LAUNCH = "Yayın & Teslimat";
const GROUP_SUPPORT = "Teknik Destek";
const GROUP_STORE = "Mağaza & Ödeme";

const tierSeoTemelItems = [...commonSeoItems] as const;

const tierSeoStandartItems = [
  ...commonSeoItems,
  "Arama ve sosyal medyada doğru önizleme görünümü",
  "Aramada görünürlük takibi (Google Search Console)",
  "Ziyaretçi ve trafik ölçümü (Google Analytics)",
] as const;

const tierSeoProItems = [
  ...tierSeoStandartItems,
  "Kapsamlı teknik SEO ve indeksleme optimizasyonu",
  "Arama sonuçlarında zengin ve öne çıkan görünüm",
  "Dönüşüm takibi (form, tıklama, CTA)",
] as const;

const tierIntegrationTemelItems = [...commonIntegrationItems] as const;

const tierIntegrationStandartItems = [...commonIntegrationItems] as const;

const tierIntegrationProItems = [
  ...commonIntegrationItems,
  "Canlı destek veya WhatsApp entegrasyonu",
  "CRM / e-posta pazarlama aracı bağlantısı",
] as const;

const tierIntegrationEcommerceProItems = [
  ...commonIntegrationItems,
  "Canlı destek veya WhatsApp entegrasyonu",
  "CRM, SMS ve pazarlama aracı entegrasyonu",
] as const;

export const webPackagesTr = {
  portfolio: {
    title: "Portföy / Tanıtım",
    description:
      "Kişisel markanızı veya işletmenizi güven veren modern bir web sitesiyle öne çıkarın. Portföyünüzü, hizmetlerinizi ve hikâyenizi ziyaretçilere net ve etkileyici bir vitrinde sunun.",
    introP2:
      "Girişim, Profesyonel ve Gelişmiş paketleri farklı ölçeklerdeki tanıtım projelerine uyum sağlar. Kapsamı ihtiyaçlarınıza göre netleştirip, büyüdükçe genişleyebilecek bir yapı kuruyorum. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "10-14",
        revisions: "3",
        supportDays: "15",
        pages: "0-10",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: GROUP_SEO, items: [...tierSeoTemelItems] },
          { label: GROUP_INTEGRATION, items: [...tierIntegrationTemelItems] },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmet ve proje tanıtım bölümleri",
              "İletişim ve çağrıya yönlendirme alanları",
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
            items: [
              ...commonDesignItems,
              "Koyu / açık mod desteği",
              "Akıcı sayfa geçişleri ve mikro etkileşimler",
            ],
          },
          { label: GROUP_SEO, items: [...tierSeoStandartItems] },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationStandartItems],
          },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmet ve proje tanıtım bölümleri",
              "İletişim ve çağrıya yönlendirme alanları",
              "Düzenlenebilir portföy / proje galerisi",
              "Referans ve müşteri yorumu alanları",
              "İçerik yönetim paneli",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
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
              "Koyu / açık mod desteği",
              "Figma’dan piksel uyumlu arayüz kodlama",
              "Akıcı sayfa geçişleri ve mikro etkileşimler",
              "Yüksek trafiğe hazır ölçeklenebilir altyapı",
            ],
          },
          { label: GROUP_SEO, items: [...tierSeoProItems] },
          { label: GROUP_INTEGRATION, items: [...tierIntegrationProItems] },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmet ve proje tanıtım bölümleri",
              "İletişim ve çağrıya yönlendirme alanları",
              "Düzenlenebilir portföy / proje galerisi",
              "Referans ve müşteri yorumu alanları",
              "İçerik yönetim paneli",
              "Blog ve makale yayınlama modülü",
              "Proje filtreleme ve kategori yönetimi",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
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
      "Girişim, Profesyonel ve Gelişmiş paketleri kurumsal web projelerinin farklı ölçeklerine uyum sağlar. Gelişmiş seviyede sayfa sınırı olmadan büyüyebilirsiniz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        supportDays: "15",
        pages: "0-10",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: GROUP_SEO, items: [...tierSeoTemelItems] },
          { label: GROUP_INTEGRATION, items: [...tierIntegrationTemelItems] },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmetler, hakkımızda ve iletişim sayfaları",
              "Kurumsal e-posta yönlendirmeli formlar",
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
            items: [
              ...commonDesignItems,
              "Koyu / açık mod desteği",
              "Akıcı sayfa geçişleri ve mikro etkileşimler",
            ],
          },
          { label: GROUP_SEO, items: [...tierSeoStandartItems] },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationStandartItems],
          },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmetler, hakkımızda ve iletişim sayfaları",
              "Kurumsal e-posta yönlendirmeli formlar",
              "İçerik yönetim paneli",
              "Blog, haber ve duyuru yayınlama",
              "Ekip ve kadro tanıtım sayfaları",
              "Referanslar ve başarı hikâyeleri",
              "Medya / basın kiti ve doküman alanı",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
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
              "Koyu / açık mod desteği",
              "Figma’dan piksel uyumlu kurumsal arayüz",
              "Akıcı sayfa geçişleri ve mikro etkileşimler",
              "Yüksek trafiğe hazır ölçeklenebilir altyapı",
            ],
          },
          { label: GROUP_SEO, items: [...tierSeoProItems] },
          { label: GROUP_INTEGRATION, items: [...tierIntegrationProItems] },
          {
            label: GROUP_PANEL,
            items: [
              "Hizmetler, hakkımızda ve iletişim sayfaları",
              "Kurumsal e-posta yönlendirmeli formlar",
              "İçerik yönetim paneli",
              "Blog, haber ve duyuru yayınlama",
              "Ekip ve kadro tanıtım sayfaları",
              "Referanslar ve başarı hikâyeleri",
              "Medya / basın kiti ve doküman alanı",
              "Kariyer / iş ilanı modülü ve başvuru formu",
              "Etkinlik ve duyuru takvimi",
              "Video galeri ve medya yönetimi",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
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
      "Girişim, Profesyonel ve Gelişmiş paketleri farklı ürün katalogları ve sipariş hacimlerine göre şekillenir. Gelişmiş'te ürün ve kategori sınırı olmadan ölçeklenebilirsiniz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        supportDays: "15",
        pages: "0-10",
        languages: "1",
        featureGroups: [
          { label: GROUP_DEV, items: [...commonDesignItems] },
          { label: GROUP_SEO, items: [...tierSeoTemelItems] },
          { label: GROUP_INTEGRATION, items: [...tierIntegrationTemelItems] },
          {
            label: GROUP_STORE,
            items: [
              "Ürün listeleme ve detay sayfaları",
              "Kategori yönetimi",
              "Sepet ve ödeme akışı",
              "Tekil sanal POS entegrasyonu",
              "Temel stok takibi",
              "Tek kargo firması entegrasyonu",
            ],
          },
          {
            label: GROUP_PANEL,
            items: ["Ürün, kategori ve sipariş yönetimi"],
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
            items: [
              ...commonDesignItems,
              "Koyu / açık mod desteği",
              "Akıcı sayfa geçişleri ve mikro etkileşimler",
            ],
          },
          { label: GROUP_SEO, items: [...tierSeoStandartItems] },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationStandartItems],
          },
          {
            label: GROUP_STORE,
            items: [
              "Ürün listeleme ve detay sayfaları",
              "Kategori yönetimi",
              "Sepet ve ödeme akışı",
              "Tekil sanal POS entegrasyonu",
              "Temel stok takibi",
              "Tek kargo firması entegrasyonu",
              "Otomatik sipariş e-posta bildirimleri",
              "Mesafeli satış sözleşmesi ve yasal sayfalar",
              "Gelişmiş ürün, etiket ve varyasyon yönetimi",
              "Düşük stok uyarıları",
              "Üyelik, giriş ve profil sayfaları",
              "Sipariş takip paneli",
              "Kupon ve kampanya yönetimi",
              "Favoriler / istek listesi",
            ],
          },
          {
            label: GROUP_PANEL,
            items: [
              "Ürün, kategori ve sipariş yönetimi",
              "Mağaza yönetim paneli",
              "Müşteri ve stok yönetimi",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
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
              "Koyu / açık mod desteği",
              "Figma’dan piksel uyumlu e-ticaret arayüzü",
              "Akıcı sayfa geçişleri ve mikro etkileşimler",
              "Yüksek trafiğe hazır ölçeklenebilir altyapı",
            ],
          },
          { label: GROUP_SEO, items: [...tierSeoProItems] },
          {
            label: GROUP_INTEGRATION,
            items: [...tierIntegrationEcommerceProItems],
          },
          {
            label: GROUP_STORE,
            items: [
              "Ürün listeleme ve detay sayfaları",
              "Kategori yönetimi",
              "Sepet ve ödeme akışı",
              "Tekil sanal POS entegrasyonu",
              "Temel stok takibi",
              "Tek kargo firması entegrasyonu",
              "Otomatik sipariş e-posta bildirimleri",
              "Mesafeli satış sözleşmesi ve yasal sayfalar",
              "Gelişmiş ürün, etiket ve varyasyon yönetimi",
              "Düşük stok uyarıları",
              "Üyelik, giriş ve profil sayfaları",
              "Sipariş takip paneli",
              "Kupon ve kampanya yönetimi",
              "Favoriler / istek listesi",
              "Çoklu ödeme: sanal POS ve havale / EFT",
              "Çoklu kargo ve lojistik entegrasyonu",
              "Dinamik varyasyon ve fiyat yönetimi",
              "Terk edilen sepet hatırlatma e-postaları",
              "Ürün yorumu, puanlama ve fotoğraflı değerlendirme",
              "Çapraz satış ve ürün önerileri",
              "Toplu ürün import / export (Excel / CSV)",
              "Fatura ve e-arşiv entegrasyon hazırlığı",
            ],
          },
          {
            label: GROUP_PANEL,
            items: [
              "Ürün, kategori ve sipariş yönetimi",
              "Mağaza yönetim paneli",
              "Müşteri ve stok yönetimi",
              "Çoklu para birimi desteği",
              "Blog ve içerik pazarlama modülü",
            ],
          },
          { label: GROUP_LAUNCH, items: [...commonDeliveryItems] },
          {
            label: GROUP_SUPPORT,
            items: [...commonSupportStandartItems],
          },
        ],
      },
    },
  },
} as const;
