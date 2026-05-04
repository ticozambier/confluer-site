import { PageHero } from "@/components/PageHero";
import { institutionalText } from "@/data/siteContent";

export default function SobrePage() {
  return (
    <>
      <PageHero title="Sobre a Confluer" description="Holding dedicada à estruturação e desenvolvimento de negócios em tecnologia e serviços digitais." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="max-w-4xl text-lg leading-relaxed text-muted">{institutionalText}</p>
      </section>
    </>
  );
}
