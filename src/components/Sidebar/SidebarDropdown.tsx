import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define types for the items in the sidebar
type SidebarItem = {
  label: string;
  route: string;
};

interface SidebarDropdownProps {
  item: SidebarItem[]; // `item` should be an array of SidebarItem objects
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <>
      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
        {item.map((item, index) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                pathname === item.route ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
