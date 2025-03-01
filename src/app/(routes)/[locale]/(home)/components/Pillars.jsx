"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const PillarsSection = () => {
  const t = useTranslations("home");
  const { locale } = useParams();

  const pillars = [
    {
      id: 1,
      title: t("martialPhilosophy"),
      image: "/pillar 1.png",
      description: t("martialPhilosophyDescription"),
    },
    {
      id: 2,
      title: t("preciseTechnique"),
      image: "/pillar 2.png",
      description: t("preciseTechniqueDescription"),
    },
    {
      id: 3,
      title: t("selfDefense"),
      image: "/pillar 3.png",
      description: t("selfDefenseDescription"),
    },
    {
      id: 4,
      title: t("physicalEfficiency"),
      image: "/pillar 4.png",
      description: t("physicalEfficiencyDescription"),
    },
  ];

  return (
    <section className="w-full px-4 py-12 bg-secondary">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto my-4">
        <h1 className="mb-6 text-center text-white uppercase">
          {t("pillarOfKime")}
        </h1>
        <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="flex flex-col items-center gap-2 p-6 m-2 text-center bg-white rounded-lg shadow-lg"
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                width={100}
                height={100}
                className="w-auto mb-4 h-36"
              />
              <div className="p-2">
                <h3 className="font-bold uppercase">{pillar.title}</h3>
                <hr className="w-full my-2 border-primary" />
                <p className="font-medium text-justify text-black">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link href={`${locale}/inscrebete`} className="custom-btn">
          {t("signUpNow")}
        </Link>
      </div>
    </section>
  );
};

export default PillarsSection;
