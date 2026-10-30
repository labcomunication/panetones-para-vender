import { SetLang } from "@/components/SetLang";
import { LandingPage } from "@/components/LandingPage";
import {
  DEFAULT_TIER,
  getTier,
  isLocale,
  isTierSlug,
  type Locale,
  type TierSlug,
} from "@/config/sales";
import { COPY } from "@/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function salesMetadata(locale: string, tierSlug: string): Metadata {
  if (!isLocale(locale) || !isTierSlug(tierSlug)) {
    return { title: "Panetones para Vender" };
  }
  const copy = COPY[locale];
  const tier = getTier(tierSlug);
  return {
    title: copy.metaTitle,
    description: `${copy.metaDescription} Essencial ${tier?.essencial} · Completo ${tier?.completo}.`,
  };
}

export function SalesPage({
  locale,
  tierSlug,
}: {
  locale: string;
  tierSlug: string;
}) {
  if (!isLocale(locale) || !isTierSlug(tierSlug)) {
    notFound();
  }
  const tier = getTier(tierSlug);
  if (!tier) {
    notFound();
  }
  return (
    <>
      <SetLang lang={locale} />
      <LandingPage copy={COPY[locale]} locale={locale as Locale} tier={tier} />
    </>
  );
}

export function defaultTier(): TierSlug {
  return DEFAULT_TIER;
}
