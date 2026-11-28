import type { LegalSection } from "@/data/legal";
import type { TopicKey } from "@/data/topics";

export interface TopicText {
  eyebrow: string;
  title: string;
  intro: string;
  lead: string;
  body: string[];
  themes: { title: string; text: string; slug?: string }[];
}

export interface TimelineEventText {
  sort: number;
  year: string;
  title: string;
  text: string;
}

export interface ArticleText {
  title: string;
  summary: string;
  /** Present only once the full essay has been translated. */
  sections?: { title: string; text: string }[];
}

export interface LegalText {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export interface LocaleContent {
  topics: Record<TopicKey, TopicText>;
  timeline: TimelineEventText[];
  legal: { privacy: LegalText; terms: LegalText };
  articles: Record<string, ArticleText>;
}
