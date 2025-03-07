"use client";
import { Fragment, useEffect, useState } from "react";
import Breadcrumb from "@/components/BreadCrumb";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getBlogs } from "@/services/blogs";
import Loader from "@/components/Loader";
import Head from "next/head";

const Article = () => {
  const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

  const { locale, slug } = useParams(); // ✅ Updated to use `slug`
  const t = useTranslations();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogs();
        setBlogData(data || []);
        const selectedBlog = data.find((blog) => blog.meta_title === slug); // ✅ Match by meta_title
        if (selectedBlog) {
          setBlog(selectedBlog);
        } else {
          setError("No se encontró ningún registro.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);
  
  const featuredImages = blog?.blog_images?.filter((image) => image.featured);
  const imageToShow =
    featuredImages?.length > 0
      ? featuredImages[0]?.image_url
      : blog?.blog_images[0]?.image_url;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <h5 className="font-bold text-center text-primary">Error: {error}</h5>
      </div>
    );
  }
  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <h5 className="font-bold text-center text-primary">
          No se encontró ningún registro.
        </h5>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        {/* Meta Title */}
        <title>{blog?.meta_title || blog?.title}</title>
        <meta name="title" content={blog?.meta_title || blog?.title} />

        {/* Meta Description */}
        <meta
          name="description"
          content={
            blog?.meta_description || "Default meta description for the blog."
          }
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${websiteDomain}/${locale}/blog/${blog?.slug}`}
        />
        <meta property="og:title" content={blog?.meta_title || blog?.title} />
        <meta
          property="og:description"
          content={
            blog?.meta_description || "Default meta description for the blog."
          }
        />
        <meta
          property="og:image"
          content={imageToShow || `${websiteDomain}/default-image.png`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${websiteDomain}/${locale}/blog/${blog?.slug}`}
        />
        <meta
          property="twitter:title"
          content={blog?.meta_title || blog?.title}
        />
        <meta
          property="twitter:description"
          content={
            blog?.meta_description || "Default meta description for the blog."
          }
        />
        <meta
          property="twitter:image"
          content={imageToShow || `${websiteDomain}/default-image.png`}
        />
      </Head>

      <div className="w-[90%] mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="inset-0 flex flex-col justify-center gap-2 w-[80%] my-6">
            <h1 className="font-bold text-black">{blog.title}</h1>
            <Image
              src="/underline.png"
              alt="Underline"
              width={1000}
              height={200}
              className="w-3/4 max-w-[250px]"
            />
          </div>

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
          {/* Blog title Image */}
          <Image
            src={imageToShow || "/favicon.svg"}
            width={1000}
            height={300}
            alt="Blog Image"
            className="object-cover w-full my-4 rounded-xl h-72"
          />

          <div className="relative -z-10">
            {/* Watermarks */}
            <div className="absolute right-0 hidden select-none w-44 lg:block -bottom-24">
              <Image
                src="/watermarks/watermark-3.png"
                className="w-full h-auto "
                width={200}
                height={200}
                alt="Watermark 3"
              />
            </div>
            {/* Main BLog Content */}
            <article className="relative min-h-[50vh] max-w-5xl py-8 mx-auto">
              {blog?.blog_sections.map((section) => (
                <div key={section.id} className="relative">
                  <div className="absolute top-0 right-0 block w-32 select-none lg:hidden">
                    <Image
                      src="/watermarks/watermark-1.png"
                      className="w-full h-auto "
                      width={200}
                      height={200}
                      alt="Watermark 3"
                    />
                  </div>
                  <div className="relative">
                    <h2 className="mt-4 uppercase">{section.title}</h2>
                    <p className="mt-2 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              ))}
            </article>
          </div>

          {/* More Blogs */}
          <section className="flex flex-col items-center justify-center my-4">
            <h1 className="my-2 text-center uppercase">{t("moreArticles")}</h1>
            <div className="grid w-full grid-cols-1 gap-6 p-4 md:p-6 md:grid-cols-3">
              {blogData
                .filter((b) => b.meta_title !== slug) // ✅ Filter out current blog using meta_title
                .slice(0, 3)
                .map((relatedBlog) => (
                  <Link
                    href={`/${locale}/blog/${relatedBlog.meta_title}`} // ✅ Use meta_title in URL
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
    </Fragment>
  );
};

export default Article;
