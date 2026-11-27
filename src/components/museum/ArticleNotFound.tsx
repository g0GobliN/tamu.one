import { useUi } from "@/i18n";
import { AppLink } from "./AppLink";

export function ArticleNotFound() {
  const ui = useUi();
  return (
    <main className="prose-page">
      <h1>{ui.article.notFoundTitle}</h1>
      <p>{ui.article.notFoundText}</p>
      <AppLink to="/library" className="text-link">
        {ui.article.notFoundBack}
      </AppLink>
    </main>
  );
}
