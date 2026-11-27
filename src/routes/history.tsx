import { createFileRoute } from '@tanstack/react-router';
import { TopicPage } from '@/components/museum/TopicPage';
import { topics } from '@/data/topics';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/history')({
  head: () => pageHead('History', 'Origins, ancestral landscapes, remembered leadership and modern history of the Gurung people.'),
  component: () => <TopicPage topic={topics.history} />,
});
