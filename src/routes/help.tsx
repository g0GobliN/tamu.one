import { createFileRoute } from "@tanstack/react-router";
import { Help } from "@/components/museum/Help";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/help")({
  head: () =>
    pageHead(
      "Help & documentation",
      "Where to start, how the evidence works, what you may reuse, and how to report a problem or contribute to TAMU.",
    ),
  component: Help,
});
