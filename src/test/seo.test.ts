import { describe, expect, it } from "vitest";
import { localeHead } from "@/i18n/route-head";
import { pageHead } from "@/lib/seo";

function canonical(head: ReturnType<typeof pageHead>) {
  return head.links.find((l) => l.rel === "canonical")?.href;
}

function alternate(head: ReturnType<typeof pageHead>, hrefLang: string) {
  return head.links.find((l) => l.rel === "alternate" && l.hrefLang === hrefLang)?.href;
}

describe("page head URLs", () => {
  it("keeps English canonical URLs at the root and points hreflang at each language", () => {
    const head = pageHead("History", "desc", "/history");
    expect(canonical(head)).toBe("https://tamu.one/history");
    expect(alternate(head, "en")).toBe("https://tamu.one/history");
    expect(alternate(head, "ne")).toBe("https://tamu.one/ne/history");
    expect(alternate(head, "x-default")).toBe("https://tamu.one/history");
  });

  it("prefixes a Nepali canonical exactly once", () => {
    const head = localeHead({ lang: "ne" }, "history", "/history");
    expect(canonical(head)).toBe("https://tamu.one/ne/history");
    expect(alternate(head, "en")).toBe("https://tamu.one/history");
    expect(alternate(head, "ne")).toBe("https://tamu.one/ne/history");
    expect(head.meta.find((m) => "property" in m && m.property === "og:url")).toMatchObject({
      content: "https://tamu.one/ne/history",
    });
  });

  it("prefixes the Nepali home page once", () => {
    const head = localeHead({ lang: "ne" }, "home", "/");
    expect(canonical(head)).toBe("https://tamu.one/ne");
    expect(alternate(head, "en")).toBe("https://tamu.one/");
  });

  it("leaves English locale heads unprefixed", () => {
    const head = localeHead({ lang: "en" }, "history", "/history");
    expect(canonical(head)).toBe("https://tamu.one/history");
    expect(alternate(head, "ne")).toBe("https://tamu.one/ne/history");
  });
});
