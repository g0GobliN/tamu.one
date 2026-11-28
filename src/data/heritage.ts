/**
 * The published library. The content itself lives in `content/library/`, one
 * Markdown file per article; this module re-exports the parsed collection so
 * existing pages and tests keep a single, stable import.
 */
export { articles, categories, records, recordsBySlug, searchArticles, sources } from "./library";
export type {
  Article,
  ArticleRecord,
  ArticleSection,
  Category,
  Evidence,
  LocalizedText,
  Source,
} from "./library";
