import { projectItems } from "@/components/sections/projects/project-items";

export type NavProjectKey =
  | "projectIqfinans"
  | "projectYazici"
  | "projectFablessi"
  | "projectUzmanPsikolog"
  | "projectPortfolio"
  | "projectOnlinemuhasebe";

export type NavProjectItem = {
  href: string;
  navKey: NavProjectKey;
};

export const navProjectItems: NavProjectItem[] = projectItems.map(
  (project) => ({
    href: project.href,
    navKey: project.navDescKey.replace(/Desc$/, "") as NavProjectKey,
  }),
);
