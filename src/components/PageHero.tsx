type PageHeroProps = { title: string; description: string };

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border/80 pb-16 pt-32 md:pb-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="animate-fadeUp text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg font-light leading-relaxed text-foreground/80">{description}</p>
      </div>
    </section>
  );
}
