import type { Category } from "./heritage";
import type { MediaId } from "./media";

export interface TopicTheme {
  title: string;
  text: string;
  /** Slug of the library article this theme opens. Omitted when no article covers it yet. */
  slug?: string;
}

export interface Topic {
  key: string;
  eyebrow: string;
  title: string;
  intro: string;
  image?: MediaId;
  categories: Category[];
  lead: string;
  body: string[];
  themes: TopicTheme[];
}

export const topics = {
  history: {
    key: "history",
    eyebrow: "COLLECTION 01 · HISTORY",
    title: "Our ancestral story",
    intro:
      "Origins, memory and history — told through oral tradition, archaeology and scholarship, with care for what each can and cannot tell us.",
    image: "dawn",
    categories: ["History"],
    lead: "History held in many hands.",
    body: [
      "The Tamu past is remembered in chanted ritual texts, in the names of ancestral places and in the stories families pass down. Researchers add archaeology, linguistics and archival records.",
      "These sources do not always agree. TAMU presents them side by side, and says plainly where the evidence is thin.",
    ],
    themes: [
      {
        title: "Origins",
        text: "Language relationships point to deep Himalayan connections, but cannot settle questions of ancestry on their own.",
        slug: "ancient-origins",
      },
      {
        title: "Kohla",
        text: "An ancestral settlement remembered in ritual and investigated by archaeologists.",
        slug: "khola-sothar",
      },
      {
        title: "Ghale traditions",
        text: "Memories of leadership and local political life in the hills.",
        slug: "ghale-traditions",
      },
      {
        title: "Modern history",
        text: "Gurkha service, migration and change — important strands, not the whole story.",
        slug: "gurkha-history",
      },
    ],
  },
  culture: {
    key: "culture",
    eyebrow: "COLLECTION 02 · CULTURE",
    title: "A living culture",
    intro:
      "Traditions carried across generations — in song and dance, in ritual specialists, and in everyday community life.",
    image: "festival",
    categories: ["Culture", "Spirituality"],
    lead: "Not a museum piece — a way of living.",
    body: [
      "Gurung culture is practised, argued over and renewed. Festivals like Tamu Lhosar bring families together; ritual specialists keep sacred knowledge; young people find new ways to belong.",
      "Religious life varies from place to place, blending ancestral practice with Buddhist and Hindu traditions in local ways.",
    ],
    themes: [
      {
        title: "Ghatu",
        text: "A performance tradition of movement, music and memory.",
        slug: "ghatu",
      },
      {
        title: "Rodhi",
        text: "A space for young people to gather, cooperate and socialise.",
        slug: "rodhi",
      },
      {
        title: "Pachyu & Ghyabre",
        text: "Ritual specialists who guide the living and the dead.",
        slug: "ritual-specialists",
      },
      {
        title: "Tamu Lhosar",
        text: "The new year, celebrated by communities at home and abroad.",
        slug: "tamu-lhosar",
      },
      {
        title: "Everyday heritage",
        text: "Food, weaving, family celebrations and the work of cooperation.",
        slug: "weaving-and-bamboo",
      },
      {
        title: "Oral literature",
        text: "Pe / Pye, specialist knowledge and the people who transmit it.",
        slug: "pye-oral-literature",
      },
    ],
  },
  language: {
    key: "language",
    eyebrow: "TAMU KYI",
    title: "The language of our people",
    intro:
      "A Tibeto-Burman language spoken across the hills of central Nepal and carried by families around the world.",
    categories: ["Language"],
    lead: "Every word carries a place and a people.",
    body: [
      "Tamu Kyi differs from village to village. Older eastern and western groupings are useful reference points, but later research finds a more complex picture of variation and understanding.",
      "Today many young Gurung people grow up speaking Nepali or English first. Recording elders, teaching children and writing the language down all help keep it alive.",
    ],
    themes: [
      {
        title: "Relationships",
        text: "Tamu Kyi belongs to the Tamangic group, alongside Tamang, Thakali and Manange.",
        slug: "tamu-kyi",
      },
      {
        title: "Variation",
        text: "Village voices, tone and the changing understanding of eastern and western Gurung.",
        slug: "dialects-and-tone",
      },
      {
        title: "Gurung Khema",
        text: "Community literacy and the script’s addition to Unicode in 2024.",
        slug: "gurung-khema",
      },
      {
        title: "Passing it on",
        text: "Speaker-led recordings preserve conversation, stories and everyday knowledge.",
        slug: "language-documentation",
      },
    ],
  },
  geography: {
    key: "geography",
    eyebrow: "COLLECTION 03 · HOMELAND",
    title: "The places we call home",
    intro: "Villages, valleys and landscapes beneath Annapurna, Lamjung and Manang.",
    image: "village",
    categories: ["Homeland"],
    lead: "Land that remembers.",
    body: [
      "The Gurung homeland stretches across the middle hills of central Nepal — Kaski, Lamjung, Gorkha, Syangja, Tanahun and Manang among them.",
      "Stone houses, terraced fields and high pastures shape a way of life now changing with tourism, migration and new roads.",
    ],
    themes: [
      {
        title: "Ghandruk",
        text: "A mountain village balancing heritage, tourism and community life.",
        slug: "ghandruk",
      },
      {
        title: "Manang",
        text: "Neighbours and shared landscapes in the high valleys.",
        slug: "manang",
      },
      {
        title: "Sikles",
        text: "A living village with language documentation and ancestral connections.",
        slug: "sikles",
      },
      {
        title: "Fields & pastures",
        text: "Terraced crops, seasonal herding and the relationships behind village livelihoods.",
        slug: "terraces-and-crops",
      },
      {
        title: "Changing villages",
        text: "Village associations and everyday belonging in Pokhara.",
        slug: "pokhara-village-associations",
      },
    ],
  },
  diaspora: {
    key: "diaspora",
    eyebrow: "BEYOND THE HOMELAND",
    title: "One heritage, a world of lives",
    intro:
      "From Pokhara to London, Hong Kong to Sydney — the Tamu story continues wherever our people live.",
    image: "annapurna",
    categories: ["Diaspora"],
    lead: "Belonging travels with us.",
    body: [
      "Military service, work and study have carried Gurung families across the world. New communities have built associations, temples and festivals far from the hills.",
      "Living abroad raises new questions about language, religion and identity — and new ways of answering them.",
    ],
    themes: [
      {
        title: "United Kingdom",
        text: "Community-making and belonging among Gurung families in Britain.",
        slug: "united-kingdom",
      },
      {
        title: "Hong Kong",
        text: "A dated account of Thak-connected friendships and civilian working lives.",
        slug: "gurungs-hong-kong",
      },
      {
        title: "New York",
        text: "Tamu community life and language documentation in Queens and Ridgewood.",
        slug: "gurungs-new-york",
      },
      {
        title: "India",
        text: "A family-level account of work, schooling and return visits near Mumbai.",
        slug: "gurung-labour-india",
      },
    ],
  },
} satisfies Record<string, Topic>;

export type TopicKey = keyof typeof topics;
