import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedSection from "@/components/animations/AnimatedSection";

const MainContent = ({ title, header, description }) => {
  const t = useTranslations("home");

  return (
    <section className="relative flex flex-col items-center justify-center py-10 mx-auto md:my-10 overflow-hidden bg-white w-[90%] lg:w-full max-w-7xl">
      {/* Watermarks for mobile view (hidden on larger screens) */}
      <div className="absolute w-full h-full select-none md:hidden">
        <Image
          src="/watermarks/watermark-1.png"
          className="absolute top-0 right-0 h-auto w-44"
          width={200}
          height={200}
          alt="Watermark 1"
        />
        <Image
          src="/watermarks/watermark-2.png"
          className="absolute bottom-0 left-0 w-40 h-auto "
          width={200}
          height={200}
          alt="Watermark 2"
        />
      </div>

      {/* Watermarks for larger screens (hidden on mobile) */}
      <div className="absolute top-0 right-0 h-auto select-none w-44 max-md:hidden">
        <Image
          src="/watermarks/watermark-1.png"
          className="h-auto w-44"
          width={200}
          height={200}
          alt="Watermark 1"
        />
        <Image
          src="/watermarks/watermark-2.png"
          className="w-40 h-auto"
          width={200}
          height={200}
          alt="Watermark 2"
        />
      </div>
      {/* Main Content */}
      <main className="relative flex flex-col max-w-5xl text-center md:my-10 gap-x-10">
        <AnimatedSection direction="down" delay={0.2}>
          <h1 className="my-6 text-black uppercase">{title}</h1>
        </AnimatedSection>
        <AnimatedSection direction="down" delay={0.4}>
          <h4 className="mt-3 font-bold font-roboto text-primary">{header}</h4>
        </AnimatedSection>
        <AnimatedSection direction="down" delay={0.6}>
          <p className="mt-2 mb-6 font-normal leading-loose font-roboto">
            {description}
          </p>
        </AnimatedSection>
      </main>
    </section>
  );
};

export default MainContent;
