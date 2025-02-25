import Image from "next/image";
import React from "react";
import { heroImage } from "../../../../../../public";

const Slider = () => {
  return (
    <section className="flex flex-col items-center justify-center my-2">
      <Image src={heroImage} width={1000} height={1000} alt="Hero Image" className="w-[90%]" />
      <div className="flex flex-col max-w-5xl gap-4 my-10 text-center">
        <h1 className="my-2 font-bold">DOJO KIME</h1>
        <h4 className="font-bold text-primary">
          Escuela de Karate Tradicional Shotokan
          <br />
        </h4>
        <p className="max-w-4xl font-medium">
          Bienvenidos a Dojo KIME, un espacio dedicado al Karate Tradicional
          Shotokan inspirado en las enseñanzas del maestro Hidetaka Nishiyama.
          Aquí no solo perfeccionamos la técnica, sino que cultivamos la
          disciplina, el respeto y la armonía entre cuerpo, mente y espíritu.
          Nuestro enfoque sigue el karate como un camino marcial integral
          (budo), donde cada estudiante tiene la oportunidad de descubrir y
          desarrollar su mejor versión.
        </p>
      </div>
    </section>
  );
};

export default Slider;
