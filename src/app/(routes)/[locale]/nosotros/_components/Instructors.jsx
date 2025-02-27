import Seperator from "@/components/Seperator";
import { instructors } from "@/utils/Mocks/Data";
import Image from "next/image";
import React, { Fragment } from "react";

const Instructors = () => {
  return (
    <div className="flex flex-col items-center my-16">
      <section className="relative flex flex-col justify-center w-[90%] lg:w-full mx-auto max-w-7xl">
        <div className="absolute top-0 right-0 w-56">
          <Image
            src="/watermarks/watermark-3.png"
            className="w-full h-auto"
            width={200}
            height={200}
            alt="Watermark 3"
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="uppercase font-notoSans">Instructores</h1>
          <p className="mt-4 text-lg">
            En KIME Dojo, nuestros instructores han tenido el privilegio de
            entrenar con el maestro Hidetaka Nishiyama y sus alumnos directos en
            múltiples ocasiones, tanto en Chile como en Estados Unidos. Con más
            de 30 años de práctica continua y perfeccionamiento, transmiten las
            enseñanzas del Karate Tradicional Shotokan con dedicación y respeto,
            guiando a cada estudiante en su desarrollo técnico, físico y
            personal.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center max-w-5xl gap-5 mx-auto mt-10 md:flex-row md:gap-10">
          {instructors.map((instructor, index) => (
            <Fragment key={instructor.id}>
              <InstructorCard {...instructor} />
              {index !== instructors.length - 1 && <Seperator />}
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Instructors;
const InstructorCard = ({ image, name, designation, description }) => {
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
