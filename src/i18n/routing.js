import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// Define supported locales and default locale
export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "es",
});

// Export navigation utilities for the defined routing
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
