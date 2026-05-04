type PageHeroProps = { title: string; description: string };

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border/60 pb-10 pt-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="animate-fadeUp text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{description}</p>
      </div>
    </section>
  );
}
