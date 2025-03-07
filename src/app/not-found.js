"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const router = useRouter();
  const [counter, setCounter] = useState(5);
  const t = useTranslations("notFound");

  useEffect(() => {
    if (counter === 0) {
      router.push("/");
      return;
    }

    const interval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-2 px-6 text-center bg-white animate-fade-in">
      <h2 className="mb-2 font-bold text-red-600 animate-bounce">
        {t("title")}
      </h2>

      <p className="mb-4 text-lg text-secondary animate-pulse">
        {t("countdown", { counter })}
      </p>

      <Link
        href="/"
        className="px-6 py-3 mt-4 text-lg font-semibold text-white transition-transform duration-300 bg-red-600 rounded-lg shadow-md hover:scale-105 hover:bg-red-700 animate-fade-in"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
