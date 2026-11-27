import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { articles } from "@/data/heritage";
import { ArticlePage } from "@/components/museum/ArticlePage";
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
    const url = absoluteUrl(`/library/${a.slug}`);
    return {
      meta: [
        { title: `${a.title} · TAMU` },
        { name: "description", content: a.summary },
        { property: "og:url", content: url },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.summary },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "TAMU" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <main className="prose-page">
      <h1>Article not found</h1>
      <p>This story isn't in the library yet.</p>
      <Link to="/library" className="text-link">
        Back to the library
      </Link>
    </main>
  ),
  component: ArticleRoute,
});
function ArticleRoute() {
  const { article } = Route.useLoaderData();
  return <ArticlePage article={article} />;
}
