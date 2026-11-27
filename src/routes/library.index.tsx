import { createFileRoute } from "@tanstack/react-router";
import { Library } from "@/components/museum/Library";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/library/")({
  head: () =>
    pageHead(
      "Knowledge library",
      "Sourced introductions to Gurung history, language, culture, spirituality, homeland and diaspora.",
      "/library",
    ),
  component: () => <Library />,
});
