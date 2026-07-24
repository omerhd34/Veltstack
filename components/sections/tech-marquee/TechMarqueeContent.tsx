"use client";

import { useState } from "react";
import { TechBeamCircleLazy } from "./TechBeamCircleLazy";
import {
  TechCategoryButtons,
  type TechCategoryOption,
} from "./TechCategoryButtons";

interface TechMarqueeContentProps {
  categories: TechCategoryOption[];
  children: React.ReactNode;
}

export function TechMarqueeContent({
  categories,
  children,
}: TechMarqueeContentProps) {
  const [selectedOrbitId, setSelectedOrbitId] = useState<number | null>(null);

  return (
    <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="min-w-0 text-center lg:text-left">
        {children}
        <TechCategoryButtons
          categories={categories}
          selectedOrbitId={selectedOrbitId}
          onSelect={setSelectedOrbitId}
          className="mx-auto lg:mx-0"
        />
      </div>

      <div className="min-w-0 overflow-x-clip">
        <TechBeamCircleLazy
          className="mx-auto w-full max-w-2xl lg:mx-0 lg:ml-auto"
          selectedOrbitId={selectedOrbitId}
          onOrbitSelect={setSelectedOrbitId}
        />
      </div>
    </div>
  );
}
