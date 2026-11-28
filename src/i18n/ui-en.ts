/**
 * Every piece of interface text on the site, with English as the source of truth.
 * The Nepali and Japanese dictionaries mirror this object key for key, so a missing
 * translation is a type error rather than a silent fallback.
 */
export const en = {
  brand: { small: "A LIVING HERITAGE" },
  nav: {
    journey: "The Journey",
    timeline: "Timeline",
    history: "History",
    language: "Language",
    culture: "Culture",
    homeland: "Homeland",
    diaspora: "Diaspora",
    archive: "The Archive",
    help: "Help",
    mainLabel: "Main navigation",
    mobileLabel: "Mobile navigation",
    search: "Search the archive",
    contribute: "Contribute",
    open: "Open navigation",
    close: "Close navigation",
  },
  lang: {
    label: "Language",
    switchTo: "Read this page in",
  },
  common: {
    readTime: "4 min read",
    researchCollection: "RESEARCH COLLECTION",
    allArticles: "All articles",
    allCollections: "All collections",
    preparing: "Articles for this collection are being prepared.",
  },
  footer: {
    blurb:
      "Thousands of years of stories. Countless generations. One living heritage — kept in the open, for anyone who wants to read it.",
    cta: "Help preserve our heritage",
    explore: "Explore",
    project: "The project",
    touch: "Stay in touch",
    journey: "The Journey",
    timeline: "Timeline",
    library: "Knowledge library",
    archive: "The Archive",
    about: "About TAMU",
    help: "Help & docs",
    contribute: "Contribute",
    sources: "Sources & credits",
    credits: "Photography credits",
    email: "Email",
    copyright: "An independent heritage archive, built in the open",
    privacy: "Privacy",
    terms: "Terms",
    oralHistories: "Oral histories",
  },
  home: {
    eyebrow: "THE LIVING HISTORY OF THE GURUNG PEOPLE",
    title: "TAMU",
    taglineA: "Our roots run deeper",
    taglineB: "than the mountains.",
    ledeA: "A journey through the history, language and living",
    ledeB: "heritage of the Gurung people.",
    begin: "Begin the journey",
    explore: "Explore the archive",
    region: "ANNAPURNA REGION · NEPAL",
    discover: "DISCOVER OUR HERITAGE",
    photoCredit: "PHOTO: SUDAN SHRESTHA · CC BY-SA 3.0",
    heroAlt: "Annapurna South and Machapuchare viewed from Ghandruk",
    introEyebrow: "REMEMBERING. UNDERSTANDING. BELONGING.",
    introTitleA: "Not just a history.",
    introTitleB: "A heritage that lives on.",
    introP1:
      "From the villages beneath Annapurna to communities around the world, the Tamu story is carried in our language, our traditions and the memories of our people.",
    introP2:
      "TAMU brings those threads together—an open, growing archive for the generations to come.",
    aboutLink: "Discover the story behind TAMU",
    collectionsEyebrow: "MANY THREADS. ONE HERITAGE.",
    collectionsTitle: "Explore our world",
    collectionWord: "COLLECTION",
    collectionSubtitles: [
      "Origins, memory & history",
      "Traditions across generations",
      "Villages, valleys & landscapes",
    ],
    discovery: {
      language: { small: "TAMU KYI", title: "The language of our people" },
      oral: { small: "ORAL HISTORY", title: "Stories from our elders" },
      diaspora: { small: "BEYOND THE HOMELAND", title: "One heritage, a world of lives" },
    },
    readingEyebrow: "FROM THE KNOWLEDGE LIBRARY",
    readingTitle: "Stories worth discovering",
    browse: "Browse the library",
    pathEyebrow: "A PATH THROUGH THE ARCHIVE",
    pathTitle: "Start at the beginning",
    pathIntro:
      "New to the archive? These chapters are written to be read in order — a single story that begins with the earliest written record and carries on to the present.",
    pathCta: "Begin the reading path",
    communityEyebrow: "OUR HERITAGE IS A SHARED RESPONSIBILITY",
    communityTitleA: "Every memory is a thread.",
    communityTitleB: "Every voice belongs.",
    communityP:
      "Help preserve a story, share a photograph, or bring your knowledge to the archive.",
    communityCta: "Become part of the story",
    exploreAria: "Explore collections",
  },
  topic: {
    readBelow: "Read below",
    inCollection: "In this collection",
  },
  library: {
    eyebrow: "TAMU · CONNECTED KNOWLEDGE",
    title: "The knowledge library",
    intro: "History, language, places and people. Follow a thread. Discover a connection.",
    archiveTitle: "The Archive",
    archiveIntro:
      "Every article in the collection, in one searchable place. Filter by subject, region and type of evidence.",
    searchLabel: "Search articles",
    searchPlaceholder: "Search history, places, traditions…",
    clearSearch: "Clear search",
    filters: "Filters",
    region: "Region",
    evidence: "Evidence",
    all: "All",
    allSubjects: "All subjects",
    reset: "Reset filters",
    resultOne: "article",
    resultMany: "articles",
    sourced: "· Sourced introductions",
    sortBy: "Sort by",
    collectionOrder: "Collection order",
    titleAZ: "Title A–Z",
    emptyTitle: "No matching articles",
    emptyText: "Try another subject or clear your filters.",
    clearAll: "Clear all filters",
    note: "A growing collection. Each introduction identifies its sources, evidentiary limits and community-review status.",
    categoriesLabel: "Article categories",
    sortLabel: "Sort articles",
    startEyebrow: "NEW HERE? START HERE",
    startTitle: "Read the archive as one story",
    startIntro:
      "The library is a path, not a shelf. These opening chapters follow the Tamu story from the first written records to the villages and festivals of the present, and each one picks up where the last left off.",
    startCta: "Begin with the first chapter",
    foundIn: "Found in",
  },
  article: {
    back: "Knowledge library",
    introduction: "Research introduction",
    share: "Share",
    copied: "Link copied",
    inThis: "IN THIS CHAPTER",
    contents: "CONTENTS",
    chapter: "Chapter",
    minuteRead: "min read",
    previous: "Previous chapter",
    searchInChapter: "Search this chapter",
    searchPlaceholder: "A name, a place, a word…",
    searchEmpty: "Nothing in this chapter matches that yet.",
    matchOne: "passage",
    matchMany: "passages",
    nextEyebrow: "WHERE THE STORY GOES NEXT",
    readNext: "Read the next chapter",
    references: "References",
    transparency: "Research transparency",
    lastReviewed: "Last reviewed:",
    evidenceEyebrow: "FOLLOW THE EVIDENCE",
    sourcesTitle: "Sources & further reading",
    citationMissing: "Page-level claim citations not yet supplied",
    correctionTitle: "Heritage grows through conversation.",
    correctionText: "Know a different local account, or spotted something that needs correcting?",
    correctionCta: "Share your knowledge",
    continue: "Continue exploring",
    notFoundTitle: "Article not found",
    notFoundText: "This story isn't in the library yet.",
    notFoundBack: "Back to the library",
    englishOnly:
      "The full text of this essay is in English while its translation is being prepared.",
    seeEnglish: "Read the English text",
    subject: "Subject",
    region: "Region",
    period: "Period",
    evidence: "Evidence",
    openPage: "Open as its own page",
    published: "Published introduction",
    communityReview: "Not yet community reviewed",
  },
  timeline: {
    eyebrow: "EXPLORE BY DATE",
    title: "Timeline of Gurung history",
    intro: "Pick a period, tap any moment to learn more, and open the stories behind it.",
    allPeriods: "All periods",
    periodsLabel: "Periods",
    related: "RELATED STORIES",
  },
  journey: {
    eyebrow: "A GUIDED PATH",
    title: "The Journey",
    intro:
      "The whole Tamu story in six chapters. Read it from start to finish as one continuous story.",
    chapters: [
      {
        title: "Who are the Tamu?",
        intro:
          "Begin with our names, our clans and our numbers — who the Gurung people are, in Nepal and around the world.",
      },
      {
        title: "Where we come from",
        intro:
          "Origins, migrations and the ancestral places remembered in ritual and investigated by researchers.",
      },
      {
        title: "The places we call home",
        intro:
          "Villages and valleys beneath Annapurna, Lamjung and Manang — the landscapes that shaped our way of life.",
      },
      {
        title: "A living culture",
        intro:
          "Festivals, dress, ritual specialists and performance — traditions practised and renewed today.",
      },
      {
        title: "Our language",
        intro:
          "Tamu Kyi — its relationships, its village voices, and the work of keeping it alive.",
      },
      {
        title: "Beyond the mountains",
        intro:
          "Gurkha service, migration and new communities — the Tamu story carried across the world.",
      },
    ],
  },
  sources: {
    eyebrow: "FOLLOW THE EVIDENCE",
    title: "Sources & credits",
    research: "Research",
    photographs: "Photographs",
    commons: "Wikimedia Commons",
  },
  credits: {
    eyebrow: "PHOTOGRAPHY",
    title: "Every photograph, and its paperwork",
    lede: "photographs carry this museum. Each one is the work of a named photographer and is used under a Creative Commons licence — credited here, on the pages that use it, and in the archive. If you reuse an image, credit the photographer and follow the licence linked beneath it.",
    count: "12",
    howTitle: "How the licences work",
    howA: "asks for attribution only.",
    howB: "asks for attribution and that adaptations be shared under the same licence.",
    howRest:
      "None of these images may be relicensed or sold as your own work. The Apache 2.0 licence that covers this project's code does not cover these photographs.",
    terms: "Full terms",
    foot: "Most of these files come from Wikimedia Commons, where the original description pages hold the full licence deed and revision history. Spot a missing or wrong credit?",
    footCta: "Tell us",
  },
  oral: {
    eyebrow: "ORAL HISTORY",
    title: "Stories from our elders",
    p1: "Much of the Tamu past has never been written down. It lives in the voices of grandparents, in songs sung at festivals and in stories told around the hearth.",
    p2: "This collection is just beginning. We are gathering recorded memories — of village life, migration, ritual and change — with the consent and guidance of the people who share them.",
    lookingForTitle: "What we're looking for",
    lookingFor: [
      "Memories of growing up in the villages",
      "Stories of leaving home and building new lives",
      "Songs, sayings and words in Tamu Kyi",
      "Accounts of festivals, rituals and community events",
      "The ordinary texture of a life: food, work, weather, neighbours",
    ],
    howTitle: "How a recording becomes part of the museum",
    howText:
      "Send the file and the story behind it. Nothing is published without agreement, the person recorded can stay anonymous or be named exactly as they wish, and every recording keeps the name of who spoke, who recorded it and when.",
    share: "Share a story",
    advice: "Recording advice",
  },
  about: {
    eyebrow: "THE STORY BEHIND TAMU",
    title: "Remembering, together.",
    lede: "TAMU is an independent archive of the history, language and living culture of the Gurung (Tamu) people — written to be read, sourced so it can be checked, and kept in the open so it can keep growing.",
    begin: "Begin the journey",
    browse: "Browse the library",
    principlesEyebrow: "HOW WE WORK",
    principlesTitle: "Four rules we don't bend",
    principles: [
      {
        title: "Sources on the page",
        text: "Every article names its sources, the kind of evidence behind them and the date it was last reviewed. Nothing asks you to take our word for it.",
      },
      {
        title: "Uncertainty, named",
        text: "Where the record is thin, or scholars disagree, the article says so. A well-argued account of what remains unknown belongs in a museum.",
      },
      {
        title: "Sacred knowledge, respected",
        text: "Ritual and community knowledge is presented as it is held — not as spectacle, not flattened into a bullet point, not sold.",
      },
      {
        title: "Corrections from the community",
        text: "A village name spelled another way, a family account that differs, a photograph credited to the wrong person — those corrections are the point.",
      },
    ],
    letterEyebrow: "A LETTER FROM THE FOUNDER",
    letterTitle: "I built this because we were beginning to forget.",
    letterParagraphs: [
      "My name is Vishal Gurung. I am a Gurung — a Tamu — and I am the person who builds and maintains this site. TAMU did not begin as a project plan or an institutional grant. It began with a small, uncomfortable realisation: the things I had grown up hearing were no longer being passed on in the same way, and the generation after mine was arriving at adulthood with questions that nobody had a written answer to.",
      "In many Gurung homes the past arrives in fragments. A grandfather names a village that no longer appears on a map; a song is sung at a funeral and then not sung again for years; a genealogy survives on a sheet of paper that nobody under thirty can read. Then the elders who carried those fragments die, and what remains is a handful of dates copied from a school textbook and a vague sense that we came from somewhere in the north.",
      "Language is the clearest measure of the loss. Tamu Kyi is being replaced by Nepali and English, not only in the cities but increasingly in the villages, and each generation keeps fewer of its words. When a language goes quiet, the words for kinship, for ritual and for the landscape go with it. Translation can give you the meaning of a word, but it cannot give you the world that word belonged to.",
      "The second loss is harder to see. A young Gurung who wants to know where the clan names come from, or what the Ghale kings actually ruled, goes online and finds the same three paragraphs copied from site to site — often without a source, sometimes confidently wrong. The serious scholarship exists: Bista, Pignède, Höfer, Messerschmidt, Mumford, Regmi, the regimental histories. But it is scattered across libraries, out of print, written mostly in English and expensive to obtain. A student in Pokhara, a Gurkha family in Aldershot and a teenager in Hong Kong should not have to rebuild a heritage out of broken links.",
      "So this site is an attempt to put the record in one place, in both languages, and to show its working. I write in English and in Nepali because a heritage explained only in the language of the academy is a heritage only half returned; the Nepali pages are written as Nepali prose, not as a summary of the English. Where the sources disagree, the page says so. Where nothing is known, the page says nothing rather than inventing a name, a date or an event.",
      "It is also deliberately unfinished. TAMU is independent and self-funded: no advertising, no paywalls, no tracking cookies — only a cookieless count of which pages are read — and no institution deciding what may be said. It is meant to be corrected by the people it describes — a village name spelled properly, a family account that differs from the book, a photograph credited to the right person. I do not want this to be the final word on anything. I want it to be the first place a young Tamu looks, and the place where the sources are waiting at the bottom of the page.",
      "If you are Gurung and have been meaning to ask an elder about a village, a clan or a song, do it this year. If you are not Gurung and have come to understand your neighbours, welcome — the archive is for you as well. What is written here is not mine. It belongs to the people who lived it, and it is being kept for the people who come next.",
    ],
    founderName: "Vishal Gurung",
    founderRole: "Founder and maintainer of TAMU",
    founderLinks: "Find me here",
    stakesEyebrow: "WHY IT MATTERS NOW",
    stakesTitle: "Four things this archive is trying to hold",
    stakes: [
      {
        title: "A generation is asking",
        text: "The questions arrive in messages and in person: what is my clan, where did we come from, why do we do this at a funeral. They deserve an answer with a source attached, not a copied paragraph.",
      },
      {
        title: "The language is thinning",
        text: "Every year fewer children speak Tamu Kyi at home. A language disappears quietly, one household at a time, and with it go the words for kinship, ritual and landscape that no translation fully carries.",
      },
      {
        title: "The sources are scattered",
        text: "The books that document Gurung history are out of print, expensive and mostly in English. A student, a diaspora family or a curious neighbour should not need a university library to reach them.",
      },
      {
        title: "Memory needs a place",
        text: "Oral accounts survive only while someone records them, names them and credits the person who told them. This site is a place where a family can put what it knows before it is lost.",
      },
    ],
    recordEyebrow: "THE RECORD",
    recordTitle: "Open, credited, correctable",
    recordP1:
      "The museum is an ordinary website with an uncommon standard: no accounts, no tracking cookies, no paywall; visits are counted without cookies. Photographs are hosted here and carry their creator, licence and original file. Article text and imagery are reviewed with the community rather than about them.",
    recordP2:
      "The source code is public under the Apache License 2.0, and every change to it moves through an issue and a pull request — the same way corrections to the content do.",
    maintained: "Built and maintained by",
    facts: [
      { label: "Collections", value: "Five" },
      { label: "Photographs", value: "All credited" },
      { label: "Code licence", value: "Apache 2.0" },
      { label: "Accounts, ads, tracking cookies", value: "None" },
    ],
    contactEyebrow: "GET INVOLVED",
    contactTitle: "Heritage grows through conversation.",
    contactP:
      "Share a memory, a photograph, a source nobody has cited yet, or a correction to something we got wrong. Every contribution is credited, and nothing is published without asking.",
    contribute: "Contribute to the museum",
    helpNote: "New here?",
    helpLink: "Read how the museum works",
    helpRest: "— sourcing, citing, accessibility and contribution rules in one place.",
  },
  help: {
    eyebrow: "HELP & DOCUMENTATION",
    title: "How the museum works",
    lede: "Where to start, how the evidence is handled, what you may reuse, and how to tell us something is wrong. Everything a reader or a contributor needs, in one page.",
    startEyebrow: "START HERE",
    startTitle: "Four ways in",
    cards: [
      {
        title: "Start with the journey",
        text: "The Journey reads continuously from origins to the diaspora — the closest thing to walking the museum in order.",
        label: "Open the journey",
      },
      {
        title: "Look something up",
        text: "The knowledge library filters every article by topic, category, region and evidence level, so you can go straight to Ghandruk or Tamu Kyi.",
        label: "Open the library",
      },
      {
        title: "Follow the sources",
        text: "Each article ends with its references. The sources page collects every one of them in a single list you can work from.",
        label: "Open the sources",
      },
      {
        title: "Read it your way",
        text: "Pages work with the keyboard, respect reduced-motion settings and stay readable on a phone. If something is hard to use, tell us and it gets fixed.",
        label: "Report a problem",
      },
    ],
    faqEyebrow: "QUESTIONS",
    faqTitle: "Asked often enough to answer here",
    faqs: [
      {
        question: "Can I cite TAMU in my work?",
        answer:
          "Use it as a map, not as the destination. Quote the museum if you find its framing useful, but cite the underlying source it points to — author, year and title are listed in every article. The library's articles state how strong that evidence is so you know what you are citing.",
      },
      {
        question: "Can I reuse the photographs?",
        answer:
          "Each photograph keeps its creator, licence and licence URL, listed on the article, in the archive and in src/data/media.ts. CC BY and CC BY-SA terms apply — credit the photographer, link the licence, and share adaptations under the same licence where the licence says so.",
      },
      {
        question: "I spotted an error. What should I do?",
        answer:
          "Open a content correction issue or write to us with the article, the sentence and a source for the correction. Community and family accounts are welcome and are labelled as such — the museum is meant to be corrected.",
      },
      {
        question: "Who runs the museum?",
        answer:
          "It is an independent project, not an institution. Content, design and code are maintained in the open; the source code is public under the Apache License 2.0, and every change goes through an issue and a pull request.",
      },
      {
        question: "Is anything tracked or sold?",
        answer:
          "No accounts, no advertising, no tracking cookies, and nothing is sold. Visits are counted with Cloudflare's cookieless, aggregate analytics — no profiles, no cross-site tracking. The privacy page explains exactly what is measured and how to have your contribution removed.",
      },
      {
        question: "Can I contribute a recording or a family photograph?",
        answer:
          "Yes — that is the most valuable kind of contribution. Send it with the story you want told, the names and places as you want them written, and how you would like to be credited. Nothing is published without your agreement.",
      },
    ],
    docsEyebrow: "FOR CONTRIBUTORS",
    docsTitle: "Project documents",
    docs: [
      {
        title: "CONTRIBUTING.md",
        text: "The issue → pull request → merge workflow, the checks CI runs and the sourcing rules for new articles.",
      },
      {
        title: "CODE_OF_CONDUCT.md",
        text: "Contributor Covenant 2.1 — how people are expected to treat each other in issues, pull requests and messages.",
      },
      {
        title: "SECURITY.md",
        text: "Private reporting for vulnerabilities. Never open a public issue for a security problem.",
      },
      {
        title: "LICENSE and NOTICE",
        text: "Apache 2.0 for the code, and the exact scope of what that licence does not cover: article text and photographs.",
      },
    ],
    docsNote:
      "All of them live at the root of the repository, alongside the code. Every change to the project follows the same path: an issue, then a pull request, then review and merge.",
    contactEyebrow: "NOT ANSWERED HERE?",
    contactTitle: "Write to us",
    contactP:
      "A correction, a recording, a photograph, a source nobody has cited yet — or a page that would not load. There is no form and no queue, just a person reading it.",
    security:
      "For a security problem, use the private reporting route in SECURITY.md rather than a public issue.",
    privacy: "Read the privacy policy",
    tryAgain: "Try again",
  },
  contribute: {
    eyebrow: "A SHARED RESPONSIBILITY",
    title: "Become part of the story",
    lede1:
      "Every memory is a thread. A family story, a photograph in a drawer, one word of Tamu Kyi written down for the first time, a correction to something you read here — this museum gets better every time someone sends one.",
    lede2:
      "Nothing below is a form that swallows your message. Each one opens a real email, already written, so all you have to do is fill in what you know and press send.",
    choose: "Choose what to share",
    howItWorks: "How it works",
    recordingAdvice: "Recording advice",
    waysEyebrow: "FIVE WAYS IN",
    waysTitle: "What would you like to share?",
    types: [
      {
        title: "A memory or family story",
        summary:
          "The part of the record that never reached a book: village life, a journey, a ritual, a person worth remembering.",
        includes: [
          "Who is telling it, and how you want to be credited",
          "Where and roughly when it happened",
          "As much or as little detail as you want to give",
          "Anything that must stay private",
        ],
        subject: "TAMU contribution: a memory or story",
        body: `Who is telling the story (and how you would like to be credited):

Where and roughly when it happened (village, district, decade):

The story:


Anything that should NOT be published (names, places, ritual detail, family matters):

May we quote you?
  [ ] yes, with my name
  [ ] yes, but without my name
  [ ] ask me before publishing

Anything else we should know:
`,
      },
      {
        title: "A photograph",
        summary:
          "A village, a festival, a family, a house, a face with permission — images are the fastest way to make a page feel real.",
        includes: [
          "What the photograph shows, and when",
          "Who took it, and who holds the rights",
          "How you want to be credited",
          "The file itself, at the largest size you have",
        ],
        subject: "TAMU contribution: a photograph",
        body: `What the photograph shows:

Who took it, and when (if known):

Do you own the photograph or hold the rights? If not, who does?

How would you like to be credited?

People in the photograph who should be named, or deliberately not named:

(Please attach the image to this email — the original file if you have it.)
`,
      },
      {
        title: "A correction",
        summary:
          "A misread source, a village name spelled the old way, a date that is wrong, a photograph credited to the wrong person.",
        includes: [
          "The page and the sentence that is wrong",
          "What it should say",
          "The source for the correction, if there is one",
          "Whether it is scholarship, an archive record or a family account",
        ],
        subject: "TAMU correction: <article or page>",
        body: `Page or article (title, or the link):

The sentence or section that is wrong:

What it should say, and why:

Source for the correction (author, year, title, link or page number):

Is this a published source, an archive or museum record, or a family or community account?

Anything else:
`,
      },
      {
        title: "A word, phrase or song in Tamu Kyi",
        summary:
          "Words, sayings, songs and pronunciation, written as you say them — with or without a recording.",
        includes: [
          "The word, phrase or song",
          "What it means in English",
          "Where it is said, and by whom",
          "A short recording if you can make one",
        ],
        subject: "TAMU contribution: Tamu Kyi language",
        body: `The word, phrase or song:

What it means in English:

Where it is said (village or region), and by whom:

How you would write it, and how it sounds (attach a short recording if you can):

Dialect or local variation worth noting:

Credit:
`,
      },
      {
        title: "A source we have missed",
        summary:
          "A paper, book, archive file, thesis or recording that should sit behind an article — even if you only have the citation.",
        includes: [
          "Author, year and title",
          "Journal, publisher, archive or ISBN",
          "Which article or claim it supports",
          "Whether you can share access to it",
        ],
        subject: "TAMU contribution: a source",
        body: `Author, year, title:

Journal, publisher, archive or ISBN:

Link or where it can be found:

Which article or claim does it support, or correct?

Do you have access to it, so a claim can be checked?

Anything else:
`,
      },
    ],
    processEyebrow: "WHAT HAPPENS NEXT",
    processTitle: "Three steps, no black box",
    process: [
      {
        title: "You send it",
        text: "Anything from a sentence to a folder of scans. Email is the front door; Instagram works if that is easier. Nothing is published, indexed or shared at this stage.",
      },
      {
        title: "We reply and check it",
        text: "You get a person, not an autoresponder. We ask what is unclear, look for the sources behind a claim, and agree the wording and the credit with you before anything moves.",
      },
      {
        title: "It goes on the page, with your name on it",
        text: "Published material is credited the way you asked — name, pseudonym or anonymous. Community accounts are labelled as community accounts, not mixed in as scholarship.",
      },
    ],
    processNoteA:
      "You keep ownership of what you send, and you can ask for it to be credited differently or removed later. The full arrangement is in the",
    processNoteTerms: "terms",
    processNoteMid: "and the",
    processNotePrivacy: "privacy policy",
    processNoteEnd: ".",
    limitsEyebrow: "WHAT WE CAN'T HOLD",
    limitsTitle: "Some things stay out of a public museum",
    limitsIntro:
      "Respect is part of the method. These are the contributions that will be declined or kept back, and it is not a judgement on the person offering them.",
    limits: [
      "Material you do not own or have permission to share. Tell us who holds the rights and we will ask them.",
      "Sacred or restricted knowledge that should not be public. Say what it is and we will not publish it — and may ask whether it can even be held.",
      "Other people's personal details, especially addresses, phone numbers, health and anything involving children.",
      "Photographs of identifiable people who have not agreed to appear.",
      "Anything generated by an AI model and passed off as a memory, a translation or a photograph.",
    ],
    recordingEyebrow: "ORAL HISTORY",
    recordingTitle: "Recording an elder, this weekend",
    recordingIntroA: "You do not need equipment or training.",
    recordingIntroB:
      "The best recording ever made of a village is usually one somebody took on a phone before it was too late.",
    tips: [
      {
        title: "Ask before you record",
        text: "Explain what the recording is for, where it will appear and that it can be withdrawn. Get a spoken yes at the start of the file, with the person's name and the date.",
      },
      {
        title: "One quiet room, one conversation",
        text: "A phone on a table is enough. Avoid music, traffic and crowds; sit close enough that voices are clear without a microphone.",
      },
      {
        title: "Ask for places, names and dates",
        text: "A story about 'the village' becomes usable when it names the village. Follow up on who, where and when as you listen.",
      },
      {
        title: "Send the raw file, not a transcript",
        text: "Keep the original recording. A transcript is useful too, but the voice itself is the source — and the accent, the words and the laughter are part of the record.",
      },
    ],
    contactEyebrow: "READY, OR JUST CURIOUS?",
    contactTitle: "Write to us first if you would rather ask than send",
    contactP:
      "A short message is enough — “I have photographs from Sikles, can I send them?” is a perfectly good opening. Say what you have and we will tell you what would be useful.",
    safety: "We never publish a contribution, or a contributor's details, without your agreement.",
    codeNoteA:
      "Contributing code or reporting a bug works differently: every change starts as an issue, then a pull request. The",
    helpLink: "help page",
    codeNoteEnd: "explains both paths.",
    openDraft: "Open email draft",
    copy: "Copy template",
    copied: "Copied",
    copyAria: "Copy the template",
    templateCopied: "Template copied — paste it into any email or message.",
  },
  legal: {
    updated: "Last updated",
    footQuestion: "Questions about this page? Write to",
    footOr: "or see",
    footHelp: "help & docs",
    privacy: {
      eyebrow: "PRIVACY",
      title: "What we collect, and what we don't",
      updated: "27 November 2026",
      intro:
        "TAMU is built to be read without being watched. This page describes, in plain language, the small amount of data that exists when you visit, and what happens to what you send us.",
    },
    terms: {
      eyebrow: "TERMS OF USE",
      title: "How this museum may be used",
      updated: "27 November 2026",
      intro:
        "TAMU exists so that Gurung history can be read, checked and carried further. These terms describe what you can do with the content, what the project commits to, and the limits of both.",
    },
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
  error: {
    title: "This page didn't load",
    text: "Something went wrong on our end. You can try refreshing or head back home.",
    retry: "Try again",
    home: "Go home",
  },
  seo: {
    home: {
      title: "The living history of the Gurung people",
      description:
        "A journey through the history, language, culture and living heritage of the Gurung (Tamu) people.",
    },
    history: {
      title: "History",
      description:
        "Origins, ancestral landscapes, remembered leadership and modern history of the Gurung people.",
    },
    culture: {
      title: "Culture",
      description:
        "Traditions carried across generations — song, dance, ritual specialists and everyday community life.",
    },
    language: {
      title: "Language",
      description:
        "Tamu Kyi: its relationships, its village voices, and the work of keeping the Gurung language alive.",
    },
    geography: {
      title: "Homeland",
      description:
        "Villages, valleys and landscapes beneath Annapurna, Lamjung and Manang — the Gurung homeland.",
    },
    diaspora: {
      title: "Diaspora",
      description: "Gurung communities in Britain, Hong Kong, the United States, India and beyond.",
    },
    journey: {
      title: "The Journey",
      description:
        "A guided path through the Gurung story: names, origins, homeland, culture, language and diaspora — with links to each full article.",
    },
    timeline: {
      title: "Timeline",
      description:
        "Explore Gurung history by date, from ancestral journeys to the worldwide Tamu community today.",
    },
    library: {
      title: "Knowledge library",
      description:
        "Sourced introductions to Gurung history, language, culture, spirituality, homeland and diaspora.",
    },
    archive: {
      title: "The Archive",
      description: "Search the full TAMU archive of sourced articles on Gurung heritage.",
    },
    sources: {
      title: "Sources & credits",
      description:
        "The research and photographs behind the TAMU archive, with full credits and licences.",
    },
    credits: {
      title: "Photography credits",
      description:
        "Every photograph in the museum with its photographer, licence and original Wikimedia Commons file.",
    },
    contribute: {
      title: "Contribute",
      description:
        "Share a memory, photograph, word of Tamu Kyi, correction or source with TAMU — with the credit and conditions you choose.",
    },
    help: {
      title: "Help & documentation",
      description:
        "Where to start, how the evidence works, what you may reuse, and how to report a problem or contribute to TAMU.",
    },
    about: {
      title: "About TAMU",
      description:
        "Why TAMU exists: an open, growing and transparent archive of Gurung heritage — how it works, what it promises and how to get involved.",
    },
    oral: {
      title: "Oral histories",
      description:
        "Stories from Gurung elders — a growing collection of remembered lives and voices, gathered with consent.",
    },
    privacy: {
      title: "Privacy",
      description:
        "What TAMU does and does not collect: no accounts, no advertising, no tracking cookies, and only a cookieless count of visits.",
    },
    terms: {
      title: "Terms of use",
      description:
        "How TAMU's content can be read, quoted and reused, and what the project promises — and does not promise — about accuracy.",
    },
    articleNotFound: "Article not found",
  },
  labels: {
    categories: {
      History: "History",
      Language: "Language",
      Culture: "Culture",
      Spirituality: "Spirituality",
      Homeland: "Homeland",
      Diaspora: "Diaspora",
    },
    evidence: {
      "Academic research": "Academic research",
      "Scholarly interpretation": "Scholarly interpretation",
      "Oral tradition & archaeology": "Oral tradition & archaeology",
    },
    eras: {
      Ancient: "Ancient",
      Kingdoms: "Kingdoms",
      "Nepal state": "Nepal state",
      "Gurkha era": "Gurkha era",
      Modern: "Modern",
    },
  },
};

export type Ui = typeof en;
