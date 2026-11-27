<div align="center">

# TAMU

### The living history of the Gurung people

**Not a Wikipedia article. Not a museum plaque. A place to actually read, wander and understand.**

**Live at [tamu.one](https://tamu.one)** · write to [hello@tamu.one](mailto:hello@tamu.one)

[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Built with TanStack Start](https://img.shields.io/badge/TanStack%20Start-React%2019-0f172a.svg)](https://tanstack.com/start)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

![Annapurna South and Machapuchare from Ghandruk, the view that opens the museum](public/images/mountains.jpg)

---

## Why TAMU exists

Most people meet Gurung culture as a footnote — a line about Gurkha soldiers, a festival photo with no
caption, a language described as "spoken by some communities in Nepal". The depth is there, but it's
scattered across oral tradition, old journal articles, family memory and hard-to-find books.

TAMU gathers it into one place that respects both the reader and the record.

Five collections — **History, Culture, Language, Geography, Diaspora** — open into a sourced
knowledge library, a timeline you can walk, a photographic archive where every image names its
creator and licence, and a journey meant to be read straight through on a quiet evening. Every claim
shows its evidence. Where scholars disagree, the disagreement is printed instead of smoothed over.

It's built to be read for an hour, not skimmed for ten seconds.

## What makes it different

**Evidence you can follow.** Articles aren't summaries of summaries. Each one carries its sources,
an honest note on how strong the record is, a last-reviewed date and a visible community-review line.
A claim with thin support says so.

**Reading, designed.** A museum pacing — full-bleed photography, Cormorant headings over Karla text,
continuous scroll on the subject pages, and a reading layout that stays out of the way. Inline and
standalone modes give you the same citations either way.

**Community knowledge, given standing.** A family account and a published paper are different kinds
of evidence, and both are labelled as what they are. The **Contribute** and **Oral history** pages
exist so that knowledge held by people, not archives, has somewhere to go.

**Photography that carries its paperwork.** Every image in `public/images` records creator, licence,
licence URL and original Commons file. Nothing is used without credit.

**Fast, static, private.** Server-rendered, no accounts, no tracking, no third-party requests for
content. The whole museum is content and code.

## Wander through it

| Path          | What you'll find                                                        |
| ------------- | ----------------------------------------------------------------------- |
| `/`           | The entrance: five collections, one landscape                           |
| `/journey`    | A continuous read from origins to the diaspora                          |
| `/history`    | Origins, Kohla, Ghale traditions, Gurkha service                        |
| `/culture`    | Ghatu, Rodhi, Pachyu and Ghyabre, Tamu Lhosar, weaving, oral literature |
| `/language`   | Tamu Kyi, its variation, Gurung Khema, documentation efforts            |
| `/geography`  | Ghandruk, Manang, Sikles, terraces and pastures, changing villages      |
| `/diaspora`   | Britain, Hong Kong, New York, India                                     |
| `/library`    | Every article, searchable by topic, region and evidence                 |
| `/timeline`   | Dated events, each tied to its sources                                  |
| `/archive`    | The photographic collection with full credits                           |
| `/sources`    | The complete reference list behind the museum                           |
| `/contribute` | Where your knowledge goes                                               |
| `/about`      | How the project handles evidence                                        |

## Run it locally

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev      # http://localhost:3000
```

```sh
bun run build      # production build
bun run preview    # preview the build
bun run test       # vitest
bun run typecheck  # tsc --noEmit
bun run lint       # eslint + prettier
bun run format     # prettier --write
```

CI runs lint, typecheck, tests and a production build on every pull request.

## How it's built

- [TanStack Start](https://tanstack.com/start) with TanStack Router and React 19 — SSR that stays out of the way
- Vite 8, TypeScript, Tailwind CSS v4
- shadcn/ui on Radix primitives, Motion and GSAP for the small amount of movement the pages need
- Vitest and Testing Library, because content sites deserve tests too

```
src/
  components/museum/   the museum itself: Home, TopicPage, Library, ArticlePage, Header, Footer
  components/ui/       shadcn/ui primitives
  data/                the content source: heritage.ts, heritage-more.ts, topics.ts, timeline.ts, media.ts
  lib/                 seo.ts (per-page head), error handling, utils
  routes/              thin routes that set head() and render a museum component
  styles.css           theme tokens and museum classes
public/images/         photographs, hosted locally
```

Adding an article to `src/data/heritage.ts` puts it in the library, its subject page and search at
once — one content source, no duplication.

## Support this project

This is the part where you decide whether the museum grows.

- **Star the repository.** It takes one second, and it's how the next person looking for Gurung
  history finds this instead of a dead end.
- **Share one article.** Send the Ghandruk piece to someone from Kaski, the Tamu Kyi piece to
  someone raising children abroad. Word of mouth is the whole distribution plan.
- **Open an issue with what's wrong.** A misread source, a village name spelled the old way, a
  photograph credited to the wrong person — corrections are the fastest way to improve a heritage
  project, and they're welcome.
- **Contribute knowledge.** If you hold a family account, a recording, a photograph you own, or a
  source nobody has cited yet, [CONTRIBUTING.md](CONTRIBUTING.md) explains how it gets in, with its
  standing preserved.
- **Contribute code.** Accessibility fixes, performance, new reading features, tests — every pull
  request starts from an approved issue, so nobody builds something that won't land.

You don't need permission to care about this. Open an issue and say hello.

## Contributing

Every change follows one path: **issue → discussion → pull request → review → merge.** Direct pushes
to `main` don't happen. The rules, the four checks CI runs and the sourcing standards are in
[CONTRIBUTING.md](CONTRIBUTING.md); [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) covers how we treat each
other here.

Found a vulnerability? Report it privately through [SECURITY.md](SECURITY.md) — never in a public
issue.

## Licence

Application code: [Apache License 2.0](LICENSE).

Photographs are **not** covered by that licence — they remain under the Creative Commons licences
recorded in [`src/data/media.ts`](src/data/media.ts) (CC BY and CC BY-SA), each with its creator and
original file. Article text is editorial content of the project with its sources cited per article.
[NOTICE](NOTICE) spells out the exact scope.

<div align="center">

**The mountains are still there. So is the knowledge.**

If this made you want to read one more page, give it a star — and then go read one more page.

</div>
