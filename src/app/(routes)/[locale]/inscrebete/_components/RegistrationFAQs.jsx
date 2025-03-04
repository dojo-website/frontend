import AnimatedSection from "@/components/animations/AnimatedSection";
import { useTranslations } from "next-intl";
import Image from "next/image";

const RegistrationFAQ = ({ title, faqs }) => {
  title, faqs;
  const t = useTranslations("registrationFAQs");

  return (
    <div className="flex flex-col items-center w-full p-10 py-12 bg-secondary">
      <section className="relative w-full py-6 mx-auto text-white max-w-7xl">
        <div className="absolute bottom-0 right-0 w-56 select-none">
          <Image
            src="/watermarks/watermark-3.png"
            className="w-full h-auto opacity-10"
            width={200}
            height={200}
            alt="Watermark 3"
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="mb-4 font-bold text-center">{title}</h1>
          <div className="list-decimal list-inside">
            {faqs?.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.2} direction="top">
                <div className="flex items-start gap-2 py-4 rounded-lg font-roboto">
                  <span className="font-semibold">{index + 1}.</span>
                  <div>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-1">{faq.answer}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationFAQ;
