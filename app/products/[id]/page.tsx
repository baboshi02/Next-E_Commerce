import React from "react";
import Image from "next/image";

import { ProductType } from "@/app/page";

const Page = async ({ params }: { params: { id: string } }) => {
  let product: ProductType;
  try {
    product = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    ).then((res) => res.json());
  } catch (err: any) {
    console.log("Error: ", err);
    return <h1>Error: {err.message}</h1>;
  }
  return (
    <div className="flex justify-center items-center h-full text-left ">
      <div className=" items-center p-2    ">
        <h1 className="text-3xl text-center mb-5">{product.title}</h1>
        <Image
          className="w-[300px] h-[300px]  border-2 border-black "
          src={product.image}
          alt={product.description}
          width={150}
          height={150}
        />
        <div>
          <h3 className="text-lg">Description: </h3>
          <p className="text-primaryColor text-sm">{product.description}</p>
          <h3 className="text-lg">Price:</h3>
          <p className="text-primaryColor">{product.price} $</p>
          <h1>category: </h1>
          <p className="text-primaryColor"> {product.category.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
