import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, Compass, BookOpen, Mic, Globe2, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/heritage";
import { getMedia } from "@/data/media";
import { ArticleCard } from "./ArticleCard";
const collections = [
  {
    number: "01",
    title: "Our ancestral story",
    subtitle: "Origins, memory & history",
    image: "dawn",
    to: "/history",
  },
  {
    number: "02",
    title: "A living culture",
    subtitle: "Traditions across generations",
    image: "festival",
    to: "/culture",
  },
  {
    number: "03",
    title: "The places we call home",
    subtitle: "Villages, valleys & landscapes",
    image: "village",
    to: "/geography",
  },
] as const;
export function Home() {
  return (
    <main>
      <section className="home-hero">
        <img
          className="hero-photo"
          src={getMedia("mountains").url}
          alt="Annapurna South and Machapuchare viewed from Ghandruk"
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
            <span /> THE LIVING HISTORY OF THE GURUNG PEOPLE <span />
          </span>
          <h1>TAMU</h1>
          <div className="hero-rule">
            <span />✦<span />
          </div>
          <h2>
            Our roots run deeper
            <br />
            than the mountains.
          </h2>
          <p>
            A journey through the history, language and living
            <br className="desktop-break" /> heritage of the Gurung people.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="hero-primary">
              <Link to="/journey">
                <Compass /> Begin the journey <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hero-secondary">
              <Link to="/library">
                Explore the archive <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </motion.div>
        <div className="hero-foot">
          <span>ANNAPURNA REGION · NEPAL</span>
          <a href="#collections" aria-label="Explore collections">
            <ArrowDown size={17} /> <span>DISCOVER OUR HERITAGE</span>
          </a>
          <Link to="/sources">PHOTO: SUDAN SHRESTHA · CC BY-SA 3.0</Link>
        </div>
      </section>
      <section className="heritage-intro" id="collections">
        <div className="intro-note">
          <span className="eyebrow">REMEMBERING. UNDERSTANDING. BELONGING.</span>
          <h2>
            Not just a history.
            <br />
            <em>A heritage that lives on.</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            From the villages beneath Annapurna to communities around the world, the Tamu story is
            carried in our language, our traditions and the memories of our people.
          </p>
          <p>
            TAMU brings those threads together—an open, growing archive for the generations to come.
          </p>
          <Link to="/about" className="text-link">
            Discover the story behind TAMU <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="collection-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MANY THREADS. ONE HERITAGE.</span>
            <h2>Explore our world</h2>
          </div>
          <Link to="/library" className="text-link">
            All collections <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="collection-grid">
          {collections.map((c) => (
            <Link key={c.number} to={c.to} className={`collection-tile collection-${c.image}`}>
              <img
                src={getMedia(c.image).url}
                alt={getMedia(c.image).title}
                width={650}
                height={750}
                loading="lazy"
              />
              <div className="collection-shade" />
              <span className="collection-number">{c.number} / COLLECTION</span>
              <div className="collection-title">
                <small>{c.subtitle}</small>
                <h3>{c.title}</h3>
                <span className="tile-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="discovery-strip">
        <Link to="/language">
          <BookOpen strokeWidth={1} />
          <div>
            <small>TAMU KYI</small>
            <h3>The language of our people</h3>
          </div>
          <ArrowUpRight />
        </Link>
        <Link to="/oral-history">
          <Mic strokeWidth={1} />
          <div>
            <small>ORAL HISTORY</small>
            <h3>Stories from our elders</h3>
          </div>
          <ArrowUpRight />
        </Link>
        <Link to="/diaspora">
          <Globe2 strokeWidth={1} />
          <div>
            <small>BEYOND THE HOMELAND</small>
            <h3>One heritage, a world of lives</h3>
          </div>
          <ArrowUpRight />
        </Link>
      </section>
      <section className="reading-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FROM THE KNOWLEDGE LIBRARY</span>
            <h2>Stories worth discovering</h2>
          </div>
          <Link to="/library" className="text-link">
            Browse the library <ArrowRight size={17} />
          </Link>
        </div>
        <div className="article-grid">
          {articles
            .filter((a) => ["khola-sothar", "gurung-and-tamu", "ghandruk"].includes(a.slug))
            .map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
        </div>
      </section>
      <section className="community-band">
        <span className="eyebrow">OUR HERITAGE IS A SHARED RESPONSIBILITY</span>
        <h2>
          Every memory is a thread.
          <br />
          Every voice belongs.
        </h2>
        <p>Help preserve a story, share a photograph, or bring your knowledge to the archive.</p>
        <Button asChild size="lg">
          <Link to="/contribute">
            Become part of the story <ArrowUpRight />
          </Link>
        </Button>
      </section>
    </main>
  );
}
