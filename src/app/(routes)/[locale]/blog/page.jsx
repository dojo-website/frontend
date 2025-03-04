"use client";
import { Fragment, useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import TitleSection from "@/components/TitleSection";
import { getBlogs, getBlogsHeader } from "@/services/blogs";
import Loader from "@/components/Loader";
import AnimatedSection from "@/components/animations/AnimatedSection";

const blogsPerPage = 9;

const Blogs = () => {
  const categories = [
    { id: "all", name: "All" },
    { id: "news", name: "Noticias" },
    { id: "technical", name: "Técnica" },
    { id: "philosophy", name: "Filosofía" },
    { id: "history", name: "Historia" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { locale } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [blogHeader, setBlogHeader] = useState(null);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");

  // Set the selected category based on the query parameter
  useEffect(() => {
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    }
  }, [categoryQuery]);

  // Fetch blog header
  useEffect(() => {
    const fetchBlogHeader = async () => {
      try {
        const header = await getBlogsHeader();
        if (header && header.length > 0) {
          setBlogHeader(header[0]);
        } else {
          setBlogHeader(null);
        }
      } catch (error) {
        console.error("Error fetching Header:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogHeader();
  }, []);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const data = await getBlogs(selectedCategory);
        setBlogData(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [selectedCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogData.length / blogsPerPage);

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
      <AnimatedSection direction="down">
        <TitleSection image={blogHeader?.image} title={blogHeader?.title} />
      </AnimatedSection>
      <div className="my-10">
        {/* Category Filter */}
        <AnimatedSection direction="top" delay={0.1}>
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
        </AnimatedSection>

        <section className="p-6 mx-auto max-w-7xl">
          {loading ? (
            <div className="flex justify-center items-center min-h-[50vh]">
              <Loader />
            </div>
          ) : currentBlogs.length === 0 ? (
            <div className="flex justify-center items-center min-h-[50vh]">
              <h5 className="font-bold text-center text-primary">
                No se encontró ningún registro.
              </h5>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {currentBlogs.map((blog) => (
                <AnimatedSection key={blog.id} direction="left" delay={0.2}>
                  <Link href={`/${locale}/blog/${blog.id}`}>
                    <BlogCard blog={blog} />
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}

          {totalPages > 1 && currentBlogs.length > 0 && !loading && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                disabled={currentPage === 1}
                className="p-2 disabled:opacity-50"
                onClick={() => {
                  setCurrentPage((prev) => prev - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src="/arrow-dark.svg"
                  alt="Previous"
                  className="rotate-180"
                />
              </button>

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

              <button
                disabled={currentPage === totalPages}
                className="p-2 disabled:opacity-50"
                onClick={() => {
                  setCurrentPage((prev) => prev + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img src="/arrow-dark.svg" alt="Next" />
              </button>
            </div>
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default Blogs;
