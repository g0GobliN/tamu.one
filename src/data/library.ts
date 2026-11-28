/**
 * The content library.
 *
 * Every article lives in `content/library/<shelf>/<slug>.md`, one file holding
 * both languages: YAML-style front matter for the metadata, then sections
 * tagged `## [en]` and `## [ne]`. Nothing in this file contains prose — it only
 * reads, parses and types what the Markdown files say, so the collection can be
 * edited, reviewed or reused as documents without touching application code.
 */
import type { MediaId } from "./media";

export type Category =
  "History" | "Language" | "Culture" | "Spirituality" | "Homeland" | "Diaspora";

export type Evidence =
  "Academic research" | "Scholarly interpretation" | "Oral tradition & archaeology";

export interface Source {
  id: string;
  author: string;
  title: string;
  year: string;
  url: string;
  kind: string;
}

export interface ArticleSection {
  title: string;
  text: string;
}

/** One language's version of an article. */
export interface LocalizedText {
  title: string;
  summary: string;
  sections: ArticleSection[];
  imageNote?: string;
}

/** A parsed library file: metadata plus both language versions. */
export interface ArticleRecord {
  slug: string;
  category: Category;
  region: string;
  regionNe: string;
  period: string;
  periodNe: string;
  reviewed: string;
  reviewedNe: string;
  evidence: Evidence;
  image?: MediaId;
  sourceIds: string[];
  sourceNotes?: Record<string, string>;
  en: LocalizedText;
  ne: LocalizedText;
}

/** The English view of an article, kept for existing components and tests. */
export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: Category;
  region: string;
  period: string;
  image?: MediaId;
  imageNote?: string;
  evidence: Evidence;
  sourceIds: string[];
  sourceNotes?: Record<string, string>;
  sections: ArticleSection[];
  reviewed: string;
  editorialStatus: "Published introduction";
  communityReview: "Not yet community reviewed";
}

const rawFiles = import.meta.glob("/content/library/*/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const rawSources = import.meta.glob("/content/sources.json", {
  eager: true,
  import: "default",
}) as Record<string, Source[]>;

function frontmatter(source: string, file: string) {
  const lines = source.split("\n");
  if (lines[0]?.trim() !== "---") throw new Error(`${file}: missing front matter`);
  const meta: Record<string, string> = {};
  const lists: Record<string, string[]> = {};
  let listKey: string | null = null;
  let index = 1;
  for (; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (line.trim() === "---") {
      index += 1;
      break;
    }
    if (line.startsWith("  - ")) {
      if (!listKey) throw new Error(`${file}: list item without a key`);
      lists[listKey]?.push(line.slice(4).trim());
      continue;
    }
    const split = line.indexOf(": ");
    const key = split === -1 ? line.replace(/:$/, "").trim() : line.slice(0, split).trim();
    const value = split === -1 ? "" : line.slice(split + 2).trim();
    if (!key) continue;
    if (value === "") {
      listKey = key;
      lists[key] = [];
    } else {
      listKey = null;
      meta[key] = value;
    }
  }
  return { meta, lists, body: lines.slice(index).join("\n") };
}

function sections(body: string, locale: "en" | "ne", file: string): ArticleSection[] {
  const marker = `## [${locale}] `;
  const heading = /^## \[(en|ne)\] /;
  const out: ArticleSection[] = [];
  let current: ArticleSection | null = null;
  for (const line of body.split("\n")) {
    if (line.startsWith(marker)) {
      if (current) out.push({ title: current.title, text: current.text.trim() });
      current = { title: line.slice(marker.length).trim(), text: "" };
    } else if (heading.test(line)) {
      // A heading in the other language ends this section; files may group all
      // of one language together or interleave the two, and both must parse.
      if (current) out.push({ title: current.title, text: current.text.trim() });
      current = null;
    } else if (current) {
      current.text = current.text ? `${current.text}\n${line}` : line;
    }
  }
  if (current) out.push({ title: current.title, text: current.text.trim() });
  if (out.length === 0) throw new Error(`${file}: no ${locale} sections`);
  return out;
}

