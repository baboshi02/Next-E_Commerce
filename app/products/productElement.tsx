"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { ProductType } from "../lib/interfaces/ProductType";
import { FaInfoCircle } from "react-icons/fa";
import AddToStorageButton from "@/app/components/addToStorageButton"
import Image from "next/image";
import ToolTipComponent from "../components/toolTipComponent";
const ProductElement = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex flex-col flex-nowrap  items-center p-2  hover:cursor-pointer group hover:text-thirdColor hover:bg-primaryColor text-primaryColor transition duration-300 min-h-60 max-h-full   overflow-hidden">
      <Image src={product.image} alt={"item is" + product.title} width={150} height={150} className="w-[200px] h-[200px]  border border-primaryColor group-hover:border-secondaryColor  transition-all duration-500" />
      <div className="flex gap-3  transition duration-200">
        <ToolTipComponent trigger={
          <Link href={`/products/${product.id}`} className={`${buttonVariants({ variant: "link" })} text-thirdColor hover:text-gray-600`}  >
            <FaInfoCircle size={25} />
          </Link>
        }
          content="Info Page"
        />
        <AddToStorageButton product={product} />
      </div>
      <p>{product.title}</p>
      {product.price}$
      <p className="text-lg  text-thirdColor group-hover:text-secondaryColor transition duration-300">
      </p>
    </div>
  );
};
export default ProductElement;
