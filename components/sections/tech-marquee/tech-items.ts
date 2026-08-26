import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiAppstore,
  SiAndroid,
  SiAngular,
  SiBootstrap,
  SiCloudflarepages,
  SiCpanel,
  SiCss,
  SiExpress,
  SiExpo,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogle,
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
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPagespeedinsights,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRailway,
  SiReact,
  SiRedux,
  SiRender,
  SiSass,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { TbApi, TbBrandReactNative, TbComponents } from "react-icons/tb";
import { GoogleBusinessProfileIcon } from "./GoogleBusinessProfileIcon";
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
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Sass & SCSS",
        icon: SiSass,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "Vue", icon: SiVuedotjs },
      { name: "Redux", icon: SiRedux },
      {
        name: "Zustand",
        icon: ZustandIcon,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
      { name: "Figma", icon: SiFigma },
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
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      { name: "NestJS", icon: SiNestjs },
      {
        name: "REST API",
        icon: TbApi,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
    ],
  },
  {
    key: "database",
    items: [
      { name: "MySQL", icon: GrMysql },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      { name: "Prisma", icon: SiPrisma },
      { name: "SQLite", icon: SiSqlite },
      { name: "MSSQL", icon: DiMsqlServer },
      { name: "Railway", icon: SiRailway },
    ],
  },
  {
    key: "mobile",
    items: [
      {
        name: "React Native",
        icon: TbBrandReactNative,
      },
      { name: "Flutter", icon: SiFlutter },
      { name: "Expo", icon: SiExpo },
      { name: "Kotlin", icon: SiKotlin },
      {
        name: "Android",
        icon: SiAndroid,
      },
      {
        name: "iOS",
        icon: SiIos,
      },
      {
        name: "App Store",
        icon: SiAppstore,
      },
      {
        name: "Google Play",
        icon: SiGoogleplay,
      },
    ],
  },
  {
    key: "hosting",
    items: [
      { name: "Vercel", icon: SiVercel },
      {
        name: "ixirhost",
        icon: IxirhostIcon,
        brandIcon: true,
      },
      { name: "Netlify", icon: SiNetlify },
      { name: "Cloudflare Pages", icon: SiCloudflarepages },
      { name: "Render", icon: SiRender },
      { name: "AWS Amplify", icon: FaAws },
      { name: "cPanel", icon: SiCpanel },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    key: "seo",
    items: [
      {
        name: "Google Analytics",
        icon: SiGoogleanalytics,
      },
      {
        name: "Google Search",
        icon: SiGoogle,
      },
      {
        name: "Meta Pixel",
        icon: SiMeta,
      },
      {
        name: "Lighthouse",
        icon: SiLighthouse,
      },
      {
        name: "PageSpeed Insights",
        icon: SiPagespeedinsights,
      },
      {
        name: "Google Search Console",
        icon: SiGooglesearchconsole,
      },
      {
        name: "Google Tag Manager",
        icon: SiGoogletagmanager,
      },
      {
        name: "Google Ads",
        icon: SiGoogleads,
      },
      {
        name: "Google Business Profile",
        icon: GoogleBusinessProfileIcon,
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
