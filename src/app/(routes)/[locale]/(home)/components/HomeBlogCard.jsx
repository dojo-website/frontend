import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const HomeBlogCard = ({ title, description, image, link }) => {
  const t = useTranslations();
  return (
    <div className="my-4 overflow-hidden bg-white rounded-xl">
      <div className="w-full h-44 md:h-56">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-col h-full gap-3 p-4 text-white bg-black lg:p-6">
        <h6 className="font-semibold text-center text-white">{title}</h6>
        <p className="font-light text-center text-white max-md:text-sm">
          {description}
        </p>
        <div className="flex justify-center">
          <Link href={link} className="my-1">
            <span className="text-sm font-medium uppercase custom-btn">
              {t("readMore")}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeBlogCard;
