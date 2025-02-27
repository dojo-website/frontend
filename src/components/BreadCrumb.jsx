import Link from "next/link";

const BreadCrumb = ({ items }) => {
  return (
    <nav className="text-sm text-gray-500">
      <ul className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-lg font-roboto">
            {index !== 0 && <span className="mx-2">{">"}</span>}
            {index === items.length - 1 ? (
              <span className="font-bold text-black"> {item.label}</span>
            ) : (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
