import React from "react";
import Image from "next/image";
import { ProductType } from "@/app/lib/interfaces/ProductType";

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
  // To Create Loading Effect
  //await new Promise((res) => setTimeout(res, 5000));
  return (
    <div className="flex justify-center items-center h-full text-left ">
      <div className=" items-center p-2    ">
        <h1 className="text-3xl text-thirdColor text-center mb-5">
          {product.title}
        </h1>
        <Image
          className="w-[200px] h-[200px] md:h-[300px] md:w-[300px]  border-2 border-black "
          src={product.image}
          alt={product.description}
          width={150}
          height={150}
        />
        <div>
          <h3 className="text-lg text-thirdColor">Description: </h3>
          <p className="text-primaryColor text-sm">{product.description}</p>
          <h3 className="text-lg text-thirdColor">Price:</h3>
          <p className="text-primaryColor">{product.price} $</p>
          <h1 className="text-thirdColor">category: </h1>
          <p className="text-primaryColor"> {product.category.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
