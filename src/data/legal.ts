import { contact } from "./contact";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPage: LegalPageContent = {
  eyebrow: "PRIVACY",
  title: "What we collect, and what we don't",
  updated: "28 November 2026",
  intro:
    "TAMU is built to be read without being watched. This page describes, in plain language, the small amount of data that exists when you visit, and what happens to what you send us.",
  sections: [
    {
      heading: "The short version",
      paragraphs: [
        "TAMU is a reading experience. There are no accounts, no newsletters, no advertising and no tracking cookies, and you can read every page without identifying yourself. To know which pages are read and roughly where readers come from, the site counts visits with Cloudflare Web Analytics — a cookieless, aggregate measurement that cannot identify you.",
        "The only data that exists is what the hosting infrastructure logs to serve a request, and what you choose to send us in an email, direct message or contribution.",
      ],
    },
    {
      heading: "What the site stores on your device",
      bullets: [
        "No cookies are set by TAMU.",
        "No local storage or fingerprinting is used to recognise you or build a profile. The visit count is aggregate and cookieless.",
        "Your browser may cache pages and images to make repeat visits faster; clearing site data removes it.",
      ],
    },
    {
      heading: "Information handled by others",
      paragraphs: [
        "Pages load their typefaces from Google Fonts. That request is made by your browser to Google and shares your IP address and browser details with them under Google's own privacy terms. Everything else — images, styles, scripts — is served from this site.",
        "The site is hosted on third-party infrastructure, which keeps ordinary access logs (such as IP address, user agent, requested path and response status) for security and operations. TAMU does not combine those logs into user profiles.",
        "Visits are counted by Cloudflare Web Analytics. It receives the page address, the site that referred you, the country Cloudflare derives from your connection and basic browser details; it sets no cookies, builds no profile, and the reports show aggregate numbers rather than individuals.",
      ],
    },
    {
      heading: "What you send us",
      paragraphs: [
        "If you email, message or submit a memory, photograph, recording or correction, we receive whatever you include — your address or handle, your words and your files.",
        "Contributions are kept so they can be reviewed and, with your agreement, published. Tell us if you would rather be credited in a particular way, or not named at all; we will follow that.",
      ],
    },
    {
      heading: "How long it is kept",
      paragraphs: [
        "Correspondence is kept while it is useful for the article or correction it concerns. Hosting logs expire according to the host's retention period. Nothing is sold, rented or shared for advertising.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can ask what we hold about you, ask for a correction, or ask us to delete a contribution and any personal details in it. Write to the address below and it will be handled.",
        "If a contribution has been published and you later want it withdrawn, say so. The only limit is material already quoted in a scholarly context that others cite.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "The museum is intended for general readers. We do not knowingly collect personal information from children; if a child's details reach us, ask and we will remove them.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "If this policy changes, the date at the top changes with it. Material changes will be described in the project's public history.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Privacy questions go to ${contact.email}. Security issues should follow the private reporting route described in the project's SECURITY.md, not a public issue.`,
      ],
    },
  ],
};

export const termsPage: LegalPageContent = {
  eyebrow: "TERMS OF USE",
  title: "How this museum may be used",
  updated: "27 November 2026",
  intro:
    "TAMU exists so that Gurung history can be read, checked and carried further. These terms describe what you can do with the content, what the project commits to, and the limits of both.",
  sections: [
    {
      heading: "What this site is",
      paragraphs: [
        "TAMU is an independent, non-commercial heritage archive. It gathers published research, archival material and community knowledge about the Gurung (Tamu) people and presents it for reading and study.",
        "It is an introduction and a map to the sources, not a substitute for them. Where a claim matters to you, follow the citation and read the original.",
      ],
    },
    {
      heading: "Accuracy and corrections",
      paragraphs: [
        "Content is reviewed and dated, and it changes as better evidence or community accounts arrive. No warranty of completeness or accuracy is given, and nothing here is academic, legal, medical or financial advice.",
        "If you believe something is wrong, tell us. Corrections are published with the same care as the original claim, and the public history of the project records the change.",
      ],
    },
    {
      heading: "Reading and quoting",
      bullets: [
        "You may read, link to and quote short passages with attribution to TAMU and a link to the page.",
        "Do not republish whole articles, or a substantial part of the museum, without written permission.",
        "Article text and the museum's editorial selection are the project's content; quotes and excerpts inside articles remain the property of their original authors.",
        "Photographs are licensed separately: each one keeps its creator, licence and licence URL in src/data/media.ts. CC BY and CC BY-SA terms apply, including share-alike where stated.",
        "The source code is free software under the Apache License 2.0. The licence covers the code, not the content or the photographs.",
      ],
    },
    {
      heading: "Using the site responsibly",
      bullets: [
        "Do not scrape or mirror the site at a volume that degrades it for readers.",
        "Do not misrepresent the museum, its contributors or its sources.",
        "Do not use the comment, contribution or contact channels for harassment, spam or impersonation; the Code of Conduct applies everywhere the project lives.",
        "Do not attempt to breach, probe or disrupt the hosting infrastructure. Security research should follow SECURITY.md.",
      ],
    },
    {
      heading: "Contributions you send",
      paragraphs: [
        "When you send a memory, photograph, recording, source or correction, you confirm you have the right to share it, and you allow TAMU to publish and lightly edit it for clarity, length and house style.",
        "You keep ownership of your contribution and will be credited as you ask. Nothing is published without your agreement, and you can ask for a contribution to be removed later.",
        "Do not send material that belongs to someone else, or sacred or restricted knowledge that should not be public. Ask first, and we will say what the museum can hold.",
      ],
    },
    {
      heading: "Links to other sites",
      paragraphs: [
        "Sources, archives and partner pages are linked for reference. TAMU does not control them and is not responsible for their content, availability or privacy practices.",
      ],
    },
    {
      heading: "Availability",
      paragraphs: [
        "The museum is offered as it is, without warranty of uninterrupted availability. Pages may move, and content may be corrected or withdrawn.",
      ],
    },
    {
      heading: "Liability",
      paragraphs: [
        "To the extent permitted by law, the project and its maintainers are not liable for loss arising from use of the site or reliance on its content. This does not exclude liability that cannot lawfully be excluded.",
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        "These terms may be updated as the project grows. The date at the top of the page shows the current version, and material changes are described in the project's public history.",
      ],
    },
  ],
};
