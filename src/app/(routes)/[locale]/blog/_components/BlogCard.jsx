import Image from "next/image";

const BlogCard = ({ image, title, description, createdAt }) => {
  return (
    <div className="flex flex-col overflow-hidden text-white bg-black rounded-xl">
      <div className="h-56">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h4 className="font-bold">{title}</h4>
        <p className="mt-2">{description}</p>
        <p className="text-sm text-center text-primary">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
