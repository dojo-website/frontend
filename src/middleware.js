import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Create middleware for handling internationalized routing
export default createMiddleware(routing);

// Define middleware matcher for specific routes
export const config = {
  matcher: ["/", "/(en|es)/:path*"],
};
