type CompanyCardProps = { name: string; description: string };

export function CompanyCard({ name, description }: CompanyCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-8 transition duration-300 hover:border-accent/50 hover:bg-surface/80">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-4 text-sm font-light leading-relaxed text-foreground/80">{description}</p>
    </article>
  );
}
