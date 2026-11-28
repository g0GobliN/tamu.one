/**
 * Nepali text for the photographic record: picture captions, image titles,
 * photographers' names, dates and the kind of each published source.
 */

const mediaTitlesNe: Record<string, string> = {
  mountains: "घान्द्रुकबाट अन्नपूर्ण दक्षिण र माछापुच्छ्रे",
  village: "अन्नपूर्ण ट्रेकिङ मार्गबाट घान्द्रुक गाउँ",
  homeland: "घान्द्रुक, कास्की",
  dawn: "घान्द्रुकबाट बिहानको अन्नपूर्ण दृश्य",
  annapurna: "घान्द्रुकबाट अन्नपूर्ण दक्षिण",
  festival: "काठमाडौँमा तामु ल्होसारमा गुरुङ जनता",
  ghatu: "काठमाडौँको तामु ल्होसारमा घाटु नर्तक",
  lhosar: "काठमाडौँमा तामु ल्होसारमा सामुदायिक भेला",
  house: "गुरुङ घर र जीवनशैलीको सङ्ग्रहालय प्रदर्शन",
  manang: "मनाङ उपत्यका",
  sikles: "सिक्लेस गाउँ, कास्की",
  gurkha: "गोर्खा सिपाही स्मारक, लन्डन",
};

const mediaDatesNe: Record<string, string> = {
  "19 November 2013": "१९ नोभेम्बर २०१३",
  "15 May 2018": "१५ मे २०१८",
  "3 March 2019": "३ मार्च २०१९",
  "14 April 2018": "१४ अप्रिल २०१८",
  "2 April 2010": "२ अप्रिल २०१०",
  "30 December 2018": "३० डिसेम्बर २०१८",
  "26 October 2021": "२६ अक्टोबर २०२१",
  "15 May 2012": "१५ मे २०१२",
  "22 January 2022": "२२ जनवरी २०२२",
  "26 April 2008": "२६ अप्रिल २००८",
};

export const sourceKindsNe: Record<string, string> = {
  "Archaeological research": "पुरातात्त्विक अनुसन्धान",
  "Community organisation": "सामुदायिक संस्था",
  "Ethnographic guide": "नृवंश-वर्णन मार्गदर्शिका",
  "Ethnographic research": "नृवंश-वर्णन अनुसन्धान",
  "Full-text ethnomusicological research": "पूर्ण-पाठ संगीत-नृवंश अनुसन्धान",
  "Government census": "सरकारी जनगणना",
  "Historical interpretation": "ऐतिहासिक व्याख्या",
  "Language digitisation project report": "भाषा डिजिटलीकरण परियोजना प्रतिवेदन",
  "Language documentation organisation": "भाषा अभिलेख संस्था",
  "Linguistic catalogue": "भाषिक सूची",
  "Livelihood research": "जीविका अनुसन्धान",
  "Local cultural research": "स्थानीय सांस्कृतिक अनुसन्धान",
  "Longitudinal ethnographic book and film notes": "दीर्घकालीन नृवंश-पुस्तक र चलचित्र टिप्पणी",
  "Official technical standard": "आधिकारिक प्राविधिक मानक",
  "Official tourism information": "आधिकारिक पर्यटन जानकारी",
  "Oxford doctoral thesis": "अक्सफर्डको विद्यावारिधि शोध",
  "Peer-reviewed research · abstract consulted": "सहकर्मी-समीक्षित अनुसन्धान · सार मात्र हेरिएको",
  "Peer-reviewed research": "सहकर्मी-समीक्षित अनुसन्धान",
  "Scholarly book review": "विद्वत्तापूर्ण पुस्तक समीक्षा",
  "Scholarly journal": "विद्वत्तापूर्ण जर्नल",
};

export function sourceKindLabel(locale: string, kind: string): string {
  return locale === "ne" ? (sourceKindsNe[kind] ?? kind) : kind;
}

/** A media item with its title, photographer and date in the page's language. */
export function localizeMedia<T extends { title: string; creator: string; date: string }>(
  item: T,
  locale: string,
): T {
  if (locale !== "ne") return item;
  return {
    ...item,
    title: mediaTitlesNe[item.title] ?? item.title,
    date: mediaDatesNe[item.date] ?? item.date,
  };
}
