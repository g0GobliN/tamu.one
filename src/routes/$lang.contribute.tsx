import { createFileRoute } from "@tanstack/react-router";

import { Contribute } from "@/components/museum/Contribute";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/contribute")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "contribute", "/contribute"),
  component: Contribute,
});
