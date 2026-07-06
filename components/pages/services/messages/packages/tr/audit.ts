export const auditPackagesTr = {
  webAudit: {
    title: "Web Sitesi",
    description:
      "Web sitenizin performans, güvenlik, SEO ve kod kalitesini uçtan uca analiz ediyoruz; bulguları öncelik sırasına koyarak uygulanabilir iyileştirme planı sunuyoruz.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        scope: "1",
        featureGroups: [
          {
            label: "Performans & SEO",
            items: [
              "Lighthouse ve PageSpeed Insights analizi",
              "Core Web Vitals (LCP, INP, CLS) ölçümü",
              "Meta yapısı, başlık hiyerarşisi ve temel SEO kontrolü",
              "Mobil uyumluluk ve responsive davranış testi",
            ],
          },
          {
            label: "Raporlama",
            items: [
              "Etki ve önceliğe göre sıralanmış bulgu listesi",
              "Hızlı kazanım odaklı iyileştirme önerileri",
              "PDF özet denetim raporu",
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
              "Sayfa bazlı performans profili ve darboğaz tespiti",
              "HTTPS, güvenlik başlıkları ve temel güvenlik yapılandırması",
              "Erişilebilirlik (WCAG 2.1) kontrolü",
              "Schema ve yapılandırılmış veri denetimi",
              "Tarama hataları, robots.txt ve indeksleme analizi",
            ],
          },
          {
            label: "Rapor & Aksiyon Planı",
            items: [
              "Etki–çaba matrisi ile önceliklendirilmiş bulgular",
              "Adım adım uygulanabilir iyileştirme planı",
              "Detaylı PDF rapor ve sunum dosyası",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        scope: "1",
        featureGroups: [
          {
            label: "Derinlemesine İnceleme",
            items: [
              "Kaynak kodu, mimari ve teknik borç değerlendirmesi",
              "Bağımlılık ve bilinen güvenlik açığı taraması",
              "CDN, önbellek ve sunucu yapılandırması incelemesi",
              "Hata logları, izleme altyapısı ve kritik kullanıcı akışları",
              "Sektör benchmark'ı ile performans karşılaştırması",
            ],
          },
          {
            label: "Strateji & Destek",
            items: [
              "İyileştirme yol haritası ve sprint önerisi",
              "1 saatlik sonuç değerlendirme toplantısı",
              "Uygulama kapsamı için teklif önerisi",
            ],
          },
        ],
      },
    },
  },
  appAudit: {
    title: "Mobil Uygulama",
    description:
      "iOS ve Android uygulamanızın performans, güvenlik ve kullanıcı deneyimini platform bazlı değerlendiriyor; öncelikli aksiyon listesi ve rapor sunuyoruz.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        scope: "1",
        featureGroups: [
          {
            label: "Uygulama Analizi",
            items: [
              "Açılış süresi ve temel performans testi",
              "Navigasyon akışı ve kullanılabilirlik değerlendirmesi",
              "App Store ve Google Play yönerge uyumluluğu kontrolü",
              "Çökme kayıtları, hata logları ve kararlılık incelemesi",
            ],
          },
          {
            label: "Raporlama",
            items: [
              "Platform ve önceliğe göre sıralanmış bulgu listesi",
              "Hızlı kazanım odaklı iyileştirme önerileri",
              "PDF özet denetim raporu",
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
              "Bellek, CPU ve ağ kullanım profili",
              "API güvenliği, kimlik doğrulama ve yetkilendirme",
              "Çevrimdışı davranış ve veri senkronizasyonu",
              "Push bildirim altyapısı ve teslimat kontrolü",
              "Erişilebilirlik (VoiceOver / TalkBack) değerlendirmesi",
            ],
          },
          {
            label: "Rapor & Aksiyon Planı",
            items: [
              "iOS ve Android için ayrıştırılmış bulgular",
              "Adım adım uygulanabilir iyileştirme planı",
              "Detaylı PDF denetim raporu",
            ],
          },
        ],
      },
      pro: {
        deliveryDays: "7-10",
        scope: "1",
        featureGroups: [
          {
            label: "Derinlemesine İnceleme",
            items: [
              "Kaynak kodu, mimari ve teknik borç değerlendirmesi",
              "Bağımlılık ve bilinen güvenlik açığı taraması",
              "Mağaza onay süreci ve politika risk değerlendirmesi",
              "CI/CD, build süreçleri ve sürüm yönetimi analizi",
              "Backend API entegrasyonu ve hata yönetimi denetimi",
            ],
          },
          {
            label: "Strateji & Destek",
            items: [
              "Yeniden yapılandırma ve modernizasyon yol haritası",
              "1 saatlik sonuç değerlendirme toplantısı",
              "Uygulama kapsamı için teklif önerisi",
            ],
          },
        ],
      },
    },
  },
  infrastructureAudit: {
    title: "Altyapı ve Güvenlik",
    description:
      "Sunucu, veritabanı, CI/CD ve güvenlik altyapınızı sistematik olarak inceliyoruz; riskleri önceliklendirip somut güvenlik aksiyon planı çıkarıyoruz.",
    tiers: {
      temel: {
        deliveryDays: "3-5",
        scope: "1",
        featureGroups: [
          {
            label: "Altyapı Kontrolü",
            items: [
              "Sunucu kaynak kullanımı (CPU, RAM, disk) analizi",
              "SSL/TLS ve domain yapılandırması kontrolü",
              "Yedekleme sıklığı, saklama ve geri yükleme durumu",
              "Firewall, port ve temel erişim güvenliği incelemesi",
            ],
          },
          {
            label: "Raporlama",
            items: [
              "Risk ve önceliğe göre sıralanmış bulgu listesi",
              "Acil müdahale gerektiren maddelerin ayrıştırılması",
              "PDF özet denetim raporu",
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
              "Veritabanı performansı, indeksleme ve yapılandırma",
              "CI/CD pipeline güvenliği ve secret yönetimi",
              "Erişim kontrolü, IAM ve kimlik yönetimi",
              "DDoS koruması ve firewall kuralları değerlendirmesi",
              "Log toplama, izleme ve uyarı altyapısı incelemesi",
            ],
          },
          {
            label: "Rapor & Aksiyon Planı",
            items: [
              "İş etkisiyle risk matrisi",
              "Uygulanabilir güvenlik iyileştirme planı",
              "Detaylı PDF denetim raporu",
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
              "Bulut altyapısı (AWS / GCP / Azure) mimari ve maliyet incelemesi",
              "Kubernetes ve container güvenlik yapılandırması",
              "Penetrasyon testine hazırlık ve yüzey alanı değerlendirmesi",
              "Felaket kurtarma, yedeklilik ve SLA analizi",
              "Kaynak kullanımı ve maliyet optimizasyonu önerileri",
            ],
          },
          {
            label: "Strateji & Destek",
            items: [
              "Altyapı modernizasyon yol haritası",
              "1 saatlik sonuç değerlendirme toplantısı",
              "Uygulama kapsamı için teklif önerisi",
            ],
          },
        ],
      },
    },
  },
} as const;
