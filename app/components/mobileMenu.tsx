import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import headerComponent from "../lib/interfaces/HeaderComponent";
import { ModeToggle } from "./ModeToggle";
const MobileNavBar = ({
  Items,
  path,
}: {
  Items: headerComponent[];
  path: string;
}) => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  return (
    <div className=" flex items-center gap-2 justify-end sm:hidden ">
      <IoMdMenu
        size={40}
        className={`hover:text-zinc-300 transition-colors z-20 hover:cursor-pointer  duration-200  ${isBtnActive ? "text-gray-400" : "text-thirdColor dark:text-DarkThirdColor"
          }`}
        onClick={() => setIsBtnActive(!isBtnActive)}
      />
      <div
        className={`absolute top-0 right-0 left-0 bottom-0 flex-col dark:bg-black bg-secondaryColor h-screen justify-center items-center gap-2  ${isBtnActive ? "flex" : "hidden"
          }`}
      >
        {Items.map((item) => {
          const isPath = path == item.link;
          return (
            <Link
              href={item.link}
              key={item.link}
              onClick={() => setIsBtnActive(!isBtnActive)}
              className={`hover:text-zinc-300 transition-colors duration-200 ${path == item.link ? "text-gray-400" : "text-thirdColor dark:text-DarkThirdColor"
                }`}
            >
              {item.component}
            </Link>
          );
        })}
        <ModeToggle />
      </div>
    </div>

  );
};

export default MobileNavBar;
