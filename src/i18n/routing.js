import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// Define supported locales and default locale
export const locales = ["es", "en"];
export const defaultLocale = "es";

export const routing = defineRouting({
  locales,
  defaultLocale,
});

// Export navigation utilities for the defined routing
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
