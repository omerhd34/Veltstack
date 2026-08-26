export const contactTr = {
  formBadge: "Teklif Talebi",
  formTitle: "Net ihtiyaç, net yol haritası",
  formDescription:
    "Hedefinizi, zaman planınızı ve varsa mevcut altyapınızı kısaca yazın. Size en uygun çözümü ve net bir yol haritasını paylaşalım.",

  fieldName: "Ad Soyad",
  fieldNamePlaceholder: "Adınız ve soyadınız",
  fieldEmail: "E-posta",
  fieldEmailPlaceholder: "ornek@sirket.com",
  fieldPhone: "Telefon",
  fieldPhonePlaceholder: "5XX XXX XX XX",
  fieldPhoneCountryLabel: "Ülke kodu",
  fieldService: "Hizmet Türü",
  fieldServicePlaceholder: "Hizmet seçin.",
  fieldPackage: "Paket Seçimi",
  fieldPackagePlaceholder: "Paket seçin.",
  fieldTier: "Kademe Tipi",
  fieldTierPlaceholder: "Kademe seçin.",
  fieldBudget: "Bütçe Aralığı",
  fieldBudgetPlaceholder: "Bütçe seçin.",
  fieldMessage: "Mesajınız",
  fieldMessagePlaceholder:
    "Projenizi, beklentilerinizi ve varsa teknik gereksinimlerinizi anlatın…",

  serviceOptions: [
    { value: "web-sitesi-gelistirme", label: "Web Sitesi Yapımı" },
    { value: "dijital-yenileme", label: "Dijital Yenileme" },
    { value: "uygulama-gelistirme", label: "Uygulama Yapımı" },
    { value: "seo-hizmetleri", label: "SEO Hizmetleri" },
    { value: "teknik-denetim", label: "Teknik Denetim" },
    { value: "bakim-ve-destek", label: "Bakım & Destek" },
    { value: "diger", label: "Diğer / Belirsiz" },
  ],

  tierOptions: [
    { value: "temel", label: "Girişim" },
    { value: "standart", label: "Profesyonel" },
    { value: "pro", label: "Kapsamlı" },
    { value: "belirsiz", label: "Belirsiz" },
  ],

  servicePackages: {
    "web-sitesi-gelistirme": [
      { value: "onePage", label: "Tek Sayfalık Web Sitesi" },
      { value: "portfolio", label: "Portfolyo / Kişisel Web Sitesi" },
      { value: "corporate", label: "Kurumsal Web Sitesi" },
      { value: "ecommerce", label: "E-Ticaret Web Sitesi" },
      { value: "catalog", label: "Katalog / B2B Web Sitesi" },
      { value: "listing", label: "İlan / Emlak Web Sitesi" },
      { value: "booking", label: "Rezervasyon Web Sitesi" },
      { value: "education", label: "Eğitim / Kurs Web Sitesi" },
    ],
    "dijital-yenileme": [
      { value: "onePage", label: "Tek Sayfalık Site Yenileme" },
      { value: "portfolio", label: "Portfolyo / Kişisel Sitesi Yenileme" },
      { value: "corporate", label: "Kurumsal Site Yenileme" },
      { value: "ecommerce", label: "E-Ticaret Sitesi Yenileme" },
      { value: "catalog", label: "Katalog / B2B Site Yenileme" },
      { value: "listing", label: "İlan / Emlak Site Yenileme" },
      { value: "booking", label: "Rezervasyon Site Yenileme" },
      { value: "education", label: "Eğitim / Kurs Site Yenileme" },
    ],
    "uygulama-gelistirme": [
      { value: "portfolio", label: "Portfolyo / Kişisel Uygulaması" },
      { value: "corporate", label: "Kurumsal Mobil Uygulama" },
      { value: "ecommerce", label: "E-Ticaret Mobil Uygulama" },
    ],
    "seo-hizmetleri": [
      { value: "seoServices", label: "Dijital Pazarlama & SEO" },
    ],
    "teknik-denetim": [
      { value: "auditServices", label: "Teknik Denetim Hizmetleri" },
    ],
    "bakim-ve-destek": [
      { value: "maintenanceServices", label: "Bakım & Destek Hizmetleri" },
    ],
  },

  budgetOptions: [
    { value: "0k-25k", label: "0 - 25.000 ₺" },
    { value: "25k-50k", label: "25.000 - 50.000 ₺" },
    { value: "50k-75k", label: "50.000 - 75.000 ₺" },
    { value: "75k-100k", label: "75.000 - 100.000 ₺" },
    { value: "100k-150k", label: "100.000 - 150.000 ₺" },
    { value: "150k-200k", label: "150.000 - 200.000 ₺" },
    { value: "200k-250k", label: "200.000 - 250.000 ₺" },
    { value: "250k+", label: "250.000 ₺ ve üzeri" },
    { value: "belirsiz", label: "Belirsiz" },
  ],

  submitButton: "Gönder ve Teklif Al",
  submitting: "Gönderiliyor…",

  successTitle: "Mesajınız iletildi!",
  successMessage:
    "En kısa sürede, genellikle 24 saat içinde uzman ekibimiz size özel yol haritasıyla dönüş yapacak. Teşekkürler!",
  successButtonBack: "Yeni mesaj gönder",

  errorMessage:
    "Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",

  infoBadge: "İletişim Kanalları",
  infoTitle: "Tercih ettiğiniz kanaldan ulaşın.",

  contactItems: [
    { label: "Telefon", value: "+90 507 849 29 03", href: "tel:+905078492903" },
    {
      label: "WhatsApp",
      href: "https://wa.me/905078492903",
      value: "+90 507 849 29 03",
    },
    {
      label: "E-posta",
      value: "veltstack@outlook.com",
      href: "mailto:veltstack@outlook.com",
    },
    {
      label: "Portfolyo",
      value: "omerhalisdemir.com.tr",
      href: "https://www.omerhalisdemir.com.tr/",
    },
    {
      label: "LinkedIn",
      value: "omerhd1",
      href: "https://www.linkedin.com/in/omerhd1/",
    },
  ],
} as const;
