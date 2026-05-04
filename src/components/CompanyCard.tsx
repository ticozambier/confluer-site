type CompanyCardProps = { name: string; description: string };

export function CompanyCard({ name, description }: CompanyCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-8 transition duration-300 hover:border-accent/60 hover:bg-surface/70">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="mt-4 text-muted leading-relaxed">{description}</p>
    </article>
  );
}
