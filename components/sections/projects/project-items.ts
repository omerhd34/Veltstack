import type { IconType } from "react-icons";
import {
  LuBrain,
  LuCalculator,
  LuChartLine,
  LuGlobe,
  LuShoppingCart,
  LuArmchair,
} from "react-icons/lu";

export const projectSlugs = [
  "iqfinansai",
  "yazici-ticaret",
  "gardossi",
  "uzman-klinik-psikolog",
  "portfolio",
  "onlinemuhasebe",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export interface ProjectItemConfig {
  slug: ProjectSlug;
  href: string;
  titleKey: string;
  descKey: string;
  navDescKey: string;
  icon: IconType;
  external?: boolean;
}

export const projectItems: ProjectItemConfig[] = [
  {
    slug: "iqfinansai",
    href: "/projeler/iqfinansai",
    titleKey: "projectIqfinansTitle",
    descKey: "projectIqfinansDesc",
    navDescKey: "projectIqfinansDesc",
    icon: LuChartLine,
  },
  {
    slug: "yazici-ticaret",
    href: "/projeler/yazici-ticaret",
    titleKey: "projectYaziciTitle",
    descKey: "projectYaziciDesc",
    navDescKey: "projectYaziciDesc",
    icon: LuShoppingCart,
  },
  {
    slug: "gardossi",
    href: "/projeler/gardossi",
    titleKey: "projectGardossiTitle",
    descKey: "projectGardossiDesc",
    navDescKey: "projectGardossiDesc",
    icon: LuArmchair,
  },
  {
    slug: "uzman-klinik-psikolog",
    href: "/projeler/uzman-klinik-psikolog",
    titleKey: "projectUzmanPsikologTitle",
    descKey: "projectUzmanPsikologDesc",
    navDescKey: "projectUzmanPsikologDesc",
    icon: LuBrain,
  },
  {
    slug: "portfolio",
    href: "/projeler/portfolio",
    titleKey: "projectPortfolioTitle",
    descKey: "projectPortfolioDesc",
    navDescKey: "projectPortfolioDesc",
    icon: LuGlobe,
  },
  {
    slug: "onlinemuhasebe",
    href: "/projeler/onlinemuhasebe",
    titleKey: "projectOnlinemuhasebeTitle",
    descKey: "projectOnlinemuhasebeDesc",
    navDescKey: "projectOnlinemuhasebeDesc",
    icon: LuCalculator,
  },
];

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return projectSlugs.includes(slug as ProjectSlug);
}
