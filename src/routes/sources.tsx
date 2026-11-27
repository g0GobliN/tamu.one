import { createFileRoute } from "@tanstack/react-router";
import { Sources } from "@/components/museum/Sources";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sources")({
  head: () =>
    pageHead(
      "Sources & credits",
      "The research and photographs behind the TAMU archive, with full credits and licences.",
      "/sources",
    ),
  component: Sources,
});
