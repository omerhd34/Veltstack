export const projectDetailsEn = {
  demo: "View Live Site",
  scrollLabel: "View details",
  showMore: "Show More",
  showLess: "Show Less",
  detailsTitle: "Project Details",
  featuresTitle: "Core Features",
  featuresBadge: "Features",
  featuresSubtitle:
    "The main modules that shape user experience and business value.",
  overviewBadge: "Overview",
  challengeTitle: "Business Problem",
  solutionTitle: "Solution",
  metricsTitle: "Project Metrics",
  relatedServicesTitle: "Related Services",
  relatedServicesSubtitle:
    "Service areas I applied on this project and for similar needs.",
  breadcrumbHome: "Home",
  breadcrumbProjects: "Projects",
  metricHints: {
    developmentTime:
      "Total build time from discovery to launch. May vary based on scope, integrations and approval cycles.",
    siteType:
      "The project's architecture and business model — classified as SaaS, e-commerce, corporate site, portfolio and similar.",
    sector: "The industry the project serves and its target user base.",
    languageSupport:
      "Interface languages offered on the platform. Multilingual setups support locale-based content and routing.",
  },
  veltstack: {
    metaTitle: "VeltStack | Corporate Website",
    metaDesc:
      "VeltStack software agency corporate site. Service packages, project showcase, blog, and schedule-a-call flow.",
    heroBadge: "Agency / Corporate",
    heroTitle: "VeltStack | Software Agency",
    heroSubtitle:
      "A TR/EN corporate site that unifies service packages, project showcase, blog, and scheduling in one brand experience—with an SEO-first setup.",
    summary: "Software agency corporate website and lead-generation platform.",
    challengeText:
      "As a software agency, service packages, reference work, blog content, and contact paths lived on different pages and update rhythms. Prospects wanted one trusted place to see process, package scope, and past projects; meanwhile manual content updates were slow, **TR/EN** multilingual presentation felt inconsistent, and organic search showed a fragmented brand story. Keeping the project showcase current, managing blog and **FAQ** in one editorial flow, and making discovery-form leads traceable were critical for conversion—the previous setup could not meet those operational and marketing needs at once.",
    solutionText:
      "For **VeltStack** we unified service packages, featured projects, blog, **FAQ**, and scheduling forms in one brand experience. Turkish and English **next-intl** routing presents the same content architecture in both languages; the projects mega menu and service detail pages speed discovery. **SSR**-based **SEO**, structured data, and meta infrastructure support organic visibility, while the **admin panel** manages projects, blog posts, and contact records from one place. **Rate-limited** contact flows and **Resend** email notifications keep lead handling secure and measurable.",
    details:
      "The site is built with **Next.js 16** **App Router**, **React 19**, and **TypeScript**; **Tailwind CSS 4** targets a minimalist, dark-mode-friendly, premium-feel UI. **Prisma** and **PostgreSQL** (**Neon**) back projects, blog, services, and contact messages; a **next-auth** protected admin panel speeds content operations. Locale-based routing with **next-intl**, **Resend** form notifications, and **Upstash** rate limiting against abuse are part of the production flow. **Vercel** deploy balances **ISR** and **SSR** for page speed; the project showcase, service packages, blog, about, and contact pages tell the full agency story in one architecture. **Zod**-validated forms and accessible components reinforce trust and a professional first impression.",
    features: [
      {
        title: "Services Showcase",
        description:
          "Web, mobile, **SEO**, audit, and maintenance packages; detail pages and related **CTA** flows.",
      },
      {
        title: "Projects Mega Menu",
        description:
          "Quick access to featured client work; **slug**-based detail pages and live demo links.",
      },
      {
        title: "Blog & FAQ",
        description:
          "Corporate content, category filters, and FAQs; **SEO**-friendly article templates.",
      },
      {
        title: "Admin Panel",
        description:
          "Projects, blog, contact messages, and content management; secure access via **next-auth**.",
      },
      {
        title: "Schedule a Call",
        description:
          "Discovery form, validation, and email alerts; **rate-limited** contact flow.",
      },
      {
        title: "SEO & Analytics",
        description:
          "**SSR**, structured data, sitemap, and **Analytics** integration for **TR/EN** visibility.",
      },
    ],
    metrics: [
      { value: "Ongoing", label: "Build Timeline" },
      { value: "Corporate", label: "Site Type" },
      { value: "Software Agency", label: "Sector" },
      { value: "TR/EN", label: "Languages" },
    ],
  },
  "dil-atolyesi": {
    metaTitle: "Dil Atölyesi | English Learning Platform",
    metaDesc:
      "English learning platform with an A1–C2 path, AI exercises, and a progress dashboard.",
    heroBadge: "EdTech / Education",
    heroTitle: "Dil Atölyesi | English Workshop",
    heroSubtitle:
      "Lessons, vocabulary, and AI drills in one platform; measurable progress on the dashboard.",
    summary: "English learning and AI-powered practice platform.",
    challengeText:
      "English learners jumping between YouTube channels, mobile apps, and PDFs struggled with consistency and level tracking. Without clarity on gaps, when to review vocabulary, or proof to advance, motivation dropped—and the four skills (reading, writing, listening, speaking) rarely progressed on one roadmap. Many platforms either served content only or detached practice from lessons; measurable progress, **AI**-backed review, and proficiency-based level-up needed to live in a single workshop experience.",
    solutionText:
      "On **Dil Atölyesi** we combined placement testing, an **A1–C2** path, sequential lesson unlock, **AI** exercise sets, vocabulary workshop, and proficiency exams on one platform. The student dashboard shows completed lessons, streaks, and next steps; drills recommend weaker topics and **spaced repetition (SRS)** reduces forgetting. A **REST API** keeps user, lesson, and progress data in sync; grammar and listening modules support balanced four-skill learning. The platform runs in production on **Vercel** for learners every day.",
    details:
      "The frontend uses **Next.js** and **React** for a performance-focused, mobile-friendly learning UI. On the backend, **Node.js**, **Prisma ORM**, and **PostgreSQL** persist accounts, lesson content, quiz results, and flashcard state. The **REST API** layer ties sessions, progress updates, and exam results together; **AI** exercise endpoints personalize review with multiple question types. The progress dashboard surfaces completed units, daily goals, and badges. Placement and proficiency exams manage level locks with objective criteria. **TR/EN** UI support lets learners explore in their language; **Vercel** deploy keeps production scalable.",
    features: [
      {
        title: "A1–C2 Level Path",
        description:
          "**CEFR**-aligned unit order; flexible start and sequential unlock after each completed lesson.",
      },
      {
        title: "Placement Test",
        description:
          "Level recommendation on first visit; a personalized starting point that cuts redundant review.",
      },
      {
        title: "AI Exercises",
        description:
          "Multi-format questions; error analysis and **AI** auto review sets focused on weak topics.",
      },
      {
        title: "Vocabulary Workshop",
        description:
          "Spaced repetition (**SRS**), timers, and daily word goals for lasting retention.",
      },
      {
        title: "Grammar & Four Skills",
        description:
          "Reading, writing, listening, and speaking blocks; grammar explainers and mini quizzes.",
      },
      {
        title: "Listening Module",
        description:
          "Audio content and comprehension questions; speed control and section replay for practice.",
      },
      {
        title: "Progress Dashboard",
        description:
          "Completed lessons, **streaks**, badges, and next-unit summary on one screen.",
      },
      {
        title: "Proficiency Exams",
        description: "Level-up exams; pass scores and content unlock rules.",
      },
      {
        title: "Reminders & Goals",
        description:
          "Daily study reminders and goal tracking to support consistent habits.",
      },
    ],
    metrics: [
      { value: "Active", label: "Status" },
      { value: "EdTech", label: "Site Type" },
      { value: "Education", label: "Sector" },
      { value: "TR/EN", label: "Languages" },
    ],
  },
  iqfinansai: {
    metaTitle: "IQfinansAI | AI Finance Analytics Platform",
    metaDesc:
      "Personal finance platform for income-expense, budgets, debt tracking and AI analysis reports. 16,000+ users, Shopier subscription stack.",
    heroBadge: "FinTech / AI",
    heroTitle: "IQfinansAI | Personal Finance",
    heroSubtitle:
      "Your personal finance assistant: manage income, expenses, budgets, debt and investment portfolio in one panel. Clarify spending with AI-powered insights.",
    summary:
      "A personal finance app combining income-expense, budget, debt and AI analysis modules in one platform.",
    challengeText:
      "Income, expense, debt and budget data was scattered across Excel spreadsheets, banking apps and loose notes. Building a clear monthly financial picture took hours; questions about category spending, savings progress and debt-receivable balance often went unanswered. Switching to separate tools for investment tracking, **AI**-powered analysis or detailed reporting only made the experience more fragmented.",
    solutionText:
      "**IQfinansAI** brings personal finance management into a single end-to-end platform. Nine modules cover everything from income-expense logging and category-based budgets to debt tracking and multi-currency support, all in one panel. **Recharts**-powered **KPI** dashboards and a financial health score deliver an instant snapshot, while **Premium** adds the **IQfinansAI** analysis report, natural-language assistant and investment portfolio for deeper insights. **Shopier** subscription infrastructure runs in production, serving thousands of active users.",
    details:
      "The frontend was built with **Next.js**, **React** and **Redux** for an **SSR**-capable, performance-focused interface. Dark and light mode support, **TR/EN** multilingual structure and locale-based routing strengthen the user experience. The backend runs on a **Node.js** **REST API** with **Prisma ORM** and **MySQL**; interactive **Recharts** graphs, **Premium** receipt **OCR** for fast entry and **AI** analysis **PDF** export are among the platform's standout technical capabilities. 40+ currency codes are supported, with calculation tools, email alerts and category limit warnings completing the operational flow. Deployed on **Railway** in production, serving 16,000+ registered users in the live environment.",
    features: [
      {
        title: "Financial Performance Analysis",
        description:
          "Income, expenses, net balance and financial health score; 2-12 month trend charts and category breakdown.",
      },
      {
        title: "Income & Expense Management",
        description:
          "Hierarchical category tree, advanced search, **CSV/PDF** export and **Premium** receipt **OCR** for fast entry.",
      },
      {
        title: "Savings & Goal Tracking",
        description:
          "Category limits, progress bars, email alerts and overspend notifications.",
      },
      {
        title: "Debt & Credit Management",
        description:
          "Due dates, interest and repayment plans; net position, maturity chart and TL/forex/gold records.",
      },
      {
        title: "Multi-Currency & Exchange Rates",
        description:
          "40+ currency codes, instant conversion and dashboard summary in your base currency.",
      },
      {
        title: "Financial Calculation Tools",
        description:
          "Deposit interest, loan installments, VAT, savings goals, CPI and private pension calculations.",
      },
      {
        title: "Investment Portfolio",
        description:
          "**Premium** stocks, forex, crypto and commodities; live quotes with profit/loss tracking.",
      },
      {
        title: "IQfinansAI Analysis Report",
        description:
          "**Premium** full-text **AI** analysis report based on your personal data with **PDF** download.",
      },
      {
        title: "IQfinansAI Assistant",
        description:
          "**Premium** natural-language Q&A about your budget and spending; answers based on your records.",
      },
      {
        title: "Dark & Light Mode",
        description:
          "Open and dark themes based on user preference; comfortable reading during long panel sessions.",
      },
      {
        title: "Multilingual Support",
        description: "**TR/EN** interface; locale-based content and routing.",
      },
    ],
    metrics: [
      { value: "12 weeks", label: "Build Time" },
      { value: "SaaS", label: "Site Type" },
      { value: "Finance", label: "Industry" },
      { value: "TR/EN", label: "Language Support" },
    ],
  },
  "yazici-ticaret": {
    metaTitle: "Yazıcı Ticaret | E-Commerce Platform",
    metaDesc:
      "End-to-end e-commerce experience for white goods and electronics categories.",
    heroBadge: "E-Commerce / B2C",
    heroTitle: "Yazıcı Ticaret",
    heroSubtitle:
      "End-to-end e-commerce for Profilo and LG white goods and electronics. Nationwide shipping & installation, installment options and secure iyzico checkout.",
    summary:
      "End-to-end e-commerce for white goods, built-in appliances and electronics.",
    challengeText:
      "Physical store traffic was limited while customers expected a wide product range, secure online payment, installment options and order tracking. The existing digital channel couldn't meet these expectations, category discovery was weak, campaign management was manual and order flows were fragmented. In high-ticket categories like white goods and electronics, trust and operational transparency are critical factors that directly affect conversion rates.",
    solutionText:
      "We built an end-to-end **B2C** e-commerce platform for **Profilo** and LG white goods and electronics. Category mega menus and featured product showcases simplify discovery, while **iyzico** integration delivers secure checkout with **Troy**, **Mastercard** and **Visa** installment support. Order tracking, campaign and discount modules, customer accounts and an **admin panel** centralize operations. Nationwide shipping and installation plus a product request form integrate post-sale support into the digital flow.",
    details:
      "The platform was built with **Next.js**, **React** and **Node.js**; **MongoDB** and **Mongoose** power order, product and campaign management. **iyzico** payment infrastructure, dynamic pricing, an **FAQ** module and **SEO**-focused **SSR** strengthen search visibility. The admin panel handles product, category and discount management; **Vercel** deployment delivers fast page loads and structured data support. A trust-focused checkout experience suited to high-value product categories and a mobile-first responsive design were delivered end to end.",
    features: [
      {
        title: "Wide Product Catalog",
        description:
          "White goods, built-in, AC, TV and small appliances; category discovery via mega menu.",
      },
      {
        title: "Secure iyzico Checkout",
        description:
          "Installment options, **Troy/Mastercard/Visa** support and secure payment flow.",
      },
      {
        title: "Shipping & Installation",
        description:
          "Nationwide shipping and installation service; product request form for support.",
      },
      {
        title: "Campaign & Discount Modules",
        description:
          "Featured, new and discounted product showcases; dynamic pricing.",
      },
      {
        title: "Customer Account & Orders",
        description:
          "Account management, order history, returns and support flows.",
      },
      {
        title: "SEO & Performance",
        description:
          "**SSR**, structured data and fast page loads for **SEO** visibility.",
      },
    ],
    metrics: [
      { value: "11 weeks", label: "Build Time" },
      { value: "E-Commerce", label: "Site Type" },
      { value: "Retail", label: "Industry" },
      { value: "TR", label: "Language Support" },
    ],
  },
  "uzman-klinik-psikolog": {
    metaTitle: "Clinical Psychologist",
    metaDesc:
      "An appointment, SEO and trust-focused clinical psychologist website with Next.js.",
    heroBadge: "Healthcare / Corporate",
    heroTitle: "Clinical Psychologist",
    heroSubtitle:
      "Trust-focused corporate site for Clinical Psychologist. In-person and online therapy, appointment requests, blog and SEO infrastructure.",
    summary: "Appointment, blog and SEO-focused clinical psychologist website.",
    challengeText:
      "Clients needed a trustworthy digital presence, an easy appointment process and professional content; the existing setup couldn't meet these expectations. **SEO** performance was weak, the mobile experience was inconsistent and accessibility standards were only partially met. In healthcare, trust is the most critical factor, professional appearance, clear service narrative and seamless contact channels directly affect appointment conversion.",
    solutionText:
      "We designed an **SSR**-based, accessible and trust-focused corporate site for **Clinical Psychologist**. The appointment request form clearly routes in-person and online therapy options, while a dynamic blog module enables regular publishing on psychology, psychoanalysis and mental health. Structured **SEO**, sitemap and meta infrastructure strengthen search visibility; calm typography and a professional visual language support client confidence.",
    details:
      "**SSR**-capable frontend with **Next.js** and **React**; **RESTful API** layer with **Prisma ORM** and **MySQL**. Dark and light mode support, Kadıköy office and online therapy information, dynamic blog management, contact form and responsive **Tailwind CSS** design were unified in a single architecture. **WCAG**-focused contrast, keyboard navigation and semantic HTML prioritized accessibility. A mobile-first approach delivers a consistent experience across devices; structured data and meta tags support organic traffic goals.",
    features: [
      {
        title: "Appointment Request System",
        description:
          "**RESTful API**-backed form; in-person and online therapy routing.",
      },
      {
        title: "Blog & Articles",
        description:
          "Dynamic content management for psychology, psychoanalysis and mental health.",
      },
      {
        title: "SEO Optimization",
        description: "**SSR**, meta tags, sitemap and structured data.",
      },
      {
        title: "Trust-Focused Design",
        description:
          "Calm typography, professional portrait and clear service narrative.",
      },
      {
        title: "Responsive Design",
        description: "**Mobile-first**; consistent experience on all devices.",
      },
      {
        title: "Accessibility",
        description:
          "**WCAG**-focused contrast, keyboard navigation and semantic **HTML**.",
      },
      {
        title: "Dark & Light Mode",
        description:
          "Open and dark themes based on user preference; eye comfort during long reading sessions.",
      },
    ],
    metrics: [
      { value: "4 weeks", label: "Build Time" },
      { value: "Corporate", label: "Site Type" },
      { value: "Healthcare", label: "Industry" },
      { value: "TR", label: "Language Support" },
    ],
  },
  gardossi: {
    metaTitle: "Gardossi | Garden & Balcony Furniture",
    metaDesc:
      "Premium corporate product showcase for garden and balcony furniture.",
    heroBadge: "Corporate / Catalog",
    heroTitle: "Gardossi | Garden & Balcony Furniture",
    heroSubtitle:
      "Premium corporate catalog for garden and balcony furniture. 6 categories from seating groups to sunbeds, hero carousel and WhatsApp contact.",
    summary:
      "Premium corporate product showcase for garden and balcony furniture.",
    challengeText:
      "The brand couldn't showcase its products effectively online; potential customers expected rich visuals, category-based discovery and quick contact. The existing setup didn't reflect the outdoor living aesthetic, the product portfolio was presented in a scattered way and direct channels like **WhatsApp** weren't integrated. In a visually driven sector like garden and balcony furniture, showcase quality directly shapes brand perception and pre-sale confidence.",
    solutionText:
      "We developed a premium corporate catalog site for **Gardossi**. A hero carousel delivers full-screen visual showcases, a six-category product catalog and featured product areas strengthen the brand's outdoor living identity. The full product family, from seating groups to sunbeds, is presented in a structured way; **WhatsApp** routing enables one-click contact. Emphasis on İnegöl craftsmanship and seasonal campaign areas complete the brand story digitally.",
    details:
      "Corporate catalog built with **Next.js**, **React** and **Node.js**; **Prisma** and **MySQL** backend for category and product management. **TR/EN** multilingual structure with locale-based content and routing. Product, pricing and image updates are managed via the **admin panel**; **SEO**-friendly meta tags, sitemap and structured data support search visibility. Premium typography, outdoor aesthetics and responsive design deliver a consistent showcase experience across devices. **Vercel** deployment targets fast load times and uninterrupted service in production.",
    features: [
      {
        title: "6-Category Catalog",
        description:
          "Seating, corner, dining sets, swings, sunbeds and chair showcases.",
      },
      {
        title: "Hero Carousel",
        description: "Full-screen visual showcase and seasonal campaign areas.",
      },
      {
        title: "WhatsApp Contact",
        description: "One-click **WhatsApp** routing and business hours info.",
      },
      {
        title: "Featured Products",
        description: "Price, category and visual-focused product cards.",
      },
      {
        title: "Premium Visual Design",
        description: "Outdoor living aesthetic, brand-aligned typography.",
      },
      {
        title: "Multilingual Support",
        description:
          "**TR/EN** content; locale-based catalog and page routing.",
      },
      {
        title: "SEO-Friendly Structure",
        description: "Meta tags, sitemap and structured data for **SEO**.",
      },
    ],
    metrics: [
      { value: "4 weeks", label: "Build Time" },
      { value: "Corporate Catalog", label: "Site Type" },
      { value: "Furniture", label: "Industry" },
      { value: "TR/EN", label: "Language Support" },
    ],
  },
  portfolio: {
    metaTitle: "Portfolio | Ömer Halis Demir",
    metaDesc:
      "Full stack developer portfolio site. Projects, experience and services in a modern, performant and SEO-ready interface.",
    heroBadge: "Portfolio / Personal",
    heroTitle: "Portfolio | Ömer Halis Demir",
    heroSubtitle:
      "Full stack developer portfolio for Ömer Halis Demir. Projects, experience and services in one modern interface.",
    summary:
      "Full stack developer portfolio site with projects, experience and services.",
    challengeText:
      "Developer identity, project history and service scope were spread across disconnected channels; potential clients wanted to see all capabilities in one trustworthy showcase. Performance, accessibility and **SEO** expectations were high, and the existing setup couldn't meet those standards.",
    solutionText:
      "We built a modern, performant and **SEO**-ready portfolio site. Project showcases, experience timeline, service packages and contact channels were unified in a single architecture. **TR/EN** multilingual support, fast load times and an accessible interface deliver a professional first impression.",
    details:
      "Portfolio site built with **Next.js**, **React** and **TypeScript**; responsive design with **Tailwind CSS** and Turkish-English multilingual structure via **next-intl**. Content is managed through code-based modules without a database. Project detail pages, blog, service packages and contact form were integrated. **Vercel** deployment delivers fast and reliable production hosting.",
    features: [
      {
        title: "Project Showcase",
        description: "Detailed case study pages and live demo links.",
      },
      {
        title: "Service Packages",
        description:
          "Clear package structure for web, mobile, **SEO** and maintenance.",
      },
      {
        title: "Blog & Content",
        description:
          "Code-based technical articles and project experience sharing.",
      },
      {
        title: "Multilingual Support",
        description: "**TR/EN** interface; locale-based content and routing.",
      },
      {
        title: "SEO-Friendly Structure",
        description: "**SSR**, meta tags, sitemap and structured data.",
      },
      {
        title: "Performance Focused",
        description: "Fast loading, accessibility and modern **UI**.",
      },
    ],
    metrics: [
      { value: "3 weeks", label: "Build Time" },
      { value: "Portfolio", label: "Site Type" },
      { value: "Technology", label: "Industry" },
      { value: "TR/EN", label: "Language Support" },
    ],
  },
  onlinemuhasebe: {
    metaTitle: "Online Accounting | Financial Consulting",
    metaDesc:
      "Corporate portfolio site for accounting and financial consultancy services. Services, practical resources and contact form.",
    heroBadge: "Accounting / Corporate",
    heroTitle: "Online Accounting | Financial Consulting",
    heroSubtitle:
      "Corporate website for Şahin Demir Financial Consultancy. Accounting, tax consultancy, practical resources and government platform shortcuts.",
    summary:
      "Corporate portfolio site for accounting and financial consultancy services.",
    challengeText:
      "The CPA firm needed a trustworthy corporate presence online, service presentation and client contact channels. Regulatory information, practical resources and access to frequently used government platforms remained scattered. Professional appearance and easy contact play a critical role in potential clients' decision process.",
    solutionText:
      "We developed a modern corporate site for **Şahin Demir Financial Consultancy**. Dark and light mode support, services, values, statistics and a contact form are presented in one structure. The practical information module provides quick access to professional resources, while the shortcuts section offers one-click links to **e-Government**, **SGK** and tax platforms.",
    details:
      "Corporate site built with **Next.js**, **React** and **TypeScript**; responsive and accessible interface with **Tailwind CSS**, dark-light mode toggle, contact form and **SEO** infrastructure. Backend uses **Prisma ORM** and **MongoDB** for content and contact data management. About, services, practical information and shortcuts modules meet the digital needs of the CPA office. **Vercel** deployment delivers fast and reliable hosting.",
    features: [
      {
        title: "Service Showcase",
        description:
          "Accounting, tax consultancy, **SGK** (social security) and company formation services.",
      },
      {
        title: "Practical Resources",
        description: "Tax codes, per diems and professional reference content.",
      },
      {
        title: "Platform Shortcuts",
        description:
          "Quick access to **e-Government**, **SGK**, digital tax office and official platforms.",
      },
      {
        title: "Contact Form",
        description: "Consultation requests and message submission.",
      },
      {
        title: "Corporate Identity",
        description: "Values, statistics and trust-focused design.",
      },
      {
        title: "Dark & Light Mode",
        description:
          "Open and dark themes based on user preference; suited for day and night use.",
      },
      {
        title: "SEO-Friendly Structure",
        description: "Meta tags, sitemap and structured data for **SEO**.",
      },
    ],
    metrics: [
      { value: "4 weeks", label: "Build Time" },
      { value: "Corporate Catalog", label: "Site Type" },
      { value: "Accounting", label: "Industry" },
      { value: "TR", label: "Language Support" },
    ],
  },
} as const;
