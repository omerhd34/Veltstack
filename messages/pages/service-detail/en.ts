import {
  bakimVeDestekProcessEn,
  seoHizmetleriProcessEn,
  teknikDenetimProcessEn,
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
    "Three clear scope levels — Startup, Professional and Premium — so you can compare options easily.",
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
    heroTitle: "Website Building",
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
    metaTitle: "Website Redesign | Digital Refresh",
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
    heroTitle: "Digital Refresh",
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
    heroBadge: "App Building",
    heroTitle: "Mobile App Building",
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
  "seo-hizmetleri": {
    metaTitle: "SEO Services",
    metaDesc:
      "We grow your organic visibility with technical SEO, keyword strategy and content optimization — measurable steps, lasting results.",
    keywords: [
      "SEO services",
      "grow organic traffic",
      "technical SEO consulting",
      "on-page SEO",
      "keyword research",
      "content SEO strategy",
      "Search Console",
      "local SEO",
      "SEO agency",
      "ranking improvement",
      "blog SEO",
    ],
    heroBadge: "SEO",
    heroTitle: "SEO Services",
    heroImageAlt:
      "Ascending ranking graph illustration symbolizing SEO and search visibility",
    heroSubtitle:
      "I improve search visibility from technical infrastructure to content strategy—audits, keyword planning, on-page work and regular reporting for sustainable organic growth.",
    processSubtitle:
      "We run SEO work through measurable steps from site analysis to continuous improvement. We share what is done and expected outcomes transparently at each stage.",
    techSubtitle:
      "Tools we use for analysis, monitoring and optimization in SEO projects.",
    processItems: seoHizmetleriProcessEn,
    features: [
      {
        title: "Technical SEO Audit",
        description:
          "We run a full technical audit covering site speed, crawl errors, indexing status and structured data implementation. Core Web Vitals, sitemap health and robots.txt configuration are reviewed against current best practices. Critical issues are ranked by impact so you know what to fix first. Findings are documented in a clear report with actionable next steps. A baseline is established so improvements can be measured over time. Mobile-first indexing and page experience signals are evaluated separately.",
      },
      {
        title: "Keyword Strategy",
        description:
          "We build a keyword map aligned with your audience, search intent and conversion potential. High-opportunity terms are balanced with realistic ranking difficulty for your domain authority. Commercial, informational and navigational queries are grouped into clusters per page. Seasonal trends and local vs. global search behavior are factored into the plan. The result is a focused roadmap that ties keywords directly to landing pages and content priorities. Long-tail opportunities and question-based searches are integrated into the strategy.",
      },
      {
        title: "On-Page Optimization",
        description:
          "We improve heading hierarchy, meta titles and descriptions, internal linking and content layout on priority pages. Each page is tuned for a primary keyword cluster without keyword stuffing or thin content risks. Image alt text, URL structure and canonical tags are verified page by page. Schema markup is added or corrected where it supports richer search results. Changes are validated before and after so you can see measurable on-page gains. Content length, readability and user intent alignment are reviewed as well.",
      },
      {
        title: "Content Planning",
        description:
          "We create an SEO-friendly editorial calendar for blog posts, landing pages and service content. Topics are chosen based on keyword gaps, audience questions and competitor coverage. Each piece follows a clear structure: intent match, heading outline and internal link targets. Publishing cadence is planned to build topical authority steadily rather than in sporadic bursts. Drafts can align with your brand voice while staying optimized for search visibility. Updating and re-optimizing existing content is included in the plan.",
      },
      {
        title: "Performance Monitoring",
        description:
          "We track rankings, organic traffic and conversions through Search Console and Analytics on a regular schedule. Traffic drops, crawl errors and indexing changes trigger early review before they affect revenue. Monthly snapshots compare progress against the baseline set during the audit phase. Conversion events and key landing pages are monitored alongside pure ranking metrics. You receive clear reports that explain what moved, why and what we recommend next. Algorithm updates and sector trends are reflected and interpreted in reports.",
      },
      {
        title: "Competitor Analysis",
        description:
          "We analyze how competitors in your sector rank, which keywords they own and where gaps exist for your brand. Backlink profiles, content depth and technical setup are compared at a high level to spot opportunity areas. Pages that consistently outrank you are reviewed for structure, intent coverage and user experience patterns. Findings feed directly into your keyword and content strategy rather than staying as abstract research. The goal is practical differentiation — not copying, but identifying angles your site can win. Competitor content calendars and new page launches are monitored regularly.",
      },
    ],
  },
  "teknik-denetim": {
    metaTitle: "Technical SEO Audit | Speed & Security",
    metaDesc:
      "Technical audit for your website and mobile app focused on performance, security, SEO and code quality.",
    keywords: [
      "technical SEO audit",
      "site speed analysis",
      "Core Web Vitals audit",
      "website security audit",
      "Lighthouse score",
      "accessibility audit",
      "code quality review",
      "performance audit",
      "sitemap robots audit",
      "technical debt analysis",
    ],
    heroBadge: "Technical Audit",
    heroTitle: "Technical Audit",
    heroImageAlt:
      "Scan and security check illustration symbolizing technical audit",
    heroSubtitle:
      "We analyze your digital assets for performance, security, SEO and code quality, then deliver a prioritized action plan—from Lighthouse scores to technical debt, with a clear roadmap.",
    processSubtitle:
      "We manage the audit process through clear steps from briefing to action plan. Findings are reported by priority with actionable recommendations.",
    techSubtitle:
      "Tools we use for performance, security and SEO analysis in technical audits. Colored icons are the core technologies we use in most projects; muted icons show alternatives we can adopt when your requirements call for them.",
    processItems: teknikDenetimProcessEn,
    features: [
      {
        title: "Performance Analysis",
        description:
          "Speed and user experience are evaluated through Lighthouse, Core Web Vitals and real-world load time metrics. Largest Contentful Paint, Cumulative Layout Shift and interaction delays are measured across key pages. Bottlenecks such as heavy images, render-blocking scripts and slow server responses are identified with impact scores. Mobile and desktop performance are tested separately since user behavior differs by device. Results are summarized with concrete fixes ranked by effort and expected gain. Third-party scripts and font loading are reported separately for their performance impact.",
      },
      {
        title: "Security Review",
        description:
          "We examine dependency vulnerabilities, HTTPS configuration, access controls and baseline security risks across your stack. Outdated packages, exposed endpoints and weak authentication patterns are flagged with severity levels. Headers, CORS settings and form protection are checked against common attack vectors. Admin panels and API routes receive focused review for authorization gaps. A security checklist highlights what must be fixed before the next release or public exposure. Data storage, encryption and session management practices are evaluated as well.",
      },
      {
        title: "Technical SEO Audit",
        description:
          "Crawl errors, meta structure, indexing status and structured data are verified against search engine guidelines. Broken links, duplicate titles, missing descriptions and orphan pages are catalogued page by page. Sitemap coverage, robots rules and canonical implementation are reviewed for conflicts. Indexation blocks and noindex misuse that could hide important pages are called out explicitly. The audit connects technical SEO issues to ranking and traffic risk so fixes are prioritized logically. Mobile compatibility and the SEO impact of Core Web Vitals are included in the report.",
      },
      {
        title: "Code & Architecture Review",
        description:
          "Code quality, maintainability, technical debt and scalability are assessed from a senior engineering perspective. Folder structure, separation of concerns and reuse patterns are reviewed for long-term sustainability. Anti-patterns, dead code and overly coupled modules that slow future work are documented. Database queries, caching strategy and API design are evaluated where they affect performance or reliability. Recommendations focus on practical refactors rather than theoretical perfection. Test coverage, CI/CD setup and deployment processes are part of the architecture review.",
      },
      {
        title: "Accessibility Check",
        description:
          "WCAG compliance, color contrast, keyboard navigation and screen reader compatibility are tested on critical user flows. Forms, modals, focus states and interactive elements are checked for barriers that exclude users. Missing alt text, unlabeled inputs and insufficient contrast ratios are listed with page references. Basic UX friction points — unclear error messages, tiny tap targets, confusing navigation — are noted alongside formal accessibility issues. Fixes are grouped by severity so you can meet legal and usability standards incrementally. Automated scanning tools and manual testing are used together for a thorough evaluation.",
      },
      {
        title: "Action Plan",
        description:
          "All findings are consolidated into a prioritized action plan with impact analysis and practical improvement steps. Quick wins, medium-effort fixes and strategic initiatives are separated so you can plan resources realistically. Each item includes context, recommended approach and expected outcome where applicable. Critical blockers that affect security, SEO or revenue are highlighted at the top. The plan becomes a shared roadmap your team can execute against without re-reading the full audit. Estimated effort, cost impact and implementation order are clarified for each item.",
      },
    ],
  },
  "bakim-ve-destek": {
    metaTitle: "Website Maintenance & Support",
    metaDesc:
      "Regular maintenance, updates and technical support for your website, mobile app and backend infrastructure.",
    keywords: [
      "website maintenance",
      "site maintenance support",
      "Next.js maintenance",
      "website technical support",
      "security updates",
      "backup service",
      "uptime monitoring",
      "emergency support",
      "CMS maintenance",
      "monthly website care",
    ],
    heroBadge: "Maintenance & Support",
    heroTitle: "Maintenance & Support",
    heroImageAlt:
      "Protective shield and system monitoring illustration symbolizing maintenance and support",
    heroSubtitle:
      "I stay by your side after launch—updates, backups, security and support under one roof, with continuous monitoring, rapid response and regular reporting for web, mobile and backend.",
    processSubtitle:
      "We manage maintenance from project handover to monthly reporting through regular, predictable steps. Updates, monitoring and support requests follow a clear schedule.",
    techSubtitle:
      "Infrastructure and monitoring tools we use in maintenance and support services. Colored icons are the core technologies we use in most projects; muted icons show alternatives we can adopt when your requirements call for them.",
    processItems: bakimVeDestekProcessEn,
    features: [
      {
        title: "Updates & Patches",
        description:
          "Dependency, framework and security updates are applied on a regular schedule to keep your stack current and protected. Breaking changes are tested in a staging environment before they reach production. Patch notes and version history are tracked so rollback is possible if an issue appears. Critical security releases receive priority handling outside the normal cycle when needed. You stay informed about what was updated and why, without needing to monitor changelogs yourself. Major version upgrades are planned ahead and compatibility tests are completed first.",
      },
      {
        title: "Backups & Security",
        description:
          "Scheduled data backups, security scans and access control reviews protect your site and user data around the clock. Backup integrity is verified periodically so restore drills do not fail when you need them most. SSL certificates, firewall rules and login security are monitored for expiry or misconfiguration. Suspicious activity, failed login spikes and file changes trigger review before they escalate. Recovery procedures are documented so downtime stays minimal if something goes wrong. Backup frequency and retention period are configured based on your needs.",
      },
      {
        title: "Performance Monitoring",
        description:
          "Uptime tracking, page speed monitoring and rapid response to slowdowns keep your digital presence reliable for visitors. Alerts fire when response times exceed agreed thresholds or when the site becomes unreachable. Performance regressions after updates are caught early through before-and-after checks. Hosting resource usage and error rates are watched alongside front-end metrics. When issues arise, diagnosis and first response begin quickly — often before users report them. A monthly performance summary reports trends and potential risks.",
      },
      {
        title: "Technical Support",
        description:
          "Issue reporting, bug fixes and small improvements receive priority support through a clear communication channel. Bugs are reproduced, prioritized and fixed based on severity and user impact. Small feature tweaks, configuration changes and integration adjustments fit within the maintenance scope. Response times are aligned with your plan so critical outages get immediate attention. You have a single point of contact who already knows your project architecture. Support requests are tracked; resolution time and status updates are shared transparently.",
      },
      {
        title: "Content Updates",
        description:
          "Text, image and page content changes are applied quickly without you needing to touch code or the CMS yourself. New blog posts, service descriptions, team photos and pricing updates go live after a brief review. Image optimization and responsive formatting are handled as part of each update. Scheduled publishes and draft previews are supported when timing matters for campaigns. Routine content work stays off your plate so you can focus on running the business. Flexible capacity is reserved for bulk updates and urgent fixes.",
      },
      {
        title: "Reporting",
        description:
          "A monthly status report covers completed work, system health and recommendations for the period ahead. Updates applied, incidents resolved and performance trends are summarized in plain language. Open risks — expiring certificates, pending updates, growing technical debt — are flagged proactively. Suggestions for the next month are included when they help you plan budget or priorities. The report gives you visibility without requiring daily check-ins or technical knowledge. Optional quarterly summaries can track long-term trends as well.",
      },
    ],
  },
} as const;
