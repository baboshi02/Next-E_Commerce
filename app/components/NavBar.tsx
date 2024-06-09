"use client";
import Link from "next/link";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import React from "react";
import { FaCommentDollar } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import headerComponent from "@/app/lib/interfaces/HeaderComponent";
import MobileNavBar from "./mobileMenu";
// TODO: Make night mode
const NavBar = () => {
  const Items: headerComponent[] = [
    { component: <IoMdHome size={40} />, link: "/" },
    {
      component: <MdOutlineProductionQuantityLimits size={40} />,
      link: "/products",
    },
    {
      component: <FaCommentDollar size={40} />,
      link: "/Cart",
    },
  ];
  const path = usePathname();
  return (
    <header className="sticky top-0 z-10 bg-secondaryColor  rounded-sm border-b flex justify-end sm:block    border-primaryColor  shadow-md  p-2">
      <div className="sm:flex justify-between items-center gap-7 hidden">
        <div className="flex gap-2">
          {Items.map(item => (
            <Link
              href={item.link}
              key={item.link}
              className={`hover:text-zinc-300 transition-colors duration-200 ${path == item.link ? "text-gray-400" : "text-thirdColor"
                }`}
            >
              {item.component}
            </Link>
          )
          )}
        </div>
        {path == "/products" && <SearchBar />}
      </div>
      <MobileNavBar Items={Items} path={path} />
    </header>
  );
};

export default NavBar;
