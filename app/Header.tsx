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
    <header className="h-16 sticky top-4 bg-secondaryColor w-1/4 min-w-80 mx-auto rounded-full border  border-blue-600  shadow-md flex justify-center items-center gap-7 p-1">
      {Items.map((item) => (
        <Link
          href={item.link}
          key={item.link}
          className={`hover:text-zinc-300 transition-colors duration-200 ${
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
