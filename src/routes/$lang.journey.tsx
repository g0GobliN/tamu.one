import { createFileRoute } from "@tanstack/react-router";

import { Journey } from "@/components/museum/Journey";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/journey")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "journey", "/journey"),
  component: Journey,
});
