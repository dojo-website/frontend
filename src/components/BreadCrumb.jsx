import Link from "next/link";

const BreadCrumb = ({ items }) => {
  return (
    <nav className="text-sm text-gray-500">
      <ul className="flex items-center overflow-auto">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-base font-roboto whitespace-nowrap"
          >
            {index !== 0 && <span className="mx-2">{">"}</span>}
            {index === items.length - 1 ? (
              <span className="font-bold text-black ">{item.label}</span>
            ) : (
              <Link href={item.href} className="capitalize hover:underline">
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
