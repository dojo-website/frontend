"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ClassFAQ = ({ faqs_title, course_faqs }) => {
  const t = useTranslations("classFAQs");

  return (
    <div className="flex flex-col items-center w-full p-10 py-12 bg-secondary">
      <section className="relative w-full py-6 mx-auto text-white max-w-7xl">
        <div className="absolute bottom-0 right-0 w-48 md:w-56">
          <Image
            src="/watermarks/watermark-3.png"
            className="w-full h-auto select-none opacity-10"
            width={200}
            height={200}
            alt="Watermark 3"
          />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="mb-6 font-bold text-center">{faqs_title}</h1>
          <ol className="list-decimal list-inside">
            {course_faqs.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 py-4 rounded-lg font-roboto"
              >
                <span className="font-semibold">{index + 1}.</span>
                <div>
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="mt-1">{item.answer}</p>
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
