"use client";
import React from "react";
import { ProductType } from "./page";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Product = ({ product }: { product: ProductType }) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col flex-nowrap  items-center p-2  hover:cursor-pointer group hover:text-secondaryColor hover:bg-primaryColor text-primaryColor transition duration-300 box-border max-h-min  overflow-hidden"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <Image
        src={product.image}
        alt={"item is" + product.title}
        width={150}
        height={150}
        className="w-[200px] h-[200px] border border-primaryColor group-hover:border-secondaryColor group-hover:w-[210px] group-hover:h-[210px] transition-all duration-500"
      />
      <p>{product.title}</p>
      <p className="text-lg text-black group-hover:text-gray-400">
        {product.price}$
      </p>
    </div>
  );
};

export default Product;
