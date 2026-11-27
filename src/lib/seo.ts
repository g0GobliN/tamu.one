export const SITE_URL = "https://tamu.one";

/** Absolute URL for a route path, so canonical and og:url are never relative. */
export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function pageHead(title: string, description: string, path: string) {
  const full = `${title} · TAMU`;
  const url = absoluteUrl(path);
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:url", content: url },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TAMU" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
