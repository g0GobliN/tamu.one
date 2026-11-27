import { ArrowUpRight, Mic } from "lucide-react";
import { useUi } from "@/i18n";
import { AppLink } from "./AppLink";

export function OralHistory() {
  const ui = useUi();
  return (
    <main className="prose-page">
      <span className="eyebrow">{ui.oral.eyebrow}</span>
      <h1>{ui.oral.title}</h1>
      <p>{ui.oral.p1}</p>
      <p>{ui.oral.p2}</p>
      <h2>{ui.oral.lookingForTitle}</h2>
      <ul>
        {ui.oral.lookingFor.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>{ui.oral.howTitle}</h2>
      <p>{ui.oral.howText}</p>
      <div className="prose-actions">
        <AppLink to="/contribute" className="button-primary">
          <Mic size={16} /> {ui.oral.share}
        </AppLink>
        <AppLink to="/contribute" hash="recording" className="button-quiet">
          {ui.oral.advice} <ArrowUpRight size={15} />
        </AppLink>
      </div>
    </main>
  );
}
