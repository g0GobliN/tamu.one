import { describe, expect, it } from "vitest";

import { articles } from "@/data/heritage";
import { topics } from "@/data/topics";

const slugs = new Set(articles.map((a) => a.slug));

describe("Topic pages", () => {
  for (const topic of Object.values(topics)) {
    it(`${topic.key}: every theme link points at an article that exists`, () => {
      const missing = topic.themes.filter((t) => t.slug && !slugs.has(t.slug)).map((t) => t.slug);
      expect(missing).toEqual([]);
    });

    it(`${topic.key}: at least one theme card opens an article`, () => {
      expect(topic.themes.some((t) => t.slug)).toBe(true);
    });

    it(`${topic.key}: the read-further list has articles`, () => {
      expect(articles.some((a) => (topic.categories as readonly string[]).includes(a.category))).toBe(true);
    });
  }
});
