"use client";
import { Fragment, useEffect, useState } from "react";
import { categories } from "@/utils/Mocks/Data";
import BlogCard from "./_components/BlogCard";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import TitleSection from "@/components/TitleSection";
import { getBlogs } from "@/services/blogs";
import Loader from "@/components/Loader";

const blogsPerPage = 9;

const Article = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { locale } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");

  // Set the selected category based on the query parameter
  useEffect(() => {
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    }
  }, [categoryQuery]);

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const filteredBlogs =
    selectedCategory === "all"
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
              key={category.id}
              className={`px-6 py-2 md:rounded-full md:border-gray-500 md:border font-bold font-roboto whitespace-nowrap ${
                selectedCategory === category.id
                  ? "border-b-2 border-black md:bg-black md:text-white"
                  : "md:bg-white md:text-black"
              }`}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <section className="p-6 mx-auto max-w-7xl">
          {loading ? (
            <div className="text-center">
              <Loader />
            </div>
          ) : currentBlogs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {currentBlogs.map((blog) => (
                <Link key={blog.id} href={`/${locale}/blog/${blog.id}`}>
                  <BlogCard blog={blog} />
                </Link>
              ))}
            </div>
          ) : (
            <h5 className="font-bold text-center text-primary">
              No blogs found.
            </h5>
          )}

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
                <img src="/arrow-dark.svg" alt="arrow" className="rotate-180" />
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
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                disabled={currentPage === totalPages}
                className="p-2 disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                <img src="/arrow-dark.svg" alt="arrow" />
              </button>
            </div>
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default Article;
