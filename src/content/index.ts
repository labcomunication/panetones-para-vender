import type { Locale } from "@/config/sales";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { pt } from "./pt";
import type { SalesCopy } from "./types";

export const COPY: Record<Locale, SalesCopy> = { pt, en, es, fr };

export type { SalesCopy };
