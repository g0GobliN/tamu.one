import { createFileRoute } from "@tanstack/react-router";
import { Journey } from "@/components/museum/Journey";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/journey")({
  head: () =>
    pageHead(
      "The Journey",
      "A guided path through the Gurung story: names, origins, homeland, culture, language and diaspora — with links to each full article.",
      "/journey",
    ),
  component: Journey,
});
