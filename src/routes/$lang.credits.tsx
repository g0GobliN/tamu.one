import { createFileRoute } from "@tanstack/react-router";

import { Credits } from "@/components/museum/Credits";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/credits")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "credits", "/credits"),
  component: Credits,
});
