const webAuditTechnicalTemel = [
  "Lighthouse ve PageSpeed Insights analizi",
  "Core Web Vitals (LCP, INP, CLS) ölçümü",
  "Meta yapısı ve başlık hiyerarşisi kontrolü",
  "Mobil uyumluluk ve responsive test",
] as const;

const webAuditTechnicalStandart = [
  ...webAuditTechnicalTemel,
  "Sayfa bazlı performans profili ve darboğaz tespiti",
  "HTTPS ve güvenlik başlıkları kontrolü",
  "Erişilebilirlik (WCAG 2.1) denetimi",
  "Schema ve yapılandırılmış veri kontrolü",
  "Tarama hataları ve indeksleme analizi",
] as const;

const webAuditTechnicalPro = [
  ...webAuditTechnicalStandart,
  "Kaynak kodu, mimari ve teknik borç değerlendirmesi",
  "Bağımlılık ve güvenlik açığı taraması",
  "CDN, önbellek ve sunucu yapılandırması incelemesi",
  "Hata logları ve kritik kullanıcı akışları",
  "Sektör benchmark karşılaştırması",
] as const;

const webAuditReportingTemel = [
  "Önceliklendirilmiş bulgu listesi",
  "Hızlı kazanım önerileri",
  "PDF özet denetim raporu",
] as const;

const webAuditReportingStandart = [
  ...webAuditReportingTemel,
  "Etki–çaba matrisi",
  "Adım adım uygulanabilir iyileştirme planı",
  "Detaylı PDF rapor ve sunum dosyası",
] as const;

const webAuditReportingPro = [
  ...webAuditReportingStandart,
  "İyileştirme yol haritası ve sprint önerisi",
  "1 saatlik sonuç değerlendirme toplantısı",
  "Uygulama kapsamı için teklif önerisi",
] as const;

const appAuditTechnicalTemel = [
  "Açılış süresi ve temel performans testi",
  "Navigasyon akışı ve kullanılabilirlik değerlendirmesi",
  "App Store ve Google Play yönerge uyumluluğu",
  "Çökme kayıtları ve kararlılık incelemesi",
] as const;

const appAuditTechnicalStandart = [
  ...appAuditTechnicalTemel,
  "Bellek, CPU ve ağ kullanım profili",
  "API güvenliği ve kimlik doğrulama kontrolü",
  "Çevrimdışı davranış ve veri senkronizasyonu",
  "Push bildirim altyapısı kontrolü",
  "Erişilebilirlik (VoiceOver / TalkBack) değerlendirmesi",
] as const;

const appAuditTechnicalPro = [
  ...appAuditTechnicalStandart,
  "Kaynak kodu, mimari ve teknik borç değerlendirmesi",
  "Bağımlılık ve güvenlik açığı taraması",
  "Mağaza onay süreci ve politika risk değerlendirmesi",
  "CI/CD ve sürüm yönetimi analizi",
  "Backend API ve hata yönetimi denetimi",
] as const;

const appAuditReportingTemel = [
  "Platform bazlı önceliklendirilmiş bulgu listesi",
  "Hızlı kazanım önerileri",
  "PDF özet denetim raporu",
] as const;

const appAuditReportingStandart = [
  ...appAuditReportingTemel,
  "iOS ve Android için ayrıştırılmış bulgular",
  "Adım adım uygulanabilir iyileştirme planı",
  "Detaylı PDF denetim raporu",
] as const;

const appAuditReportingPro = [
  ...appAuditReportingStandart,
  "Modernizasyon yol haritası",
  "1 saatlik sonuç değerlendirme toplantısı",
  "Uygulama kapsamı için teklif önerisi",
] as const;

const AUDIT_GROUP_TECHNICAL = "Teknik Denetim";
const AUDIT_GROUP_REPORTING = "Raporlama & Destek";

export const auditPackagesTr = {
  webAudit: {
    title: "Web Sitesi",
    description:
      "Web sitenizin performans, güvenlik, SEO ve kod kalitesini uçtan uca analiz ediyoruz; bulguları öncelik sırasına koyarak uygulanabilir iyileştirme planı sunuyoruz.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı seviyeleriyle web siteniz için farklı derinlikte analiz ve raporlama alırsınız. Bulgular öncelik sırasına göre düzenlenmiş aksiyon planı olarak teslim edilir.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        featureGroups: [
          { label: AUDIT_GROUP_TECHNICAL, items: [...webAuditTechnicalTemel] },
          { label: AUDIT_GROUP_REPORTING, items: [...webAuditReportingTemel] },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...webAuditTechnicalStandart],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...webAuditReportingStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        featureGroups: [
          { label: AUDIT_GROUP_TECHNICAL, items: [...webAuditTechnicalPro] },
          { label: AUDIT_GROUP_REPORTING, items: [...webAuditReportingPro] },
        ],
      },
    },
  },
  appAudit: {
    title: "Mobil Uygulama",
    description:
      "iOS ve Android uygulamanızın performans, güvenlik ve kullanıcı deneyimini platform bazlı değerlendiriyor; öncelikli aksiyon listesi ve rapor sunuyoruz.",
    introP2:
      "Girişim, Profesyonel ve Kapsamlı seviyeleriyle mobil uygulamanız için farklı derinlikte analiz ve raporlama alırsınız. Platform bazlı bulgular uygulanabilir aksiyon planına dönüştürülür.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        featureGroups: [
          { label: AUDIT_GROUP_TECHNICAL, items: [...appAuditTechnicalTemel] },
          { label: AUDIT_GROUP_REPORTING, items: [...appAuditReportingTemel] },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...appAuditTechnicalStandart],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...appAuditReportingStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        featureGroups: [
          { label: AUDIT_GROUP_TECHNICAL, items: [...appAuditTechnicalPro] },
          { label: AUDIT_GROUP_REPORTING, items: [...appAuditReportingPro] },
        ],
      },
    },
  },
} as const;
