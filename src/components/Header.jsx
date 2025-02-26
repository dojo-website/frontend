"use client";

import React, { useState } from "react";
import { headLogo } from "../../public";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Header = () => {
  const t = useTranslations("navigation");
  const params = useParams(); // Fetch params
  const locale = params?.locale || "en"; // Default to English if undefined
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navLinks = [
    { key: "home", href: "/" },
    { key: "about", href: "/nosotros" },
    { key: "classes", href: "/clases" },
    { key: "signup", href: "/inscrebete" },
    { key: "blog", href: "/blog" },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <nav className="flex items-center justify-between h-24 px-6 font-bold text-black uppercase">
        <Image src={headLogo} width={200} height={200} alt="Head Logo" />
        <ul className="flex items-center h-full gap-10 max-md:hidden">
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
      </nav>
    </div>
  );
};

export default Header;
