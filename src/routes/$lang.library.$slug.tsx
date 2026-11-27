import { createFileRoute, notFound } from "@tanstack/react-router";

import { ArticleNotFound } from "@/components/museum/ArticleNotFound";
import { ArticlePage } from "@/components/museum/ArticlePage";
import { articles } from "@/data/heritage";
import { getUi, localeFromParams } from "@/i18n";
import { getArticle } from "@/i18n/content";
import { pathFor } from "@/i18n/locales";
import { assertLocale } from "@/i18n/route-head";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/$lang/library/$slug")({
  beforeLoad: ({ params }) => assertLocale(params),
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    const locale = localeFromParams(params);
    const article = loaderData?.article;
    if (!article)
      return {
        meta: [
          { title: `${getUi(locale).seo.articleNotFound} · TAMU` },
          { name: "robots", content: "noindex" },
        ],
      };
    const localized = getArticle(article, locale);
    const url = absoluteUrl(pathFor(locale, `/library/${article.slug}`));
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
