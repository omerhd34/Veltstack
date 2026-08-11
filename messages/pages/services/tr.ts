import { servicesPackagesTr } from "./packages-tr";

export const servicesPageTr = {
  heroBadge: "Dijital Hizmetler",
  heroTitle: "Net paketler, net kapsam",
  heroSubtitle:
    "Her proje tipi üç kademede sunulur: Girişim, Profesyonel ve Kapsamlı. Kapsam baştan netleştirilir; web sitesi, uygulama, dijital yenileme, SEO, teknik denetim ve bakım paketleri arasından size uygun kapsamı seçebilirsiniz.",
  heroImageAlt:
    "Dijital hizmetleri temsil eden bağlantılı modüler arayüz illüstrasyonu",
  scrollLabel: "Paketleri incele",
  ctaBadge: "Ücretsiz Görüşme",
  ctaTitle: "Paket seçiminde yardım mı lazım?",
  ctaTitleLead: "Paket seçiminde",
  ctaTitleAccent: "yardım mı lazım?",
  ctaSubtitle:
    "Ücretsiz görüşmede projenizi dinleyip doğru paketi birlikte belirleyelim ve 24 saat içinde size dönüş yaparız.",
  ctaPoint1: "Ücretsiz keşif görüşmesi",
  ctaPoint2: "Size özel paket önerisi",
  ctaPoint3: "Net kapsam ve fiyat",
  ctaButton: "Görüşme Planla",
  stats: [
    {
      value: "3-112",
      label: "Teslim Süresi (Gün)",
      labelShort: "Teslim (Gün)",
      hint: "Tüm hizmet kategorilerindeki paketlerin tahmini teslim aralığı. Kapsam netleştikten sonra kesin takvim paylaşılır.",
    },
    {
      value: "15-45",
      label: "Destek Süresi (Gün)",
      labelShort: "Destek (Gün)",
      hint: "Yayın sonrası teknik destek, revizyon ve küçük düzenlemeler için ayrılan süre aralığı.",
    },
    {
      value: "6",
      label: "Hizmet Alanları",
      labelShort: "Hizmet",
      hint: "Web sitesi, uygulama, dijital yenileme, SEO, teknik denetim ve bakım dahil altı farklı hizmet kategorisi.",
    },
    {
      value: "14",
      label: "Hazır Paketler",
      labelShort: "Paketler",
      hint: "Altı kategoride sunulan toplam hazır paket sayısı. Her paket farklı kapsam ve ölçek hedefler.",
    },
  ],
  ...servicesPackagesTr,
} as const;
