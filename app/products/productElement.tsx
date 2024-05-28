"use client";
import Link from "next/link";
import { ProductType } from "../lib/interfaces/ProductType";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { addProductStorage } from "../lib/utils";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const ProductElement = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex flex-col flex-nowrap  items-center p-2  hover:cursor-pointer group hover:text-thirdColor hover:bg-primaryColor text-primaryColor transition duration-300 min-h-60 max-h-full   overflow-hidden"> <Image src={product.image} alt={"item is" + product.title} width={150} height={150} className="w-[200px] h-[200px]  border border-primaryColor group-hover:border-secondaryColor  transition-all duration-500"
    />
      <p>{product.title}</p>
      {product.price}$
      <p className="text-lg  text-thirdColor group-hover:text-secondaryColor transition duration-300">
      </p>
      <div className="flex gap-3  transition duration-200">
        <Link href={`/products/${product.id}`}>
          <FaInfoCircle size={20} />
        </Link>
        <MdOutlineProductionQuantityLimits
          size={20}
          onClick={() => addProductStorage(product.id)}
        />
      </div>
    </div>
  );
};
export default ProductElement;
