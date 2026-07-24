export const statusTr = {
  notFound: {
    code: "404",
    badge: "Sayfa bulunamadı",
    title: "Aradığınız sayfa burada değil.",
    description:
      "Bağlantı eski olabilir veya adres yanlış yazılmış olabilir. Ana sayfadan devam edebilir ya da bize yazabilirsiniz.",
    homeCta: "Ana sayfaya dön",
    contactCta: "İletişime geç",
  },
  error: {
    code: "500",
    badge: "Bir sorun oluştu",
    title: "Beklenmeyen bir hata yakalandı.",
    description:
      "Sayfa yüklenirken bir sorun oluştu. Tekrar deneyebilir veya ana sayfaya dönebilirsiniz.",
    retryCta: "Tekrar dene",
    homeCta: "Ana sayfaya dön",
  },
} as const;
