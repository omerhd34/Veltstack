import type { TechCategory } from "./tech-items";

const EMPHASIS_SIZE_BONUS = 8;
const GLOW_PADDING = 8;
const COLLISION_GAP = 4;
const MIN_ICON_SIZE = 14;
const GOLDEN_ANGLE = 137.508;

export function getVisualIconDiameter(iconSize: number): number {
  return iconSize + EMPHASIS_SIZE_BONUS + GLOW_PADDING;
}

function getCenterRadius(circleSize: number): number {
  return circleSize * 0.1;
}

function getIconAngles(iconCount: number, ringOffset: number): number[] {
  if (iconCount === 0) return [];

  const step = 360 / iconCount;
  const stagger = step / 2;

  return Array.from(
    { length: iconCount },
    (_, index) => (ringOffset + stagger + step * index) % 360,
  );
}

function distanceBetween(
  r1: number,
  a1Deg: number,
  r2: number,
  a2Deg: number,
): number {
  const a1 = (a1Deg * Math.PI) / 180;
  const a2 = (a2Deg * Math.PI) / 180;

  return Math.hypot(
    r1 * Math.cos(a1) - r2 * Math.cos(a2),
    r1 * Math.sin(a1) - r2 * Math.sin(a2),
  );
}

function iconsCollide(
  r1: number,
  a1Deg: number,
  size1: number,
  r2: number,
  a2Deg: number,
  size2: number,
): boolean {
  const minDistance = getVisualIconDiameter(size1) / 2 + getVisualIconDiameter(size2) / 2 + COLLISION_GAP;
  return distanceBetween(r1, a1Deg, r2, a2Deg) < minDistance;
}

interface RingPlacement {
  radius: number;
  iconSize: number;
  angles: number[];
}

function hasIconCollisions(rings: RingPlacement[]): boolean {
  const icons = rings.flatMap((ring) =>
    ring.angles.map((angle) => ({
      r: ring.radius,
      a: angle,
      size: ring.iconSize,
    })),
  );

  for (let first = 0; first < icons.length; first += 1) {
    for (let second = first + 1; second < icons.length; second += 1) {
      const a = icons[first]!;
      const b = icons[second]!;

      if (iconsCollide(a.r, a.a, a.size, b.r, b.a, b.size)) {
        return true;
      }
    }
  }

  return false;
}

function fitIconSizeForRing(
  ringRadius: number,
  iconCount: number,
  baseIconSize: number,
): number {
  if (iconCount === 0) return baseIconSize;

  let size = baseIconSize;

  while (size > MIN_ICON_SIZE) {
    const diameter = getVisualIconDiameter(size);
    const requiredArc = iconCount * (diameter + COLLISION_GAP);
    if (2 * Math.PI * ringRadius >= requiredArc) return size;
    size -= 1;
  }

  return MIN_ICON_SIZE;
}

function buildRingPlacements(
  halfSize: number,
  categories: TechCategory[],
  baseIconSize: number,
  radialStep: number,
): RingPlacement[] {
  const centerRadius = getCenterRadius(halfSize * 2);
  const firstIconRadius =
    centerRadius +
    getVisualIconDiameter(baseIconSize) / 2 +
    COLLISION_GAP;

  return categories.map((category, index) => {
    const radius = firstIconRadius + radialStep * index;
    const iconSize = fitIconSizeForRing(radius, category.items.length, baseIconSize);
    const angleOffset = (index * GOLDEN_ANGLE) % 360;

    return {
      radius,
      iconSize,
      angles: getIconAngles(category.items.length, angleOffset),
    };
  });
}

function fitsInsideCanvas(
  halfSize: number,
  rings: RingPlacement[],
): boolean {
  const outerMargin = COLLISION_GAP + 4;

  return rings.every(
    (ring) =>
      ring.radius + getVisualIconDiameter(ring.iconSize) / 2 + outerMargin <=
      halfSize,
  );
}

export interface TechOrbitLayoutRing {
  radiusFactor: number;
  iconSize: number;
  angleOffset: number;
  useUniformSpeed: boolean;
}

export function computeTechOrbitLayout(
  circleSize: number,
  baseIconSize: number,
  categories: TechCategory[],
): TechOrbitLayoutRing[] {
  const halfSize = circleSize / 2;
  const centerRadius = getCenterRadius(circleSize);
  const maxRadius =
    halfSize - getVisualIconDiameter(baseIconSize) / 2 - COLLISION_GAP - 4;
  const minFirstRadius =
    centerRadius +
    getVisualIconDiameter(baseIconSize) / 2 +
    COLLISION_GAP;
  const maxRadialSpan = Math.max(0, maxRadius - minFirstRadius);
  const ringCount = categories.length;
  const maxRadialStep =
    ringCount > 1 ? maxRadialSpan / (ringCount - 1) : 0;

  let iconSize = baseIconSize;

  while (iconSize >= MIN_ICON_SIZE) {
    let bestRings: RingPlacement[] | null = null;

    for (let radialStep = maxRadialStep; radialStep >= 8; radialStep -= 1) {
      const rings = buildRingPlacements(
        halfSize,
        categories,
        iconSize,
        radialStep,
      );

      if (!fitsInsideCanvas(halfSize, rings)) continue;
      if (!hasIconCollisions(rings)) {
        bestRings = rings;
        break;
      }
    }

    if (bestRings) {
      return bestRings.map((ring, index) => ({
        radiusFactor: (2 * ring.radius) / circleSize,
        iconSize: ring.iconSize,
        angleOffset: (index * GOLDEN_ANGLE) % 360,
        useUniformSpeed: true,
      }));
    }

    iconSize -= 1;
  }

  const fallbackRings = buildRingPlacements(
    halfSize,
    categories,
    MIN_ICON_SIZE,
    Math.max(8, maxRadialStep),
  );

  return fallbackRings.map((ring, index) => ({
    radiusFactor: (2 * ring.radius) / circleSize,
    iconSize: ring.iconSize,
    angleOffset: (index * GOLDEN_ANGLE) % 360,
    useUniformSpeed: true,
  }));
}
