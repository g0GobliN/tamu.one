import { articles, type Article, type Category, type Evidence } from "@/data/heritage";
import { topics as englishTopics, type Topic } from "@/data/topics";
import { eras as englishEras, timeline as englishTimeline } from "@/data/timeline";
import { privacyPage, termsPage } from "@/data/legal";

import { defaultLocale, type Locale } from "./locales";
import { getUi } from ".";
import { ne } from "./content-ne";
import type { LocaleContent, TopicText } from "./content-types";

const contentByLocale: Record<Exclude<Locale, "en">, LocaleContent> = { ne };

export function getContent(locale: Locale): LocaleContent | undefined {
  if (locale === "en") return undefined;
  return contentByLocale[locale];
}

/** A topic page in the requested language, falling back to the English source. */
export function getTopic(locale: Locale, key: keyof typeof englishTopics): Topic {
  const english = englishTopics[key];
  const translated = getContent(locale)?.topics[key];
  if (!translated) return english;
  return { ...english, ...translated };
}

export function getTopicText(locale: Locale, key: keyof typeof englishTopics): TopicText {
  const t = getTopic(locale, key);
  return {
    eyebrow: t.eyebrow,
    title: t.title,
    intro: t.intro,
    lead: t.lead,
    body: t.body,
    themes: t.themes,
  };
}

/** The timeline in the requested language. `era` stays an English key for filtering. */
export function getTimeline(locale: Locale) {
  const translated = getContent(locale)?.timeline;
  if (!translated) return englishTimeline;
  return englishTimeline.map((event) => {
    const text = translated.find((e) => e.sort === event.sort);
    return text ? { ...event, year: text.year, title: text.title, text: text.text } : event;
  });
}

export function getEras(locale: Locale) {
  const ui = getUi(locale);
  return englishEras.map((era) => ui.labels.eras[era]);
}

export function getLegal(locale: Locale): { privacy: typeof privacyPage; terms: typeof termsPage } {
  const translated = getContent(locale)?.legal;
  if (!translated) return { privacy: privacyPage, terms: termsPage };
  return {
    privacy: {
      ...privacyPage,
      eyebrow: translated.privacy.eyebrow,
      title: translated.privacy.title,
      updated: translated.privacy.updated,
      intro: translated.privacy.intro,
      sections: translated.privacy.sections,
    },
    terms: {
      ...termsPage,
      eyebrow: translated.terms.eyebrow,
      title: translated.terms.title,
      updated: translated.terms.updated,
      intro: translated.terms.intro,
      sections: translated.terms.sections,
    },
  };
}

export interface LocalizedArticle extends Omit<Article, "category" | "evidence"> {
  /** Category and evidence as written in the page's language. */
  category: string;
  evidence: string;
  /** Untranslated category key, for filtering and grouping. */
  rawCategory: Category;
  /** Untranslated evidence key, for filtering. */
  rawEvidence: Evidence;
  /** False when only the title and summary are translated and the body is the English text. */
  bodyTranslated: boolean;
}

/**
 * An article in the requested language. Titles and summaries are translated for every
 * article; a `sections` translation replaces the English body when one exists.
 */
export function getArticle(article: Article, locale: Locale): LocalizedArticle {
  const translated = getContent(locale)?.articles[article.slug];
  const ui = getUi(locale);
  if (!translated) {
    return {
      ...article,
      category: ui.labels.categories[article.category],
      evidence: ui.labels.evidence[article.evidence],
      rawCategory: article.category,
      rawEvidence: article.evidence,
      bodyTranslated: locale === defaultLocale,
    };
  }
  const sections = translated.sections;
  return {
    ...article,
    title: translated.title,
    summary: translated.summary,
    sections: sections ?? article.sections,
    category: ui.labels.categories[article.category],
    evidence: ui.labels.evidence[article.evidence],
    rawCategory: article.category,
    rawEvidence: article.evidence,
    bodyTranslated: locale === defaultLocale || Boolean(sections),
  };
}

export function getArticles(locale: Locale): LocalizedArticle[] {
  return articles.map((a) => getArticle(a, locale));
}

export function getArticleBySlug(slug: string, locale: Locale) {
  const article = articles.find((a) => a.slug === slug);
  return article ? getArticle(article, locale) : undefined;
}

export function getCategories(locale: Locale) {
  const ui = getUi(locale);
  return Object.keys(ui.labels.categories) as Category[];
}
