import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/museum/TopicPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/language")({
  head: () =>
    pageHead(
      "Language",
      "Tamu Kyi: its relationships, its village voices, and the work of keeping the Gurung language alive.",
      "/language",
    ),
  component: () => <TopicPage topicKey="language" />,
});
