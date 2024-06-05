"use client";
import { ProductType } from "../lib/interfaces/ProductType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CartInterface from "../lib/interfaces/CartInterface";
import { getProductCount } from "../lib/utils";
const ProductElement = ({ product }: { product: ProductType }) => {
  const router = useRouter()
  const count = getProductCount(product.id)
  return (
    <div onClick={() => router.push(`/products/${product.id}`)} className="flex flex-col   items-center justify-between p-2 hover:cursor-pointer   group hover:text-thirdColor hover:bg-primaryColor text-primaryColor transition duration-300 min-h-60 max-h-full   overflow-hidden">
      <Image src={product.image} alt={"item is" + product.title} width={150} height={150} className="w-[200px] h-[200px]  border border-primaryColor group-hover:border-secondaryColor  transition-all duration-500" />
      <p>{product.title}</p>
      {product.price}$
      <p className="text-lg  text-thirdColor group-hover:text-secondaryColor transition duration-300">
        {count ? <>Count: {count}</> : ""}
      </p>
    </div>
  );
};
// TODO: Format price correctly to 2 decimals
export default ProductElement;
