// Generates dist/client/sitemap.xml after `vite build`, so the sitemap can never
// drift from the app: every top-level route file becomes a URL, and every
// article in src/data/heritage.ts becomes a /library/<slug> URL.
//
// Run directly with: bun scripts/generate-sitemap.ts

import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { articles } from "../src/data/heritage";
import { absoluteUrl } from "../src/lib/seo";

const root = fileURLToPath(new URL("..", import.meta.url));
const routesDir = join(root, "src/routes");
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

  for (const article of articles) paths.add(`/library/${article.slug}`);

  return [...paths].sort();
}

const paths = await collectPaths();

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...paths.map((path) => `  <url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

await mkdir(join(root, "dist/client"), { recursive: true });
await writeFile(outFile, xml, "utf8");

console.log(`sitemap.xml: ${paths.length} URLs written to ${outFile}`);
