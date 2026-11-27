import type { Article } from "./heritage";
type Input = Omit<Article, "id" | "reviewed" | "editorialStatus" | "communityReview">;
const article = (a: Input): Article => ({
  ...a,
  id: a.slug,
  reviewed: "27 November 2026",
  editorialStatus: "Published introduction",
  communityReview: "Not yet community reviewed",
});

export const moreArticles: Article[] = [
  article({
    slug: "notable-gurungs",
    title: "Notable Gurungs: soldiers, artists and leaders",
    summary:
      "A short guide to Gurung people whose lives became part of the wider history of Nepal and the world.",
    category: "History",
    region: "Nepal and worldwide",
    period: "19th–21st centuries",
    image: "gurkha",
    evidence: "Scholarly interpretation",
    sourceIds: ["guide", "ghale", "pariyar"],
    sections: [
      {
        title: "Why a list of names matters",
        text: "Most Gurung history is the history of ordinary families: farmers, herders, mothers, soldiers and ritual specialists whose names are remembered only in their villages. A few people became known far beyond the hills. Their stories help readers see how Tamu lives connect to the history of Nepal, Britain, India and beyond.",
      },
      {
        title: "Victoria Cross holders",
        text: "In the Second World War several Gurung soldiers received the Victoria Cross, Britain’s highest award for bravery. They include Gaje Ghale (Burma, 1943), Thaman Gurung (Italy, 1944), Bhanbhagta Gurung (Burma, 1945) and Lachhiman Gurung (Burma, 1945). Lachhiman Gurung later became a symbol of the campaign for Gurkha veterans’ rights in Britain.",
      },
      {
        title: "Music and the arts",
        text: "Amber Gurung (1938–2016) was one of Nepal’s best-loved composers and singers. He composed the music of Nepal’s national anthem, “Sayaun Thunga Phulka”, adopted in 2007. Many younger Gurung singers, film-makers and writers have since brought Tamu songs, stories and dress to national audiences.",
      },
      {
        title: "Community and public life",
        text: "Gurung teachers, social workers, politicians and organisers have built schools, village associations and national bodies such as the Tamu Hyula Chhonj Dhee (Gurung national council). Their work in the identity movement helped bring Lhosar, Tamu Kyi and Gurung history into public life.",
      },
      {
        title: "A list still being written",
        text: "This page names only a few people. Families and communities hold many more stories of leaders, healers, singers and pioneers, especially women whose work was rarely written down. These are exactly the stories the archive hopes to collect.",
      },
    ],
  }),
  article({
    slug: "gurung-women",
    title: "Gurung women in history",
    summary:
      "Mothers, farmers, traders, singers and leaders: the women who kept households and villages going.",
    category: "History",
    region: "Gurung homeland and diaspora",
    period: "Historical and present",
    image: "festival",
    evidence: "Scholarly interpretation",
    sourceIds: ["guide", "world", "florence"],
    sections: [
      {
        title: "Running the household",
        text: "In many Gurung villages women managed fields, grain stores, livestock and family money. When men left for long seasons with the herds or for decades of military service, women ran the household and made key decisions on their own.",
      },
      {
        title: "Work, exchange and the Rodhi",
        text: "Young women and men met in the Rodhi, the village social house, where they sang, worked and formed friendships. Women organised shared labour groups for planting and harvest, and their songs carried local history from one generation to the next.",
      },
      {
        title: "Dress, jewellery and wealth",
        text: "Women’s traditional dress and jewellery, with coral, turquoise and gold, showed family wealth and identity. Jewellery was often a woman’s own property and a form of savings that she controlled.",
      },
      {
        title: "Change and new roles",
        text: "From the late twentieth century more Gurung women went to school and college, moved to towns and abroad, and became teachers, nurses, business owners, activists and community leaders. In the diaspora, women’s groups organise much of Lhosar and community life.",
      },
      {
        title: "Stories to collect",
        text: "Written history often leaves women out. Life stories of grandmothers and mothers are some of the most valuable things a family can record and share.",
      },
    ],
  }),
  article({
    slug: "earthquake-2015",
    title: "The 2015 earthquake and Gurung villages",
    summary:
      "How the Gorkha earthquake struck Gurung communities, and how villages and the diaspora rebuilt together.",
    category: "History",
    region: "Gorkha, Lamjung and central Nepal",
    period: "2015 to present",
    image: "house",
    evidence: "Scholarly interpretation",
    sourceIds: ["ghale", "census"],
    sections: [
      {
        title: "25 April 2015",
        text: "A magnitude 7.8 earthquake struck central Nepal on 25 April 2015, with a strong aftershock on 12 May. Nearly 9,000 people died across the country. The epicentre lay in Gorkha district, an area with many Gurung and Ghale villages.",
      },
      {
        title: "Barpak and nearby villages",
        text: "Barpak, a large Ghale-Gurung village in Gorkha close to the epicentre, saw most of its stone houses destroyed. Neighbouring villages in Gorkha and Lamjung lost homes, schools, monasteries and water systems.",
      },
      {
        title: "The diaspora responds",
        text: "Gurung communities in Britain, Hong Kong, the United States and elsewhere quickly raised money and sent help. Ex-Gurkha associations and village societies used their own networks to reach places that larger aid efforts took longer to reach.",
      },
      {
        title: "Rebuilding",
        text: "Rebuilding took years. Many families replaced old stone houses with concrete or mixed designs, changing the look of villages. Communities also worked to repair monasteries, Rodhi houses and other places of shared memory.",
      },
    ],
  }),
  article({
    slug: "lamjung",
    title: "Lamjung: an old Gurung heartland",
    summary:
      "Hills, rivers and villages between the Marsyangdi valley and the Annapurna and Lamjung Himal.",
    category: "Homeland",
    region: "Lamjung, Nepal",
    period: "Historical and present",
    image: "annapurna",
    evidence: "Scholarly interpretation",
    sourceIds: ["guide", "ghale", "census"],
    sections: [
      {
        title: "Where it is",
        text: "Lamjung district lies in Gandaki Province, west of Gorkha and east of Kaski. Its northern edge rises to Lamjung Himal, part of the Annapurna range, and the Marsyangdi river runs through it towards the south.",
      },
      {
        title: "A historic kingdom",
        text: "Before the unification of Nepal, Lamjung was one of the hill kingdoms of the region. Gurungs formed a large part of its people, and local traditions link early rulers with Ghale and Gurung leadership.",
      },
      {
        title: "Villages and life",
        text: "Gurung villages in Lamjung such as Ghanpokhara, Bhujung and Ghalegaun sit on high ridges with terraced fields below. Bhujung is one of the largest Gurung villages, and Ghalegaun has become known for community homestays.",
      },
      {
        title: "Today",
        text: "Lamjung remains one of the districts with the largest Gurung populations in Nepal. Roads, migration and tourism have changed many villages, while Lhosar, Ghatu and local rituals remain strong.",
      },
    ],
  }),
  article({
    slug: "annapurna-conservation",
    title: "Annapurna Conservation Area: people and protected land",
    summary:
      "How a conservation project begun in Ghandruk in 1986 tied Gurung villages to forests, trekking and tourism.",
    category: "Homeland",
    region: "Kaski, Lamjung, Myagdi, Manang, Mustang",
    period: "1986 to present",
    image: "village",
    evidence: "Academic research",
    sourceIds: ["tourism", "world"],
    sections: [
      {
        title: "A new idea in 1986",
        text: "The Annapurna Conservation Area Project began in 1986, starting in Ghandruk. Instead of moving people out, it aimed to protect nature together with the communities who lived there. It became Nepal’s largest protected area.",
      },
      {
        title: "Villages take part",
        text: "Local committees helped manage forests, build trails and safe drinking water, and set rules for lodges. Money from trekking permits was used for conservation and local development.",
      },
      {
        title: "Tourism and change",
        text: "Trekking brought income to Gurung villages such as Ghandruk, Landruk and Chomrong. Many families opened lodges and tea houses. Research has found that tourism helped forests recover in places, while also changing work, food and family life.",
      },
      {
        title: "Balancing future needs",
        text: "Roads, climate change and young people moving away bring new questions. Communities continue to debate how to protect land, culture and livelihood at the same time.",
      },
    ],
  }),
  article({
    slug: "musical-instruments",
    title: "Gurung music and instruments",
    summary:
      "Madal, sarangi, dhyangro and songs: the sounds of Tamu festivals, rituals and the Rodhi.",
    category: "Culture",
    region: "Gurung homeland",
    period: "Living tradition",
    image: "ghatu",
    evidence: "Scholarly interpretation",
    sourceIds: ["moisala", "guide", "pettigrew"],
    sections: [
      {
        title: "Music in daily life",
        text: "Song is part of work, courtship, festivals and mourning. Groups sing while planting rice or walking to the fields, and young people sang question-and-answer songs in the Rodhi.",
      },
      {
        title: "Madal and sarangi",
        text: "The madal, a two-headed hand drum, keeps rhythm for dances and songs across the hills. The sarangi, a bowed string instrument, accompanies singers and storytellers.",
      },
      {
        title: "Ritual instruments",
        text: "Pachyu and Klehpri ritual specialists use their own drums, cymbals and bells during rites, especially funeral ceremonies. The sound helps to call, guide and send off spirits.",
      },
      {
        title: "Ghatu and Sorathi",
        text: "Ghatu is a sacred sung dance performed by young girls in a trance-like state, telling an old royal story. Sorathi is a dance-drama performed around festival times in many Gurung and Magar villages.",
      },
      {
        title: "New music",
        text: "Today Gurung artists mix old tunes with modern pop, and Tamu songs are shared online across the world, especially at Lhosar.",
      },
    ],
  }),
  article({
    slug: "tamu-calendar",
    title: "The Tamu calendar and the twelve lho",
    summary:
      "How the Gurung year is counted in twelve animal years, and why Lhosar marks the turn of the lho.",
    category: "Culture",
    region: "Gurung homeland and diaspora",
    period: "Living tradition",
    image: "lhosar",
    evidence: "Scholarly interpretation",
    sourceIds: ["ntb", "guide"],
    sections: [
      {
        title: "Twelve years, twelve animals",
        text: "Gurungs count years in a cycle of twelve lho, each named after an animal: mouse, cow (ox), tiger, cat (rabbit), eagle (dragon), snake, horse, sheep, monkey, bird, dog and deer (boar). Names can differ by village and source.",
      },
      {
        title: "Lhosar and the new lho",
        text: "Tamu Lhosar, on the 15th of Poush (around 30 December), marks the start of a new lho year. Each Lhosar celebrations announce the animal of the coming year.",
      },
      {
        title: "Lho and personality",
        text: "People often know their birth lho, and some families use it when thinking about marriage, good days for events or a person’s character.",
      },
      {
        title: "Shared roots",
        text: "The twelve-year cycle is shared with Tibetan and other Himalayan and East Asian calendars, a sign of the long cultural links across the mountains.",
      },
    ],
  }),
  article({
    slug: "buddhism-and-bon",
    title: "Buddhism, Bon and the old Tamu religion",
    summary:
      "How shamanic rites, Tibetan Buddhism and Hindu practice came to live side by side in Gurung life.",
    category: "Spirituality",
    region: "Gurung homeland",
    period: "Historical and present",
    image: "manang",
    evidence: "Academic research",
    sourceIds: ["pettigrew", "mumford", "florence", "kuroda"],
    sections: [
      {
        title: "The oldest layer",
        text: "Many Gurungs see the Pachyu and Klehpri traditions as the oldest Tamu religion. These ritual specialists recite oral texts called pe, heal, protect households and guide souls of the dead.",
      },
      {
        title: "Lamas and monasteries",
        text: "Tibetan Buddhist lamas have served Gurung communities for centuries, especially in northern villages. Gompas (monasteries) stand in many villages and lamas often take part in funeral rites alongside Pachyu and Klehpri.",
      },
      {
        title: "Bon connections",
        text: "Some scholars and community members link Pachyu and Klehpri practice with Bon, the old religion of Tibet. This connection is still debated.",
      },
      {
        title: "Hindu influence",
        text: "Under the Nepali state, many Gurungs also took part in Hindu festivals such as Dashain and Tihar. From the 1990s, many Gurung organisations encouraged people to identify as Buddhist or Bon rather than Hindu.",
      },
      {
        title: "Living together",
        text: "In practice families often combine traditions: a lama, a Pachyu and Hindu festivals may all be part of the same year.",
      },
    ],
  }),
  article({
    slug: "gurung-organisations",
    title: "Gurung organisations: building a community voice",
    summary:
      "Village societies, national councils and diaspora associations that carry Tamu culture forward.",
    category: "Diaspora",
    region: "Nepal and worldwide",
    period: "1990 to present",
    image: "festival",
    evidence: "Scholarly interpretation",
    sourceIds: ["florence", "ghale", "pariyar"],
    sections: [
      {
        title: "National bodies",
        text: "The Tamu Hyula Chhonj Dhee (Gurung national council) and the Tamu Pye Lhu Sangh (a body for Tamu religion) became important voices for Gurung identity from the 1990s, working on language, religion, history and Lhosar.",
      },
      {
        title: "Village and town societies",
        text: "Almost every Gurung village has a society in Pokhara or Kathmandu. These help new arrivals, raise money for home villages and hold Lhosar and funeral gatherings.",
      },
      {
        title: "Abroad",
        text: "Tamu societies in Britain, Hong Kong, the United States, Australia, Japan, the Gulf and elsewhere organise Lhosar, language classes and support for families. Ex-Gurkha groups are especially strong in Britain.",
      },
      {
        title: "Debates and diversity",
        text: "Organisations do not always agree, for example about religion, clan status or how history should be told. These debates show a lively community still shaping its own identity.",
      },
    ],
  }),
  article({
    slug: "lhosar-worldwide",
    title: "Lhosar around the world",
    summary:
      "From Pokhara to London, Hong Kong and New York: how Tamu New Year brings scattered families together.",
    category: "Diaspora",
    region: "Worldwide",
    period: "Present",
    image: "lhosar",
    evidence: "Scholarly interpretation",
    sourceIds: ["ntb", "florence", "ela"],
    sections: [
      {
        title: "At home",
        text: "In Nepal, Lhosar on the 15th of Poush has been a public holiday since 2002. Pokhara and Kathmandu hold large gatherings with dance, food, dress and music.",
      },
      {
        title: "In Britain",
        text: "In Aldershot, Farnborough, Reading and other towns, Gurung societies rent halls for Lhosar. Elders in traditional dress, children dancing and food stalls make it a key day of the year.",
      },
      {
        title: "Hong Kong, New York and beyond",
        text: "Gurungs in Hong Kong, Queens, Sydney, Tokyo and the Gulf hold their own Lhosar events. Videos shared online let families in the villages see the celebrations.",
      },
      {
        title: "Passing it on",
        text: "For many young people abroad, Lhosar is the main way they learn Tamu songs, dress and words. Organisers often add short talks about history and language.",
      },
    ],
  }),
  article({
    slug: "darjeeling-sikkim",
    title: "Gurungs in Darjeeling, Sikkim and Northeast India",
    summary:
      "Long-settled Gurung communities in India, shaped by tea gardens, the army and Himalayan trade.",
    category: "Diaspora",
    region: "Darjeeling, Sikkim, Assam, India",
    period: "19th century to present",
    image: "mountains",
    evidence: "Scholarly interpretation",
    sourceIds: ["census", "pariyar", "guide"],
    sections: [
      {
        title: "Moving east",
        text: "From the nineteenth century many Gurung families moved east into Darjeeling, Sikkim, Bhutan and Assam, to work in tea gardens, farms and the army, or to open new land.",
      },
      {
        title: "Army towns",
        text: "Gurkha regiments of the Indian Army brought Gurung families to cantonment towns such as Dehradun, Shillong and Dharamshala, where communities grew over generations.",
      },
      {
        title: "Gurungs of Sikkim",
        text: "In Sikkim, Gurungs are one of the recognised communities and are counted among the state’s many Nepali-speaking groups. Many still celebrate Lhosar and keep clan memory.",
      },
      {
        title: "Language and identity",
        text: "Many Indian Gurungs now speak mainly Nepali. Community groups have started classes and events to bring back Tamu Kyi and Tamu customs.",
      },
    ],
  }),
];
