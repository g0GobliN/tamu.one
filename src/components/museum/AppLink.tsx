import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

import { pathFor, useLocale } from "@/i18n";

type AppLinkProps = Omit<ComponentProps<typeof Link>, "to" | "params"> & {
  /** Root-relative path in the default language, e.g. "/library/$slug". */
  to: string;
  params?: Record<string, string>;
};

/**
 * Internal link that carries the current language. English pages keep the bare path;
 * Nepali pages get the /ne prefix on every link, so navigating never drops the locale.
 */
export function AppLink({ to, params, ...rest }: AppLinkProps) {
  const locale = useLocale();
  return <Link to={pathFor(locale, to) as never} params={params as never} {...rest} />;
}
