import { cn } from "@/lib/utils";

interface IxirhostIconProps {
  className?: string;
}

const IXIRHOST_ICON_SRC = "/images/ixirhost.png";

export function IxirhostIcon({ className }: IxirhostIconProps) {
  return (
    <span
      className={cn("flex size-full items-center justify-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IXIRHOST_ICON_SRC}
        alt=""
        aria-hidden
        className="block size-[88%] max-h-full max-w-full object-contain"
      />
    </span>
  );
}
