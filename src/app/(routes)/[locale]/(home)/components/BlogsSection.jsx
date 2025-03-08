"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Loader from "@/components/Loader";
import { getBlogs } from "@/services/blogs";
import BlogCard from "@/components/BlogCard";
import AnimatedSection from "@/components/animations/AnimatedSection";

const BlogsSection = () => {
  const [blogData, setBlogData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await getBlogs();
        // Set the blog data if available, otherwise assign an empty array
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
      {/* Watermarks */}
      <div className="absolute w-full mx-auto max-md:right-0 md:left-0 md:ml-10 top-5 max-w-7xl">
        <Image
          src="/watermarks/watermark-3.png"
          className="w-32 h-auto md:w-56"
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
        ) : blogData.length === 0 ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <h5 className="font-bold text-center text-primary">
              No se encontró ningún registro.
            </h5>
          </div>
        ) : (
          // Display blogs in a grid format
          <div className="grid w-full grid-cols-1 gap-6 p-6 mt-10 md:grid-cols-3">
            {blogData.slice(0, 3).map((blog, index) => (
              <AnimatedSection
                key={blog?.id}
                direction="left"
                delay={0.2 * index}
              >
                <BlogCard blog={blog} isButton={true} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
