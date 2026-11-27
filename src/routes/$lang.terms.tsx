import { createFileRoute } from "@tanstack/react-router";

import { Terms } from "@/components/museum/Terms";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/terms")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "terms", "/terms"),
  component: Terms,
});
