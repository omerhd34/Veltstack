import { navTr } from "@/components/layout/navbar/messages/tr";
import { footerTr } from "@/components/layout/footer/messages/tr";
import { heroHomeTr } from "@/components/sections/hero/messages/tr";
import { servicesHomeTr } from "@/components/sections/services/messages/tr";
import { servicesMarqueeHomeTr } from "@/components/sections/services-marquee/messages/tr";
import { whoWeAreHomeTr } from "@/components/sections/who-we-are/messages/tr";
import { whyMeHomeTr } from "@/components/sections/why-me/messages/tr";
import { processHomeTr } from "@/components/sections/process/messages/tr";
import { projectsHomeTr } from "@/components/sections/projects/messages/tr";
import { testimonialsHomeTr } from "@/components/sections/testimonials/messages/tr";
import { blogPreviewHomeTr } from "@/components/sections/blog-preview/messages/tr";
import { ctaHomeTr } from "@/components/sections/cta/messages/tr";
import { clientLogosHomeTr } from "@/components/sections/client-logos/messages/tr";
import { techMarqueeHomeTr } from "@/components/sections/tech-marquee/messages/tr";
import { projectDetailsTr } from "@/messages/pages/project-detail/tr";
import { serviceDetailsTr } from "@/messages/pages/service-detail/tr";
import { servicesPageTr } from "@/messages/pages/services/tr";
import { projectsPageTr } from "@/messages/pages/projects/tr";
import { pagesTr } from "@/messages/pages/meta/tr";
import { contactTr } from "@/messages/pages/iletisim/tr";
import { thanksTr } from "@/messages/pages/tesekkurler/tr";
import { aboutTr } from "@/messages/pages/hakkimizda/tr";
import { blogPageTr } from "@/messages/pages/blog/tr";
import { workflowTr } from "@/components/sections/workflow/messages/tr";
import { approachTr } from "@/components/sections/approach/messages/tr";
import { legalTr } from "@/messages/pages/legal/tr";
import { faqTr } from "@/messages/pages/faq/tr";
import { statusTr } from "@/messages/pages/status/tr";

const messages = {
  nav: navTr,
  footer: footerTr,
  home: {
    ...heroHomeTr,
    ...servicesHomeTr,
    ...servicesMarqueeHomeTr,
    ...whoWeAreHomeTr,
    ...whyMeHomeTr,
    ...processHomeTr,
    ...projectsHomeTr,
    ...testimonialsHomeTr,
    ...blogPreviewHomeTr,
    ...ctaHomeTr,
    ...clientLogosHomeTr,
  },
  pages: pagesTr,
  projectDetails: projectDetailsTr,
  serviceDetails: serviceDetailsTr,
  servicesPage: servicesPageTr,
  projectsPage: projectsPageTr,
  contact: contactTr,
  thanks: thanksTr,
  about: {
    ...aboutTr,
    ...techMarqueeHomeTr,
  },
  blogPage: blogPageTr,
  workflow: workflowTr,
  approach: approachTr,
  legal: legalTr,
  faqPage: faqTr,
  status: statusTr,
} as const;

export default messages;
