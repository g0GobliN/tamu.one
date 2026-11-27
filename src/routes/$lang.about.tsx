import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/museum/About";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/about")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "about", "/about"),
  component: About,
});
