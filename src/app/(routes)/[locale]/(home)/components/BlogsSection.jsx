import React from "react";
import { blogData } from "@/utils/Mocks/Data";
import Image from "next/image";
import HomeBlogCard from "./HomeBlogCard";
import { useTranslations } from "next-intl";

const BlogsSection = () => {
  const t = useTranslations("home");
  return (
    <section className="relative flex flex-col items-center justify-center py-10 overflow-hidden bg-white">
      <div className="absolute w-32 max-md:right-0 md:left-0 md:ml-10 md:w-56 top-5">
        <Image
          src="/watermarks/watermark-3.png"
          className="w-full h-auto"
          width={200}
          height={200}
          alt="Watermark 1"
        />
      </div>
      <div className="relative max-w-7xl">
        <div className="text-center">
          <h1 className="my-4 uppercase">{t("fromOurBlog")}</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-6 mt-10 md:grid-cols-3">
          {blogData.slice(0, 3).map((blog) => (
            <HomeBlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
