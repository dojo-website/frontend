"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ClassSchedule = () => {
  const t = useTranslations();

  return (
    <section className="relative flex flex-col mx-auto max-w-7xl">
      <div className="absolute bottom-0 right-0 w-40 py-12 md:w-48">
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
      <section className="relative max-w-5xl px-6 py-12 mx-auto ">
        <div className="mb-12">
          <h1 className="mb-4 font-bold text-center">{t("schedule.title")}</h1>
          <p className="">{t("schedule.description")}</p>

          <div className="mt-6 rounded-lg ">
            <h6 className="mb-2 font-bold">{t("schedule.days")}</h6>
            <ul className="space-y-2 text-sm font-roboto">
              <li className="flex items-center gap-2 font-semibold text-primary">
                <div className="rounded-full size-2 bg-primary" />
                <p>
                  18:00 - 19:00:&nbsp;
                  <span className="font-normal text-black">
                    {t("schedule.times.children")}
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-2 font-semibold text-primary">
                <div className="rounded-full size-2 bg-primary" />
                <p>
                  20:00 - 21:00:&nbsp;
                  <span className="font-normal text-black">
                    {t("schedule.times.teens")}
                  </span>
                </p>
              </li>

              <li className="flex items-center gap-2 font-semibold text-primary">
                <div className="rounded-full size-2 bg-primary" />
                <p>
                  19:00 - 20:00:&nbsp;
                  <span className="font-normal text-black">
                    {t("schedule.times.adults")}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="mb-4 font-bold text-center">{t("structure.title")}</h1>
          <p className="mb-6">{t("structure.description")}</p>

          <ol className="list-decimal list-inside">
            {Object.keys(t.raw("structure.steps")).map((key, index) => (
              <li key={index} className="flex items-start gap-2 p-4 rounded-lg">
                <span className="font-semibold">{index + 1}.</span>
                <div>
                  <h3 className="text-lg font-semibold">
                    {t(`structure.steps.${key}.title`)}
                  </h3>
                  <p className="">{t(`structure.steps.${key}.description`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </section>
  );
};

export default ClassSchedule;
