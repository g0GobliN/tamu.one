import { createFileRoute } from "@tanstack/react-router";

import { Library } from "@/components/museum/Library";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/library/")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "library", "/library"),
  component: () => <Library />,
});
