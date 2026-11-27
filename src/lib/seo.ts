export function pageHead(title: string, description: string) {
  const full = `${title} · TAMU`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TAMU" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
