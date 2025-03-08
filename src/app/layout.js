import "@/app/globals.css";
import {
  Noto_Sans,
  Noto_Sans_JP,
  Roboto,
  Roboto_Condensed,
} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["variable"],
  variable: "--font-noto-sans-jp", // Assign to CSS variable
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-roboto-condensed", // Assign to CSS variable
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto", // Assign to CSS variable
});

export const metadata = {
  title: "KIME - KARATE DOJO",
  description: "El enfoque que define el Karate",
};

export default async function RootLayout({ children, params }) {
  // Await the params object before destructuring
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${notoSans.variable} ${roboto.variable} ${robotoCondensed.className} antialiased flex flex-col `}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
