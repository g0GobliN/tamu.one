import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/contribute')({
  head: () => pageHead('Contribute', 'Help preserve Gurung heritage: share a memory, photograph, correction or knowledge with TAMU.'),
  component: Contribute,
});

function Contribute() {
  const [sent, setSent] = useState(false);
  return (
    <main className="prose-page">
      <span className="eyebrow">A SHARED RESPONSIBILITY</span>
      <h1 style={{ fontSize: 'clamp(2.8rem,7vw,5rem)', margin: '1rem 0' }}>Become part of the story</h1>
      <p>Every memory is a thread. Share a family story, a photograph, a word in Tamu Kyi, or a correction to something you've read here.</p>
      {sent ? (
        <div className="form-done"><h2 style={{ margin: 0 }}>Thank you.</h2><p>Your contribution has been noted. Online submissions are coming soon — for now, nothing has been sent or stored.</p></div>
      ) : (
        <form className="contribute-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label>Your name<input required name="name" /></label>
          <label>Email<input required type="email" name="email" /></label>
          <label>Type of contribution<select name="type"><option>Memory or story</option><option>Photograph</option><option>Language</option><option>Correction</option></select></label>
          <label>Village or region<input name="region" placeholder="e.g. Ghandruk, Kaski" /></label>
          <label>Your contribution<textarea required rows={6} name="message" /></label>
          <Button type="submit" size="lg">Send contribution</Button>
        </form>
      )}
    </main>
  );
}
