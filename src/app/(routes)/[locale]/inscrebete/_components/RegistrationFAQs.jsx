import { useTranslations } from "next-intl";
import Image from "next/image";

const RegistrationFAQ = () => {
  const t = useTranslations("registrationFAQs");

  const faqs = [
    {
      question: t("where_is_dojo"),
      answer: t("where_is_dojo_answer"),
    },
    {
      question: t("need_to_belong"),
      answer: t("need_to_belong_answer"),
    },
    {
      question: t("can_i_come_without_registering"),
      answer: t("can_i_come_without_registering_answer"),
    },
    {
      question: t("how_to_contact"),
      answer: t("how_to_contact_answer"),
    },
    {
      question: t("can_register_with_teacher"),
      answer: t("can_register_with_teacher_answer"),
    },
    {
      question: t("class_cost"),
      answer: t("class_cost_answer"),
    },
  ];

  return (
    <div className="flex flex-col items-center w-full p-10 py-12 bg-secondary">
      <section className="relative w-full py-12 mx-auto text-white max-w-7xl">
        <div className="absolute bottom-0 right-0 w-56">
          <Image
            src="/watermarks/watermark-3.png"
            className="w-full h-auto opacity-10"
            width={200}
            height={200}
            alt="Watermark 3"
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <h1 className="mb-8 font-bold text-center font-notoSans">
            {t("title")}
          </h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-4 rounded-lg font-roboto"
              >
                <span className="font-semibold">{index + 1}.</span>
                <div>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-1">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationFAQ;
