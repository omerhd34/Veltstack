import {
  IoCheckmarkDoneCircleSharp,
  IoCloseCircleSharp,
} from "react-icons/io5";
import { cn } from "@/lib/utils";

type InclusionIconProps = {
  included: boolean;
  size?: "sm" | "md";
  className?: string;
};

export function InclusionIcon({
  included,
  size = "sm",
  className,
}: InclusionIconProps) {
  const isMd = size === "md";

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        isMd ? "size-7" : "size-5",
        className,
      )}
      aria-hidden
    >
      <span className="absolute inset-[18%] rounded-full bg-white" />
      {included ? (
        <IoCheckmarkDoneCircleSharp
          className={cn("relative size-full", "text-emerald-400")}
        />
      ) : (
        <IoCloseCircleSharp
          className={cn("relative size-full", "text-red-400")}
        />
      )}
    </span>
  );
}
