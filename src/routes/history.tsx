import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/museum/TopicPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/history")({
  head: () =>
    pageHead(
      "History",
      "Origins, ancestral landscapes, remembered leadership and modern history of the Gurung people.",
      "/history",
    ),
  component: () => <TopicPage topicKey="history" />,
});
