// ---------------------------------------------------------------------------
// Ortak (paylaşılan) özellik grupları
// ---------------------------------------------------------------------------

const commonDesignItems = [
  "Mobil, Tablet ve Masaüstü Uyumu",
  "Çoklu Tarayıcı Uyumluluğu",
  "SSL, HTTPS ve Temel Güvenlik Yapılandırması",
  "Hızlı Yükleme Süreleri ve SEO Dostu Performans Optimizasyonu",
] as const;

const commonSeoItems = ["Sitemap ve robots.txt Yapılandırması"] as const;

const commonIntegrationItems = [
  "KVKK Uyumlu Çerez Bildirimi ve Gizlilik Politikası",
  "İletişim Formu, Google Maps ve Hızlı Ulaşım Bağlantıları",
] as const;

const commonDeliveryItems = [
  "Kaynak Kodu ve Proje Dosyalarının Teslimi",
  "Canlı Yayına Alma Desteği",
  "Hosting Kurulum Adımları ve Yayın Rehberi",
] as const;

const tierSeoTemelItems = [
  ...commonSeoItems,
  ...commonIntegrationItems,
] as const;

const tierSeoStandartItems = [
  ...commonSeoItems,
  "Meta, Open Graph ve Schema Markup Optimizasyonu",
  ...commonIntegrationItems,
  "Google Search Console Kurulumu ve Doğrulaması",
  "Google Analytics 4 Entegrasyonu",
  "Sosyal Medya Bağlantıları ve Paylaşım Alanları",
  "Domain, www/non-www ve Yönlendirme Ayarları",
] as const;

const tierSeoProItems = [
  ...commonSeoItems,
  "Meta, Open Graph ve Schema Markup Optimizasyonu",
  "Kapsamlı Teknik SEO ve İndeksleme Optimizasyonu",
  "Organization, BreadcrumbList ve Benzeri Schema Yapıları",
  ...commonIntegrationItems,
  "Google Search Console Kurulumu ve Doğrulaması",
  "Google Analytics 4 Entegrasyonu",
  "Sosyal Medya Bağlantıları ve Paylaşım Alanları",
  "Domain, www/non-www ve Yönlendirme Ayarları",
  "Dönüşüm Takibi (Form, Tıklama, CTA)",
  "Canlı Destek ve Hızlı İletişim Entegrasyonu",
  "CRM ve E-posta Pazarlama Aracı Entegrasyonu (Mailchimp vb.)",
  "Üçüncü Parti API Entegrasyon Hazırlığı",
] as const;

