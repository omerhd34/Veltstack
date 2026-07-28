// ---------------------------------------------------------------------------
// Web Sitesi Denetimi
// ---------------------------------------------------------------------------

const webAuditTechnicalTemel = [
  "Lighthouse ve PageSpeed Insights analizi",
  "Core Web Vitals (LCP, INP, CLS) ölçümü",
  "Meta yapısı, başlık hiyerarşisi ve temel SEO kontrolü",
  "Mobil uyumluluk ve responsive davranış testi",
] as const;

const webAuditTechnicalStandart = [
  "Sayfa bazlı performans profili ve darboğaz tespiti",
  "HTTPS, güvenlik başlıkları ve temel güvenlik yapılandırması",
  "Erişilebilirlik (WCAG 2.1) kontrolü",
  "Schema ve yapılandırılmış veri denetimi",
  "Tarama hataları, robots.txt ve indeksleme analizi",
] as const;

const webAuditTechnicalPro = [
  "Kaynak kodu, mimari ve teknik borç değerlendirmesi",
  "Bağımlılık ve bilinen güvenlik açığı taraması",
  "CDN, önbellek ve sunucu yapılandırması incelemesi",
  "Hata logları, izleme altyapısı ve kritik kullanıcı akışları",
  "Sektör benchmark'ı ile performans karşılaştırması",
] as const;

const webAuditReportingTemel = [
  "Etki ve önceliğe göre sıralanmış bulgu listesi",
  "Hızlı kazanım odaklı iyileştirme önerileri",
  "PDF özet denetim raporu",
] as const;

const webAuditReportingStandart = [
  "Etki–çaba matrisi ile önceliklendirilmiş bulgular",
  "Adım adım uygulanabilir iyileştirme planı",
  "Detaylı PDF rapor ve sunum dosyası",
] as const;

const webAuditReportingPro = [
  "İyileştirme yol haritası ve sprint önerisi",
  "1 saatlik sonuç değerlendirme toplantısı",
  "Uygulama kapsamı için teklif önerisi",
] as const;

// ---------------------------------------------------------------------------
// Mobil Uygulama Denetimi
// ---------------------------------------------------------------------------

const appAuditTechnicalTemel = [
  "Açılış süresi ve temel performans testi",
  "Navigasyon akışı ve kullanılabilirlik değerlendirmesi",
  "App Store ve Google Play yönerge uyumluluğu kontrolü",
  "Çökme kayıtları, hata logları ve kararlılık incelemesi",
] as const;

const appAuditTechnicalStandart = [
  "Bellek, CPU ve ağ kullanım profili",
  "API güvenliği, kimlik doğrulama ve yetkilendirme",
  "Çevrimdışı davranış ve veri senkronizasyonu",
  "Push bildirim altyapısı ve teslimat kontrolü",
  "Erişilebilirlik (VoiceOver / TalkBack) değerlendirmesi",
] as const;

const appAuditTechnicalPro = [
  "Kaynak kodu, mimari ve teknik borç değerlendirmesi",
  "Bağımlılık ve bilinen güvenlik açığı taraması",
  "Mağaza onay süreci ve politika risk değerlendirmesi",
  "CI/CD, build süreçleri ve sürüm yönetimi analizi",
  "Backend API entegrasyonu ve hata yönetimi denetimi",
] as const;

const appAuditReportingTemel = [
  "Platform ve önceliğe göre sıralanmış bulgu listesi",
  "Hızlı kazanım odaklı iyileştirme önerileri",
  "PDF özet denetim raporu",
] as const;

const appAuditReportingStandart = [
  "iOS ve Android için ayrıştırılmış bulgular",
  "Adım adım uygulanabilir iyileştirme planı",
  "Detaylı PDF denetim raporu",
] as const;

const appAuditReportingPro = [
  "Yeniden yapılandırma ve modernizasyon yol haritası",
  "1 saatlik sonuç değerlendirme toplantısı",
  "Uygulama kapsamı için teklif önerisi",
] as const;

