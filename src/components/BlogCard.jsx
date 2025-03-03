import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogCard = ({ blog, isButton }) => {
  const { locale } = useParams();
  const t = useTranslations("home");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits for day
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure two digits for month
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const featuredImages = blog?.blog_images?.filter((image) => image.featured);
  const imageToShow =
    featuredImages?.length > 0
      ? featuredImages[0]?.image_url // Use the first featured image
      : blog?.blog_images[0]?.image_url; // Use the first image if no featured image is found

  return (
    <div className="flex flex-col h-full overflow-hidden text-white bg-black rounded-xl">
      <div className="flex-shrink-0 h-56">
        <Image
          src={imageToShow || "/favicon.svg"} // Use a fallback image if no featured image is found
          alt={blog?.title}
          width={800}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-grow gap-2 p-4">
        <h4 className="text-lg font-bold">{blog?.title}</h4>
        <p className="mt-2 text-sm">
          {blog.blog_sections[0]?.description.substring(0, 200)}...
        </p>
        {!isButton ? (
          <p className="mt-auto text-base text-center text-primary">
            {formatDate(blog.created_at)}
          </p>
        ) : (
          <p className="py-2 mt-auto text-base text-center">
            <Link href={`${locale}/blog/${blog?.id}`} className="custom-btn">
              {t("readMore")}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
