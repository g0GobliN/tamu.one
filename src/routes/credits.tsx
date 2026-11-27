import { createFileRoute } from "@tanstack/react-router";
import { Credits } from "@/components/museum/Credits";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/credits")({
  head: () =>
    pageHead(
      "Photography credits",
      "Every photograph in the museum with its photographer, licence and original Wikimedia Commons file.",
      "/credits",
    ),
  component: Credits,
});
