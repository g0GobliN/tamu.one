import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/museum/LegalPage";
import { contact } from "@/data/contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy",
      "What TAMU does and does not collect: no accounts, no analytics, no advertising, no tracking cookies.",
    ),
  component: Privacy,
});

const sections: LegalSection[] = [
  {
    heading: "The short version",
    paragraphs: [
      "TAMU is a reading experience. There are no accounts, no newsletters, no advertising, no analytics and no tracking cookies. You can read every page without identifying yourself.",
      "The only data that exists is what the hosting infrastructure logs to serve a request, and what you choose to send us in an email, direct message or contribution.",
    ],
  },
  {
    heading: "What the site stores on your device",
    bullets: [
      "No cookies are set by TAMU.",
      "No local storage or fingerprinting is used to recognise you or build a profile.",
      "Your browser may cache pages and images to make repeat visits faster; clearing site data removes it.",
    ],
  },
  {
    heading: "Information handled by others",
    paragraphs: [
      "Pages load their typefaces from Google Fonts. That request is made by your browser to Google and shares your IP address and browser details with them under Google's own privacy terms. Everything else — images, styles, scripts — is served from this site.",
      "The site is hosted on third-party infrastructure, which keeps ordinary access logs (such as IP address, user agent, requested path and response status) for security and operations. TAMU does not combine those logs into user profiles.",
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
];

function Privacy() {
  return (
    <LegalPage
      eyebrow="PRIVACY"
      title="What we collect, and what we don't"
      updated="27 November 2026"
      intro="TAMU is built to be read without being watched. This page describes, in plain language, the small amount of data that exists when you visit, and what happens to what you send us."
      sections={sections}
    />
  );
}
