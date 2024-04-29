import React from "react";
import { ProductType } from "./page";
import Image from "next/image";
import { redirect } from "next/navigation";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <div className="flex flex-col  items-center p-2 border-black border-2 hover:cursor-pointer hover:bg-thirdColor  ">
        <h1>{product.title}</h1>
        <Image
          src={product.image}
          alt={product.description}
          width={150}
          height={150}
          className="w-[200px] h-[200px] "
          // onClick={() => redirect(`/products/${product.id}`)}
        />
      </div>
    </div>
  );
};

export default Product;
