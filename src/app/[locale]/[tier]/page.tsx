import { LOCALES, TIERS, isLocale, isTierSlug } from "@/config/sales";
import { SalesPage, salesMetadata } from "@/lib/sales-page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    TIERS.map((tier) => ({ locale, tier: tier.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tier: string }>;
}): Promise<Metadata> {
  const { locale, tier } = await params;
  if (!isLocale(locale) || !isTierSlug(tier)) {
    return {};
  }
  return salesMetadata(locale, tier);
}

export default async function TierPage({
  params,
}: {
  params: Promise<{ locale: string; tier: string }>;
}) {
  const { locale, tier } = await params;
  if (!isLocale(locale) || !isTierSlug(tier)) {
    notFound();
  }
  return <SalesPage locale={locale} tierSlug={tier} />;
}
