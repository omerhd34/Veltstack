import type { ProjectSlug } from "@/components/sections/projects/project-items";
import type { ServiceSlug } from "@/components/sections/services/service-items";

export const projectRelatedServices: Record<ProjectSlug, ServiceSlug[]> = {
  iqfinansai: ["web-sitesi-gelistirme", "seo-hizmetleri", "bakim-ve-destek"],
  "yazici-ticaret": [
    "web-sitesi-gelistirme",
    "seo-hizmetleri",
    "bakim-ve-destek",
  ],
  gardossi: ["web-sitesi-gelistirme", "seo-hizmetleri", "bakim-ve-destek"],
  "uzman-klinik-psikolog": [
    "web-sitesi-gelistirme",
    "seo-hizmetleri",
    "bakim-ve-destek",
  ],
  portfolio: ["web-sitesi-gelistirme", "seo-hizmetleri", "bakim-ve-destek"],
  onlinemuhasebe: [
    "web-sitesi-gelistirme",
    "seo-hizmetleri",
    "bakim-ve-destek",
  ],
};
