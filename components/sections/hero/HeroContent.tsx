interface HeroContentProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function HeroContent({ title, subtitle, className }: HeroContentProps) {
  return (
    <div className={className}>
      <h1 className="font-(family-name:--font-heading) text-3xl font-bold leading-tight tracking-tight text-white/90 sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
