"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const PillarsSection = ({ pillars }) => {
  const t = useTranslations("home");
  // Retrieve the current locale from the URL parameters
  const { locale } = useParams();

  return (
    <section className="w-full px-3 py-8 md:px-4 bg-secondary">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto my-4">
        <h1 className="mb-6 text-center text-white uppercase">
          {t("pillarOfKime")}
        </h1>

        <div className="grid grid-cols-1 gap-4 my-6 lg:my-10 lg:gap-10 md:grid-cols-2">
          {pillars?.map((pillar) => (
            <div
              key={pillar.id} // Ensure each item has a unique key
              className="flex flex-col items-center gap-2 p-4 m-2 text-center bg-white rounded-lg shadow-lg lg:p-6"
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                width={100}
                height={100}
                className="w-auto mb-4 select-none h-36 "
              />

              <div className="p-2">
                <h3 className="font-bold uppercase">{pillar.title}</h3>
                <hr className="w-full my-2 border-primary" />
                <p className="text-sm font-light leading-relaxed text-justify text-black">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Signup button linking to the localized registration page */}
        <Link href={`${locale}/inscrebete`} className="md:mb-4 custom-btn">
          {t("signUpNow")}
        </Link>
      </div>
    </section>
  );
};

export default PillarsSection;
