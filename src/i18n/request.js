import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Fallback to default locale if the requested locale is invalid or not supported
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  // Load messages for the resolved locale
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
