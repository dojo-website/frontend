import Image from "next/image";

const TitleSection = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center justify-center px-2 mx-auto my-2 max-w-7xl">
      <div className="relative w-full">
        <Image
          src={`${image}`}
          alt={`${title} Image`}
          width={2000}
          height={500}
          className="object-cover w-full rounded-lg"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-center gap-2 px-10 max-w-7xl">
          <h1 className="text-3xl font-bold text-black md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <Image
            src="/underline.png"
            alt="Underline"
            width={300}
            height={70}
            className="max-w-[50%]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
