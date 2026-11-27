export const locales = ["en", "ne"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export interface LocaleMeta {
  code: Locale;
  /** Name written in the language itself, as a language switcher should show it. */
  label: string;
  /** Short label for compact controls. */
  short: string;
  htmlLang: string;
  ogLocale: string;
  /** True when the locale's URLs are prefixed with /<code>. English stays at the root. */
  prefixed: boolean;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: {
    code: "en",
    label: "English",
    short: "EN",
    htmlLang: "en",
    ogLocale: "en_GB",
    prefixed: false,
  },
  ne: { code: "ne", label: "नेपाली", short: "ने", htmlLang: "ne", ogLocale: "ne_NP", prefixed: true },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Locale named by a pathname, e.g. /ne/history → "ne"; /history → "en". */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLocale(first) ? first : defaultLocale;
}

/** Remove a locale prefix, leaving a canonical root-relative path ("/ne/history" → "/history"). */
export function stripLocale(pathname: string): string {
  const locale = localeFromPath(pathname);
  if (locale === defaultLocale) return pathname || "/";
  const rest = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "");
  return rest || "/";
}

/** Path for a page in a given locale: pathFor("ne", "/history") → "/ne/history". */
export function pathFor(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}
