import { createFileRoute } from "@tanstack/react-router";

import { Sources } from "@/components/museum/Sources";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/sources")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "sources", "/sources"),
  component: Sources,
});
