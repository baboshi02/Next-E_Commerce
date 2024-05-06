"use client";
import Link from "next/link";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { usePathname } from "next/navigation";
import SearchBar from "./components/SearchBar";
import { IoMdMenu } from "react-icons/io";
interface headerComponent {
  component: React.ReactElement;
  link: string;
}

const Header = () => {
  const Items: headerComponent[] = [
    { component: <IoMdHome size={40} />, link: "/" },
    {
      component: <MdOutlineProductionQuantityLimits size={40} />,
      link: "/shoppingCart",
    },
  ];
  const path = usePathname();
  return (
    <header className="sticky top-0 z-10 bg-secondaryColor  rounded-sm border-b    border-primaryColor  shadow-md  p-2">
      <div className="sm:flex justify-between items-center gap-7 hidden">
        <div className="flex gap-2">
          {Items.map((item) => {
            const isPath = path == item.link;
            return (
              <Link
                href={item.link}
                key={item.link}
                className={`hover:text-zinc-300 transition-colors duration-200 ${
                  path == item.link ? "text-gray-400" : "text-thirdColor"
                }`}
              >
                {item.component}
              </Link>
            );
          })}
        </div>
        {path == "/" && <SearchBar />}
      </div>
      <IoMdMenu
        size={40}
        className="hover:text-zinc-300 transition-colors hover:cursor-pointer sm:hidden duration-200 ml-auto text-thirdColor"
      />
    </header>
  );
};

export default Header;
