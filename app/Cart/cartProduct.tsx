import { ProductType } from "../lib/interfaces/ProductType";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useFetch } from "../hooks/useFetch";
interface CartProps {
  productId: string;
  count: number
}

const CartProductElement = ({ productId, count }: CartProps) => {
  const { response, isError } = useFetch<ProductType>(`https://fakestoreapi.com/products/${productId}`)
  const product = response
  return (
    <>
      {
        !isError ? product &&
          <Link href={`/products/${product.id}`} className="flex flex-col flex-nowrap  items-center p-2  hover:cursor-pointer group hover:text-thirdColor hover:bg-primaryColor text-primaryColor transition duration-300 min-h-60 max-h-full   overflow-hidden">
            <Image src={product.image} alt={"item is" + product.title} width={150} height={150} className="w-[200px] h-[200px]  border border-primaryColor group-hover:border-secondaryColor  transition-all duration-500" />
            <p>{product.title}</p>
            {product.price}$
            <p className="text-lg  text-thirdColor group-hover:text-secondaryColor transition duration-300">
            </p>
            <h1>Count: {count}</h1>
          </Link> : <h1>Error</h1>
      }

    </>
  )

}
export default CartProductElement
