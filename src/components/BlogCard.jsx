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
    <div className="flex flex-col h-full overflow-hidden text-white bg-black rounded-xl">
      <div className="flex-shrink-0 h-56">
        <Image
          src={imageToShow || "/favicon.svg"} // Fallback to a default image if no image is available
          alt={blog?.title}
          width={800}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-grow gap-2 p-4">
        <h4 className="text-lg font-bold">{blog?.title}</h4>
        <p className="mt-2 text-sm">
          {blog.blog_sections[0]?.description.substring(0, 200)}...{" "}
          {/* Display only the first 200 characters of the description */}
        </p>
        {!isButton ? (
          // Display the creation date if `isButton` is false
          <p className="mt-auto text-base text-center text-primary">
            {formatDate(blog.created_at)}
          </p>
        ) : (
          // Display a "Read More" button if `isButton` is true
          <p className="py-2 mt-auto text-base text-center">
            <Link href={`${locale}/blog/${blog?.slug}`} className="custom-btn">
              {t("readMore")}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
