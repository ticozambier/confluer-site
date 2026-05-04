import { PageHero } from "@/components/PageHero";

export default function EstruturaPage() {
  return (
    <>
      <PageHero title="Estrutura" description="Base organizacional desenhada para garantir escala com controle institucional." />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-xl font-semibold">Modelo Societário</h2><p className="mt-4 text-muted">Organização de participações com clareza de papéis e responsabilidades.</p></div>
        <div className="rounded-2xl border border-border bg-surface p-8"><h2 className="text-xl font-semibold">Direcionamento Estratégico</h2><p className="mt-4 text-muted">Coordenação entre negócios para foco em performance e sustentabilidade.</p></div>
      </section>
    </>
  );
}
