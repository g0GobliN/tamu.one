export interface ContributionType {
  id: "memory" | "photograph" | "correction" | "language" | "source";
  title: string;
  summary: string;
  includes: string[];
  subject: string;
  body: string;
}

export const contributionTypes: ContributionType[] = [
  {
    id: "memory",
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
    id: "photograph",
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
    id: "correction",
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
    id: "language",
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
    id: "source",
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
];

export const contributionProcess = [
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
];

export const contributionLimits = [
  "Material you do not own or have permission to share. Tell us who holds the rights and we will ask them.",
  "Sacred or restricted knowledge that should not be public. Say what it is and we will not publish it — and may ask whether it can even be held.",
  "Other people's personal details, especially addresses, phone numbers, health and anything involving children.",
  "Photographs of identifiable people who have not agreed to appear.",
  "Anything generated by an AI model and passed off as a memory, a translation or a photograph.",
];

export const recordingTips = [
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
];
