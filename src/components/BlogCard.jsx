import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogCard = ({ blog, isButton }) => {
  const { locale } = useParams();
  const t = useTranslations("home");

  // Format date string into DD.MM.YYYY format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Determine which image to display: prioritize featured image, fallback to the first image
  const featuredImages = blog?.blog_images?.filter((image) => image.featured);
  const imageToShow =
    featuredImages?.length > 0
      ? featuredImages[0]?.image_url
      : blog?.blog_images[0]?.image_url;

  return (
    <div className="flex flex-col h-full max-h-[500px] md:max-h-[500px] overflow-hidden text-white bg-black rounded-xl">
      {/* Image Section */}
      <div className="flex-shrink-0 h-56 md:h-52">
        <Image
          src={imageToShow || "/favicon.svg"} // Fallback image
          alt={blog?.title}
          width={800}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow gap-2 p-4 h-1/2">
        <h5 className="font-bold text-center font-notoSans line-clamp-2">
          {blog?.title}
        </h5>
        <p className="text-base text-center line-clamp-3">
          {blog.blog_sections[0]?.description.substring(0, 200)}
        </p>

        {!isButton ? (
          <p className="mt-auto text-base text-center text-primary">
            {formatDate(blog.created_at)}
          </p>
        ) : (
          <p className="py-2 mt-auto text-base text-center">
            <Link
              href={`${locale}/blog/${blog?.meta_title}`}
              className="custom-btn"
            >
              {t("readMore")}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
