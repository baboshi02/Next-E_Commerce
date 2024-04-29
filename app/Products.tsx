"use client";
import React from "react";
import { ProductType } from "./page";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Product = ({ product }: { product: ProductType }) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col  items-center p-2 border-black border-2 hover:cursor-pointer hover:bg-thirdColor transition duration-300 overflow-hidden"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <Image
        src={product.image}
        alt={product.description}
        width={150}
        height={150}
        className="w-[200px] h-[200px] "
      />
      <p>{product.title}</p>
    </div>
  );
};

export default Product;
