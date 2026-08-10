import {
  uygulamaGelistirmeProcessTr,
  webSitesiGelistirmeProcessTr,
  webSitesiYenilemeProcessTr,
} from "@/components/pages/service-detail/service-process-items/tr";

export const serviceDetailsTr = {
  featuresTitle: "Neler Sunuyoruz",
  featuresBadge: "Özellikler",
  featuresSubtitle:
    "Kapsamı baştan netleştirip teslimatı ölçülebilir adımlarla yönetiyorum. Proje boyunca şeffaf iletişim ve düzenli geri bildirimle ilerlersiniz.",
  processTitle: "Çalışma Süreci",
  processSliderPrev: "Önceki süreç adımı",
  processSliderNext: "Sonraki süreç adımı",
  processSliderStep: "Süreç adımı",
  techTitle: "Kullandığımız Teknolojiler",
  techCategoryFrontend: "Frontend",
  techCategoryMobile: "Mobil Yapım",
  techCategoryUi: "UI Kütüphaneleri",
  techCategoryBackend: "Backend",
  techCategoryDatabase: "Veritabanı",
  techCategoryDevops: "DevOps & Hosting",
  techCategoryAnalytics: "Analitik & SEO",
  techCategoryPayment: "Ödeme",
  techCategoryStore: "Mağaza & Yayın",
  techCategoryTools: "Araçlar & Entegrasyon",
  statDelivery: "Teslim Süresi (Gün)",
  statDeliveryShort: "Teslim (Gün)",
  statSupport: "Destek Süresi (Gün)",
  statSupportShort: "Destek (Gün)",
  statTiers: "Paketler",
  statTiersShort: "Paketler",
  statRevisions: "Revizyon Sayısı",
  statRevisionsShort: "Revizyon",
  statDeliveryHint:
    "Proje kapsamına göre değişen tahmini teslim aralığı. Keşif görüşmesinden sonra net takvim paylaşılır.",
  statSupportHint:
    "Yayın sonrası teknik destek, revizyon ve küçük düzenlemeler için ayrılan süre aralığı.",
  statTiersHint:
    "Girişim, Profesyonel ve Gelişmiş olmak üzere üç net kapsam seviyesi; ihtiyacınıza göre karşılaştırabilirsiniz.",
  statRevisionsHint:
    "Seçtiğiniz pakette tanımlı tasarım ve içerik revizyonu sayısı. Geri bildirimlerinizi liste halinde iletmeniz yeterli; her revizyonda bu maddeler uygulanır.",
  featureDetailLabel: "Özellik detayı",
  featuresCarouselPrev: "Önceki özellik",
  featuresCarouselNext: "Sonraki özellik",
  breadcrumbHome: "Ana Sayfa",
  breadcrumbServices: "Hizmetler",
  "web-sitesi-gelistirme": {
    metaTitle: "Web Sitesi Geliştirme",
    metaDesc:
      "Kurumsal web sitesi yapımı, e-ticaret ve portfolyo projelerinde uçtan uca web yapımı. Next.js ile hızlı, SEO uyumlu ve ölçeklenebilir çözümler.",
    keywords: [
      "web sitesi yapımı",
      "web sitesi tasarımı",
      "kurumsal web sitesi",
      "Next.js web sitesi",
      "e-ticaret web sitesi yapımı",
      "landing page yapımı",
      "SSR web sitesi",
      "React web sitesi",
      "portfolyo sitesi",
      "kurumsal tanıtım sitesi",
      "ölçeklenebilir web uygulaması",
    ],
    heroBadge: "Web Yapımı",
    heroTitle: "Web Sitesi Geliştirme",
    heroImageAlt:
      "Modern web sitesi yapımını simgeleyen soyut tarayıcı ve layout illüstrasyonu",
    heroSubtitle:
      "Kurumsal siteden e-ticarete, portfolyodan tanıtım sayfasına kadar her web projesini uçtan uca geliştiriyorum; modern altyapı, SEO uyumlu yapı ve mobil öncelikli tasarımla hızlı, ölçeklenebilir çözümler sunuyorum.",
    processSubtitle:
      "Keşiften yayına kadar her aşamada ne yapılacağını, ne zaman teslim edileceğini ve hangi çıktının alınacağını netleştiriyoruz. Tasarım, yapım, test ve canlıya alma adımlarını öngörülebilir bir planla yönetiyor; proje boyunca düzenli iletişimle sizi bilgilendiriyoruz.",
    techSubtitle:
      "Projenizin ihtiyacına göre seçilmiş, güncel ve ölçeklenebilir araçlar. Renkli ikonlar projelerimizde asıl kullandığımız teknolojileri; soluk ikonlar ise talep etmeniz halinde kullanabileceğimiz alternatifleri gösterir.",
    processItems: webSitesiGelistirmeProcessTr,
    features: [
      {
        title: "SEO",
        description:
          "SSR, meta etiketleri, sitemap ve yapılandırılmış veri ile siteniz arama motorlarına hazır teslim edilir. Open Graph, canonical URL ve robots yapılandırması sayesinde indeksleme sorunları en baştan önlenir. Blog, hizmet ve ürün sayfaları için ayrı meta şablonları hazırlanır. Google Search Console entegrasyonu ile tarama durumu yayın öncesinden takip edilir. Arama sonuçlarında daha çekici görünmeniz için başlık ve açıklama metinleri optimize edilir. Yerel ve uluslararası arama hedeflerinize göre dil, bölge ve hreflang ayarları proje başında planlanır.",
      },
      {
        title: "E-Ticaret",
        description:
          "Ürün kataloğu, sepet, sipariş yönetimi ve güvenli ödeme akışları uçtan uca kurulur. PayTR, İyzico ve Stripe gibi altyapılarla mobil uyumlu, dönüşüm odaklı bir satış deneyimi sunulur. Stok, kargo ve sipariş durumu tek panelden takip edilebilir. Ödeme sayfası SSL ve 3D Secure ile korunur; PCI uyumlu altyapılar tercih edilir. Sipariş onay e-postaları ve basit raporlama ekranları günlük operasyonları kolaylaştırır. Kupon, kampanya ve varyant yönetimi gibi satış senaryoları kapsama göre yapılandırılır.",
      },
      {
        title: "Performans",
        description:
          "Next.js, görsel optimizasyonu ve CDN ile yüksek Lighthouse skorları ve düşük yükleme süreleri hedeflenir. Core Web Vitals proje başında belirlenir; performans süreç boyunca izlenir. Lazy loading, font optimizasyonu ve gereksiz script temizliği ile sayfa hızı korunur. Kritik CSS ve kaynak önceliklendirme doğru sırayla yüklenir. Yayın öncesi son performans turu tamamlanarak canlı ortamda da hız garanti altına alınır. Yavaş bağlantılarda bile akıcı deneyim için önbellekleme ve sunucu tarafı render stratejileri birlikte uygulanır.",
      },
      {
        title: "Responsive",
        description:
          "Mobil, tablet ve masaüstünde tutarlı, dokunmatik uyumlu bir deneyim tasarlanır. Tipografi, boşluklar ve etkileşimler her ekran boyutu için ayrı optimize edilir. Navigasyon, formlar ve CTA butonları küçük ekranlarda rahat kullanılabilir. Hamburger menü ve dokunmatik hedef boyutları mobil standartlara uygun tutulur. Farklı cihaz ve tarayıcılarda gerçek testler yapılarak uyumluluk yayın öncesi doğrulanır. Esnek grid ve breakpoint yapısı sayesinde yeni cihaz boyutlarına uyum kolayca sağlanır.",
      },
      {
        title: "Çok Dil",
        description:
          "Türkçe, İngilizce ve ihtiyacınıza göre ek diller için altyapı kurulur. URL yapısı, meta etiketleri ve hreflang etiketleri her dilde SEO dostu kalacak şekilde yapılandırılır. Dil bazlı sitemap ve içerik yönetimi uluslararası erişimi destekler. Varsayılan dil ve alternatif yönlendirmeler net tanımlanır. Yeni dil eklemek istediğinizde mevcut yapı bozulmadan genişletilebilir bir mimari tercih edilir. Ziyaretçi dil tercihi tarayıcıda hatırlanır; dil değiştirici her sayfada erişilebilir konumda sunulur. Admin panelinden dil bazlı içerik girişi yapılabilir; çeviri eksikleri yayın öncesi kolayca tespit edilir.",
      },
      {
        title: "Tema",
        description:
          "Ziyaretçiler karanlık veya aydınlık temayı seçebilir; sistem tercihini otomatik takip etmek de mümkündür. Her iki modda kontrast ve marka tutarlılığı korunur, seçim tarayıcıda hatırlanır. Renk token'ları her tema için ayrı optimize edilir. Tema geçişleri yumuşak animasyonlarla sunulur. WCAG kontrast standartları her iki modda da gözetilerek erişilebilir bir deneyim sağlanır. Görseller, ikonlar ve vurgu renkleri her iki temada da okunabilirlik kaybı olmadan ayarlanır. Header, footer ve tüm bileşenler her iki temada ayrı test edilir; sayfa yenilendiğinde tema sıçraması yaşanmaz.",
      },
      {
        title: "Admin",
        description:
          "Blog, hizmet ve sayfa içeriklerinizi kod bilmeden yönetebileceğiniz bir admin panel kurulur. Panel arayüzü müşterinin istediği dilde hazırlanır; WYSIWYG editör, görsel yükleme ve taslak-yayın akışı standarttır. Rol bazlı erişim ile ekip üyelerine farklı yetkiler tanımlanabilir. İçerik değişiklikleri anında veya planlı yayınlanabilir. Panel mobil uyumlu olduğu için hareket halindeyken de güncelleme yapabilirsiniz. Medya kütüphanesi, SEO alanları ve önizleme ekranı içerik yönetimini hızlandırır. Sayfa, blog ve hizmet kayıtları tek panelden aranır, filtrelenir ve toplu düzenlenebilir.",
      },
      {
        title: "Güvenlik",
        description:
          "HTTPS, güvenli header yapılandırması ve modern kimlik doğrulama standartları projeye en baştan entegre edilir. Form gönderimlerinde rate limiting ve temel bot koruması uygulanır. Bağımlılık güvenlik taramaları yapım sürecinde düzenli yapılır. Admin ve API endpoint'leri yetkilendirme katmanı ile korunur. Yayın öncesi güvenlik kontrol listesi tamamlanarak canlı ortama güvenli geçiş sağlanır. CSRF, XSS ve injection risklerine karşı giriş doğrulama ve çıktı filtreleme katmanları standart olarak uygulanır.",
      },
      {
        title: "Analitik",
        description:
          "Google Analytics, Search Console ve dönüşüm olayları projeye entegre edilir. İletişim formları spam koruması ve anlık e-posta bildirimleri ile birlikte devreye alınır. Hangi sayfaların trafik aldığını ve form gönderimlerini takip edebilirsiniz. GTM veya doğrudan entegrasyon ihtiyacınıza göre planlanır. İlk ay sonunda temel performans raporu ile veri toplama doğrulanır. Buton tıklamaları, form gönderimleri ve önemli sayfa görüntülemeleri dönüşüm hunisini ölçmek için etiketlenir. Ziyaretçi kaynakları, cihaz dağılımı ve en çok görüntülenen sayfalar dashboard üzerinden tek bakışta izlenebilir.",
      },
    ],
  },
  "web-sitesi-yenileme": {
    metaTitle: "Web Sitesi & Uygulama Yenileme",
    metaDesc:
      "Eski veya yavaş web sitenizi modern tasarım, hızlı altyapı ve SEO iyileştirmeleriyle yenileyin. İçeriklerinizi koruyarak güvenli geçiş.",
    keywords: [
      "web sitesi yenileme",
      "web sitesi redesign",
      "eski siteyi modernleştirme",
      "site yenileme SEO",
      "WordPress’ten Next.js geçiş",
      "yavaş site hızlandırma",
      "mobil uyumlu site yenileme",
      "UI UX yenileme",
      "dijital dönüşüm web",
      "site migrasyonu",
    ],
    heroBadge: "Web & Uygulama Yenileme",
    heroTitle: "Web Sitesi & Uygulama Yenileme",
    heroImageAlt:
      "Web sitesi yenilemeyi simgeleyen dönüşen arayüz panelleri illüstrasyonu",
    heroSubtitle:
      "Güncelliğini yitirmiş, yavaş veya mobil uyumsuz deneyimlerinizi modern, hızlı ve dönüşüm odaklı bir yapıya taşıyoruz; mevcut içerikleri koruyarak SEO’yu riske atmadan güvenli geçiş sağlıyoruz.",
    processSubtitle:
      "Mevcut sitenizi veya uygulamanızı analizden canlıya almaya kadar ölçülebilir adımlarla yeniliyoruz. SEO kaybı riskini en aza indiren geçiş planı, tasarım onayı ve içerik migrasyonu süreç boyunca şeffaf iletişimle yönetilir.",
    techSubtitle:
      "Mevcut sitenizi modern altyapıya taşırken kullandığımız güncel ve ölçeklenebilir araçlar.",
    processItems: webSitesiYenilemeProcessTr,
    features: [
      {
        title: "Mevcut Site Analizi",
        description:
          "Teknik altyapı, performans, SEO ve kullanıcı deneyimi açısından mevcut sitenizi kapsamlı şekilde denetliyoruz. Tespit edilen sorunları etki ve aciliyet bazında sıralayıp önceliklendirilmiş bir aksiyon planı çıkarıyoruz. Yenileme kapsamı bu analiz sonucunda netleştirilir; gereksiz iş yükü en baştan elenir. Eski teknoloji, güvenlik açıkları ve mobil uyumsuzluklar ayrı kategorilerde raporlanır. Rakip sitelerle kıyaslama yapılarak eksik kalan alanlar belirlenir. Analiz raporu, yenileme sürecinin tüm adımları için referans doküman olarak kullanılır.",
      },
      {
        title: "Modern Tasarım ve UX",
        description:
          "Markanıza uygun güncel arayüz, net bilgi mimarisi ve dönüşüm odaklı sayfa akışları tasarlıyoruz. Mobil ve masaüstünde tutarlı bir deneyim hedeflenir; tipografi ve bileşen dili projenizin kimliğiyle uyumlu kalır. Onayınız alınmadan yapım aşamasına geçilmez. Wireframe ve prototip aşamalarında geri bildirim alınarak tasarım iteratif ilerler. Erişilebilirlik ve okunabilirlik her ekran boyutunda öncelikli tutulur. CTA yerleşimleri, form akışları ve içerik hiyerarşisi dönüşüm hedeflerinize göre optimize edilir.",
      },
      {
        title: "Performans İyileştirmesi",
        description:
          "Hızlı yükleme, optimize görseller ve yüksek Lighthouse skorları hedefleyen altyapı güncellemesi yapıyoruz. Core Web Vitals proje boyunca izlenir; gereksiz script ve ağır kaynaklar sistematik olarak temizlenir. Canlıya almadan önce son performans turu tamamlanarak tüm sayfalar doğrulanır. Eski hosting veya CDN yapılandırması modern, yüksek erişilebilirlikli altyapıya taşınır. Görsel boyutları, font yüklemeleri ve üçüncü taraf scriptler performans etkisine göre yeniden değerlendirilir. Yenileme öncesi ve sonrası skorlar karşılaştırılarak somut iyileşme oranları raporlanır.",
      },
      {
        title: "SEO Koruma ve Güçlendirme",
        description:
          "URL yapısı, 301 yönlendirmeler ve meta verilerle mevcut sıralamanızı koruyarak görünürlüğü artırıyoruz. Sitemap, robots ve yapılandırılmış veri yayın öncesi eksiksiz doğrulanır. Geçiş sürecinde indeksleme Search Console üzerinden günlük olarak takip edilir. Eski URL'lerin yeni karşılıkları birebir eşleştirilerek 404 ve sıralama kaybı riski minimize edilir. Başlık, açıklama ve iç bağlantı yapısı yenileme fırsatı olarak gözden geçirilip güçlendirilir. Geçiş sonrası ilk hafta tarama hataları, indeksleme değişiklikleri ve sıralama dalgalanmaları yakından izlenir.",
      },
      {
        title: "İçerik Migrasyonu",
        description:
          "Mevcut metin, görsel ve sayfa içeriklerini yeni yapıya güvenli ve düzenli şekilde aktarıyoruz. Eksik, bozuk veya yanlış eşleşen içerikler tespit edilip düzeltilmeden doğrulama aşamasına geçilmez. Migrasyon sonrası sayfa bazında kontrol listesi ile her URL ayrı ayrı doğrulanır. Görseller yeni formata optimize edilerek aktarılır; bozuk iç ve dış bağlantılar temizlenir. Blog yazıları, hizmet sayfaları ve dinamik içerikler yeni veritabanı yapısına uygun şekilde eşleştirilir. Migrasyon öncesi tam yedek alınır; sorun çıkması halinde hızlı geri dönüş mümkün olur.",
      },
      {
        title: "Yayın Sonrası Destek",
        description:
          "Canlıya alım sonrası teknik destek, küçük düzeltmeler ve geçiş sürecinde sürekli izleme sağlıyoruz. İlk hafta olası sorunlara hızlı müdahale edilir; yönlendirme ve form akışları günlük olarak takip edilir. Destek süresi boyunca sitenizin kesintisiz ve sorunsuz çalışması hedeflenir. Performans, uptime ve hata logları düzenli aralıklarla kontrol edilerek erken uyarı sağlanır. Kullanıcı geri bildirimlerine göre küçük UX düzeltmeleri önceliklendirilerek hızlıca uygulanır. Destek süresi sonunda el değiştirme dokümantasyonu ve bakım önerileri detaylı şekilde paylaşılır.",
      },
    ],
  },
  "uygulama-gelistirme": {
    metaTitle: "Mobil Uygulama Geliştirme",
    metaDesc:
      "iOS ve Android için React Native ve Expo ile performanslı mobil uygulama geliştirme hizmeti.",
    keywords: [
      "mobil uygulama geliştirme",
      "React Native uygulama",
      "iOS Android uygulama yapımı",
      "Expo mobil uygulama",
      "cross platform uygulama",
      "App Store yayın",
      "Google Play uygulama",
      "mobil uygulama tasarımı",
      "native mobil uygulama",
      "startup mobil uygulama",
    ],
    heroBadge: "Uygulama Geliştirme",
    heroTitle: "Uygulama Geliştirme",
    heroImageAlt:
      "Mobil uygulama yapımını simgeleyen yüzen telefon ve arayüz illüstrasyonu",
    heroSubtitle:
      "Tek kod tabanıyla iOS ve Android'de çalışan mobil uygulamalar geliştiriyorum; React Native ve Expo ile hızlı teslimat, mağaza yayını ve backend entegrasyonlarını tek çatı altında yönetiyorum.",
    processSubtitle:
      "Uygulama fikrinden mağaza yayınına kadar her aşamada ne yapılacağını ve hangi çıktının alınacağını netleştiriyoruz. Tasarım, yapım, test ve yayın adımlarını öngörülebilir bir planla yönetiyoruz.",
    techSubtitle:
      "Mobil uygulama projelerinde kullandığımız güncel ve ölçeklenebilir araçlar. Renkli ikonlar projelerimizde asıl kullandığımız teknolojileri; soluk ikonlar ise talep etmeniz halinde kullanabileceğimiz alternatifleri gösterir.",
    processItems: uygulamaGelistirmeProcessTr,
    features: [
      {
        title: "Çapraz Platform",
        description:
          "React Native ve Expo ile hem iOS hem Android için tek kod tabanından verimli yapım yapıyoruz. Platforma özgü davranışlar native modüllerle desteklenir; ekran boyutları ve etkileşimler her cihaz için optimize edilir. Böylece iki ayrı ekip ve bütçe yerine tek çizgide hızlı iterasyon mümkün olur. Tablet ve farklı ekran yoğunlukları için responsive layout stratejisi proje başında belirlenir. Platform guideline'larına uyum hem App Store hem Google Play onay sürecini kolaylaştırır. Kod paylaşım oranı yüksek tutularak bakım maliyeti uzun vadede düşük kalır.",
      },
      {
        title: "API Entegrasyonu",
        description:
          "Güvenli backend bağlantıları, kimlik doğrulama ve gerçek zamanlı veri akışını uçtan uca kuruyoruz. REST API, token yönetimi ve üçüncü taraf servis entegrasyonları proje mimarisine uygun şekilde yapılandırılır. Offline senaryolar ve hata yönetimi de kullanıcı deneyimini bozmayacak şekilde ele alınır. API yanıt süreleri ve timeout stratejileri mobil bağlantı koşullarına göre optimize edilir. Ödeme, bildirim ve harita gibi harici servisler güvenli bağlantı katmanı üzerinden entegre edilir. Entegrasyon testleri gerçek cihazlarda doğrulanarak canlıya alınır.",
      },
      {
        title: "Kullanıcı Deneyimi",
        description:
          "Sezgisel navigasyon, erişilebilirlik ve iOS ile Android platform standartlarına uygun arayüz tasarlıyoruz. Tipografi, boşluklar ve etkileşimler markanızla tutarlı kalır. Form akışları, geri bildirimler ve onboarding adımları gerçek kullanıcı senaryolarına göre test edilir. Boş durum, yükleme ve hata ekranları kullanıcıyı yönlendirecek şekilde tasarlanır. Dokunmatik hedef boyutları ve gesture etkileşimleri her iki platformda da rahat kullanım sağlar. Kullanılabilirlik testleri tasarım aşamasında iteratif olarak uygulanır.",
      },
      {
        title: "Performans Optimizasyonu",
        description:
          "Cold start süreleri, akıcı animasyonlar ve düşük bellek kullanımı hedeflenir. Görsel önbellekleme, listeleme performansı ve gereksiz re-render'lar proje boyunca izlenir. Gerçek cihazlarda yapılan testlerle mağaza onayı öncesinde performans doğrulanır. Bundle boyutu ve lazy loading stratejileri uygulama açılış hızını korur. Ağır animasyonlar ve büyük asset'ler optimize edilerek düşük donanımlı cihazlarda da akıcılık sağlanır. Performans metrikleri yapım sürecinde düzenli ölçülür ve raporlanır.",
      },
      {
        title: "Store Yayını",
        description:
          "App Store ve Google Play yayın süreçlerinde teknik hazırlık, build alma ve mağaza metadata desteği sağlıyoruz. İkon, ekran görüntüsü boyutları ve sürüm notları platform kurallarına uygun hazırlanır. Reddedilme riskini azaltmak için guideline kontrol listesi yayın öncesi tamamlanır. TestFlight ve internal testing kanallarıyla beta süreci yönetilir. Gizlilik politikası, uygulama açıklaması ve kategori seçimi mağaza görünürlüğünü artıracak şekilde hazırlanır. İlk yayın sonrası mağaza yorumları ve crash raporları yakından takip edilir.",
      },
      {
        title: "Bakım ve Güncelleme",
        description:
          "OS güncellemelerine uyum, hata düzeltmeleri ve yeni özellik iterasyonları düzenli plan dahilinde yürütülür. Crash raporları izlenir; kritik sorunlara öncelikli müdahale edilir. Uygulamanız canlıya alındıktan sonra da sürdürülebilir şekilde gelişmeye devam eder. Yeni iOS ve Android sürümleri çıktığında uyumluluk testleri yapılır. Kullanıcı geri bildirimleri ve mağaza yorumları önceliklendirme için değerlendirilir. Sürüm geçmişi ve değişiklik notları düzenli tutularak şeffaf bir yapım süreci sağlanır.",
      },
    ],
  },
} as const;
