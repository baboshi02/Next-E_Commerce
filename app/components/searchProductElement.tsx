import React from "react";
import { ProductType } from "../lib/interfaces/ProductType";
import Link from "next/link";
import Image from "next/image";
const SearchProductElement = ({ Product }: { Product: ProductType }) => {
  return (
    <Link
      className="bg-secondaryColor dark:bg-DarkSecondaryColor  text-sm  overflow-hidden transition-colors duration-300  border min-h-[10vh] p-1 h-auto flex text-thirdColor hover:bg-gray-300 group hover:text-secondaryColor  dark:text-DarkThirdColor dark:hover:bg-gray-300 group dark:hover:text-DarkSecondaryColor"
      href={`/products/${Product.id}`}
    >
      <Image
        height={100}
        width={100}
        src={Product.image}
        alt="/"
        className="border border-primaryColor group-hover:border-secondaryColor"
      />

      {Product.title}
    </Link>
  );
};

export default SearchProductElement;
