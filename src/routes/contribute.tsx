import { createFileRoute } from "@tanstack/react-router";
import { Contribute } from "@/components/museum/Contribute";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contribute")({
  head: () =>
    pageHead(
      "Contribute",
      "Share a memory, photograph, word of Tamu Kyi, correction or source with TAMU — with the credit and conditions you choose.",
    ),
  component: Contribute,
});
