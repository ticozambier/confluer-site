import { PageHero } from "@/components/PageHero";

export default function ContatoPage() {
  return (
    <>
      <PageHero title="Contato" description="Entre em contato com a Confluer para assuntos institucionais e corporativos." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl rounded-2xl border border-border bg-surface p-8">
          <p className="text-muted">E-mail institucional</p>
          <p className="mt-2 text-2xl font-semibold">contato@confluer.com</p>
          <p className="mt-8 text-muted">Atendimento em horário comercial, com retorno em até 2 dias úteis.</p>
        </div>
      </section>
    </>
  );
}
