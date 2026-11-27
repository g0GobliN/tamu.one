import { useParams } from "@tanstack/react-router";

import { defaultLocale, isLocale, localeFromPath, pathFor, type Locale } from "./locales";
import { en, type Ui } from "./ui-en";
import { ne } from "./ui-ne";

export * from "./locales";

export const dictionaries: Record<Locale, Ui> = { en, ne };

export function getUi(locale: Locale): Ui {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/**
 * The locale of the page being rendered. English lives at the root, so a page
 * without a /ne prefix is English.
 */
export function useLocale(): Locale {
  const params = useParams({ strict: false }) as { lang?: string };
  if (isLocale(params.lang)) return params.lang;
  if (typeof window !== "undefined") return localeFromPath(window.location.pathname);
  return defaultLocale;
}

/** Interface text for the current page's locale. */
export function useUi(): Ui {
  return getUi(useLocale());
}

export function localizedPath(locale: Locale, to: string): string {
  return pathFor(locale, to);
}

type Category = keyof Ui["labels"]["categories"];
type Evidence = keyof Ui["labels"]["evidence"];
type Era = keyof Ui["labels"]["eras"];

export function categoryLabel(ui: Ui, category: string): string {
  return ui.labels.categories[category as Category] ?? category;
}

export function evidenceLabel(ui: Ui, evidence: string): string {
  return ui.labels.evidence[evidence as Evidence] ?? evidence;
}

export function eraLabel(ui: Ui, era: string): string {
  return ui.labels.eras[era as Era] ?? era;
}

export function localeFromParams(params: { lang?: string }): Locale {
  return isLocale(params.lang) ? params.lang : defaultLocale;
}
