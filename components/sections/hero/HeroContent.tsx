interface HeroContentProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function HeroContent({ title, subtitle, className }: HeroContentProps) {
  return (
    <div className={className}>
      <h1 className="font-(family-name:--font-heading) text-[1.875rem] font-bold leading-[1.2] tracking-tight text-white min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight">
        {title}
      </h1>
      <p className="mt-5 max-w-prose text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg sm:text-white/65">
        {subtitle}
      </p>
    </div>
  );
}
