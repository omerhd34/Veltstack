// ---------------------------------------------------------------------------
// Ortak (paylaşılan) özellik grupları
// ---------------------------------------------------------------------------

const commonDesignItems = [
  "Duyarlı (Responsive) Tasarım — Mobil, Tablet ve Masaüstü Uyumu",
  "Çoklu Tarayıcı Uyumluluğu (Chrome, Safari, Firefox, Edge)",
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
  "Canlı Yayına Alma (Deploy) Desteği",
  "Hosting Kurulum Adımları ve Yayın Rehberi",
] as const;

export const webPackagesTr = {
  // =========================================================================
  // PORTFÖY / TANITIM WEB SİTESİ
  // =========================================================================
  portfolio: {
    title: "Portföy / Tanıtım Web Sitesi",
    description:
      "Kişisel markanızı veya işletmenizi güven veren modern bir web sitesiyle öne çıkarın.",
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
            items: [...commonSeoItems, ...commonIntegrationItems],
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
              "Dark / Light Mode Desteği",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [
              ...commonSeoItems,
              "Meta, Open Graph ve Schema Markup Optimizasyonu",
              ...commonIntegrationItems,
              "Google Search Console Kurulumu ve Doğrulaması",
              "Google Analytics 4 Entegrasyonu",
              "Sosyal Medya Paylaşım Bağlantıları",
              "Domain, www/non-www ve Yönlendirme Ayarları",
            ],
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
              "Dark / Light Mode Desteği",
              "Figma Tasarımlarına Piksel Uyumlu Arayüz Kodlama",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
              "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [
              ...commonSeoItems,
              "Meta, Open Graph ve Schema Markup Optimizasyonu",
              "Kapsamlı Teknik SEO ve İndeksleme Optimizasyonu",
              "Open Graph ve Sosyal Paylaşım Kartı Yapılandırması",
              ...commonIntegrationItems,
              "Google Search Console Kurulumu ve Doğrulaması",
              "Google Analytics 4 Entegrasyonu",
              "Sosyal Medya Paylaşım Bağlantıları",
              "Domain, www/non-www ve Yönlendirme Ayarları",
              "Dönüşüm Takibi (Form, Tıklama, CTA)",
            ],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [
              "Hizmet / Proje Galerisi için Düzenlenebilir Bölüm",
              "Referans ve Müşteri Yorumu Alanları",
              "Yönetim Paneli",
              "Blog ve Makale Yayınlama Modülü",
              "Proje Filtreleme ve Kategori Yönetimi",
              "Sınırsız Dil Desteği",
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
    title: "Kurumsal Web Sitesi",
    description:
      "Kurumsal kimliğinizi yansıtan, güven oluşturan ve müşteri kazandırmaya odaklı web sitesi.",
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
            items: [...commonSeoItems, ...commonIntegrationItems],
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
              "Dark / Light Mode Desteği",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [
              ...commonSeoItems,
              "Meta, Open Graph ve Schema Markup Optimizasyonu",
              ...commonIntegrationItems,
              "Google Search Console Kurulumu ve Doğrulaması",
              "Google Analytics 4 Entegrasyonu",
              "Kurumsal E-posta ve Form Yönlendirmeleri",
              "Sosyal Medya Bağlantıları ve Paylaşım Alanları",
            ],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [
              "Yönetim Paneli",
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
              "Dark / Light Mode Desteği",
              "Figma Tasarımlarına Piksel Uyumlu Kurumsal Arayüz Kodlama",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
              "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [
              ...commonSeoItems,
              "Meta, Open Graph ve Schema Markup Optimizasyonu",
              "Kapsamlı Teknik SEO ve İndeksleme Optimizasyonu",
              "Organization, BreadcrumbList ve Benzeri Schema Yapıları",
              ...commonIntegrationItems,
              "Google Search Console Kurulumu ve Doğrulaması",
              "Google Analytics 4 Entegrasyonu",
              "Kurumsal E-posta ve Form Yönlendirmeleri",
              "Sosyal Medya Bağlantıları ve Paylaşım Alanları",
              "Dönüşüm ve Form Takibi",
              "Canlı Destek ve Hızlı İletişim Entegrasyonu",
              "CRM ve E-posta Pazarlama Aracı Entegrasyonu (Mailchimp vb.)",
              "Üçüncü Parti API Entegrasyon Hazırlığı",
            ],
          },
          {
            label: "İçerik & Yönetim Paneli",
            items: [
              "Blog Altyapısı",
              "Ekip ve Kadro Tanıtım Sayfaları",
              "Hizmetler, Referanslar ve Başarı Hikayeleri Alanları",
              "Kariyer / İş İlanı Modülü ve Başvuru Formu",
              "Etkinlik, Duyuru ve Takvim Modülü",
              "Kurumsal Doküman İndirme Bölümü",
              "Video Galeri ve Medya Yönetimi",
              "Sınırsız Dil Desteği",
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
    title: "E-Ticaret Web Sitesi",
    description:
      "Online satışa hızlı başlamanız için güvenli ödeme altyapısına sahip modern e-ticaret çözümü.",
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
            items: [...commonSeoItems, ...commonIntegrationItems],
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
              "Dark / Light Mode Desteği",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [
              ...commonSeoItems,
              "Gelişmiş SEO (Meta, OG, Ürün Schema Markup)",
              ...commonIntegrationItems,
              "Google Search Console Kurulumu ve Doğrulaması",
              "Google Analytics 4 Entegrasyonu",
              "Otomatik E-posta Sipariş Bildirimleri",
              "Mesafeli Satış Sözleşmesi ve Yasal Sayfa Altyapısı",
            ],
          },
          {
            label: "Mağaza & Ödeme",
            items: [
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
              "Gelişmiş Mağaza Yönetim Paneli (CMS)",
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
              "Dark / Light Mode Desteği",
              "Figma Tasarımlarına Piksel Uyumlu E-Ticaret Arayüzü Kodlama",
              "Akıcı Sayfa Geçişleri ve Mikro Etkileşimler",
              "Yüksek Trafik İçin Ölçeklenebilir Altyapı",
            ],
          },
          {
            label: "SEO & Entegrasyon",
            items: [
              ...commonSeoItems,
              "Gelişmiş SEO (Meta, OG, Ürün Schema Markup)",
              "Kapsamlı Teknik E-Ticaret SEO Optimizasyonu",
              "Gelişmiş Product, Review ve Offer Schema Markup",
              ...commonIntegrationItems,
              "Google Search Console Kurulumu ve Doğrulaması",
              "Google Analytics 4 Entegrasyonu",
              "Otomatik E-posta Sipariş Bildirimleri",
              "Mesafeli Satış Sözleşmesi ve Yasal Sayfa Altyapısı",
              "Google Merchant Center / Alışveriş Entegrasyon Altyapısı",
              "GA4 E-Ticaret Dönüşüm Raporlama",
              "Dönüşüm, Form ve Sepet Takibi",
            ],
          },
          {
            label: "Mağaza & Ödeme",
            items: [
              "Gelişmiş Ürün, Kategori ve Etiket Yönetimi",
              "Sepet ve Sipariş Akışı Yönetimi",
              "Ödeme Yöntemi",
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
              "Kapsamlı E-Ticaret Yönetim Paneli (Advanced CMS)",
              "Ürün, Sipariş, Müşteri ve Stok Yönetimi",
              "Sınırsız Dil Desteği",
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
