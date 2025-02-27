"use client";
import { Fragment, useState } from "react";
import { blogData } from "@/utils/Mocks/Data";
import BlogCard from "./_components/BlogCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import TitleSection from "@/components/TitleSection";
import Image from "next/image";

const categories = ["All", "Noticias", "Técnica", "Filosofía", "Historia"];
const blogsPerPage = 6;

const Article = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const { locale } = useParams();

  const filteredBlogs =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <Fragment>
      <TitleSection image="/title-img-blog.png" title="Nuestro Blog" />
      <div className="flex gap-3 px-6 mx-auto my-6 overflow-x-auto shadow-md md:shadow-none md:max-w-7xl md:overflow-visible no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 md:rounded-full md:border-gray-500 md:border font-bold font-roboto  whitespace-nowrap ${
              selectedCategory === category
                ? "border-b-2 border-black md:bg-black md:text-white "
                : " md:bg-white md:text-black"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <section className="relative p-6 mx-auto max-w-7xl">
        <div className="absolute bottom-6 right-0 w-56">
          <Image
            src="/watermarks/watermark-3.png"
            className="w-full h-auto"
            width={200}
            height={200}
            alt="Watermark 3"
          />
        </div>
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          {currentBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/${locale}/blog/${blog.id}`}
              className="h-full"
            >
              {/* Add h-full here */}
              <BlogCard {...blog} />
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="relative flex items-center justify-center gap-3 mt-6">
            <button
              disabled={currentPage === 1}
              className="p-2"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              ←
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 rounded-full font-roboto font-semibold ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-500"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              className="p-2"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              →
            </button>
          </div>
        )}
      </section>{" "}
    </Fragment>
  );
};

export default Article;
