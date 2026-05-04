import Link from "next/link";
import { CompanyCard } from "@/components/CompanyCard";
import { groupCompanies, institutionalText, tagline } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        <p className="text-sm tracking-[0.18em] text-muted">HOLDING CORPORATIVA</p>
        <h1 className="mt-6 max-w-4xl animate-fadeUp text-5xl font-semibold leading-tight md:text-7xl">
          Confluer
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-muted">{tagline}</p>
        <p className="mt-10 max-w-3xl border-l border-accent/60 pl-5 text-base leading-relaxed text-muted">{institutionalText}</p>
      </section>

      <section className="border-y border-border/60 bg-surface/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          {groupCompanies.map((company) => (
            <CompanyCard key={company.name} name={company.name} description={company.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
        {[
          ["Estrutura", "Arquitetura societária para crescimento com controle e previsibilidade."],
          ["Governança", "Diretrizes claras para decisões estratégicas, risco e conformidade."],
          ["Desenvolvimento", "Evolução contínua das empresas do grupo com visão de longo prazo."],
        ].map(([title, description], index) => (
          <div key={title} className="animate-fadeUp rounded-2xl border border-border p-7" style={{ animationDelay: `${index * 100}ms` }}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-4 text-muted">{description}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
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
