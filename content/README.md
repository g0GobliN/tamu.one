# The TAMU content library

All the words on the site live here, not in the application code. The application
reads these files, so the collection can be edited, reviewed, translated or taken
away as ordinary documents without touching a line of TypeScript.

```
content/
├── library/
│   ├── history/         one Markdown file per history article
│   ├── language/        language and Tamu Kyi
│   ├── culture/         festivals, music, dress, food, ritual year
│   ├── spirituality/    pachyu, klepri, pye, death rites
│   ├── homeland/        places, land, villages
│   └── diaspora/        Gurkha service, Britain, India, Hong Kong, North America
├── collections/         the five collection pages (intro, lead, body, theme list)
├── timeline.json        every dated event, with English and Nepali text
└── sources.json         the bibliography (one entry per cited work)
```

## One article, both languages

Each article is one file named after its URL: `content/library/history/ghale-kings.md`
is served at `/library/ghale-kings` and `/ne/library/ghale-kings`.

```markdown
---
slug: ghale-kings
category: History
region: Gurung homeland
regionNe: गुरुङ मातृभूमि
period: Medieval
periodNe: मध्यकाल
reviewed: 28 November 2026
reviewedNe: २८ नोभेम्बर २०२६
evidence: Scholarly interpretation
image: mountains
imageNote: Caption shown under the photograph.
imageNoteNe: तस्बिरमुनि देखिने क्याप्सन।
sources:
  - evans
  - mumford
sourceNote.evans: Chapter on Kohla.
titleEn: ...
summaryEn: ...
titleNe: ...
summaryNe: ...
---

## [en] A section heading

The English paragraph.

## [ne] एउटा शीर्षक

नेपाली अनुच्छेद।
```

Rules the reader enforces:

- The front matter must start and end with `---`.
- Required keys: `slug`, `category`, `region`, `period`, `reviewed`, `evidence`,
  `sources`, `titleEn`, `summaryEn`.
- Every article needs at least one `## [en]` and one `## [ne]` section.
- Keep the two languages in the same order: the first English section is paired
  with the first Nepali section. Translators can work straight down the file.
- `category` is one of `History`, `Language`, `Culture`, `Spirituality`,
  `Homeland`, `Diaspora`, and the file belongs in the matching folder.
- `sources` holds ids from `content/sources.json`; the article page links them.
- `region`, `period` and `reviewed` are shown in English; `regionNe`, `periodNe`
  and `reviewedNe` are shown on `/ne`. Inline `—` and `:` in values are fine;
  only a new line ends a value.

## Adding an article

1. Create the Markdown file in the right shelf, copying the front matter above.
2. Give it a unique `slug` (lower-case, hyphens) and a `category`.
3. Write the sections in both languages.
4. Cite at least one entry from `sources.json`.

Nothing else is needed: the article appears in the library, its collection page,
search, the sitemap and both language routes automatically.

## Editing a collection page

`content/collections/history.json` (and `language`, `culture`, `geography`,
`diaspora`) holds the eyebrow, title, intro, lead, body paragraphs and theme
cards, each in `en` and `ne`. A theme card's `slug` must match an article slug;
the tests check this.

## Timeline and sources

`content/timeline.json` is an ordered list of events. Each has `year`, `sort`
(a sortable number, negative for deep time), `era`, the article `slugs` it links
to, and `en`/`ne` title and text.

`sources.json` is the bibliography: `id`, `author`, `title`, `year`, `url`,
`kind`. Ids are cited by articles, so adding a source means adding an entry here
and referencing its id in the article's `sources` list.

## Taking the content elsewhere

The Markdown files are complete documents: each contains the article in English
and Nepali with its metadata and citations. Copy a folder and it remains
readable in any editor, static-site generator or translation tool. The JSON files
are plain UTF-8 and can be imported anywhere without this project.
