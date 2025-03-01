"use client";
import { Fragment, useState } from "react";
import { blogData } from "@/utils/Mocks/Data";
import BlogCard from "./_components/BlogCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import TitleSection from "@/components/TitleSection";

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

  const getPaginationRange = () => {
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);

    if (currentPage === 1) {
      end = Math.min(totalPages, 3);
    } else if (currentPage === totalPages) {
      start = Math.max(1, totalPages - 2);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <Fragment>
      <TitleSection image="/title-img-blog.png" title="Nuestro Blog" />
      <div className="my-10">
        {/* Category Filter */}
        <div className="flex gap-3 px-6 mx-auto overflow-x-auto shadow-md md:shadow-none md:max-w-7xl md:overflow-visible no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 md:rounded-full md:border-gray-500 md:border font-bold font-roboto whitespace-nowrap ${
                selectedCategory === category
                  ? "border-b-2 border-black md:bg-black md:text-white"
                  : "md:bg-white md:text-black"
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

        {/* Blog Cards */}
        <section className="p-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {currentBlogs.map((blog) => (
              <Link key={blog.id} href={`/${locale}/blog/${blog.id}`}>
                <BlogCard {...blog} />
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-6">
              {/* Previous Button */}
              <button
                disabled={currentPage === 1}
                className="p-2 disabled:opacity-50"
                onClick={() => {
                  setCurrentPage((prev) => prev - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img src="/arrow-dark.svg" className="rotate-180" />
              </button>

              {/* Dynamic Pagination Buttons */}
              {getPaginationRange().map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-full border-2 font-roboto font-semibold ${
                    currentPage === page
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-[#9C9C9C]"
                  }`}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                disabled={currentPage === totalPages}
                className="p-2 disabled:opacity-50"
                onClick={() => {
                  setCurrentPage((prev) => prev + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img src="/arrow-dark.svg" />
              </button>
            </div>
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default Article;
