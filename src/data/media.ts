export interface MediaItem {
  id: string;
  url: string;
  title: string;
  creator: string;
  license: string;
  licenseUrl: string;
  file: string;
  date: string;
  subject: string;
}

export const media = [
  {
    id: "mountains",
    url: "/images/mountains.jpg",
    title: "Annapurna South and Machapuchare from Ghandruk",
    creator: "Sudan Shrestha",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    file: "Annapurna_South_and_Machapuchare_from_Ghandruk_2.jpg",
    date: "19 November 2013",
    subject: "Annapurna landscape",
  },
  {
    id: "village",
    url: "/images/village.jpg",
    title: "Ghandruk village from the Annapurna trekking route",
    creator: "Utsab Raj Giri",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    file: "Ghandruk1_village.jpg",
    date: "15 May 2018",
    subject: "Village architecture",
  },
  {
    id: "homeland",
    url: "/images/homeland.jpg",
    title: "Ghandruk, Kaski",
    creator: "Hopingyousuf",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    file: "Ghandruk,_Kaski.jpg",
    date: "3 March 2019",
    subject: "Traditional homeland",
  },
  {
    id: "dawn",
    url: "/images/dawn.jpg",
    title: "Morning view of Annapurna from Ghandruk",
    creator: "Ameet Ranjit Photography",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    file: "Morning_View_from_Ghandruk.jpg",
    date: "14 April 2018",
    subject: "Annapurna landscape",
  },
  {
    id: "annapurna",
    url: "/images/annapurna.jpg",
    title: "Annapurna South from Ghandruk",
    creator: "Greg Willis",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    file: "Annapurna_South_from_Ghandruk_(4525940208).jpg",
    date: "2 April 2010",
    subject: "Annapurna landscape",
  },
  {
    id: "festival",
    url: "/images/festival.jpg",
    title: "Gurung people during Tamu Lhosar, Kathmandu",
    creator: "SPakhrin",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    file: "Gurung_Tamu_Lhosar_2018_03.jpg",
    date: "30 December 2018",
    subject: "Tamu Lhosar",
  },
  {
    id: "ghatu",
    url: "/images/ghatu.jpg",
    title: "Ghatu dance performers at Tamu Lhosar, Kathmandu",
    creator: "S Pakhrin",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    file: "Ghatu_Dance.jpg",
    date: "30 December 2018",
    subject: "Ghatu",
  },
  {
    id: "lhosar",
    url: "/images/lhosar.jpg",
    title: "Community gathering at Tamu Lhosar, Kathmandu",
    creator: "SPakhrin",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    file: "Gurung_Tamu_Lhosar_2018_04.jpg",
    date: "30 December 2018",
    subject: "Tamu Lhosar",
  },
  {
    id: "house",
    url: "/images/house.jpg",
    title: "Museum display of a Gurung house and way of life",
    creator: "Rachhenhang Rai",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    file: "Gurung_house_and_way_of_life.jpg",
    date: "26 October 2021",
    subject: "Domestic life",
  },
  {
    id: "manang",
    url: "/images/manang.jpg",
    title: "Manang valley",
    creator: "EmilJ",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    file: "Manang_2012.jpg",
    date: "15 May 2012",
    subject: "Manang",
  },
  {
    id: "sikles",
    url: "/images/sikles.jpg",
    title: "Sikles village, Kaski",
    creator: "Nirojsedhai",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    file: "Sikles_village.jpg",
    date: "22 January 2022",
    subject: "Village landscape",
  },
  {
    id: "gurkha",
    url: "/images/gurkha.jpg",
    title: "Gurkha Soldier Monument, London",
    creator: "Diliff",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    file: "Gurkha_Soldier_Monument,_London_-_April_2008.jpg",
    date: "26 April 2008",
    subject: "Military history",
  },
] as const;

export type MediaId = (typeof media)[number]["id"];

export function getMedia(id: MediaId) {
  return media.find((m) => m.id === id) ?? media[0];
}
