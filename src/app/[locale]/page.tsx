import { LOCALES, DEFAULT_TIER, isLocale } from "@/config/sales";
import { SalesPage, salesMetadata } from "@/lib/sales-page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return salesMetadata(locale, DEFAULT_TIER);
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return <SalesPage locale={locale} tierSlug={DEFAULT_TIER} />;
}
