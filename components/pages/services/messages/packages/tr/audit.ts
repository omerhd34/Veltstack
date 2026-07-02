export const auditPackagesTr = {
  webAudit: {
    title: "Web Sitesi Teknik Denetimi",
    description:
      "Web sitenizin performans, güvenlik, SEO ve kod kalitesini kapsamlı analiz edin.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        scope: "1",
        featureGroups: [
          {
            label: "Performans, SEO & UX",
            items: [
              "Lighthouse, PageSpeed ve Core Web Vitals analizi",
              "Core Web Vitals değerlendirmesi",
              "Temel SEO ve meta yapı kontrolü",
              "Mobil uyumluluk ve responsive davranış testi",
            ],
          },
          {
            label: "Rapor & Önceliklendirme",
            items: [
              "Önceliklendirilmiş bulgu listesi",
              "Temel iyileştirme önerileri",
              "PDF formatında özet denetim raporu",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        scope: "1",
        featureGroups: [
          {
            label: "Kapsamlı Teknik Analiz",
            items: [
              "Detaylı performans profili",
              "Güvenlik ve HTTPS yapılandırması",
              "Erişilebilirlik (WCAG) kontrolü",
              "Schema ve yapılandırılmış veri denetimi",
              "Tarama hataları ve indeksleme analizi",
            ],
          },
          {
            label: "Rapor & Aksiyon Planı",
            items: [
              "Etki analizi ile öncelik matrisi",
              "Uygulanabilir aksiyon planı",
              "Detaylı PDF rapor ve sunum",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        scope: "1",
        featureGroups: [
          {
            label: "Derin Teknik İnceleme",
            items: [
              "Kaynak kodu, mimari ve teknik borç analizi",
              "Bağımlılık ve güvenlik açığı taraması",
              "CDN, önbellek ve sunucu yapılandırması",
              "Log, hata izleme ve kritik akış analizi",
              "Rakip performans karşılaştırması",
            ],
          },
          {
            label: "Strateji & Sonraki Adımlar",
            items: [
              "Yol haritası ve sprint planı",
              "1 saatlik sonuç değerlendirme görüşmesi",
              "Uygulama desteği için teklif hazırlığı",
            ],
          },
        ],
      },
    },
  },
  appAudit: {
    title: "Mobil Uygulama Teknik Denetimi",
    description:
      "iOS ve Android uygulamanızın performans, güvenlik ve kullanıcı deneyimini analiz edin.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        scope: "1",
        featureGroups: [
          {
            label: "Performans & Kullanım Analizi",
            items: [
              "Açılış süresi ve performans testi",
              "Temel UX ve navigasyon değerlendirmesi",
              "Store uyumluluk kontrolü",
              "Crash, hata logları ve kararlılık incelemesi",
            ],
          },
          {
            label: "Rapor & Önceliklendirme",
            items: [
              "Önceliklendirilmiş bulgu listesi",
              "Temel iyileştirme önerileri",
              "PDF formatında özet denetim raporu",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        scope: "1",
        featureGroups: [
          {
            label: "Kapsamlı Teknik Analiz",
            items: [
              "Bellek ve CPU kullanım profili",
              "API güvenliği ve kimlik doğrulama",
              "Offline davranış ve veri senkronizasyonu",
              "Push bildirim altyapısı kontrolü",
              "Erişilebilirlik değerlendirmesi",
            ],
          },
          {
            label: "Rapor & Aksiyon Planı",
            items: [
              "Platform bazlı (iOS/Android) bulgular",
              "Uygulanabilir aksiyon planı",
              "Detaylı PDF rapor",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        scope: "1",
        featureGroups: [
          {
            label: "Derin Teknik İnceleme",
            items: [
              "Kaynak kodu, mimari ve teknik borç analizi",
              "Bağımlılık güvenlik taraması",
              "Store review risk değerlendirmesi",
              "CI/CD ve build süreç analizi",
              "Backend API entegrasyon ve hata yönetimi denetimi",
            ],
          },
          {
            label: "Strateji & Sonraki Adımlar",
            items: [
              "Yeniden yapılandırma yol haritası",
              "1 saatlik sonuç değerlendirme görüşmesi",
              "Uygulama desteği için teklif hazırlığı",
            ],
          },
        ],
      },
    },
  },
  infrastructureAudit: {
    title: "Altyapı ve Güvenlik Denetimi",
    description:
      "Sunucu, veritabanı, CI/CD ve güvenlik altyapınızı kapsamlı analiz edin.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        scope: "1",
        featureGroups: [
          {
            label: "Altyapı Kontrolü",
            items: [
              "Sunucu kaynak kullanım analizi",
              "SSL ve domain yapılandırması",
              "Yedekleme durumu kontrolü",
              "Temel güvenlik yapılandırması",
            ],
          },
          {
            label: "Rapor & Önceliklendirme",
            items: [
              "Önceliklendirilmiş risk listesi",
              "Temel iyileştirme önerileri",
              "PDF formatında özet denetim raporu",
            ],
          },
        ],
      },
      standart: {
        deliveryDays: "5-7",
        scope: "1-2",
        featureGroups: [
          {
            label: "Kapsamlı Teknik Analiz",
            items: [
              "Veritabanı performans ve yapılandırma",
              "CI/CD pipeline güvenlik kontrolü",
              "Erişim kontrolü ve kimlik yönetimi",
              "DDoS ve firewall yapılandırması",
              "Log ve izleme altyapısı değerlendirmesi",
            ],
          },
          {
            label: "Rapor & Aksiyon Planı",
            items: [
              "Risk matrisi ve iş etkisi analizi",
              "Uygulanabilir güvenlik aksiyon planı",
              "Detaylı PDF rapor",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        scope: "2-3",
        featureGroups: [
          {
            label: "Kurumsal Altyapı Denetimi",
            items: [
              "Bulut altyapı (AWS/GCP/Azure) optimizasyonu",
              "Kubernetes ve container güvenliği",
              "Penetrasyon testi hazırlık değerlendirmesi",
              "Felaket kurtarma, yedeklilik ve SLA analizi",
              "Maliyet optimizasyonu önerileri",
            ],
          },
          {
            label: "Strateji & Sonraki Adımlar",
            items: [
              "Altyapı modernizasyon yol haritası",
              "1 saatlik sonuç değerlendirme görüşmesi",
              "Uygulama desteği için teklif hazırlığı",
            ],
          },
        ],
      },
    },
  },
} as const;
