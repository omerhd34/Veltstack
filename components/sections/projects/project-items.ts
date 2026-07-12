import type { IconType } from "react-icons";
import {
  LuBrain,
  LuCalculator,
  LuChartLine,
  LuGlobe,
  LuShoppingCart,
  LuTreePine,
} from "react-icons/lu";

export const projectSlugs = [
  "iqfinansai",
  "yazici-ticaret",
  "fablessi",
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
  tagKey: string;
  icon: IconType;
  external?: boolean;
}

export const projectItems: ProjectItemConfig[] = [
  {
    slug: "iqfinansai",
    href: "/projelerimiz/iqfinansai",
    titleKey: "projectIqfinansTitle",
    descKey: "projectIqfinansDesc",
    navDescKey: "projectIqfinansDesc",
    tagKey: "projectIqfinansTag",
    icon: LuChartLine,
  },
  {
    slug: "yazici-ticaret",
    href: "/projelerimiz/yazici-ticaret",
    titleKey: "projectYaziciTitle",
    descKey: "projectYaziciDesc",
    navDescKey: "projectYaziciDesc",
    tagKey: "projectYaziciTag",
    icon: LuShoppingCart,
  },
  {
    slug: "fablessi",
    href: "/projelerimiz/fablessi",
    titleKey: "projectFablessiTitle",
    descKey: "projectFablessiDesc",
    navDescKey: "projectFablessiDesc",
    tagKey: "projectFablessiTag",
    icon: LuTreePine,
  },
  {
    slug: "uzman-klinik-psikolog",
    href: "/projelerimiz/uzman-klinik-psikolog",
    titleKey: "projectUzmanPsikologTitle",
    descKey: "projectUzmanPsikologDesc",
    navDescKey: "projectUzmanPsikologDesc",
    tagKey: "projectUzmanPsikologTag",
    icon: LuBrain,
  },
  {
    slug: "portfolio",
    href: "/projelerimiz/portfolio",
    titleKey: "projectPortfolioTitle",
    descKey: "projectPortfolioDesc",
    navDescKey: "projectPortfolioDesc",
    tagKey: "projectPortfolioTag",
    icon: LuGlobe,
  },
  {
    slug: "onlinemuhasebe",
    href: "/projelerimiz/onlinemuhasebe",
    titleKey: "projectOnlinemuhasebeTitle",
    descKey: "projectOnlinemuhasebeDesc",
    navDescKey: "projectOnlinemuhasebeDesc",
    tagKey: "projectOnlinemuhasebeTag",
    icon: LuCalculator,
  },
];

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return projectSlugs.includes(slug as ProjectSlug);
}
