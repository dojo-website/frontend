import Image from "next/image";
import React from "react";

const Nosotros = () => {
  return (
    <div className="flex flex-col items-center justify-center my-2">
      <div className="relative w-[90%]">
        {/* Image */}
        <Image
          height={500}
          width={2000}
          alt="Nosotros Image"
          className="w-full"
          src="/title-img-nosotros.png"
        />
        {/* Title Positioned on Image */}
        <h2 className="absolute inset-0 flex items-center justify-start text-3xl font-bold text-black">
          Nosotros
        </h2>
        
      </div>
    </div>
  );
};

export default Nosotros;
