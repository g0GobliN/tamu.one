import { createFileRoute } from "@tanstack/react-router";
import { Library } from "@/components/museum/Library";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/archive")({
  head: () =>
    pageHead(
      "The Archive",
      "Search the full TAMU archive of sourced articles on Gurung heritage.",
      "/archive",
    ),
  component: () => <Library variant="archive" />,
});
