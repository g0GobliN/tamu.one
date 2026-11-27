import { createFileRoute, notFound } from "@tanstack/react-router";
import { articles } from "@/data/heritage";
import { ArticlePage } from "@/components/museum/ArticlePage";
import { ArticleNotFound } from "@/components/museum/ArticleNotFound";
import { getArticle } from "@/i18n/content";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/library/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a)
      return {
        meta: [{ title: "Article not found · TAMU" }, { name: "robots", content: "noindex" }],
      };
    const localized = getArticle(a, "en");
    const url = absoluteUrl(`/library/${a.slug}`);
    return {
      meta: [
        { title: `${localized.title} · TAMU` },
        { name: "description", content: localized.summary },
        { property: "og:url", content: url },
        { property: "og:title", content: localized.title },
        { property: "og:description", content: localized.summary },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "TAMU" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticleRoute,
});

function ArticleRoute() {
  const { article } = Route.useLoaderData();
  return <ArticlePage slug={article.slug} />;
}
