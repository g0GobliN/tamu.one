import { createFileRoute } from "@tanstack/react-router";

import { Timeline } from "@/components/museum/Timeline";
import { assertLocale, localeHead } from "@/i18n/route-head";

export const Route = createFileRoute("/$lang/timeline")({
  beforeLoad: ({ params }) => assertLocale(params),
  head: ({ params }) => localeHead(params, "timeline", "/timeline"),
  component: Timeline,
});
