import type { OrbitConfig } from "@/components/lightswind/beam-circle";
import { cn } from "@/lib/utils";
import { computeTechOrbitLayout } from "./compute-tech-orbit-layout";
import { getTechCategoriesForOrbit } from "./tech-items";

const ACCENT_ORBIT = "rgba(0, 212, 170, 0.35)";
const ACCENT_ORBIT_SOFT = "rgba(0, 212, 170, 0.18)";

const techBeamIconColors: Record<string, string> = {
  HTML: "text-[#E34F26]",
  CSS: "text-[#1572B6]",
  TypeScript: "text-[#3178C6]",
  JavaScript: "text-[#F7DF1E]",
  "Tailwind CSS": "text-[#06B6D4]",
  "Sass & SCSS": "text-[#CC6699]",
  "Next.js": "text-[#0A0A0F]",
  React: "text-[#61DAFB]",
  Redux: "text-[#764ABC]",
  Zustand: "text-[#443022]",
  Bootstrap: "text-[#7952B3]",
  UI: "text-[#6366F1]",
  "Node.js": "text-[#339933]",
  "Express.js": "text-[#0A0A0F]",
  NestJS: "text-[#E0234E]",
  "REST API": "text-[#00B894]",
  MySQL: "text-[#00758F]",
  MongoDB: "text-[#47A248]",
  PostgreSQL: "text-[#4169E1]",
  Prisma: "text-[#2D3748]",
  Postman: "text-[#FF6C37]",
  "React Native": "text-[#61DAFB]",
  Flutter: "text-[#02569B]",
  Expo: "text-[#000020]",
  Kotlin: "text-[#7F52FF]",
  Android: "text-[#3DDC84]",
  iOS: "text-[#0A0A0F]",
  "App Store": "text-[#0D96F6]",
  "Google Play": "text-[#414141]",
  Figma: "text-[#F24E1E]",
  Vercel: "text-[#0A0A0F]",
  ixirhost: "text-foreground",
  Railway: "text-[#0B0D0E]",
  Git: "text-[#F05032]",
  GitHub: "text-[#181717]",
  "Google Analytics": "text-[#E37400]",
  "Meta Pixel": "text-[#0866FF]",
  Lighthouse: "text-[#F44B21]",
  "PageSpeed Insights": "text-[#4285F4]",
  "Google Search Console": "text-[#458CF5]",
  "Google Tag Manager": "text-[#246FDB]",
};

export function buildTechOrbitItems(
  iconSize: number,
  circleSize: number,
): OrbitConfig[] {
  const categories = getTechCategoriesForOrbit();
  const layout = computeTechOrbitLayout(circleSize, iconSize, categories);

  return categories.map((category, ringIndex) => {
    const ringLayout = layout[ringIndex]!;
    const ringIconSize = ringLayout.iconSize;

    return {
      id: ringIndex + 1,
      radiusFactor: ringLayout.radiusFactor,
      speed: ringLayout.useUniformSpeed ? 16 : 10 + ringIndex * 2.5,
      iconSize: ringIconSize,
      orbitColor: ringIndex % 2 === 0 ? ACCENT_ORBIT : ACCENT_ORBIT_SOFT,
      orbitThickness: 1,
      icons: category.items.map((item, iconIndex) => {
        const Icon = item.icon;
        const colorClass = techBeamIconColors[item.name] ?? "text-[#0A0A0F]";
        const iconCount = category.items.length;
        const angleOffset =
          ringLayout.angleOffset +
          (iconCount > 0 ? 360 / iconCount / 2 : 0) +
          (360 / iconCount) * iconIndex;

        return {
          label: item.tooltip ?? item.name,
          emphasis: true,
          iconSize: ringIconSize + 8,
          angleOffset,
          icon: (
            <Icon
              className={cn(
                "size-full shrink-0",
                colorClass,
                "drop-shadow-[0_1px_1px_rgb(0_0_0/0.08)]",
              )}
              aria-hidden
            />
          ),
        };
      }),
    };
  });
}
