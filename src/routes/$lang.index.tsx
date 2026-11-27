import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/museum/Home";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "home", "/"),
  component: Home,
});
