import type { IconType } from "react-icons";
import { GrMysql } from "react-icons/gr";
import {
  SiAppstore,
  SiAndroid,
  SiBootstrap,
  SiCss,
  SiExpress,
  SiExpo,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGoogleanalytics,
  SiGoogleplay,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiHtml5,
  SiIos,
  SiJavascript,
  SiKotlin,
  SiLighthouse,
  SiMeta,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPagespeedinsights,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRailway,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandReactNative, TbComponents } from "react-icons/tb";
import { IxirhostIcon } from "./IxirhostIcon";
import { ZustandIcon } from "./ZustandIcon";

export interface TechItem {
  name: string;
  icon: IconType;
  url?: string;
  tooltip?: string;
  brandIcon?: boolean;
}

export type TechCategoryKey =
  | "frontend"
  | "backend"
  | "database"
  | "mobile"
  | "hosting"
  | "seo";

export interface TechCategory {
  key: TechCategoryKey;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    key: "frontend",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      {
        name: "TypeScript",
        icon: SiTypescript,
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        url: "https://tailwindcss.com/",
      },
      {
        name: "Sass & SCSS",
        icon: SiSass,
        url: "https://sass-lang.com/",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        url: "https://nextjs.org/",
      },
      { name: "React", icon: SiReact, url: "https://react.dev/" },
      { name: "Redux", icon: SiRedux, url: "https://redux.js.org/" },
      {
        name: "Zustand",
        icon: ZustandIcon,
        url: "https://zustand.docs.pmnd.rs/",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        url: "https://getbootstrap.com/",
      },
      { name: "Figma", icon: SiFigma, url: "https://www.figma.com/" },
      {
        name: "UI(shadcn, lightswind, ...)",
        icon: TbComponents,
      },
    ],
  },
  {
    key: "backend",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        url: "https://nodejs.org/",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        url: "https://expressjs.com/",
      },
      { name: "NestJS", icon: SiNestjs, url: "https://nestjs.com/" },
      {
        name: "REST API",
        icon: TbApi,
      },
      {
        name: "Postman",
        icon: SiPostman,
        url: "https://www.postman.com/",
      },
    ],
  },
  {
    key: "database",
    items: [
      { name: "MySQL", icon: GrMysql, url: "https://www.mysql.com/" },
      {
        name: "MongoDB",
        icon: SiMongodb,
        url: "https://www.mongodb.com/",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        url: "https://www.postgresql.org/",
      },
      { name: "Prisma", icon: SiPrisma, url: "https://www.prisma.io/" },
    ],
  },
  {
    key: "mobile",
    items: [
      {
        name: "React Native",
        icon: TbBrandReactNative,
        url: "https://reactnative.dev/",
      },
      { name: "Flutter", icon: SiFlutter, url: "https://flutter.dev/" },
      { name: "Expo", icon: SiExpo, url: "https://expo.dev/" },
      { name: "Kotlin", icon: SiKotlin, url: "https://kotlinlang.org/" },
      {
        name: "Android",
        icon: SiAndroid,
        url: "https://developer.android.com/",
      },
      {
        name: "iOS",
        icon: SiIos,
        url: "https://developer.apple.com/ios/",
      },
      {
        name: "App Store",
        icon: SiAppstore,
        url: "https://developer.apple.com/app-store/",
      },
      {
        name: "Google Play",
        icon: SiGoogleplay,
        url: "https://play.google.com/console/",
      },
    ],
  },
  {
    key: "hosting",
    items: [
      { name: "Vercel", icon: SiVercel, url: "https://vercel.com/" },
      {
        name: "ixirhost",
        icon: IxirhostIcon,
        brandIcon: true,
        url: "https://www.ixirhost.com/",
      },
      { name: "Railway", icon: SiRailway, url: "https://railway.com/" },
      { name: "Git", icon: SiGit, url: "https://git-scm.com/" },
      { name: "GitHub", icon: SiGithub, url: "https://github.com/" },
    ],
  },
  {
    key: "seo",
    items: [
      {
        name: "Google Analytics",
        icon: SiGoogleanalytics,
        url: "https://marketingplatform.google.com/about/analytics/",
      },
      {
        name: "Meta Pixel",
        icon: SiMeta,
        url: "https://developers.facebook.com/docs/meta-pixel/",
      },
      {
        name: "Lighthouse",
        icon: SiLighthouse,
        url: "https://developer.chrome.com/docs/lighthouse/",
      },
      {
        name: "PageSpeed Insights",
        icon: SiPagespeedinsights,
        url: "https://pagespeed.web.dev/",
      },
      {
        name: "Google Search Console",
        icon: SiGooglesearchconsole,
        url: "https://search.google.com/search-console/",
      },
      {
        name: "Google Tag Manager",
        icon: SiGoogletagmanager,
        url: "https://tagmanager.google.com/",
      },
    ],
  },
];

export const techOrbitCategoryOrder = [
  "database",
  "hosting",
  "backend",
  "seo",
  "mobile",
  "frontend",
] as const satisfies readonly TechCategoryKey[];

export function getTechCategoriesForOrbit(): TechCategory[] {
  return techOrbitCategoryOrder.map(
    (key) => techCategories.find((category) => category.key === key)!,
  );
}

export function getOrbitIdForCategory(key: TechCategoryKey): number {
  return techOrbitCategoryOrder.indexOf(key) + 1;
}

export const techItems = techCategories.flatMap((category) => category.items);

export const techItemCount = techItems.length;
