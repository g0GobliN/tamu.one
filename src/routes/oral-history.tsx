import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/oral-history")({
  head: () =>
    pageHead(
      "Oral histories",
      "Stories from Gurung elders — a growing collection of remembered lives and voices.",
    ),
  component: OralHistory,
});

function OralHistory() {
  return (
    <main className="prose-page">
      <span className="eyebrow">ORAL HISTORY</span>
      <h1 style={{ fontSize: "clamp(2.8rem,7vw,5rem)", margin: "1rem 0" }}>
        Stories from our elders
      </h1>
      <p>
        Much of the Tamu past has never been written down. It lives in the voices of grandparents,
        in songs sung at festivals and in stories told around the hearth.
      </p>
      <p>
        This collection is just beginning. We are gathering recorded memories — of village life,
        migration, ritual and change — with the consent and guidance of the people who share them.
      </p>
      <h2>What we're looking for</h2>
      <ul>
        <li>Memories of growing up in the villages</li>
        <li>Stories of leaving home and building new lives</li>
        <li>Songs, sayings and words in Tamu Kyi</li>
        <li>Accounts of festivals, rituals and community events</li>
      </ul>
      <div style={{ marginTop: "2rem" }}>
        <Button asChild size="lg">
          <Link to="/contribute">
            <Mic /> Share a story
          </Link>
        </Button>
      </div>
    </main>
  );
}
