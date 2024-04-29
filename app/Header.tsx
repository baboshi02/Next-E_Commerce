"use client";
import Link from "next/link";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { usePathname } from "next/navigation";
interface headerComponent {
  component: React.ReactElement;
  link: string;
}

const Header = () => {
  const Items: headerComponent[] = [
    { component: <IoMdHome size={30} />, link: "/" },
    {
      component: <MdOutlineProductionQuantityLimits size={30} />,
      link: "/shoppingCart",
    },
  ];
  const path = usePathname();
  return (
    <header className="h-16   bg-transparent border-primaryColor border-b-2 rounded-md shadow-md flex justify-center items-center gap-7 p-1">
      {Items.map((item) => (
        <Link
          href={item.link}
          className={`hover:text-thirdColor  transition-colors duration-200 ${
            path == item.link ? "text-gray-400" : "text-primaryColor"
          }`}
        >
          {item.component}
        </Link>
      ))}
    </header>
  );
};

export default Header;
