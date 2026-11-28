import { ArrowUpRight, BookOpen } from "lucide-react";
import { getMedia } from "@/data/media";
import type { LocalizedArticle } from "@/i18n/content";
import { useLocale, useUi } from "@/i18n";
import { localizeMedia } from "@/i18n/media-ne";
import { AppLink } from "./AppLink";

export function ArticleCard({ article: a }: { article: LocalizedArticle }) {
  const ui = useUi();
  const locale = useLocale();
  const item = a.image ? getMedia(a.image) : undefined;
  const photo = item ? localizeMedia(item, locale) : undefined;
  return (
    <AppLink
      to="/library/$slug"
      params={{ slug: a.slug }}
      className={`article-card ${photo ? "" : "text-card"}`}
    >
      {photo ? (
        <div className="card-image">
          <img src={photo.url} alt={photo.title} width={600} height={400} loading="lazy" />
          <span className="card-category">{a.category}</span>
        </div>
      ) : (
        <div className="card-topic">
          <BookOpen size={27} strokeWidth={1} />
          <span>{a.category}</span>
          <span className="research-label">{ui.common.researchCollection}</span>
        </div>
      )}
      <div className="card-body">
        <div className="card-kicker">
          {a.region}
          <ArrowUpRight size={17} />
        </div>
        <h3>{a.title}</h3>
        <p>{a.summary}</p>
        <div className="card-meta">
          {a.evidence}
          <span>{ui.common.readTime}</span>
        </div>
      </div>
    </AppLink>
  );
}
