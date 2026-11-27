import type { MediaId } from "./media";
import { moreArticles } from "./heritage-more";
export type Category =
  "History" | "Language" | "Culture" | "Spirituality" | "Homeland" | "Diaspora";
export type Evidence =
  "Academic research" | "Scholarly interpretation" | "Oral tradition & archaeology";
export interface Source {
  id: string;
  author: string;
  title: string;
  year: string;
  url: string;
  kind: string;
}
export const sources: Source[] = [
  {
    id: "evans",
    author: "Christopher Evans",
    title:
      "Grounding Knowledge/Walking Land: Archaeological Research and Ethno-Historical Identity in Central Nepal",
    year: "2009",
    url: "https://www.repository.cam.ac.uk/items/34c3df73-0eb4-43b5-af20-cbcf29875fa0",
    kind: "Archaeological research",
  },
  {
    id: "pettigrew",
    author: "Judith Pettigrew",
    title: "Parallel Landscapes: Ritual and Political Values of a Shamanic Soul Journey",
    year: "1999",
    url: "https://doi.org/10.34961/7894",
    kind: "Ethnographic research",
  },
  {
    id: "florence",
    author: "Florence Gurung",
    title: "Religion and Ethnic Identity: Gurung Experiences of Belonging in the UK",
    year: "2014",
    url: "https://ora.ox.ac.uk/objects/uuid:2df28e60-34b2-488f-ada7-5ebdebf5163a",
    kind: "Oxford doctoral thesis",
  },
  {
    id: "glottolog",
    author: "Glottolog",
    title: "Gurung (guru1261)",
    year: "Version 5.4",
    url: "https://glottolog.org/resource/languoid/id/guru1261",
    kind: "Linguistic catalogue",
  },
  {
    id: "mumford",
    author: "Stan Royal Mumford",
    title: "Spirit Possession and Soul Guidance in a Gurung Death Rite",
    year: "1989",
    url: "https://digitalcommons.macalester.edu/himalaya/vol9/iss1/7",
    kind: "Ethnographic research",
  },
  {
    id: "ghale",
    author: "Mani Raj Gurung",
    title: "Historical Processes of Power, Knowledge, and Identity Change in Gurungs",
    year: "2023",
    url: "https://www.nepjol.info/index.php/ppj/article/download/58942/44006/174829",
    kind: "Historical interpretation",
  },
  {
    id: "moisala",
    author: "Pirkko Moisala",
    title: "Gurung Cultural Models in the Ghatu",
    year: "1997 · EBHR 12–13, pp. 152–176",
    url: "https://researchportal.helsinki.fi/en/publications/gurung-cultural-models-in-the-ghatu/",
    kind: "Peer-reviewed research",
  },
  {
    id: "rodhi",
    author: "Saroj Raj Panta",
    title:
      "Indigenous Rodhi Culture of Gurung and Factors of its Transform at Ghandruk Kaski in Nepal",
    year: "2023",
    url: "https://www.nepjol.info/index.php/DSAJ/article/view/61145",
    kind: "Local cultural research",
  },
  {
    id: "tourism",
    author: "Yagya Prasad Adhikari & Anton Fischer",
    title:
      "Tourism: Boon for Forest Conservation, Livelihood, and Community Development in Ghandruk VDC, Western Nepal",
    year: "2011",
    url: "https://www.nepjol.info/index.php/INIT/article/view/5535",
    kind: "Livelihood research",
  },
  {
    id: "kuroda",
    author: "Shin’ichirō Kuroda",
    title: "The Afterworld View and Its Underlying Ideas of the Gurungs",
    year: "1974",
    url: "https://www.jstage.jst.go.jp/article/minkennewseries/38/3-4/38_KJ00003548410/_article",
    kind: "Ethnographic research",
  },
  {
    id: "guide",
    author: "Alan Macfarlane & Indrabahadur Gurung",
    title: "A Guide to the Gurungs (online draft; differs from published edition)",
    year: "1990 · second edition 1992",
    url: "https://www.alanmacfarlane.com/TEXTS/Gurung_guide.pdf",
    kind: "Ethnographic guide",
  },
  {
    id: "pariyar",
    author: "Mitra Pariyar",
    title: "Caste, Military, Migration: Nepali Gurkha Communities in Britain",
    year: "2020 · online 2019",
    url: "https://journals.sagepub.com/doi/10.1177/1468796819890138",
    kind: "Peer-reviewed research",
  },
  {
    id: "ntb",
    author: "Nepal Tourism Board",
    title: "Tamu Lhosar: A Vibrant Journey into Nepal’s Indigenous Heart",
    year: "2025",
    url: "https://ntb.gov.np/en/tamu-lhosar-a-vibrant-journey-into-nepals-indigenous-heart",
    kind: "Official tourism information",
  },
  {
    id: "census",
    author: "National Statistics Office, Nepal",
    title: "National Population and Housing Census 2021: Caste/Ethnicity, Language and Religion",
    year: "2021 · published 2023–2025",
    url: "https://censusresults.nsonepal.gov.np/files/result-folder/Caste%20Ethnicity_report_NPHC_2021.pdf",
    kind: "Government census",
  },
  {
    id: "shanti",
    author: "Shanti Gurung",
    title: "Dances in the Name of the Dead: Syarga and Ghyapri/Klepri Rituals Among Gurungs",
    year: "2024",
    url: "https://nepjol.info/index.php/sijssr/article/view/64804",
    kind: "Peer-reviewed research",
  },
  {
    id: "kinship",
    author: "Kailash: Journal of Himalayan Studies",
    title: "The Organizing Principles of Gurung Kinship",
    year: "1979",
    url: "https://www.wisdomlib.org/history/compilation/kailash-journal-of-himalayan-studies/ocr/1602034/28",
    kind: "Scholarly journal",
  },
  {
    id: "lags",
    author: "Los Angeles Gurung (Tamu) Society",
    title: "Gurung Traditional Dress",
    year: "2021",
    url: "https://lagurungsociety.org/?page_id=15",
    kind: "Community organisation",
  },
  {
    id: "ela",
    author: "Endangered Language Alliance",
    title: "Gurung: background, dialect research and documentation in New York",
    year: "Undated · consulted November 2026",
    url: "https://www.elalliance.org/languages/gurung",
    kind: "Language documentation organisation",
  },
  {
    id: "pe-review",
    author: "Mark Turin",
    title: "Review: Materials for the Study of Gurung Pe, by Simon Strickland",
    year: "2021 · EBHR 56",
    url: "https://journals.openedition.org/ebhr/112?lang=en",
    kind: "Scholarly book review",
  },
  {
    id: "world",
    author: "Sarah Harrison & Alan Macfarlane",
    title: "The World of the Gurungs",
    year: "2018 · observations and films from multiple decades",
    url: "https://himalaya-arch.com/images/Documentations/PDF/THE-WORLD%20OF-THE-GURUNGS-%28NXPowerLite%29.pdf",
    kind: "Longitudinal ethnographic book and film notes",
  },
  {
    id: "ghatu-full",
    author: "Pirkko Moisala",
    title: "Gurung Cultural Models in the Ghatu Music and Dance",
    year: "1997 · EBHR 12–13, pp. 152–176",
    url: "https://d1i1jdw69xsqx0.cloudfront.net/digitalhimalaya/collections/journals/ebhr/pdf/EBHR_12&13_09.pdf",
    kind: "Full-text ethnomusicological research",
  },
  {
    id: "initiation",
    author: "Pol Bahadur Gurung",
    title: "Haircut and Dress Giving Rituals of the Gurungs of Sikles Village",
    year: "2022",
    url: "https://doi.org/10.3126/rnjds.v5i1.45951",
    kind: "Peer-reviewed research · abstract consulted",
  },
  {
    id: "khema",
    author: "Translation Commons",
    title: "Revitalizing Gurung Language",
    year: "2026",
    url: "https://translationcommons.org/impact-stories-gurung/",
    kind: "Language digitisation project report",
  },
  {
    id: "unicode",
    author: "The Unicode Consortium",
    title: "The Unicode Standard, Version 16.0.0",
    year: "2024",
    url: "https://www.unicode.org/versions/Unicode16.0.0/",
    kind: "Official technical standard",
  },
];
export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: Category;
  region: string;
  period: string;
  image?: MediaId;
  imageNote?: string;
  evidence: Evidence;
  sourceIds: string[];
  sourceNotes?: Record<string, string>;
  sections: { title: string; text: string }[];
  reviewed: string;
  editorialStatus: "Published introduction";
  communityReview: "Not yet community reviewed";
}
type Input = Omit<Article, "id" | "reviewed" | "editorialStatus" | "communityReview">;
function article(a: Input): Article {
  return {
    ...a,
    id: a.slug,
    reviewed: "25 November 2026",
    editorialStatus: "Published introduction",
    communityReview: "Not yet community reviewed",
  };
}
export const articles: Article[] = [
  article({
    slug: "tamu-lhosar",
    title: "Tamu Lhosar: the Gurung New Year",
    summary:
      "Each year on the 15th of Poush, Gurung communities in Nepal and abroad gather to welcome a new year in the Tamu calendar.",
    category: "Culture",
    region: "Nepal & diaspora",
    period: "Annual · mid-Poush (late December)",
    image: "festival",
    imageNote: "Tamu Lhosar celebration in Kathmandu, 2018.",
    evidence: "Academic research",
    sourceIds: ["ntb", "florence"],
    sections: [
      {
        title: "When it is celebrated",
        text: "Tamu Lhosar falls on the 15th day of the Nepali month of Poush, which usually lands at the end of December. The Nepal Tourism Board describes it as the community’s most vibrant cultural anchor, and it is observed as a public holiday in Nepal.",
      },
      {
        title: "A twelve-year cycle",
        text: "Like the Lhosars of neighbouring Himalayan peoples, the Tamu calendar counts years in a twelve-year cycle called the lohokor. Each year is linked to an animal, such as the garuda (eagle), serpent, horse, sheep, monkey, bird, dog, deer, mouse, cow, tiger and cat. The exact names and order can differ between communities.",
      },
      {
        title: "How people celebrate",
        text: "Families visit relatives, cook festive food and wear traditional dress. In towns and cities, community organisations hold public gatherings with songs, speeches and dances such as Ghatu and Sorathi. For many people living abroad, Lhosar has become one of the main occasions to meet other Gurungs and pass traditions on to children.",
      },
      {
        title: "Old custom or new gathering?",
        text: "Large public Lhosar events in cities such as Kathmandu, Pokhara and London are fairly recent. They grew alongside indigenous-rights and community movements from the late twentieth century onward. Village observances and urban festivals sit side by side, and each place may celebrate in its own way.",
      },
    ],
  }),
  article({
    slug: "clans",
    title: "Clans and kinship: Char Jat and Sora Jat",
    summary:
      "Gurung society has long been organised by clans (kle), often grouped into the “four clans” and “sixteen clans”, a system whose meaning is still debated.",
    category: "History",
    region: "Gandaki Province",
    period: "Historical to present",
    image: "house",
    imageNote: "Museum reconstruction of a Gurung household; illustrative only.",
    evidence: "Scholarly interpretation",
    sourceIds: ["kinship", "guide", "ghale"],
    sections: [
      {
        title: "What a clan is",
        text: "A clan is a group of families who trace descent through the father’s line to a shared ancestor. In Gurung communities, clan membership has traditionally shaped who may marry whom, which ritual duties a family holds, and how people introduce themselves to each other.",
      },
      {
        title: "Four clans and sixteen clans",
        text: "Many accounts describe two groupings: the Char Jat (“four clans”) and the Sora Jat (“sixteen clans”). The Char Jat are usually named in Nepali as Ghale, Ghotane, Lama and Lamichhane, and in Tamu Kyi as Kle, Kon, Lam and Lem. The names of the sixteen clans vary greatly from village to village.",
      },
      {
        title: "A debated ranking",
        text: "In the twentieth century some writers presented the four clans as higher in rank than the sixteen. Researchers and many Gurungs have questioned this. Some argue it was shaped by the Hindu caste ideas of the Nepali state, rather than older Tamu custom. Macfarlane and Gurung’s guide treats the issue as a matter of local history and ongoing discussion.",
      },
      {
        title: "Clans today",
        text: "For many families, a clan name is still a link to ancestors and to a home village, even when everyone shares the surname Gurung. Recording local clan names and their stories is one of the ways communities can help preserve this knowledge.",
      },
    ],
  }),
  article({
    slug: "pae-arghun",
    title: "Pae (Arghun): guiding the soul home",
    summary:
      "The Gurung death rite sends the soul of the deceased safely to the land of the ancestors, and brings the living together.",
    category: "Spirituality",
    region: "Gurung villages & diaspora",
    period: "Living tradition",
    evidence: "Academic research",
    sourceIds: ["mumford", "shanti", "kuroda", "pettigrew"],
    sections: [
      {
        title: "Why it matters",
        text: "In Gurung belief, a person’s soul has to be guided on a journey to the realm of the ancestors after death. A rite that is not performed properly is said to leave the soul wandering, which may bring trouble to the family. The rite is known as pae in Tamu Kyi and arghun or arghum in Nepali.",
      },
      {
        title: "Who performs it",
        text: "Ritual specialists such as the pachyu and the khlyepri (ghyabri) lead the ceremony with chants that describe the soul’s path. In some places Buddhist lamas take part or perform the rite instead. Stan Mumford describes how, in Manang, these practitioners guide the soul and even speak with it through possession.",
      },
      {
        title: "A three-day gathering",
        text: "Shanti Gurung describes the arghun as a three-day event that includes the syarga and klepri dances, performed in the name of the dead. Relatives travel from far away, bring offerings, and share food and labour. The rite renews bonds between families as well as honouring the dead.",
      },
      {
        title: "A note on respect",
        text: "The chants and objects used in pae are sacred knowledge held by trained specialists. This page gives a general introduction only and does not reproduce ritual texts.",
      },
    ],
  }),
  article({
    slug: "population",
    title: "The Gurung people in numbers",
    summary:
      "Nepal’s 2021 census counted more than half a million Gurungs, with many more living in India, the United Kingdom and beyond.",
    category: "Homeland",
    region: "Nepal & worldwide",
    period: "2021 census",
    image: "sikles",
    imageNote: "Sikles village, Kaski.",
    evidence: "Academic research",
    sourceIds: ["census", "glottolog"],
    sections: [
      {
        title: "In Nepal",
        text: "Nepal’s National Population and Housing Census 2021 recorded 543,790 people identifying as Gurung. The largest communities live in Gandaki Province, in districts such as Kaski, Lamjung, Syangja, Tanahun, Gorkha, Parbat and Manang, as well as in Kathmandu and Pokhara.",
      },
      {
        title: "Language and religion",
        text: "Fewer people speak Gurung as a mother tongue than identify as Gurung, a common pattern among Nepal’s indigenous languages as Nepali becomes more widely used. In the census, many Gurungs reported Buddhism, while others reported Hinduism or Bon. In practice many families mix traditions.",
      },
      {
        title: "Beyond Nepal",
        text: "Large communities also live in India (especially Sikkim, Darjeeling and the north-east), the United Kingdom, Hong Kong, the United States and other countries. Figures for these places come from different sources and years, and may count people in different ways, so they should be treated as estimates.",
      },
    ],
  }),
  article({
    slug: "traditional-dress",
    title: "Traditional dress",
    summary:
      "Velvet blouses, coral and turquoise jewellery, and the white bhangra cloth make Gurung clothing instantly recognisable at festivals.",
    category: "Culture",
    region: "Nepal & diaspora",
    period: "Living tradition",
    image: "ghatu",
    imageNote: "Ghatu performers in festival dress, Kathmandu, 2018.",
    evidence: "Scholarly interpretation",
    sourceIds: ["lags", "guide", "world"],
    sourceNotes: {
      guide: "The Village, p. 7: clothing and woven materials",
      world: "pp. 89–91: clothing, spinning and nettle fibre",
      lags: "Community description of traditional dress",
    },
    sections: [
      {
        title: "Clothing, occasion and local variation",
        text: "Gurung dress is recognised at Lhosar, weddings and performances, but a festival outfit is not a single uniform worn by all Tamu people. The older guide records substantial change in fabrics and everyday clothing, while the Los Angeles Gurung (Tamu) Society presents a community description of ceremonial dress. These sources have different purposes and periods. Local names, colours, available cloth and family preferences vary, so a present-day outfit should not be treated as an exact replica of one historical description.",
      },
      {
        title: "Women’s garments and jewellery",
        text: "The guide describes a layered skirt, a high-necked velvet blouse, a waist wrapping, a velvet cloth over the shoulder and a head cloth. It distinguishes a wider pleated traditional skirt from purchased lungi cloth. It also mentions gold ornaments and turquoise or other semi-precious necklaces associated with trade and town markets. Garment names need care: ghalek or ghalek-type terms should not be assumed to mean the blouse in every account; they can refer to a shoulder wrapping. This article therefore identifies clothing by its function where terminology needs local verification.",
      },
      {
        title: "The bhangra and men’s clothing",
        text: "The bhangra is the distinctive carrying cloth or back-sack arrangement crossing the chest and worn open at the back. Older descriptions connect carrying garments with woven nettle fibre, alongside a waist wrap, shirt and Nepali cap. Contemporary ceremonial bhangra may use white purchased fabric. Its practical role matters: a familiar festival form grew from carrying needs, not simply decoration. A khukuri or cap shown in an outfit is not proof of military service or an object every Gurung man must wear.",
      },
      {
        title: "Materials tell another history",
        text: "Harrison and Macfarlane document backstrap weaving and processing nettle fibre, while the guide discusses local wool and later imported cotton and wool. Some household textiles were made locally and others bought from bazaars. As materials changed, familiar garment forms could remain meaningful. Without examining the fibre or knowing the maker, a photograph cannot establish whether an item is handwoven nettle, wool, cotton or a modern substitute.",
      },
      {
        title: "Dress as a living choice",
        text: "The older accounts include young people wearing changing styles and women combining different garments. This should not be reduced to a story that modern clothing destroys identity. Ceremonial dress can communicate belonging even when everyday life uses other clothes, and inherited jewellery may hold family memories beyond its visual appearance. Any detailed catalogue would need a named owner or maker, region, date, garment term and permission, rather than treating a single photograph as a complete national standard.",
      },
    ],
  }),
  article({
    slug: "gurung-and-tamu",
    title: "Gurung & Tamu: names, identity and belonging",
    summary:
      "A living identity expressed through language, family, landscape and community—not a single definition.",
    category: "History",
    region: "Nepal & diaspora",
    period: "Across generations",
    image: "homeland",
    evidence: "Academic research",
    sourceIds: ["pettigrew", "florence"],
    sections: [
      {
        title: "Two names, many experiences",
        text: "Gurung and Tamu appear together in scholarly writing, including Judith Pettigrew’s account of Tamu (Gurung) ritual life. Their use should not be reduced to a simple story of one name replacing another on a known date. Self-identification is shaped by personal experience, local usage and the settings in which people describe themselves.",
      },
      {
        title: "Belonging in a changing world",
        text: "Florence Gurung’s research in Britain examines how religious practice and community institutions participate in ethnic belonging. Family connections, ancestral places, language and ritual can all matter, but people do not necessarily share the same religious commitments or everyday cultural practices.",
      },
      {
        title: "A note on interpretation",
        text: "This introduction does not propose one universal model of Tamu identity. Community accounts and historical records need to be read alongside one another, with attention to region, generation and the context in which an ethnic name is used.",
      },
    ],
  }),
  article({
    slug: "ancient-origins",
    title: "Origins beyond a single story",
    summary:
      "What Sino-Tibetan language relationships reveal—and what they cannot establish about Gurung ancestry.",
    category: "History",
    region: "Himalayan region",
    period: "Deep history",
    image: "mountains",
    imageNote: "Present-day Annapurna landscape; not evidence of an ancestral migration.",
    evidence: "Scholarly interpretation",
    sourceIds: ["glottolog", "evans"],
    sections: [
      {
        title: "Languages are not populations",
        text: "Glottolog places Gurung within the Sino-Tibetan language family. A linguistic family describes relationships between languages. It does not identify an exact birthplace for every speaker’s ancestors, nor establish an uninterrupted ethnic identity stretching back to the origin of that family.",
      },
      {
        title: "Different kinds of evidence",
        text: "Archaeology, historical linguistics, oral narratives and population genetics answer different questions. Christopher Evans’s work around Kohla connects archaeological investigation with community ethnohistory, rather than treating one kind of evidence as a substitute for another.",
      },
      {
        title: "What remains unresolved",
        text: "A precise ancient homeland, a single migration date and direct descent from a named ancient population are not established by the sources presented here. Yellow River, Tibetan Plateau or Qiang connections require their own critical research; they should not be repeated as settled Gurung genealogy.",
      },
    ],
  }),
  article({
    slug: "migrations",
    title: "Paths remembered, routes debated",
    summary: "Ancestral journeys connect sacred geography, oral memory and historical research.",
    category: "History",
    region: "Central Nepal",
    period: "Ancestral narratives",
    image: "dawn",
    imageNote: "Annapurna viewed from Ghandruk; geographical context only.",
    evidence: "Oral tradition & archaeology",
    sourceIds: ["evans", "pettigrew"],
    sections: [
      {
        title: "An oral epic of movement",
        text: "Evans’s archaeological and ethnohistorical study includes a translation of the Lẽmakõ Rõh Pye, an oral epic narrating movement into the region from a distant north. It is an attributed ancestral narrative, not an independently dated itinerary.",
      },
      {
        title: "Walking sacred landscapes",
        text: "Pettigrew examines a ritual soul journey and the ways it was physically retraced and brought into wider discussions of Tamu history. A route can carry meanings about ancestors, sacred places and collective belonging without functioning as a modern historical travel record.",
      },
      {
        title: "Mapping uncertainty",
        text: "The exact starting points, dates and path of ancient population movements remain unresolved in this initial collection. No definitive migration line is plotted here. Future routes will require an attributed source, a proposed period and an explicit statement of uncertainty.",
      },
    ],
  }),
  article({
    slug: "khola-sothar",
    title: "Kohla: an ancestral landscape",
    summary: "Where archaeological investigation meets the memory of an ancestral settlement.",
    category: "History",
    region: "Central Nepal",
    period: "Ancestral settlement",
    image: "sikles",
    imageNote: "Present-day Sikles, the village below the Kohla ridge; context only.",
    evidence: "Oral tradition & archaeology",
    sourceIds: ["evans"],
    sections: [
      {
        title: "Kohla, the Three Villages",
        text: "The Cambridge record of Evans’s research describes Kohla Sombre—Kohla, the Three Villages—as an ancestral settlement significant to the Tamu community that hosted and instigated the project. The study brought settlement and fort surveys into conversation with ethnography and oral accounts.",
      },
      {
        title: "An interrupted investigation",
        text: "The project completed one excavation season before political insurgency interrupted its work. That limitation matters: physical remains and community interpretations should not be condensed into a definitive founding date or a fully reconstructed history of the settlement.",
      },
      {
        title: "Names and evidence",
        text: "Kohla and Khola Sothar are names encountered in wider discussion of ancestral places. A complete account of their local spellings, pronunciations and geographical equivalences needs community verification. No unrelated ruins or mountain photographs are presented here as photographs of Kohla.",
      },
    ],
  }),
  article({
    slug: "ghale-traditions",
    title: "Ghale traditions & the memory of leadership",
    summary:
      "Remembered authority, local political life and the limits of reconstructing a dynasty.",
    category: "History",
    region: "Gurung homeland",
    period: "Historical traditions",
    evidence: "Scholarly interpretation",
    sourceIds: ["ghale", "evans"],
    sections: [
      {
        title: "Remembering local authority",
        text: "Mani Raj Gurung discusses Ghale rulers within a wider interpretation of power, knowledge and changes in Gurung identity. This is an author’s analytical framework, not proof of a single uniformly documented kingdom across every Gurung region.",
      },
      {
        title: "Ruins are not a royal chronology",
        text: "Evans’s Kohla research offers an archaeological and ethnohistorical setting for examining ancestral leadership traditions. Identifying a structure in local memory as a king’s house does not by itself establish the identity, reign dates or territorial extent of a ruler.",
      },
      {
        title: "A collection still to deepen",
        text: "Local lineage accounts, historical documents and settlement evidence should remain distinguishable. This archive does not invent a list of rulers or turn variations in community tradition into one universal chronology.",
      },
    ],
  }),
  article({
    slug: "spiritual-worlds",
    title: "Spiritual worlds of the Tamu",
    summary: "A locally varied religious life that cannot be captured by one label.",
    category: "Spirituality",
    region: "Manang & diaspora",
    period: "Ethnographic present",
    evidence: "Academic research",
    sourceIds: ["mumford", "florence"],
    sections: [
      {
        title: "Practices and relationships",
        text: "In his study of Tapje in Manang, Mumford describes Gurung households maintaining relationships with Ghyabre and Paju practitioners and sometimes inviting Tibetan lamas to conduct Buddhist rites. This is a documented local example, not a national census or a description of every household.",
      },
      {
        title: "Belief and belonging",
        text: "Florence Gurung’s British research explores traditional religion, Hindu and Buddhist influences, and the ways community institutions shape belonging. Religious identities can be debated and reinterpreted; a combination of practices is not necessarily understood in the same way by all participants.",
      },
      {
        title: "Respecting knowledge holders",
        text: "Indigenous Gurung ritual traditions should not automatically be classified as Bon. Detailed descriptions, sacred recordings and ceremonial objects require both careful sourcing and consideration of permission from the people who hold that knowledge.",
      },
    ],
  }),
  article({
    slug: "ritual-specialists",
    title: "Pachyu & Ghyabre: keepers of ritual knowledge",
    summary:
      "An introduction grounded in particular studies, with respect for regional terminology and sacred knowledge.",
    category: "Spirituality",
    region: "Lamjung & Manang",
    period: "Ethnographic present",
    evidence: "Academic research",
    sourceIds: ["pettigrew", "mumford"],
    sections: [
      {
        title: "Names across sources",
        text: "Terminology varies between publications and communities. Pettigrew uses pachyu and klehbri, while Mumford discusses Ghyabre and Paju. These spellings are preserved in relation to their sources rather than combined into an invented standardized vocabulary.",
      },
      {
        title: "Guidance and sacred geography",
        text: "Pettigrew describes a Pachyu funeral soul journey; Mumford examines a Ghyabre death rite in Tapje. Together, the studies introduce ritual guidance, ancestral geography and relationships with the dead without establishing a rigid division of responsibilities that applies everywhere.",
      },
      {
        title: "Public knowledge and permission",
        text: "The presence of a ritual description in a scholarly publication does not mean that every recording, chant or ceremony is open for unrestricted display. This introduction publishes no sacred performance recordings or private ritual texts.",
      },
    ],
  }),
  article({
    slug: "ghatu",
    title: "Ghatu: movement, music and memory",
    summary: "A performance tradition approached as cultural knowledge, not simply spectacle.",
    category: "Culture",
    region: "Gurung communities",
    period: "Living tradition",
    image: "ghatu",
    imageNote: "Ghatu performers at a Kathmandu Tamu Lhosar celebration.",
    evidence: "Academic research",
    sourceIds: ["ghatu-full", "moisala", "world"],
    sourceNotes: {
      "ghatu-full": "pp. 154–160: performance, story, calendar and interpretation",
      world: "pp. 242–247: locally differing accounts and Thak/Ianjacote observations",
    },
    sections: [
      {
        title: "A performance with a social setting",
        text: "Pirkko Moisala’s research is grounded in a Gurung mountain village and explicitly avoids claiming that all Gurungs share the same cultural practices. Her description of a 1975 performance includes a guru leading male singers, madal drummers and three teenage girl dancers in a crowded household courtyard. People watched, talked, rested and shared food while the performance continued through the night. This makes Ghatu a social event as well as a musical form: the audience, hosts and performers participate in a shared space, not a concert separated from daily life.",
      },
      {
        title: "Sati and baramase forms",
        text: "Moisala distinguishes the complete annual performance, called sari or sati Ghatu in different transcriptions, from baramase performances that present selected episodes at weddings, visits and other celebrations. Her account places the full narrative at Baisakh Purnima, around the spring full moon, and links the occasion to divine favour and the rice crop. Harrison and Macfarlane’s notes also describe opening observances near Shree Panchami and the complete performance at Baisakh Purnima. These accounts should be kept locally attributed rather than compressed into one fixed Gregorian date or duration.",
      },
      {
        title: "A royal story, with local names",
        text: "In Moisala’s account the narrative concerns King Pashuram, also rendered Pasram, Queen Yamavati and their son. Harrison and Macfarlane record forms such as Parasuram and Yampawoti, while an older account gives Satyawati. The story includes the king’s death and the queen’s immolation, the narrative motif known as sati. Telling or dancing that story is not proof that Gurung communities practised widow immolation or that the characters are independently verified historical rulers. Names and interpretations vary with the performance and its documentation.",
      },
      {
        title: "Everyday life within the narrative",
        text: "Moisala describes episodes concerning flowers, rice cultivation, hunting, fishing, marriage, battle and a hermit’s life. In her account the rice-farming episode follows the process from preparing the field and planting to eating the crop. Such sequences connect a royal narrative with recognisable work and relationships. The study treats performance as cultural knowledge: movement and music can communicate ways of understanding a world rather than simply illustrate a text. This is the researcher’s analysis of a particular tradition, not a universal explanation supplied by every performer.",
      },
      {
        title: "Music, movement and specialist knowledge",
        text: "The study describes slow rotating movements, bending and rising, overlapping voices and drum patterns that respond to the dancers rather than maintaining a mechanically fixed beat. The guru has a special role in initiating sections and explaining words that other performers may know only approximately. Moisala could not identify the performance language simply as ordinary Gurung or Nepali; other local accounts identify an older Nepali form. This difference is worth retaining. It warns against publishing an invented standard translation based only on a performance’s visual appearance.",
      },
      {
        title: "Ritual meaning and respectful documentation",
        text: "The sources describe divine presence or possession in some performances and important responsibilities for the guru and supporting participants. These are attributed beliefs and observations, not a tutorial for inducing a ritual state. Festival presentations, selected episodes and full village observances are not interchangeable. A permitted recording should identify the performers, place, date and type of performance. The photograph on this page shows Ghatu performers at a Kathmandu Lhosar gathering; it is not evidence of the full annual ceremony described in the research.",
      },
    ],
  }),
  article({
    slug: "rodhi",
    title: "Rodhi: a space for community",
    summary:
      "Sociability, cooperation and cultural change in a locally grounded study of Ghandruk.",
    category: "Culture",
    region: "Ghandruk, Kaski",
    period: "Living tradition",
    image: "house",
    imageNote: "Museum reconstruction of Gurung domestic life.",
    evidence: "Academic research",
    sourceIds: ["rodhi", "guide", "world"],
    sourceNotes: {
      rodhi: "2023 Ghandruk study; local transformation",
      guide: "The Family, pp. 11–12: Rodhi groups, hosts, work and sociability",
      world: "p. 71: exchange and paid work parties",
    },
    sections: [
      {
        title: "An institution rather than a venue label",
        text: "Rodhi is associated with young people gathering, singing and developing social relationships, but the older guide also connects it with practical cooperation. A group and the relationships among its members matter as much as the physical house where people meet. Calling a modern entertainment venue a Rodhi does not establish that it reproduces the village institution described by ethnographers. Local accounts are needed to understand which meanings and practices continue.",
      },
      {
        title: "Hosts and collective responsibility",
        text: "Macfarlane and Indrabahadur Gurung describe groups meeting in the home of a member’s parent or another adult who took a guiding role, called the mother or father of the Rodhi. Their account includes adult presence during visiting and overnight gatherings. This is a historically documented arrangement, not a universal specification for every Rodhi house. It also challenges outsiders’ tendency to equate mixed sociability, song and courtship with an absence of responsibility.",
      },
      {
        title: "Singing, visiting and a wider network",
        text: "The guide describes visits between groups in neighbouring villages, sometimes involving substantial walks at night and a return before daytime chores. Singing and joking created relationships across settlements as well as within a home group. Such activities help explain why Rodhi should not be reduced to a stage show or one style of duet. Its social setting could involve age peers, hosts, visitors and work companions together.",
      },
      {
        title: "Work and leisure could overlap",
        text: "In the same account young people cooperated in practical tasks, and evening sociability could accompany processing beans or wool. The boundary between a work party and a musical gathering was therefore less rigid than a modern timetable of work and entertainment might suggest. Harrison and Macfarlane separately document exchange and paid labour groups. Those observations provide context without proving that every collective labour party was a Rodhi.",
      },
      {
        title: "Change in Ghandruk",
        text: "Saroj Raj Panta’s 2023 study examines Rodhi culture and factors in its transformation specifically in Ghandruk, Kaski. It offers a local research setting for asking how migration, new livelihoods and changing social expectations affect the institution. The older guide discusses criticism of Rodhi and the effect of young people leaving villages. Neither source proves that Rodhi has disappeared from all Gurung communities or that one cause explains change everywhere.",
      },
      {
        title: "Remembering without romanticising",
        text: "A fuller account would include former participants, current organisers, women, young people and local hosts, with the place and period identified. People may value different aspects: song, friendship, work cooperation or a sense of village belonging. Preserving the institution’s history does not require treating every older arrangement as ideal or every newer form as inauthentic. This article publishes no invented song lyrics, recordings or private accounts of courtship.",
      },
    ],
  }),
  article({
    slug: "tamu-kyi",
    title: "Tamu Kyi: the language of our people",
    summary:
      "Language relationships, regional variation and the work of intergenerational preservation.",
    category: "Language",
    region: "Nepal",
    period: "Living language",
    image: "lhosar",
    imageNote: "Community gathering at Tamu Lhosar; illustrative only.",
    evidence: "Academic research",
    sourceIds: ["glottolog", "ela", "khema", "unicode"],
    sourceNotes: {
      ela: "Affiliation; Previous Research; ELA’s Work",
      unicode: "Unicode 16.0.0 release and Gurung Khema block",
      khema: "Script recognition and digital teaching initiatives",
    },
    sections: [
      {
        title: "Tamu Kyi and the people who speak it",
        text: "The Endangered Language Alliance translates Tamu kyi as the language of the Tamu and explains that Gurung is the more widely used name outside the speech community. The language is associated with the middle hills of central Nepal and is also spoken in towns and overseas. Language, surname and identity cannot be counted as the same thing: someone may identify as Gurung without having learned Tamu Kyi as a first language, while multilingual speakers use different languages in different settings.",
      },
      {
        title: "Linguistic relationships",
        text: "Glottolog catalogues Gurung under guru1261 and the ISO identifier gvr within the Sino-Tibetan family. ELA describes its Tamangic relationships with Tamang, Thakali, Manange, Nar Phu and Chantyal. These classifications concern historical relationships between languages. They do not establish a single ancestral birthplace for all Gurungs or erase the separate identities of neighbouring peoples. Gurung also has a long history of contact with Nepali, an Indo-Aryan language used in schooling and communication across communities.",
      },
      {
        title: "Village variation and tone",
        text: "ELA reports village-associated varieties and discusses the changing scholarly understanding of eastern and western Gurung. A later sociolinguistic survey found the division less clear-cut than some earlier accounts implied. Studies listed by ELA examine tone, voicing and other sound patterns, including work on Sikles speech. A catalogue merger is not a declaration that local speech differences are errors. A word collection should preserve the speaker’s variety and pronunciation instead of silently manufacturing one universal form.",
      },
      {
        title: "A record of dictionaries and conversations",
        text: "ELA lists the 1977 Gurung–Nepali–English dictionary by Warren Glover, Jessie Glover and Deu Bahadur Gurung, and the 1979 Conversational Gurung by Jessie Glover and Deu Bahadur Gurung. Its own project with Narayan Gurung began in 2013, producing spoken-text documentation and linguistic studies. These sources offer verifiable routes toward language learning and research. This archive has not reproduced a dictionary wholesale or invented translations and pronunciation recordings.",
      },
      {
        title: "Writing and digital access",
        text: "Gurung Khema is one of the language’s writing systems. Unicode 16.0.0 added the script in September 2024, giving its characters standard digital identifiers. Translation Commons reports subsequent work on fonts, keyboards and trainer workshops. Writing support enables messages, publications and learning materials, but literacy in a script is distinct from conversational fluency. Other conventions used in earlier documentation remain important for reading the language’s research history.",
      },
      {
        title: "Passing the language on",
        text: "ELA describes reduced transmission among many New York community members and changes associated with migration to towns in Nepal. These are situated observations rather than one rate of language loss for all Gurungs. Family conversation, community teaching and permitted recordings address different needs: active use, literacy and an enduring record. Preserving Tamu Kyi means valuing speakers’ everyday knowledge alongside ritual registers, without making fluency a test of someone’s right to belong to the Tamu community.",
      },
    ],
  }),
  article({
    slug: "ghandruk",
    title: "Ghandruk: a living mountain village",
    summary:
      "Stone houses, changing livelihoods and the relationship between tourism and community life.",
    category: "Homeland",
    region: "Ghandruk, Kaski",
    period: "Contemporary",
    image: "village",
    evidence: "Academic research",
    sourceIds: ["tourism", "rodhi"],
    sections: [
      {
        title: "A place, not a universal model",
        text: "Ghandruk offers a setting for exploring Gurung heritage alongside contemporary livelihoods. Its landscape and architecture should not stand in for every Gurung village. Community practices and opportunities differ across valleys and regions.",
      },
      {
        title: "Tourism and conservation",
        text: "Adhikari and Fischer’s 2011 study examines tourism, forestry and household livelihoods in two wards of Ghandruk. It identifies benefits for livelihoods and conservation while acknowledging environmental and sociocultural trade-offs. The scope of that household research remains important when interpreting its conclusions.",
      },
      {
        title: "Culture in everyday life",
        text: "Panta’s 2023 Rodhi study adds a locally grounded discussion of cultural transformation. Read together, these studies resist presenting tourism either as an uncomplicated rescue of heritage or as the sole cause of cultural change.",
      },
    ],
  }),
  article({
    slug: "manang",
    title: "Manang: neighbours and shared landscapes",
    summary: "A village-level view of cultural and religious relationships in Gyasumdo.",
    category: "Homeland",
    region: "Tapje, Manang",
    period: "Ethnographic present",
    image: "manang",
    evidence: "Academic research",
    sourceIds: ["mumford"],
    sections: [
      {
        title: "Starting with a situated account",
        text: "Mumford’s study of a Gurung death rite describes Tapje in Gyasumdo, Manang. Gurung residents share the region with Tibetan communities, offering a particular example of relationships across religious and linguistic traditions.",
      },
      {
        title: "Connections without sameness",
        text: "His description includes relationships with Ghyabre and Paju practitioners and the occasional participation of Tibetan lamas in household religious life. Shared landscapes and ritual connections do not make all local communities culturally identical.",
      },
      {
        title: "Avoiding a regional shortcut",
        text: "One village study cannot establish that all of Manang is Gurung. Future profiles need their own documentation of settlement, local identity, language and livelihood rather than extrapolating a single ethnography to an entire district.",
      },
    ],
  }),
  article({
    slug: "gurkha-history",
    title: "Beyond the mountains: Gurung & Gurkha history",
    summary: "Military service is an important strand of the story—not a synonym for a people.",
    category: "History",
    region: "Nepal & Britain",
    period: "Modern history",
    image: "gurkha",
    imageNote:
      "Memorial in Whitehall, London; commemorates Gurkha service broadly, not Gurungs alone.",
    evidence: "Academic research",
    sourceIds: ["guide", "pariyar"],
    sections: [
      {
        title: "Gurung is not Gurkha",
        text: "Gurung or Tamu describes a community identity. Gurkha belongs to a wider military history involving more than one community. Macfarlane and Indrabahadur Gurung describe Gurungs as one of the major groups from which Gurkha soldiers were recruited, not the only group.",
      },
      {
        title: "Service and settlement",
        text: "Pariyar’s research examines military recruitment and the formation of Nepali Gurkha communities in Britain. Military institutions, caste relationships and migration policy all participate in this history, which cannot be told solely through battlefield reputation.",
      },
      {
        title: "Lives beyond service",
        text: "Veterans, families and civilian communities have distinct experiences. This archive will add biographies and military records only where identities and sources can be verified. The online version of A Guide to the Gurungs is labelled a draft that differs from the published edition.",
      },
    ],
  }),
  article({
    slug: "united-kingdom",
    title: "Tamu lives in the United Kingdom",
    summary: "Community-making, religion and belonging beyond Nepal.",
    category: "Diaspora",
    region: "United Kingdom",
    period: "Contemporary",
    evidence: "Academic research",
    sourceIds: ["florence", "pariyar"],
    sections: [
      {
        title: "Belonging beyond the homeland",
        text: "Florence Gurung’s Oxford thesis explores Gurung experiences of belonging in Britain, including settlement in Rushmoor, religious institutions and community identity. Its British setting is explicit; the findings are not assumed to describe every overseas Tamu community.",
      },
      {
        title: "Military and family migration",
        text: "Pariyar connects settlement-policy changes with the growth of veterans’ communities and examines the social bonds and exclusions that can accompany them. This gives context for military-linked migration without reducing the entire diaspora to service personnel.",
      },
      {
        title: "A living, varied community",
        text: "People preserve and reinterpret heritage through family life, organizations and religious practice. No population estimate is provided here without a defined source, year and denominator. Other country profiles will be added when adequate Gurung-specific documentation is available.",
      },
    ],
  }),
  article({
    slug: "gurung-khema",
    title: "Gurung Khema: writing Tamu Kyi in the digital age",
    summary:
      "A community writing system, its recognition in Nepal and Sikkim, and the 2024 Unicode milestone that made digital exchange more reliable.",
    category: "Language",
    region: "Nepal, Sikkim & diaspora",
    period: "Late twentieth century–2026",
    evidence: "Academic research",
    sourceIds: ["unicode", "khema", "ela"],
    sourceNotes: {
      unicode: "Release date, newly encoded scripts and new blocks table",
      khema: "Getting Started; Milestones in Gurung Language Preservation",
      ela: "Previous Research",
    },
    sections: [
      {
        title: "A language and a script are different things",
        text: "Tamu Kyi is a spoken language; Gurung Khema is a system for writing it. Translation Commons records the alternative names Khema Phri, Khema Lipi and Tamu Khema Phri. A person can speak Gurung without reading Khema, and knowledge of a script does not erase village dialect differences. Earlier Gurung documentation has also used other writing conventions, including the Roman transcription familiar in linguistic dictionaries. It is therefore more accurate to describe several histories of literacy than to assume that every Gurung family has always used one script.",
      },
      {
        title: "Community recognition and teaching",
        text: "Translation Commons credits Bal Narsingh Gurung with developing the script under the supervision of Guru Pim Bahadur Gurung. Its account describes presentation at a Tamu Chonj Dhin convention in Kathmandu in 1995, teaching initiatives led by Bhim Gurung in Devdaha in 1996, and recognition and school use in Sikkim in 1997. These milestones are the project’s account of institutional adoption, not evidence that all speakers immediately adopted the script. The page contains an inconsistent Gregorian/Bikram Sambat date for completion, so that particular conversion is not repeated here.",
      },
      {
        title: "What happened in September 2024",
        text: "The Unicode Consortium lists Gurung Khema among the seven scripts added in Unicode 16.0.0, released on 10 September 2024. Its assigned block is U+16100–U+1613F. Unicode gives characters stable identities across digital systems: a typed character need not depend on a private font’s arbitrary letter mapping. This is an important foundation for exchanging, archiving and searching Khema text. It does not automatically install a keyboard or ensure that every older phone can display the letters.",
      },
      {
        title: "Fonts, keyboards and new teachers",
        text: "Translation Commons reports that Mark Jamra and Neil Patel worked on Unicode-based fonts and Craig Cornelius on a keyboard, beginning in 2025. It also describes trainer workshops in late 2025 and early 2026, including programmes in Lumbini Province. These tools connect cultural work with ordinary activities: writing messages, preparing learning materials and producing publications. The project reports use of Khema in a Gurung edition of the Sikkim Herald dated 17 July 2019, demonstrating that community publishing preceded the Unicode milestone.",
      },
      {
        title: "Literacy is more than a technical achievement",
        text: "A font preserves the shapes of letters; speakers, families and teachers preserve meaningful use. Digital support can reduce barriers to publishing, but it cannot by itself ensure that children hear and speak Tamu Kyi. A useful language collection therefore brings writing resources into conversation with recordings, regional speech and opportunities to learn from speakers. This article describes the documented developments without presenting an unverified alphabet lesson or treating one organisation’s orthography as the only legitimate practice.",
      },
    ],
  }),
  article({
    slug: "dialects-and-tone",
    title: "Village voices: dialects and tone in Tamu Kyi",
    summary:
      "Sikles speech, eastern and western classifications, and why pronunciation cannot be separated from the speaker’s home community.",
    category: "Language",
    region: "Central Nepal",
    period: "Linguistic research · 1950s–present",
    evidence: "Academic research",
    sourceIds: ["ela", "glottolog"],
    sourceNotes: {
      ela: "Affiliation; Previous Research; ELA’s Work",
      glottolog: "Language classification and identifier history",
    },
    sections: [
      {
        title: "A language rooted in villages",
        text: "The Endangered Language Alliance reports that Gurung community members associate distinctive speech varieties with individual villages. Its overview mentions a map in the Sikles Eco Museum showing close to one hundred villages, each potentially associated with a local variety. This is not a measured count of one hundred separate languages. It illustrates how language knowledge can be linked to family origin and landscape, and why a dictionary entry needs more context than simply “Gurung”.",
      },
      {
        title: "Eastern and western Gurung",
        text: "Early work summarised by ELA grouped Gurung varieties into fourteen dialect groups and two larger divisions, East Gurung and West Gurung. ELA also reports that a 2015 sociolinguistic survey found the east–west division and claims of mutual unintelligibility weaker than earlier accounts suggested. Glottolog records the merging of the former Eastern Gurung ISO identifier into gvr. These are changes in description and cataloguing, not evidence that village differences disappeared or that every speaker understands every variety equally well.",
      },
      {
        title: "Tone is part of language structure",
        text: "ELA’s bibliography includes work on Gurung tone from the 1950s onward, a guide to tone by the Glovers, and a later analysis of register and contour pitch. Tone concerns patterned distinctions in the sound of words, rather than merely the emotion of a sentence. ELA’s Sikles project includes Danielle Ronkos’s research on tone and contrastive voicing. A dependable pronunciation guide would therefore require actual speaker recordings and linguistic analysis; approximating every word through English spelling would leave out important distinctions.",
      },
      {
        title: "Contact with Nepali",
        text: "ELA places Gurung in the Tamangic group and notes relationships with Tamang, Thakali, Manange, Nar Phu and Chantyal. It also describes centuries of contact with Nepali, an Indo-Aryan language, and widespread bilingualism among Gurung speakers. Speaking Nepali does not make someone less Tamu, but a shift toward Nepali as the main language of home and school can change which Gurung expressions children learn. Linguistic relationship, bilingual ability and ethnic belonging are related questions, not interchangeable labels.",
      },
      {
        title: "How regional knowledge can be recorded",
        text: "A useful word record names the speaker, village or variety, meaning and context of use. Different pronunciations should be retained rather than silently corrected into a single form. ELA’s work with Sikles speakers offers a documented example of this approach: spoken texts, dialogues and interviews support both grammatical research and a developing lexicon. The material described here is an introduction to that work, not a claim that a complete community-approved standard dictionary already exists in this archive.",
      },
    ],
  }),
  article({
    slug: "language-documentation",
    title: "Recording a living language: stories, conversation and memory",
    summary:
      "How Gurung speakers and researchers preserve ordinary speech as well as specialist knowledge, from Sikles to New York.",
    category: "Language",
    region: "Sikles & New York",
    period: "2013–present documentation project",
    evidence: "Academic research",
    sourceIds: ["ela", "pe-review"],
    sourceNotes: {
      ela: "ELA’s Work and linked public recording catalogue",
      "pe-review":
        "Paragraphs 4–8; scholarly review, not a reading of the complete two-volume corpus",
    },
    sections: [
      {
        title: "Speakers are collaborators",
        text: "ELA’s Gurung documentation project began in 2013 with Narayan Gurung, a New York resident and former president of the Gurung (Tamu) Society. The project focuses on the variety spoken in Sikles, and its researchers have also travelled to Sikles to work with speakers there. This connects diaspora knowledge with the home village rather than treating migrants as detached from authentic language. Naming the collaborators matters: a recording depends on people who provide vocabulary, explanations, memories and judgments about natural speech.",
      },
      {
        title: "A record of more than ceremonial speech",
        text: "The public catalogue linked by ELA includes topics such as migration to New York, military experience, potato curry, honey hunting and stories of mountain creatures. Everyday cooking, humour and recollection reveal vocabulary and patterns that a formal word list may miss. The value of the collection is not that every recording represents all Gurungs, but that particular speakers can be heard talking about particular experiences. A personal narrative is evidence of that person’s account, not an independently verified history of the whole community.",
      },
      {
        title: "From sound to grammar and dictionary",
        text: "ELA describes a sketch grammar built from spoken texts in several genres, topical studies of sound and grammar, and work toward a searchable Gurung lexicon through Kratylos. Transcription, translation and linguistic annotation make a recording more accessible and easier to study. They also involve interpretation: a fluent speaker’s explanation and a researcher’s grammatical analysis contribute different kinds of knowledge. A good archive preserves both the original speech and enough context to understand how a translation was made.",
      },
      {
        title: "Ordinary language and ritual registers",
        text: "Mark Turin’s review of Simon Strickland’s Gurung Pe collection describes a specialised ritual register used in recitations. That register cannot simply be substituted for everyday conversation. Ritual specialists may know expressions that younger conversational speakers do not use, while ordinary speakers preserve new vocabulary shaped by school, work and migration. Recording only sacred performance or only daily conversation would give an incomplete picture of the language’s range.",
      },
      {
        title: "Listening with permission and context",
        text: "ELA provides links to its public recordings on its Gurung language page. This archive directs readers to that published collection rather than copying recordings, inventing audio or assuming unrestricted reuse. A responsible future contribution would include permission, attribution, language variety and an explanation of whether the material is public, family-only or restricted. Preservation includes respecting the limits a speaker sets, not just obtaining a technically clear recording.",
      },
    ],
  }),
  article({
    slug: "pye-oral-literature",
    title: "Pe / Pye: the Tamu oral literary world",
    summary:
      "Ritual poetry holds narratives of origins, journeys and cosmology, carried by named Gurung knowledge holders across generations.",
    category: "Spirituality",
    region: "Sikles & central-western Nepal",
    period: "Oral tradition · documentation published 2018",
    evidence: "Scholarly interpretation",
    sourceIds: ["pe-review", "evans", "pettigrew"],
    sourceNotes: {
      "pe-review": "Paragraphs 4–8; review of Strickland’s 2018 volumes",
      evans: "Ethnohistorical account and Lẽmakõ Rõh Pye",
      pettigrew: "Funeral journey and ritual landscape",
    },
    sections: [
      {
        title: "A body of recitations, not one book",
        text: "Mark Turin describes pe, also transcribed pye or pe-da lu-da, as a diverse collection of oral narratives, invocations, accounts of ethnogenesis and cosmological texts. They are performed in a ritual register of Gurung. These recitations have different purposes, including supporting health and prosperity and responding to illness and bereavement. The term therefore should not be reduced to a single origin myth, a modern written scripture or an all-purpose translation for “religion”.",
      },
      {
        title: "Learning through specialists",
        text: "The review identifies master po-ju Padam Sing Gurung and master ɬew-ri Bir Bahadur Gurung as central knowledge holders in Strickland’s research in Sikles. Their expertise was essential to recording and explaining the recitations. Turin explicitly asks whether their contribution deserved more prominent recognition in the publication. This is a reminder that an archive must credit the people who transmit and interpret oral literature, not only the scholar whose name appears on a book cover.",
      },
      {
        title: "The scale of the documented collection",
        text: "According to Turin’s review, Strickland’s two 2018 volumes contain approximately 13,000 lines of annotated transcription for ninety-two pe, with synopses of forty-nine additional items amounting to roughly 4,000 more lines. They include an analytical introduction, maps, photographs, indexes and recordings on an accompanying DVD. These figures describe that published corpus; they are not a count of every recitation known in every Tamu village. The archive has consulted the review rather than claiming to have analysed all the original volumes.",
      },
      {
        title: "Landscape and remembered journeys",
        text: "Evans’s study places an ancestral migration narrative alongside archaeological investigation at Kohla. Pettigrew examines a funeral soul journey and its physical retracing by Tamu activists. Together these works show how spoken literature can name places, connect ancestors to a landscape and support collective identity. A chanted route can carry religious and historical meaning without supplying an exact calendar date for migration or a map that can be treated as an independently verified itinerary.",
      },
      {
        title: "Publication does not remove cultural boundaries",
        text: "A scholarly transcription makes a particular performance available for study; it does not make all ceremonies open to reenactment or commercial reuse. Nor do comparisons with Bon in the literature establish that every Tamu practitioner uses the same religious label. This introduction discusses the nature of the collection and its collaborators without reproducing ritual instructions, private chants or a synthetic sacred text assembled from different communities.",
      },
    ],
  }),
  article({
    slug: "sikles",
    title: "Sikles: village, language and ancestral connections",
    summary:
      "A Gurung settlement in Kaski with rich linguistic documentation, local life-cycle traditions, and connections to the Kohla ancestral landscape.",
    category: "Homeland",
    region: "Sikles, Kaski",
    period: "Living village & research history",
    image: "sikles",
    imageNote:
      "Present-day Sikles village, Kaski; not a photograph of the Kohla archaeological site.",
    evidence: "Academic research",
    sourceIds: ["ela", "initiation", "evans", "pe-review", "guide"],
    sourceNotes: {
      ela: "Affiliation and ELA’s Work",
      initiation: "Abstract · full article could not be retrieved during this research pass",
      "pe-review": "Paragraph 8; Siklis fieldwork and knowledge holders",
      guide: "Introduction; historical pastoralism",
    },
    sections: [
      {
        title: "A place with several spellings",
        text: "Sikles, Siklis and Sikles village appear in the sources used here. Variation in English spelling should not be mistaken for evidence of several unrelated settlements. The village is in Kaski, in the central Nepal Gurung homeland. Its significance in this collection is not simply its mountain scenery: it is a place where family, language, livelihood and specialist knowledge have been documented in detail. A photograph of today’s village shows a living settlement, not a reconstruction of ancestral times.",
      },
      {
        title: "A centre of language documentation",
        text: "ELA’s project with Narayan Gurung focuses on Sikles speech and includes work with speakers in the village as well as New York. Its account describes recorded narratives and conversations, a developing sketch grammar, and research on tone and voicing. The village’s Eco Museum also appears in ELA’s overview as the location of a map showing close to one hundred Gurung villages. The map is a community-oriented representation of settlement diversity, not a census of mutually unintelligible languages.",
      },
      {
        title: "Knowledge holders and oral literature",
        text: "Turin’s review of Strickland’s work names Padam Sing Gurung and Bir Bahadur Gurung as master practitioners whose knowledge supported the recording of pe in Siklis. Their presence makes the village a specific location in the history of Gurung oral-literature documentation. Treating them as knowledgeable collaborators helps move beyond descriptions that portray a village as a timeless cultural exhibit. The recorded literature represents work with particular experts at a particular historical moment.",
      },
      {
        title: "Life-cycle rituals in a local study",
        text: "Pol Bahadur Gurung’s 2022 article examines boys’ haircut and girls’ dress-giving initiation rituals in Sikles, using observation, interviews and case studies. Its abstract links the rites with recognition of maturity, family merit, gifts and renewed social relations. These are local customary accounts, not legal definitions of adulthood. The study provides a route into understanding how relatives and neighbours participate in growing up; it should not be used to prescribe what every Gurung child must do.",
      },
      {
        title: "Sikles and Kohla are not interchangeable",
        text: "Evans’s archaeological and ethnohistorical work investigates Kohla as an ancestral settlement, while Sikles is a present-day village connected to that broader landscape. Macfarlane and Indrabahadur Gurung’s older guide also places Siklis among villages with important herding traditions. These strands make Sikles useful for exploring both remembered ancestry and everyday livelihoods. They do not justify collapsing an archaeological site, a sacred journey and a contemporary community into one place or one period.",
      },
    ],
  }),
  article({
    slug: "terraces-and-crops",
    title: "Terraced fields: the Gurung agricultural year",
    summary:
      "Rice below, maize and millet above: how crops, rain, household labour and livestock connect in documented village farming.",
    category: "Homeland",
    region: "Thak & central Nepal hill villages",
    period: "Historical village observations",
    image: "village",
    imageNote:
      "Ghandruk village landscape; regional context, not a photograph of the Thak fields discussed.",
    evidence: "Academic research",
    sourceIds: ["world", "guide"],
    sourceNotes: {
      world: "pp. 54–72: yearly cycle, rice, maize, millet, work parties and vegetables",
      guide: "Introduction: crops, terraces and seasonal work",
    },
    sections: [
      {
        title: "Making fields on a slope",
        text: "Macfarlane and Indrabahadur Gurung describe terraced agriculture in which rice is grown in lower fields and maize and millet higher up. Terraces turn a steep slope into surfaces that can hold soil and, where suitable, irrigation water. This landscape is built and maintained, not simply a natural backdrop to village life. The authors’ account connects field walls, water management and repeated labour with a household’s ability to produce grain. It describes historically observed villages rather than a current survey of every Gurung farm.",
      },
      {
        title: "Working with monsoon water",
        text: "The World of the Gurungs describes preparation of rice fields, sowing in nursery plots and transplanting after water becomes available. In a quoted historical account, channels bring stream water into terraces and excess water passes downward from one level to the next. Repairs to walls and clearing plants that loosen stones are part of cultivation. The timing depends on rain: the text notes that a dry year altered planting work. Its calendar is therefore an example of an agricultural rhythm, not an exact schedule for all altitudes and years.",
      },
      {
        title: "An illustrative yearly rhythm",
        text: "The book’s calendar places manure carrying, building and path repair in the quieter early months; maize-field preparation and rice nurseries in spring; rice and millet transplanting around the start of the monsoon; and rice and millet harvest and threshing in the autumn and early winter. May to July are described as especially demanding. This helps explain why household work, festivals and visiting cannot be understood apart from the farming season. Changes in weather, irrigation, labour and crop choice can shift the rhythm.",
      },
      {
        title: "More than three grain crops",
        text: "The same account describes lentils, beans and vegetables grown between crops, along terrace embankments and in small gardens. Potatoes can be grown after a main harvest or in higher fields; gardens include vegetables and spices. Intercropping and the use of field edges make small holdings support a wider diet than grain production alone suggests. The book specifically discusses pulses as a source of protein in documented households. These observations are not a complete nutritional survey or a list of foods exclusive to Gurungs.",
      },
      {
        title: "Animals, manure and people",
        text: "Crop production connects with animal keeping: manure is carried to fields, fodder is cut for livestock, and returning herds may graze stubble after harvest. Labour is likewise social, with work parties assembled through exchange or payment. A field’s productivity therefore depends on relationships among people, animals, forests and water. Historical accounts help make these connections visible while leaving room for present-day changes caused by migration, wage work, machinery and new livelihoods.",
      },
    ],
  }),
  article({
    slug: "seasonal-herding",
    title: "Sheep, high pastures and seasonal movement",
    summary:
      "The pastoral strand of Gurung livelihoods links mountain grazing, wool, field fertility and specialised knowledge of seasonal routes.",
    category: "Homeland",
    region: "Central Nepal high-pasture villages",
    period: "Historical pastoral observations",
    image: "mountains",
    imageNote:
      "Annapurna mountain landscape; geographical context, not a photograph of a documented herding camp.",
    evidence: "Academic research",
    sourceIds: ["guide", "world"],
    sourceNotes: {
      guide: "Introduction: pastoralism and migratory cycle",
      world: "Animals; pp. 89–91: wool and weaving",
    },
    sections: [
      {
        title: "Pastoralism alongside cultivation",
        text: "The guide describes Gurung livelihoods as combining animal husbandry and arable farming, with herding especially important in higher villages that had access to summer pasture. It names Siklis, Bhujung and Ghanpokhara as examples in its historical account. Sheep, goats, cattle and buffalo played different roles: sheep supplied wool, goats were associated with meat, and buffalo kept near houses supplied milk and manure. This is a differentiated economy, not one undivided practice of “mountain farming”.",
      },
      {
        title: "Moving upward and returning",
        text: "In the seasonal cycle described by the guide, herds moved toward higher grazing before the monsoon and returned through the forests in autumn. Shepherds from different villages occupied temporary summer encampments. The return linked animals with recently harvested fields, where grazing used crop residues and helped manure the land. These routes were recurring livelihood movements, not the same thing as the ancestral migrations remembered in ritual poetry. The precise timing and availability of pasture would depend on place and conditions.",
      },
      {
        title: "Different kinds of daily work",
        text: "A stalled buffalo and a flock in high pasture require different labour. The guide describes heavy loads of grass and leaves carried to village buffalo, whereas shepherds accompany moving flocks. Herding therefore divides tasks across a household and across seasons. The work depends on judging grazing conditions, caring for animals and negotiating access to land. An image of a snowy peak alone cannot show these relationships; the pastoral landscape includes forests, paths, fields and inhabited places as well as high mountains.",
      },
      {
        title: "From sheep to textiles",
        text: "Macfarlane and Indrabahadur Gurung describe local sheep wool being used for sturdy capes and rugs, while later imported wool supported different products. Harrison and Macfarlane’s film notes also document spinning and weaving. Livestock thus supplied material for clothing and household objects as well as food and fertility for fields. A textile’s history can reveal whether its fibre came from a local flock, a gathered plant or a purchased supply. Not all objects worn at a modern festival were made through the same production chain.",
      },
      {
        title: "Remembered routes and changing livelihoods",
        text: "These sources document a pastoral system at particular times, not its present extent. Schooling, migration, labour availability, conservation policies and markets can change how a family uses high pasture. A responsible local account would identify who herds now, which route is followed and which season the description concerns. Historical pastoral knowledge remains important even where households no longer keep large flocks, because it connects family memories and material culture with named landscapes.",
      },
    ],
  }),
  article({
    slug: "gurung-food",
    title: "At the Gurung hearth: grain, greens and shared meals",
    summary:
      "Everyday meals reflect hill agriculture, preserved foods, livestock and hospitality—not just a single festival menu.",
    category: "Culture",
    region: "Central Nepal & diaspora",
    period: "Historical accounts & living practice",
    image: "house",
    imageNote:
      "Museum reconstruction of a Gurung household; illustrative, not a photograph of a meal in Thak.",
    evidence: "Academic research",
    sourceIds: ["guide", "world", "ela"],
    sourceNotes: {
      guide: "Health and Diet; The Village",
      world: "pp. 54–72: crops, vegetables and pulses",
      ela: "Public recording catalogue: Potato Curry",
    },
    sections: [
      {
        title: "Food follows the fields",
        text: "The guide describes rice, maize and millet as major grains of Gurung hill agriculture, with lentils, beans and vegetables alongside them. Rice dishes and millet preparations belong to a wider Nepali food landscape as well as particular Gurung households. A useful account of Tamu food therefore asks who prepares a dish, where its ingredients come from and on what occasion it is eaten, rather than declaring all foods in a Gurung kitchen uniquely ethnic. What a family eats also varies with altitude, harvest, income and access to markets.",
      },
      {
        title: "Greens, pulses and preservation",
        text: "Harrison and Macfarlane describe vegetables and pulses grown in gardens, between main crops and on field embankments. Macfarlane and Indrabahadur Gurung’s account of diet includes vegetables and preserved foods, while its house description notes drying and smoking above the hearth. Preservation lets a harvest or a slaughter supply food beyond the day it is gathered. These methods connect cuisine with seasonal labour and storage space; they are not evidence that all households prepare or consume the same quantities.",
      },
      {
        title: "The hearth as a household centre",
        text: "In the guide’s village-house description, cooking takes place around a wood fire, with a rack above it for drying food and storing some implements. Pots, grain baskets and vessels for water and drink occupy nearby space. Meals are therefore part of the house’s organisation rather than an isolated activity. Keeping a fire supplied, bringing water and preparing grain are substantial forms of work. The historical arrangement should not be taken as a requirement for contemporary Gurung homes with different kitchens and fuels.",
      },
      {
        title: "Hospitality and ceremonial gatherings",
        text: "The guide describes guests receiving food and drink and notes ceremonial exchanges in marriage and memorial occasions. Shared meals bring relatives and neighbours into the work of a gathering as well as its enjoyment. Alcoholic grain drinks appear in the historical accounts, but personal preference, religion, age and family practice differ. No one food or drink can serve as a test of authentic Tamu identity. Festival menus abroad may combine remembered village dishes with ingredients available locally.",
      },
      {
        title: "Learning from cooks and speakers",
        text: "ELA’s public Gurung recording catalogue includes a potato-curry recording, showing how ordinary food knowledge can also support language documentation. A cooking account can preserve names for ingredients, tools, textures and family habits that a formal dictionary misses. This archive has not invented a traditional recipe or assigned unverified Gurung translations to ingredients. A detailed recipe contribution would benefit from a named cook, village or family context, ingredient quantities and permission to publish the account.",
      },
    ],
  }),
  article({
    slug: "stone-houses",
    title: "Stone houses and the organisation of home",
    summary:
      "Walls, roofs, verandas, grain stores and hearths make Gurung architecture part of an everyday working landscape.",
    category: "Homeland",
    region: "Central Nepal hill villages",
    period: "Historical domestic life & change",
    image: "house",
    imageNote:
      "Museum reconstruction of Gurung domestic life; not a preserved historical house in Thak.",
    evidence: "Academic research",
    sourceIds: ["guide", "world"],
    sourceNotes: {
      guide: "The Village: houses and household work",
      world: "pp. 92 onward: Building",
    },
    sections: [
      {
        title: "A house is made from its surroundings",
        text: "The guide describes village houses built from materials such as stone, timber and earth, while Harrison and Macfarlane’s building notes document stone quarrying and construction work. Access to material, household means and skilled labour shape what is built. The book notes that remittance income also supported substantial houses in some settings. There is therefore no single timeless Gurung house type: the stone façade familiar to visitors is one part of a longer history of materials, rebuilding and investment.",
      },
      {
        title: "Inside and outside work spaces",
        text: "The historical guide describes sleeping space downstairs and an upper area used for grain, baskets, mats and tools. Verandas extend domestic activities outside, supporting rest, child care and work. Such arrangements connect a house to farming: crops need storage, implements need accessible places, and wet-season activities need shelter. A dwelling is consequently both a place of family intimacy and an element in the productive household. Current homes may organise these functions very differently.",
      },
      {
        title: "The hearth and the rack above it",
        text: "A wood-fire cooking area forms the focal point of the interior in the guide. A suspended rack supports drying or smoking food and keeping some objects above the floor. Shelves hold dishes and vessels, and larger baskets and pots store grain, water and drink. Smoke, heat and storage are intertwined in this description. It is an account of observed domestic arrangements, not a claim that an enclosed smoky kitchen is desirable or that every Gurung household retains it today.",
      },
      {
        title: "Maintenance is part of architecture",
        text: "Earthen floors, roofs, firewood supplies and water access require repeated attention. The guide describes routine floor maintenance and the labour of collecting fuel and water. Harrison and Macfarlane record quarrying and the coordination of workers during rebuilding. These tasks make architecture a social process rather than a static object. The knowledge involved includes preparing materials, organising help and keeping the household usable through changing seasons.",
      },
      {
        title: "Looking beyond picturesque villages",
        text: "Tourism photographs often foreground stone roofs and mountain views, but the sources also invite attention to storage, sanitation, household labour and changing income. A museum reconstruction can suggest an interior arrangement, yet it cannot replace a dated account from a particular home. This archive identifies reconstructed imagery accordingly. Architectural heritage is strongest when it records the builders, household and circumstances of change, rather than requiring a living village to remain visually unchanged for visitors.",
      },
    ],
  }),
  article({
    slug: "weaving-and-bamboo",
    title: "Nettle, wool and bamboo: Gurung household crafts",
    summary:
      "Backstrap weaving, fibre preparation and basket making connect practical objects with forests, flocks and intergenerational skill.",
    category: "Culture",
    region: "Central Nepal hill villages",
    period: "Historical crafts · filmed in the 1990s",
    image: "house",
    imageNote:
      "Reconstructed household interior; context only, not a demonstration of fibre processing.",
    evidence: "Academic research",
    sourceIds: ["guide", "world"],
    sourceNotes: {
      guide: "The Village: bamboo, mats, spinning and textiles",
      world: "pp. 89–91: Spinning and weaving; Weaving with nettle fibre",
    },
    sections: [
      {
        title: "Objects made for daily use",
        text: "The guide describes baskets for carrying and storage, trays for winnowing, mats, rain shields and wooden vessels. These are not merely decorative heritage objects: their shapes answer tasks such as moving grain, sorting a harvest, keeping rain off a worker or managing milk. The availability of bamboo, timber, wool and nettle fibre varies by place. Craft production is therefore linked to the village’s surrounding resources and to exchange with other settlements.",
      },
      {
        title: "The backstrap loom",
        text: "Macfarlane and Indrabahadur Gurung describe a loom whose warp tension is controlled through the weaver’s body, commonly called a backstrap loom. Harrison and Macfarlane’s notes accompany a 1993 film of spinning and weaving and describe older women carrying out the work especially in winter. The body is part of the tool’s operation: maintaining tension and moving the threads are learned skills. The recorded division of labour is historical evidence, not a rule about who is allowed to weave now.",
      },
      {
        title: "Nettle fibre takes work",
        text: "The guide describes nettle being washed, beaten and spun before weaving; Harrison and Macfarlane’s notes emphasise the difficulty of processing prickly plants collected in high forest. The resulting thread can make durable cloth for carrying garments and sacks. Calling such fabric “natural” can conceal the labour and discomfort involved in producing it. A bhangra seen at a present-day celebration may use purchased fabric rather than hand-processed nettle, so material should be identified rather than assumed from appearance.",
      },
      {
        title: "Wool and changes in supply",
        text: "Sheep wool was used for sturdy capes and rugs in the guide’s account, alongside later supplies of imported wool and cotton. Purchased cloth and manufactured containers also changed the demand for household production. These changes do not mean that every craft vanished at the same time. They show that an object’s cultural meaning and its materials can change separately: a familiar form may remain while the source of its fibre or the place of manufacture changes.",
      },
      {
        title: "Recording a craft accurately",
        text: "A meaningful craft record identifies the maker, material, tools, village, date and purpose of the object. It can also document how a technique was learned and whether it is still practised. The films referenced in The World of the Gurungs provide dated examples rather than generic demonstrations. This article describes those examples without offering an improvised nettle-processing tutorial or treating every woven item as a uniquely Gurung invention.",
      },
    ],
  }),
  article({
    slug: "communal-labour",
    title: "Working together: exchange labour and village cooperation",
    summary:
      "Harvests, building, carrying and Rodhi show how work and social relationships have been organised together in Gurung villages.",
    category: "Culture",
    region: "Thak & Ghandruk",
    period: "Historical observations & local change",
    evidence: "Academic research",
    sourceIds: ["world", "guide", "rodhi"],
    sourceNotes: {
      world: "p. 71: Communal Work Parties",
      guide: "The Family: Rodhi and work groups",
      rodhi: "Ghandruk-specific study of transformation",
    },
    sections: [
      {
        title: "Many hands for a demanding task",
        text: "Harrison and Macfarlane describe communal work parties for fields, carrying from forests and house construction. Groups could be assembled through payment or exchange, and their film notes place a documented example in the 1990s. Work that is difficult for a single household becomes possible by coordinating several people. The arrangement also creates obligations: a day spent helping one family can be connected to help received at another time.",
      },
      {
        title: "Exchange is not identical to wage work",
        text: "The book distinguishes assembling workers on an exchange basis from hiring them. Both involve cooperation, but the relationship is different. Wage payment settles a job through money; reciprocal labour connects present help with a continuing social relationship. A historical village could use both rather than following one pure system. This distinction matters when discussing migration and labour shortages, because substituting paid workers changes more than the number of people available.",
      },
      {
        title: "Rodhi and practical cooperation",
        text: "The guide connects Rodhi groups with cooperation as well as evening sociability. Young people who sang or visited together could also work together, and some household tasks could be performed during a gathering. Its account challenges a strict separation of labour and leisure: music and joking could accompany work, while evening sociability might include processing beans or wool. Panta’s Ghandruk research adds a later, locally situated discussion of transformation rather than proving that all Rodhi institutions followed the same pattern.",
      },
      {
        title: "Household labour can be overlooked",
        text: "Collective field work is visible, but cooking, preparing food for workers, tending children, fetching water and maintaining a house are also necessary. The guide makes the sustained workload of women and older family members visible, even though some of its characterisations reflect the assumptions of its time. Cooperation should not be romanticised as proof of equal burdens or universal harmony. A fuller account asks who organises a task, who benefits and whose contribution is not counted as public work.",
      },
      {
        title: "Continuity through different forms",
        text: "Families who move to a town or abroad can continue coordinating help through relatives and village associations, even when fewer people exchange field labour. Historical sources show why such relationships matter without establishing that one institution survives everywhere unchanged. A local description should identify the task, participants, payment or exchange arrangement and period. That level of detail makes cooperation understandable as actual practice rather than a vague claim that all Gurungs are naturally communal.",
      },
    ],
  }),
  article({
    slug: "marriage-and-family",
    title: "Marriage, relatives and the making of a Gurung family",
    summary:
      "Clan relationships, family negotiations, blessings and changing choices in historically documented Gurung marriage customs.",
    category: "Culture",
    region: "Central Nepal",
    period: "Historical custom & social change",
    evidence: "Academic research",
    sourceIds: ["guide", "kinship", "world"],
    sourceNotes: {
      guide: "The Family, pp. 8–10 in the online draft",
      kinship: "Comparative discussion of Gurung kinship",
      world: "pp. 223–231: Weddings",
    },
    sections: [
      {
        title: "Marriage connects families",
        text: "Macfarlane and Indrabahadur Gurung describe marriage as joining networks of relatives as well as two individuals. Clan membership, inherited through the father’s line in their account, helps identify relationships and traditionally limits possible partners. Family negotiation can therefore concern existing ties, mutual obligations and social compatibility. This is a historically situated description, not a claim that every present-day Gurung marriage is arranged or that people without knowledge of their clan lack a valid identity.",
      },
      {
        title: "Kinship patterns and partner choice",
        text: "The guide records preferences for certain cross-cousin marriages and avoidance of marriage within one’s own clan. Kinship terminology distinguishes relationships and can encode sex and birth order. Such observations help explain the historical system, but they are not a universal marriage instruction. Local clan classifications differ, and contemporary choices and legal requirements need their own current sources. The archive does not turn an older ethnographic account into advice about whether a particular couple may marry.",
      },
      {
        title: "Blessings and introductions",
        text: "In one ceremony described by the guide, the bride and groom sit together while older relatives offer blessings, place rice mixed with milk on their foreheads and introduce themselves through the kinship terms the bride will use. The account places relatives, rather than a priest, at the centre of that particular event. The ceremony makes relationships publicly recognisable: entering a family includes learning who people are and how they are addressed. Its details should remain attached to the account rather than prescribed for all weddings.",
      },
      {
        title: "Marriage as a process",
        text: "The same guide describes marriage through more than one stage, including a later public transfer into the husband’s lineage and gifts between families. It also discusses how formal registration and urban life were changing that older sequence when the text was written. These observations show custom and state recognition interacting. They do not establish present-day legal procedure, and they should not be read as evidence that every family follows the same stages or understands their significance in exactly the same way.",
      },
      {
        title: "Choice and changing expectations",
        text: "The authors describe growing interest in marriages based on the couple’s own choice, especially in towns. Migration, education, employment and new social networks can change how partners meet while family relationships remain important. A living account of Gurung marriage therefore needs the voices of the couple and relatives, not only a list of ceremonial objects. The historical sources provide context for change without assuming that urban choices are less authentic or that older customs are uniformly remembered.",
      },
    ],
  }),
  article({
    slug: "sikles-initiation",
    title: "Growing up in Sikles: haircut and dress-giving rituals",
    summary:
      "A local study of Khyaper Lapa and Nkyuee Chol Peepa links initiation with blessings, gifts and the renewal of kinship relations.",
    category: "Culture",
    region: "Sikles, Kaski",
    period: "Local study published 2022",
    evidence: "Academic research",
    sourceIds: ["initiation", "guide"],
    sourceNotes: {
      initiation: "Published abstract; full text not retrieved",
      guide: "The Family: childhood and life-cycle observances",
    },
    sections: [
      {
        title: "Two named local observances",
        text: "Pol Bahadur Gurung’s 2022 article identifies boys’ haircut and girls’ dress-giving rituals in Sikles as Khyaper Lapa and Nkyuee Chol Peepa. These spellings follow the publication’s abstract; local pronunciations and other transcriptions may differ. The article studies traditions in one village through participant observation, interviews and case studies. The scope matters: naming a rite in Sikles is not proof that every Gurung settlement uses the same name, age, sequence or symbolism.",
      },
      {
        title: "Recognising a changed social role",
        text: "The abstract argues that the initiation rites mark a transition in how boys and girls are recognised by community members. In its discussion of dress giving, it describes girls being treated as mature participants in agricultural and livelihood activities after the rite. This is a description of customary social recognition, not a legal age of adulthood and not a recommendation that children take on adult workloads. Ritual maturity and contemporary rights, schooling and safeguarding are separate questions.",
      },
      {
        title: "Gifts and the presence of relatives",
        text: "The study links the ceremonies with gift exchange, blessing and the gathering of close kin and neighbours. A rite concerned with one young person also provides an occasion to renew relationships among the people who attend. Gifts and work make those connections visible: preparing, hosting and offering support can affirm who belongs within a network of relatives. The abstract does not supply enough detail to publish a universal inventory of gifts or a complete ceremonial timetable.",
      },
      {
        title: "Merit and collective meaning",
        text: "Gurung’s abstract describes the rites as accumulating merit for family and community and expressing social unity through a division of work. The significance is therefore not limited to changing a hairstyle or receiving an outfit. Those visible actions are placed within a broader network of meaning, obligation and recognition. The archive preserves this distinction without inventing prayers, chants or symbolic explanations absent from the consulted material.",
      },
      {
        title: "A carefully bounded introduction",
        text: "The older guide also mentions boys’ first haircut and a custom of girls receiving adult dress. That provides a comparative historical reference, not an exact match with the Sikles study. Only the 2022 article’s abstract was accessible during this research pass; a detailed sequence, photographs or practitioner account would require the full study and appropriate permission. This limitation is stated so that a sourced introduction is not mistaken for a complete ceremonial manual.",
      },
    ],
  }),
  article({
    slug: "pokhara-village-associations",
    title: "From village to Pokhara: keeping a community together",
    summary:
      "Village associations, clan gatherings and ritual life show how Gurung belonging is rebuilt in an urban setting.",
    category: "Homeland",
    region: "Pokhara & Thak",
    period: "Urban observations · 1990s–2010s",
    evidence: "Academic research",
    sourceIds: ["world", "florence", "ela"],
    sourceNotes: {
      world: "pp. 147–179: Pokhara, Thak samaj, families and clan picnics",
      ela: "Background: rural–urban migration",
      florence: "Comparative UK study of belonging; not a Pokhara survey",
    },
    sections: [
      {
        title: "Moving does not end village ties",
        text: "Harrison and Macfarlane’s account of changing Gurung worlds follows people connected with Thak into Pokhara. Its film notes include visits to the Thak village association, or samaj, in 1997 and 2006. These examples show a community organised through shared village origin while living outside the village. The relationship is not simply nostalgic: people continue gathering for events and maintaining knowledge of relatives and neighbours in a new setting.",
      },
      {
        title: "An urban social calendar",
        text: "The book documents housewarming parties, wedding celebrations, ancestor rites and a memorial service in Pokhara across several years. These occasions give household relationships and ritual practice a new location. A town can therefore be a place of cultural continuity as well as change. The recorded events are specific examples, not a complete calendar for the city’s Gurung population or proof that every family practises the same rites.",
      },
      {
        title: "Village and clan are different connections",
        text: "A village association connects people through a home settlement; a clan gathering connects people through descent identity. Harrison and Macfarlane’s notes describe Kebje clan picnics as another form of urban gathering. The two networks can overlap without being identical. Someone may maintain ties to a home village and a clan while also forming friendships through work, school or religious institutions. Urban belonging is consequently made from several relationships rather than one institution replacing all others.",
      },
      {
        title: "Education, work and language",
        text: "ELA links movement to Pokhara and Kathmandu with opportunities for education and employment, alongside changes in language transmission. Families may gain access to services and new livelihoods while children hear more Nepali at school and in public life. Cultural gatherings can keep Tamu identity visible, but a festival alone cannot guarantee regular use of Tamu Kyi at home. The sources invite attention to the everyday language of families as well as public celebrations.",
      },
      {
        title: "A network that can extend overseas",
        text: "The same ethnographic book follows Thak-connected people to India, Hong Kong and Britain, showing how village relationships can stretch across several destinations. Florence Gurung’s British research offers a different, deeper study of religion and belonging overseas. Read together, these works help understand a village association as one part of a wider social landscape. They do not establish a membership list or current contact directory, and no undocumented association is invented here.",
      },
    ],
  }),
  article({
    slug: "gurungs-new-york",
    title: "Gurung New York: Tamu voices in Queens and Ridgewood",
    summary:
      "Community organisation and language documentation connect New York households with Sikles and the wider Gurung homeland.",
    category: "Diaspora",
    region: "New York, United States",
    period: "Contemporary · documentation since 2013",
    evidence: "Academic research",
    sourceIds: ["ela"],
    sourceNotes: {
      ela: "Background; ELA’s Work; In New York · undated community description, not a current census",
    },
    sections: [
      {
        title: "A documented community setting",
        text: "ELA describes a Gurung community in and around Jackson Heights in Queens, where the Gurung (Tamu) Society is based, and also identifies Gurung residents in Ridgewood. Its account refers to several hundred community members, but provides no census year or defined counting method. That figure is not presented here as a current population total. The value of the source is its direct involvement in documenting language with people in these neighbourhoods.",
      },
      {
        title: "Narayan Gurung and the Sikles connection",
        text: "ELA names Narayan Gurung, a former Gurkha soldier and former president of the Gurung (Tamu) Society, as a collaborator living in New York. Since 2013 its project has worked with him on the Sikles variety of Gurung. Research trips to Sikles and work with speakers there connect the New York recordings with a home-village speech community. This gives a concrete example of a migrant participating in the preservation of language knowledge rather than being only the subject of a migration story.",
      },
      {
        title: "Nepali, English and Tamu Kyi",
        text: "ELA reports that many members of the New York community communicate primarily in Nepali or English rather than Gurung. This is its local description, not a claim that nobody in the city speaks Tamu Kyi. Families can retain a strong Tamu identity even as daily language changes. Documentation helps keep speech accessible, while actual transmission depends on whether children have opportunities to hear and use the language with parents, elders and peers.",
      },
      {
        title: "Stories that cross borders",
        text: "The linked recording catalogue includes personal accounts of coming to New York, military life and travel, alongside cooking and stories connected to the Gurung world. These topics show how an overseas speaker’s repertoire includes both remembered village experience and new urban life. A diaspora language archive need not choose between the two. Each narrative should still be attributed to its speaker and read as a situated account rather than a summary of all Gurung migration.",
      },
      {
        title: "A place to hear real voices",
        text: "Readers can follow the ELA source to its public recording archive and language-map entry. The present article does not copy the recordings or invent a lesson based on them. The published collection offers a grounded starting point for listening to documented speech and exploring the research that supports it. Current events, society membership and public contact information would need their own up-to-date community source before being added as a directory.",
      },
    ],
  }),
  article({
    slug: "gurungs-hong-kong",
    title: "Gurung lives in Hong Kong: a Thak-connected account",
    summary:
      "An ethnographic visit follows old village friendships into new workplaces and social settings in Hong Kong.",
    category: "Diaspora",
    region: "Hong Kong",
    period: "Documented visit · November 2005",
    evidence: "Academic research",
    sourceIds: ["world"],
    sourceNotes: { world: "pp. 186–189: Gurungs in Hong Kong; visit and accompanying film notes" },
    sections: [
      {
        title: "Beginning with a specific visit",
        text: "Harrison and Macfarlane describe visiting Gurungs in Hong Kong in November 2005. Their account centres on people the researchers had known through Thak, rather than offering a population survey of the territory. This makes the chapter especially useful for following a relationship across places and decades. It does not supply a complete history of Gurung settlement in Hong Kong, a present-day count or an explanation of every family’s route there.",
      },
      {
        title: "Servajid Gurung’s changing setting",
        text: "The book recalls Servajid Gurung as a young Thak resident who had assisted the researchers during their early village work. When they met him again in 2005, he was working at Kadoorie Farms. The change in setting—from a hill village to an overseas workplace—shows how one life can connect research, friendship and labour migration. His experience should be recognised as particular, not made into a typical biography for every Gurung migrant.",
      },
      {
        title: "Old connections in a new place",
        text: "The researchers also met other Gurungs they knew, including Premjaji Gurung, described as a valuable research assistant in the 1990s. The group visited the farms and shared a meal at a local restaurant. These ordinary activities make continuity visible without requiring a staged cultural festival. Familiarity built in Nepal can shape social life overseas, while work and urban surroundings create new routines.",
      },
      {
        title: "Civilian lives alongside military histories",
        text: "Gurung diaspora history often begins with Gurkha service, but this account gives attention to employment and social connections outside a barracks. It helps resist using “Gurung” and “Gurkha” as interchangeable terms. The book’s Hong Kong section does not establish the legal basis of every participant’s residence, and none is inferred here. A broader profile would need Gurung-specific community research as well as the territory’s wider Nepali and military histories.",
      },
      {
        title: "A historical window, not a current directory",
        text: "The chapter and its film notes provide a dated glimpse of a Thak-connected network in Hong Kong. They cannot confirm present jobs, addresses or association leadership, so those details are not offered as current information. A fuller archive can build on this foundation through permitted oral histories, community publications and documented events. Historical accounts are strongest when their date and scope remain visible rather than being silently rewritten as present-day facts.",
      },
    ],
  }),
  article({
    slug: "gurung-labour-india",
    title: "Across the border for work: a Gurung family in India",
    summary:
      "A documented Thak family’s migration to the Mumbai region reveals work, schooling, return visits and the uncertainty behind remittances.",
    category: "Diaspora",
    region: "Thak & Mumbai region, India",
    period: "Documented family history · 1980s–2014",
    evidence: "Academic research",
    sourceIds: ["world"],
    sourceNotes: { world: "pp. 182–185: A Gurung Migrant Worker in India" },
    sections: [
      {
        title: "Migration beyond military service",
        text: "Harrison and Macfarlane describe India and military service as important early destinations for people leaving Thak to earn money. Their chapter follows Comal Gurung, whom Macfarlane had known as a young village research collaborator, into civilian work near Mumbai. The account adds a family-level perspective to a history often told mainly through soldiers. It is not a survey of Gurungs throughout India, and it should not stand in for the distinct histories of established communities in Sikkim or Darjeeling.",
      },
      {
        title: "Dombivli and a chain of connections",
        text: "The book records Comal’s move to the Mumbai region in 1980 and the researchers’ visit to Dombivli in 1997. It notes that several Gurungs from Thak were working in the same area, an example of migration supported by existing village connections. Such a network can make a destination imaginable and accessible without guaranteeing secure work. The account uses the spelling Dombvili; the contemporary place name is commonly rendered Dombivli.",
      },
      {
        title: "Work and insecurity",
        text: "The authors describe security and watchman work and later report that the factory where Comal and others had worked closed. Their 2006 account also mentions family members’ laundry work and a son attending university. These details show how a migration story can include unstable employment and educational ambitions at the same time. Remittances and the appearance of overseas success cannot reveal the full conditions under which a household earns its income.",
      },
      {
        title: "Returning for a memorial",
        text: "The book records the family’s return to Thak in 2008 for the memorial ritual of Comal’s father. The occasion reconnects overseas work with obligations to relatives and the home village. Return visits do not necessarily mean permanent return: the authors later discuss sale of the family house and the possibility that future visits would be short. A person can remain involved in village remembrance while practical commitments and children’s lives are centred elsewhere.",
      },
      {
        title: "The limits of one family narrative",
        text: "This chapter is valuable because it is dated, personal and followed over several decades. It does not establish a single experience of Gurung migration to India or a current description of the family. The archive summarises published history without adding private contact details, inferred legal status or an invented conclusion to the story. Broader Indian Gurung profiles would require sources specific to the region, settlement history and community being described.",
      },
    ],
  }),
  article({
    slug: "history-timeline",
    title: "A timeline of Gurung history",
    summary:
      "A plain-language overview of the main periods in Tamu history, from ancestral settlements to the present day, with notes on what is certain and what is still debated.",
    category: "History",
    region: "Nepal & diaspora",
    period: "Ancestral times to present",
    evidence: "Scholarly interpretation",
    sourceIds: ["evans", "ghale", "guide", "pariyar", "census"],
    sections: [
      {
        title: "How to read this timeline",
        text: "Early Gurung history comes mostly from oral tradition (pye), place memory and archaeology, so early dates are approximate. From the eighteenth century onward, written records of the Nepali state and later scholarly research give firmer dates. Each period below links to a deeper article in this library.",
      },
      {
        title: "Ancestral settlements",
        text: "Pye recitations and community memory describe ancestors living in high settlements north of today’s Kaski and Lamjung, with Kohla remembered as an especially important ancestral village. Archaeological survey work led by Christopher Evans with Gurung communities has examined such sites, and it shows how oral tradition and physical remains can be studied together.",
      },
      {
        title: "Hill chiefdoms and kingdoms",
        text: "Before modern Nepal, the central hills were divided into many small states. Gurung villages lived within the territories of Kaski, Lamjung and their neighbours. Community traditions remember Ghale leaders as early rulers, while later the Shah and other ruling lineages held power in these kingdoms.",
      },
      {
        title: "Unification of Nepal (from 1768)",
        text: "Prithvi Narayan Shah of Gorkha brought Kathmandu Valley under his rule in 1768–69, and his successors absorbed the surrounding hill states, including Gurung areas. Gurungs became subjects of one large kingdom with a single law, taxes and administration based in Kathmandu.",
      },
      {
        title: "Rana rule and the national legal code (1846–1951)",
        text: "The Rana family ruled Nepal as hereditary prime ministers from 1846. The 1854 national legal code, the Muluki Ain, placed every community into a ranked caste order. Gurungs were classed among the “liquor-drinking” (matwali) groups. This classification shaped rights, punishments and social status for about a century.",
      },
      {
        title: "Recruitment into foreign armies (from 1815)",
        text: "After the Anglo-Nepal War of 1814–16, the British began recruiting hill men from Nepal. Gurungs became one of the main communities recruited into Gurkha regiments of the British and later Indian armies. Military pay, pensions and travel transformed many villages and laid the foundations of today’s diaspora.",
      },
      {
        title: "Democracy and identity movements (1951–2006)",
        text: "The end of Rana rule in 1951 and especially the restoration of multiparty democracy in 1990 opened space for indigenous organisations. Gurung associations promoted Tamu Kyi, Lhosar, religious traditions and history writing. In 2002 the Nepali state officially listed the Gurung among the country’s recognised indigenous nationalities (Adivasi Janajati).",
      },
      {
        title: "Federal Nepal and a global community (2006 to now)",
        text: "Nepal became a federal republic, and the 2015 constitution created provinces; most Gurung homeland areas now lie in Gandaki Province. The 2021 census counts Gurungs as one of Nepal’s larger indigenous communities, while large populations also live in the United Kingdom, Hong Kong, India, the United States and elsewhere.",
      },
    ],
  }),
  article({
    slug: "hill-kingdoms",
    title: "Gurungs in the hill kingdoms of Kaski and Lamjung",
    summary:
      "Before Nepal was unified, Gurung villages lay inside small mountain kingdoms. This article explains who ruled, how villages related to rulers, and why memories of this time still matter.",
    category: "History",
    region: "Gandaki Province",
    period: "c. 15th–18th centuries",
    evidence: "Scholarly interpretation",
    sourceIds: ["ghale", "guide"],
    sections: [
      {
        title: "A landscape of small states",
        text: "For several centuries the hills of central Nepal were divided into dozens of small kingdoms, often grouped as the Chaubisi (“twenty-four”) states. Kaski and Lamjung, which include much of the Gurung homeland around today’s Pokhara, Ghandruk, Sikles and Besisahar, were among them.",
      },
      {
        title: "Ghale memories of rule",
        text: "Many Gurung traditions remember Ghale chiefs as the earlier rulers of the region, before newer ruling lineages took power. Mani Raj Gurung’s historical study discusses how power, knowledge and identity shifted between these groups. Exact dates and events are uncertain and vary by village story.",
      },
      {
        title: "Village life under the kingdoms",
        text: "Gurung villages kept much of their own way of life: local headmen, clan customs, priests such as pachyu and klyepri, and seasonal farming and herding. Ties to the royal court came mainly through tribute, labour duties and local officials.",
      },
      {
        title: "Lamjung and the rise of Gorkha",
        text: "The Shah dynasty that later unified Nepal traced its origin to Lamjung before establishing itself in Gorkha. This makes the Gurung heartland part of the background story of the modern Nepali state, even though historians caution against reading later national history back into village life.",
      },
    ],
  }),
  article({
    slug: "unified-nepal-and-muluki-ain",
    title: "Under the Nepali state: unification and the 1854 legal code",
    summary:
      "How unification and the Rana-era legal code changed the place of Gurungs in society, land and law.",
    category: "History",
    region: "Gandaki Province",
    period: "1768–1951",
    evidence: "Scholarly interpretation",
    sourceIds: ["ghale", "guide", "pariyar"],
    sections: [
      {
        title: "Joining a larger kingdom",
        text: "From 1768 the Gorkha kingdom expanded across the hills. Kaski, Lamjung and neighbouring states became part of one kingdom of Nepal. Gurungs now dealt with a distant central government for land grants, taxes, justice and military service.",
      },
      {
        title: "Land and local power",
        text: "The state gave land and tax rights to officials and favoured families. Some Gurung headmen acted as local intermediaries, collecting revenue and settling disputes. Over time, land relations, debts and new officials changed who held influence in villages.",
      },
      {
        title: "The Muluki Ain of 1854",
        text: "The Rana government’s legal code ranked all people in a single Hindu-style caste hierarchy. Gurungs were placed among the matwali (“liquor-drinking”) groups—below the “sacred thread” castes but not among the enslavable or “untouchable” groups. The code set different punishments and rules for different ranks.",
      },
      {
        title: "Lasting effects",
        text: "Researchers argue this period encouraged some Gurungs to adopt Hindu customs and ranking ideas, including debates over the “four” and “sixteen” clans. It also pushed later activists to reclaim Tamu customs, language and Bon-related religious practice as their own heritage.",
      },
    ],
  }),
  article({
    slug: "identity-movement",
    title: "Revival and recognition: the Tamu identity movement",
    summary:
      "From the late twentieth century, Gurung organisations worked to revive language, religion, Lhosar and history writing, and gained official recognition as an indigenous nationality.",
    category: "History",
    region: "Nepal & diaspora",
    period: "1990 to present",
    evidence: "Academic research",
    sourceIds: ["ghale", "florence", "census", "ntb"],
    sections: [
      {
        title: "Why a movement began",
        text: "After 1990, Nepal’s new democratic constitution allowed communities to organise openly. Many indigenous peoples felt that a single national language and Hindu-centred culture had pushed their own traditions aside. Gurungs joined this wider Janajati (indigenous nationalities) movement.",
      },
      {
        title: "What activists worked on",
        text: "Gurung associations promoted Tamu Kyi teaching and writing, public Tamu Lhosar celebrations, support for pachyu and klyepri priests, and research into Kohla and clan history. Many also emphasised the name Tamu as the community’s own name.",
      },
      {
        title: "Official recognition",
        text: "In 2002 the Nepali government formally listed the Gurung among the recognised Adivasi Janajati. Tamu Lhosar later became a public holiday. The national census now records Gurung identity and the Gurung language separately.",
      },
      {
        title: "The movement abroad",
        text: "In Britain, Hong Kong, the United States and elsewhere, Gurung societies organise Lhosar, language classes, death rites and youth programmes. Florence Gurung’s research on Gurungs in the UK shows how religion and identity are being renegotiated far from the homeland.",
      },
    ],
  }),
  article({
    slug: "how-history-is-known",
    title: "How we know Gurung history",
    summary:
      "Gurung history is pieced together from oral recitations, archaeology, state records and research. Knowing the type of source helps you judge each claim.",
    category: "History",
    region: "Nepal & diaspora",
    period: "All periods",
    evidence: "Oral tradition & archaeology",
    sourceIds: ["evans", "pettigrew", "guide", "world", "ghale"],
    sections: [
      {
        title: "Oral tradition (pye)",
        text: "Pachyu and klyepri priests recite long oral texts during rituals. These include origin stories, ancestral routes and the journey of the soul back to Kohla. They are sacred knowledge as well as history, and different priests and villages hold different versions.",
      },
      {
        title: "Archaeology and landscape",
        text: "Survey and excavation work at remembered ancestral villages, carried out with Gurung communities, tests where settlements stood and how old they may be. Results can support, enrich or complicate oral accounts.",
      },
      {
        title: "State and colonial records",
        text: "From the eighteenth century, Nepali government documents, legal codes and British military records describe Gurungs, usually from the outside and for administrative reasons. They give dates but reflect the interests of the people who wrote them.",
      },
      {
        title: "Research and community writing",
        text: "Anthropologists such as Macfarlane, Pettigrew and Harrison worked with Gurung villages over many decades, and Gurung scholars now write much of the new history. This library labels each article by type of evidence so readers can see where knowledge comes from.",
      },
    ],
  }),
  article({
    slug: "herding-and-trade",
    title: "Herders, farmers and traders: the Gurung economy through history",
    summary:
      "For centuries Gurung life moved between high pastures, terraced fields and trade routes. This is how people made a living before and after soldiering.",
    category: "History",
    region: "Gandaki Province",
    period: "Historical to present",
    evidence: "Scholarly interpretation",
    sourceIds: ["guide", "world", "tourism"],
    sections: [
      {
        title: "Sheep and the high pastures",
        text: "Older accounts describe Gurungs as herders who took large flocks of sheep up to high summer pastures (kharka) and brought them down to the villages in winter. Wool was spun and woven at home into blankets, the rari, and the bhangra cloth worn by men. Shepherds spent months away from the village, and herding shaped songs, stories and the yearly calendar.",
      },
      {
        title: "Terraced fields and shared work",
        text: "In the villages, families grew millet, maize, barley, buckwheat and, lower down, rice on terraced hillsides. Hard seasonal work was shared through labour-exchange groups (nogar), where neighbours worked each other’s fields in turn. Food, drink and songs at the end of the day made shared work a social event as well.",
      },
      {
        title: "Trade routes",
        text: "Gurung villages sat between the plains to the south and Tibetan-speaking areas to the north. People carried grain, wool, cloth and other goods along mountain trails and exchanged them for salt and other items. These routes connected Gurung villages with neighbouring peoples long before modern roads.",
      },
      {
        title: "Soldiers’ pay and pensions",
        text: "From the nineteenth century, money earned in the British and Indian armies became an important income for many families. Macfarlane and Gurung describe how pensions and remittances built new houses, paid for schools and slowly reduced the reliance on herding.",
      },
      {
        title: "Tourism and the modern village",
        text: "From the 1970s, trekking routes through villages such as Ghandruk brought lodges, tea houses and new jobs. Research on Ghandruk links tourism with forest conservation and community development. Today many families combine farming, tourism, foreign work and pensions, while fewer people keep large flocks.",
      },
    ],
  }),
  article({
    slug: "world-wars",
    title: "Gurung soldiers in the World Wars",
    summary:
      "Thousands of Gurung men fought in both World Wars. Several received the Victoria Cross, Britain’s highest award for bravery.",
    category: "History",
    region: "Europe, Middle East & Asia",
    period: "1914–1945",
    evidence: "Scholarly interpretation",
    sourceIds: ["pariyar", "guide"],
    sections: [
      {
        title: "The First World War (1914–1918)",
        text: "Gurkha regiments, with many Gurung soldiers, served in France, Gallipoli, Mesopotamia (today Iraq), Egypt and Palestine. Many never came home. Families in the hills often learned of a death only months later, through letters or returning comrades.",
      },
      {
        title: "The Second World War (1939–1945)",
        text: "In the Second World War, Gurkha battalions fought in North Africa, Italy and above all Burma (today Myanmar) against the Japanese army. Hill villages saw a very large share of their young men recruited during these years.",
      },
      {
        title: "Gurung holders of the Victoria Cross",
        text: "Gurung soldiers awarded the Victoria Cross in the Second World War include Havildar Gaje Ghale (Burma, 1943), Rifleman Thaman Gurung (Italy, 1944, awarded after his death), Rifleman Bhanbhagta Gurung (Burma, 1945) and Rifleman Lachhiman Gurung (Burma, 1945), who kept fighting after losing his hand. Their stories are still told in Gurung homes and at community events.",
      },
      {
        title: "What war meant at home",
        text: "War brought pay, pensions and prestige, but also loss, widows and long absences. Women ran farms and households alone for years. Songs of separation and waiting, sung in villages, remember this side of the story.",
      },
    ],
  }),
  article({
    slug: "gurkha-rights",
    title: "From 1947 to 2009: Gurkha rights and settlement in Britain",
    summary:
      "How Indian independence split the Gurkha regiments, and how a long campaign won Gurkha veterans the right to live in Britain.",
    category: "History",
    region: "Nepal, India & United Kingdom",
    period: "1947–present",
    evidence: "Academic research",
    sourceIds: ["pariyar", "florence"],
    sections: [
      {
        title: "The 1947 agreement",
        text: "When India became independent in 1947, Britain, India and Nepal signed the Tripartite Agreement. Four Gurkha regiments moved to the British Army and six stayed with the new Indian Army. Gurung soldiers have served in both armies ever since.",
      },
      {
        title: "Bases far from home",
        text: "After 1947, British Gurkhas were based in Malaya, Borneo, Hong Kong, Brunei and later the UK. Families sometimes lived with soldiers at these bases, and children grew up between Nepal and other countries.",
      },
      {
        title: "Unequal pay and pensions",
        text: "For decades Gurkha soldiers received lower pay and pensions than British soldiers, and most could not settle in Britain after service. Veterans and their supporters campaigned against these differences from the 1990s.",
      },
      {
        title: "The 2009 settlement decision",
        text: "In 2009, after a high-profile public campaign, the UK government agreed that most Gurkha veterans who served before 1997 could settle in Britain. This led to a large new Nepali and Gurung community in towns such as Aldershot, Reading and Ashford. Mitra Pariyar’s research looks at how these communities formed.",
      },
      {
        title: "Life after settlement",
        text: "Settlement brought new chances but also hard questions: elderly veterans in a new country, language barriers, and how to keep Tamu traditions alive for children born in Britain. Community groups, Lhosar gatherings and language classes grew out of this new life.",
      },
    ],
  }),
  article({
    slug: "modern-nepal-1950-2015",
    title: "Gurungs in modern Nepal, 1951–2015",
    summary:
      "Democracy, schools, roads and new constitutions changed Gurung life in the second half of the twentieth century.",
    category: "History",
    region: "Nepal",
    period: "1951–2015",
    evidence: "Scholarly interpretation",
    sourceIds: ["ghale", "census", "guide"],
    sections: [
      {
        title: "1951: the end of Rana rule",
        text: "In 1951 the rule of the Rana prime ministers ended and Nepal opened to the world. Schools, health posts and new government offices slowly reached hill districts such as Kaski, Lamjung, Syangja and Gorkha.",
      },
      {
        title: "The Panchayat years (1960–1990)",
        text: "Under the Panchayat system, the state promoted one nation, one language (Nepali) and one dress. Schools taught only in Nepali. Many Gurungs later said this pushed their own language and customs out of public life.",
      },
      {
        title: "1990: democracy and new voices",
        text: "The return of multiparty democracy in 1990 let indigenous peoples organise openly. Gurung organisations began publishing, teaching Tamu Kyi and celebrating Lhosar in public. This is the start of the identity movement described in its own article.",
      },
      {
        title: "Conflict and change (1996–2006)",
        text: "During the armed conflict between the state and Maoist rebels, many young people left the hills for towns or for work abroad. Villages emptied further, while Pokhara and Kathmandu grew as new centres of Gurung life.",
      },
      {
        title: "Federal Nepal",
        text: "Nepal became a federal republic, and its 2015 constitution created seven provinces. Most Gurung homeland villages now lie in Gandaki Province. The 2021 census records Gurungs as one of Nepal’s recognised indigenous peoples, living across the whole country.",
      },
    ],
  }),
  ...moreArticles,
];
export const categories: Category[] = [
  "History",
  "Language",
  "Culture",
  "Spirituality",
  "Homeland",
  "Diaspora",
];
export function searchArticles(
  query: string,
  category: string = "All",
  region: string = "All",
  evidence: string = "All",
) {
  const q = query.toLocaleLowerCase().trim();
  return articles.filter(
    (a) =>
      (category === "All" || a.category === category) &&
      (region === "All" || a.region === region) &&
      (evidence === "All" || a.evidence === evidence) &&
      (!q ||
        [a.title, a.summary, a.region, ...a.sections.map((s) => s.text)]
          .join(" ")
          .toLocaleLowerCase()
          .includes(q)),
  );
}
