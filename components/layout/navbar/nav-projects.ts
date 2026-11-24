import {
  hasProjectHref,
  projectItems,
} from "@/components/sections/projects/project-items";

export type NavProjectKey =
  | "projectVeltstack"
  | "projectYazici"
  | "projectDilAtolyesi"
  | "projectGardossi"
  | "projectUzmanPsikolog"
  | "projectOnlinemuhasebe"
  | "projectIqfinans"
  | "projectPortfolio";

export type NavProjectItem = {
  href: string;
  navKey: NavProjectKey;
};

export const navProjectItems: NavProjectItem[] = projectItems
  .filter(hasProjectHref)
  .map((project) => ({
    href: project.href,
    navKey: project.navDescKey.replace(/Desc$/, "") as NavProjectKey,
  }));
