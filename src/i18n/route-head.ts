import { notFound } from "@tanstack/react-router";

import { pageHead } from "@/lib/seo";
import { getUi, localeFromParams } from ".";
import { isLocale, pathFor } from "./locales";
import type { Ui } from "./ui-en";

type SeoKey = Exclude<keyof Ui["seo"], "articleNotFound">;

/** Head tags for a page in the language of its /ne prefix. */
export function localeHead(params: { lang?: string }, key: SeoKey, path: string) {
  const locale = localeFromParams(params);
  const entry = getUi(locale).seo[key];
  return pageHead(entry.title, entry.description, pathFor(locale, path), locale);
}

/** Only /ne is a real language prefix; anything else is a 404, not an English page. */
export function assertLocale(params: { lang?: string }) {
  if (!isLocale(params.lang)) throw notFound();
}
