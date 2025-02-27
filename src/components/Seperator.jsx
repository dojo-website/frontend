import Image from "next/image";
import React, { Fragment } from "react";

const Seperator = () => {
  return (
    <Fragment>
      {/* Desktop & Tablet (Vertical Separator) */}
      <div className="items-center hidden w-5 h-full md:flex">
        <Image
          src="/seperator-vertical.png"
          width={30}
          height={240}
          alt="Separator"
          className="object-cover h-full"
          aria-hidden="true"
        />
      </div>
      {/* Mobile (Horizontal Separator) */}
      <div className="flex w-[70%] h-5 md:hidden">
        <Image
          src="/seperator-horizontal.png"
          width={240}
          height={30}
          alt="Separator"
          className="object-contain w-full"
          aria-hidden="true"
        />
      </div>
    </Fragment>
  );
};

export default Seperator;