// ---------------------------------------------------------------------------
// Altyapı ve Güvenlik Denetimi
// ---------------------------------------------------------------------------

const infraAuditTechnicalTemel = [
  "Sunucu kaynak kullanımı (CPU, RAM, disk) analizi",
  "SSL/TLS ve domain yapılandırması kontrolü",
  "Yedekleme sıklığı, saklama ve geri yükleme durumu",
  "Firewall, port ve temel erişim güvenliği incelemesi",
] as const;

const infraAuditTechnicalStandart = [
  "Veritabanı performansı, indeksleme ve yapılandırma",
  "CI/CD pipeline güvenliği ve secret yönetimi",
  "Erişim kontrolü, IAM ve kimlik yönetimi",
  "DDoS koruması ve firewall kuralları değerlendirmesi",
  "Log toplama, izleme ve uyarı altyapısı incelemesi",
] as const;

const infraAuditTechnicalPro = [
  "Bulut altyapısı (AWS / GCP / Azure) mimari ve maliyet incelemesi",
  "Kubernetes ve container güvenlik yapılandırması",
  "Penetrasyon testine hazırlık ve yüzey alanı değerlendirmesi",
  "Felaket kurtarma, yedeklilik ve SLA analizi",
  "Kaynak kullanımı ve maliyet optimizasyonu önerileri",
] as const;

const infraAuditReportingTemel = [
  "Risk ve önceliğe göre sıralanmış bulgu listesi",
  "Acil müdahale gerektiren maddelerin ayrıştırılması",
  "PDF özet denetim raporu",
] as const;

const infraAuditReportingStandart = [
  "İş etkisiyle risk matrisi",
  "Uygulanabilir güvenlik iyileştirme planı",
  "Detaylı PDF denetim raporu",
] as const;

const infraAuditReportingPro = [
  "Altyapı modernizasyon yol haritası",
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
      "Girişim, Profesyonel ve Premium seviyeleriyle web siteniz için farklı derinlikte analiz ve raporlama alırsınız. Bulgular öncelik sırasına göre düzenlenmiş aksiyon planı olarak teslim edilir.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...webAuditTechnicalTemel],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...webAuditReportingTemel],
          },
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
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...webAuditTechnicalPro],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...webAuditReportingPro],
          },
        ],
      },
    },
  },
  appAudit: {
    title: "Mobil Uygulama",
    description:
      "iOS ve Android uygulamanızın performans, güvenlik ve kullanıcı deneyimini platform bazlı değerlendiriyor; öncelikli aksiyon listesi ve rapor sunuyoruz.",
    introP2:
      "Girişim, Profesyonel ve Premium seviyeleriyle mobil uygulamanız için farklı derinlikte analiz ve raporlama alırsınız. Platform bazlı bulgular uygulanabilir aksiyon planına dönüştürülür.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...appAuditTechnicalTemel],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...appAuditReportingTemel],
          },
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
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...appAuditTechnicalPro],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...appAuditReportingPro],
          },
        ],
      },
    },
  },
  infrastructureAudit: {
    title: "Altyapı ve Güvenlik",
    description:
      "Sunucu, veritabanı, CI/CD ve güvenlik altyapınızı sistematik olarak inceliyoruz; riskleri önceliklendirip somut güvenlik aksiyon planı çıkarıyoruz.",
    introP2:
      "Girişim, Profesyonel ve Premium seviyeleriyle altyapınız için farklı derinlikte analiz ve raporlama alırsınız. Riskler öncelik sırasına göre somut güvenlik aksiyonlarına dönüştürülür.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...infraAuditTechnicalTemel],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...infraAuditReportingTemel],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...infraAuditTechnicalStandart],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...infraAuditReportingStandart],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        featureGroups: [
          {
            label: AUDIT_GROUP_TECHNICAL,
            items: [...infraAuditTechnicalPro],
          },
          {
            label: AUDIT_GROUP_REPORTING,
            items: [...infraAuditReportingPro],
          },
        ],
      },
    },
  },
} as const;
