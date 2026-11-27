import { createFileRoute, Link } from '@tanstack/react-router';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/about')({
  head: () => pageHead('About TAMU', 'Why TAMU exists: an open, growing and transparent archive of Gurung heritage.'),
  component: About,
});

function About() {
  return (
    <main className="prose-page">
      <span className="eyebrow">THE STORY BEHIND TAMU</span>
      <h1 style={{ fontSize: 'clamp(2.8rem,7vw,5rem)', margin: '1rem 0' }}>Remembering, together.</h1>
      <p>TAMU is an independent, growing archive of the history, language and living culture of the Gurung people. It brings scattered research, memory and imagery into one place that anyone can explore.</p>
      <h2>How we work</h2>
      <ul>
        <li>Every article names its sources and the kind of evidence behind it.</li>
        <li>We are honest about uncertainty and about where accounts differ.</li>
        <li>Sacred and ritual knowledge is treated with respect, not as spectacle.</li>
        <li>Community members can suggest corrections and share their own knowledge.</li>
      </ul>
      <h2>Get involved</h2>
      <p>Heritage grows through conversation. <Link to="/contribute" className="text-link">Share a memory, photo or correction</Link>.</p>
    </main>
  );
}
