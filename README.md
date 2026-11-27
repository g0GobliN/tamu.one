# TAMU

A heritage museum for the Gurung (Tamu) people: history, language, culture, geography and the
diaspora, presented as a multi-page reading experience with a sourced, searchable knowledge library.

## What's inside

- **Home** — an editorial introduction and five collection entry points.
- **Collections** — `history`, `culture`, `language`, `geography` and `diaspora`, each with a lead
  essay, key themes and the articles that cover them.
- **Library** — `library` and `library/<slug>` open the full article set, filtered by topic,
  category, region and evidence level.
- **Journey** — a continuous scroll through the museum.
- **Timeline** — dated events with their sources.
- **Archive** — photographs and media with creator, licence and original file credits.
- **Sources** — every reference used across the museum.
- **Oral history / Contribute** — how community knowledge can be added and corrected.
- **About** — what the project is, and how it handles evidence.

## Stack

- [TanStack Start](https://tanstack.com/start) + TanStack Router, React 19
- Vite 8, TypeScript, Tailwind CSS v4
- shadcn/ui (Radix primitives), Motion and GSAP for animation, three.js where 3D is used
- Vitest + Testing Library for tests

## Getting started

Requires [Bun](https://bun.sh) (the lockfile is `bun.lock`).

```sh
bun install
bun run dev      # http://localhost:3000
```

Other scripts:

```sh
bun run build      # production build
bun run preview    # preview the build
bun run test       # vitest
bun run typecheck  # tsc --noEmit
bun run lint       # eslint (includes prettier)
bun run format     # prettier --write
```

CI runs lint, typecheck, tests and a production build on every pull request.

## Project structure

```
src/
  components/museum/   museum UI (Home, TopicPage, Library, ArticlePage, Header, Footer, ...)
  components/ui/       shadcn/ui primitives
  data/                the content source: heritage.ts, heritage-more.ts, topics.ts, timeline.ts, media.ts
  lib/                 seo.ts (per-page head), error handling helpers, utils
  routes/              thin route files that set head() and render a museum component
  styles.css           theme tokens and museum classes
public/
  images/              photographs, all locally hosted
```

Content lives in `src/data`. A page rarely needs new markup: add an article to `heritage.ts` and it
appears in the library, in its subject page and in search, as long as its category matches.

## Editorial conventions

- Keep article `sourceNotes` keyed by source ID, and show them in both inline and standalone
  reading modes — readers need the same locators and access limitations either way.
- Evidence levels are shown, not implied. Say plainly where the record is thin.
- Subject pages read from one content source; do not duplicate article text into a page.

## Photography

All photographs in `public/images` are hosted locally and credited in the Archive and on the pages
that use them. They come from Wikimedia Commons under the licences listed in [`src/data/media.ts`](src/data/media.ts)
(CC BY, CC BY-SA 2.0/3.0/4.0) — attribution and share-alike terms apply to reuse. Each entry keeps
the creator, licence, licence URL and original file name.

## Contributing

Contributions go through an issue first, then a pull request — never a direct push to `main`.
[CONTRIBUTING.md](CONTRIBUTING.md) explains the workflow, the checks CI runs and the sourcing rules
for new content; [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) applies to every space around the project.

Please report vulnerabilities privately as described in [SECURITY.md](SECURITY.md), never in a
public issue.

## Licence

The application source code is licensed under the [Apache License 2.0](LICENSE).

Editorial content and photographs are not covered by that licence: photographs remain under the
Creative Commons licences credited in [`src/data/media.ts`](src/data/media.ts) (CC BY and CC BY-SA),
and article text is editorial content of the project with its sources cited per article. See
[NOTICE](NOTICE) for the exact scope.
