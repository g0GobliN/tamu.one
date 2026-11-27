import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/museum/TopicPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/diaspora")({
  head: () =>
    pageHead(
      "Diaspora",
      "Gurung communities in Britain, Hong Kong, the United States, India and beyond.",
      "/diaspora",
    ),
  component: () => <TopicPage topicKey="diaspora" />,
});
