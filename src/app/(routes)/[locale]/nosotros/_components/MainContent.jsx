import AnimatedSection from "@/components/animations/AnimatedSection";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const MainContent = ({ content_title, header, mission_title, mission_statement }) => {
  const t = useTranslations("nosotros.main");
  return (
    <div className="flex flex-col items-center justify-center px-2 my-2">
      <section className="relative flex flex-col justify-center w-full mx-auto md:my-16 max-w-7xl">
        {/* Mobile Watermarks */}
        <div className="absolute w-full h-full select-none md:hidden">
          <Image
            src="/watermarks/watermark-1.png"
            className="absolute top-0 left-0 w-32 h-auto"
            width={200}
            height={200}
            alt="Watermark 1"
          />
          <Image
            src="/watermarks/watermark-2.png"
            className="absolute bottom-0 right-0 w-32 h-auto "
            width={200}
            height={200}
            alt="Watermark 2"
          />
        </div>
        {/* Tablet and Desktop Watermarks */}
        <div className="absolute top-0 left-0 h-auto select-none w-44 max-md:hidden">
          <Image
            src="/watermarks/watermark-1.png"
            className="h-auto w-44"
            width={200}
            height={200}
            alt="Watermark 1"
          />
          <Image
            src="/watermarks/watermark-2.png"
            className="w-40 h-auto"
            width={200}
            height={200}
            alt="Watermark 2"
          />
        </div>

        <div className="relative flex flex-col w-[90%] lg:w-full max-w-5xl mx-auto my-10 text-center">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center justify-center gap-4 mb-6">
              <h1 className="text-center uppercase">{content_title}</h1>
              <h4 className="font-semibold text-center text-primary font-roboto">
                {header}
              </h4>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
              <h3 className="font-semibold text-center uppercase">{mission_title}</h3>
              <p className="mt-2 mb-6 leading-loose font-roboto">
                {mission_statement}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
