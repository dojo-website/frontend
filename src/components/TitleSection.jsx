import Image from "next/image";
import AnimatedSection from "./animations/AnimatedSection";
import { useTranslations } from "next-intl";

const TitleSection = ({ title, image }) => {
  const t = useTranslations();
  // Validate image and title inputs
  const isValidImage =
    image && typeof image === "string" && image.trim() !== "";
  const isValidTitle =
    title && typeof title === "string" && title.trim() !== "";

  return (
    <div className="flex flex-col items-center justify-center px-2 mx-auto my-2 w-[95%] max-w-[90rem]">
      <div className="relative w-full overflow-hidden max-sm:h-32 max-h-64">
        {/* Render image or fallback if no image is provided */}
        {isValidImage ? (
          <Image
            src={image}
            alt={isValidTitle ? `${title} Image` : "Blog Header Image"}
            width={1500}
            height={500}
            className="object-cover object-right w-full h-full"
            priority
          />
        ) : (
          <div className="flex items-center justify-center w-full rounded-lg">
            <p className="text-center text-pretty">{t("noImageFound")}</p>
          </div>
        )}

        {/* Overlay for title and underline image */}
        <div className="absolute inset-0 flex flex-col justify-center gap-2 px-10 max-w-7xl">
          {isValidTitle && (
            <div className="absolute inset-0 flex flex-col justify-center gap-2 px-4 md:px-10 max-w-7xl">
              <AnimatedSection delay={0.3} direction="left">
                <h1 className="text-3xl font-bold text-black md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              </AnimatedSection>

              {/* Underline image below the title */}
              <Image
                src="/underline.png"
                alt="Underline"
                width={300}
                height={70}
                className="max-w-[50%]"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
