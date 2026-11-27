import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mic } from "lucide-react";

const lookingFor = [
  "Memories of growing up in the villages",
  "Stories of leaving home and building new lives",
  "Songs, sayings and words in Tamu Kyi",
  "Accounts of festivals, rituals and community events",
  "The ordinary texture of a life: food, work, weather, neighbours",
];

export function OralHistory() {
  return (
    <main className="prose-page">
      <span className="eyebrow">ORAL HISTORY</span>
      <h1>Stories from our elders</h1>
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
        {lookingFor.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>How a recording becomes part of the museum</h2>
      <p>
        Send the file and the story behind it. Nothing is published without agreement, the person
        recorded can stay anonymous or be named exactly as they wish, and every recording keeps the
        name of who spoke, who recorded it and when.
      </p>
      <div className="prose-actions">
        <Link to="/contribute" className="button-primary">
          <Mic size={16} /> Share a story
        </Link>
        <Link to="/contribute" hash="recording" className="button-quiet">
          Recording advice <ArrowUpRight size={15} />
        </Link>
      </div>
    </main>
  );
}
