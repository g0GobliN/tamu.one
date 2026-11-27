import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/museum/About";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About TAMU",
      "Why TAMU exists: an open, growing and transparent archive of Gurung heritage — how it works, what it promises and how to get involved.",
      "/about",
    ),
  component: About,
});
