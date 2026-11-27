import { createFileRoute } from "@tanstack/react-router";

import { Help } from "@/components/museum/Help";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/help")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "help", "/help"),
  component: Help,
});
