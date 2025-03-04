import AnimatedSection from "@/components/animations/AnimatedSection";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";

const Association = ({
  associationTitle,
  associationDescription,
  associations,
}) => {
  const t = useTranslations("nosotros.association");
  return (
    <div className="w-full my-16">
      <section className="flex flex-col w-[90%] lg:w-full items-center max-w-5xl gap-6 mx-auto text-center">
        <h1 className="font-bold uppercase">{associationTitle}</h1>

        <div className="max-w-4xl">
          <p className="leading-relaxed text-gray-700">
            {associationDescription}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 overflow-hidden">
          {associations?.map(({ id, logo, name }) => (
            <AnimatedSection key={id} delay={0.2 * id} direction="left">
              <Image
                src={logo}
                width={250}
                height={250}
                alt={name}
                className="object-cover rounded-lg"
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Association;
