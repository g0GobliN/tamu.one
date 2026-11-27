import { describe, expect, it } from "vitest";
import { articles, categories, searchArticles, sources } from "@/data/heritage";

describe("Researched heritage collection", () => {
  it("keeps article identifiers unique for discovery and article pages", () => {
    expect(new Set(articles.map((a) => a.slug)).size).toBe(articles.length);
    expect(new Set(articles.map((a) => a.id)).size).toBe(articles.length);
  });

  it("resolves every article reference and source locator", () => {
    const ids = new Set(sources.map((s) => s.id));
    expect(ids.size).toBe(sources.length);
    for (const article of articles) {
      expect(article.sourceIds.length).toBeGreaterThan(0);
      for (const id of article.sourceIds) expect(ids.has(id)).toBe(true);
      for (const id of Object.keys(article.sourceNotes ?? {})) {
        expect(article.sourceIds.includes(id)).toBe(true);
      }
    }
  });

  it("keeps research links as absolute secure URLs", () => {
    for (const source of sources) expect(new URL(source.url).protocol).toBe("https:");
  });

  it("finds the newly researched script through library search", () => {
    expect(searchArticles("Khema", "Language").map((a) => a.slug)).toContain("gurung-khema");
    expect(searchArticles("Khema", "Diaspora").map((a) => a.slug)).not.toContain("gurung-khema");
  });

  it("combines region and evidence filters on the new diaspora articles", () => {
    expect(
      searchArticles("", "Diaspora", "New York, United States", "Academic research").map(
        (a) => a.slug,
      ),
    ).toEqual(["gurungs-new-york"]);
    expect(
      searchArticles("", "Diaspora", "New York, United States", "Oral tradition & archaeology"),
    ).toEqual([]);
  });

  it("retains articles in every supported subject", () => {
    for (const category of categories)
      expect(searchArticles("", category).length).toBeGreaterThan(0);
  });
});
