import { PageHero } from "@/components/PageHero";

export default function GovernancaPage() {
  return (
    <>
      <PageHero title="Governança" description="Disciplina de gestão orientada por métricas, compliance e decisões de longo prazo." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Controle", "Monitoramento contínuo de indicadores e performance."],
            ["Conformidade", "Processos formais para mitigar riscos operacionais e regulatórios."],
            ["Transparência", "Comunicação objetiva entre liderança, operação e stakeholders."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-border p-7">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-4 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
