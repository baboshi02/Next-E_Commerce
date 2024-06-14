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
import { SwitchDemo } from "./Switch";
import { MoonIcon } from "@radix-ui/react-icons"
import { ModeToggle } from "./ModeToggle";
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
    <header className="sticky top-0 z-10 bg-secondaryColor dark:bg-DarkSecondaryColor rounded-b-sm border-b-2 flex justify-end sm:block items-center gap-1  dark:border-b-DarkPrimaryColor  border-b-primaryColor  shadow-md  p-2">
      <div className="sm:flex justify-between items-center gap-7 hidden">
        <div className="flex gap-2">
          {Items.map(item => (
            <Link
              href={item.link}
              key={item.link}
              className={`hover:text-zinc-300 transition-colors duration-200 ${path == item.link ? "text-gray-400" : "text-thirdColor dark:text-DarkThirdColor"
                }`}
            >
              {item.component}
            </Link>
          )
          )}
        </div>
        {path == "/products" && <SearchBar />}
        {/* <SwitchDemo /> */}
        <ModeToggle />
      </div>
      <div>
        <MobileNavBar Items={Items} path={path} />
      </div>
    </header>
  );
};

export default NavBar;
