interface HeroContentProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function HeroContent({ title, subtitle, className }: HeroContentProps) {
  return (
    <div className={className}>
      <h1 className="font-(family-name:--font-heading) text-[33.75px] font-bold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight">
        {title}
      </h1>
      <p className="mt-5 max-w-prose text-lg leading-relaxed text-white/70 sm:mt-6 sm:text-white/65">
        {subtitle}
      </p>
    </div>
  );
}
