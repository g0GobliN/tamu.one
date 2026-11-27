import { createFileRoute } from "@tanstack/react-router";
import { Terms } from "@/components/museum/Terms";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead(
      "Terms of use",
      "How TAMU's content can be read, quoted and reused, and what the project promises — and does not promise — about accuracy.",
      "/terms",
    ),
  component: Terms,
});
