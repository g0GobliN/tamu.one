/**
 * The book.
 *
 * The library is a shelf of 88 sourced articles; the book is the one order a
 * first-time reader should meet them in. Parts group the chapters the way a
 * printed history would, and every chapter is an ordinary library article, so
 * its prose, sources and translations stay in one place.
 *
 * Article pages read their position (chapter and part) from here, the cover
 * page (`/journey`) lists the contents from here, and collection pages sort
 * their chapters by it. Slugs that are not listed still render at their own
 * URL; they simply stand outside the book.
 */
export type BookPartKey =
  "record" | "who" | "origins" | "homeland" | "culture" | "language" | "beyond";

export interface BookPart {
  key: BookPartKey;
  slugs: string[];
}

export const bookParts: BookPart[] = [
  {
    key: "record",
    slugs: [
      "first-written-accounts",
      "origin-traditions-and-evidence",
      "ethnographers-of-the-gurungs",
    ],
  },
  { key: "who", slugs: ["gurung-and-tamu", "clans", "population"] },
  { key: "origins", slugs: ["ancient-origins", "migrations", "khola-sothar"] },
  { key: "homeland", slugs: ["ghandruk", "manang"] },
  {
    key: "culture",
    slugs: [
      "tamu-lhosar",
      "traditional-dress",
      "ritual-specialists",
      "pae-arghun",
      "ghatu",
      "rodhi",
    ],
  },
  { key: "language", slugs: ["tamu-kyi", "tamu-kyi-and-kinship"] },
  { key: "beyond", slugs: ["hill-economy-and-service", "gurkha-history", "united-kingdom"] },
];

/** Every chapter slug, in reading order. */
export const bookSlugs: string[] = bookParts.flatMap((part) => part.slugs);

export interface BookPlace {
  /** 1-based position in the whole book. */
  chapter: number;
  total: number;
  /** 0-based part index. */
  partIndex: number;
  part: BookPart;
}

/** Where a slug sits in the book, or undefined when it stands outside it. */
export function bookPlace(slug: string): BookPlace | undefined {
  const index = bookSlugs.indexOf(slug);
  if (index < 0) return undefined;
  let cursor = 0;
  for (let partIndex = 0; partIndex < bookParts.length; partIndex += 1) {
    const part = bookParts[partIndex]!;
    if (index < cursor + part.slugs.length) {
      return {
        chapter: index + 1,
        total: bookSlugs.length,
        partIndex,
        part,
      };
    }
    cursor += part.slugs.length;
  }
  return undefined;
}
