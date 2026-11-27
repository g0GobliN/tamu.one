import { createFileRoute } from "@tanstack/react-router";
import { OralHistory } from "@/components/museum/OralHistory";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/oral-history")({
  head: () =>
    pageHead(
      "Oral histories",
      "Stories from Gurung elders — a growing collection of remembered lives and voices, gathered with consent.",
    ),
  component: OralHistory,
});
