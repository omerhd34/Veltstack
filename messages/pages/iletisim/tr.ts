import {
  BUSINESS_ADDRESS_TEXT_TR,
  BUSINESS_HOURS_LINES_TR,
  BUSINESS_PHONE_DISPLAY,
  GOOGLE_MAPS_URL,
  whatsAppHref,
} from "@/lib/business";

const contactWhatsAppMessage =
  "Merhaba, VeltStack web siteniz üzerinden ulaşıyorum. Web sitesi, mobil uygulama veya dijital yenileme hizmetleriniz hakkında bilgi almak istiyorum. İhtiyacımı kısaca paylaşmak için müsait olduğunuzda yazabilir misiniz?";

export const contactTr = {
  formBadge: "Teklif Talebi",
  formTitle: "Net ihtiyaç, net yol haritası",
  formDescription:
    "Hedefinizi, zaman planınızı ve varsa mevcut altyapınızı kısaca yazın. Size en uygun çözümü ve net bir yol haritasını paylaşalım.",

  fieldName: "Ad ve Soyad",
  fieldNamePlaceholder: "Adınızı ve soyadınızı giriniz",
  fieldEmail: "E-posta",
  fieldEmailPlaceholder: "ornek@sirket.com",
  fieldPhone: "Telefon Numarası",
  fieldPhonePlaceholder: "5XX XXX XX XX",
  fieldPhoneCountryLabel: "Ülke Kodu",
  fieldService: "Hizmet Türü",
  fieldServicePlaceholder: "Hizmet seçiniz",
  fieldPackage: "Paket Seçimi",
  fieldPackagePlaceholder: "Paket seçiniz",
  fieldTier: "Kademe Tipi",
  fieldTierPlaceholder: "Kademe seçiniz",
  fieldBudget: "Bütçe Aralığı",
  fieldBudgetPlaceholder: "Bütçe seçiniz",
  fieldMessage: "Mesajınız",
  fieldMessagePlaceholder:
    "Projenizi, beklentilerinizi ve varsa teknik gereksinimlerinizi anlatın…",
  fieldAttachment: "Dosya ekle",
  fieldAttachmentHint:
    "Brief, logo veya referans dosyası paylaşırsanız teklifi daha net hazırlarız. PDF, görsel veya Word · en fazla 10 MB.",
  fieldAttachmentButton: "Dosya seçiniz",
  fieldAttachmentRemove: "Kaldır",
  errorAttachmentSize: "Dosya en fazla 10 MB olabilir.",
  errorAttachmentType:
    "Desteklenen formatlar: PDF, PNG, JPG, WEBP, DOC, DOCX, ZIP.",
  errorAttachmentUnavailable:
    "Dosya yükleme şu an kullanılamıyor. Formu dosyasız gönderebilir veya e-posta ile iletebilirsiniz.",

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

  errorMessage:
    "Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",

  infoBadge: "İletişim Kanalları",
  infoTitle: "Tercih ettiğiniz kanaldan ulaşın.",

  contactItems: [
    {
      label: "Çalışma saatleri",
      hoursLines: BUSINESS_HOURS_LINES_TR,
      icon: "clock" as const,
    },
    {
      label: "WhatsApp",
      value: BUSINESS_PHONE_DISPLAY,
      href: whatsAppHref(contactWhatsAppMessage),
    },
    {
      label: "E-posta",
      value: "veltstack@outlook.com",
      href: "mailto:veltstack@outlook.com",
    },
    {
      label: "Adres",
      value: BUSINESS_ADDRESS_TEXT_TR,
      href: GOOGLE_MAPS_URL,
      icon: "location" as const,
    },
    {
      label: "Portfolyo",
      value: "omerhalisdemir.com.tr",
      href: "https://www.omerhalisdemir.com.tr/",
    },
    {
      label: "LınkedIn",
      value: "omerhd1",
      href: "https://www.linkedin.com/in/omerhd1/",
    },
    {
      label: "Instagram",
      value: "veltstack",
      href: "https://www.instagram.com/veltstack/",
    },
  ],
} as const;
