import { blogPageEn } from "@/messages/pages/blog/en";
import { navEn } from "@/components/layout/navbar/messages/en";
import { footerEn } from "@/components/layout/footer/messages/en";
import { heroHomeEn } from "@/components/sections/hero/messages/en";
import { servicesHomeEn } from "@/components/sections/services/messages/en";
import { servicesMarqueeHomeEn } from "@/components/sections/services-marquee/messages/en";
import { whoWeAreHomeEn } from "@/components/sections/who-we-are/messages/en";
import { whyMeHomeEn } from "@/components/sections/why-me/messages/en";
import { processHomeEn } from "@/components/sections/process/messages/en";
import { projectsHomeEn } from "@/components/sections/projects/messages/en";
import { testimonialsHomeEn } from "@/components/sections/testimonials/messages/en";
import { blogPreviewHomeEn } from "@/components/sections/blog-preview/messages/en";
import { ctaHomeEn } from "@/components/sections/cta/messages/en";
import { clientLogosHomeEn } from "@/components/sections/client-logos/messages/en";
import { techMarqueeHomeEn } from "@/components/sections/tech-marquee/messages/en";
import { projectDetailsEn } from "@/messages/pages/project-detail/en";
import { serviceDetailsEn } from "@/messages/pages/service-detail/en";
import { servicesPageEn } from "@/messages/pages/services/en";
import { projectsPageEn } from "@/messages/pages/projects/en";
import { pagesEn } from "@/messages/pages/meta/en";
import { contactEn } from "@/messages/pages/iletisim/en";
import { thanksEn } from "@/messages/pages/tesekkurler/en";
import { aboutEn } from "@/messages/pages/hakkimizda/en";
import { workflowEn } from "@/components/sections/workflow/messages/en";
import { approachEn } from "@/components/sections/approach/messages/en";
import { legalEn } from "@/messages/pages/legal/en";
import { faqEn } from "@/messages/pages/faq/en";
import { statusEn } from "@/messages/pages/status/en";

const messages = {
  nav: navEn,
  footer: footerEn,
  home: {
    ...heroHomeEn,
    ...servicesHomeEn,
    ...servicesMarqueeHomeEn,
    ...whoWeAreHomeEn,
    ...whyMeHomeEn,
    ...processHomeEn,
    ...projectsHomeEn,
    ...testimonialsHomeEn,
    ...blogPreviewHomeEn,
    ...ctaHomeEn,
    ...clientLogosHomeEn,
  },
  pages: pagesEn,
  projectDetails: projectDetailsEn,
  serviceDetails: serviceDetailsEn,
  servicesPage: servicesPageEn,
  projectsPage: projectsPageEn,
  contact: contactEn,
  thanks: thanksEn,
  about: {
    ...aboutEn,
    ...techMarqueeHomeEn,
  },
  blogPage: blogPageEn,
  workflow: workflowEn,
  approach: approachEn,
  legal: legalEn,
  faqPage: faqEn,
  status: statusEn,
} as const;

export default messages;
