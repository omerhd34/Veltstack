export const faqEn = {
  badge: "FAQ",
  title: "Frequently Asked Questions",
  subtitle:
    "Find answers to the most common questions about Veltstack services, our process and how we work together.",
  subtitleSecondary:
    "Browse answers organized by topic to quickly find what you need.",
  heroStats: {
    questions: {
      label: "Total Questions",
      hint: "The full count of questions and answers on this FAQ page, covering services, process, pricing and support.",
    },
    categories: {
      label: "Topic Sections",
      hint: "Questions are grouped under general information, services and process, pricing and post-launch support.",
    },
    services: {
      label: "Services & Process",
      hint: "Questions about what we offer, how projects run, delivery timelines and the technologies we use.",
    },
    support: {
      label: "Post-Launch Support",
      hint: "Questions about maintenance packages, source code handover and refreshing your existing site.",
    },
  },
  scrollLabel: "Browse questions",
  imageAlt:
    "Abstract digital structure illustration representing frequently asked questions",
  contactHint: "Can't find what you're looking for?",
  contactLink: "Contact us",
  questionCount: "{count} questions",
  categories: [
    {
      title: "General",
      items: [
        {
          slug: "velstack-nedir",
          question: "What is Veltstack?",
          answer:
            "Veltstack is a full stack developer brand led by Ömer Halis Demir. It delivers website, mobile app, SEO, technical audit and maintenance services under one roof, combining agency-style professionalism with solo-developer agility.",
        },
        {
          slug: "projelerde-kim-calisyor",
          question: "Who works on projects?",
          answer:
            "You work directly with Ömer Halis Demir on every project. You have a single point of contact across design, development, launch and maintenance; trusted specialists are brought in only when needed, with full transparency.",
        },
        {
          slug: "hangi-sektorler",
          question: "Which industries do you serve?",
          answer:
            "We have experience across FinTech, e-commerce, corporate sites, SaaS, healthcare and professional services. We clarify sector-specific needs together during the discovery call.",
        },
        {
          slug: "uzaktan-calisma",
          question: "Can you work with clients in other cities or abroad?",
          answer:
            "Yes. We work remotely with clients across Turkey and internationally. Discovery, demo and feedback sessions run over video calls; we use shared boards and regular written updates for project tracking. For collaborations across time zones, we agree on overlapping working hours upfront.",
        },
      ],
    },
    {
      title: "Services & Process",
      items: [
        {
          slug: "hangi-hizmetler",
          question: "What services do you offer?",
          answer:
            "We offer website development, web and app refresh, mobile app development, SEO services, technical audits and maintenance and support packages. Scope and package details are listed on each service page.",
        },
        {
          slug: "proje-sureci",
          question: "How does the project process work?",
          answer:
            "We start with needs analysis and a discovery call. Then we share scope, timeline and quotation. After approval we move to design and development with regular demos and feedback cycles. Post-launch maintenance and support options are available.",
        },
        {
          slug: "teslim-suresi",
          question: "How long does delivery take?",
          answer:
            "Timeline depends on scope. A marketing website is typically 2–6 weeks; corporate or e-commerce projects 6–12 weeks; mobile apps may take longer depending on features. A clear schedule is shared after discovery.",
        },
        {
          slug: "teknolojiler",
          question: "What technologies do you use?",
          answer:
            "On the web: Next.js, React and TypeScript; on mobile: React Native or platform-appropriate native solutions; on the backend: Node.js and Prisma; hosting: Vercel and reliable infrastructure providers. The stack is tailored to each project.",
        },
        {
          slug: "teklif-nasil-alinir",
          question: "What do I need to do to get a quote?",
          answer:
            "Fill in the contact form or reach us by email. Share a short summary of your project, your goals and any reference links; we then schedule a free discovery call. After the call you receive a written quote covering scope, timeline and pricing.",
        },
      ],
    },
    {
      title: "Pricing & Contract",
      items: [
        {
          slug: "fiyatlar-sabit-mi",
          question: "Are prices fixed?",
          answer:
            "Service pages show reference price ranges. The final quote is customized based on scope, integrations and delivery timeline. You can request a free initial assessment via the contact form or email.",
        },
        {
          slug: "odeme-nasil-yapilir",
          question: "How is payment handled?",
          answer:
            "We typically work with an upfront deposit, milestone payments and the balance on delivery. Installments are possible for larger projects; details are set out in the written quote and contract.",
        },
        {
          slug: "sozlesme-imzalaniyor-mu",
          question: "Is a contract signed?",
          answer:
            "Yes. A written agreement covering scope, delivery, revision rights, intellectual property and confidentiality is signed so both parties' rights are protected.",
        },
        {
          slug: "proje-fiyatlari-nasil-belirleniyor",
          question: "How are project prices determined?",
          answer:
            "Pricing depends on project scope, page or feature count, design complexity, third-party integrations, content preparation and delivery timeline. Service pages show reference ranges; the final quote is shared in writing after the discovery call. Unexpected scope changes are presented for your approval before proceeding.",
        },
      ],
    },
    {
      title: "Post-Launch & Support",
      items: [
        {
          slug: "yayin-sonrasi-destek",
          question: "Do you provide post-launch support?",
          answer:
            "Yes. Maintenance and support packages cover security updates, minor content changes, performance monitoring and technical support. Packages can be planned monthly or annually based on your needs.",
        },
        {
          slug: "kaynak-kod-ve-erisimler",
          question: "Is source code and access handed over to me?",
          answer:
            "As stated in the project agreement, source code, domain, hosting and third-party account access are transferred to you. Veltstack aims to give clients full ownership of their digital assets.",
        },
        {
          slug: "mevcut-site-yenileme",
          question: "Can you refresh my existing site?",
          answer:
            "Yes. Through our web and app refresh service we audit your current site, report performance and SEO gaps, and propose restructuring with a modern stack.",
        },
        {
          slug: "veri-guvenligi-yedekleme",
          question: "Is my data safe? Do you handle backups?",
          answer:
            "Yes. We treat core security practices as standard: HTTPS, secure authentication and access control. We configure automatic backups on hosting and database providers; for critical projects we add extra backup and restore procedures. Maintenance packages include regular backup checks and security updates.",
        },
      ],
    },
  ],
} as const;
