import React from "react";
import Image from "next/image";

import { Product } from "@/app/page";

const Page = async ({ params }: { params: { id: string } }) => {
  const product: Product = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((res) => res.json());
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col  items-center p-2 border-2  ">
        <h1>{product.title}</h1>
        <Image
          className="w-[300px] h-[300px] "
          src={product.image}
          alt={product.description}
          width={150}
          height={150}
        />
        <h3>Description: </h3>
        <p className="text-left">{product.description}</p>
      </div>
    </div>
  );
};

export default Page;
