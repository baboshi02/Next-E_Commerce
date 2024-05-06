import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import headerComponent from "../lib/interfaces/HeaderComponent";

const MobileMenu = ({
  Items,
  path,
}: {
  Items: headerComponent[];
  path: string;
}) => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  return (
    <div className="relative flex flex-col sm:hidden ">
      <IoMdMenu
        size={40}
        className={`hover:text-zinc-300 transition-colors hover:cursor-pointer  duration-200  ${
          isBtnActive ? "text-gray-400" : "text-thirdColor"
        }`}
        onClick={() => setIsBtnActive(!isBtnActive)}
      />
      <div
        className={`bg-secondaryColor border border-primaryColor h-auto p-1 right-0.5 absolute w-auto top-9 flex-col gap-1   ${
          isBtnActive ? "flex" : "hidden"
        }`}
      >
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
    </div>
  );
};

export default MobileMenu;
