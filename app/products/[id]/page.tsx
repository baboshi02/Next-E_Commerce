import React from "react";
import Image from "next/image";
import { ProductType } from "@/app/lib/interfaces/ProductType";
import AddtoStorageForm from "./AddToStorageForm";
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
    <div className="text-thirdColor dark:text-DarkThirdColor">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-center mb-5">
        {product.title}
      </h1>
      <div className="flex  items-center h-full text-left ">
        <div className=" items-center p-2    ">
          <Image
            className="w-[200px] h-[200px] md:h-[300px] md:w-[300px]  border-2 border-black "
            src={product.image}
            alt={product.description}
            width={150}
            height={150}
          />
          <div>
            <h3 className="text-lg ">Description: </h3>
            <p className="text-primaryColor dark:text-DarkPrimaryColor text-sm">{product.description}</p>
            <h3 className="text-lg ">Price:</h3>
            <p className="text-primaryColor dark:text-DarkPrimaryColor">{product.price} $</p>
            <h1 >category: </h1>
            <p className="text-primaryColor dark:text-DarkPrimaryColor"> {product.category.toUpperCase()}</p>
            <AddtoStorageForm product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;


