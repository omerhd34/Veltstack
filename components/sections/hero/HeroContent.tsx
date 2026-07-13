interface HeroContentProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function HeroContent({ title, subtitle, className }: HeroContentProps) {
  return (
    <div className={className}>
      <h1 className="font-(family-name:--font-heading) text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white/90 min-[400px]:text-3xl sm:text-4xl md:text-[2.35rem] lg:text-[2.65rem] xl:text-5xl 2xl:text-6xl 2xl:leading-tight">
        {title}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base md:text-[0.9375rem] lg:text-base xl:text-lg xl:text-white/65">
        {subtitle}
      </p>
    </div>
  );
}
