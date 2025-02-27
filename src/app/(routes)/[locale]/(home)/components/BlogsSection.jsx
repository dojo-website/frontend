import React from "react";
import { blogData } from "@/utils/Mocks/Data";
import Image from "next/image";
import HomeBlogCard from "./HomeBlogCard";
import { useTranslations } from "next-intl";

const BlogsSection = () => {
  const t = useTranslations("home");
  return (
    <section className="relative flex flex-col items-center justify-center py-10 my-10 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-64 ml-10">
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
          <h1 className="my-4 font-bold uppercase">{t("fromOurBlog")}</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-3">
          {blogData.slice(0, 3).map((blog) => (
            <HomeBlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
