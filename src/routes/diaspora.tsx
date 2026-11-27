import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/museum/TopicPage";
import { topics } from "@/data/topics";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/diaspora")({
  head: () =>
    pageHead(
      "Diaspora",
      "Gurung communities beyond Nepal — in Britain, Hong Kong, Asia and around the world.",
      "/diaspora",
    ),
  component: () => <TopicPage topic={topics.diaspora} />,
});
