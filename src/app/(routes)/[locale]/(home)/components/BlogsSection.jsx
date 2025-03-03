"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Loader from "@/components/Loader";
import { getBlogs } from "@/services/blogs";
import BlogCard from "@/components/BlogCard";

const BlogsSection = () => {
  const [blogData, setBlogData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await getBlogs();
        setBlogData(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);

  const t = useTranslations("home");
  return (
    <section className="relative flex flex-col items-center justify-center py-10 overflow-hidden bg-white">
      <div className="absolute w-32 select-none max-md:right-0 md:left-0 md:ml-10 md:w-56 top-5">
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
        {loading ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : (
          <div className="grid w-full grid-cols-1 gap-6 p-6 mt-10 md:grid-cols-3">
            {blogData.slice(0, 3).map((blog) => (
              <BlogCard key={blog?.id} blog={blog} isButton={true} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
