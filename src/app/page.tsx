import { DEFAULT_LOCALE, DEFAULT_TIER } from "@/config/sales";
import { SalesPage, salesMetadata } from "@/lib/sales-page";
import type { Metadata } from "next";

export const metadata: Metadata = salesMetadata(DEFAULT_LOCALE, DEFAULT_TIER);

export default function HomePage() {
  return <SalesPage locale={DEFAULT_LOCALE} tierSlug={DEFAULT_TIER} />;
}
