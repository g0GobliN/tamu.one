import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Header } from "@/components/museum/Header";
import { Footer } from "@/components/museum/Footer";
import { AppLink } from "@/components/museum/AppLink";
import { localeFromPath, stripLocale, useUi } from "@/i18n";
import { analyticsHeadScripts } from "@/lib/analytics";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  const ui = useUi();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{ui.notFound.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{ui.notFound.text}</p>
        <div className="mt-6">
          <AppLink
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {ui.notFound.home}
          </AppLink>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  const ui = useUi();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">{ui.error.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{ui.error.text}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {ui.error.retry}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {ui.error.home}
          </a>
        </div>
      </div>
    </div>
  );
}

const READING_PLACE_KEY = "tamu:lang-scroll";

interface ReadingPlace {
  rest: string;
  y: number;
  section: number;
  offset: number;
}

/** Puts the reader back on the passage they left when they switched language. */
function LanguageScrollRestore() {
  useEffect(() => {
    let saved: ReadingPlace | null = null;
    try {
      const raw = sessionStorage.getItem(READING_PLACE_KEY);
      if (!raw) return;
      sessionStorage.removeItem(READING_PLACE_KEY);
      saved = JSON.parse(raw) as ReadingPlace;
    } catch {
      return;
    }
    const target = saved;
    if (!target || target.rest !== stripLocale(window.location.pathname)) return;

    const restore = () => {
      const section =
        target.section >= 0 ? document.getElementById(`section-${target.section}`) : null;
      const top = section
        ? section.getBoundingClientRect().top + window.scrollY + target.offset
        : target.y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // The site scrolls smoothly for anchor links; a restored place should not animate.
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, Math.max(0, Math.min(top, max)));
      root.style.scrollBehavior = previous;
    };

    // Layout settles in stages: hydration, then webfonts and the cover image.
    restore();
    const frame = requestAnimationFrame(restore);
    const settle = window.setTimeout(restore, 350);
    window.addEventListener("load", restore, { once: true });
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      window.removeEventListener("load", restore);
    };
  }, []);

  return null;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Each content route, / included, sets its own head(); this is the fallback.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TAMU · The living history of the Gurung people" },
      {
        name: "description",
        content: "A heritage archive of Gurung history, language and culture.",
      },

      { property: "og:title", content: "TAMU" },
      {
        property: "og:description",
        content: "A heritage archive of Gurung history, language and culture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Karla:wght@400;500;600&family=Noto+Sans+Devanagari:wght@400;500;600&family=Noto+Serif+Devanagari:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon", sizes: "256x256" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    // Cloudflare Web Analytics, only when a beacon token is configured.
    scripts: analyticsHeadScripts(),
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const lang = localeFromPath(pathname);

  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Header />
      <Outlet />
      <Footer />
      <LanguageScrollRestore />
    </QueryClientProvider>
  );
}
