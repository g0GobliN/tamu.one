import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/museum/Home";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "The living history of the Gurung people",
      "A journey through the history, language, culture and living heritage of the Gurung (Tamu) people.",
      "/",
    ),
  component: Home,
});
