import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { navItems } from "@/components/museum/Header";

describe("Museum pages", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  for (const path of [...navItems.map((n) => n.to), "/library", "/library/ghatu", "/contribute", "/about", "/sources", "/oral-history"]) {
    it(`has a page for ${path}`, () => {
      expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
});
