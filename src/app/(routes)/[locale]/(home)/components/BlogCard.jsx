import Link from "next/link";
import React from "react";

const BlogCard = ({ title, description, image, link }) => {
  return (
    <div className="my-4 overflow-hidden bg-white rounded-xl">
      {/* Image Section */}
      <div className="w-full h-44 md:h-56">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col h-full gap-3 p-6 text-white bg-black">
        <h5 className="font-semibold text-center text-white">{title}</h5>
        <p className="font-light text-center text-white">{description}</p>
        <div className="flex justify-center">
          <Link href={link} className="my-1">
            <span className="text-sm font-medium uppercase custom-btn">
              leer más
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
