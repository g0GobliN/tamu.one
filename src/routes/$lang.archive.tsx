import { createFileRoute } from "@tanstack/react-router";

import { Library } from "@/components/museum/Library";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/archive")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "archive", "/archive"),
  component: () => <Library variant="archive" />,
});
