"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Header = () => {
  const t = useTranslations("navigation");
  const params = useParams();
  const locale = params?.locale || "es";

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
              width={120}
              height={120}
              alt="Head Logo"
              className="w-28 md:w-40"
            />
          </Link>

          <ul className="items-center hidden h-full gap-10 md:flex">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={`/${locale}${href}`}
                  className="transition duration-300 hover:text-primary"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="absolute left-0 z-10 w-full text-white bg-black">
            <ul className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map(({ key, href }) => (
                <li
                  key={key}
                  className="w-full pb-2 text-center border-b border-primary"
                >
                  <Link
                    href={`/${locale}${href}`}
                    className="block w-full p-2 transition duration-300 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
