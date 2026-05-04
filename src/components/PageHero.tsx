type PageHeroProps = { title: string; description: string };

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/80 pb-16 pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-15" style={{ backgroundImage: "url('/structure-pattern.svg')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="mx-auto w-full max-w-6xl px-6 relative">
        <h1 className="animate-fadeUp text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg font-light leading-relaxed text-foreground/80">{description}</p>
      </div>
    </section>
  );
}
