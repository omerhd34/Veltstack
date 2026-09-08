import { BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER } from "@/components/pages/blog-detail/domain-extensions-data";

import {
  BLOG_LUCIDE_MAP_PIN,
  BLOG_LUCIDE_SERVER,
  blogAnalogyIcon,
} from "./blog-analogy-icons";
import type { BlogPostEntry } from "./types";

const IXIRHOST_LINK =
  '<a href="https://www.ixirhost.com/" target="_blank" rel="noopener noreferrer">ixirhost</a>';
const IXIRHOST_DOMAIN_SEARCH_LINK =
  '<a href="https://www.ixirhost.com/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer">Domain Sorgulama</a>';
const IXIRHOST_DOMAIN_SEARCH_LINK_EN =
  '<a href="https://www.ixirhost.com/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer">Domain Search</a>';
const CPANEL_LINK =
  '<a href="https://www.cpanel.net/" target="_blank" rel="noopener noreferrer">cPanel</a>';
const VERCEL_LINK =
  '<a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>';

export const blogPostEntry: BlogPostEntry = {
  slug: "domain-hosting",
  titleTr: "Domain & Hosting Nedir?",
  titleEn: "What Is Domain & Hosting?",
  excerptTr:
    "Domain ve hosting kavramlarını sade bir dille açıklıyoruz; ikisinin farkını, birlikte nasıl çalıştıklarını, DNS'in rolünü ve domain satın alma sürecini adım adım ele alıyor, ilk web sitenizi yayına almadan önce bilmeniz gereken her şeyi anlatıyoruz.",
  excerptEn:
    "We explain domain and hosting concepts in plain language, covering how they differ and work together, the role of DNS, and the domain purchase process step by step, so you know everything needed before launching your first website.",
  excerptShortTr:
    "Domain ve hosting nedir, nasıl birlikte çalışır ve DNS'in rolü nedir, sade bir dille anlatıyoruz.",
  excerptShortEn:
    "What domain and hosting are, how they work together and the role of DNS, in plain language.",
  category: "Hosting & Domain",
  categoryEn: "Hosting & Domain",
  imageUrl: "/images/pages/blog/domain-hosting.png",
  readingTime: 7,
  publishedAt: "2026-06-15",
  featured: true,
  content: {
    tr: `
<p>Web sitenizi yayına almak için iki temel bileşen gerekir: <strong>domain</strong> (alan adı) ve <strong>hosting</strong> (barındırma). Bu rehberde ikisinin ne olduğunu, aralarındaki farkı, birlikte nasıl çalıştıklarını ve hangi araçların devreye girdiğini adım adım anlatıyoruz.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">.com</span><span class="blog-stat-label">En popüler domain uzantısı</span></div>
  <div class="blog-stat"><span class="blog-stat-value">DNS</span><span class="blog-stat-label">Domain ile hosting'i bağlayan köprü</span></div>
  <div class="blog-stat"><span class="blog-stat-value">HTTPS</span><span class="blog-stat-label">SSL ile zorunlu güvenlik</span></div>
</div>

<h2>Domain Nedir?</h2>
<p>Domain (alan adı), web sitenizin internetteki adresidir. Örneğin <strong><em>veltstack.com</em></strong> bir domain adıdır. Kullanıcılar tarayıcıya bu adresi yazarak sitenize ulaşır. Domain, hosting'den bağımsızdır; önce domain alırsınız, ardından hosting hizmetine bağlarsınız.</p>
<p>Domain'ler yıllık olarak kiralanır ve bir domain kayıt firması (registrar) üzerinden satın alınır. ${IXIRHOST_DOMAIN_SEARCH_LINK} ile müsaitliği kontrol edebilirsiniz.</p>

<div class="blog-analogy">
  <div class="blog-analogy-header">
    <span class="blog-analogy-kicker">Benzetme</span>
    <p class="blog-analogy-title">Domain ve hosting'i günlük hayattan düşünün</p>
  </div>
  <div class="blog-analogy-grid">
    <article class="blog-analogy-item blog-analogy-item--domain">
      <div class="blog-analogy-item-head">
        ${blogAnalogyIcon("domain", BLOG_LUCIDE_MAP_PIN)}
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Domain</p>
          <span class="blog-analogy-item-tag">Alan adı / adres</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Evinizin açık adresidir; ziyaretçiler tarayıcıya bu adresi yazar.<br>Sizi doğru hosting sunucusuna yönlendiren yol göstericidir.</p>
      <span class="blog-analogy-item-example">veltstack.com</span>
    </article>
    <div class="blog-analogy-join" aria-hidden="true"><span>+</span></div>
    <article class="blog-analogy-item blog-analogy-item--hosting">
      <div class="blog-analogy-item-head">
        ${blogAnalogyIcon("hosting", BLOG_LUCIDE_SERVER)}
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Hosting</p>
          <span class="blog-analogy-item-tag">Barındırma / evin kendisi</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Evin binası ve içindeki eşyalar gibidir; site dosyalarınız burada yaşar.<br>Veritabanı, görseller ve e-postalar bu sunucuda saklanır.</p>
      <span class="blog-analogy-item-example">${IXIRHOST_LINK} / ${VERCEL_LINK}</span>
    </article>
  </div>
</div>

<h2>Hosting Nedir?</h2>
<p>Hosting (barındırma), web sitenizin dosyalarının — HTML, CSS, görseller, veritabanı — saklandığı sunucu hizmetidir. Domain adresiniz kullanıcıyı doğru eve yönlendirir; hosting ise o evin içindeki eşyaları barındırır.</p>
<p class="blog-section-lead">Hosting türlerini projenizin ölçeğine göre değerlendirin:</p>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Paylaşımlı Hosting</h4>
    <p>WordPress ve kurumsal siteler için ekonomik başlangıç. ${IXIRHOST_LINK} paketlerinde ${CPANEL_LINK} paneliyle dosya, veritabanı ve e-posta yönetimi tek yerden yapılır.</p>
  </div>
  <div class="blog-type-card">
    <h4>VPS / Bulut</h4>
    <p>Trafik artan veya özel yapılandırma gereken projeler için daha fazla kaynak ve kontrol sunar.</p>
  </div>
  <div class="blog-type-card">
    <h4>Platform (${VERCEL_LINK})</h4>
    <p>Next.js ve statik siteler için optimize. <code>git push</code> ile deploy, otomatik HTTPS ve global CDN. Detay: <a href="/blog/vercel-de-yayin">Vercel'de Yayın</a>.</p>
  </div>
  <div class="blog-type-card">
    <h4>Tek panel (${IXIRHOST_LINK})</h4>
    <p>Domain tescili, DNS, SSL ve hosting aynı sağlayıcıda; yönetim ve destek süreci sadeleşir. Ayrıntı: <a href="/blog/neden-ixirhost">Neden ixirhost?</a></p>
  </div>
</div>

<h2>İkisi Birlikte Nasıl Çalışır?</h2>
<p>Domain satın aldığınızda DNS (Domain Name System) kayıtlarını hosting sunucunuzun IP adresine yönlendirmeniz gerekir. A kaydı veya nameserver (NS) güncellemesiyle domain'i hosting'e bağlarsınız; yönlendirme tamamlandığında kullanıcı adresinizi yazdığında siteniz açılır.</p>

<div class="blog-flow">
  <div class="blog-flow-step" data-step="1">Domain satın al</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="2">Hosting paketi seç</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="3">DNS'i yönlendir</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="4">SSL ile yayına al</div>
</div>

<div class="blog-callout">
  <p class="blog-callout-title">Pratik ipucu</p>
  <p>Domain ve hosting'i aynı sağlayıcıdan — örneğin ${IXIRHOST_LINK} — almak DNS yönetimini kolaylaştırır. Farklı firmalardan alsanız bile A kaydı ve nameserver güncellemesiyle bağlayabilirsiniz. Next.js projelerinde domain ${IXIRHOST_LINK}'ta kalırken deploy ${VERCEL_LINK}'e taşınabilir; bu senaryoda nameserver'ları ${VERCEL_LINK}'e yönlendirmeniz gerekir.</p>
</div>

<p>SSL sertifikası hosting veya deploy platformu tarafında yapılandırılır; böylece siteniz <strong><em>https://</em></strong> ile güvenli şekilde çalışır.</p>

<h2>ixirhost, cPanel ve Vercel</h2>
<p>Bu üç araç rakip değil; farklı katmanlarda devreye girer:</p>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>${IXIRHOST_LINK}:</strong> Domain kaydı, DNS, SSL ve kurumsal e-posta gibi altyapıyı tek panelde yönetir.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>${CPANEL_LINK}:</strong> ${IXIRHOST_LINK} hosting paketlerinde WordPress, PHP ve sunucuda çalışan projeler için kullanılan yönetim panelidir.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>${VERCEL_LINK}:</strong> Next.js ve React projelerinin kodunu canlıya aldığımız deploy platformudur; domain bağlantısı DNS üzerinden yapılır.</span></div></li>
</ul>

<h2>Domain Nasıl Alınır?</h2>
<p>Domain satın alma süreci oldukça basittir:</p>
<ul class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Domain adını belirleyin</strong>Kısa, telaffuzu kolay ve markanızla uyumlu bir isim seçin. <a href="/blog/dogru-domain-secimi">Doğru Domain Seçimi</a> rehberimize bakabilirsiniz.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Müsaitliği kontrol edin</strong>${IXIRHOST_DOMAIN_SEARCH_LINK} ile seçtiğiniz ismin .com, .com.tr veya .net gibi uzantılarda boş olup olmadığına bakın.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Kayıt firmasını seçin</strong>Güvenilir, destek sunan ve şeffaf fiyatlandırmaya sahip bir registrar tercih edin. Projelerimizde ${IXIRHOST_LINK} kullanıyoruz.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Satın alın ve yenilemeyi planlayın</strong>Hesap oluşturup ödemeyi tamamlayın. Otomatik yenilemeyi aktif edin.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>DNS ayarlarını yapın</strong>Domain'i hosting sağlayıcınıza yönlendirin. <a href="/blog/domain-hosting-tasima">Taşıma rehberimiz</a> DNS güncellemesinde yardımcı olur.</div></div></li>
</ul>

<h2>Popüler Domain Uzantıları</h2>
<p class="blog-section-lead">Uzantı seçimi markanızın algısını doğrudan etkiler. Aşağıdaki tabloda yaygın uzantıları karşılaştırabilirsiniz:</p>
${BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER}

<h2>Sonuç</h2>
<p>Domain sitenizin adresi, hosting ise içeriğinizin evi. İkisi birlikte çalışmadan web siteniz yayına giremez. WordPress ve kurumsal sitelerde ${IXIRHOST_LINK} + ${CPANEL_LINK}; Next.js projelerinde ise ${VERCEL_LINK} bizim için en pratik kombinasyonlardır. Kurulum sürecinde destek almak isterseniz bizimle iletişime geçebilirsiniz.</p>
`,
    en: `
<p>Two building blocks are required to launch a website: a <strong>domain</strong> name and <strong>hosting</strong>. This guide explains what they are, how they differ, how they work together and which tools fit each layer.</p>

<div class="blog-stats">
  <div class="blog-stat"><span class="blog-stat-value">.com</span><span class="blog-stat-label">Most popular domain extension</span></div>
  <div class="blog-stat"><span class="blog-stat-value">DNS</span><span class="blog-stat-label">The bridge between domain and hosting</span></div>
  <div class="blog-stat"><span class="blog-stat-value">HTTPS</span><span class="blog-stat-label">Required security with SSL</span></div>
</div>

<h2>What Is a Domain?</h2>
<p>A domain name is your website's address on the internet. For example, <strong><em>veltstack.com</em></strong> is a domain name. Users type this address into their browser to reach your site. A domain is separate from hosting — you register the domain first, then connect it to a hosting service.</p>
<p>Domains are leased yearly through a registrar. Use ${IXIRHOST_DOMAIN_SEARCH_LINK_EN} to check availability.</p>

<div class="blog-analogy">
  <div class="blog-analogy-header">
    <span class="blog-analogy-kicker">Analogy</span>
    <p class="blog-analogy-title">Think of domain and hosting in everyday terms</p>
  </div>
  <div class="blog-analogy-grid">
    <article class="blog-analogy-item blog-analogy-item--domain">
      <div class="blog-analogy-item-head">
        ${blogAnalogyIcon("domain", BLOG_LUCIDE_MAP_PIN)}
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Domain</p>
          <span class="blog-analogy-item-tag">Domain name / address</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Like your home's street address; visitors type it in the browser.<br>It points them to the right hosting server — it does not host the site itself.</p>
      <span class="blog-analogy-item-example">veltstack.com</span>
    </article>
    <div class="blog-analogy-join" aria-hidden="true"><span>+</span></div>
    <article class="blog-analogy-item blog-analogy-item--hosting">
      <div class="blog-analogy-item-head">
        ${blogAnalogyIcon("hosting", BLOG_LUCIDE_SERVER)}
        <div class="blog-analogy-item-meta">
          <p class="blog-analogy-item-label">Hosting</p>
          <span class="blog-analogy-item-tag">Hosting / the building</span>
        </div>
      </div>
      <p class="blog-analogy-item-desc">Like the building and everything inside; your site files live here.<br>Databases, images and email are all stored on the hosting server.</p>
      <span class="blog-analogy-item-example">${IXIRHOST_LINK} / ${VERCEL_LINK}</span>
    </article>
  </div>
</div>

<h2>What Is Hosting?</h2>
<p>Hosting is the server space where your site files live — HTML, CSS, images, databases. The domain sends visitors to the right address; hosting stores what's inside.</p>
<p class="blog-section-lead">Evaluate hosting types against your project scale:</p>
<div class="blog-type-grid">
  <div class="blog-type-card">
    <h4>Shared Hosting</h4>
    <p>An economical start for WordPress and corporate sites. ${IXIRHOST_LINK} packages include ${CPANEL_LINK} for file, database and email management in one panel.</p>
  </div>
  <div class="blog-type-card">
    <h4>VPS / Cloud</h4>
    <p>More resources and control for growing traffic or projects that need custom configuration.</p>
  </div>
  <div class="blog-type-card">
    <h4>Platform (${VERCEL_LINK})</h4>
    <p>Optimized for Next.js and static sites. Deploy via <code>git push</code>, automatic HTTPS and a global CDN. See <a href="/en/blog/vercel-de-yayin">Publishing on Vercel</a>.</p>
  </div>
  <div class="blog-type-card">
    <h4>Single panel (${IXIRHOST_LINK})</h4>
    <p>Domain registration, DNS, SSL and hosting from one provider; simpler management and support. Details: <a href="/en/blog/neden-ixirhost">Why ixirhost?</a></p>
  </div>
</div>

<h2>How They Work Together</h2>
<p>After buying a domain you point DNS records to your hosting server's IP address. Update A records or nameservers (NS) to connect the domain to hosting; once that's done, visitors who type your domain see the site on your host.</p>

<div class="blog-flow">
  <div class="blog-flow-step" data-step="1">Buy domain</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="2">Choose hosting</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="3">Point DNS</div>
  <span class="blog-flow-arrow" aria-hidden="true">→</span>
  <span class="blog-flow-arrow-mobile" aria-hidden="true">↓</span>
  <div class="blog-flow-step" data-step="4">Go live with SSL</div>
</div>

<div class="blog-callout">
  <p class="blog-callout-title">Practical tip</p>
  <p>Buying domain and hosting from the same provider — for example ${IXIRHOST_LINK} — simplifies DNS management. You can still connect different providers by updating A records or nameservers. For Next.js projects the domain can stay at ${IXIRHOST_LINK} while deployment moves to ${VERCEL_LINK}; in that case you point nameservers to ${VERCEL_LINK}.</p>
</div>

<p>SSL is configured on the hosting or deploy platform so your site runs securely over <strong><em>https://</em></strong>.</p>

<h2>ixirhost, cPanel and Vercel</h2>
<p>These three tools are not competitors; each operates at a different layer:</p>
<ul class="blog-checklist">
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>${IXIRHOST_LINK}:</strong> Manages infrastructure — domain registration, DNS, SSL and corporate email — in one panel.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>${CPANEL_LINK}:</strong> The management panel on ${IXIRHOST_LINK} hosting packages for WordPress, PHP and server-side projects.</span></div></li>
<li><div class="blog-checklist-inner"><span class="blog-checklist-icon" aria-hidden="true"></span><span class="blog-checklist-body"><strong>${VERCEL_LINK}:</strong> The deploy platform where we ship Next.js and React code; the domain connects via DNS.</span></div></li>
</ul>

<h2>How to Buy a Domain</h2>
<p>The domain purchase process is straightforward:</p>
<ul class="blog-steps">
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Choose a domain name</strong>Pick something short, easy to say and aligned with your brand. See our <a href="/en/blog/dogru-domain-secimi">Choosing the Right Domain</a> guide.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Check availability</strong>Use ${IXIRHOST_DOMAIN_SEARCH_LINK_EN} to see whether your name is free under extensions like .com, .com.tr or .net.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Pick a registrar</strong>Choose a reliable provider with fair pricing and support. We use ${IXIRHOST_LINK} in our projects.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Complete purchase and plan renewal</strong>Create an account and pay. Enable auto-renewal.</div></div></li>
<li><div class="blog-step-inner"><span class="blog-step-badge"></span><div class="blog-step-body"><strong>Configure DNS</strong>Point the domain to your hosting provider. Our <a href="/en/blog/domain-hosting-tasima">migration guide</a> helps with DNS updates.</div></div></li>
</ul>

<h2>Popular Domain Extensions</h2>
<p class="blog-section-lead">Extension choice directly affects brand perception. Compare common extensions below:</p>
${BLOG_DOMAIN_EXTENSIONS_PLACEHOLDER}

<h2>Conclusion</h2>
<p>Domain is your address, hosting is your home for content. Both are required to go live. For WordPress and corporate sites we rely on ${IXIRHOST_LINK} + ${CPANEL_LINK}; for Next.js projects ${VERCEL_LINK} is the most practical deploy layer. Contact us if you want help with the setup.</p>
`,
  },
};
