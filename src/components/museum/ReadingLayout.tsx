import type { ReactNode } from "react";

import { useUi } from "@/i18n";

export interface TocGroup {
  id: string;
  title: string;
  items: { id: string; title: string }[];
}

export function ReadingLayout({ toc, children }: { toc: TocGroup[]; children: ReactNode }) {
  const ui = useUi();
  return (
    <div className="ency-layout">
      <nav className="ency-toc" aria-label={ui.article.contents}>
        <span className="eyebrow">{ui.article.contents}</span>
        <ol>
          {toc.map((g, i) => (
            <li key={g.id}>
              <a href={`#${g.id}`}>
                <span>{i + 1}</span>
                {g.title}
              </a>
              {g.items.length > 0 && (
                <ol>
                  {g.items.map((it, j) => (
                    <li key={it.id}>
                      <a href={`#${it.id}`}>
                        <span>
                          {i + 1}.{j + 1}
                        </span>
                        {it.title}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="ency-main">{children}</div>
    </div>
  );
}