function required(meta: Record<string, string>, key: string, file: string) {
  const value = meta[key];
  if (!value) throw new Error(`${file}: missing "${key}"`);
  return value;
}

const shelfOrder: Category[] = [
  "History",
  "Language",
  "Culture",
  "Spirituality",
  "Homeland",
  "Diaspora",
];

export const records: ArticleRecord[] = Object.entries(rawFiles)
  .map(([file, source]) => {
    const { meta, lists, body } = frontmatter(source, file);
    const notes: Record<string, string> = {};
    for (const [key, value] of Object.entries(meta)) {
      if (key.startsWith("sourceNote.")) notes[key.slice("sourceNote.".length)] = value;
    }
    const record: ArticleRecord = {
      slug: required(meta, "slug", file),
      category: required(meta, "category", file) as Category,
      region: required(meta, "region", file),
      regionNe: meta["regionNe"] ?? required(meta, "region", file),
      period: required(meta, "period", file),
      periodNe: meta["periodNe"] ?? required(meta, "period", file),
      reviewed: required(meta, "reviewed", file),
      reviewedNe: meta["reviewedNe"] ?? required(meta, "reviewed", file),
      evidence: required(meta, "evidence", file) as Evidence,
      sourceIds: lists["sources"] ?? [],
      en: {
        title: required(meta, "titleEn", file),
        summary: required(meta, "summaryEn", file),
        sections: sections(body, "en", file),
        ...(meta["imageNote"] ? { imageNote: meta["imageNote"] } : {}),
      },
      ne: {
        title: meta["titleNe"] ?? required(meta, "titleEn", file),
        summary: meta["summaryNe"] ?? required(meta, "summaryEn", file),
        sections: sections(body, "ne", file),
        ...(meta["imageNoteNe"] ? { imageNote: meta["imageNoteNe"] } : {}),
      },
    };
    if (meta["image"]) record.image = meta["image"] as MediaId;
    if (Object.keys(notes).length > 0) record.sourceNotes = notes;
    return record;
  })
  .sort(
    (a, b) =>
      shelfOrder.indexOf(a.category) - shelfOrder.indexOf(b.category) ||
      a.en.title.localeCompare(b.en.title),
  );

export const recordsBySlug = new Map(records.map((record) => [record.slug, record]));

export const articles: Article[] = records.map((record) => ({
  id: record.slug,
  slug: record.slug,
  title: record.en.title,
  summary: record.en.summary,
  category: record.category,
  region: record.region,
  period: record.period,
  evidence: record.evidence,
  sourceIds: record.sourceIds,
  sections: record.en.sections,
  reviewed: record.reviewed,
  editorialStatus: "Published introduction",
  communityReview: "Not yet community reviewed",
  ...(record.image ? { image: record.image } : {}),
  ...(record.en.imageNote ? { imageNote: record.en.imageNote } : {}),
  ...(record.sourceNotes ? { sourceNotes: record.sourceNotes } : {}),
}));

const sourceFiles = Object.values(rawSources)[0];
if (!sourceFiles) throw new Error("content/sources.json not found");
export const sources: Source[] = sourceFiles;

export const categories: Category[] = shelfOrder;

export function searchArticles(
  query: string,
  category: string = "All",
  region: string = "All",
  evidence: string = "All",
) {
  const q = query.toLocaleLowerCase().trim();
  return articles.filter(
    (a) =>
      (category === "All" || a.category === category) &&
      (region === "All" || a.region === region) &&
      (evidence === "All" || a.evidence === evidence) &&
      (!q ||
        [a.title, a.summary, a.region, ...a.sections.map((s) => s.text)]
          .join(" ")
          .toLocaleLowerCase()
          .includes(q)),
  );
}
