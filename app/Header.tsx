import Link from "next/link";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import React from "react";
import { IoMdHome } from "react-icons/io";
interface headerComponent {
  component: React.ReactElement;
  link: string;
}

const Header = () => {
  const Items: headerComponent[] = [
    { component: <IoMdHome size={30} />, link: "/" },
    {
      component: <MdOutlineProductionQuantityLimits size={30} />,
      link: "/products",
    },
  ];

  return (
    <header className="h-16 w-full  bg-primaryColor flex justify-end items-center gap-2 p-1">
      {Items.map((item) => (
        <Link
          href={item.link}
          className="hover:text-secondaryColor transition-colors duration-200 "
        >
          {item.component}
        </Link>
      ))}
    </header>
  );
};

export default Header;
