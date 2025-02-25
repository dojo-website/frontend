import React from "react";
import BlogCard from "./BlogCard";
import { blogData } from "@/utils/Mocks/Blogs";

const BlogsSection = () => {
  return (
    <section className="px-4 py-12 mx-auto text-black bg-white max-w-7xl">
      <div className="text-center">
        <h1 className="my-4 font-bold uppercase">De Nuestro Blog</h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-3">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
