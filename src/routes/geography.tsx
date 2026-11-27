import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/museum/TopicPage";
import { topics } from "@/data/topics";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/geography")({
  head: () =>
    pageHead(
      "Homeland",
      "The villages, valleys and mountain landscapes of the Gurung homeland in central Nepal.",
    ),
  component: () => <TopicPage topic={topics.geography} />,
});
