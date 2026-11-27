# Contributing to TAMU

Thanks for helping the museum grow. This project curates sourced knowledge about the Gurung
(Tamu) people, so care with evidence matters as much as care with code.

## The workflow: issue → pull request → merge

Every change goes through the same path. **No one pushes to `main` directly.**

1. **Open an issue first.** Bug, content correction, new article, design change, dependency
   update — everything starts as an issue. Describe what is wrong or what you want to add and,
   where it applies, which sources support it.
2. **Wait for a decision.** A maintainer labels the issue and either approves it, asks for more
   detail, or explains why it is out of scope. This keeps work aligned and avoids wasted effort.
   Tiny fixes (a typo, a broken link) can skip waiting, but still need the issue.
3. **Open a pull request.** Reference the issue in the description with `Closes #123` so the two
   are linked. Keep one logical change per pull request.
4. **Pass the checks.** CI runs lint, typecheck, tests and a production build on every pull
   request. A pull request is not reviewed until it is green.
5. **Review and merge.** A maintainer reviews, requests changes if needed, and merges once it is
   approved and green. Merged work lands on `main`.

Unlinked pull requests are closed with a request to open an issue first.

## Working locally

Requires [Bun](https://bun.sh).

```sh
git clone <repository-url>
cd <repository-name>
bun install
bun run dev      # http://localhost:3000
```

Before you push, run what CI runs:

```sh
bun run lint
bun run typecheck
bun run test
bun run build
```

`bun run format` applies the project's Prettier style.

## Branch names and commits

- Branch from `main`, name it after the issue: `fix/123-broken-source-link`,
  `content/147-ghandruk-village-life`.
- Write commit subjects in the imperative mood and keep them short
  (`Add Ghandruk terraces article`, not `added stuff`).
- Reference the issue in the pull request, not in every commit.

## Content contributions

The museum's credibility rests on traceable sources.

- Add articles to `src/data/heritage.ts` (or `heritage-more.ts` for the extended set). A new
  article appears in the library, in its subject page and in search automatically once its
  `category` matches the topic.
- Every article needs an `evidence` note that is honest about what the record can and cannot
  support. Where sources disagree, say so in the text instead of picking a side silently.
- Cite real, checkable sources. Add the source to `src/data/heritage.ts` sources and reference it
  by ID from `sourceIds`. Keep `sourceNotes` keyed by source ID — they must appear in both the
  inline and standalone reading modes.
- Do not invent dates, names, place names or quotations. If a claim has no source yet, mark it as
  such or leave it out.
- Photographs must be free to reuse with attribution. Record the creator, licence, licence URL and
  original file in `src/data/media.ts`, and put the file in `public/images`. Do not add images
  whose licence you cannot show.
- Respect community knowledge: where a family or village account differs from published
  scholarship, present both with their standing rather than as error and correction.

## Code contributions

- Routes in `src/routes` stay thin: they set `head()` through `src/lib/seo.ts` `pageHead` and render
  a component from `src/components/museum`.
- Museum UI lives in `src/components/museum` and uses the semantic classes and theme tokens in
  `src/styles.css`. Reuse `src/components/ui` primitives instead of adding new UI libraries.
- Keep content in `src/data`; do not duplicate article text into a page or component.
- Add or update a test when behaviour changes (Vitest suites live in `src/test`).
- Accessibility and mobile layout are part of "done": headings in order, meaningful `alt` text,
  keyboard-reachable controls, readable contrast.

## Reporting security issues

Never open a public issue for a vulnerability. See [SECURITY.md](SECURITY.md).

## Code of conduct

By taking part you agree to the [Code of Conduct](CODE_OF_CONDUCT.md). Report unacceptable
behaviour through the channels described there.
