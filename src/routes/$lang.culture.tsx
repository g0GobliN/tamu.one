import { createFileRoute } from "@tanstack/react-router";

import { TopicPage } from "@/components/museum/TopicPage";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/culture")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "culture", "/culture"),
  component: () => <TopicPage topicKey="culture" />,
});
