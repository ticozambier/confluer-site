export function Footer() {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-muted md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Confluer Holding. Todos os direitos reservados.</p>
        <p>Estrutura, controle e visão de longo prazo.</p>
      </div>
    </footer>
  );
}