export const webPackagesTr = {
  // =========================================================================
  // PORTFÖY / TANITIM WEB SİTESİ
  // =========================================================================
  portfolio: {
    title: "Portföy / Tanıtım",
    description:
      "Kişisel markanızı veya işletmenizi güven veren modern bir web sitesiyle öne çıkarın. Portföyünüzü, hizmetlerinizi ve hikâyenizi ziyaretçilere net ve etkileyici bir vitrinde sunun.",
    introP2:
      "Girişim, Profesyonel ve Premium paketleri farklı ölçeklerdeki tanıtım projelerine uyum sağlar. Kapsamı ihtiyaçlarınıza göre netleştirip, büyüdükçe genişleyebilecek bir yapı kuruyorum. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "10-14",
        revisions: "3",
        scope: "1-5",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [...commonDesignItems],
          },
          {
            label: "SEO & Entegrasyon",
            items: [...tierSeoTemelItems],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryItems, "15 Gün Teknik Destek"],
          },
        ],
      },
      standart: {
        deliveryDays: "21-30",
        revisions: "5",
        scope: "1-10",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              ...commonDesignItems,
              "Dark / Light Mod Desteği",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [...tierSeoStandartItems],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [
              "Hizmet / Proje Galerisi için Düzenlenebilir Bölüm",
              "Referans ve Müşteri Yorumu Alanları",
              "Yönetim Paneli",
              "En Fazla 2 Dil Desteği",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryItems,
              "30 Gün Teknik Destek",
              "Kullanım Kılavuzu ve Kısa Yönetim Eğitimi",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "30-45",
        revisions: "7",
        scope: "∞",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              ...commonDesignItems,
              "Dark / Light Mod Desteği",
              "Figma Tasarımlarına Piksel Uyumlu Arayüz Kodlama",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
              "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [...tierSeoProItems],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [
              "Hizmet / Proje Galerisi için Düzenlenebilir Bölüm",
              "Referans ve Müşteri Yorumu Alanları",
              "Yönetim Paneli",
              "En Fazla 5 Dil Desteği",
              "Blog ve Makale Yayınlama Modülü",
              "Proje Filtreleme ve Kategori Yönetimi",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryItems,
              "45 Gün Teknik Destek",
              "Kullanım Kılavuzu ve Kısa Yönetim Eğitimi",
            ],
          },
        ],
      },
    },
  },

  // =========================================================================
  // KURUMSAL WEB SİTESİ
  // =========================================================================
  corporate: {
    title: "Kurumsal",
    description:
      "Kurumsal kimliğinizi yansıtan, güven oluşturan ve müşteri kazandırmaya odaklı web sitesi. Hizmetlerinizi, ekibinizi ve iletişim kanallarınızı profesyonel bir yapıda ziyaretçilerinize sunun.",
    introP2:
      "Girişim, Profesyonel ve Premium paketleri kurumsal web projelerinin farklı ölçeklerine uyum sağlar. Premium seviyede sayfa sınırı olmadan büyüyebilirsiniz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "14-21",
        revisions: "3",
        scope: "1-10",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [...commonDesignItems],
          },
          {
            label: "SEO & Entegrasyon",
            items: [...tierSeoTemelItems],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryItems, "15 Gün Teknik Destek"],
          },
        ],
      },
      standart: {
        deliveryDays: "28-42",
        revisions: "5",
        scope: "1-25",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              ...commonDesignItems,
              "Dark / Light Mod Desteği",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [...tierSeoStandartItems],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [
              "Yönetim Paneli",
              "Kurumsal E-posta ve Form Yönlendirmeleri",
              "Blog, Haber ve Duyuru Yayınlama Modülü",
              "Ekip ve Kadro Tanıtım Sayfaları",
              "Hizmetler, Referanslar ve Başarı Hikayeleri Alanları",
              "Medya, Basın Kiti ve Doküman Sayfaları",
              "En Fazla 2 Dil Desteği",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryItems,
              "30 Gün Teknik Destek",
              "Kullanım Kılavuzu ve Kısa Yönetim Eğitimi",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "42-60",
        revisions: "8",
        scope: "∞",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              ...commonDesignItems,
              "Dark / Light Mod Desteği",
              "Figma Tasarımlarına Piksel Uyumlu Kurumsal Arayüz Kodlama",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
              "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [...tierSeoProItems],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [
              "Blog Altyapısı",
              "Kurumsal E-posta ve Form Yönlendirmeleri",
              "Ekip ve Kadro Tanıtım Sayfaları",
              "Hizmetler, Referanslar ve Başarı Hikayeleri Alanları",
              "Kariyer / İş İlanı Modülü ve Başvuru Formu",
              "Etkinlik, Duyuru ve Takvim Modülü",
              "Kurumsal Doküman İndirme Bölümü",
              "Video Galeri ve Medya Yönetimi",
              "En Fazla 5 Dil Desteği",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryItems,
              "45 Gün Teknik Destek",
              "Kullanım Kılavuzu ve Kısa Yönetim Eğitimi",
            ],
          },
        ],
      },
    },
  },

  // =========================================================================
  // E-TİCARET WEB SİTESİ
  // =========================================================================
  ecommerce: {
    title: "E-Ticaret",
    description:
      "Online satışa hızlı başlamanız için güvenli ödeme altyapısına sahip modern e-ticaret çözümü. Ürünlerinizi, siparişlerinizi ve müşteri deneyiminizi tek panelden yönetebileceğiniz ölçeklenebilir bir mağaza kurun.",
    introP2:
      "Girişim, Profesyonel ve Premium paketleri farklı ürün katalogları ve sipariş hacimlerine göre şekillenir. Premium'da ürün ve kategori sınırı olmadan ölçeklenebilirsiniz. Paketlerden birini seçemiyorsanız bizimle iletişime geçebilirsiniz.",
    tiers: {
      temel: {
        deliveryDays: "21-30",
        revisions: "3",
        scope: "1-15",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [...commonDesignItems],
          },
          {
            label: "SEO & Entegrasyon",
            items: [...tierSeoTemelItems],
          },
          {
            label: "Mağaza & Ödeme",
            items: [
              "Ürün Listeleme ve Detay Sayfaları",
              "Kategori ve Alt Kategori Yönetimi",
              "Sepet ve Sipariş Akışı Yönetimi",
              "Ödeme Yöntemi",
              "Temel Stok Takip Altyapısı",
              "Temel Kargo Firması Entegrasyonu",
            ],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: ["Ürün, Kategori ve Sipariş Yönetimi"],
          },
          {
            label: "Teslim & Destek",
            items: [...commonDeliveryItems, "15 Gün Teknik Destek"],
          },
        ],
      },
      standart: {
        deliveryDays: "42-56",
        revisions: "5",
        scope: "1-35",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              ...commonDesignItems,
              "Dark / Light Mod Desteği",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [...tierSeoStandartItems],
          },
          {
            label: "Mağaza & Ödeme",
            items: [
              "Otomatik E-posta Sipariş Bildirimleri",
              "Mesafeli Satış Sözleşmesi ve Yasal Sayfa Altyapısı",
              "Gelişmiş Ürün, Kategori ve Etiket Yönetimi",
              "Sepet ve Sipariş Akışı Yönetimi",
              "Ödeme Yöntemi",
              "Gelişmiş Stok Takibi ve Düşük Stok Uyarıları",
              "Üyelik, Giriş, Şifre Sıfırlama ve Profil Sayfaları",
              "Sipariş Takip ve Kullanıcı Geçmiş Paneli",
              "Kupon, İndirim ve Kampanya Yönetim Modülü",
              "Favoriler ve İstek Listesi Özelliği",
              "Ürün Varyasyon Desteği (Renk, Beden, Ölçü vb.)",
            ],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [
              "Yönetim Paneli",
              "Ürün, Sipariş, Müşteri ve Stok Yönetimi",
              "En Fazla 2 Dil Desteği",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryItems,
              "30 Gün Teknik Destek",
              "Kullanım Kılavuzu ve Kısa Yönetim Eğitimi",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "56-84",
        revisions: "10",
        scope: "∞",
        featureGroups: [
          {
            label: "Tasarım & Geliştirme",
            items: [
              ...commonDesignItems,
              "Dark / Light Mod Desteği",
              "Figma Tasarımlarına Piksel Uyumlu E-Ticaret Arayüzü Kodlama",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
              "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [...tierSeoProItems],
          },
          {
            label: "Mağaza & Ödeme",
            items: [
              "Otomatik E-posta Sipariş Bildirimleri",
              "Mesafeli Satış Sözleşmesi ve Yasal Sayfa Altyapısı",
              "Gelişmiş Ürün, Kategori ve Etiket Yönetimi",
              "Sepet ve Sipariş Akışı Yönetimi",
              "Çoklu Ödeme Yöntemi: Sanal POS (PayTR vb.) ve Havale/EFT",
              "Gelişmiş Stok Takibi ve Düşük Stok Uyarıları",
              "Üyelik, Giriş, Şifre Sıfırlama ve Profil Sayfaları",
              "Sipariş Takip ve Kullanıcı Geçmiş Paneli",
              "Kupon, İndirim ve Kampanya Yönetim Modülü",
              "Favoriler ve İstek Listesi Özelliği",
              "Çoklu Kargo Firması ve Lojistik Entegrasyonu (Yurtiçi, MNG vb.)",
              "Dinamik Varyasyon ve Fiyat Yönetimi",
              "Terk Edilen Sepet Hatırlatma E-postaları",
              "Ürün Yorumu, Fotoğraflı Değerlendirme ve Puanlama Sistemi",
              "Çapraz Satış ve Önerilen Ürünler Algoritması",
              "Toplu Ürün Import / Export (Excel/CSV)",
              "Fatura ve E-arşiv / Ön Muhasebe Entegrasyon Altyapısı",
            ],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [
              "Yönetim Paneli",
              "Ürün, Sipariş, Müşteri ve Stok Yönetimi",
              "En Fazla 5 Dil Desteği",
              "Çoklu Para Birimi Desteği",
              "Blog ve İçerik Pazarlama Modülü",
              "CRM, SMS ve Pazarlama Araçları Entegrasyonu (Mailchimp vb.)",
            ],
          },
          {
            label: "Teslim & Destek",
            items: [
              ...commonDeliveryItems,
              "45 Gün Teknik Destek",
              "Kullanım Kılavuzu ve Kısa Yönetim Eğitimi",
            ],
          },
        ],
      },
    },
  },
} as const;
