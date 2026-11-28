import { createFileRoute } from "@tanstack/react-router";
import { Journey } from "@/components/museum/Journey";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/journey")({
  head: () =>
    pageHead(
      "The Journey",
      "The Gurung story as one book in seven parts — from the first written record to the villages, festivals and families of today.",
      "/journey",
    ),
  component: Journey,
});
