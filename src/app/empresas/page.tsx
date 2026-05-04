import { CompanyCard } from "@/components/CompanyCard";
import { PageHero } from "@/components/PageHero";
import { groupCompanies } from "@/data/siteContent";

export default function EmpresasPage() {
  return (
    <>
      <PageHero title="Empresas do Grupo" description="Negócios complementares que atuam em frentes críticas da transformação digital corporativa." />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        {groupCompanies.map((company) => <CompanyCard key={company.name} {...company} />)}
      </section>
    </>
  );
}
