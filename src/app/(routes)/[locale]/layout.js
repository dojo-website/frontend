import "@/app/globals.css";
import { Noto_Sans, Roboto, Roboto_Condensed } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./Providers";

const notoSansJP = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "KIME - KARATE DOJO",
  description: "A Karate Dojo Blog website",
};

export default async function RootLayout({ children, params }) {
  const locale = params?.locale;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${notoSansJP.variable} ${roboto.variable} ${robotoCondensed.className} antialiased flex flex-col min-h-full`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}