import { createFileRoute } from "@tanstack/react-router";
import { Timeline } from "@/components/museum/Timeline";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/timeline")({
  head: () =>
    pageHead(
      "Timeline",
      "Explore Gurung history by date, from ancestral journeys to the worldwide Tamu community today.",
      "/timeline",
    ),
  component: Timeline,
});
