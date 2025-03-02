"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/BreadCrumb";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getBlogs } from "@/services/blogs"; // Use the same function to fetch all blogs
import Loader from "@/components/Loader";

const Article = () => {
  const { locale, id } = useParams();
  const t = useTranslations();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogData, setBlogData] = useState([]); // For "More Articles" section

  // Fetch Specific blog data and blogs for the "More Articles" section
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogs();
        setBlogData(data || []);
        const selectedBlog = data.find((blog) => blog.id === parseInt(id));
        if (selectedBlog) {
          setBlog(selectedBlog);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const featuredImages = blog?.blog_images?.filter((image) => image.featured);
  const imageToShow =
    featuredImages?.length > 0
      ? featuredImages[0]?.image_url // Use the first featured image
      : blog?.blog_images[0]?.image_url; // Use the first image if no featured image is found

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  const featuredImage = blog?.blog_images?.find(
    (image) => image.featured
  )?.image_url;

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!blog) {
    return <p className="text-center">No blog found.</p>;
  }

  return (
    <div className="w-[90%] mx-auto">
      <div className="max-w-6xl mx-auto">
        {/* Blog Title */}
        <div className="inset-0 flex flex-col justify-center gap-2 w-[80%] my-6">
          <h1 className="font-bold text-black">{blog.title}</h1>
          <Image
            src="/underline.png"
            alt="Underline"
            width={250}
            height={50}
            className="w-3/4 max-w-[250px]"
          />
        </div>

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { id: 1, label: "Home", href: "/" },
            { id: 2, label: "Nuestro Blog", href: `/${locale}/blog` },
            {
              id: 3,
              label: blog.category,
              href: `/${locale}/blog?category=${blog.category}`,
            },
            { id: 4, label: blog.title, href: `#` },
          ]}
        />

        {/* Blog Title Image */}
        <Image
          src={imageToShow || "/favicon.svg"}
          width={1000}
          height={300}
          alt="Blog Image"
          className="object-cover w-full my-4 rounded-xl h-72"
        />

        {/* Blog Content */}
        <div className="relative -z-10">
          <div className="absolute right-0 w-56 -bottom-24">
            <Image
              src="/watermarks/watermark-3.png"
              className="w-full h-auto"
              width={200}
              height={200}
              alt="Watermark 3"
            />
          </div>
          <div className="relative max-w-5xl py-8 mx-auto">
            {blog?.blog_sections.map((section, index) => (
              <div key={section.id}>
                <h2 className="mt-4 uppercase">{section.title}</h2>
                <p className="mt-2 leading-relaxed">{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* More Articles Section */}
        <section className="flex flex-col items-center justify-center my-4">
          <h1 className="my-2 text-center uppercase">{t("moreArticles")}</h1>
          <div className="grid w-full grid-cols-1 gap-6 p-4 md:p-6 md:grid-cols-3">
            {blogData
              .filter((b) => b.id !== blog.id) //filter current blog
              .slice(0, 3)
              .map((relatedBlog) => (
                <Link
                  href={`/${locale}/blog/${relatedBlog.id}`}
                  key={relatedBlog.id}
                  className="h-full"
                >
                  <BlogCard blog={relatedBlog} />
                </Link>
              ))}
          </div>
          <Link href={`/${locale}/blog/`} className="uppercase custom-btn">
            {t("moreArticles")}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Article;
