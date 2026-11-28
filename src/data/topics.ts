/**
 * Collection pages (History, Language, Culture, Geography, Diaspora). The text
 * lives in `content/collections/<key>.json`, with the English and Nepali
 * versions side by side, so intros and theme lists are edited like any other
 * content file.
 */
import type { Category } from "./heritage";
import type { MediaId } from "./media";

export interface TopicTheme {
  title: string;
  text: string;
  /** Slug of the library article this theme opens. Omitted when no article covers it yet. */
  slug?: string;
}

export interface TopicText {
  eyebrow: string;
  title: string;
  intro: string;
  lead: string;
  body: string[];
  themes: TopicTheme[];
}

export interface Topic extends TopicText {
  key: string;
  image?: MediaId;
  categories: Category[];
}

interface CollectionRecord {
  key: string;
  image?: MediaId;
  categories: Category[];
  en: TopicText;
  ne: TopicText;
}

export type TopicKey = "history" | "language" | "culture" | "geography" | "diaspora";

const rawCollections = import.meta.glob("/content/collections/*.json", {
  eager: true,
  import: "default",
}) as Record<string, CollectionRecord>;

const collectionRecords = Object.values(rawCollections);
const collectionByKey = new Map(
  collectionRecords.map((collection) => [collection.key, collection]),
);

function collection(key: TopicKey): CollectionRecord {
  const found = collectionByKey.get(key);
  if (!found) throw new Error(`content/collections/${key}.json is missing`);
  return found;
}

const keys: TopicKey[] = ["history", "language", "culture", "geography", "diaspora"];

export const topics = Object.fromEntries(
  keys.map((key) => {
    const record = collection(key);
    return [
      key,
      {
        key,
        ...record.en,
        categories: record.categories,
        ...(record.image ? { image: record.image } : {}),
      } satisfies Topic,
    ];
  }),
) as Record<TopicKey, Topic>;

export const topicTextNe = Object.fromEntries(
  keys.map((key) => [key, collection(key).ne]),
) as Record<TopicKey, TopicText>;
