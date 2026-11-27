import { createFileRoute } from "@tanstack/react-router";
import { Privacy } from "@/components/museum/Privacy";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy",
      "What TAMU does and does not collect: no accounts, no analytics, no advertising, no tracking cookies.",
      "/privacy",
    ),
  component: Privacy,
});
