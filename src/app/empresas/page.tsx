import { CompanyCard } from "@/components/CompanyCard";
import { PageHero } from "@/components/PageHero";
import { operatingAreas } from "@/data/siteContent";

export default function EmpresasPage() {
  return (
    <>
      <PageHero title="Áreas de atuação" description="Domínios em que a holding orienta negócios e operações com governança e visão de longo prazo." />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        {operatingAreas.map((area) => <CompanyCard key={area.name} {...area} />)}
      </section>
    </>
  );
}
