import Image from "next/image";

const BlogCard = ({ image, title, description, createdAt }) => {
  return (
    <div className="flex flex-col overflow-hidden text-white bg-black rounded-xl h-full">
      <div className="h-56 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={800}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-2 p-4 flex-grow">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="mt-2 text-sm">{description}</p>
        <p className="text-base text-center text-primary mt-auto">
          {new Date(createdAt)
            .toISOString()
            .split("T")[0]
            .split("-")
            .reverse()
            .join(".")}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
