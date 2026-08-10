import {
  uygulamaGelistirmeProcessEn,
  webSitesiGelistirmeProcessEn,
  webSitesiYenilemeProcessEn,
} from "@/components/pages/service-detail/service-process-items/en";

export const serviceDetailsEn = {
  featuresTitle: "What We Offer",
  featuresBadge: "Features",
  featuresSubtitle:
    "I define scope upfront and manage delivery through measurable milestones. You always know what will be delivered and when, with transparent communication throughout.",
  processTitle: "How We Work",
  processSliderPrev: "Previous process step",
  processSliderNext: "Next process step",
  processSliderStep: "Process step",
  techTitle: "Technologies We Use",
  techCategoryFrontend: "Frontend",
  techCategoryMobile: "Mobile Building",
  techCategoryUi: "UI Libraries",
  techCategoryBackend: "Backend",
  techCategoryDatabase: "Database",
  techCategoryDevops: "DevOps & Hosting",
  techCategoryAnalytics: "Analytics & SEO",
  techCategoryPayment: "Payments",
  techCategoryStore: "Store & Publishing",
  techCategoryTools: "Tools & Integrations",
  statDelivery: "Delivery (Days)",
  statDeliveryShort: "Delivery",
  statSupport: "Support (Days)",
  statSupportShort: "Support",
  statTiers: "Package",
  statTiersShort: "Package",
  statRevisions: "Revision",
  statRevisionsShort: "Revision",
  statDeliveryHint:
    "Estimated delivery range based on project scope. A clear timeline is shared after the discovery call.",
  statSupportHint:
    "Post-launch support window for technical assistance, revisions and minor updates.",
  statTiersHint:
    "Three clear scope levels — Startup, Professional and Advanced — so you can compare options easily.",
  statRevisionsHint:
    "Design and content revisions included in your chosen package. Send your feedback as a single list — each revision covers those items.",
  featureDetailLabel: "Feature detail",
  featuresCarouselPrev: "Previous feature",
  featuresCarouselNext: "Next feature",
  breadcrumbHome: "Home",
  breadcrumbServices: "Services",
  "web-sitesi-gelistirme": {
    metaTitle: "Website Development | Next.js Corporate Sites",
    metaDesc:
      "End-to-end website development for corporate, e-commerce and portfolio projects. Fast, SEO-friendly and scalable solutions with Next.js.",
    keywords: [
      "website development",
      "website design",
      "corporate website",
      "Next.js website",
      "e-commerce website development",
      "landing page development",
      "SSR website",
      "React website",
      "portfolio website",
      "corporate brochure site",
      "scalable web application",
    ],
    heroBadge: "Web Building",
    heroTitle: "Website Development",
    heroImageAlt:
      "Abstract browser and layout illustration symbolizing modern website building",
    heroSubtitle:
      "I build every kind of web project end to end—from corporate sites and e-commerce to portfolios—with a modern, SEO-ready, mobile-first stack for fast, scalable solutions that represent your brand online.",
    processSubtitle:
      "At every stage from discovery to launch, we clarify what will be done, when it will be delivered and what outcome you can expect. Design, building, testing and go-live follow a predictable plan, with regular updates throughout the project.",
    techSubtitle:
      "Modern, scalable tools selected for your project needs. Colored icons are the core technologies we use in most projects; muted icons show alternatives we can adopt when your requirements call for them.",
    processItems: webSitesiGelistirmeProcessEn,
    features: [
      {
        title: "SEO",
        description:
          "Your site ships search-ready with SSR, meta tags, sitemap and structured data. Open Graph, canonical URLs and robots configuration prevent indexing issues from day one. Separate meta templates are prepared for blog, service and product pages. Google Search Console integration tracks crawl status before go-live. Title and description copy is optimized so you stand out more in search results. Language, locale and hreflang settings are planned upfront based on your local and international search goals.",
      },
      {
        title: "E-Commerce",
        description:
          "Product catalog, cart, order management and secure checkout flows built end to end. Mobile-friendly, conversion-focused sales with gateways such as PayTR, Iyzico and Stripe. Inventory, shipping and order status can be tracked from a single panel. The checkout page is protected with SSL and 3D Secure; PCI-compliant infrastructure is preferred. Order confirmation emails and simple reporting screens make day-to-day operations easier. Coupon, campaign and variant management scenarios are configured based on your scope.",
      },
      {
        title: "Performance",
        description:
          "Next.js, image optimization and CDN target strong Lighthouse scores and fast load times. Core Web Vitals are defined upfront and monitored throughout the project. Lazy loading, font optimization and unnecessary script cleanup keep page speed high. Critical CSS and resource prioritization load in the right order. A final performance pass before launch keeps speed reliable in production. Caching and server-side rendering strategies are applied together for a smooth experience even on slow connections.",
      },
      {
        title: "Responsive",
        description:
          "A consistent, touch-friendly experience across mobile, tablet and desktop. Typography, spacing and interactions are tuned for every screen size. Navigation, forms and CTA buttons are comfortable to use on small screens. Hamburger menus and touch target sizes follow mobile standards. Real device and browser testing verifies compatibility before launch. A flexible grid and breakpoint structure makes adapting to new device sizes straightforward. Layouts are tested on common breakpoints so content never overflows or breaks on narrow screens.",
      },
      {
        title: "Multi-lang",
        description:
          "Infrastructure for Turkish, English and additional languages based on your needs. URL structure, meta tags and hreflang tags stay SEO-friendly per language. Language-specific sitemaps and content management support international reach. Default language and alternate redirects are defined clearly. When you add a new language, an extensible architecture keeps the existing setup intact. Visitor language preference is remembered in the browser; the language switcher stays accessible on every page.",
      },
      {
        title: "Theme",
        description:
          "Visitors can choose dark or light theme, or follow the system preference automatically. Contrast and brand consistency hold in both modes; the choice is remembered in the browser. Color tokens are tuned separately for each theme. Theme switches use smooth transitions for a polished feel. WCAG contrast standards are respected in both modes for an accessible experience. Images, icons and accent colors are adjusted in both themes without losing readability. Header, footer and all components are tested in both themes; the page does not flash the wrong theme on reload.",
      },
      {
        title: "Admin",
        description:
          "Manage blog posts, services and page content without code through a dedicated admin panel. The interface is built in whichever language you need; WYSIWYG editor, image uploads and draft-to-publish flows are standard. Role-based access lets you assign different permissions to team members. Content changes can go live instantly or on a schedule. The panel is mobile-friendly so you can update on the go. A media library, SEO fields and preview screen speed up everyday content management.",
      },
      {
        title: "Security",
        description:
          "HTTPS, secure header configuration and modern authentication standards built in from day one. Rate limiting and basic bot protection on form submissions. Dependency security scans run regularly during building. Admin and API endpoints are protected with an authorization layer. A pre-launch security checklist is completed before going live. CSRF, XSS and injection risks are addressed with input validation and output filtering layers as standard. Session handling and access patterns are reviewed so unusual activity can be spotted early.",
      },
      {
        title: "Analytics",
        description:
          "Google Analytics, Search Console and conversion events integrated into the project. Contact forms go live with spam protection and instant email notifications. Track which pages get traffic and how many forms are submitted. GTM or direct integration is planned based on your needs. A basic performance report in the first month verifies that data collection works correctly. Button clicks, form submissions and key page views are tagged to measure your conversion funnel. Visitor sources, device breakdown and top-performing pages can be reviewed at a glance from the dashboard.",
      },
    ],
  },
  "web-sitesi-yenileme": {
    metaTitle: "Website & App Refresh",
    metaDesc:
      "Refresh your outdated or slow website and mobile app with modern design, fast infrastructure and SEO improvements. Secure migration while preserving your content.",
    keywords: [
      "website redesign",
      "website refresh",
      "modernize old website",
      "SEO-safe site migration",
      "WordPress to Next.js migration",
      "speed up slow website",
      "mobile-friendly redesign",
      "UI UX refresh",
      "digital transformation web",
      "website migration",
    ],
    heroBadge: "Web & App Refresh",
    heroTitle: "Website & App Refresh",
    heroImageAlt:
      "Transforming interface panels illustration symbolizing website redesign",
    heroSubtitle:
      "We transform outdated, slow or mobile-unfriendly sites into modern, conversion-focused experiences—preserving your content and migrating without putting SEO rankings at risk.", 
    processSubtitle:
      "We renew your existing site or app through measurable steps from audit to go-live. Migration planning, design approval and content migration are managed with transparent communication to minimize SEO loss risk.",
    techSubtitle:
      "Modern, scalable tools we use when moving your existing site to new infrastructure.",
    processItems: webSitesiYenilemeProcessEn,
    features: [
      {
        title: "Current Site Audit",
        description:
          "We comprehensively audit your existing site across technical infrastructure, performance, SEO and user experience. Issues are ranked by impact and urgency into a prioritized action plan. Refresh scope is clarified from this analysis so unnecessary work is ruled out early. Outdated technology, security gaps and mobile incompatibility are reported in separate categories. Competitor sites are benchmarked to identify areas where you fall behind. The audit report serves as a reference document for every step of the refresh process.",
      },
      {
        title: "Modern Design & UX",
        description:
          "We design an up-to-date interface, clear information architecture and conversion-focused page flows aligned with your brand. A consistent experience is targeted on mobile and desktop; typography and component language stay in line with your identity. Building does not begin until you approve the design direction. Wireframe and prototype stages gather feedback so design iterates before build. Accessibility and readability are prioritized on every screen size. CTA placement, form flows and content hierarchy are optimized for your conversion goals.",
      },
      {
        title: "Performance Improvements",
        description:
          "We upgrade infrastructure targeting fast load times, optimized assets and strong Lighthouse scores. Core Web Vitals are monitored throughout the project; unnecessary scripts and heavy resources are removed. A final performance pass is completed before go-live. Legacy hosting or CDN configuration is migrated to modern infrastructure. Image sizes, font loading and third-party scripts are re-evaluated for impact. Before-and-after scores are compared so concrete improvement is reported.",
      },
      {
        title: "SEO Protection & Growth",
        description:
          "We preserve your existing rankings while improving visibility through URL structure, 301 redirects and meta data. Sitemap, robots and structured data are verified before launch. Indexing is tracked via Search Console throughout the transition. Old URLs are mapped to new equivalents to minimize 404 and ranking loss risk. Title, description and internal link structure are reviewed as a refresh opportunity. Crawl errors and indexing changes in the first week after launch are watched closely.",
      },
      {
        title: "Content Migration",
        description:
          "We safely and systematically transfer existing text, images and page content into the new structure. Missing, broken or mismatched content is identified and corrected before validation begins. Page-by-page checklist validation runs after migration to confirm accuracy on every URL. Images are optimized and transferred in the new format; broken links are cleaned up proactively. Blog posts, service pages and dynamic content are mapped to the new database structure. A full backup is taken before migration so rollback remains possible if needed.",
      },
      {
        title: "Post-Launch Support",
        description:
          "We provide technical support, small fixes and monitoring throughout the transition after go-live. Potential issues in the first week get fast response; redirects and form flows are watched closely. The goal is reliable operation for the full support period. Performance, uptime and error logs are checked on a regular schedule. Small UX fixes are applied quickly based on user feedback. Handover documentation and maintenance recommendations are shared when the support period ends.",
      },
    ],
  },
  "uygulama-gelistirme": {
    metaTitle: "Mobile App Development",
    metaDesc:
      "High-performance mobile apps for iOS and Android with React Native and Expo.",
    keywords: [
      "mobile app development",
      "React Native app",
      "iOS Android app development",
      "Expo mobile app",
      "cross platform app",
      "App Store publishing",
      "Google Play app",
      "mobile app design",
      "native mobile app",
      "startup mobile app",
    ],
    heroBadge: "App Development",
    heroTitle: "App Development",
    heroImageAlt:
      "Floating phone and interface illustration symbolizing mobile app building",
    heroSubtitle:
      "User-friendly, scalable apps for iOS and Android from a single codebase—React Native and Expo for fast delivery, store publishing and backend integrations under one roof.",
    processSubtitle:
      "From app concept to store launch, we clarify what will be done and what deliverable you can expect at each stage. Design, building, testing and publishing follow a predictable plan.",
    techSubtitle:
      "Modern, scalable tools we use in mobile app projects. Colored icons are the core technologies we use in most projects; muted icons show alternatives we can adopt when your requirements call for them.",
    processItems: uygulamaGelistirmeProcessEn,
    features: [
      {
        title: "Cross-Platform",
        description:
          "We build efficiently for iOS and Android from a single codebase with React Native and Expo. Platform-specific behavior is supported through native modules; screen sizes and interactions are optimized for every device. This enables fast iteration on one track instead of two separate teams and budgets. Responsive layout strategy for tablets and varying screen densities is defined upfront. Platform guideline compliance makes App Store and Google Play approval smoother. A high code-sharing ratio keeps long-term maintenance costs low.",
      },
      {
        title: "API Integration",
        description:
          "We set up secure backend connections, authentication and real-time data flows end to end. REST APIs, token management and third-party service integrations are structured to fit your project architecture. Offline scenarios and error handling are addressed without breaking the user experience. API response times and timeout strategies are optimized for mobile connection conditions. Payment, notification and map services are integrated through a secure connection layer. Integration tests are validated on real devices before go-live.",
      },
      {
        title: "User Experience",
        description:
          "We design intuitive navigation, accessibility and interfaces aligned with iOS and Android platform standards. Typography, spacing and interactions stay consistent with your brand identity across every screen. Form flows, feedback and onboarding steps are tested against real user scenarios before building begins. Empty, loading and error states are designed to guide users clearly without confusion. Touch target sizes and gesture interactions ensure comfortable use on both platforms. Usability testing is applied iteratively during the design phase so friction points are caught early.",
      },
      {
        title: "Performance Optimization",
        description:
          "We target fast cold starts, smooth animations and low memory usage across all supported devices. Image caching, list performance and unnecessary re-renders are monitored throughout the project lifecycle. Real-device testing verifies performance on both high-end and entry-level hardware before store approval. Bundle size and lazy loading strategies keep app launch speed consistently high. Heavy animations and large assets are optimized for smooth performance on lower-end devices too. Performance metrics are measured, benchmarked and reported regularly throughout building.",
      },
      {
        title: "Store Publishing",
        description:
          "We provide technical preparation, production builds and store metadata support for App Store and Google Play publishing. Icons, screenshot sizes and release notes are prepared strictly to platform guidelines and review standards. A comprehensive pre-launch checklist reduces rejection risk and accelerates approval timelines. Beta distribution is managed through TestFlight and Google Play internal testing channels. Privacy policy, app description and category selection are prepared to maximize store visibility and discoverability. Store reviews and crash reports are monitored closely after the first release for rapid follow-up.",
      },
      {
        title: "Maintenance & Updates",
        description:
          "OS compatibility, bug fixes and new feature iterations run on a regular plan aligned with your product roadmap. Crash reports are monitored continuously and critical issues receive priority response within agreed SLA windows. Your app keeps evolving sustainably after go-live with predictable release cycles. Compatibility tests run when new iOS and Android versions are released to prevent disruption. User feedback and store reviews are evaluated systematically for feature prioritization. Version history and release notes are kept up to date for a transparent and traceable building process.",
      },
    ],
  },
} as const;
