import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Association = ({ association_title, association_description }) => {
  const t = useTranslations("nosotros.association");
  return (
    <div className="w-full my-16">
      <section className="flex flex-col w-[90%] lg:w-full items-center max-w-5xl gap-6 mx-auto text-center">
        <h1 className="font-bold uppercase">{association_title}</h1>

        <div className="max-w-4xl">
          <p className="leading-relaxed text-gray-700">
            {association_description}
          </p>
        </div>

        <Image
          src="/budo-karate-art.png"
          width={250}
          height={250}
          alt="Budo Karate Art"
          className="object-contain"
        />
      </section>
    </div>
  );
};

export default Association;
