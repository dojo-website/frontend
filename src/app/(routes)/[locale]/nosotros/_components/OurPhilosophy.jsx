import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

const OurPhilosophy = () => {
  const t = useTranslations("nosotros.ourPhilosophy");

  return (
    <div className="w-full py-12 bg-secondary">
      <div className="flex flex-col items-center mx-auto text-white max-w-7xl">
        <div className="flex flex-col-reverse items-center justify-center w-full md:flex-row">
          <figure className="flex flex-col items-center justify-center w-full m-12 md:w-1/2">
            <Image
              src="/our-philosophy.png"
              width={400}
              height={400}
              alt="Maestro Hidetaka Nishiyama"
              className="w-11/12 h-auto"
              priority
            />
            <figcaption className="mt-2 text-sm font-thin text-start font-roboto">
              {t("imageCaption")}
            </figcaption>
          </figure>
          <div className="flex flex-col items-center justify-center w-full gap-12 mb-8 md:w-1/2">
            <div className="w-[90%]">
              <h2 className="font-bold uppercase font-notoSans">
                {t("ourPhilosophy")}
              </h2>
              <p className="mt-4">{t("philosophyText")}</p>
            </div>
            <div className="hidden lg:block w-[90%]">
              <h2 className="font-bold uppercase">{t("ourApproach")}</h2>
              <p className="mt-4">{t("approachText")}</p>

              <ul className="mt-4 space-y-2">
                {[
                  { key: "technique", textKey: "techniqueText" },
                  { key: "discipline", textKey: "disciplineText" },
                  { key: "community", textKey: "communityText" },
                ].map(({ key, textKey }) => (
                  <li key={key} className="flex items-center gap-3">
                    <span className="rounded-full size-2 bg-primary"></span>
                    <span>
                      <strong>{t(key)}:</strong> {t(textKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="block lg:hidden w-[90%]">
          <h2 className="font-bold uppercase">{t("ourApproach")}</h2>
          <p className="mt-4">{t("approachText")}</p>

          <ul className="mt-4 space-y-2">
            {[
              { key: "technique", textKey: "techniqueText" },
              { key: "discipline", textKey: "disciplineText" },
              { key: "community", textKey: "communityText" },
            ].map(({ key, textKey }) => (
              <li key={key} className="flex items-center gap-3">
                <span className="rounded-full size-2 bg-primary"></span>
                <span>
                  <strong>{t(key)}:</strong> {t(textKey)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurPhilosophy;
