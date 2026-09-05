const BODY = `# Veltstack

> Solo full-stack geliştirici markası. Web sitesi, mobil uygulama ve dijital yenileme.

Veltstack ajans diliyle sunulur; tek geliştirici (Ömer Halis Demir) olarak çalışır.

## Site

- [Ana sayfa](https://www.veltstack.com/): Hizmetler, süreç ve öne çıkan işler
- [Hizmetler](https://www.veltstack.com/hizmetler): Web, mobil ve dijital yenileme paketleri
- [Projeler](https://www.veltstack.com/projeler): Seçilmiş işler
- [Blog](https://www.veltstack.com/blog): Dijital ürün ve geliştirme yazıları
- [Hakkımda](https://www.veltstack.com/hakkimizda): Ömer Halis Demir
- [İletişim](https://www.veltstack.com/iletisim): Proje başlatma formu
- [SSS](https://www.veltstack.com/sss): Sık sorulan sorular

## English

- [Home](https://www.veltstack.com/en)
- [Services](https://www.veltstack.com/en/hizmetler)
- [Projects](https://www.veltstack.com/en/projeler)
- [Blog](https://www.veltstack.com/en/blog)
- [About](https://www.veltstack.com/en/hakkimizda)
- [Contact](https://www.veltstack.com/en/iletisim)

## Optional

- [Sitemap](https://www.veltstack.com/sitemap.xml)
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
