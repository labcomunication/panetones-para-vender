export const OFFER_ANCHOR = "#oferta";

// Real Cakto checkout URL pending. Buy buttons stay disabled ("Em breve") while null.
export const CHECKOUT_URL: string | null = null;

export const LOCALES = ["pt", "en", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";

export const TIERS = [
  { slug: "9-99-27", essencial: "R$ 9,99", completo: "R$ 27,00" },
  { slug: "19-90-47-90", essencial: "R$ 19,90", completo: "R$ 47,90" },
  { slug: "47-90-97", essencial: "R$ 47,90", completo: "R$ 97,00" },
] as const;

export type TierSlug = (typeof TIERS)[number]["slug"];
export type Tier = (typeof TIERS)[number];

export const DEFAULT_TIER: TierSlug = "19-90-47-90";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isTierSlug(value: string): value is TierSlug {
  return TIERS.some((tier) => tier.slug === value);
}

export function getTier(slug: string): Tier | undefined {
  return TIERS.find((tier) => tier.slug === slug);
}

export function tierPath(locale: Locale, slug: TierSlug): string {
  return `/${locale}/${slug}`;
}

export const IMAGES = {
  hero: "/panetone/hero-panetones-gourmet-4x3.jpg",
  showcase: "/panetone/capa-lucrando.jpg",
  flavors: [
    "/panetone/panetone-brigadeiro-trufado.jpg",
    "/panetone/panetone-pistache-amendoas.jpg",
    "/panetone/panetone-frutas-vermelhas.jpg",
    "/panetone/panetone-doce-leite-nozes.jpg",
    "/panetone/panetone-bomba-chocolate.jpg",
    "/panetone/panetone-ninho-nutella.jpg",
    "/panetone/panetone-oreo-cremoso.jpg",
    "/panetone/panetone-red-velvet.jpg",
  ],
  gallery: [
    "/panetone/panetone-classico.jpg",
    "/panetone/panetone-bomba-chocolate.jpg",
    "/panetone/panetone-pistache-amendoas.jpg",
    "/panetone/panetone-gotas-chocolate.jpg",
    "/panetone/panetone-ninho-nutella.jpg",
    "/panetone/panetone-caramelo-amendoas.jpg",
    "/panetone/panetone-embalados.jpg",
    "/panetone/panetone-red-velvet.jpg",
    "/panetone/panetone-brigadeiro-trufado.jpg",
    "/panetone/panetone-oreo-cremoso.jpg",
    "/panetone/panetone-doce-leite-nozes.jpg",
    "/panetone/panetone-frutas-vermelhas.jpg",
  ],
  themes: [
    "/panetone/panetone-classico.jpg",
    "/panetone/panetone-pistache-amendoas.jpg",
    "/panetone/panetone-embalados.jpg",
  ],
  testimonials: ["/panetone/depoimento-1.jpg", "/panetone/depoimento-2.jpg"],
  materials: [
    "/panetone/capa-lucrando.jpg",
    "/panetone/capa-sabores-v2.jpg",
    "/panetone/capa-custos-v2.jpg",
    "/panetone/capa-comunicacao-v2.jpg",
    "/panetone/capa-dezembro-v2.jpg",
  ],
  bonuses: [
    "/panetone/capa-custos-v2.jpg",
    "/panetone/capa-comunicacao-v2.jpg",
    "/panetone/capa-sabores-v2.jpg",
    "/panetone/capa-dezembro-v2.jpg",
  ],
} as const;
