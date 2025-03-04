import Image from "next/image";
import AnimatedSection from "./animations/AnimatedSection";

const TitleSection = ({ title, image }) => {
  const isValidImage =
    image && typeof image === "string" && image.trim() !== "";
  const isValidTitle =
    title && typeof title === "string" && title.trim() !== "";

  return (
    <div className="flex flex-col items-center justify-center px-2 mx-auto my-2 max-w-7xl">
      <div className="relative w-full">
        {isValidImage ? (
          <Image
            src={image}
            alt={isValidTitle ? `${title} Image` : "Blog Header Image"}
            width={2000}
            height={500}
            className="object-cover w-full rounded-lg"
            priority
          />
        ) : (
          <div className="flex items-center justify-center w-full h-64 bg-gray-200 rounded-lg">
            <p className="text-gray-500">No image available</p>
          </div>
        )}

        <div className="absolute inset-0 flex flex-col justify-center gap-2 px-10 max-w-7xl">
          {isValidTitle && (
            <div className="absolute inset-0 flex flex-col justify-center gap-2 px-10 max-w-7xl">
              <AnimatedSection delay={0.3} direction="left">
                <h1 className="text-3xl font-bold text-black md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              </AnimatedSection>

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
