import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/museum/TopicPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/culture")({
  head: () =>
    pageHead(
      "Culture",
      "Traditions carried across generations — song, dance, ritual specialists and everyday community life.",
      "/culture",
    ),
  component: () => <TopicPage topicKey="culture" />,
});
