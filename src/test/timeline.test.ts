import { describe, expect, it } from "vitest";
import { articles } from "@/data/heritage";
import { timeline } from "@/data/timeline";
describe("timeline", () => {
  it("links every event only to existing stories", () => {
    const slugs = new Set(articles.map((a) => a.slug));
    for (const e of timeline) for (const s of e.slugs) expect(slugs.has(s), s).toBe(true);
  });
  it("has unique dates for ordering", () => {
    expect(new Set(timeline.map((e) => e.sort)).size).toBe(timeline.length);
  });
});
