import { ArrowRight, ArrowDown, Compass, BookOpen, Mic, Globe2, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { getMedia } from "@/data/media";
import { getArticleBySlug, getTopic } from "@/i18n/content";
import { useLocale, useUi } from "@/i18n";
import { localizeMedia } from "@/i18n/media-ne";
import { ArticleCard } from "./ArticleCard";
import { AppLink } from "./AppLink";

export function Home() {
  const ui = useUi();
  const locale = useLocale();

  const collections = [
    {
      number: "01",
      title: getTopic(locale, "history").title,
      subtitle: ui.home.collectionSubtitles[0],
      image: "dawn",
      to: "/history",
    },
    {
      number: "02",
      title: getTopic(locale, "culture").title,
      subtitle: ui.home.collectionSubtitles[1],
      image: "festival",
      to: "/culture",
    },
    {
      number: "03",
      title: getTopic(locale, "geography").title,
      subtitle: ui.home.collectionSubtitles[2],
      image: "village",
      to: "/geography",
    },
  ] as const;

  const featured = [
    "first-written-accounts",
    "origin-traditions-and-evidence",
    "tamu-kyi-and-kinship",
    "ethnographers-of-the-gurungs",
    "hill-economy-and-service",
    "khola-sothar",
  ]
    .map((slug) => getArticleBySlug(slug, locale))
    .filter((a) => a !== undefined);

  return (
    <main>
      <section className="home-hero">
        <img
          className="hero-photo"
          src={getMedia("mountains").url}
          alt={ui.home.heroAlt}
          width={2200}
          height={1457}
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="eyebrow hero-eyebrow">
            <span /> {ui.home.eyebrow} <span />
          </span>
          <h1>{ui.home.title}</h1>
          <div className="hero-rule">
            <span />✦<span />
          </div>
          <h2>
            {ui.home.taglineA}
            <br />
            {ui.home.taglineB}
          </h2>
          <p>
            {ui.home.ledeA}
            <br className="desktop-break" /> {ui.home.ledeB}
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="hero-primary">
              <AppLink to="/journey">
                <Compass /> {ui.home.begin} <ArrowRight />
              </AppLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="hero-secondary">
              <AppLink to="/library">
                {ui.home.explore} <ArrowUpRight />
              </AppLink>
            </Button>
          </div>
        </motion.div>
        <div className="hero-foot">
          <span>{ui.home.region}</span>
          <a href="#collections" aria-label={ui.home.exploreAria}>
            <ArrowDown size={17} /> <span>{ui.home.discover}</span>
          </a>
          <AppLink to="/sources">{ui.home.photoCredit}</AppLink>
        </div>
      </section>
      <section className="heritage-intro" id="collections">
        <div className="intro-note">
          <span className="eyebrow">{ui.home.introEyebrow}</span>
          <h2>
            {ui.home.introTitleA}
            <br />
            <em>{ui.home.introTitleB}</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p>{ui.home.introP1}</p>
          <p>{ui.home.introP2}</p>
          <AppLink to="/about" className="text-link">
            {ui.home.aboutLink} <ArrowRight size={17} />
          </AppLink>
        </div>
      </section>
      <section className="collection-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.home.collectionsEyebrow}</span>
            <h2>{ui.home.collectionsTitle}</h2>
          </div>
          <AppLink to="/library" className="text-link">
            {ui.common.allCollections} <ArrowUpRight size={18} />
          </AppLink>
        </div>
        <div className="collection-grid">
          {collections.map((c) => (
            <AppLink key={c.number} to={c.to} className={`collection-tile collection-${c.image}`}>
              <img
                src={getMedia(c.image).url}
                alt={localizeMedia(getMedia(c.image), locale).title}
                width={650}
                height={750}
                loading="lazy"
              />
              <div className="collection-shade" />
              <span className="collection-number">
                {c.number} / {ui.home.collectionWord}
              </span>
              <div className="collection-title">
                <small>{c.subtitle}</small>
                <h3>{c.title}</h3>
                <span className="tile-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </div>
            </AppLink>
          ))}
        </div>
      </section>
      <section className="discovery-strip">
        <AppLink to="/language">
          <BookOpen strokeWidth={1} />
          <div>
            <small>{ui.home.discovery.language.small}</small>
            <h3>{ui.home.discovery.language.title}</h3>
          </div>
          <ArrowUpRight />
        </AppLink>
        <AppLink to="/oral-history">
          <Mic strokeWidth={1} />
          <div>
            <small>{ui.home.discovery.oral.small}</small>
            <h3>{ui.home.discovery.oral.title}</h3>
          </div>
          <ArrowUpRight />
        </AppLink>
        <AppLink to="/diaspora">
          <Globe2 strokeWidth={1} />
          <div>
            <small>{ui.home.discovery.diaspora.small}</small>
            <h3>{ui.home.discovery.diaspora.title}</h3>
          </div>
          <ArrowUpRight />
        </AppLink>
      </section>
      <section className="reading-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.home.readingEyebrow}</span>
            <h2>{ui.home.readingTitle}</h2>
          </div>
          <AppLink to="/library" className="text-link">
            {ui.home.browse} <ArrowRight size={17} />
          </AppLink>
        </div>
        <div className="article-grid">
          {featured.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
      <section className="community-band">
        <span className="eyebrow">{ui.home.communityEyebrow}</span>
        <h2>
          {ui.home.communityTitleA}
          <br />
          {ui.home.communityTitleB}
        </h2>
        <p>{ui.home.communityP}</p>
        <Button asChild size="lg">
          <AppLink to="/contribute">
            {ui.home.communityCta} <ArrowUpRight />
          </AppLink>
        </Button>
      </section>
    </main>
  );
}
