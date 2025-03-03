import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import AnimatedSection from "@/components/animations/AnimatedSection";

const OurPhilosophy = ({
  inspiration_title,
  inspiration_picture,
  philosophy_title,
  philosophy_description,
  approaches_title,
  approaches_description,
  approaches,
}) => {
  const t = useTranslations("nosotros.ourPhilosophy");

  const Approaches = () => {
    return (
      <ul className="mt-4 space-y-2">
        {approaches.map((approach, index) => {
          return (
            <li key={approach?.id || index} className="flex items-center gap-3">
              <span className="rounded-full size-2 bg-primary"></span>
              <span>
                <strong>{approach?.title || "Title"}:</strong>
                {approach?.description || "Description"}
              </span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="w-full py-12 bg-secondary">
      <AnimatedSection delay={0.4}>
        <div className="flex flex-col items-center mx-auto text-white max-w-7xl">
          <div className="flex flex-col-reverse items-center justify-center w-full md:flex-row">
            {/* Image */}
            <figure className="flex flex-col items-center justify-center w-full m-12 md:w-1/2">
              <Image
                src={inspiration_picture}
                width={400}
                height={400}
                alt="Maestro Hidetaka Nishiyama"
                className="w-11/12 h-auto"
                priority
              />
              <figcaption className="mt-2 text-sm font-thin text-start font-roboto">
                {inspiration_title}
              </figcaption>
            </figure>
            <div className="flex flex-col items-center justify-center w-full gap-12 mb-8 md:w-1/2">
              <div className="w-[90%]">
                <h2 className="font-bold text-center uppercase font-notoSans md:text-start">
                  {philosophy_title}
                </h2>
                <p className="mt-4">{philosophy_description}</p>
              </div>
              {/* (Nuestro Enfoque) for lg screens */}
              <div className="hidden lg:block w-[90%]">
                <h2 className="font-bold uppercase">{approaches_title}</h2>
                <p className="mt-4">{approaches_description}</p>
                <Approaches />
              </div>
            </div>
          </div>
          {/* (Nuestro Enfoque) for sm and md (mobile and tablets) screens */}
          <div className="hidden max-lg:block w-[90%]">
            <h2 className="font-bold text-center uppercase">
              {approaches_title}
            </h2>
            <p className="mt-4">{approaches_description}</p>
            <Approaches />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default OurPhilosophy;
