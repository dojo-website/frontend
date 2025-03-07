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

  // Nested component to render the list of approaches
  const Approaches = () => {
    return (
      <ul className="mt-4 space-y-6 md:space-y-2">
        {approaches.map((approach, index) => {
          return (
            <li key={approach?.id || index} className="flex items-center gap-3">
              <span className="h-2 p-1 m-2 rounded-full bg-primary" />
              <p className="leading-loose">
                <strong>{approach?.title || "Title"}:</strong>
                {approach?.description || "Description"}
              </p>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="w-full py-12 bg-secondary">
      <AnimatedSection delay={0.4}>
        <div className="flex flex-col items-center max-w-5xl mx-auto text-white">
          <div className="flex w-[90%] flex-col-reverse items-center justify-center gap-6 md:gap-14 mb-10 md:flex-row">
            {/* Image */}
            <figure className="flex flex-col items-center justify-center w-full gap-2 md:w-1/2">
              <Image
                src={inspiration_picture}
                width={400}
                height={400}
                alt="Maestro Hidetaka Nishiyama"
                className="w-full h-auto"
                priority
              />
              <figcaption className="w-full mt-2 text-sm italic font-thin text-start font-roboto">
                {inspiration_title}
              </figcaption>
            </figure>
            {/* Content */}
            <div className="flex flex-col items-center justify-center w-full gap-12 mb-8 md:w-1/2">
              <div className="w-full">
                <h2 className="font-bold text-center uppercase font-notoSans md:text-start">
                  {philosophy_title}
                </h2>
                <p className="mt-4 leading-loose">{philosophy_description}</p>
              </div>
              {/* (Nuestro Enfoque) for lg screens */}
              <div className="hidden w-full lg:block">
                <h2 className="font-bold uppercase">{approaches_title}</h2>
                <p className="mt-4 leading-loose">{approaches_description}</p>
                <Approaches />
              </div>
            </div>
          </div>
          {/* Content for mobile and tablet screens only (Nuestro Enfoque) */}
          <div className="hidden max-lg:block w-[90%]">
            <h2 className="font-bold text-center uppercase">
              {approaches_title}
            </h2>
            <p className="mt-4 leading-loose">{approaches_description}</p>
            <Approaches />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default OurPhilosophy;
