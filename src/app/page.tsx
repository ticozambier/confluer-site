import Link from "next/link";
import { CompanyCard } from "@/components/CompanyCard";
import { operatingAreas, institutionalText, tagline } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "url('/structure-pattern.svg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="pointer-events-none absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-40 md:pb-36">
          <p className="text-sm tracking-[0.18em] text-foreground/75">HOLDING CORPORATIVA</p>
          <h1 className="mt-6 max-w-5xl animate-fadeUp text-5xl font-bold leading-tight md:text-7xl">
            Confluer
          </h1>
          <p className="mt-8 max-w-4xl text-2xl font-medium leading-snug text-foreground">Controle institucional para evolução consistente de negócios e operações.</p>
          <p className="mt-8 max-w-3xl text-lg font-light text-foreground/80">{tagline}</p>
          <p className="mt-12 max-w-4xl border-l border-accent/60 pl-6 text-base font-light leading-relaxed text-foreground/75">{institutionalText}</p>
        </div>
      </section>

      <section className="border-y border-border/70 bg-surface/40 py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Áreas de atuação</h2>
          <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-foreground/80">
            Domínios em que a holding estrutura, governa e desenvolve operações.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          {operatingAreas.map((area) => (
            <CompanyCard key={area.name} name={area.name} description={area.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-3 md:py-28">
        {[
          ["Estrutura", "Arquitetura societária para crescimento com controle e previsibilidade."],
          ["Governança", "Diretrizes claras para decisões estratégicas, risco e conformidade."],
          ["Desenvolvimento", "Evolução contínua de negócios e operações com visão de longo prazo."],
        ].map(([title, description], index) => (
          <div key={title} className="animate-fadeUp rounded-2xl border border-border p-8" style={{ animationDelay: `${index * 100}ms` }}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-foreground/80">{description}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <Link
          href="/contato"
          className="inline-flex items-center border border-accent px-6 py-3 text-sm font-medium transition hover:bg-accent hover:text-white"
        >
          Falar com a Confluer
        </Link>
      </section>
    </>
  );
}
