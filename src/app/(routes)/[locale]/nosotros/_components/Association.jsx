import Image from "next/image";
import React from "react";

const Association = () => {
  return (
    <div className="w-full my-16">
      <section className="flex flex-col w-[90%] lg:w-full items-center max-w-5xl gap-6 mx-auto text-center">
        <h1 className="font-bold uppercase">Asociación</h1>

        <div className="max-w-4xl">
          <p className="leading-relaxed text-gray-700">
            KIME Dojo es parte de la{" "}
            <span className="font-semibold">Budo Karate Association</span>, una
            organización fundada por{" "}
            <span className="font-semibold">Sensei Avi Rokah, 8° Dan</span>y
            alumno directo de{" "}
            <span className="font-semibold">Sensei Hidetaka Nishiyama</span>. La
            asociación tiene como propósito principal ofrecer una plataforma
            para la preservación y desarrollo del Karate Budo, basado en los
            principios enseñados por Sensei Nishiyama.
          </p>
        </div>

        <Image
          src="/budo-karate-art.png"
          width={250}
          height={250}
          alt="Budo Karate Art"
          className="object-contain"
        />
      </section>
    </div>
  );
};

export default Association;
