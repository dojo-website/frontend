import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogCard = ({ blog }) => {
  const t = useTranslations("home");
  const { locale } = useParams();
  return (
    <div className="flex flex-col h-full overflow-hidden text-white bg-black rounded-xl">
      <div className="flex-shrink-0 h-56">
        <Image
          src={blog?.blogs_page_image}
          alt={blog?.blogs_page_title}
          width={800}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-grow gap-2 p-4">
        <h4 className="text-lg font-bold">{blog?.blogs_page_title}</h4>
        <p className="mt-2 text-sm">
          {blog?.blog_sections[0]?.description.substring(0, 200)}...
        </p>
        <p className="py-2 mt-auto text-base text-center">
          <Link href={`${locale}/blog/${blog?.id}`} className="custom-btn">
            {t("readMore")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
