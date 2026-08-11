import type { BlogPostEntry } from "./types";

export const blogPostEntry: BlogPostEntry = {
  slug: "seo",
  titleTr: "SEO Nedir?",
  titleEn: "What Is SEO?",
  excerptTr:
    "Arama motoru optimizasyonunun temellerini, türlerini ve uygulanabilir adımlarını kapsamlı bir rehberle paylaşıyoruz; teknik altyapı, içerik stratejisi, anahtar kelime araştırması ve bağlantı çalışmalarını birlikte ele alıyor, sıralamanızı gerçekten yükseltecek pratik yöntemleri anlatıyoruz.",
  excerptEn:
    "A comprehensive guide to SEO basics, types and actionable steps, covering technical foundations, content strategy, keyword research and link building in one place, with practical methods that genuinely help you climb the search rankings over time.",
  excerptShortTr:
    "SEO'nun temellerini, türlerini ve sıralamanızı yükseltecek uygulanabilir adımları kapsamlı bir rehberde topluyoruz.",
  excerptShortEn:
    "A comprehensive guide to SEO basics, types and actionable steps to climb the search rankings.",
  category: "SEO",
  categoryEn: "SEO",
  imageUrl: "/images/pages/blog/seo.png",
  readingTime: 8,
  publishedAt: "2026-06-05",
  featured: true,
  content: {
    tr: `
<p>Web siteniz ne kadar iyi tasarlanmış olursa olsun, hedef kitleniz sizi Google'da bulamıyorsa büyük bir kitleye ulaşamazsınız. <strong>SEO (Search Engine Optimization / Arama Motoru Optimizasyonu)</strong>, sitenizin arama motorlarında üst sıralarda görünmesini sağlayan teknik ve içerik çalışmalarının bütünüdür. Bu rehberde SEO'nun ne olduğunu, türlerini, nasıl uygulanacağını ve sık yapılan hataları ele alıyoruz.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">%93</span><span class="blog-stat-label">Trafik Google'dan başlar</span></div>
  <div class="blog-stat"><span class="blog-stat-value">3</span><span class="blog-stat-label">Ana SEO türü</span></div>
  <div class="blog-stat"><span class="blog-stat-value">CWV</span><span class="blog-stat-label">Core Web Vitals</span></div>
</div>

<h2>SEO Nedir?</h2>
<p>SEO; web sitenizin içerik, teknik altyapı ve dış bağlantılar açısından arama motorları tarafından daha iyi anlaşılması ve değerlendirilmesi sürecidir. Amaç organik (ücretsiz) arama sonuçlarında üst sıralara çıkmak, böylece hedef kitlenizin sizi bulmasını sağlamaktır.</p>
<p>SEO bir kerelik iş değildir; içerik üretimi, teknik bakım ve rakip analiziyle sürekli yürütülmesi gereken bir stratejidir.</p>

<h2>SEO Neden Önemli?</h2>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Organik trafik:</strong> Ücretli reklam olmadan sürdürülebilir ziyaretçi akışı sağlar.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Güven ve otorite:</strong> Üst sıralarda görünmek marka güvenilirliğini artırır.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Uzun vadeli yatırım:</strong> İyi SEO çalışması yıllarca trafik getirir; reklam bütçesi kesilince trafik durmaz.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Hedefli kitle:</strong> Arama yapan kullanıcı zaten bir ihtiyaç veya soru ile gelir; dönüşüm potansiyeli yüksektir.</span></div></li>
</ul>

<h2>SEO Türleri</h2>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Teknik SEO</h4>
    <p>Site hızı, HTTPS, mobil uyumluluk, sitemap, robots.txt, yapılandırılmış veri (schema) ve Core Web Vitals. Arama motorunun sitenizi tarayıp anlamasını sağlayan altyapı katmanıdır.</p>
  </div>
  <div class="blog-type-card">
    <h4>On-Page SEO</h4>
    <p>Sayfa başlığı (title), meta açıklama, H1-H6 yapısı, içerik kalitesi, anahtar kelime kullanımı, iç bağlantılar ve görsel alt metinleri. Her sayfanın kendi optimizasyonu.</p>
  </div>
  <div class="blog-type-card">
    <h4>Off-Page SEO</h4>
    <p>Backlink (geri bağlantı), marka mention'ları ve sosyal sinyaller. Diğer sitelerin sizi referans göstermesi; domain otoritesini artırır.</p>
  </div>
  <div class="blog-type-card">
    <h4>Yerel SEO</h4>
    <p>Google Business Profile, yerel anahtar kelimeler ve NAP (Name, Address, Phone) tutarlılığı. Fiziksel konumu olan işletmeler için kritik.</p>
  </div>
</div>

<h2>Teknik SEO Temelleri</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Öğe</th><th>Ne işe yarar?</th><th>Kontrol aracı</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>Güvenli bağlantı; sıralama sinyali</td><td>Tarayıcı adres çubuğu</td></tr>
<tr><td>Sitemap.xml</td><td>Sayfaları arama motoruna bildirir</td><td>Google Search Console</td></tr>
<tr><td>Robots.txt</td><td>Taranmaması gereken alanları belirtir</td><td><code>/robots.txt</code></td></tr>
<tr><td>Core Web Vitals</td><td>LCP, INP, CLS performans metrikleri</td><td>PageSpeed Insights</td></tr>
<tr><td>Schema markup</td><td>Yapılandırılmış veri; zengin sonuçlar</td><td>Google Rich Results Test</td></tr>
<tr><td>Mobil uyumluluk</td><td>Mobile-first indexing zorunluluğu</td><td>Search Console Mobile Usability</td></tr>
</tbody>
</table>
</div>
<p>Teknik altyapı için <a href="/blog/domain-hosting">Domain & Hosting Nedir?</a> ve <a href="/blog/vercel-de-yayin">Vercel'de Yayın</a> rehberlerimizde HTTPS, hız ve deploy konularını detaylandırdık.</p>

<h2>On-Page SEO: Sayfa Bazında Optimizasyon</h2>
<ol class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Anahtar kelime araştırması</strong> Hedef kitlenizin ne aradığını belirleyin. Google Keyword Planner, Ahrefs veya Ubersuggest ile hacim ve rekabet analizi yapın.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Title ve meta description</strong> Her sayfada benzersiz, 50-60 karakter title ve 150-160 karakter açıklama yazın. Anahtar kelimeyi doğal şekilde kullanın.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>İçerik yapısı</strong> H1 tek olmalı; H2, H3 ile mantıklı hiyerarşi kurun. Paragraflar kısa, okunabilir ve değer odaklı olsun.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>İç bağlantılar</strong> İlgili sayfalara doğal linkler verin. Blog yazıları arası bağlantı hem kullanıcıyı hem arama motorunu yönlendirir.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Görsel optimizasyonu</strong> Alt metin (alt text), sıkıştırılmış dosya boyutu ve uygun format (WebP). Next.js <code>Image</code> bileşeni otomatik optimizasyon sağlar.</span></div></li>
</ol>

<h2>İçerik Stratejisi</h2>
<p>Google'ın algoritması sürekli gelişse de temel prensip değişmez: <strong>kullanıcıya gerçek değer sunan içerik</strong> üst sıralara çıkar. İçerik stratejisi şunları kapsar:</p>
<ul>
<li><strong>Blog ve rehber yazıları:</strong> Hedef kitlenizin sorularına cevap veren, uzun form içerikler. Bu yazıların kendisi bir SEO örneğidir.</li>
<li><strong>Hizmet sayfaları:</strong> Her hizmet için ayrı, detaylı landing page; anahtar kelime odaklı ama doğal metin.</li>
<li><strong>Düzenli güncelleme:</strong> Eski içerikleri güncellemek, yeni bilgi eklemek sıralamayı korur.</li>
<li><strong>Çok dilli içerik:</strong> TR ve EN ayrı URL'lerde, hreflang etiketleriyle. next-intl gibi çözümlerle yönetilir.</li>
</ul>

<div class="blog-callout">
  <p class="blog-callout-title">Pratik ipucu</p>
  <p>Anahtar kelimeyi metne zorla sıkıştırmayın (keyword stuffing). Google doğal, okunabilir ve kapsamlı içeriği ödüllendirir. Bir konuyu gerçekten iyi anlatan 1500 kelimelik yazı, 300 kelimelik yüzeysel içerikten her zaman üstündür.</p>
</div>

<h2>Off-Page SEO ve Backlink</h2>
<p>Backlink; başka bir sitenin sizin sayfanıza verdiği bağlantıdır. Kaliteli ve konuyla ilgili sitelerden gelen linkler domain otoritesini artırır. Backlink kazanma yöntemleri:</p>
<ul>
<li>Kaliteli içerik üretmek; başkaları doğal olarak referans verir</li>
<li>Sektörel dizinlere ve yerel listelere kayıt</li>
<li>Misafir yazarlık (guest posting) ve iş birlikleri</li>
<li>Basın bültenleri ve sektör haberleri</li>
</ul>
<p>Spam link satın almak veya link çiftlikleri kullanmak Google cezasına yol açar; uzun vadede zarar verir.</p>

<h2>SEO ve Modern Web Stack</h2>
<p>Next.js gibi modern framework'ler SEO için doğal avantajlar sunar:</p>
<ul>
<li><strong>Server-Side Rendering (SSR):</strong> Arama motoru tam HTML içeriği görür; client-side render gecikmesi olmaz.</li>
<li><strong>Metadata API:</strong> Her sayfa için dinamik title, description ve Open Graph etiketleri.</li>
<li><strong>Otomatik sitemap:</strong> <code>app/sitemap.ts</code> ile tüm sayfalar otomatik listelenir.</li>
<li><strong>Performans:</strong> Image optimization, code splitting ve edge caching Core Web Vitals'ı iyileştirir.</li>
</ul>
<p>Stack seçimi hakkında <a href="/blog/react-nextjs">React & Next.js</a> ve <a href="/blog/ozel-yazilim-cms">Özel Yazılım</a> yazılarımıza bakabilirsiniz.</p>

<h2>SEO Araçları</h2>
<div class="blog-table-wrap">
<table>
<thead><tr><th>Araç</th><th>Kullanım</th><th>Ücretsiz?</th></tr></thead>
<tbody>
<tr><td>Google Search Console</td><td>İndeksleme, tıklama, hata takibi</td><td>Evet</td></tr>
<tr><td>Google Analytics</td><td>Trafik kaynağı, davranış analizi</td><td>Evet</td></tr>
<tr><td>PageSpeed Insights</td><td>Core Web Vitals ve performans</td><td>Evet</td></tr>
<tr><td>Ahrefs / Semrush</td><td>Anahtar kelime, backlink, rakip analizi</td><td>Kısıtlı ücretsiz</td></tr>
<tr><td>Screaming Frog</td><td>Teknik SEO tarama (kırık link, meta)</td><td>500 URL ücretsiz</td></tr>
</tbody>
</table>
</div>

<h2>Sık Yapılan Hatalar</h2>
<ul>
<li>Aynı içeriği birden fazla URL'de yayınlamak (duplicate content)</li>
<li>Title ve meta description'ı her sayfada aynı bırakmak</li>
<li>Görsellere alt metin eklememek</li>
<li>Mobil uyumluluğu ihmal etmek; <a href="/blog/responsive-tasarim">responsive tasarım</a> şart</li>
<li>İçerik üretmeden yalnızca teknik SEO'ya güvenmek</li>
<li>Backlink satın almak veya spam dizinlere kayıt olmak</li>
<li>Search Console ve Analytics kurmadan ilerlemek; ölçemediğiniz şeyi iyileştiremezsiniz</li>
</ul>

<h2>Veltstack'te SEO Yaklaşımımız</h2>
<p>Her web projesinde SEO'yu mimari kararın parçası olarak ele alıyoruz. Next.js SSR/SSG, otomatik sitemap, yapılandırılmış veri, Core Web Vitals optimizasyonu ve çok dilli hreflang yapılandırması standart sürecimizin içindedir. IQfinansAI ve kurumsal katalog projelerimizde organik trafik artışını ölçülebilir sonuçlarla takip ettik.</p>

<h2>Sonuç</h2>
<p>SEO; teknik altyapı, kaliteli içerik ve güvenilir backlink'in bir arada yürütüldüğü uzun vadeli bir stratejidir. Kısa yollar veya sihirli formüller yoktur; tutarlı çalışma ve kullanıcıya değer sunmak sıralamayı yükseltir. Web sitenizin SEO performansını birlikte değerlendirmek için bizimle iletişime geçin.</p>
`,
    en: `
<p>No matter how well your website is designed, you cannot reach a large audience if your target customers cannot find you on Google. <strong>SEO (Search Engine Optimization)</strong> is the sum of technical and content work that helps your site rank higher in search engines. This guide covers what SEO is, its types, how to apply it and common mistakes.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">93%</span><span class="blog-stat-label">Traffic starts on Google</span></div>
  <div class="blog-stat"><span class="blog-stat-value">3</span><span class="blog-stat-label">Main SEO types</span></div>
  <div class="blog-stat"><span class="blog-stat-value">CWV</span><span class="blog-stat-label">Core Web Vitals</span></div>
</div>

<h2>What Is SEO?</h2>
<p>SEO is the process of helping search engines better understand and evaluate your site in terms of content, technical infrastructure and external links. The goal is to rank higher in organic (free) search results so your target audience can find you.</p>
<p>SEO is not a one-time task; it requires ongoing strategy with content production, technical maintenance and competitor analysis.</p>

<h2>Why Does SEO Matter?</h2>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Organic traffic:</strong> Sustainable visitor flow without paid ads.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Trust and authority:</strong> Ranking high increases brand credibility.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Long-term investment:</strong> Good SEO brings traffic for years; it does not stop when ad budget is cut.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>Targeted audience:</strong> Search users arrive with a need or question; conversion potential is high.</span></div></li>
</ul>

<h2>Types of SEO</h2>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Technical SEO</h4>
    <p>Site speed, HTTPS, mobile compatibility, sitemap, robots.txt, structured data (schema) and Core Web Vitals. The infrastructure layer that helps search engines crawl and understand your site.</p>
  </div>
  <div class="blog-type-card">
    <h4>On-Page SEO</h4>
    <p>Page title, meta description, H1-H6 structure, content quality, keyword usage, internal links and image alt text. Optimization for each individual page.</p>
  </div>
  <div class="blog-type-card">
    <h4>Off-Page SEO</h4>
    <p>Backlinks, brand mentions and social signals. Other sites referencing you increases domain authority.</p>
  </div>
  <div class="blog-type-card">
    <h4>Local SEO</h4>
    <p>Google Business Profile, local keywords and NAP (Name, Address, Phone) consistency. Critical for businesses with a physical location.</p>
  </div>
</div>

<h2>Technical SEO Basics</h2>
<div class="blog-table-wrap blog-table-compare">
<table>
<colgroup>
  <col class="blog-table-compare-col-feature" />
  <col class="blog-table-compare-col-domain" />
  <col class="blog-table-compare-col-hosting" />
</colgroup>
<thead><tr><th>Element</th><th>Purpose</th><th>Check tool</th></tr></thead>
<tbody>
<tr><td>HTTPS</td><td>Secure connection; ranking signal</td><td>Browser address bar</td></tr>
<tr><td>Sitemap.xml</td><td>Notifies search engines of pages</td><td>Google Search Console</td></tr>
<tr><td>Robots.txt</td><td>Specifies areas not to crawl</td><td><code>/robots.txt</code></td></tr>
<tr><td>Core Web Vitals</td><td>LCP, INP, CLS performance metrics</td><td>PageSpeed Insights</td></tr>
<tr><td>Schema markup</td><td>Structured data; rich results</td><td>Google Rich Results Test</td></tr>
<tr><td>Mobile compatibility</td><td>Mobile-first indexing requirement</td><td>Search Console Mobile Usability</td></tr>
</tbody>
</table>
</div>
<p>See our <a href="/blog/domain-hosting">What Is Domain & Hosting?</a> and <a href="/blog/vercel-de-yayin">Deploying on Vercel</a> guides for HTTPS, speed and deploy topics.</p>

<h2>On-Page SEO: Page-Level Optimization</h2>
<ol class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Keyword research</strong> Identify what your audience searches for. Use Google Keyword Planner, Ahrefs or Ubersuggest for volume and competition analysis.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Title and meta description</strong> Write a unique 50-60 character title and 150-160 character description per page. Use keywords naturally.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Content structure</strong> One H1 per page; build logical hierarchy with H2, H3. Keep paragraphs short, readable and value-focused.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Internal links</strong> Link naturally to related pages. Cross-linking blog posts guides both users and search engines.</span></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge" aria-hidden="true"></span><span class="blog-step-body"><strong>Image optimization</strong> Alt text, compressed file size and appropriate format (WebP). Next.js <code>Image</code> component provides automatic optimization.</span></div></li>
</ol>

<h2>Content Strategy</h2>
<p>Google's algorithm keeps evolving, but the core principle stays the same: <strong>content that delivers real value</strong> ranks higher. Content strategy includes:</p>
<ul>
<li><strong>Blog and guide posts:</strong> Long-form content answering your audience's questions. These posts themselves are an SEO example.</li>
<li><strong>Service pages:</strong> Separate, detailed landing page per service; keyword-focused but natural copy.</li>
<li><strong>Regular updates:</strong> Refreshing old content and adding new information preserves rankings.</li>
<li><strong>Multilingual content:</strong> TR and EN on separate URLs with hreflang tags. Managed with solutions like next-intl.</li>
</ul>

<div class="blog-callout">
  <p class="blog-callout-title">Practical tip</p>
  <p>Do not force keywords into text (keyword stuffing). Google rewards natural, readable and comprehensive content. A 1,500-word post that truly explains a topic always beats a 300-word shallow piece.</p>
</div>

<h2>Off-Page SEO and Backlinks</h2>
<p>A backlink is a link from another site to your page. Quality links from relevant sites increase domain authority. Ways to earn backlinks:</p>
<ul>
<li>Producing quality content; others reference you naturally</li>
<li>Listing in industry directories and local listings</li>
<li>Guest posting and partnerships</li>
<li>Press releases and industry news</li>
</ul>
<p>Buying spam links or using link farms leads to Google penalties; it hurts in the long run.</p>

<h2>SEO and the Modern Web Stack</h2>
<p>Modern frameworks like Next.js offer natural SEO advantages:</p>
<ul>
<li><strong>Server-Side Rendering (SSR):</strong> Search engines see full HTML content; no client-side render delay.</li>
<li><strong>Metadata API:</strong> Dynamic title, description and Open Graph tags per page.</li>
<li><strong>Automatic sitemap:</strong> All pages listed automatically via <code>app/sitemap.ts</code>.</li>
<li><strong>Performance:</strong> Image optimization, code splitting and edge caching improve Core Web Vitals.</li>
</ul>
<p>See our <a href="/blog/react-nextjs">React & Next.js</a> and <a href="/blog/ozel-yazilim-cms">Custom Software</a> articles for stack choices.</p>

<h2>SEO Tools</h2>
<div class="blog-table-wrap">
<table>
<thead><tr><th>Tool</th><th>Use</th><th>Free?</th></tr></thead>
<tbody>
<tr><td>Google Search Console</td><td>Indexing, clicks, error tracking</td><td>Yes</td></tr>
<tr><td>Google Analytics</td><td>Traffic source, behavior analysis</td><td>Yes</td></tr>
<tr><td>PageSpeed Insights</td><td>Core Web Vitals and performance</td><td>Yes</td></tr>
<tr><td>Ahrefs / Semrush</td><td>Keyword, backlink, competitor analysis</td><td>Limited free</td></tr>
<tr><td>Screaming Frog</td><td>Technical SEO crawl (broken links, meta)</td><td>500 URLs free</td></tr>
</tbody>
</table>
</div>

<h2>Common Mistakes</h2>
<ul>
<li>Publishing the same content on multiple URLs (duplicate content)</li>
<li>Leaving the same title and meta description on every page</li>
<li>Skipping alt text on images</li>
<li>Ignoring mobile compatibility; <a href="/blog/responsive-tasarim">responsive design</a> is essential</li>
<li>Relying on technical SEO alone without content production</li>
<li>Buying backlinks or registering on spam directories</li>
<li>Proceeding without Search Console and Analytics; you cannot improve what you do not measure</li>
</ul>

<h2>Our SEO Approach at Veltstack</h2>
<p>We treat SEO as part of architectural decisions on every web project. Next.js SSR/SSG, automatic sitemap, structured data, Core Web Vitals optimization and multilingual hreflang configuration are standard in our process. We tracked measurable organic traffic growth on IQfinansAI and corporate catalog projects.</p>

<h2>Conclusion</h2>
<p>SEO is a long-term strategy combining technical infrastructure, quality content and trustworthy backlinks. There are no shortcuts or magic formulas; consistent work and delivering value to users raise rankings. Contact us to evaluate your website's SEO performance together.</p>
`,
  },
};
