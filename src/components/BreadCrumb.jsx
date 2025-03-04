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
            {/* Add a separator (">") between breadcrumb items, except for the first item */}
            {index !== 0 && <span className="mx-2">{">"}</span>}

            {/* Render the last item as plain text (non-clickable) */}
            {index === items.length - 1 ? (
              <span className="font-bold text-black ">{item.label}</span>
            ) : (
              // Render other items as clickable links
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
