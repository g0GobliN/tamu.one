import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/museum/TopicPage";
import { topics } from "@/data/topics";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/language")({
  head: () =>
    pageHead(
      "Language",
      "Tamu Kyi, the Gurung language: its relationships, regional variation and preservation.",
    ),
  component: () => <TopicPage topic={topics.language} />,
});
