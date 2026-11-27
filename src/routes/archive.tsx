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
  component: () => (
    <Library
      title="The Archive"
      intro="Every article in the collection, in one searchable place. Filter by subject, region and type of evidence."
    />
  ),
});
