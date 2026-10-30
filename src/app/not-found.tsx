import { DEFAULT_LOCALE, DEFAULT_TIER, LOCALES, TIERS, tierPath } from "@/config/sales";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fafaf9] text-[#1c1917] px-4 py-16">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-[#ea580c]">
          404
        </p>
        <h1 className="text-3xl font-black text-[#064e3b] mt-2">
          Página não encontrada
        </h1>
        <p className="mt-3 text-stone-600">
          Essa rota não existe. A página em português começa aqui.
        </p>
        <a
          href={tierPath(DEFAULT_LOCALE, DEFAULT_TIER)}
          className="inline-flex mt-6 rounded-xl bg-[#16A34A] text-white font-extrabold uppercase px-6 py-4"
        >
          Ir para a página
        </a>
        <ul className="mt-8 space-y-2 text-sm">
          {LOCALES.flatMap((locale) =>
            TIERS.map((tier) => (
              <li key={`${locale}-${tier.slug}`}>
                <a className="underline" href={tierPath(locale, tier.slug)}>
                  /{locale}/{tier.slug}
                </a>
              </li>
            )),
          )}
        </ul>
      </div>
    </main>
  );
}
