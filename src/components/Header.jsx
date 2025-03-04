"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Header = () => {
  const t = useTranslations("navigation");
  const params = useParams();
  const locale = params?.locale || "es";
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { key: "home", href: "/" },
    { key: "about", href: "/nosotros" },
    { key: "classes", href: "/clases" },
    { key: "signup", href: "/inscrebete" },
    { key: "blog", href: "/blog" },
  ];

  return (
    <div className="sticky top-0 z-50 border bg-white/30 backdrop-blur-lg border-white/20">
      <header className="relative">
        <nav className="flex items-center justify-between h-20 px-6 mx-auto font-bold text-black uppercase md:h-24 max-w-7xl">
          <Link href={`/${locale}/`}>
            <Image
              src="/KIMElogo.png"
              width={500}
              height={500}
              alt="Head Logo"
              className="h-auto w-28 md:w-40"
              priority
            />
          </Link>

          <ul className="items-center hidden h-full gap-10 md:flex">
            {navLinks.map(({ key, href }) => {
              const fullHref = `/${locale}${href}`;
              // Special handling for the home link
              const isActive =
                href === "/"
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname === fullHref;

              return (
                <li key={key}>
                  <Link
                    href={fullHref}
                    className={`text-xl transition duration-300 hover:text-primary ${
                      isActive ? "text-primary" : ""
                    }`}
                  >
                    {t(key)}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <img src="/cross.svg" />
            ) : (
              <img src="/hamburger.svg" />
            )}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="absolute left-0 z-10 w-full text-[#FFF2F2] bg-black">
            <ul className="flex flex-col items-center px-6">
              {navLinks.map(({ key, href }) => {
                const fullHref = `/${locale}${href}`;
                // Special handling for the home link
                const isActive =
                  href === "/"
                    ? pathname === `/${locale}` || pathname === `/${locale}/`
                    : pathname === fullHref;

                return (
                  <li
                    key={key}
                    className="w-full py-1 text-2xl font-semibold text-center border-b border-primary"
                  >
                    <Link
                      href={fullHref}
                      className={`block w-full p-2 transition duration-300 ${
                        isActive ? "text-primary" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
