interface ServicesPackagesIntroProps {
  title: string;
  p1: string;
  p2: string;
  variant?: "full" | "compact";
  className?: string;
}

export function ServicesPackagesIntro({
  title,
  p1,
  p2,
  variant = "full",
  className,
}: ServicesPackagesIntroProps) {
  if (variant === "compact") {
    return (
      <div className={`mx-auto max-w-4xl text-center ${className ?? ""}`}>
        <p className="mx-auto max-w-3xl text-sm leading-[1.8] text-muted-foreground/85 md:max-w-4xl md:text-[0.9375rem] md:leading-[1.85]">
          {p2}
        </p>
      </div>
    );
  }

  return (
    <div className={`mx-auto max-w-4xl text-center ${className ?? ""}`}>
      <div className="mx-auto flex w-fit flex-col items-center">
        <h3 className="font-(family-name:--font-heading) text-xl font-bold tracking-tight text-brand-accent md:text-2xl">
          {title}
        </h3>
        <span
          aria-hidden
          className="mt-3 h-px w-12 bg-linear-to-r from-transparent via-brand-accent/50 to-transparent"
        />
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-sm leading-[1.8] text-muted-foreground md:max-w-4xl md:text-base md:leading-[1.85]">
        {p1}
      </p>
      <p className="mx-auto mt-3 max-w-3xl text-sm leading-[1.8] text-muted-foreground/75 md:max-w-4xl md:text-[0.9375rem] md:leading-[1.85]">
        {p2}
      </p>
    </div>
  );
}
