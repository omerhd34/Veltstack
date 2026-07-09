export const whyMeIconKeys = [
  "contact",
  "rocket",
  "headset",
  "layout",
  "chart",
  "checklist",
] as const;

export type WhyMeIconKey = (typeof whyMeIconKeys)[number];

export interface WhyMeItemConfig {
  titleKey: string;
  descKey: string;
  iconKey: WhyMeIconKey;
}

export const whyMeItems: WhyMeItemConfig[] = [
  {
    titleKey: "whyMeSingleTitle",
    descKey: "whyMeSingleDesc",
    iconKey: "contact",
  },
  {
    titleKey: "whyMeFastTitle",
    descKey: "whyMeFastDesc",
    iconKey: "rocket",
  },
  {
    titleKey: "whyMeSupportTitle",
    descKey: "whyMeSupportDesc",
    iconKey: "headset",
  },
  {
    titleKey: "whyMeUxTitle",
    descKey: "whyMeUxDesc",
    iconKey: "layout",
  },
  {
    titleKey: "whyMeMeasurableTitle",
    descKey: "whyMeMeasurableDesc",
    iconKey: "chart",
  },
  {
    titleKey: "whyMeTransparentTitle",
    descKey: "whyMeTransparentDesc",
    iconKey: "checklist",
  },
];
