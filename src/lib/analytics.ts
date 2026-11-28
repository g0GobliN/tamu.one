import type { JSX } from "react";

/**
 * Visitor analytics.
 *
 * TAMU counts visits with Cloudflare Web Analytics: no cookies, no local
 * storage, no fingerprinting and no cross-site profile. The beacon reports the
 * page address, the referring site, the country Cloudflare derives from the
 * connection and basic browser details, which is what makes the dashboard show
 * how many people came, which pages they read and roughly where they came from.
 *
 * The token identifies the site, not a person, so it is a public value. It is
 * read at build time from `VITE_CF_ANALYTICS_TOKEN`; without it no script is
 * added and the site collects nothing.
 */
export function analyticsToken(): string | undefined {
  const token = import.meta.env["VITE_CF_ANALYTICS_TOKEN"] as string | undefined;
  const trimmed = token?.trim();
  return trimmed ? trimmed : undefined;
}

/** The beacon is Cloudflare's own script; `spa` makes it follow client-side routes. */
export function analyticsHeadScripts(): JSX.IntrinsicElements["script"][] {
  const token = analyticsToken();
  if (!token) return [];
  // React's script props do not type data-* attributes, but the beacon reads this one.
  const beacon = { "data-cf-beacon": JSON.stringify({ token, spa: true }) } as Record<
    string,
    string
  >;
  return [
    {
      src: "https://static.cloudflareinsights.com/beacon.min.js",
      defer: true,
      ...beacon,
    },
  ];
}
