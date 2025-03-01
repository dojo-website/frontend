// import TitleSection from "@/components/TitleSection";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Title = ({ content_title, header, mission_title, mission_statement }) => {
  const t = useTranslations("nosotros.main");
  return (
    <div className="flex flex-col items-center justify-center px-2 my-2">
      <section className="relative flex flex-col justify-center w-full mx-auto my-8 md:my-16 max-w-7xl">
        <div className="absolute left-0 w-44">
          <Image
            src="/watermarks/watermark-1.png"
            className="w-full h-auto"
            width={200}
            height={200}
            alt="Watermark 1"
          />
          <Image
            src="/watermarks/watermark-2.png"
            className="w-full h-auto"
            width={200}
            height={200}
            alt="Watermark 2"
          />
        </div>
        <div className="relative flex flex-col w-[90%] lg:w-full max-w-5xl mx-auto my-10 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <h1 className="text-center uppercase">{content_title}</h1>
            <h4 className="font-semibold text-center text-primary font-roboto">
              {header}
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mb-6 ">
            <h3 className="text-center uppercase">{mission_title}</h3>
            <p className="text-center">{mission_statement} </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Title;
