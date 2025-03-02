import Seperator from "@/components/Seperator";
import { instructors } from "@/utils/Mocks/Data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { Fragment } from "react";

const Instructors = ({
  instructor_title,
  instructor_description,
  instructors,
}) => {
  const t = useTranslations("nosotros.instructors");
  return (
    <div className="flex flex-col items-center">
      <section className="relative flex flex-col justify-center mx-auto lg:w-full max-w-7xl">
        <div className="absolute w-full h-full">
          <Image
            src="/watermarks/watermark-3.png"
            className="absolute top-0 left-0 w-56 h-auto select-none md:w-64 md:left-auto md:right-0"
            width={200}
            height={200}
            alt="Watermark 3"
          />
        </div>
        <div className="relative  w-[90%] my-16 mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="uppercase font-notoSans">{instructor_title}</h1>
            <p className="mt-4 text-lg">{instructor_description}</p>
          </div>

          <div className="flex flex-col items-center justify-center max-w-5xl gap-5 mx-auto mt-10 md:flex-row md:gap-10">
            {instructors.map((instructor, index) => (
              <Fragment key={instructor.id}>
                <InstructorCard {...instructor} />
                {index !== instructors.length - 1 && <Seperator />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
const InstructorCard = ({ name, designation, description, image }) => {
  return (
    <div className="flex flex-col items-center space-y-3 text-center">
      <div className="p-1 border-2 rounded-full border-primary size-36">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm font-semibold font-roboto text-primary">
          {designation}
        </p>
      </div>
      <p className="text-base font-semibold leading-tight">{description}</p>
    </div>
  );
};
