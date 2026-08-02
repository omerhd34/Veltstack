import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type LogoVariant = "navbar" | "footer";

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  href?: string;
  ignoreOverlay?: boolean;
}

const imageVariants: Record<
  LogoVariant,
  { className: string; width: number; height: number }
> = {
  navbar: {
    className: "h-7 w-auto min-[400px]:h-8 sm:h-9 md:h-10 xl:h-11 2xl:h-12",
    width: 240,
    height: 47,
  },
  footer: {
    className: "h-6 w-auto sm:h-7",
    width: 168,
    height: 33,
  },
};

export function Logo({
  className,
  variant = "navbar",
  href = "/",
  ignoreOverlay = false,
}: LogoProps) {
  const image = imageVariants[variant];
  const useOverlaySwap = variant === "navbar" && !ignoreOverlay;

  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex origin-left select-none items-center transition-transform duration-300 ease-out hover:scale-[1.04]",
        className,
      )}
      aria-label="Veltstack"
    >
      <Image
        src={
          variant === "footer" ? "/images/logo-overlay.png" : "/images/logo.png"
        }
        alt="Veltstack"
        width={image.width}
        height={image.height}
        priority={variant === "navbar"}
        className={cn(
          image.className,
          useOverlaySwap &&
            "group-data-[overlay=true]/header:invisible group-data-[overlay=true]/header:opacity-0",
        )}
      />
      {useOverlaySwap ? (
        <Image
          src="/images/logo-overlay.png"
          alt=""
          aria-hidden
          width={image.width}
          height={image.height}
          priority
          className={cn(
            image.className,
            "pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 opacity-0",
            "group-data-[overlay=true]/header:opacity-100",
          )}
        />
      ) : null}
    </Link>
  );
}
