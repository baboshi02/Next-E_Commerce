"use client";
import { ProductType } from "../lib/interfaces/ProductType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getProductCount } from "../lib/utils";
import { useEffect, useState } from "react";
const ProductElement = ({ product }: { product: ProductType }) => {
  const router = useRouter()
  const [count, setCount] = useState<number>()
  useEffect(() => {
    setCount(getProductCount(product.id))
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [product.id])
  return (
    <div onClick={() => router.push(`/products/${product.id}`)} className="flex flex-col   items-center justify-between p-2 hover:cursor-pointer   group dark:hover:text-DarkThirdColor dark:hover:bg-DarkPrimaryColor dark:text-DarkPrimaryColor hover:text-primaryColor hover:bg-thirdColor text-primaryColor transition duration-300 min-h-60 max-h-full   overflow-hidden">
      <Image src={product.image} alt={"item is" + product.title} width={150} height={150} className="w-[200px] h-[200px]  border dark:border-DarkPrimaryColor dark:group-hover:border-DarkSecondaryColor border-primaryColor group-hover:border-secondaryColor  transition-all duration-500" />
      <p>{product.title}</p>
      {Number(product.price).toFixed(2)}$
      <p className="text-lg  dark:text-DarkThirdColor dark:group-hover:text-DarkSecondaryColor text-thirdColor group-hover:text-secondaryColor transition duration-300">
        {count ? <>Count: {count}</> : ""}
      </p>
    </div>
  );
};
export default ProductElement;




