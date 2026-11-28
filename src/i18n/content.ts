import {
  articles,
  recordsBySlug,
  type Article,
  type Category,
  type Evidence,
} from "@/data/heritage";
import { topics as englishTopics, topicTextNe, type Topic, type TopicKey } from "@/data/topics";
import { eras as englishEras, timeline as englishTimeline, timelineNe } from "@/data/timeline";
import { privacyPage, termsPage } from "@/data/legal";

import { defaultLocale, type Locale } from "./locales";
import { getUi } from ".";
import { legalNe } from "./legal-ne";
import type { TopicText } from "./content-types";

/** A collection page in the requested language. */
export function getTopic(locale: Locale, key: TopicKey): Topic {
  const english = englishTopics[key];
  if (locale === defaultLocale) return english;
  return { ...english, ...topicTextNe[key] };
}

export function getTopicText(locale: Locale, key: TopicKey): TopicText {
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
  if (locale === defaultLocale) return englishTimeline;
  return englishTimeline.map((event, index) => ({
    ...event,
    ...(timelineNe[index] ?? {}),
  }));
}

export function getEras(locale: Locale) {
  const ui = getUi(locale);
  return englishEras.map((era) => ui.labels.eras[era]);
}

export function getLegal(locale: Locale): { privacy: typeof privacyPage; terms: typeof termsPage } {
  if (locale === defaultLocale) return { privacy: privacyPage, terms: termsPage };
  return {
    privacy: { ...privacyPage, ...legalNe.privacy },
    terms: { ...termsPage, ...legalNe.terms },
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
 * An article in the requested language. Both languages come from the same
 * library file, so a section, its title and its metadata are always in step.
 */
export function getArticle(article: Article, locale: Locale): LocalizedArticle {
  const record = recordsBySlug.get(article.slug);
  const ui = getUi(locale);
  const text = locale === defaultLocale ? record?.en : record?.ne;
  const imageNote = locale === defaultLocale ? record?.en.imageNote : record?.ne.imageNote;
  return {
    ...article,
    title: text?.title ?? article.title,
    summary: text?.summary ?? article.summary,
    sections: text?.sections ?? article.sections,
    category: ui.labels.categories[article.category],
    evidence: ui.labels.evidence[article.evidence],
    region: locale === defaultLocale ? article.region : (record?.regionNe ?? article.region),
    period: locale === defaultLocale ? article.period : (record?.periodNe ?? article.period),
    reviewed:
      locale === defaultLocale ? article.reviewed : (record?.reviewedNe ?? article.reviewed),
    ...(imageNote ? { imageNote } : {}),
    rawCategory: article.category,
    rawEvidence: article.evidence,
    bodyTranslated: Boolean(text),
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
