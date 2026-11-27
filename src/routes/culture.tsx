import { createFileRoute } from '@tanstack/react-router';
import { TopicPage } from '@/components/museum/TopicPage';
import { topics } from '@/data/topics';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/culture')({
  head: () => pageHead('Culture', 'Gurung traditions, ritual knowledge, music, dance and community life across generations.'),
  component: () => <TopicPage topic={topics.culture} />,
});
