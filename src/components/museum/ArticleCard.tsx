import { Link } from '@tanstack/react-router';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { getMedia } from '@/data/media';
import type { Article } from '@/data/heritage';
export function ArticleCard({article:a}:{article:Article}){const photo=a.image?getMedia(a.image):undefined;return <Link to="/library/$slug" params={{slug:a.slug}} className={`article-card ${photo?'':'text-card'}`}>
{photo?<div className="card-image"><img src={photo.url} alt={photo.title} width={600} height={400} loading="lazy"/><span className="card-category">{a.category}</span></div>:<div className="card-topic"><BookOpen size={27} strokeWidth={1}/><span>{a.category}</span><span className="research-label">RESEARCH COLLECTION</span></div>}
<div className="card-body"><div className="card-kicker">{a.region}<ArrowUpRight size={17}/></div><h3>{a.title}</h3><p>{a.summary}</p><div className="card-meta">{a.evidence}<span>4 min read</span></div></div></Link>}
