import { useTranslations } from "next-intl";
import Image from "next/image";

const MainContent = () => {
  const t = useTranslations("home");
  return (
    <section className="relative flex flex-col items-center justify-center py-10 mx-auto my-8 md:my-10 overflow-hidden bg-white w-[90%] lg:w-full max-w-7xl">
      <div className="absolute right-0 w-48">
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

      <main className="relative flex flex-col max-w-5xl my-10 text-center gap-x-10">
        <h1 className="my-6 font-extrabold text-black uppercase">DOJO KIME</h1>
        <h4 className="mt-2 font-bold font-roboto text-primary">
          {t("karate_school")}
        </h4>
        <p className="mt-1 mb-6 font-light leading-relaxed">
          {t.rich("welcome_message", {
            strong: (chunks) => <strong className="font-bold">{chunks}</strong>,
          })}
        </p>
      </main>
    </section>
  );
};

export default MainContent;
