import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/museum/TopicPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/geography")({
  head: () =>
    pageHead(
      "Homeland",
      "Villages, valleys and landscapes beneath Annapurna, Lamjung and Manang — the Gurung homeland.",
      "/geography",
    ),
  component: () => <TopicPage topicKey="geography" />,
});
