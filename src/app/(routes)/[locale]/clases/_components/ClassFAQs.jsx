"use client";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ClassFAQ = ({ faqs_title, course_faqs }) => {
  const t = useTranslations("classFAQs");

  return (
    <div className="flex flex-col items-center w-full p-6 md:p-10 bg-secondary">
      {/* Main container for FAQ section */}
      <section className="relative w-full py-6 mx-auto text-white max-w-7xl">
        <div className="absolute bottom-0 right-0 w-32 md:w-48">
          <Image
            src="/watermarks/watermark-3.png"
            className="w-full h-auto select-none opacity-10"
            width={200}
            height={200}
            alt="Watermark 3"
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="mb-6 font-bold text-center uppercase">{faqs_title}</h1>

          {/* Ordered list for FAQs */}
          <ol className="list-decimal list-inside">
            {course_faqs.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 py-4 rounded-lg font-roboto"
              >
                <span className="font-bold">{index + 1}.</span>
                <div>
                  <AnimatedSection delay={0.2 * index} direction="top">
                    <p className="font-bold">{item.question}</p>
                    <p className="mt-1">{item.answer}</p>
                  </AnimatedSection>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default ClassFAQ;
