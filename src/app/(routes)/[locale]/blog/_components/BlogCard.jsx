import Image from "next/image";

const BlogCard = ({ blog }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits for day
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure two digits for month
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

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
        <p className="mt-auto text-base text-center text-primary">
          {formatDate(blog?.created_at)}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
