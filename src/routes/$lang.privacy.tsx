import { createFileRoute } from "@tanstack/react-router";

import { Privacy } from "@/components/museum/Privacy";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/privacy")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "privacy", "/privacy"),
  component: Privacy,
});
