/**
 * The timeline. Events live in `content/timeline.json` with both languages per
 * entry; `era` stays an English key because the interface labels it.
 */
export type Era = "Ancient" | "Kingdoms" | "Nepal state" | "Gurkha era" | "Modern";

export interface TimelineEvent {
  year: string;
  sort: number;
  era: Era;
  title: string;
  text: string;
  slugs: string[];
}

export interface TimelineEventText {
  title: string;
  text: string;
}

interface TimelineRecord {
  year: string;
  sort: number;
  era: Era;
  slugs: string[];
  en: TimelineEventText;
  ne: TimelineEventText;
}

const rawTimeline = import.meta.glob("/content/timeline.json", {
  eager: true,
  import: "default",
}) as Record<string, TimelineRecord[]>;

const timelineRecords = Object.values(rawTimeline)[0];
if (!timelineRecords) throw new Error("content/timeline.json not found");

export const eras: Era[] = ["Ancient", "Kingdoms", "Nepal state", "Gurkha era", "Modern"];

export const timeline: TimelineEvent[] = timelineRecords.map((record) => ({
  year: record.year,
  sort: record.sort,
  era: record.era,
  title: record.en.title,
  text: record.en.text,
  slugs: record.slugs,
}));

export const timelineNe: TimelineEventText[] = timelineRecords.map((record) => record.ne);
