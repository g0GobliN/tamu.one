import { createFileRoute } from "@tanstack/react-router";

import { OralHistory } from "@/components/museum/OralHistory";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/oral-history")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "oral", "/oral-history"),
  component: OralHistory,
});
