// Generates dist/client/sitemap.xml after `vite build`, so the sitemap can never
// drift from the app: every top-level route file becomes a URL, and every
// Markdown file in content/library/ becomes a /library/<slug> URL.
//
// Each URL is emitted in every supported language, with hreflang alternates.
//
// Run directly with: node scripts/generate-sitemap.ts

import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { locales, pathFor } from "../src/i18n/locales";
import { absoluteUrl } from "../src/lib/seo";

const root = fileURLToPath(new URL("..", import.meta.url));
const routesDir = join(root, "src/routes");
const libraryDir = join(root, "content/library");

/** Slugs are read from the article files, so the sitemap needs no app code. */
async function articleSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  for (const shelf of await readdir(libraryDir)) {
    for (const file of await readdir(join(libraryDir, shelf))) {
      if (!file.endsWith(".md")) continue;
      const source = await readFile(join(libraryDir, shelf, file), "utf8");
      const match = source.match(/^slug:\s*(.+)$/m);
      slugs.push(match?.[1]?.trim() ?? file.slice(0, -".md".length));
    }
  }
  return slugs;
}
const outFile = join(root, "dist/client/sitemap.xml");

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function collectPaths() {
  const files = await readdir(routesDir);
  const paths = new Set<string>(["/"]);

  for (const file of files) {
    if (!file.endsWith(".tsx")) continue;
    const stem = file.slice(0, -".tsx".length);
    // __root is the layout; files with $ are expanded from data below.
    if (stem.startsWith("__") || stem.includes("$")) continue;
    if (stem === "index") continue;
    paths.add(`/${stem.replace(/\.index$/, "")}`);
  }

  for (const slug of await articleSlugs()) paths.add(`/library/${slug}`);

  return [...paths].sort();
}

function alternates(path: string) {
  return [
    ...locales.map(
      (code) =>
        `    <xhtml:link rel="alternate" hreflang="${code}" href="${escapeXml(
          absoluteUrl(pathFor(code, path)),
        )}"/>`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
      absoluteUrl(pathFor("en", path)),
    )}"/>`,
  ].join("\n");
}

const paths = await collectPaths();

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...paths.flatMap((path) =>
    locales.map((code) =>
      [
        "  <url>",
        `    <loc>${escapeXml(absoluteUrl(pathFor(code, path)))}</loc>`,
        alternates(path),
        "  </url>",
      ].join("\n"),
    ),
  ),
  "</urlset>",
  "",
].join("\n");

await mkdir(join(root, "dist/client"), { recursive: true });
await writeFile(outFile, xml, "utf8");

console.log(`sitemap.xml: ${paths.length * locales.length} URLs written to ${outFile}`);
