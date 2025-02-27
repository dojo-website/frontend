import { pillars } from "@/utils/Mocks/Data";
import { useTranslations } from "next-intl";
import Image from "next/image";

const PillarsSection = () => {
  const t = useTranslations("home");

  return (
    <section className="w-full px-4 py-12 bg-secondary">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto my-4">
        <h1 className="mb-6 text-white uppercase"> {t("pillarOfKime")} </h1>
        <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="flex flex-col items-center gap-2 p-6 text-center bg-white rounded-lg shadow-lg"
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                width={100}
                height={100}
                className="w-auto mb-4 h-36"
              />
              <h3 className="uppercase ont-bold ">{pillar.title}</h3>
              <hr className="w-full my-2 border-primary" />
              <p className="font-medium text-justify text-black">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        <button className="mt-10 custom-btn">{t("signUpNow")}</button>
      </div>
    </section>
  );
};

export default PillarsSection;
