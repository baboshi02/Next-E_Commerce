import React from "react";
import { ProductType } from "../lib/interfaces/ProductType";
import Link from "next/link";
import Image from "next/image";
const SearchProductElement = ({ Product }: { Product: ProductType }) => {
  return (
    <Link
      className="bg-secondaryColor text-sm  overflow-hidden  border min-h-[10vh] p-1 h-auto flex text-thirdColor hover:bg-gray-300 group hover:text-secondaryColor"
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
