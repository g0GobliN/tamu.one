import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/museum/LegalPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead(
      "Terms of use",
      "How TAMU's content can be read, quoted and reused, and what the project promises — and does not promise — about accuracy.",
    ),
  component: Terms,
});

const sections: LegalSection[] = [
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
];

function Terms() {
  return (
    <LegalPage
      eyebrow="TERMS OF USE"
      title="How this museum may be used"
      updated="27 November 2026"
      intro="TAMU exists so that Gurung history can be read, checked and carried further. These terms describe what you can do with the content, what the project commits to, and the limits of both."
      sections={sections}
    />
  );
}
